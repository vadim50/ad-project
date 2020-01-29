<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Registation</v-toolbar-title>
<!--                 <v-spacer />
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      href="https://codepen.io/johnjleider/pen/pMvGQO"
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip> -->
              </v-toolbar>
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  >
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="person"
                    type="email"
                    v-model="email"
                    :rules="emailRules"
                  />

                  <v-text-field
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                  />

                  <v-text-field
                    label="Confirm Password"
                    name="confirm-password"
                    prepend-icon="lock"
                    type="password"
                    v-model="ConfirmPassword"
                    :rules="confirmPasswordRules"
                  />



                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn 
                  color="primary"
                  @click="onSubmit"
                  :disabled="!valid"
                  >Create Account</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data () {
     return {
      email: '',
      password: '',
      ConfirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
       passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters',
      ],
      confirmPasswordRules: [
        v => !!v || 'Password is required',
        v => (v === this.password) || 'Password should match',
      ],
     }
    },
    methods: {
      onSubmit(){
         if (this.$refs.form.validate()){
            const user = {
              email:    this.email,
              password: this.password
            }

            alert(user.password)
         }
      }
    }
  }
</script>