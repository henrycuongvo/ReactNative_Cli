export const isValidateEmail = (stringEmail) =>
    /^[\w-\.]+@(gmail+\.)+[\w-]{2,4}$/.test(stringEmail);
export const isValidatePassword = (stringPassword) => stringPassword.length;
