export const transactiionHaxHandler = (val) => {
    const a = val.substring(0, 4);
    const b = val.substring(val.length - 4);
    const str = '' + a + '...' + b;
    return str;
}