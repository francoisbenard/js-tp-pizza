// export de la classe = exposer le code à tout le projet. Si pas d'export => Pas d'import possible
// default ????????
export default class Router {
  //mot clé static = méthode de class => Les méthodes statiques ne sont pas disponibles sur les instances d'une classe mais sont appelées sur la classe elle-même
  static run(app) {
    const routes = ["", "home", "admin", "order-pizza"];
    const route = location.hash ? location.hash.substring(1) : "home";
    const routeExists = routes.includes(route);

    if (routeExists) {
      app.goTo(route);
    }
    else {
      location.hash = "home";
      app.goTo();
    }

    // location.hash = window.location.hash 
    // hash => retourne le # et ce qui suit dans l'URL
    // if (location.hash) {
    //   switch (location.hash.substring(1)) {
    //     case "home": app.goTo("home"); break;
    //     case "admin": app.goTo("admin"); break;
    //     case "order-pizza": app.goTo("order-pizza"); break;
    //   }
    // }
    // else {
    //   app.goTo("home");
    // }
  }
}
