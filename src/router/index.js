import Vue from "vue"
import VueRouter from "vue-router"
import Index from "../views/Index.vue"
import RentCar from "../views/RentCar.vue"
import Signin from "../views/Signin.vue"
import About from "../views/About.vue"
import Signup from "../views/Signup.vue"
import Account from "../views/Account.vue"

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
    component: Signin
  },
  {
    path: "/Apropos",
    name: "Apropos",
    component: About
  },
  {
    path: "/signup",
    name: "signUp",
    component: Signup
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/user/account",
    name: "Account",
    component: Account
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
