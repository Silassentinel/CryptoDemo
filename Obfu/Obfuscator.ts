import { Creator } from "../TheCreator/Creator";

const Obfuscator = (text: string, location: string, encrypt:boolean ): string => 
{
    let temp: string;
    let tempArr: string[];
    console.log(location);
    temp = text;
    tempArr = temp.split(' ')
    .map(element => element.toLocaleLowerCase())
    .map(element =>
    {
        element = element.replace('a', "4");
        element = element.replace("e", "3");
        element = element.replace("i", "1");
        element = element.replace("t", "7");
        element = element.replace("l", "!");
        element = element.replace("b", "8");
        element = element.replace("w", "vv");
        element = element.replace("h", "#");
        element = element.replace("o", "0");
        element = element.replace("g", "9");
        element = element.replace("s", "5");
        element = element.replace("m", "nn");
        element = element.replace("z", "2");
        // encrypt here
        if(encrypt)
        {
            if(location.length !== 0 && location !== " "  || location !== "" )
            {
                element = new Creator().encryptStringWithRsaPublicKey(element,location)
            }
            else element = new Creator().encryptStringWithRsaPublicKey(element,"./public.pem")
        }
        return element;
    });
    temp = tempArr.reverse().join('_');
    return temp;
};

export default Obfuscator;