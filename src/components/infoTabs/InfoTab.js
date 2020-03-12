import React from "react"

export default function InfoTab(props) {
    return (
        <div className="info-tab">
            <button className="close-button" onClick={props.close}>&#10006;</button>
            <h2 className="info-tab-title">O projekte</h2>
            <div className="about-section">
                <p>
                   Tento projekt vznikol za účelom naučiť sa pracovať s React.js frameworkom a zlepšiť sa v JavaScripte. Ide o interaktívnu SPA aplikáciu, ktorej základom
                   je už spomenutý React.js framework.
                </p>
                <p>
                    Témou sú algoritmy, konkrétne triediace algoritmy. Cieľom je vizuálne znázorniť ako niektoré takéto algoritmy pracujú s možnosťou pre užívateľa zmeniť
                    určité hodnoty a vidieť rozdiel. Taktiež pre každý algoritmus existuje info karta, ktorá popisuje ako daný algoritmus funguje, niektoré vlastnosti, 
                    ktoré algoritmus má, nejaké zaujímavé informácie o algoritme a ukazuje ako sa dá algoritmus implementovať. 
                </p>
                <h3>Ovládanie</h3>
                <p>
                    Tlačidlo <i>Generuj</i> vľavo vygeneruje nový list s náhodnymi hodnotami. Veľkosť toho listu určuje potom hodnota <i>Veľkosť list</i>, ktorá sa dá 
                    upraviť sliderom. Každý modrý pásik potom predstavuje hodnotu medzi 5 až 1000 (celé čísla). Tlačidlo <i>zoradiť</i> potom zoradí momentálny list
                    za využitia práve zvoleného algoritmu. Algoritmy možno voliť z dropdownu vedľa tlačidla <i>generuj</i>. Otáznik naľavo od dropdownu zobrazí infokartu
                    o práve zvolenom algoritme. Rýchlosť akou triedenie prebieha určuje malé pole vedľa tlačidla <i>zoradiť</i>. Do tohto poľa je možné vpísať ľubovolné
                    čislo. Toto čislo potom predstavuje zdržanie v <i>milisekundách</i>, ktoré bude medzi jednotlivími krokmi algoritmu. Základna hodnota pre toto pole
                    je 5<i>ms</i>. Táto hodnota je potom použitá ak je do poľa zadaná nesprávna hodnota (text) alebo nie je zadaná žiadna hodnota. Doporučené sú hodnoty medzi
                    1 až 50 <i>ms</i>. Ale ak máte celý deň podporované sú hodnoty aj nad 1000<i>ms</i>. Pre bubble sort doporučujem rýchlosť 1<i>ms</i> pre listy nad 75 prvkov.
                </p>
                <h3>Predpoklady pre užívateľa</h3>
                <p>
                    Toto nie je aplikácia pre obyčajného Ďurka alebo Janka. Užívateľ by mal byť oboznámeny so základnými princípmi programovania. Je potrebné hlavne vedieť
                    čo je to <i>array</i> (v tejto aplikácii pre národnostné účely referujem túto dátovú štruktúru ako <i>list</i>). <i>Pseudocode</i> použitý v tejto 
                    aplikácii pre ukážky implementácii algoritmov je len mierne pozmenený JavaScript. Každá takáto ukážka je založená na reálnej implementácii v tejto
                    aplikácii.
                </p>
            </div>
        </div>
    )

}