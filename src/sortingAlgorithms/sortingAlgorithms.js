export function getMergeSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}
export function getQuickSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSort(array, 0, array.length - 1, animations)
    return animations;
}
function quickSort(array, startIdx, endIdx, animations) {
    if(startIdx < endIdx) {
        let pi = partition(array, startIdx, endIdx, animations);

        quickSort(array, startIdx, pi - 1, animations);
        quickSort(array, pi + 1, endIdx, animations);
    }
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx , middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMergeSort(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMergeSort(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        //Hodnoty ktoré v mergeSorte porovnávame; pushneme raz aby sme zmenili ich farbu
        animations.push([i, j]);
        //Hodnoty ktoré v mergeSorte porovnávame; pushneme znova aby sme zmenili ich farbu späť
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            //Prepíšeme hodnotu na indexu k v originálnej array na hodnotu na pozícii i v pomocnej array
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        }
        else {
            //Prepíšeme hodnotu na indexu k v originálnej array na hodnotu na pozícii j v pomocnej array
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        //Hodnoty ktoré v mergeSorte porovnávame; pushneme raz aby sme zmenili ich farbu
        animations.push([i, i]);
        //Hodnoty ktoré v mergeSorte porovnávame; pushneme znova aby sme zmenili ich farbu späť
        animations.push([i, i]);
        //Prepíšeme hodnotu na pozícii k v originálne array na hodnotu na pozícii i v pomocnej array
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        //Hodnoty ktoré v mergeSorte porovnávame; pushneme raz aby sme zmenili ich farbu
        animations.push([j, j]);
        //Hodnoty ktoré v mergeSorte porovnávame; pushneme znova aby sme zmenili ich farbu späť
        animations.push([j, j]);
        //Prepíšeme hodnotu na pozícii k v originálne array na hodnotu na pozícii j v pomocnej array
        animations.push([j, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}
function partition(array, startIdx, endIdx, animations) {
    //Pushneme index pivot pointu aby zmenil farbu
    animations.push([endIdx, array[endIdx], "green"]);

    let pivot = array[endIdx];
    let i = startIdx - 1;

    for (let j = startIdx; j < endIdx; j++) {
        //Zmeníme farbu práve porovnávaného prvku
        animations.push([j, array[j], "#dd0510"])
        if (array[j] < pivot) {
            i++;
            //Pushneme index i a zmenu farby
            animations.push([i, array[i], "#dd0510"]);
            //Pushneme prvok na indexu i a nastávíme jeho výšku na výšku prvku j v pomocnej array a zmeníme farbu späť
            animations.push([i, array[j], "#05b2dd"]);
            const temp = array[i];
            //Pushneme prvok na indexu j a nastávíme jeho výšku na výšku prvku i v pomocnej array a zmeníme farbu späť
            animations.push([j, array[i], "#05b2dd"])
            array[i] = array[j];
            array[j] = temp;           
        }
        //Zmeníme farbu práve porovnávaného prvku späť
        animations.push([j, array[j], "#05b2dd"])
    }
    //Zmeníme farbu pivot na červenú aby sme naznačili posledný swap
    animations.push([endIdx, array[endIdx], "#dd0510"]);
    //Pushneme animáciu pre swap prvku na i+1 s pivotom
    animations.push([i + 1, array[endIdx], "#05b2dd"]);
    const temp = array[i + 1];
    //Pushneme animáciu pre swap pivota s prvkom na i+1
    animations.push([endIdx, temp, "#05b2dd"]);
    array[i + 1] = array[endIdx];
    array[endIdx] = temp;
    return i + 1;
}
//export default {getMergeSortAnimations, quickSort}