<template>
  <div>
    <div class="container mx-auto">
      <div class="grid grid-cols-2">
        <div>
          <div class="electra_sp"><div class="title">Contracts</div>
		<ul>
                <li>Default Contract | To: Anyone | Price: 4 slTH | Anytime</li>
                <li>My Familly | To: Mom,Dad | Price: 0 slTH | Anytime</li>
                <li>My Friend | To: Mom,Dad | Price: 2 slTH | Anytime</li>
		</ul>
<br>
    		[Create]  [Update] [Activate] [Desactivate]
	  </div>
          <div class="electra_sp"><div class="title">Your MicroGrid Who's Who</div>
	  <center><img src="/micro-grid-map.jpg" alt="map"></center>
 <ul>
                <li>Partner A | electra1ewjd9u8vf6wdyqkplhpf8xs0t2upjsrqe94h2h | Balance +600kWh  </li>
		<li>Partner B | electra1fddnfpasamctmnu6a3cfmmz5zs4g74pc9rhue9 | Balance -160kWh  </li>
                <li>ACME | electra1fddnfpasamctmnu6a3cfmmz5zs4g74pc9rhue9 | Balance -160kWh  </li>
                <li>mom.com | electra1ewjd9u8vf6wdyqkplhpf8xs0t2upjsrqe94h2h | Balance +100kWh </li>
                <li>dad.org | electra107zjxp8g389e7d996xl7252pczgeepu7f5v069  | Balance +300kWh </li>
                <li></li>
                <li></li>
</ul>

	 </div>
        </div>
        <div class="electra_sp"><div class="title">Bills</div>
<ul>
		<ul>
		<li>12:00 | Bought | Status: Not Paid | Amount: 5kWh | Tarif -4 slTH | From: Acme  | [Report] </li>
	        <li>11:00 | Bought | Status: Not Paid | Amount: 3kWh | Tarif -4 slTH | From: Acme | [Report] </li> 
                <li>10:00 | Bought | Status: Not Paid | Amount: 4kWh | Tarif -5 slTH | From: MEA | [Report] </li>
                <li>09:00 | Sold   | Status: Not Paid | Amount: 3kWh | Tarif 4 slTH | To: Partner A  | [Report] </li>
                <li>09:00 | Sold   | Status: Not Paid | Amount: 1kWh | Tarif 4 slTH | To: Partner B  | [Report] </li>
                <li>08:00 | Sold   | Status: Not Paid | Amount: 1kWh | Tarif 4 slTH | To: Partner B| [Report] </li>
                <li>07:00 | Sold   | Status: Paid | Amount: 5kWh | Tarif 4 slTH | To: Partner B| [Report] </li>
                 <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
 </ul>		</ul>
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
  .electra_sp {
    border-radius: 1.2rem;
    padding: 2rem;
    font-size: 0.8rem;
    background: rgba(255,255,255,0.7);
    font-weight: 800;
    color:darkblue;
    letter-spacing: 0.03em;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
}
.electra_sp_free {
    border-radius: 1.2rem;
    padding: 2rem;
    background: rgba(234,220,255,0.5);
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
}
.title {
    font-size: 1rem;
    font-weight: 800;
    color:black;
}

</style>
