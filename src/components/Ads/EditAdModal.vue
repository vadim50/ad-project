<template>
  <div
  	class="mr-4"
  >
    <v-row
    >
      <v-btn
        color="warning"
        class="ma-2"
        dark
        @click="modal = true"
      >
        Edit
      </v-btn>

      <v-dialog
        v-model="modal"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            Edit Add
          </v-card-title>
          <v-card-text>
        		<v-form
              ref="form"
              >
              <v-text-field
                label="Add Title"
                name="title"
                type="text"
                v-model="editedTitle"
              />

              <v-textarea
                label="Add Description"
                name="description"
                type="text"
                v-model="editedDescription"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              @click="onCancel"
            >
              Close
            </v-btn>
            <v-btn
              color="success"
              @click="onSave"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
     <!----------------->
    </v-row>
  </div>
</template>
<script>
  export default {
  	props: ['ad'],
    data () {
      return {
 				modal: false,
 				editedTitle: this.ad.title,
 				editedDescription: this.ad.description,
       
    	}

  	},
  	methods: {
  		onCancel () {
  			this.editedTitle = this.ad.title
  			this.editedDescription = this.ad.description
  			this.modal = false
  		},
  		onSave () {
  			if(this.editedDescription !== '' && this.editedTitle !== '') {
  				this.$store.dispatch('updateAd', {
  					title: this.editedTitle,
  					description: this.editedDescription,
  					id: this.ad.id
  				})

  				this.modal = false
  			}
  		}
  	}
  }
</script>