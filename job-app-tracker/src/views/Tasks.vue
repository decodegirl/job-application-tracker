<template>
  <div>
    <TopNavTwo />
    <Tasks />
    Map Page
  </div>
</template>

<script>
  import Tasks from '../components/Tasks'
  import TopNavTwo from '../components/TopNavTwo'

  export default {
    components: {
      Tasks,
      TopNavTwo
    }
  }
</script>