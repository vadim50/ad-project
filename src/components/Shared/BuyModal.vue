<template>
  <div
    class="mr-4"
  >
    <v-row
    >
      <v-btn
        color="primary"
        class="ma-2"
        dark
        @click="modal = true"
      >
        Buy
      </v-btn>

      <v-dialog
        v-model="modal"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            Do You Want To Buy It?
          </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              >
              <v-text-field
                label="You Name"
                name="name"
                type="text"
                v-model="name"
              />

              <v-textarea
                label="You Phone"
                name="phone"
                type="text"
                v-model="phone"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              @click="onCancel"
              :disableb="localLoading"
            >
              Close
            </v-btn>
            <v-btn
              color="success"
              @click="onSave"
              :disableb="localLoading"
              :loading="localLoading"
            >
              Buy It!
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
        name: '',
        phone: '',
        localLoading: false,
       
      }

    },
    methods: {
      onCancel () {
        this.name = '';
        this.phone = '';
        this.modal = false;
      },
      onSave () {

        if(this.name !== '' && this.phone !== '') {
          this.localLoading = true;
          this.$store.dispatch('createOrder', {
            name: this.name,
            phone: this.phone,
            adId: this.ad.id,
            ownerId: this.ad.ownerId
          }).finally(() => {
            this.name = ''
            this.phone = ''
            this.localLoading = false
            this.modal = false
          })

          this.modal = false
        }
      }
    }
  }
</script>