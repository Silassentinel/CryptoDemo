import { PrivF } from "./typeExtensions/PrivF";

export class privateKeyEncoding
{
    type: ( "pkcs1" | "pkcs8")= "pkcs8";
    format: PrivF = 'pem';
    cipher: string = 'aes-256-cbc';
    passphrase: string = "passphrase";
}