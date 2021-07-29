
// import et déclaration des variables des classes depuis les fichiers .js
import App from "./app/app.js";
import Router from "./app/router.js";

// création de l'instance app avec la classe App
const app = new App();

// appel de la méthode sans création d'instance
Router.run(app);

// nom d'evenement natif : hashchange
// addEventListener ou this.addEventListener ou window.addEventListener ou globalThis.addEventListener
addEventListener("hashchange", () => {
  Router.run(app);
});
