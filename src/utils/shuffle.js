// https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9816

function baseRandom(lower, upper) {
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}

// size is optional (default is array length)
function shuffle(array, size) {
    let index = -1;
    const { length } = array;
    const lastIndex = length - 1;

    size = size === undefined ? length : size;
    while (++index < size) {
        let rand = baseRandom(index, lastIndex);
        [array[rand], array[index]] = [array[index], array[rand]];
    }
    array.length = size;
    return array;
}

export { shuffle }