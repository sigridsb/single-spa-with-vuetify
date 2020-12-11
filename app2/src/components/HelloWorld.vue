<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          This app uses Vuetify
        </h1>
      </v-col>

      
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Adding a Vuetify component
        </h2>

        <v-row justify="center">
          <v-banner
            single-line
          >
            <v-icon
              slot="icon"
              color="success"
              size="32"
            >
              sentiment_satisfied_alt
            </v-icon>
            A Vuetify banner!
          </v-banner>
        </v-row>
      </v-col>

  
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>
