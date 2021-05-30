import { generateKeyPair, privateDecrypt, publicEncrypt } from 'crypto';
import { writeFileSync } from "fs";
import fs from "fs";
import path from "path";
import RSA from "../Models/RSA";

export class Creator
{
    modulusLength: number = 2048;
    generateKeys = async () =>
    {
        // @ts-ignore
        return new Promise<KeyPair>((resolve, reject) =>
        {
            // @ts-ignore
            generateKeyPair('rsa', {
                modulusLength: 4096,
                publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
                privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
            }, (err: Error | null, pub: string, prv: string) =>
            {
                if (err) reject();
                else
                {
                    resolve({
                        pub,
                        prv,
                    });
                }
            });
        });
    };
    // first
    writeKeysToDisk = (): void =>
    {
        const privateLocation: string = `./private.pem`;
        const publicLocation: string = `./public.pem`;
        RSA.gen().then(keyPair =>
        {
            writeFileSync(publicLocation, keyPair.pub, {encoding:"utf-8"});
            writeFileSync(privateLocation, keyPair.prv, {encoding:"utf-8"});
        });
    };
    // then 
    encryptStringWithRsaPublicKey = (toEncrypt: string, relativeOrAbsolutePathToPublicKey: string): string =>
    {
        const absolutePath: string = path.resolve(relativeOrAbsolutePathToPublicKey);
        const publicKey: string = fs.readFileSync(absolutePath, "utf8");
        const buffer: Buffer = Buffer.from(toEncrypt,"utf-8");
        const encrypted: Buffer = publicEncrypt({
            key: publicKey,
        }, buffer);
        return encrypted.toString("base64");
    };
    // or this
    decryptStringWithRsaPrivateKey = (toDecrypt: string, relativeOrAbsolutePathtoPrivateKey: string): string =>
    {
        const absolutePath: string = path.resolve(relativeOrAbsolutePathtoPrivateKey);
        const privateKey: string = fs.readFileSync(absolutePath, "utf8");
        const buffer: Buffer = Buffer.from(toDecrypt, "base64");
        const decrypted: Buffer = privateDecrypt(
            {
                key: privateKey,
            },
            buffer,
        );
        return decrypted.toString("utf8");
    };
}