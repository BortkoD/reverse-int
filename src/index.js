module.exports = function reverse(n) {
    n = Math.abs(n);
    let str = n.toString().split("");

    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }
    return parseInt(str.join(""));
}
