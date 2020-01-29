<template>
	<v-container>
		<v-layout row>
			<v-flex
				xs12
				sm6
				offset-sm3
				>
				<h1 class="text--secondary pb-3">Orders</h1>
				<v-list
		      subheader
		      two-line
		      flat
		    >

		      <v-list-item-group
		        multiple
		      >


		        <v-list-item
		        	v-for="order in orders"
		        	:key="order.id"
		        >
		            <v-list-item-action>
		              <v-checkbox
		              :input-value="order.done"
		                color="success"
		                @change="markDown(order)"
		              ></v-checkbox>
		            </v-list-item-action>

		            <v-list-item-content>
		              <v-list-item-title>{{ order.name }}</v-list-item-title>
		              <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
		            </v-list-item-content>
		            <v-list-item-action>
		            	<v-btn 
		            		color="primary"
		            		:to="'/ad/' + order.adId"
		            		>Open</v-btn>
		            </v-list-item-action>
		        </v-list-item>
		      </v-list-item-group>
		    </v-list>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default{
		name: 'Orders',
		data () {
			return {
				orders: [
					{id: 'o1', name: 'Vadim', phone: '8-909-45-9-45-05',adId: 'a1', done: false}
				]
			}
		},
		methods: {
			markDown(order){
				order.done = true
			}
		}
	}
</script>

<style scoped>
	a.v-btn, a.v-list-item{
    text-decoration: none;
  }
</style>