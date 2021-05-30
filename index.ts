const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const { o } = argv;
const { u } = argv;
const { l } = argv;
const { n } = argv;
console.log(n);
import Obfuscator from "./Obfu/Obfuscator";
import DeObfuscator from "./Obfu/DeObfuscator";
import { Creator } from "./TheCreator/Creator";
import { RSAKeyPairOps } from "./Models/RsaKeyPairOpts/RsaKeyPairOpts";
import { encryptionType } from "./Models/enxryptionType";
// let obfuscated;
// let deObfuscated;


const cret: Creator = new Creator();
if (n)
{
    cret.writeKeysToDisk(new RSAKeyPairOps(), new encryptionType().encryptionType);
}


if (l)
{
    if (o)
    {
        console.log(Obfuscator(o, l));
    }
    if (u)
    {
        console.log(DeObfuscator(u, l));
    }
}
else
{
    if (o)
    {
        console.log(Obfuscator(o, ""));
    }
    if (u)
    {
        console.log(DeObfuscator(u, ""));
    }
}
console.log("\n\n\n\n\n");
console.log("this is the end of the demo!");