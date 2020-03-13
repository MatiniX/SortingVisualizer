import React from "react";

import image from "./imgs/Bubble-sort-example-300px.gif"

export default function BubbleSortInfo(props) {
    
    return(
        <div className="info-tab">
            <button className="close-button" onClick={props.close}>&#10006;</button>
            <h2 className="info-tab-title">Bubble Sort</h2>
            <div className="about-section">
                <p>
                   Bubble sort je jednoduchý avšak veľmi neefektívny tiediaci algoritmus. Kvôli svojej jednoduchosti je bubble sort často používaný na
                   predstavenie konceptu triediaceho algoritmu. Aj keď niektorý odborníci doporučujú aby sa už nevyučoval.
                </p>
                <h3>Algoritmus:</h3>
                <div>
                    Koncept bubble sortu je veľmi jednoduchý. Porovnávať susedné prvky v liste a vymeniť ich v prípade ak sú v zlom poradí. Tento postup
                    opakovať až kým list nebude zoradený.
                    
                    <p>
                    <p className="pop-up">Časová komplexnosť<div>Časová komplexnosť algoritmu popisuje čas, ktorý algoritmus potrebuje k svojej exekúcii.
                            Obyčajne je odhadnutá počitaním počtom základnych operácii, ktoré algoritmus urobí za predpokladu že každá táto operácia zaberie konštantný čas.</div>&nbsp;</p> bubble sortu je O(n<sup>2</sup>) pre priemerný aj najhorší prípad. Kvôli tomuto je bubble sort tak neefektívny. Dokonca
                        aj iné triediace algoritmy, ktoré majú rovnakú časovú komplexnosť ako napríklad insertion sort, sú obecne rýcheljšie ako bubble sort.
                        Operuje na mieste. 
                    </p>
                    <div className="code-section">
                        <pre>
                            {`function bubbleSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}`}
                        </pre>
                    </div>
                    <img id="bubble-sort-img" src={image} alt="mal by tu byť animovaný obrázok ale není :("></img>
                    <div className="explanation-section">
                        Implementovať bubble sort je veľmi jednoduché ako môžte vidieť. Aj keď je bubble sort veľmi neefektívny má využitie v počítačovej grafike vďaka svojej
                        schopnosti detekovať malé chyby(ako napríklad nesprávne poradie dvoch prvkov) v takmer zoradených listoch. 
                    </div>
                    <div className="references-box">
                        <b>Zdroje:</b>
                        <br/>
                        <a href="https://en.wikipedia.org/wiki/Bubble_sort" target="_blank" rel="noopener noreferrer">Wikipedia</a>
                        <br/>
                        <a href="https://www.youtube.com/watch?v=nmhjrI-aW5o" target="_blank" rel="noopener noreferrer">Krátke video, ktoré znázorňuje koncept algoritmu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}