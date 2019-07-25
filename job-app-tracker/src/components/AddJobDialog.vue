<template>
    <v-card min-width="400">
        <v-layout row wrap pa-4 >
            <v-flex xs12 class="pl-4 pr-4">
                <h1>Job info</h1>
            </v-flex>
            <v-flex xs12 class="pl-4 pr-4">
            <v-text-field v-model="new_job_company" outline label="Company Name"> </v-text-field> 
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
    props: ["dialogState", "stage"],
    data () {
        return {
            colors: ["pink", "blue", "red", "blue-grey", "purple", "green", "orange", "indigo", "deep-purple", "teal"],
            url: "http://localhost:3000",
            new_job_position: this.stage.position,
            new_job_company: "",
            new_job_title: "",
            new_job_image: ""
        }
    },

    methods: {
        randomColor: function ( ) {
            return this.colors[Math.floor(Math.random() * 10)];
        },

        checkColumn: function () {
            console.log("column -> ", this.stage);
        },
        
        addNewJob: function ( ) {
            this.dialogState = false;
			console.log( "Adding new job" );
			var req_body = {
				company: this.new_job_company,
                position: this.new_job_position,
                color: this.randomColor(),
                title: this.new_job_title,
                image: this.new_job_company.toLowerCase()
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
            this.new_job_color = "",
            this.new_job_title = "",
            this.new_job_company = "",
            this.new_job_image = "",
            this.handleDialogClose( );
        },

        handleDialogClose: function() {
            this.$emit("clickedSth");
        }
    }
}
</script>