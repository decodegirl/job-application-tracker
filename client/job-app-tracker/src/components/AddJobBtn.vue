<template>
    <v-dialog v-model="dialog" max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn block v-on="on" class="mt-0 mb-0">+</v-btn>
      </template>
      <AddJobDialog :column="column" @clickedSth="dialog = false" />
    </v-dialog>
</template>

<script>
import AddJobDialog from '../components/AddJobDialog.vue'
export default {
    props: ["column"],
    components: {
        AddJobDialog
    },

    data () {
        return {
            dialog: false
        }
    }
}
</script>