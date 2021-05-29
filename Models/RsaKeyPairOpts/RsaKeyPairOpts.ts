import { BasePrivateKeyEncodingOptions, RSAKeyPairOptions } from "node:crypto";
import { PubF } from "Models/typeExtensions/Pubf";
import { PrivF } from "Models/typeExtensions/PrivF";
import { publicKeyEncoding } from "Models/PublicKeyEncodings";
import { privateKeyEncoding } from "Models/PrivateKeyEncodings";
export class RSAKeyPairOps implements RSAKeyPairOptions<PubF, PrivF>{
    modulusLength: number = 2048;
    publicExponent?: number | undefined;
    publicKeyEncoding:publicKeyEncoding = new publicKeyEncoding();
    privateKeyEncoding: BasePrivateKeyEncodingOptions<any> & { type: "pkcs1" | "pkcs8"; } = new privateKeyEncoding();
}