<template>
    <v-layout row wrap>
        <v-flex xs12 class="pl-4 pr-4">
            <h1>Job info</h1>
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_color" label="Color"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_title" label="*Title"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_sub_title" label="*Position"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_image" label="Image URL"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_location" label="Location"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_salary" label="Salary"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_post_url" label="Post URL"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_deadline" label="Deadline"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_applied" label="Applied"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_interview1" label="Interview 1"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_interview2" label="Interview 2"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_offer" label="Offer"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_description" label="Description"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_notes" label="Notes"> </v-text-field> 
        </v-flex>
        <v-flex xs12 class="pl-4 pr-4">
            <h1>Company info</h1>
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_company_title" label="Company Title"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_company_description" label="Company description"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_company_website" label="Company Website"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_company_founded" label="Company founded"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_company_type" label="Company Type"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_company_country" label="Company Country"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_company_industry" label="Company industry"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_company_alexa_global" label="Company alexa global rating"> </v-text-field> 
        </v-flex>
        <v-flex xs4 class="pl-4 pr-4">
           <v-text-field v-model="new_job_company_alexa_usa" label="Company alexa usa rating"> </v-text-field> 
        </v-flex>
        <v-flex xs12 class="pl-4 pr-4">
            <v-btn rounded outline color="#000" v-on:click="addNewJob()">Add Job</v-btn>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    data () {
        return {
            url: "http://localhost:3000",
            new_job_id: 1,
            new_job_column: 1,
            new_job_color: "",
            new_job_title: "",
            new_job_sub_title: "",
            new_job_date_added: new Date().toDateString(),
            new_job_image: "",
            new_job_location: "",
            new_job_salary: "",
            new_job_post_url: "",
            new_job_deadline: "",
            new_job_applied: "",
            new_job_interview1: "",
            new_job_interview2: "",
            new_job_offer: "",
            new_job_description: "",
            new_job_notes: "",
            new_job_company_title: "",
            new_job_company_description: "",
            new_job_company_website: "",
            new_job_company_founded: "",
            new_job_company_type: "",
            new_job_company_country: "",
            new_job_company_industry: "",
            new_job_company_alexa_global: "",
            new_job_company_alexa_usa: ""
        }
    },

    methods: {
        
        addNewJob: function ( ) {
			console.log( "Adding new job" );
			var req_body = {
				id: this.new_job_id,
                column: this.new_job_column,
                color: this.new_job_color,
                title: this.new_job_title,
                sub_title: this.new_job_sub_title,
                date_added: this.new_job_date_added,
                image: this.new_job_image,
                location: this.new_job_location,
                salary: this.new_job_salary,
                post_url: this.new_job_post_url,
                dealine: this.new_job_deadline,
                applied: this.new_job_applied,
                interview1: this.new_job_interview1,
                interview2: this.new_job_interview2,
                offer: this.new_job_offer,
                description: this.new_job_description,
                notes: this.new_job_notes,
                company_info: {
                title: this.new_job_company_title,
                description: this.new_job_company_description,
                website: this.new_job_company_website,
                founded: this.new_job_company_founded,
                type: this.new_job_company_type,
                country: this.new_job_company_country,
                industry: this.new_job_company_industry,
                alexa_global: this.new_job_company_alexa_global,
                alexa_usa: this.new_job_company_alexa_usa
                },
                todos: []
            }
            console.log(req_body);
            fetch ( `${ this.url }/jobs`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
            body: JSON.stringify( req_body)
            }).then ( function ( response ) {
            
            });
            this.new_job_id = 0,
            this.new_job_column = 0,
            this.new_job_color = "",
            this.new_job_title = "",
            this.new_job_sub_title = "",
            this.new_job_image = "",
            this.new_job_location = "",
            this.new_job_salary = "",
            this.new_job_post_url = "",
            this.new_job_deadline = "",
            this.new_job_applied = "",
            this.new_job_interview1 = "",
            this.new_job_interview2 = "",
            this.new_job_offer = "",
            this.new_job_description = "",
            this.new_job_notes = "",
            this.new_job_company_title = "",
            this.new_job_company_description = "",
            this.new_job_company_website = "",
            this.new_job_company_founded = "",
            this.new_job_company_type = "",
            this.new_job_company_country = "",
            this.new_job_company_industry = "",
            this.new_job_company_alexa_global = "",
            this.new_job_company_alexa_usa = ""
        }
    }
}
</script>