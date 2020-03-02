<template>
	<v-container>
		<v-layout row v-if="!loading && myAds.length !== 0">
			<v-flex
				xs12
				sm6
				offset-sm3
				>
				<h1 class="text--secondary">My Ads</h1>
				<v-card
					class="d-flax mb-3 pa-4"
					v-for="ad in myAds"
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
		<v-layout v-else-if="!loading && myAds.length === 0">
			<v-flex xs12 class="text-center">
				<h1 class="text--primary">You Have No Ads</h1>
			</v-flex>
		</v-layout>
				<v-layout v-else>
			<v-flex xs12 class="text-center">
					<v-progress-circular
				      :size="100"
				      :width="4"
				      color="primary"
				      indeterminate
    				></v-progress-circular>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default{
		name: 'AdList',
		computed: {
			myAds () {
				return this.$store.getters.myAds
			},
			loading () {
				return this.$store.getters.loading
			}
		}
  }

</script>

<style scoped>
	a.v-btn, a.v-list-item{
    text-decoration: none;
  }
</style>