export function generateStrongPassword(length = 12) {
    const allowedPasswordCharacters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let strongPassword = Array
        .from(
            {length},
            () => {
                const randomAllowedPasswordCharacterIndex =
                    Math.floor(Math.random() * allowedPasswordCharacters.length);
                return allowedPasswordCharacters.charAt(randomAllowedPasswordCharacterIndex);
            })
        .join('');

    while (!isStrongPassword(strongPassword)) {
        strongPassword = generateStrongPassword(length);
    }

    return strongPassword;
}

export function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    return /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*()_+]/.test(password);
}