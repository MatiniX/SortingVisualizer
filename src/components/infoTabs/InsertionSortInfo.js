import React from "react";

import image from "./imgs/Insertion-sort-example-300px.gif";

export default function InsertionSortInfo(props) {
    return(
        <div className="info-tab">
            <button className="close-button" onClick={props.close}>&#10006;</button>
            <h2 className="info-tab-title">Insertion Sort</h2>
            <div className="about-section">
                <p>
                   Insertion sort je jednoduchý triediaci algoritmus, ktorý postupne buduje finálny zoradený list prvok po prvku. Je neefektívny pre veľké listy oproti
                   pokoročilejším algoritmom ako merge sort alebo quick sort. Napriek tomu má svoje výhody.
                </p>
                <h3>Algoritmus:</h3>
                <div>
                    Podobne ako keď zoraďujeme karty v rukách. Najprv zoradíme prvé dve a potom ďalšie umiestnime zodpovedajúco medzi ostatné. 
                    Insertion sort iteruje cez list a postupne z každou iteráciou vyberie prvok a správne ho umiestni na jeho pozíciu. Tento postup opakuje až kým
                    v liste neostávajú žiadne nezoradené prvky. 
                    <p>
                    <p className="pop-up">Časová komplexnosť<div>Časová komplexnosť algoritmu popisuje čas, ktorý algoritmus potrebuje k svojej exekúcii.
                            Obyčajne je odhadnutá počitaním počtom základnych operácii, ktoré algoritmus urobí za predpokladu že každá táto operácia zaberie konštantný čas.</div>&nbsp;</p> insertion sortu je O(n<sup>2</sup>) pre priemerný a najhorší prípad. Operuje na mieste. Jednou z jeho výhod je, že patrí medzi <i>online</i> algoritmy.
                        To znamená, že dokáže spracovať dáta súčasne ako ich prijíma. Aj keď je neefektívny pre veľké listy, tak pre malé listy
                       patrí k najrýchlejším, dokonca je rýchlejší ako quick sort.
                    </p>
                    <div className="code-section">
                        <pre>
                            {`function insertionSort(array) {
    var j;
    for (var i = 1; i < array.length; i++) {
        j = i;
        while (j > 0 && array[j - 1] > array[j]) {
            var temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
    }
}`}
                        </pre>
                        <img src={image} style={{marginLeft: "94em", top: "16.3em"}} alt="mal by tu byť animovaný obrázok ale není :("></img>
                    </div>
                    <div className="explanation-section">
                        Takto jednoducho možno implementovať insertion sort. Insertion sort má vlastnoť, že po <i>n</i> iteráciach je prvých <i>n</i> + 1 prvkov v
                        liste zoradených (+ 1 preto lebo po prvej iterácii zoradíme hneď dva prvky). Vo vizualizácii sú zelenou zvýraznené zoradené prvky.
                    </div>
                    <div className="references-box">
                        <b>Zdroje:</b>
                        <br/>
                        <a href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank" rel="noopener noreferrer">Wikipedia</a>
                        <br/>
                        <a href="https://www.youtube.com/watch?v=OGzPmgsI-pQ" target="_blank" rel="noopener noreferrer">Krátke video, ktoré znázorňuje koncept algoritmu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}