<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="yellow darken-2 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Picfamily es una empresa dedicada a la venta y reservacion de categorias de objetos, los cuales van de alimentos a electrodomesticos. Tambien ofrecemos servicios orientados a la realizacion de picnis y/o reuniones familiares, para crear momentos inolvidables en familia. Puedes visitarnos en nuestras redes sociales, o ¡Venir con toda tu familia!, creenos, no te arrepentiras
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 — <strong>PicFamily</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name:'Footer',
    data: () => ({
      icons: [
        'facebook',
        'twitter',
        'google-plus',
        'linkedin',
        'instagram'
      ]
    })
  }
</script>