/* Test technique */

/* Ajoute un paragraphe dans le DOM (div -> my-poc) */
function myAppendToDom(p) {
    const labels = ["Garcon", "Fille", "GarconFille"];

    if (!labels.includes(p)) {
        console.log("Nope");
        return;
    }

    let tag = document.createElement("p");
    let text = document.createTextNode(p);
    let element = document.getElementById("my-poc");
    tag.appendChild(text);
    element.appendChild(tag);
}

/* Gestion de l'affichage conditionnel */
function myConditionalDisplay(n) {

    if (!parseInt(n) && n != 0) {
        console.log("Nope");
        return;
    }

    if ((n % 3 == 0) && (n % 5 == 0))
        this.myAppendToDom("GarconFille");
    else if (n % 3 == 0)
        this.myAppendToDom("Garcon");
    else if (n % 5 == 0)
        this.myAppendToDom("Fille");
    else
        this.myAppendToDom(n);
}

// * ... Boucle d'exécution
function myLoop(n_list) {
    if (n_list.some(isNaN || !parseInt)) {
        console.log("Nope");
        return;
    }
    n_list.forEach(n => myConditionalDisplay(n));
}

// * ... Lancement de la boucle d'exécution (test sur une collection de 0 jusqu'à 200)
myLoop(Array.from(Array(200 + 1).keys()));

// * ... Test de l'error handling
myLoop(["qslmdkqsmldkqsmd"]);
myLoop([undefined, undefined, 32, 139, "test"]);
myLoop([32, 139, undefined, "test"]);
myLoop([32, 139, "test", undefined]);
