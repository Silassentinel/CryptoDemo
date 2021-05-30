import { Creator } from "../TheCreator/Creator";

const Obfuscator = (text: string, location: string): string => 
{
    let temp: string;
    //let tempWordArray: string [];
    let tempArr: string[];
    let wordCount : number = 0;
    temp = text;
    tempArr = temp.split(' ');
    // tempArr = tempArr.filter(element => { if (element !== " ") { return element; } else { ++wordCount;
    //     return}; });
    tempArr = tempArr.map(element => element.toLocaleLowerCase());
    tempArr = tempArr.map(element =>
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
        if(location.length !== 0 && location !== " "  || location !== "" )
        {
            element = new Creator().encryptStringWithRsaPublicKey(element,location)
        }
        else element = new Creator().encryptStringWithRsaPublicKey(element,"./public.pem")
        return element;
    });
    temp = tempArr.reverse().join('_');
    console.log(wordCount)
    //temp = temp.replace(',', '');
    return temp;
};

export default Obfuscator;