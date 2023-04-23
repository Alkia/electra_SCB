import { createRouter, createWebHistory } from "vue-router";

import DataView from "../views/DataView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import MeterView from '../views/Meter.vue'
import DAOView from '../views/Voter.vue'
import BillingView from '../views/Billing.vue'
import OnboardingView from '../views/Onboarding.vue'

const routerHistory = createWebHistory();
const routes = [
  { path: "/", component: PortfolioView },
  { path: "/data", component: DataView },
  { path: "/meter", component: MeterView },
  { path: "/dao", component: DAOView },
  { path: "/bills", component: BillingView },
  { path: "/onboarding", component:  OnboardingView },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
