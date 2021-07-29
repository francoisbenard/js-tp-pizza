import {pizzas} from "../data.js";
console.log(pizzas[1].name);
// export de la classe = exposer le code à tout le projet. Si pas d'export => Pas d'import possible
// default = 
export default class App {
    constructor() {
        this.pageContent = "";
    }
    // fonction async = s'exécute de façon asynchrone et les valeurs de retour sont nécessairement converties en promesses..
    // fonction goTo = controller

    async goTo(view = "home") {
        // await ne fonctionne quand dans une fonction async => met en pause le code jusqu'à ce que la promesse se réalise, puis retourner la valeur résultante.
        // fetch : methode pour récupérer des ressources à travers le réseau de manière asynchrone.
        await fetch("/src/views/header.html")
            // méthode then() renvoie un objet Promise. 
            .then(resp => resp.text())
            .then(data => this.pageContent += data);

        //passage en parametre de view avec chemin dans accent grave (diacritique) 
        await fetch(`/src/views/${view}.html`)
            .then(resp => resp.text())
            .then(data => this.pageContent += data);

        await fetch("/src/views/footer.html")
            .then(resp => resp.text())
            .then(data => this.pageContent += data);

        // const THAT = this;    
        // await fetch("/src/views/footer.html")
        //     .then(function(resp) {
        //         // console.log(resp.text());
        //         return resp.text()
        //     })
        //     .then(function(data) {
        //         console.log(this);
        //         THAT.pageContent += data
        //     });

        document.body.innerHTML = this.pageContent;
        this.pageContent = "";
    }
}
