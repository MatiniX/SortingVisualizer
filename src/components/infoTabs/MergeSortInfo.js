import React from "react"
import image from "./imgs/Merge-sort-example-300px.gif"


export default function MergeSortInfo(props) {
    return (
        <div className="info-tab">
            <button className="close-button" onClick={props.close}>&#10006;</button>
            <h2 className="info-tab-title">Merge Sort</h2>
            <div className="about-section">
                <p>
                    Merge sort je efektívny všeobecne-účelový triediaci algoritmus. Patrí do kategórie "Rozdeliť a dobiť" algoritmov.
                     To znamená, že väčšie problémy rozdelí na menšie ľahšie riešiteľné. Bol vynájdený roku 1945 Johnom von Neumannom.
                </p>
                <h3>Algoritmus:</h3>
                <div>
                    Konceptuálne merge sort funguje následovne:
                    <div className="list-img">
                        <ol>
                            <li>
                                <p>
                                    Rozdelovať nezoradený list až kým neostane n "pod-listov", ktoré obsahujú každý 1 prvok (list s jedným prvkom je považovaný za zoradený) 
                                </p>
                            </li>
                            <li>
                                <p>
                                    Opakovane zlučovať tieto "pod-listy" a výtvárať nové zoradené "pod-listy" až kým neostane len jeden. To bude náš zoradený list.
                                </p>
                            </li>
                        </ol>
                        <img src={image}></img>
                    </div>
                    <br />
                    <br />
                    <p>
                        Časová komplexnosť Merge sortu je O(n log n) pre priemerný aj najhorší prípad. Neoperuje však na mieste. To znamená, že sú potrebné pomocné kópie 
                        hodnôt.
                    </p>
                    <p>
                        Implementovať sa dá dvomi spôsobmi. Zhora-dole a Zdola-hore. Pri implementácií zhora-dole algoritmus rekurzívne delí list na polovice až kým 
                        neostanú listy s jedným prvkom a potom tieto listy postupne zlúči a zoradí. Pri implementácií zdola-hore sú jednotlivé prvky v už brané ako listy
                        s jedným prvkom a iteratívne zlučované a zoradované.
                    </p>
                    <div className="code-section">
                        <code>
                            <pre>
                                {`function merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray) {
    var k = startIdx;
    var i = startIdx;
    var j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            mainArray[k] = auxiliaryArray[i];
            k++;
            i++;
        }
        else {
            mainArray[k] = auxiliaryArray[j];
            k++;
            j++;
        }
    }
    while (i <= middleIdx) {
        mainArray[k] = auxiliaryArray[i];
        k++;
        i++;
    }
    while (j <= endIdx) {
        mainArray[k] = auxiliaryArray[j];
        k++;
        j++;
    }
}

function mergeSort(mainArray, startIdx, endIdx, auxiliaryArray) {
    if(startIdx === endIdx) return;
    var middleIdx = Math.floor((startIdx + endIdx) / 2);

    mergeSort(auxiliaryArray, startIdx , middleIdx, mainArray);
    mergeSort(auxiliaryArray, middleIdx + 1, endIdx, mainArray);

    merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
}`}
                            </pre>
                        </code>
                    </div>
                    <div className="explanation-section">
                        Takýmto spôsobom je implementovaný merge sort na tejto stránke. Ide o implementáciu zhora-dole. Kde <p className="code-highlight">mainArray</p> je list, ktorý chceme zoradiť  
                        a <p className="code-highlight">auxiliaryArray</p> je kópia tohto listu. Aktuálne zoraďovanie potom prebieha vo 
                        funkcii <p className="code-highlight">merge()</p>. Potom funkcia <p className="code-highlight">mergeSort()</p> rekurzívne volá samu seba na obidvoch
                        poloviciach listu s tým rozdielom, že tento raz vymeníme poradie parametrov a namiesto <p className="code-highlight">mainArray</p> dáme <p className="code-highlight">auxiliaryArray</p>.
                        Takto postupne zoradíme <p className="code-highlight">auxiliaryArray</p>, až kým
                        neostanú dve zoradené polovice listu tie potom v zlúčime do finálneho listu ako možno vidieť vo vizualizácii. Treba si uvedomiť že celý čas pracujeme
                        na <p className="code-highlight">auxiliaryArray</p>, ktorú postupne rozdeľujeme a následovne zlučujeme a až v poslednej iterácii rekurzie
                        zlúčime hodnoty do <p className="code-highlight">mainArray</p> čo bude naša finálna zoradená verzia listu. Vo vizualizácii môžete vidieť 
                        rekurziu prebiehať súčasne.
                    </div>
                    <div className="references-box">
                        <b>Zdroje:</b>
                        <br/>
                        <a href="https://en.wikipedia.org/wiki/Merge_sort" target="_blank">Wikipedia</a>
                        <br/>
                        <a href="https://www.youtube.com/watch?v=JSceec-wEyw" target="_blank">Krátke video, ktoré znázorňuje koncept algoritmu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
