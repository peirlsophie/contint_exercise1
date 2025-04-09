const { generateStrongPassword, isStrongPassword } = require('../dist/index');

describe('generateStrongPassword', () => {
    test('Checking if generated password is correct size and is not the input', () => {
        const input1 = 1
        const input2 = 12

        const password1 = generateStrongPassword(input1)
        const password2 = generateStrongPassword(input2)

        expect(password1).not.toBe(input1);
        expect(password1.length).toBe(8);
        expect(password2).not.toBe(input2);
        expect(password2.length).toBe(input2);
    });
});

describe('isStrongPassword', () => {
    test('Checking if generated password is correct size and is not the input', () => {
        const password1 = "Hello World"
        const password2 = "pC%mD8TpCKn2"

        const output1 = isStrongPassword(password1)
        const output2 = isStrongPassword(password2)

        expect(output1).toBe(false);
        expect(output2).toBe(true);
    });
});