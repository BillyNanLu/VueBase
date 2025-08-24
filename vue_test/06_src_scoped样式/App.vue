<template>
  <div>
    <h1 class="title">hi</h1>
    <School />
    <Student />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style lang="css" scoped>
    .title {
        color: red;
    }
</style>