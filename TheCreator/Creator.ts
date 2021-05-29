import * as crypto from "crypto";
import { generateKeyPairSync } from "crypto";
import { writeFileSync } from "node:fs";
import fs from "fs";
import path from "node:path";
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
        const { publicKey, privateKey } = this.generateKeys(options,encryptionType);
        writeFileSync('private.pem', privateKey.export());
        writeFileSync('public.pem', publicKey.export());
    };
    // then 
    encryptStringWithRsaPublicKey = (toEncrypt: string, relativeOrAbsolutePathToPublicKey: string) =>
    {
        const absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey);
        const publicKey = fs.readFileSync(absolutePath, "utf8");
        const buffer = Buffer.from(toEncrypt);
        const encrypted = crypto.publicEncrypt(publicKey, buffer);
        return encrypted.toString("base64");
    };
    // or this
    decryptStringWithRsaPrivateKey = (toDecrypt: string, relativeOrAbsolutePathtoPrivateKey: string) =>
    {
        const absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey);
        const privateKey = fs.readFileSync(absolutePath, "utf8");
        const buffer = Buffer.from(toDecrypt, "base64");
        const decrypted = crypto.privateDecrypt(
            {
                key: privateKey.toString(),
                passphrase: "passphrase",
            },
            buffer,
        );
        return decrypted.toString("utf8");
    };
}