import React from "react"
import image from "./imgs/Merge-sort-example-300px.gif"


export default function MergeSortInfo() {
    return (
        <div className="info-tab">
            <button className="close-button">&#10006;</button>
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
                                    Rozdeliť nezoradený rad na až kým neostane n "pod-radov", ktoré obsahujú každý 1 prvok (rad s jedným prvkom je považovaný za zoradený) 
                                </p>
                            </li>
                            <li>
                                <p>
                                    Opakovane zlučovať tieto pod-rady a výtvárať nové zoradené pod-rady až kým neostane len jeden. To bude náš zoradený rad.
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
                                {``}
                            </pre>
                        </code>
                    </div>
                </div>
            </div>
        </div>
    )
}
