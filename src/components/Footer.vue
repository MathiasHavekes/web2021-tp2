<template>
  <v-footer padless>
    <v-card flat tile class="text-center white--text" color="primary" dark>
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-8" icon>
          <v-icon size="24px" @click="redirect('https://www.google.com')">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text>
        CarBay, location de voiture depuis 2010. Afin de satisfaire tous vos besoins en terme de voyage 
        nous vous proposons les meilleurs voitures éléctriques du marché afin que vous puissiez profiter
        de vos destinations favorites tout en réspectant l'environnement. Pour plus de détails, pour de l'aide
        ou tout simplement pour partager vos voyages avec notre équipes, contactait nous via nos differents réseaux sociaux.

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Carbay</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        { image: 'mdi-facebook', route: "https://www.Facebook.com" },
        { image: 'mdi-twitter', route: "https://www.Twitter.com" },
        { image: 'mdi-linkedin', route: "https://www.Linkedin.com" },
        { image: 'mdi-instagram', route: "https://www.Instagram.com" }
      ],
    }),
      methods: {
    redirect: function (link, target = "_blank") {
      window.open(link, target);
    },
  },
  }
</script>