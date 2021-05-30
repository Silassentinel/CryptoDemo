import { Creator } from "../TheCreator/Creator";
const DeObfuscator = (text:string, location:string) : string => 
{
    let temp: string;
    let tempArr: string[];
    temp = text;
    tempArr = temp.split('_');
    tempArr = tempArr.reverse();
    // tempArr = tempArr.filter(element => { if (element !== " ") { return element; } else return; });
    tempArr = tempArr.map(element => element.toLocaleLowerCase());
    tempArr = tempArr.map(element =>
    {
        // decrypt here
        if(location.length !== 0 && location !== " "  || location !== "" )
        {
            element = new Creator().decryptStringWithRsaPrivateKey(element,location)
        }
        else element = new Creator().decryptStringWithRsaPrivateKey(element,"./private.pem")
        element = element.replace('4', "a");
        element = element.replace("3", "e");
        element = element.replace("1", "i");
        element = element.replace("7", "t");
        element = element.replace("!", "l");
        element = element.replace("8", "b");
        element = element.replace("v", "w");
        element = element.replace("#", "h");
        element = element.replace("0", "o");
        element = element.replace("9", "g");
        element = element.replace("5", "s");
        element = element.replace("nn", "m");
        element = element.replace("2", "z");
        return element;
    });
    temp = tempArr.join(' ');
    //temp = temp.replace(',', '');
    return temp;
}

export default DeObfuscator;