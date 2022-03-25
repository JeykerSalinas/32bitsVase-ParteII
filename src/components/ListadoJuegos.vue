<template>
  <div class="row">
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
        <tr
          v-for="(data, i) in filterData(data)"
          :key="i"
          :style="{ 'background-color': data.color }"
        >
          <th scope="row">{{ data.codigo }}</th>
          <td>{{ data.nombre }}</td>
          <td>{{ data.stock }}</td>
          <td>{{ data.precio }}</td>
          <td>{{ data.color }}</td>
          <td>{{ data.destacado }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "ListadoJuegos",
  computed: {
    ...mapState(["myData"]),
    ...mapGetters(["filterData"]),
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
