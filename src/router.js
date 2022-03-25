import Vue from "vue";
import Router from "vue-router";
const Busqueda = () => import("./views/Busqueda");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: import("./views/Inicio"),
    },
    {
      path: "/busqueda",
      name: "busqueda",
      component: Busqueda,
    },
  ],
});
