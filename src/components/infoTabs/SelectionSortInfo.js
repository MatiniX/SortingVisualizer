import React from "react";

import image from "./imgs/Selection-Sort-Animation.gif"

export default function SelectionSoerInfo(props) {
    return(
        <div className="info-tab">
            <button className="close-button" onClick={props.close}>&#10006;</button>
            <h2 className="info-tab-title">Selection Sort</h2>
            <div className="about-section">
                <p>
                   Selection sort je jednoduchý triediaci algoritmus. Je neefektívny pre veľké listy. Je podobný insertion sortu ale obecne menej efektívny ako insertion sort.
                </p>
                <h3>Algoritmus:</h3>
                <div>
                    Selection sort rozdelí list na zoradenú a nezoradenú polovicu. Potom iteruje cez nezoradenú polovicu z ktorej vybere najmenší prvok a vymení ho 
                    s prvým prvkom v nezoradenej polovici a potom posunie hranice obidvoch polovíc. Zpočiatku je zoradená polovica prázdna a nezoradená polovica je celý list.
                    <p>
                    <p className="pop-up">Časová komplexnosť<div>Časová komplexnosť algoritmu popisuje čas, ktorý algoritmus potrebuje k svojej exekúcii.
                            Obyčajne je odhadnutá počitaním počtom základnych operácii, ktoré algoritmus urobí za predpokladu že každá táto operácia zaberie konštantný čas.</div>&nbsp;</p> je O(n<sup>2</sup>) pre priemerný a najhorší prípad. Operuje na mieste.
                    </p>
                    <div className="code-section">
                        <pre>
                            {`function selcetionSort(array) {
    for(var i = 0; i < array.length; i++) {
        var minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIdx] ) {]);
                minIdx = j;
            }
        }
        var temp = array[i];
        array[i] = array[minIdx];
        array[minIdx] = temp;
        }
    }
}`}
                        </pre>
                        <img src={image} style={{scale: "0.56", marginLeft: "107.5em", top: "10em"}} alt="mal by tu byť animovaný obrázok ale není :("></img>
                    </div>
                    <div className="explanation-section">
                        Týmto spôsobom je implementovaný selection sort na tejto stránke. Selection sort sa od iných triediacich algoritmov líši hlavne tým,
                        že vždy urobí najmenej <i>n</i> - 1 výmien. Zoradená polovica je vo vizualizácii znázornená zelenou a najmenší prvok je zvýraznený 
                        údajne <i>hnedou</i> (možno som len farboslepý). Červenou je zvýraznený prvok, cez ktorý pravé iterujem. 
                    </div>
                    <div className="references-box">
                        <b>Zdroje:</b>
                        <br/>
                        <a href="https://en.wikipedia.org/wiki/Selection_sort" target="_blank" rel="noopener noreferrer">Wikipedia</a>
                        <br/>
                        <a href="https://www.youtube.com/watch?v=xWBP4lzkoyM" target="_blank" rel="noopener noreferrer">Krátke video, ktoré znázorňuje koncept algoritmu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}