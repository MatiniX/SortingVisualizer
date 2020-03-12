import React, { useState, useEffect } from "react"
import algorithms from "../sortingAlgorithms/sortingAlgorithms"
import NavBar from "./NavBar"
import ReactModal from "react-modal"
import InfoTab from "./infoTabs/InfoTab"

function SortingVisualizer() {
    if (sessionStorage.getItem("infoModalBool") === null) {
        //console.log(infoModalShow);
        sessionStorage.setItem("infoModalBool", JSON.stringify(true));
    }
    const [infoModalShow, setInfoModalShow] = useState(JSON.parse(sessionStorage.getItem("infoModalBool")) || true);
    

    const [SORT_SPEED_MS, setSortSpeed] = useState(5);
    const [ARRAY_SIZE, setArrSize] = useState(100);

    const [arr, setArr] = useState([]);

    useEffect( () => {       
        resetArray();
    },[])

    useEffect(() => {
        resetArray();
    },[ARRAY_SIZE]);

    useEffect(() => {
        sessionStorage.setItem("infoModalBool", infoModalShow)
    },[infoModalShow]);
   
    function resetArray() {
        let arr = []
        for(let i = 0; i < ARRAY_SIZE; i++){
            arr.push(randomNumFromInerval(5,1000));
        }
        console.log(arr);
        setArr(arr);
    }

    function mergeSort() {
        const arrayBars = document.getElementsByClassName("array-bar");
        algorithms.getMergeSortAnimations(arr, arrayBars, SORT_SPEED_MS);
    }
    function quickSort() {
        const arrayBars = document.getElementsByClassName("array-bar");
        algorithms.getQuickSortAnimations(arr, arrayBars, SORT_SPEED_MS);
    }
    function bubbleSort() {
        const animations = algorithms.getBubbleSortAnimations(arr);
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
        const animations = algorithms.getInsertionSortAnimations(arr);
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
        const animations = algorithms.getSelectionSortAnimations(arr);
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
        const animations = algorithms.getShellSortAnimations(arr);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const [barOne, barTwo, state] = animations[i];
            if (state === "compare") {
                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = barOneStyle.backgroundColor !== '#05b2dd'? '#dd0510' : '#05b2dd';
                    barTwoStyle.backgroundColor = barTwoStyle.backgroundColor !== '#05b2dd'? '#dd0510' : '#05b2dd';
                }, i * SORT_SPEED_MS);
            }
            else {
                const barStyle = arrayBars[barOne].style;
                setTimeout(() => {
                    barStyle.backgroundColor = state;
                    barStyle.height = `${barTwo * 0.75}px`;
                }, i * SORT_SPEED_MS);
            }
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
            const animations = algorithms.getShellSortAnimations(arrCopy);
            const result = compareArrays(testArr, arrCopy);
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
            <ReactModal isOpen={infoModalShow} >
                <InfoTab close={() => setInfoModalShow(false)}/>
            </ReactModal>
        </>
    )
}

const randomNumFromInerval = (min, max) => Math.max(min, Math.round(max * Math.random()))

export default SortingVisualizer