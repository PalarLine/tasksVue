import { createRouter, createWebHistory } from "vue-router"
import CarMarket from "../views/CarMarket.vue"
import ProductManager from "../views/ProductManager.vue"

const routes = [
  {
    path: "/",
    name: "task-1",
    component: ProductManager,
  },
  {
    path: "/task-2",
    name: "task-2",
    component: CarMarket,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
