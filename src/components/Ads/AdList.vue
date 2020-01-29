<template>
	<v-container>
		<v-layout row>
			<v-flex
				xs12
				sm6
				offset-sm3
				>
				<h1 class="text--secondary">My Ads</h1>
				<v-card
					class="d-flax mb-3 pa-4"
					v-for="ad in ads"
					:key="ad.id"
				>
					<v-row>
						<v-flex xs4>
							<v-responsive>
								<v-img
								 :src="ad.src"
								 height="120"
								 ></v-img>
							</v-responsive>
						</v-flex>
						<v-flex xs8>
							<v-card-title
								class="text--primary"
							>
								{{ ad.title }}
							</v-card-title>
							<v-card-text>
								{{ ad.description }}
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn
								class="info"
								:to="'/ad/' + ad.id"
								>Open</v-btn>
							</v-card-actions>
						</v-flex>
					</v-row>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default{
		name: 'AdList',
		 data () {
      return {
        ads: [
          {
          	title: 'First Ad',
          	description: 'Hello I am description, Hello I am description ',
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