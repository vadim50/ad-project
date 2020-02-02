<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<v-card
				>
					<v-responsive>
						<v-img
							:src="ad.src"
							height="300"
						/>
					</v-responsive>
					<v-card-title>
						{{ ad.title }}
					</v-card-title>
					<v-card-text>
						{{ ad.description }}
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="warning">Edit</v-btn>
						<v-btn class="success">Bye</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default{
		name: 'Ad',
		props: ['id'],
    computed: {
      ad () {
        const id = this.id
        return this.$store.getters.adById(id)
      }
    }
  }	
</script>

<style scoped>
  a.v-btn, a.v-list-item{
    text-decoration: none;
  }
</style>