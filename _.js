const _ = {
    clamp(number, lower, upper) {

        let lowerClampedValue = Math.max(number, lower);

        let clampedValue = Math.min(lowerClampedValue, upper);

        return clampedValue;
    },

    inRange(number, startVal, endVal) {
        if (typeof endVal === 'undefined') {
            endVal = startVal;
            startVal = 0;
        }

        if (startVal > endVal) {
            let valueSwap = endVal;
            endVal = startVal;
            startVal = valueSwap;
        }

        if (number >= startVal && number <= endVal) {
            return true;
        } else {
            return false;
        }

    },

    words(theString) {
        return theString.split(' ');
    },

    pad(string, length) {
        if (length <= string.length) {
            return string;
        } else {
            const theSpace = ' ';

            const difference = (length - string.length);
            const spaceExtra = difference % 2;
            const spaceCount = Math.floor(difference / 2);
            return theSpace.repeat(spaceCount) + string + theSpace.repeat(spaceCount + spaceExtra);
        }

    },

    has(object, key) {
        if (typeof object[key] === 'undefined') {
            return false;
        } else {
            return true;
        }
    },

    invert(object) {
        const invertedObject = {};

        Object.entries(object).forEach(entry => {
            let key = entry[0];
            let value = entry[1];

            invertedObject[value] = key;
        });

        return invertedObject;
    },

    findKey(object, predicate) {

        for (const key in object) {
            let value = object[key];

            if (predicate(value)) {
                return key;
            }
        }

        return undefined;
    },

    drop(array, number) {
        if (typeof number === 'undefined') {
            number = 1;
        }

        if (Array.isArray(array)) {
            let newArray = array.slice(number);

            return newArray;
        }

    },

    dropWhile(array, predicate) {
        const dropNumber = array.findIndex(function (element, index) {
            return !predicate(element, index, array);
        });

        const droppedArray = this.drop(array, dropNumber);

        return droppedArray;
    },

    chunk(array, size) {

        if (typeof size === 'undefined') {
            size = 1;
        }

        const arrayChunks = [];

        for (let i = 0; i < array.length; i += size) {

            let arrayChunk = array.slice(i, i + size);

            arrayChunks.push(arrayChunk);
        }

        return arrayChunks;
    }
};





// Do not write or modify code below this line.
module.exports = _;