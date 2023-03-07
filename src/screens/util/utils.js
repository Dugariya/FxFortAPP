export const transactiionHaxHandler = (val) => {
    const a = val.substring(0, 4);
    const b = val.substring(val.length - 4);
    const str = '0x' + a + '...' + b;
    return str;
}