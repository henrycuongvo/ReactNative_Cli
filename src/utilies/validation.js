export const isValidateEmail = (stringEmail) =>
    /^[\w-\.]+@(gmail+\.)+[\w-]{2,4}$/.test(stringEmail);

export const isValidatePassword = (stringPassword) =>
    stringPassword.length >= 3;

export const isValidatePhoneNumber = (stringPhoneNumber) =>
    /([\+84|84|0]+ (3|5|7|9|1|4|8|9|2]))+([0-9]{8}) \b /.test(
        stringPhoneNumber,
    );
