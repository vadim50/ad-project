<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<v-card
					v-for="ad in ads"
					:key="ad.id"
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
		data () {
      return {
        ads: [
          {
          	title: 'First Ad',
          	description: 'Hello I am description',
          	promo: false,
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id: '1'
          },
          {
          	title: 'Second Ad',
          	description: 'Hello I am description',
          	promo: true,
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: '2'
          },
          {
          	title: 'Third Ad',
          	description: 'Hello I am description',
          	promo: true,
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            id: '3'
          },
          {
          	title: 'Fourth Ad',
          	description: 'Hello I am description',
          	promo: false,
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            id: '4'
          },
        ],
      }
    },
  }	
</script>

<style></style>