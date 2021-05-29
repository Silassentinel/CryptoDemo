import * as crypto from "crypto";
import { generateKeyPairSync } from "crypto";
import { writeFileSync } from "node:fs";
import fs from "fs";
import path from "node:path";
import { publicKeyEncoding } from "Models/PublicKeyEncodings";
import { privateKeyEncoding } from "Models/PrivateKeyEncodings";

export class Creator
{
    modulusLength: number = 2048;
    generateKeys = (modulusLength: number, publicKeyEncoding: publicKeyEncoding, privateKeyEncoding: privateKeyEncoding, encryptionType: "x448" = "x448", namedCurve: string = "secp256k1") =>
    {
        return generateKeyPairSync(encryptionType,
            {
                modulusLength,
                namedCurve,
                publicKeyEncoding,
                privateKeyEncoding
            });
    };
    writeKeysToDisk = (modulusLength: number, varpublicKeyEncoding: publicKeyEncoding, varprivateKeyEncoding: privateKeyEncoding): void =>
    {
        const { publicKey, privateKey } = this.generateKeys(modulusLength, varpublicKeyEncoding, varprivateKeyEncoding);
        writeFileSync('private.pem', privateKey.export());
        writeFileSync('public.pem', publicKey.export());
    };
    encryptStringWithRsaPublicKey = (toEncrypt: string, relativeOrAbsolutePathToPublicKey: string) =>
    {
        const absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey);
        const publicKey = fs.readFileSync(absolutePath, "utf8");
        const buffer = Buffer.from(toEncrypt);
        const encrypted = crypto.publicEncrypt(publicKey, buffer);
        return encrypted.toString("base64");
    };

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