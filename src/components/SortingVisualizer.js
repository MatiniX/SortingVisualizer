import React, { useState, useEffect } from "react"
import {getMergeSortAnimations, getQuickSortAnimations} from "../sortingAlgorithms/sortingAlgorithms"
//import sortFunctions from "../sortingAlgorithms/sortingAlgorithms"
import NavBar from "./NavBar"

function SortingVisualizer() {
    const SORT_SPEED_MS = 5
    const [ARRAY_SIZE, setArrSize] = useState(100);

    const [arr, setArr] = useState([]);

    useEffect( () => {       
        resetArray()
    },[])

    useEffect(() => {
        resetArray();
    },[ARRAY_SIZE]);
   
    function resetArray() {
        let arr = []
        for(let i = 0; i < ARRAY_SIZE; i++){
            arr.push(randomNumFromInerval(5,1000))
        }
        console.log(arr)
        setArr(arr)
    }

    function mergeSort() {
        const animations = getMergeSortAnimations(arr)
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
        const animations = getQuickSortAnimations(arr);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const [bar, height, color] = animations[i];
            
            setTimeout(() => {
                const barStyle = arrayBars[bar].style;
                barStyle.height = `${height * 0.75}px`;
                barStyle.backgroundColor = color;
            }, i * SORT_SPEED_MS)
        }
        console.log(arr);
    }

    function compareArrays(arrOne, arrTwo) {
        for (let i = 0; i < arrOne.length; i++) {
            if (arrOne[i] !== arrTwo[i]) {
                return false
            }
        }
        return true
    }

    function testQuicksort() {
        for (let i = 0; i < 100; i++) {
            const testArr = []
            for(let j = 0; j < randomNumFromInerval(0,100); j++) {
                testArr.push(randomNumFromInerval(0,1000))
            }
            const arrCopy = testArr.slice()
            testArr.sort((a, b) => a - b)
            const animations = getQuickSortAnimations(arrCopy);
            const result = compareArrays(testArr, arrCopy)
            console.log(result)
        }
    }

    return(
        <>
            <NavBar methods={{
                resetArray: resetArray,
                setArrSize: setArrSize,
                mergeSort: mergeSort,
                quickSort: quickSort
            }}
             arrSize={ARRAY_SIZE}/>
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