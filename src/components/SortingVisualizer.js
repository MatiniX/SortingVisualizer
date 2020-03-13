import React, { useState, useEffect } from "react"
import algorithms from "../sortingAlgorithms/sortingAlgorithms"
import NavBar from "./NavBar"
import ReactModal from "react-modal"
import InfoTab from "./infoTabs/InfoTab"

function SortingVisualizer() {
    if (sessionStorage.getItem("infoModalBool") === null) {
        sessionStorage.setItem("infoModalBool", JSON.stringify(true));
    }
    const [infoModalShow, setInfoModalShow] = useState(JSON.parse(sessionStorage.getItem("infoModalBool")) || true);
    

    const [SORT_SPEED_MS, setSortSpeed] = useState(5);
    const [ARRAY_SIZE, setArrSize] = useArray(100);
    const [isSorting, setIsSorting] = useState(false);

    const [arr, setArr] = useState([]);

    useEffect(() => {
        sessionStorage.setItem("infoModalBool", infoModalShow)
    },[infoModalShow]);
   
    function useArray(size) {
        const [ARRAY_SIZE, setArrSize] = useState(size);

        useEffect(() => {
            function resetArrayHook() {
                let arr = []
                for(let i = 0; i < ARRAY_SIZE; i++){
                    arr.push(randomNumFromInerval(5,1000));
                }
                console.log(arr);
                setArr(arr);
            }
            resetArrayHook();
        },[ARRAY_SIZE]);
        return [ARRAY_SIZE, setArrSize];
    }

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
        setIsSorting(true);
        algorithms.getMergeSortAnimations(arr, arrayBars, SORT_SPEED_MS, finishCallback);
    }
    function quickSort() {
        const arrayBars = document.getElementsByClassName("array-bar");
        setIsSorting(true);
        algorithms.getQuickSortAnimations(arr, arrayBars, SORT_SPEED_MS, finishCallback);
    }
    function bubbleSort() {
        toggleButtons(true);
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
                    if (i === animations.length - 1) {
                        toggleButtons(false);
                    }
                }, i * SORT_SPEED_MS);
            }
        }
    }
    function insertionSort() {
        toggleButtons(true);
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
                        toggleButtons(false);
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
        toggleButtons(true);
        const animations = algorithms.getSelectionSortAnimations(arr);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            if (i === animations.length - 1) {
                for (let bar of arrayBars) {
                    const barStyle = bar.style;
                    setTimeout(() => {
                        barStyle.backgroundColor = '#05b2dd';
                        toggleButtons(false);
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
        toggleButtons(true);
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
                    if (i === animations.length - 1) {
                        toggleButtons(false);
                    }
                }, i * SORT_SPEED_MS);
            }
        }
    }

    function finishCallback() {
        setIsSorting(false);
    }
    function toggleButtons(enabled) {
        let genButton = document.getElementById("genButton")
        let sortButton = document.getElementById("sortButton")
        console.log(genButton);
        console.log(sortButton);
        genButton.disabled = enabled;
        sortButton.disabled = enabled;
    }

    return(
        <>
            <NavBar methods={{
                resetArray: resetArray,
                setArrSize: setArrSize,
                setSortSpeed: setSortSpeed,
                setIsSorting: setIsSorting,
                mergeSort: mergeSort,
                quickSort: quickSort,
                bubbleSort: bubbleSort,
                insertionSort: insertionSort,
                selectionSort: selectionSort,
                shellSort: shellSort
            }}
             arrSize={ARRAY_SIZE} sortSpeed={SORT_SPEED_MS} isSorting={isSorting}/>
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