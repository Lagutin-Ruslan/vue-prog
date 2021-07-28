<template>
  <v-card>
    <div class="wrapper-btn">
      <v-btn
        class="ma-2"
        color="deep-orange"
        v-html="ONE_STATE_TEXT"
        @click="SHOW_OFFERS"
      >
        {{ ONE_STATE_TEXT }}
      </v-btn>
    </div>

    <div v-if="ONE_STATE_SHOWOFFERS" class="wrap">
      <table border="1" width="100%" cellpadding="5">
        <tr>
          <th style="width:50px">ID</th>
          <th>Фото</th>
          <th>Название</th>
          <th>Описание</th>
        </tr>
        <tr v-for="allOfer in ONE_STATE.data" :key="allOfer.id">
          <td style="width:50px">
            <p>{{ allOfer.id }}</p>
          </td>
          <td>
            <img src="../img/product.png" alt="" style="max-width: 200px;width:100%" />
          </td>
          <td>
            <p>{{ allOfer.name }}</p>
          </td>
          <td>
            <p class="p-text">{{ allOfer.description }}</p>
          </td>
        </tr>
      </table>
    </div>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["SHOW_OFFERS"]),
  },
  computed: {
    ...mapGetters(["ONE_STATE", "ONE_STATE_SHOWOFFERS", "ONE_STATE_TEXT"]),
  },
};
</script>

<style scoped>
.wrapper-btn {
  width: 300px;
  margin: 0 auto;
  margin-top: 80px;
}
.box-flex__my {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: flex-start;
}
.p-text {
  max-width: 500px;
  width: 100%;
}
table {
  border-collapse: collapse;
  table-layout: fixed;
  width: calc(100% - 100px);
  margin-left: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
}
td {
  padding: 10px;
}
th {
  text-align: center;
  padding: 10px;
  background-color: cadetblue;
}
</style>