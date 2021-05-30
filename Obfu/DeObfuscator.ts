// import * as crypto from "crypto"
const DeObfuscator = (text:string) : string => 
{
    let temp: string;
    // let tempArr: string[];
    // // let length : number = text.length;
    temp = text;
    // tempArr = temp.split('');
    // tempArr = tempArr.filter(element => { if (element !== " ") { return element; } else return; });
    // tempArr = tempArr.map(element => element.toLocaleLowerCase())
    // tempArr = tempArr.map(element => {
    //     element = element.replace('a',"4");
    //     element = element.replace("e","3");
    //     element = element.replace("i","1");
    //     element = element.replace("t","7");
    //     element = element.replace("l","!");
    //     element = element.replace("b","8");
    //     element = element.replace("w","vv");
    //     element = element.replace("h","#");
    //     element = element.replace("o","0");
    //     element = element.replace("g","9");
    //     element = element.replace("s","5")
    //     element = element.replace("m","nn");
    //     element = element.replace("z","2");
    //     element = new Creator().decryptStringWithRsaPrivateKey(element,"../Keys/private.pem") 
    //     return element;
    // })
    // temp = tempArr.reverse().join('');
    // temp = temp.replace(',', '');
    return temp;
}

export default DeObfuscator;