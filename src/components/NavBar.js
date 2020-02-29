import React, { useState } from "react"
import Select from "react-select"
import ReactModal from "react-modal"

import MergeSortInfo from "./infoTabs/MergeSortInfo"

function NavBar(props) {

const [currAlgorithm, setAlgorithm] = useState("mergeSort");
const [isModalOpen, setModalOpen] = useState(false);

const algorithms = [
    { value: 'mergeSort', label: 'Merge Sort' },
    { value: 'quickSort', label: 'Quick Sort' },
    { value: 'bubbleSort', label: 'Bubble Sort' },
    { value: 'insertionSort', label: 'Insertion Sort' },
    { value: 'selectionSort', label: 'Selection Sort' },
    { value: 'shellSort', label: 'Shell Sort' }
  ]
  const selecionStyling = {
      container: (provided, state) =>({
          ...provided,
          marginLeft: '2em',
          alignSelf: 'center',
          minWidth: '10em'
      })
  }
  

function changeAlgorithm(event) {
    setAlgorithm(event.value);
}
function setArrSize(event) {
    props.methods.setArrSize(event.target.value);
}
function setSortingSpeed(event) {
    if (Number.isInteger(parseInt(event.target.value))) {
        console.log(event.target.value);
        props.methods.setSortSpeed(parseInt(event.target.value));
    }
}

function sort() {
    switch (currAlgorithm) {
        case "mergeSort":
            props.methods.mergeSort()
            break;
        case "quickSort":
            props.methods.quickSort()
            break;
        case "bubbleSort":
            props.methods.bubbleSort()
            break;
        case "insertionSort":
            props.methods.insertionSort()
            break;
        case "selectionSort":
            props.methods.selectionSort()
            break;
        case "shellSort":
            props.methods.shellSort()
            break;
    }
}
function getHTML() {
    let html;

    switch (currAlgorithm) {
        case "mergeSort":
            html  = <MergeSortInfo/>
            break;
        case "quickSort":
            html = <button onClick={() => setModalOpen(false)}>Quick Sort</button>
            break;
        case "bubbleSort":
            html = <button onClick={() => setModalOpen(false)}>Bubble Sort</button>
            break;
        case "insertionSort":
            html = <button onClick={() => setModalOpen(false)}>Insertion Sort</button>
            break;
        case "selectionSort":
            html = <button onClick={() => setModalOpen(false)}>Selection Sort</button>
            break;
        case "shellSort":
            html = <button onClick={() => setModalOpen(false)}>Shell Sort</button>
            break;
    }
    return html;
}


    return(
        <div>
            <nav className="navbar-container">              
                    <div className="generate-button">
                        <button onClick={() => props.methods.resetArray() }>
                            <span>Generate Array</span>
                        </button>
                    </div>
                    <Select options={algorithms} onChange={changeAlgorithm} defaultValue={algorithms[0]} styles={selecionStyling}/>
                    <div className="ask-button" onClick={() => setModalOpen(true)}>
                        <button >
                            <span>?</span>
                        </button>
                    </div>
                    <div className="slider-container">
                        <input type="range" min="10" max="350" className="slider" value={props.arrSize} onChange={setArrSize}/>
                        <p className="slider-text">Array size: {props.arrSize}</p>
                    </div>
                    <input type="text" className="sorting-speed-area" placeholder={props.sortSpeed} onChange={setSortingSpeed}/>
                    <div className="sort-button">
                        <button onClick={sort}>
                            <span>Sort</span>
                        </button>
                    </div>
            </nav>
            <ReactModal isOpen={isModalOpen}>
                {getHTML()}
            </ReactModal>
        </div>
    )

}
export default NavBar