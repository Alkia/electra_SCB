<template>
  <div>
    <div class="container mx-auto">
      <div class="grid grid-cols-2">
<div class="electra_sp_2"><img src="ElectraSmartMeterHD.png" alt="meter"></div>
        <div>
          <div class="electra_sp_1">Meter Readings
		<ul>
		<li>Time : 12:30 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date : now()</li>
		<li>Blochain Epoch: 231 &nbsp;&nbsp;&nbsp; Last Block : 4234234</li>
		<li>Meter&nbsp;Addr:&nbsp;electra1qcdqa532shsqzp9cn4w7mxlke76e8at9f888qa </li>
		<br/>  Total
                <li>Power IN : 34623 kWh (Consumed) </li>
                <li>Power OUT : 2324 kWh (Produced) </li>
		<li>U max : 231 Volts &nbsp;&nbsp; I max : 30 Amps</li>
		<li>#Phases:3   Meter Type: PLC  Version: A1-14</li>
                <br/> Detail
		<li style="font-size: 0.8rem;">Phase 1: Power IN: 10442 kwh Power OUT: 731 kWh &nbsp; U:223 Volts &nbsp; Imax : 10 Amps </li>
		<li style="font-size: 0.8rem;">Phase 2: Power IN: 13427 kwh Power OUT: 749 kWh &nbsp; U:231 Volts &nbsp; Imax : 10 Amps </li>
		<li style="font-size: 0.8rem;">Phase 3: Power IN: 11034 kwh Power OUT: 723 kWh &nbsp; U:232 Volts &nbsp; Imax : 10 Amps </li>
                <li></li>
		</ul>
	  </div>
          <div class="electra_sp_1">Latest Records
		<ul style="font-size: 0.5rem;">
		<li>12:30 IN: 34623 kWh OUT: 2324 kWh Imax: 10Amps Phase 1 IN:10442 OUT:731 Phase 2 IN:13427 OUT:731 Phase 3 IN:11034 OUT:731 </li>
		<li>12:10 IN: 34623 kWh OUT: 2324 kWh Imax: 10Amps Phase 1 IN:10442 OUT:731 Phase 2 IN:13427 OUT:731 Phase 3 IN:11034 OUT:731</li>
                <li>12:00 IN: 34623 kWh OUT: 2324 kWh Imax: 10Amps Phase 1 IN:10442 OUT:731 Phase 2 IN:13427 OUT:731 Phase 3 IN:11034 OUT:731</li>
                <li>11:50 IN: 34623 kWh OUT: 2324 kWh Imax: 10Amps Phase 1 IN:10442 OUT:731 Phase 2 IN:13427 OUT:731 Phase 3 IN:11034 OUT:731</li>
                <li>11:40 IN: 34623 kWh OUT: 2324 kWh Imax: 10Amps Phase 1 IN:10442 OUT:731 Phase 2 IN:13427 OUT:731 Phase 3 IN:11034 OUT:731</li>
                <li>11:30 IN: 34623 kWh OUT: 2324 kWh Imax: 10Amps Phase 1 IN:10442 OUT:731 Phase 2 IN:13427 OUT:731 Phase 3 IN:11034 OUT:731</li>
		</ul>
	  </div>
        </div>
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
  .electra_sp_1 {
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
.electra_sp_2 {
    border-radius: 1.2rem;
    padding: 1.2rem;
    background: rgba(255,255,255,1);
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
}
</style>
