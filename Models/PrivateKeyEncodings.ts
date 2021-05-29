import { PrivF } from "./typeExtensions/PrivF";

export class privateKeyEncoding
{
    type: string = 'pkcs8';
    format: PrivF = 'pem';
    cipher: string = 'aes-256-cbc';
    passphrase: string = "passphrase";
}