<template>
  <div>
    <TopNavTwo />
    <Board />
  </div>
</template>

<script>
import Board from "../components/Board.vue";
import TopNavTwo from "../components/TopNavTwo.vue";
export default {
  components: {
    Board,
    TopNavTwo
  },
  data() {
    return {};
  }
};
</script>
