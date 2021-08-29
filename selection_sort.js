const numbers = [12, 54, 1, 67, -5, 9, 76, 17];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;

        for (let j = i + 1; j < array.length; j++) {
            const element = array[j];
            if (array[j] < array[min])
                min = j;

        }
        const temp = array[i];
        array[i] = array[min]
        array[min] = temp;
    }

    return array;
}

const sorted = selectionSort(numbers);
console.log(sorted);