import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.NEXT_ENCRYPT_PUBLIC_KEY;
if (!SECRET_KEY) throw new Error('Encryption key is not defined.');

export const encryptData = (data: string | object | any[]): string => {
  try {
    const dataString = typeof data === 'string' ? data : JSON.stringify(data);
    const iv = CryptoJS.lib.WordArray.random(16); // Generate a random IV
    const encrypted = CryptoJS.AES.encrypt(dataString, SECRET_KEY, { iv }).toString();
    const encryptedWithIV = iv.toString() + encrypted; // Concatenate IV and encrypted data
    return encryptedWithIV;
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
};

export const decryptData = <T = any>(encryptedData: string): T => {
  try {
    const ivHex = encryptedData.slice(0, 32); // Extract IV from the start
    const encrypted = encryptedData.slice(32); // Extract encrypted data
    const iv = CryptoJS.enc.Hex.parse(ivHex);
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY, { iv });
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedString) {
      throw new Error('Failed to decrypt data');
    }

    try {
      return JSON.parse(decryptedString) as T;
    } catch {
      return decryptedString as unknown as T;
    }
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
};
