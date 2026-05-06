// Den här funktionen körs när användaren klickar på "Lägg till"-knappen
function läggTill() {
 
    // Hämta textfältet och läs av vad användaren har skrivit
    let textFält = document.getElementById("inputFalt");
    let text = textFält.value;

    // Om fältet är tomt, visa en varning och avbryt funktionen
    if (text === "") {
        alert("Skriv något först!");
        return;
    }

    // Skapa ett nytt listobjekt <li> som ska hålla uppgiften
    let li = document.createElement("li");

    // Skapa en span för bocken (✅) – den är tom från början
    let bockSpan = document.createElement("span");

    // Skapa en span för uppgiftens text och lägg in det användaren skrev
    let textSpan = document.createElement("span");
    textSpan.innerText = text;

    // Skapa en radera-knapp
    let knapp = document.createElement("button");
    knapp.innerText = "✕";

    // När man klickar på knappen tas hela li-elementet bort från listan
    knapp.onclick = function() {
        li.remove();
    };

    // När man klickar på texten markeras uppgiften som klar (eller oklar)
    textSpan.onclick = function() {

        // toggle lägger till klassen "klar" om den saknas, och tar bort den om den finns
        li.classList.toggle("klar");

        // Visa bocken om uppgiften är klar, annars göm den
        if (li.classList.contains("klar")) {
            bockSpan.innerText = "✅ ";
        } else {
            bockSpan.innerText = "";
        }
    };

    // Lägg till alla delar i li-elementet i rätt ordning
    li.appendChild(bockSpan);   // Först bocken
    li.appendChild(textSpan);   // Sen texten
    li.appendChild(knapp);      // Sist radera-knappen

    // Lägg till li-elementet i listan på sidan
    document.getElementById("minLista").appendChild(li);

    // Töm textfältet så det är redo för nästa uppgift
    textFält.value = "";
}
