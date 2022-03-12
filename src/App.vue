<template>
  <TableComp :columns="columns" :data="data" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import TableComp from './components/TableComp.vue';
import { flatten } from './utils/helper';
const data = ref([]);
onMounted(async () => {
  const response = await fetch('https://randomuser.me/api/?results=50');
  const resData = await response.json();
  data.value = resData.results
    .map((user) => flatten(user))
    .map((user, index) => {
      return {
        slno: index + 1,
        name: `${user.name_title}.${user.name_first} ${user.name_last}`,
        dob: user.dob_date,
        email: user.email,
        phone: user.phone,
        picture: user.picture_thumbnail,
      };
    });
});

let columns = ['Sl.no', 'Name', 'Dob', 'Email', 'Phone', 'Picture'];
</script>

<style></style>
