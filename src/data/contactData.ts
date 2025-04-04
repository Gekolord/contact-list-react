export interface Contact {
    name: string;
    vacancy: string;
    phone: string;
    id: string;
}
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// Создаёт объект, где ключами являются буквы алфавита, а значениями - пустые массивы для будущего хранения объектов контактов.
export const allContactData = alphabet.reduce<{ [key: string]: Contact[] }>(
    (contactDataObject, letter) => {
        contactDataObject[letter] = [];
        return contactDataObject;
    },
    {}
);

// Небольшой объект для тестов
export const testObject = alphabet.reduce<{ [key: string]: Contact[] }>(
    (contactDataObject, letter) => {
        contactDataObject[letter] = [
            {
                name: `${letter}ohn ${letter}mith`,
                vacancy: 'developer',
                phone: '+3924923432',
                id: crypto.randomUUID(),
            },
        ];
        return contactDataObject;
    },
    {}
);
