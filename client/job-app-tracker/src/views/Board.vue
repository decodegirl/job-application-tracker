<template>
<v-layout v-if="first_board">
  <MyFirstBoard />
</v-layout>
</template>

<script>
import MyFirstBoard from '../components/MyFirstBoard'
  export default {

    components: {
      MyFirstBoard
    },

    data() {
      return {
        first_board: true,
      }
    }
  }
</script>
