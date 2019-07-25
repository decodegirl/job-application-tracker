<template>
  <v-card flat v-if="page.tab_title == 'Company'" class="ma-4">
    <v-layout row wrap>
      <v-flex xs12>
        <h2>{{ job.company_info.title }}</h2>
        <p>{{ job.company_info.description }}</p>
        <p>Headquarters at {{ job.location }}</p>
      </v-flex>

      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs12>
            Website
            <a :href="job.company_info.website">
              {{ job.company_info.website }}</a
            >
          </v-flex>

          <v-flex xs12> Founded {{ job.company_info.founded }} </v-flex>
          <v-flex xs12> Type {{ job.company_info.type }} </v-flex>
          <v-flex xs12> Country {{ job.company_info.country }} </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs12> Industy {{ job.company_info.industry }} </v-flex>
          <v-flex xs12>
            Alexa Global {{ job.company_info.alexa_global }}
          </v-flex>
          <v-flex xs12> Alexa USA {{ job.company_info.alexa_usa }} </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: ["job", "page"]
};
</script>

<style>
</style>
