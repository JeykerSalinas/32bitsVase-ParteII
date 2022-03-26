<template>
  <div>
    <p class="col-3">
      Título de juegos en stock:
      <span class="badge bg-secondary">{{ stockGames.length }}</span>
    </p>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Color</th>
          <th scope="col">Destacado</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, i) in stockGames" :key="i">
          <th scope="row">{{ data.codigo }}</th>
          <td>{{ data.nombre }}</td>
          <td>{{ data.stock }}</td>
          <td>{{ data.precio }}</td>
          <td>{{ data.color }}</td>
          <td>
            <button class="btn btn-primary" @click="clickSell(data)">
              Vender
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["PUSH_SELL", "REST_SELL"]),
    clickSell(data) {
      this.PUSH_SELL({
        codigo: data.codigo,
        nombre: data.nombre,
        precio: data.precio,
      });
      this.REST_SELL(data.nombre);
      setTimeout(() => {
        alert("Venta Procesada");
      }, 3000);
    },
  },
  computed: {
    ...mapGetters(["stockGames"]),
  },
};
</script>

<style lang="scss" scoped></style>
