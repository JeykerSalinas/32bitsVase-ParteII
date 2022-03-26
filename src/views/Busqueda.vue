<template>
  <div class="container">
    <div class="m-3 row">
      <div class="col-6">
        <input type="number" placeholder="búsqueda por código" class="form-control" v-model="mySearch" />
      </div>
      <p class="col-3">
        Título de juegos en stock:
        <span class="badge bg-secondary">{{ stockGames }}</span>
      </p>
      <p class="col-3">
        Ejemplares de juegos en stock:
        <span class="badge bg-secondary">{{ sumEjemplares }}</span>
      </p>
    </div>
    <ListadoJuegos :data="mySearch" />
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import ListadoJuegos from "../components/ListadoJuegos.vue";
export default {
  data() {
    return {
      mySearch: "",
    };
  },
  computed: {
    ...mapState(["myData"]),
    ...mapGetters(["sumTitulos", "sumEjemplares","stockGames"]),
  },
  components: {
    ListadoJuegos,
  },
};
</script>
