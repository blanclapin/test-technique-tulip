/* Test technique */


class TechnicalTest {

    /* Ajoute un paragraphe dans le DOM (div -> my-poc) */
    static #myAppendToDom(p) {
        let tag = document.createElement("p");
        let text = document.createTextNode(p);
        let element = document.getElementById("my-poc");
        tag.appendChild(text);
        element.appendChild(tag);
    }

    /* Gestion de l'affichage conditionnel */
    static #myConditionalDisplay(n) {
        if ((n % 3 == 0) && (n % 5 == 0))
            TechnicalTest.#myAppendToDom("GarconFille");
        else if (n % 3 == 0)
            TechnicalTest.#myAppendToDom("Garcon");
        else if (n % 5 == 0)
            TechnicalTest.#myAppendToDom("Fille");
        else
            TechnicalTest.#myAppendToDom(n);
    }

    // * ... Boucle d'exécution
    myLoop(n_list) {
        if (n_list.some(isNaN || !parseInt)) {
            console.log("Nope");
            return;
        }
        n_list.forEach(n => TechnicalTest.#myConditionalDisplay(n));
        return;
    }
}

// * ... Lancement de la boucle d'exécution (test sur une collection de 0 jusqu'à 200)
const t = new TechnicalTest();
t.myLoop(Array.from(Array(200 + 1).keys()));

// * ... Test de l'error handling
t.myLoop(["qslmdkqsmldkqsmd"]);
t.myLoop([undefined, undefined, 32, 139, "test"]);
t.myLoop([32, 139, undefined, "test"]);
t.myLoop([32, 139, "test", undefined]);
