<template>
	<v-container>
		<v-layout row>
			<v-flex
			xs12
			sm6
			offset-sm3
			>
				<h1 class="text--secondary pb-3">Create New Ad</h1>
        <v-form
          class="pb-3"
          ref="form"
          validation
          v-model="valid"
          >
          <v-text-field
            label="Ad Title"
            name="title"
            type="text"
            required
            v-model="title"
            :rules="[v => !!v || 'Title Is Required!' ]"
          />

          <v-textarea
            label="Add Description"
            name="description"
            type="text"
            v-model="description"
            multi-line
            :rules="[v => !!v || 'Field Description Is Required!']"
          />
        </v-form>
        <v-layout
        	row
        	class="pb-3">
        	<v-flex 
        		xs12
        		>
				    <v-btn
				      class="warning"
              @click="triggerUpload"
				    >
				      Upload
				      <v-icon right dark>mdi-cloud-upload</v-icon>
				    </v-btn>
            <input
              ref="fileInput"
              type="file"
              style="display: none;"
              accept="image/*"
              @change="onFileChange"
            >
        	</v-flex>
        </v-layout>
        <v-layout row>
        	<v-flex 
        		xs12
        		>
				    <v-img
            v-if="src"
							:src="src"
							height="100"/>
        	</v-flex>
        </v-layout>
        <v-layout row>
        	<v-flex 
        		xs12
        		>
				   	<v-switch
				   	  color="primary"
				      v-model="promo"
				      label="Add To Promo"
				    > 	
				    </v-switch>
        	</v-flex>
        </v-layout>
        <v-layout row>
        	<v-flex 
        		xs12
        		>
        		<v-btn
            :loading="loading"
        		:disabled="!valid || !image || loading"
        			color="success"
        			@click="createAd"
        		>
        			Create Ad
        		</v-btn>
        	</v-flex>
        </v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default{
		name: 'NewAd',
		data () {
			return {
				title: '',
				description: '',
				promo: false,
				valid: false,
        image: null,
        src: ''
			}
		},
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
		methods: {
			createAd () {
				if(this.$refs.form.validate() && this.image) {
					//logic
					const ad = {
						title: this.title,
						description: this.description,
						promo: this.promo,
            image: this.image
					}
					this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
				}
			},
      triggerUpload () {
        this.$refs.fileInput.click()
      },
      onFileChange () {
        const file = event.target.files[0]

        const reader = new FileReader()
        reader.onload = e => {
          this.src = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
      }
		}
	}
</script>

<style></style>