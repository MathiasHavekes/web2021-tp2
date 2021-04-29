import Vue from "vue"
import VueRouter from "vue-router"
import Index from "../views/Index.vue"
import RentCar from "../views/RentCar.vue"
import SignIn from "../views/SignIn.vue"
import About from "../views/About.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Index
  },
  {
    path: "/rent/car",
    name: "RentCar",
    component: RentCar
  },
  {
    path: "/user/signin",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/Apropos",
    name: "Apropos",
    component: About
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
