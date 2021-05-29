import * as crypto from "crypto";
import { generateKeyPairSync } from "node:crypto";
import { writeFileSync } from "node:fs";
import fs from "fs";
import path from "node:path";
import { publicKeyEncoding } from "Models/PublicKeyEncodings";
import { privateKeyEncoding } from "Models/PrivateKeyEncodings";


export class Creator
{
    EncryptionType: string = "rsa";
    privateKeyOptions: privateKeyEncoding = {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: ""
    };
    publicKeyOptions: publicKeyEncoding = {
        type: 'spki',
        format: 'pem'
    };
    modulusLength: number = 4096;
    generateKeys = (publicKeyEncoding: publicKeyEncoding, privateKeyEncoding: privateKeyEncoding): crypto.KeyPairSyncResult<string, string> =>
    {
        return generateKeyPairSync('rsa',
            {
                modulusLength: 4096,
                namedCurve: 'secp256k1',
                publicKeyEncoding,
                privateKeyEncoding
            });
    };
    writeKeysToDisk = (varpublicKeyEncoding: publicKeyEncoding, varprivateKeyEncoding: privateKeyEncoding): void =>
    {
        const { publicKey, privateKey } = this.generateKeys(varpublicKeyEncoding,varprivateKeyEncoding);
        writeFileSync('private.pem', privateKey);
        writeFileSync('public.pem', publicKey);
    };
    encryptStringWithRsaPublicKey = function (toEncrypt: string, relativeOrAbsolutePathToPublicKey: string)
    {
        var absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey);
        var publicKey = fs.readFileSync(absolutePath, "utf8");
        var buffer = Buffer.from(toEncrypt);
        var encrypted = crypto.publicEncrypt(publicKey, buffer);
        return encrypted.toString("base64");
    };

    decryptStringWithRsaPrivateKey = function (toDecrypt: string, relativeOrAbsolutePathtoPrivateKey: string)
    {
        var absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey);
        var privateKey = fs.readFileSync(absolutePath, "utf8");
        var buffer = Buffer.from(toDecrypt, "base64");
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