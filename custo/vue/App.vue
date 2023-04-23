<script setup lang="ts">
import { RouterView } from "vue-router";
import IgntHeader from "./components/IgntHeader.vue";

const items = [
  {
    label: "Electrical Meter",
    to: "/meter",
  },
  {
    label: "Billing",
    to: "/bills",
  },
  {
    label: "Wallet",
    to: "/",
  },
  {
    label: "Staking",
    to: "/data",
  },
  {
    label: "Governance DAO",
    to: "/dao",
  },
  {
    label: "Data Analytics",
    to: "/Bigdata",
  },
  {
    label: "Meter Onboarding",
    to: "/onboarding",
  },
];
</script>

<template>
  <IgntHeader :nav-items="items"></IgntHeader>
  <RouterView />
</template>
