//#region Merge Sort

function getMergeSortAnimations(array, DOMBars, sleepMS) {
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, DOMBars, sleepMS);
}

async function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, DOMBars, sleepMS) {
    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    await Promise.all(
        [mergeSortHelper(auxiliaryArray, startIdx , middleIdx, mainArray, DOMBars, sleepMS)],
        [mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, DOMBars, sleepMS)]);
    await doMergeSort(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, DOMBars, sleepMS);
}

async function doMergeSort(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, DOMBars, sleepMS) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        //Zmena farby porovnávaných prvkov
        DOMBars[i].style.backgroundColor = "#dd0510";
        DOMBars[j].style.backgroundColor = "#dd0510";
        //Sleep aby sme vizualizovali zmenu
        await sleep(sleepMS);
        //Zmena farby porovnávaných prvkov späť
        DOMBars[i].style.backgroundColor = "#05b2dd";
        DOMBars[j].style.backgroundColor = "#05b2dd";
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            //Prepíšeme hodnotu na indexu k v originálnej array na hodnotu na pozícii i v pomocnej array
            DOMBars[k].style.height = `${auxiliaryArray[i] * 0.75}px`;
            mainArray[k++] = auxiliaryArray[i++];
        }
        else {
            //Prepíšeme hodnotu na indexu k v originálnej array na hodnotu na pozícii j v pomocnej array
            DOMBars[k].style.height = `${auxiliaryArray[j] * 0.75}px`;
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        //Kopírovanie hodnôt z prvej polovice array ak ostali
        DOMBars[i].style.backgroundColor = "#dd0510";
        await sleep(sleepMS);
        //Hodnoty ktoré v mergeSorte porovnávame; pushneme znova aby sme zmenili ich farbu späť
        DOMBars[i].style.backgroundColor = "#05b2dd";
        //Prepíšeme hodnotu na pozícii k v originálne array na hodnotu na pozícii i v pomocnej array
        DOMBars[k].style.height = `${auxiliaryArray[i] * 0.75}px`;
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        //Kopírovanie hodnôt z druhej polovice array ak ostali
        DOMBars[j].style.backgroundColor = "#dd0510";
        await sleep(sleepMS);
        //Hodnoty ktoré v mergeSorte porovnávame; pushneme znova aby sme zmenili ich farbu späť
        DOMBars[j].style.backgroundColor = "#05b2dd";
        //Prepíšeme hodnotu na pozícii k v originálne array na hodnotu na pozícii j v pomocnej array
        DOMBars[k].style.height = `${auxiliaryArray[j] * 0.75}px`;
        mainArray[k++] = auxiliaryArray[j++];
    }
}

//#endregion

//#region Quick Sort
function getQuickSortAnimations(array, DOMBars, sleepMS) {
    if(array.length <= 1) return array;
    quickSort(array, 0, array.length - 1, DOMBars, sleepMS);
}

async function quickSort(array, startIdx, endIdx, DOMBars, sleepMS) {
    if(startIdx < endIdx) {
        let pi = await partition(array, startIdx, endIdx, DOMBars, sleepMS);

        await Promise.all(
            [quickSort(array, startIdx, pi - 1, DOMBars, sleepMS)],
            [quickSort(array, pi + 1, endIdx, DOMBars, sleepMS)]);
    }
}

async function partition(array, startIdx, endIdx, DOMBars, sleepMS) {
    //Nastavíme farbu pivota
    DOMBars[endIdx].style.backgroundColor = 'green';

    let pivot = array[endIdx];
    let i = startIdx - 1;

    for (let j = startIdx; j < endIdx; j++) {
        //Zmeníme farbu práve porovnávaného prvku a počkáme
        DOMBars[j].style.backgroundColor = "#dd0510";
        await sleep(sleepMS);
        if (array[j] < pivot) {
            i++;
            //Zmeníme farbu prvku ktorý sa chystáme vymeniť a počkáme
            DOMBars[i].style.backgroundColor = "#dd0510";
            await sleep(sleepMS);
            //Nastavíme výšku prvku na indexe i na výšku prvku na indexe j a zmeníme farbu
            DOMBars[i].style.height = `${array[j] * 0.75}px`;
            DOMBars[i].style.backgroundColor = "#05b2dd";
            const temp = array[i];
            //Nastavíme výšku prvku na indexe j na výšku prvku na predošlom indexe i, zmeníme farbu a počkáme
            DOMBars[j].style.height = `${temp * 0.75}px`
            DOMBars[j].style.backgroundColor = "#05b2dd";
            await sleep(sleepMS);
            array[i] = array[j];
            array[j] = temp;           
        }
        //Zmeníme farbu práve porovnávaného prvku späť
        DOMBars[j].style.backgroundColor = "#05b2dd";
    }
    //Zmeníme farbu pivot na červenú aby sme naznačili posledný swap
    DOMBars[endIdx].backgroundColor = "#dd0510";
    //Nastavíme výšku prvku na indexe i+1 na výšku pivota
    DOMBars[i + 1].style.height = `${array[endIdx] * 0.75}px`;
    DOMBars[i + 1].style.backgroundColor = "#05b2dd";
    await sleep(sleepMS);

    const temp = array[i + 1];
    //Nastavíme výšku pivota na výšku na indexe i+1
    DOMBars[endIdx].style.height = `${temp * 0.75}px`;
    DOMBars[endIdx].style.backgroundColor = "#05b2dd";
    array[i + 1] = array[endIdx];
    array[endIdx] = temp;
    return i + 1;
}
//#endregion

