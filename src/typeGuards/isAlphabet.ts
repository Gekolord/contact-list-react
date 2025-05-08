import { Alphabet } from '../data/contactData';

export function isAlphabet(char: string): char is Alphabet {
    return /^[A-Z]$/.test(char);
}
