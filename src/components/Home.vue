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
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Авторизация</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field 
                    v-model="email"
                    @blur="$v.email.$touch()"
                    label="Логин"
                    name="email"
                    type="text"
                    id="email"
                    :rules="$v.email.$error ? ['Заполните обязательное поле'] : [true] "
                    required
                    autofocus
                  ></v-text-field>

                  <v-text-field 
                    v-model="password"
                    id="password"
                    @blur="$v.password.$touch()"
                    label="Пароль"
                    name="password"
                    type="password"
                    :rules="$v.password.$error ? ['Заполните обязательное поле'] : [true] "
                    required
                  ></v-text-field>
                </v-form>
                <small v-if="successfulLogin" class="red--text">Неправильный логин или пароль</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn color="primary" @click="handlerClick"
                  :disabled='$v.email.$error || $v.password.$error || !$v.email.required || !$v.password.required'
                  >Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: '',
      password: '',
      database: null,
      successfulLogin: null

    }
  },
  validations: {
    email: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    handlerClick() {
      //имитация запроса на сервер
      return new Promise((res, rej) => {
        setTimeout(() => {
          try {
            this.database = [
                {email:'student', password:'sdemo'}, 
                {email:'teacher', password:'tdemo'}
                ]
            res()
          } catch (error) {
            rej()
          }
        }, 1000)
      }).then(() => {
          for (const user of this.database) {
            if (this.email === user.email && this.password === user.password) {
              this.$router.push(this.email)
              break
            }
          }
          if (this.successfulLogin === null) this.successfulLogin = 'Erorr'
      })
    }
  }
};
</script>
