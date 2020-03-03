const {arr2} = require('./vars');


exports.frequency = (arr2) => {
    console.log("\nЗнайти елемент із найбільшою частотою повторень.");
    console.log("Масив: " + arr2);

    let elements = [];
    let result = [];
    let r = arr2.length;
    let k = 0;
    let u = 1;
    let jet = false;
    let numberNew = arr2[u];
    elements[k] = arr2[k];
    while (u < r) {
        numberNew = arr2[u];
        for (let j = 0; j < u; j++) {
            if (elements[j] == numberNew) {
                jet = false;
                break;
            } else jet = true;
        }
        if (jet) {
            k++;
            elements[k] = numberNew;
        }
        u++;
    }
    console.log("Елементи масиву: " + elements);
    k = 0;

    do {
        let h = 0;
        for (let i = 0; i < r; i++) {
            if (elements[k] == arr2[i])
                h++;
        }
        result[k] = h;
        k++;

    } while (k < elements.length);
    console.log("Частота: " + result);
    //max(result);
    let p = 0;
    let r2 = 0;
    let max = result[0];
    while (r2 < result.length) {
        if (result[p] > max) {
            max = result[p];
            p++;
        }
        else r2++;

    }
    console.log("Елемент з максимальною частотою: " + elements[p]);
    return result;
}

