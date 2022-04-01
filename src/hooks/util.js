export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}