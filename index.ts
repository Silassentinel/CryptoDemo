const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const { o, u, l, n, e, d } = argv;
import Obfuscator from "./Obfu/Obfuscator";
import DeObfuscator from "./Obfu/DeObfuscator";
import { Creator } from "./TheCreator/Creator";
//import RSA from "./Models/RSA";
const cret: Creator = new Creator();
if (n)
{
    //RSA.gen().then(()=> {console.log("keyPair")})
    cret.writeKeysToDisk();
}
if (l)
{
    if (o)
    {
        console.log(Obfuscator(o, l,d));
    }
    if (u)
    {
        console.log(DeObfuscator(u, l,e));
    }
}
else
{
    if (o)
    {
        console.log(Obfuscator(o, "",e));
    }
    if (u)
    {
        console.log(DeObfuscator(u, "",d));
    }
}
// console.log("\n\n\n\n\n");
// console.log("this is the end of the demo!");