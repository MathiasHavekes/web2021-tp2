<template>
  <v-footer padless>
    <v-card flat tile class="text-center white--text" color="primary" dark>
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-8" icon>
<<<<<<< HEAD
          <v-icon size="24px" @click="redirect(icon.route)">
            {{ icon.image }}
=======
          <v-icon size="24px" @click="redirect('https://www.google.com')">
            {{ icon }}
>>>>>>> e613a36751303b7ee9bc5cdea2241dc3db56e815
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text>
<<<<<<< HEAD
        CarBay, location de voiture depuis 2010. Afin de satisfaire tous vos besoins en terme de voyage 
        nous vous proposons les meilleurs voitures éléctriques du marché afin que vous puissiez profiter
        de vos destinations favorites tout en réspectant l'environnement. Pour plus de détails, pour de l'aide
        ou tout simplement pour partager vos voyages avec notre équipes, contactait nous via nos differents réseaux sociaux.

=======
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
>>>>>>> e613a36751303b7ee9bc5cdea2241dc3db56e815
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Carbay</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
<<<<<<< HEAD
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
=======
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),

  methods: {
>>>>>>> e613a36751303b7ee9bc5cdea2241dc3db56e815
    redirect: function (link, target = "_blank") {
      window.open(link, target);
    },
  },
<<<<<<< HEAD
  }
=======
};
>>>>>>> e613a36751303b7ee9bc5cdea2241dc3db56e815
</script>