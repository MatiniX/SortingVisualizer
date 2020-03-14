import React from "react"

export default function InfoTab(props) {
    return (
        <div className="info-tab">
            <button className="close-button" onClick={props.close}>&#10006;</button>
            <h2 className="info-tab-title">O projekte</h2>
            <div className="about-section">
                <p>
                   Tento projekt vznikol z kopy voľného času a s úmyslom naučiť sa pracovať s React.js frameworkom a zlepšiť sa v JavaScripte. Ide o interaktívnu SPA 
                   aplikáciu, ktorej základom je už spomenutý React.js framework. Inšpiráciou pre aplikáciu bolo toto <a href="https://www.youtube.com/watch?v=pFXYym4Wbkc" target="_blank" rel="noopener noreferrer">video.</a>
                </p>
                <p>
                    Témou sú algoritmy. Konkrétne triediace algoritmy. Cieľom je predstaviť užívateľovi niektoré najznámejšie tieto algoritmy a vizuálne znázorniť ako pracujú.
                    Ku každému algoritmu potom existuje aj infokarta, ktorá: vysvsetľuje ako algoritmus pracuje, aké sú niektoré jeho vlastnosti, kde sa využíva, nejaké
                    zaujímavé informácie o danom algoritme, spolu s ukážkou ako sa dá daný algoritmus implementovať. Užívateľ má možnosť meniť niektoré hodnoty a vidieť
                    rozdiel, ktorý ich zmena prinesie.
                </p>
                <h3>Ovládanie</h3>
                <p>
                    Tlačidlo <i>Generovať</i> vľavo vygeneruje nový list s náhodnymi hodnotami. Veľkosť toho listu určuje potom hodnota <i>Počet prvkov</i>, ktorá sa dá 
                    upraviť sliderom. Každý modrý pásik potom predstavuje hodnotu medzi 5 až 1000 (celé čísla). Tlačidlo <i>Zoradiť</i> potom zoradí momentálny list
                    za využitia práve zvoleného algoritmu. Algoritmy možno voliť z dropdownu vedľa tlačidla <i>Generovať</i>. Otáznik naľavo od dropdownu zobrazí infokartu
                    o práve zvolenom algoritme. Rýchlosť akou triedenie prebieha určuje malé pole vedľa tlačidla <i>Zoradiť</i>. Do tohto poľa je možné vpísať ľubovolné
                    čislo. Toto čislo potom predstavuje zdržanie v <i>milisekundách</i>, ktoré bude medzi jednotlivími krokmi algoritmu. Základna hodnota pre toto pole
                    je 5<i>ms</i>. Táto hodnota je potom použitá ak je do poľa zadaná nesprávna hodnota (text) alebo nie je zadaná žiadna hodnota. Doporučené sú hodnoty medzi
                    1 až 50 <i>ms</i>. Ale ak máte celý deň podporované sú hodnoty aj nad 1000<i>ms</i>. Pre bubble sort doporučujem rýchlosť 1<i>ms</i> pre <i>Počet prvkov</i> nad 
                    75 prvkov.
                </p>
                <h3>Predpoklady pre užívateľa</h3>
                <p>
                    Aplikácia nie je určená pre obyčajného Ďurka alebo Janka. Predpokladá sa, že užívateľ je oboznámený so základnými princípmi programovania a vie čo znamená
                    pojem <i>array</i> (v tejto aplikácii prekladám ako <i>list.</i>) <i>Pseudocode</i>, ktorým sú napísané implementácie je len mierne upravený pôvodný
                    JavaScript (dúfam že názvy variabilov v ukážkach sú dosť sebavýstižné). Samotné ukážky sa len málo líšia od toho ako sú dané algoritmy implementované
                    práve v tejto aplikácii.
                </p>
                <h3>Autor</h3>
                <p>
                    Aplikáciu vytvoril Martin Michálik. Vek 16 rokov. Toho času ešte žiak základnej školy.<br/>
                    <a href="https://github.com/MatiniX/SortingVisualizer" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
                <p style={{opacity: "0.8", marginTop: "10em"}}>
                    <b>PS:</b> Ak spustíte vizualizáciu niektorého algoritmu musíte počkat až kým vizualizácia neskonči. Takže ak sa vám stane, že pustíte bubble sort
                    na liste s 150+ prvkami hoci aj na základnej rýchlosti 5<i>ms</i> (ako dlho bude trvať animácia celého buble sortu môžte potom vypočitať
                    vozorcomm (<i>n<sup>2</sup>*zdržanie(ms)*2</i>) kde <i>n</i> je počet prvkov). Ak sa ocitnete v takejto situácii a nechcete čakať riešením je 
                    stlačiť <i>F5</i> (jednoducho refreshnúť stránku). Táto infokarta sa zobrazí len pri otvorení stránky (ak ju chcete zobrziť znova musíte stránku 
                    zavoriť a znova otvoriť).  
                </p>
            </div>
        </div>
    )

}