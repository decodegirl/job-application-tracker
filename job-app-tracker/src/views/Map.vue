<template>
  <div>
    <TopNavTwo />
    <Map />
  </div>
</template>

<script>
  import Map from '../components/Map'
  import TopNavTwo from '../components/TopNavTwo'

  export default {
    components: {
      Map,
      TopNavTwo
    }
  }
</script>