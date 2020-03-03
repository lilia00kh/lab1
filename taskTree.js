
exports.insertionSort = fi = (arr)=> {

    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
}

///insertionSort(arr);
//console.log(`Сортування вставкою: ${fi(arr)}`);
