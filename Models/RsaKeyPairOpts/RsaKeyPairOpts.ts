import { BasePrivateKeyEncodingOptions, RSAKeyPairOptions } from "node:crypto";
import { PubF } from "Models/typeExtensions/Pubf";
import { PrivF } from "Models/typeExtensions/PrivF";
export class RSAKeyPairOps implements RSAKeyPairOptions<PubF, PrivF>{
    modulusLength: number = 2048;
    publicExponent?: number | undefined;
    publicKeyEncoding!: {
        type: ("pkcs1" | "spki");
        format: any;
    };
    privateKeyEncoding!: BasePrivateKeyEncodingOptions<any> & { type: "pkcs1" | "pkcs8"; };
}