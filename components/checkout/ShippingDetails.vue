<template>
  <div class="bg-white px-0 py-6 rounded-lg">
    <div class="flex items-center gap-2 mb-6">
      <img :src="shippingDetailsIcon" alt="Shipping Details" class="w-8 h-8 object-contain relative bottom-[10px]" />
      <h2 class="w-[144px] h-[24px] font-roboto font-medium text-[20px] leading-[24px] tracking-[0px] text-[#2A2A48] flex items-center whitespace-nowrap ml-2 relative bottom-[10px]">Shipping details</h2>
    </div>

    <form class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        <div>
          <label class="block w-fit font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#2A2A48] mb-1 h-[24px]">First Name *</label>
          <input type="text" class="w-full h-[48px] px-4 border border-[#ECECEC] rounded focus:outline-none" />
        </div>
        <div>
          <label class="block w-fit font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#2A2A48] mb-1 h-[24px]">Last Name *</label>
          <input type="text" class="w-full h-[48px] px-4 border border-[#ECECEC] rounded focus:outline-none" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        <div>
          <label class="block w-fit font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#2A2A48] mb-1 h-[24px]">Email Address *</label>
          <input type="email" class="w-full h-[48px] px-4 border border-[#ECECEC] rounded focus:outline-none" />
        </div>
        <div>
          <label class="block w-fit font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#2A2A48] mb-1 h-[24px]">Phone Number *</label>
          <div class="relative">
            <input type="text" placeholder="+90 (5_ _) _ _ _  _ _  _ _" class="w-full h-[48px] px-4 border border-[#ECECEC] rounded focus:outline-none font-roboto font-normal text-[16px] leading-[24px] placeholder:text-[#2A2A48]/60 text-[#2A2A48]" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        <div>
          <label class="block w-fit font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#2A2A48] mb-1 h-[24px]">City *</label>
          <div class="relative">
            <select class="w-full h-[48px] px-4 border border-[#ECECEC] rounded focus:outline-none appearance-none bg-white font-roboto font-normal text-[16px] leading-[24px] text-[#2A2A48]/60">
              <option>Please select</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label class="block w-fit font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#2A2A48]/60 mb-1 h-[24px]">District *</label>
          <div class="relative">
             <select class="w-full h-[48px] px-4 border border-[#ECECEC] rounded focus:outline-none appearance-none bg-white font-roboto font-normal text-[16px] leading-[24px] text-[#2A2A48]/60">
              <option>Please select</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label class="block w-fit font-roboto font-normal text-[14px] leading-[24px] tracking-[0px] text-[#2A2A48] mb-1 h-[24px]">Address *</label>
        <textarea rows="4" placeholder="Enter neighborhood, street, avenue and other information" class="w-full p-4 border border-[#ECECEC] rounded focus:outline-none resize-none font-roboto font-normal text-[16px] leading-[24px] placeholder:text-[#2A2A48]/60 text-[#2A2A48]"></textarea>
      </div>
    </form>
  </div>
</template>

<script setup>
import shippingDetailsIcon from '~/assets/css/icon/shipping-details-icon.png'
</script>
