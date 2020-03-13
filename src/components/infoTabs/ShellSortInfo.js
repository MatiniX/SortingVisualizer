import React from "react"

export default function ShellSortInfo(props) {
    return(
        <div className="info-tab">
            <button className="close-button" onClick={props.close}>&#10006;</button>
            <h2 className="info-tab-title">Shell Sort</h2>
            <div className="about-section">
                <p>
                   Na shell sort môžme pozerať buď ako na verziu insertion sortu (väčšinou) alebo bubble sortu. Pracuje tak, že porovnáva prvky, ktoré sú od seba vzidalené 
                   nejakou <i>medzerou</i>, ktorú potom postupne zmenšuje. Shell sort je <i>adaptívny</i> algoritmus. To znamená, že je efektívnejší ak je vstup už čiastočne zoradený.
                    Prvá verzia bola publikovaná  Donaldom Shellom v roku 1959.
                </p>
                <h3>Algoritmus:</h3>
                <div>
                    Princípom algoritmu je porovnávať prvky, ktoré sú od seba vzdialené nejakou <i>medzerou</i> a vymeniť ich ak sú v nesprávnom poradí narozdiel
                     od susedných ako v insertion sorte. Túto medzeru potom postupne zmenšujeme až kým nie je veľkosť <i>medzery</i> 1 vtedy algoritmus pracuje
                     rovanko ako insertion sort, po tejto iterácii je list zoradený. <i>Medzeru</i> potom vypočítame pre každú iteráciu. 
                    <p>
                       Shell sort operuje na mieste. Časová komplexsnoť tohto algoritmu potom závisí od toho akým spôsobom vypočítavame <i>medzeru</i>, ktorá je medzi
                       prvkami. Všeobecne ale platí, že pre najhorší prípad je <p className="pop-up">časová komplexnosť<div>Časová komplexnosť algoritmu popisuje čas, ktorý algoritmus potrebuje k svojej exekúcii.
                            Obyčajne je odhadnutá počitaním počtom základnych operácii, ktoré algoritmus urobí za predpokladu že každá táto operácia zaberie konštantný čas.</div>&nbsp;</p> O(n<sup>2</sup>) a pre priemerný je to O(n<sup>3/2</sup>) alebo 
                       O(n<sup>5/4</sup>). Určenie časovej komplexnosti pre niektoré sekvencie <i>medzier</i> ostáva ako otvorený problém.
                    </p>
                    <div className="code-section">
                        <pre>
                            {`function shellSort(array) {
    for (var gap = array.length / 2 ; gap > 0; gap = gap / 2) {
        for (var i = gap; i < array.length; i++) {
            var temp = array[i];
            var j;
            for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap]
            }
            array[j] = temp;
        }
    }
}`}
                        </pre>
                    </div>
                    <div className="explanation-section">
                        V tejto implementácii začneme s medzerou, ktorá je <i>dĺžka listu/2</i> a s každou iteráciou ju zmenšime o polovicu (<i>medzera/2</i>). Potom vždy
                        začneme porovnávať prvky od prvku, ktorý ma index <i>medzery</i> s prvkami, ktoré sú vždy o veľkosť našej <i>medzery</i> pred ním v liste. Ak sú v zlom
                        poradí tak ich vymeníme. Takto postupujeme až kým veľkosť <i>medzery</i> nie je 1. Vo vizualizácii sú potom červenou zvýraznené prvky, ktoré porovnávame a
                        vymieňame.
                    </div>
                    <div className="references-box">
                        <b>Zdroje:</b>
                        <br/>
                        <a href="https://en.wikipedia.org/wiki/Shellsort" target="_blank" rel="noopener noreferrer">Wikipedia</a>
                        <br/>
                        <a href="https://www.youtube.com/watch?v=SHcPqUe2GZM" target="_blank" rel="noopener noreferrer">Krátke video, ktoré znázorňuje koncept algoritmu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}