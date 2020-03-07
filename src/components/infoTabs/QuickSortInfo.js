import React from "react"

import image from "./imgs/Sorting_quicksort_anim.gif";

export default function QuickSortInfo(props) {
    return(
        <div className="info-tab">
            <button className="close-button" onClick={props.close}>&#10006;</button>
            <h2 className="info-tab-title">Quick Sort</h2>
            <div className="about-section">
                <p>
                    Quick sort je efektívny triediaci algoritmus, ktorý patrí do kategórie "Rozdeliť a dobiť" algoritmov. Vynájdený bol roko 1959 britským
                    počítačovým vedcom menom Tony Hoare a dodnes je to bežne používnaý algoritmus pre triedenie. Správne implementovaný môže býť
                    2- až 3- krát rýchlejší ako jeho hlavný konkurenti Merge sort a Heap sort. 
                </p>
                <h3>Algoritmus:</h3>
                <div>
                    Konceptuálne quick sort funguje následovne:
                    <div className="list-img">
                        <ol>
                            <li>
                                <p>
                                    Vybrať z listu prvok zvaný <i>pivot</i>.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <i>Delenie:</i> Zoradiť prvky v liste tak aby prvky s hodnotou menšiou ako <i>pivot</i> boli v liste pred <i>pivotom</i> (naľavo od <i>pivota</i>)
                                    a aby prvky väčšie ako <i>pivot</i> boli v liste za ním (napravo od <i>pivota</i>).
                                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Po tomto je <i>pivot</i> vo svojej finálnej pozícii.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Rekurzívne aplikovať tieto kroky na pod-list naľavo od <i>pivota</i> a rovnako na pod-list napravo.
                                </p>
                            </li>
                        </ol>
                        <img src={image} style={{margin: "2em 0 0 2em"}}/>
                    </div>
                    <br/>
                    <br/>
                    <p>
                        Časová komplexnosť quick sortu je O(n log n) pre priemerný prípad ale pre najhorší prípad je to O(n<sup>2</sup>). Najhorší prípad je
                        však pomerne vzácny. Operuje na mieste, potrebuje len malé monožstvo dotatočnej pamäte aby zoradil prvky.
                    </p>
                    <p>
                        Implementovať ja dá mnohými spôsobmi. Implementácie sa potom líšia na základe toho aku schému pre delenie prvkov používajú a akým 
                        spôsobom je vybraný <i>pivot</i> v liste.
                    </p>
                    <p>
                        Schémy pre delenie sú 2:<br/>
                        <b>Lomutova schéma.</b> Táto schéma najprv zvolí <i>pivota</i> (typicky posledný prvok v liste). Potom algoritmus zachováva index <i>i</i>
                        zatiaľ čo skenuje list za pomoci ďalšieho indexu <i>j</i> tak aby hodnoty od začiatku listu až po <i>i - 1</i> (vrátane) boli
                        menšie ako <i>pivot</i> a hodnoty od <i>i</i> až po koniec listu boli väčšie ako <i>pivot</i>. Táto schéma je kompaktnejšia a ľahšie
                        pochopiteľná aj keď menej efektívna ako pôvodná Hoareova schéma.<br/>
                        <b>Hoareova schemá.</b> Originálna schéma popísaná tvorcom quick sortu. Táto schéma využíva 2 indexy na začiatku a na konci listu, ktoré
                        sa postupne približujú pokým nenarazia na inverziu: pár prvkov z ktorých je jeden väčší alebo alebo rovný <i>pivotovy</i> a druhý
                        menší alebo rovný <i>pivotovy</i> a sú v zlom poradí relatívne k sebe (menší prvok je napravo od <i>pivota</i> väčší naľavo). 
                        Potom sú prvky vymenené. Keď sa indexy stretnú algoritmus sa zastaví a vráti finálny index <i>pivota.</i> Táto schéma je efektívnejšia
                        pretože urobí v priemere až 3-krát menej porovnaní ako Lomutova.
                    </p>
                    <p>
                        Ďaľším problémom implementácie je potom výber <i>pivota</i>. Keďže tento krok rozhoduje právo o tom koľko porovnaní algoritmus urobí.
                        Ideálne chceme vybrať prvok, ktorý bude vo zoradenej verzii listu práve v jeho strede. Poradie v akom prvky po zoradení skončia však nevieme
                        preto výber <i>pivota</i> môžme previesť niekoľkými spôsobmi. Najľahšie je vybrať za <i>pivota</i> prvý, prostredný, posledný alebo náhodný
                        prvok. Odporúča sa však vybrať "medián troch", pri tomto výbere <i>pivota</i> sa vybere prostredná hodnota z prvého, prostredného a posledného
                        prvku v liste.
                    </p>
                
                    <div className="code-section">
                    <pre>
                        {`function quickSort(array, startIdx, endIdx) {
    if(startIdx < endIdx) {
        var pivot = partition(array, startIdx, endIdx);

        quickSort(array, startIdx, pi - 1);
        quickSort(array, pi + 1, endIdx);
    }
}

function partition(array, startIdx, endIdx) {
    
    var pivot = array[endIdx];
    var i = startIdx - 1;

    for (var j = startIdx; j < endIdx; j++) {
        if (array[j] < pivot) {
            i++;
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;           
        }
    }
    var temp = array[i + 1];
    array[i + 1] = array[endIdx];
    array[endIdx] = temp;
    return i + 1;
}`}
                    </pre>
                    </div>
                    <div className="explanation-section">
                        Takto spôsobom je implementovaný quick sort na tejto stránke. Použitá je Lomutova schéma a za pivota je výbraný posledný prvok v liste. 
                        Samotné triedenie a výber pivota prebieha vo funkcii <p className="code-highlight">partition()</p>, ktorá potom navráti index pivota a potom
                        funkcia <p className="code-highlight">quickSort()</p> rekurzívne volá samu seba naľavej a napravej strane listu od pivota. Toto je
                        vo vizualizácii zobrazené objavením ďalších pivotných bodov a zoraďovaním prvkov pred nimi.
                        
                    </div>
                </div>
            </div>
        </div>
    )
}