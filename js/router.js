class Router {
  constructor() {
    this.routeConfig = {
      "" : {
        build : () => {
          const view = new MainView();
          const model = new MainModel();
          const controller = new MainController(model, view);

          controller.init();
        }
      },
      "edit/organization" : {
        build : () => {
          const view = new OrgView();
          const model = new OrgModel();
          const controller = new OrgController(model, view, 'edit');

          controller.init();
        }
      },
      "new/organization" : {
        build : () => {
          const view = new OrgView();
          const model = new OrgModel();
          const controller = new OrgController(model, view, 'create');

          controller.init();
        }
      },
    }
    this.init();
  }

  init() {
    this.updateRoute();
    this.bindEvents();
  }

  bindEvents(){
    window.addEventListener('hashchange', this.updateRoute.bind(this));
  }

  updateRoute() {
    let routeName = document.location.hash.replace(/^#/, '');
    let route = this.routeConfig[routeName];
    if (route) {
      route.build();
    } else {
      document.location.hash = '';
    }
  }
}