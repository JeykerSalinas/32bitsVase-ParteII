import Vue from "vue";
import Router from "vue-router";
import Inicio from "./views/Inicio";
const Busqueda = () => import("./views/Busqueda");
const Tienda = () => import("./views/Tienda");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
    },
    {
      path: "/busqueda",
      name: "busqueda",
      component: Busqueda,
    },
    {
      path: "/tienda",
      name: "tienda",
      component: Tienda,
    },
  ],
});
