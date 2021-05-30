import { BasePrivateKeyEncodingOptions, RSAKeyPairOptions } from "node:crypto";
import { PubF } from "../typeExtensions/Pubf";
import { PrivF } from "..//typeExtensions/PrivF";
import { publicKeyEncoding } from "../PublicKeyEncodings";
import { privateKeyEncoding } from "../PrivateKeyEncodings";
export class RSAKeyPairOps implements RSAKeyPairOptions<PubF, PrivF>{
    modulusLength: number = 2048;
    publicExponent?: number | undefined;
    publicKeyEncoding:publicKeyEncoding = new publicKeyEncoding();
    privateKeyEncoding: BasePrivateKeyEncodingOptions<any> & { type: "pkcs1" | "pkcs8"; } = new privateKeyEncoding();
}