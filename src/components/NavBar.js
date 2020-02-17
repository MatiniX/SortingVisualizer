import React, { useState, useEffect } from "react"
import Select from "react-select"

function NavBar(props) {

const [currAlgorithm, setAlgorithm] = useState("mergeSort");

const algorithms = [
    { value: 'mergeSort', label: 'Merge Sort' },
    { value: 'quickSort', label: 'Quick Sort' },
    { value: 'bubbleSort', label: 'Bubble Sort' }
  ]
  const selecionStyling = {
      container: (provided, state) =>({
          ...provided,
          marginLeft: '0.5em',
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
    }
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
        </div>
    )

}
export default NavBar