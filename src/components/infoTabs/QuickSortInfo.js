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
                </div>
                <div className="code-section">
                </div>
                <div className="explanation-section">
                </div>
            </div>
        </div>
    )
}