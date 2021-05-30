import * as crypto from "crypto";
import { generateKeyPairSync } from "crypto";
import { writeFileSync } from "fs";
import fs from "fs";
import path from "path";
import { RSAKeyPairOps } from "Models/RsaKeyPairOpts/RsaKeyPairOpts";

export class Creator
{
    modulusLength: number = 2048;
    generateKeys = (options: RSAKeyPairOps, encryptionType: "rsa" = "rsa") =>
    {
        return generateKeyPairSync(encryptionType, options);
    };
    // first
    writeKeysToDisk = (options: RSAKeyPairOps, encryptionType: "rsa" = "rsa"): void =>
    {
        const { publicKey, privateKey } = this.generateKeys(options, encryptionType);
        const privateLocation: string = "./private.pem";
        const publicLocation: string = "./public.pem";
        // if (fs.existsSync(privateLocation.split('./Keys/')[0]) && fs.existsSync(publicLocation.split('./Keys/')[0]))
        // {
            writeFileSync(privateLocation, privateKey.toString());
            writeFileSync(publicLocation, publicKey.toString());
        // }
        // else return;
    };
    // then 
    encryptStringWithRsaPublicKey = (toEncrypt: string, relativeOrAbsolutePathToPublicKey: string): string =>
    {
        const absolutePath: string = path.resolve(relativeOrAbsolutePathToPublicKey);
        const publicKey: string = fs.readFileSync(absolutePath, "utf8");
        const buffer: Buffer = Buffer.from(toEncrypt);
        const encrypted: Buffer = crypto.publicEncrypt(publicKey, buffer);
        return encrypted.toString("base64");
    };
    // or this
    decryptStringWithRsaPrivateKey = (toDecrypt: string, relativeOrAbsolutePathtoPrivateKey: string): string =>
    {
        const absolutePath: string = path.resolve(relativeOrAbsolutePathtoPrivateKey);
        const privateKey: string = fs.readFileSync(absolutePath, "utf8");
        const buffer: Buffer = Buffer.from(toDecrypt, "base64");
        const decrypted: Buffer = crypto.privateDecrypt(
            {
                key: privateKey,
                passphrase: "passphrase",
            },
            buffer,
        );
        return decrypted.toString("utf8");
    };
}