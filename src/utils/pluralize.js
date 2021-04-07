export const pluralize = (number, forms) => {
    number = Math.abs(number);
    if (Number.isInteger(number)) {
        const cases = [2, 0, 1, 1, 1, 2];
        return forms[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
    }
    return forms[1];
};