//#region Bubble Sort
function getBubbleSortAnimations(array) {
    const animations = [];
    bubbleSort(array, animations);
    return animations;
}

function bubbleSort(array, animations) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            //Pushneme indexy porovnávanych prvkov aby sme zmenili ich farbu
            animations.push([j,j + 1]);
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            //Pushneme animácie pre výmenu prvkov
            animations.push([j, array[j]]);
            animations.push([j + 1, array[j + 1]]);
            //Pushneme indexy porovnávanych prvkov aby sme zmenili farbu späť
            animations.push([j, j + 1]);
        }
    }
}
//#endregion

//#region Insertion Sort
function getInsertionSortAnimations(array) {
    const animations = [];
    insertionSort(array, animations);
    return animations;
}

function insertionSort(array, animations) {
    let j;
    //Animácie pre zmenu farby 1. prvku
    animations.push([]);
    for (let i = 1; i < array.length; i++) {
        j = i;
        //Pushneme animáciu na zmenu farby porovnávaneho prvku
        animations.push([j, array[j], "#dd0510"]);
        while (j > 0 && array[j - 1] > array[j]) {
            //Pushneme animácie pre swap prvkov a zmenu ich farieb
            animations.push([j, array[j - 1], "green"]);
            animations.push([j - 1, array[j], "#dd0510"]);
            const temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
        //Pushneme animáciu pre zmenu farby prvku ktorý sme práve zoradili
        animations.push([j, array[j], "green"]);
    }
    //Animácia pre reset farieb
    animations.push([]);
}
//#endregion

//#region Selection Sort
function getSelectionSortAnimations(array) {
    const animations = [];
    selcetionSort(array, animations);
    return animations;
}

function selcetionSort(array, animations) {
    for(let i = 0; i < array.length; i++) {
        let minIdx = i;
        //Pushneme animáciu pre zmenu farby prvku s počiatočným minIdx
        animations.push([i, array[i], "#dd0510"]);
        //Pushneme animáciu pre zmenu farby späť prvku s počiatočným minIdx
        animations.push([i, array[i], "#05b2dd"]);
        for (let j = i + 1; j < array.length; j++) {
            //Pushneme animáciu pre zmenu farby práve porovnávaneho prvku
            animations.push([j, array[j], "#dd0510"]);
            //Pushneme animáciu pre zmenu farby späť práve porovnávaneho prvku
            animations.push([j, array[j], "#05b2dd"]);
            if (array[j] < array[minIdx] ) {
                //Pushneme anímáciu pre zmenu farby predošlého najmenšieho prvku
                animations.push([minIdx, array[minIdx], "#05b2dd"]);
                minIdx = j;
                //Pushneme animáciu pre označenie nového najmenšieho prvku
                animations.push([minIdx, array[minIdx], "brown"]);
            }
        }
        const temp = array[i];
        array[i] = array[minIdx];
        array[minIdx] = temp;
        //Pushneme animáciu pre swap a zmenu farby už zoradeného prvku
        animations.push([i, array[i], "green"]);
        if(i !== minIdx) {
            //Pushneme animáciu pre zmenu farby ešte nezoradeného prvku
            animations.push([minIdx, array[minIdx], "#05b2dd"]);
        }
    }
    //Animácia pre reset farieb
    animations.push([]);
}
//#endregion

//#region Shell Sort
function getShellSortAnimations(array) {
    const animations = [];
    shellSort(array, animations);
    return animations;
}

function shellSort(array, animations) {
    for (let gap = Math.floor(array.length / 2) ; gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < array.length; i++) {
            //Pushneme animáciu pre označenie temp 
            //animations.push([i, array[i], "#dd0510"]);
            let temp = array[i];
            let j;
            for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                //Pushneme animáciu pre zmenu farby
                animations.push([j, j - gap, "compare"]);
                //Animácia pre zmenu farby späť
                animations.push([j, j - gap, "compare"]);
                //Animácie pre zmenu hodnôt
                animations.push([j, array[j - gap], "#05b2dd"]);
                array[j] = array[j - gap]
            }
            //Pushnema animáciu pre zmenu farby a veľkosti
            animations.push([j, temp, "#dd0510"]);
            //Pushnema animáciu pre zmenu farby späť
            animations.push([j, temp, "#05b2dd"]);
            array[j] = temp;
        }
    }
}
//#endregion

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default {getMergeSortAnimations, getQuickSortAnimations,getBubbleSortAnimations, getInsertionSortAnimations, getSelectionSortAnimations, getShellSortAnimations};