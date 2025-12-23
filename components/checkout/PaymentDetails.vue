<template>
  <div class="bg-white px-0 py-6 rounded-lg w-[760px] h-fit min-h-[480px] relative">
    <div class="flex items-center gap-2 mb-6">
      <!-- Money Icon -->
      <div class="w-[32px] h-[32px] rounded-[4px] border border-[#ECECEC] bg-white flex items-center justify-center relative bottom-[10px]">
        <img :src="moneyIcon" alt="Payment Details" class="w-[20px] h-[20px] object-contain" />
      </div>
      <h2 class="w-[155px] h-[24px] font-roboto font-medium text-[20px] leading-[24px] tracking-[0px] text-[#2A2A48] flex items-center whitespace-nowrap ml-2 relative bottom-[10px]">Payment details</h2>
    </div>

    <div class="flex gap-8">
      <!-- Left Column: Form -->
      <form class="space-y-4 w-[360px]">
        <div>
          <label class="block w-fit font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#2A2A48] mb-1 h-[24px]">Card Holder Name *</label>
          <input type="text" class="w-full h-[48px] px-4 border border-[#ECECEC] rounded focus:outline-none" />
          <p class="font-roboto font-normal text-[12px] leading-[16px] tracking-[0px] text-[#2A2A48]/60 mt-2">Full name on card</p>
        </div>
        
        <!-- Card Number -->
         <div class="relative">
          <label class="block w-fit font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#2A2A48] mb-1 h-[24px]">Card Number *</label>
          <input type="text" class="w-full h-[48px] px-4 border border-[#ECECEC] rounded focus:outline-none" />
          <p class="font-roboto font-normal text-[12px] leading-[16px] tracking-[0px] text-[#2A2A48]/60 mt-3">Enter digits without spaces</p>
        </div>

        <div class="flex gap-4 !mt-5">
             <!-- Expiry Date -->
             <div class="w-1/2">
                <label class="block w-fit font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#2A2A48] mb-1 h-[24px] relative top-[-2px]">Expiry Date *</label>
                <div class="relative">
                    <input type="text" placeholder="MM / YY" class="w-full h-[48px] px-4 border border-[#ECECEC] rounded focus:outline-none font-roboto font-normal text-[16px] leading-[24px] placeholder:text-[#2A2A48]/60 text-[#2A2A48]" />
                </div>
            </div>

             <!-- CVV -->
            <div class="w-1/2">
                <label class="block w-fit font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#2A2A48] mb-1 h-[24px] relative top-[-2px]">CVV *</label>
                <div class="relative">
                    <input type="text" class="w-full h-[48px] px-4 border border-[#ECECEC] rounded focus:outline-none" />
                     <div class="absolute inset-y-0 right-[4px] flex items-center px-4 pointer-events-none">
                         <img :src="qmarkIcon" alt="Help" class="w-[14px] h-[14px] object-contain" />
                     </div>
                </div>
            </div>
        </div>

        <div class="space-y-8">
             <div v-for="i in 2" :key="i" class="w-[360px] h-[24px]">
                  <p class="font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#8493A8]">* Required fields</p>
             </div>
        </div>
      </form>

      <!-- Right Column: Visual Cards matching design -->
      <div class="relative w-[340px] h-[216px] mt-[48px] ml-[10px] z-10">
         <!-- Back Card  -->
         <div class="absolute top-[32px] left-[78px] w-[282px] h-[184px] bg-white border border-[#ECECEC] rounded-[12px] shadow-sm z-0">
             <div class="w-full h-[32px] bg-[#ECECEC] mt-[24px]"></div>
             <div class="px-6 mt-[24px] text-right">
                 <div class="w-[28px] h-[16px] font-roboto font-bold text-[14px] leading-[16px] tracking-[0px] text-[#8493A8] uppercase mb-1 ml-auto">CVV</div>
                 <div class="w-[31px] h-[16px] font-roboto font-medium text-[16px] leading-[16px] tracking-[0px] text-[#485363] ml-auto">XXX</div>
             </div>
         </div>

         <!-- Front Card -->
         <div class="absolute top-0 left-0 w-[282px] h-[184px] bg-white border border-[#ECECEC] rounded-[12px] shadow-sm z-10 p-6 flex flex-col gap-8">
             <!-- Top Part: Chip + Number -->
             <div class="flex flex-col gap-4">
                 <!-- Chip -->
                 <div class="flex justify-end">
                     <img :src="cardChipIcon" alt="Chip" class="w-[32px] h-[24px] object-contain" />
                 </div>
                 
                 <!-- Card Number -->
                 <div class="w-[199px] h-[24px] text-[20px] font-roboto font-bold leading-[24px] tracking-[0px] text-[#485363]">
                     0000 0000 0000 0000
                 </div>
             </div>

             <!-- Holder & Date -->
             <div class="flex flex-col gap-2">
                 <div class="w-[75px] h-[16px] text-[14px] font-roboto font-normal leading-[16px] text-[#8493A8]">Card Holder</div>
                 <div class="w-[62px] h-[16px] text-[16px] font-roboto font-medium leading-[16px] tracking-[0px] text-[#485363]">MM / YY</div>
             </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moneyIcon from '~/assets/css/icon/money-icon.png'
import cardChipIcon from '~/assets/css/icon/card-chip-icon.png'
import qmarkIcon from '~/assets/css/icon/qmark-icon.png'
</script>

