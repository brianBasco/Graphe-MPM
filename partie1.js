/* ----------------- Partie 1 : interface utilisateur ------------------- */

 // fonction d'ajout d'une entrée pour ajouter une tâche
 let ajouterInput = () => {

    let lettre = {
        tag: "input",
        type: "text",
        placeholder: "lettre",
        class: "lettre",
    }

    let duree = {
        tag: "input",
        type: "number",
        placeholder: "duree",
        class: "duree",
    }

    let pred = {
        tag: "input",
        type: "text",
        placeholder: "predecesseurs",
        class: "pred",
    }

    let a = [lettre, duree, pred]

    let res = a.map(x => {
        let d = document.createElement(x.tag);
        d.setAttribute("type", x.type);
        d.setAttribute("placeholder", x.placeholder);
        d.setAttribute("class", x.class);
        return d
    });

    let numero = document.getElementById('inputs').getElementsByTagName('div').length + 1 

    // ajout des inputs pour une tâche, l'id de la div permettra de la sélectionner et de la supprimer
    let div = document.createElement("div");
    div.setAttribute('id', numero)
    res.map(x => div.appendChild(x))

    // bouton qui servira à supprimer l'entrée pour cette tâche
    let croix = document.createElement("button")
    croix.innerHTML = "X"
    croix.addEventListener('click', e => {
        effacer(numero)
    })

    div.appendChild(croix)
    document.getElementById("inputs").appendChild(div);


}

function effacer(numero) {
    document.getElementById(numero).remove()
}

// fonction de préremplissage d'un graphe à 6 sommets
// Pour tests ou démonstration
let remplir = () => {

    //data
    let data = [
        { lettre: "a", duree: 3, predecesseur: "" },
        { lettre: "b", duree: 5, predecesseur: "" },
        { lettre: "c", duree: 2, predecesseur: "a,b" },
        { lettre: "d", duree: 8, predecesseur: "b" },
        { lettre: "e", duree: 4, predecesseur: "c,d" },
        { lettre: "f", duree: 2, predecesseur: "d" },
    ]

    for (let index = 0; index < data.length; index++) {
        ajouterInput();
    }

    let l = document.getElementsByClassName("lettre")
    let d = document.getElementsByClassName("duree")
    let p = document.getElementsByClassName("pred")

    //let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let index = 0; index < data.length; index++) {
        //l[index].value = alphabet[index].toUpperCase();
        l[index].value = data[index].lettre
        d[index].value = data[index].duree
        p[index].value = data[index].predecesseur
    }
}


// fonction d'initialisation, permet d'enlever les information d'erreurs sans recharger la page
let init = () => {

    let l = document.getElementsByClassName("lettre")
    let d = document.getElementsByClassName("duree")
    let p = document.getElementsByClassName("pred")

    for (let index = 0; index < l.length; index++) {
        l[index].style.border = ""
        d[index].style.border = ""
        p[index].style.border = ""
    }

    let children = document.getElementById("erreurs").children
    for (let index = 0; index < children.length; index++) {
        document.getElementById("erreurs").removeChild(children[index])
    }
}
