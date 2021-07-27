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

    <div 
      v-if="ONE_STATE_SHOWOFFERS"
      class="wrap">
      <ul>
        <li v-for="allOfer in ONE_STATE.data" :key="allOfer.id">
          <p>{{ allOfer.id }}</p>
          <p>{{ allOfer.description }}</p>
          <p>{{ allOfer.name }}</p>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  
  methods: {
    ...mapActions (['SHOW_OFFERS']),
  },
  computed: {
    ...mapGetters (["ONE_STATE", "ONE_STATE_SHOWOFFERS", "ONE_STATE_TEXT"]),
  },
};
</script>

<style scoped>
ul {
  margin-left: 50px;
  list-style: none;
}
ul li {
  border-bottom: 1px solid black;
}
.wrapper-btn {
  width: 300px;
  margin: 0 auto;
  margin-top: 80px;
}
</style>