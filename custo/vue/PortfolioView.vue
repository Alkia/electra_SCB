<template>
  <div>
    <div class="container mx-auto">
      <div class="grid grid-cols-2">
        <div>
          <div class="electra_sp"><IgntAssets :key="address" class="px-2.5 mb-10" :display-limit="3" /></div>
          <div class="electra_sp"><IgntTransactions :key="address" class="px-2.5" /></div>
        </div>
        <div class="electra_sp_free"><IgntTransfer class="px-2.5 w-4/6 mx-auto" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAddress } from "@/def-composables/useAddress";
import IgntAssets from "../components/IgntAssets.vue";
import IgntTransactions from "../components/IgntTransactions.vue";
import IgntTransfer from "../components/IgntTransfer.vue";
const { address } = useAddress();
</script>
<style scoped>
  .electra_sp {
    border-radius: 1.2rem;
    padding: 2rem;
    font-size: 1rem;
    background: rgba(234,220,255,0.3);
    font-weight: 800;
    letter-spacing: 0.03em;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
}
.electra_sp_free {
    border-radius: 1.2rem;
    padding: 2rem;
    background: rgba(234,220,255,0.3);
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
}
</style>
