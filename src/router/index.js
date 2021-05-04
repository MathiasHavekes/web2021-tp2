import Vue from "vue"
import VueRouter from "vue-router"
import Index from "../views/Index.vue"
import RentCar from "../views/RentCar.vue"
import Signin from "../views/Signin.vue"
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
    component: RentCar,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/user/signup",
    name: "Signup",
    component: Signup,
    meta: {
      requiresNanAuth: true
    }
  },
  {
    path: "/user/signout",
    name: "Signout",
  },
  {
    path: "/user/signin",
    name: "Signin",
    component: Signin,
    meta: {
      requiresNanAuth: true
    }
  },
  {
    path: "/user/account",
    name: "Account",
    component: Account,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("connected") == "true") {
      next()
    } else {
      next({
        path: "/user/signin"
      })
    }
  } else if(to.matched.some(record => record.meta.requiresNanAuth)) {
    if (localStorage.getItem("connected") == "true") {
      next({
        path: "/"
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
