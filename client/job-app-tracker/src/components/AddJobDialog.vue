<template>
    <v-card min-width="400">
        <v-layout row wrap pa-4 >
            <v-flex xs12 class="pl-4 pr-4">
                <h1>Job info</h1>
            </v-flex>
            <v-flex xs12 class="pl-4 pr-4">
            <v-text-field v-model="new_job_company_title" outline label="Company Name"> </v-text-field> 
            </v-flex>
            <v-flex xs12 class="pl-4 pr-4">
            <v-text-field v-model="new_job_title" outline label="Job Title"> </v-text-field> 
            </v-flex>
            <v-flex xs12 class="pl-4 pr-4 text-xs-center">
                <v-btn round outline color="red" v-on:click="addNewJob()">Add Job</v-btn>
            </v-flex>
        </v-layout>
    </v-card>
</template>


<script>
export default {
    props: ["dialogState", "column"],
    data () {
        return {
            colors: ["pink", "blue", "red", "blue-grey", "purple", "green", "orange", "indigo", "deep-purple", "teal"],
            url: "http://localhost:3000",
            new_job_id: 1,
            new_job_column: this.column.id,
            new_job_title: "",
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
        randomColor: function ( ) {
            return this.colors[Math.floor(Math.random() * 10)];
        },

        checkColumn: function () {
            console.log("column -> ", this.column);
        },
        
        addNewJob: function ( ) {
            this.dialogState = false;
			console.log( "Adding new job" );
			var req_body = {
				id: this.new_job_id,
                column: this.new_job_column,
                color: this.randomColor(),
                title: this.new_job_title,
                date_added: this.new_job_date_added,
                image: this.new_job_company_title.toLowerCase(),
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
            console.log(this.checkColumn());
            fetch ( `${ this.url }/jobs`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
            body: JSON.stringify( req_body)
            }).then ( function ( response ) {
            });
            window.location.reload();
            this.new_job_id = 0,
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
            this.new_job_company_alexa_usa = "",
            this.handleDialogClose( );
        },

        handleDialogClose: function() {
            this.$emit("clickedSth");
        }
    }
}
</script>