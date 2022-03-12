<template>
  <div>
    <h1>User Table</h1>
    <table>
      <thead>
        <TRComp>
          <THComp
            v-for="(item, index) in props.columns"
            @click="sortBy(item)"
            :key="index"
            >{{ item }}
            <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
            </span
          ></THComp>
        </TRComp>
      </thead>
      <tbody>
        <TRComp v-for="(item, index) in props.data" :key="index">
          <TDComp>{{ item.slno }}</TDComp>
          <TDComp>{{ item.name }}</TDComp>
          <TDComp>{{ item.dob }}</TDComp>
          <TDComp>{{ item.email }}</TDComp>
          <TDComp>{{ item.phone }}</TDComp>
          <TDComp><img :src="item.picture" :alt="item.name" /></TDComp>
        </TRComp>
        <TRComp v-if="props.data.length === 0">
          <TDComp>No Data Found</TDComp>
        </TRComp>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import TDComp from './TDComp.vue';
import THComp from './THComp.vue';
import TRComp from './TRComp.vue';
import { defineProps, ref } from 'vue';
const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});

let sortKey = ref('');
let sortOrders = ref({});

sortOrders.value = props.columns.reduce((o, key) => ((o[key] = 1), o), {});
const sortBy = (key) => {
  console.log('sort', key, sortOrders);
  sortKey.value = key;
  sortOrders.value[key] = sortOrders.value[key] * -1;
};
</script>
<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
