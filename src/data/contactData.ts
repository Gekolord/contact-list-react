const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
// Создаёт объект, где ключами являются буквы алфавита, а значениями - пустые массивы для будущего хранения объектов контактов.
export const allContactData = alphabet.reduce<{[key: string]: []}>((contactDataObject, letter) => {
    contactDataObject[letter] = []
    return contactDataObject;
}, {})