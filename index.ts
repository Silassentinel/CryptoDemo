const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const { o } = argv;
const { u } = argv;
import Obfuscator from "./Obfu/Obfuscator";
import DeObfuscator from "./Obfu/DeObfuscator"
// let obfuscated;
// let deObfuscated;
if (o)
{
    console.log(Obfuscator(o));
}
if (u)
{
    console.log(DeObfuscator(u));
}
console.log("\n\n\n\n\n")
console.log("this is the end of the demo!")