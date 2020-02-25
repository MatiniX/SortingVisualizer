import React, { useState, useEffect } from "react"
import {getMergeSortAnimations, getQuickSortAnimations, getBubbleSortAnimations, getInsertionSortAnimations, getSelectionSortAnimations, getShellSortAnimations} from "../sortingAlgorithms/sortingAlgorithms"
import NavBar from "./NavBar"

function SortingVisualizer() {
    const [SORT_SPEED_MS, setSortSpeed] = useState(5);
    const [ARRAY_SIZE, setArrSize] = useState(100);

    const [arr, setArr] = useState([]);

    useEffect( () => {       
        resetArray();
    },[])

    useEffect(() => {
        resetArray();
    },[ARRAY_SIZE]);
   
    function resetArray() {
        let arr = []
        for(let i = 0; i < ARRAY_SIZE; i++){
            arr.push(randomNumFromInerval(5,1000));
        }
        console.log(arr);
        setArr(arr);
        testSort();
    }

    function mergeSort() {
        const animations = getMergeSortAnimations(arr);
        
        for(let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar")
            const isColorChange = i % 3 !== 2
            if(isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = i % 3 === 0 ?  '#dd0510' : '#05b2dd'
                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                }, i * SORT_SPEED_MS)
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight * 0.75}px`
                }, i * SORT_SPEED_MS)
            }
        }
    }
    function quickSort() {
        const arrayBars = document.getElementsByClassName("array-bar");
        getQuickSortAnimations(arr, arrayBars, SORT_SPEED_MS);
    }
    function bubbleSort() {
        const animations = getBubbleSortAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isSwap = i % 4 === 1 || i % 4 === 2;
            if (isSwap) {
                setTimeout(() => {
                    const [barIndex, newHeight] = animations[i];
                    const barStyle = arrayBars[barIndex].style;
                    barStyle.height = `${newHeight * 0.75}px`;
                }, i * SORT_SPEED_MS);
                
            }
            else {
                const color = i % 4 === 0 ?  '#dd0510' : '#05b2dd';
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * SORT_SPEED_MS);
            }
        }
    }
    function insertionSort() {
        const animations = getInsertionSortAnimations(arr);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            if (i === 0) {
                const barStyle = arrayBars[i].style;
                setTimeout(() => {
                    barStyle.backgroundColor = 'green';
                }, i * SORT_SPEED_MS);
            }
            else if (i === animations.length - 1) {
                for (let bar of arrayBars) {
                    const barStyle = bar.style;
                    setTimeout(() => {
                        barStyle.backgroundColor = '#05b2dd';
                    }, i * SORT_SPEED_MS);
                }
            }
            else {
                const [barIndex, newHeight, color] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.backgroundColor = color;
                    barStyle.height = `${newHeight * 0.75}px`;
                }, i * SORT_SPEED_MS);
            }
        }
    }
    function selectionSort() {
        const animations = getSelectionSortAnimations(arr);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            if (i === animations.length - 1) {
                for (let bar of arrayBars) {
                    const barStyle = bar.style;
                    setTimeout(() => {
                        barStyle.backgroundColor = '#05b2dd';
                    }, i * SORT_SPEED_MS);
                }
            }
            else {
                const [idx, newHeight, color] = animations[i];
                const barStyle = arrayBars[idx].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight * 0.75}px`;
                    barStyle.backgroundColor = color;
                }, i * SORT_SPEED_MS);
            }
        }
    }
    function shellSort() {
        const animations = getShellSortAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const [barIndex, newHeight, color] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.backgroundColor = color;
                barStyle.height = `${newHeight * 0.75}px`;
            }, i * SORT_SPEED_MS);
        }
    }

    function compareArrays(arrOne, arrTwo) {
        for (let i = 0; i < arrOne.length; i++) {
            if (arrOne[i] !== arrTwo[i]) {
                return false
            }
        }
        return true
    }

    function testSort() {
        for (let i = 0; i < 100; i++) {
            const testArr = [];
            for(let j = 0; j < randomNumFromInerval(4,100); j++) {
                testArr.push(randomNumFromInerval(0,1000))
            }
            const arrCopy = testArr.slice()
            testArr.sort((a, b) => a - b)
            const animations = getShellSortAnimations(arrCopy);
            const result = compareArrays(testArr, arrCopy);
            //console.log({testArr, arrCopy});
            console.log(result);
        }
    }

    return(
        <>
            <NavBar methods={{
                resetArray: resetArray,
                setArrSize: setArrSize,
                setSortSpeed: setSortSpeed,
                mergeSort: mergeSort,
                quickSort: quickSort,
                bubbleSort: bubbleSort,
                insertionSort: insertionSort,
                selectionSort: selectionSort,
                shellSort: shellSort
            }}
             arrSize={ARRAY_SIZE} sortSpeed={SORT_SPEED_MS}/>
            <div className="array-container">
            {arr.map((value, index) => 
                <div className="array-bar" key={index} style={{height:`${value * 0.75}px`}}>
                </div>
            )}
            </div>
        </>
    )
}

const randomNumFromInerval = (min, max) => Math.max(min, Math.round(max * Math.random()))

export default SortingVisualizer