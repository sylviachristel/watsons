<template>
  <div class="h-fit">
    <h2 class="h-[24px] font-roboto font-medium text-[20px] leading-[24px] tracking-[0px] text-[#2A2A48] flex items-center mb-6 ml-2 relative top-[20px]">Shopping cart summary</h2>
    
    <div class="bg-white p-6 rounded-[6px] border border-[#ECECEC] custom-card-shadow ml-2 mt-[55px]">
      <div class="space-y-6">
        <!-- Item 1 -->
        <div class="flex bg-white rounded-[6px] shadow-[0px_1px_2px_0px_#37415114] h-[96px]">
          <div class="w-[116px] h-full bg-[#ECECEC29] p-[16px] rounded-l-[4px] flex-shrink-0 flex items-center justify-center">
            <img src="/images/boom-butter.png" alt="Product" class="w-full h-full object-contain mix-blend-multiply" />
          </div>
          <div class="flex-1 pl-2 pr-0 py-2">
            <h3 class="text-sm text-[#2A2A48] font-medium leading-[24px] mb-1 line-clamp-2 tracking-tight">Herbal Science Boom Butter Hair Care Oil 190ml</h3>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-[#485363]">44,95 TL</span>
              <div class="flex items-center gap-2">
                <button class="w-[24px] h-[24px] border border-[#ECECEC] rounded-[4px] flex items-center justify-center bg-white">
                  <img src="~/assets/css/icon/plus-icon.png" alt="+" class="w-[12px] h-[16px] object-contain" />
                </button>
                <span class="text-[16px] font-medium text-[#1D1D1B]">1</span>
                <button class="w-[24px] h-[24px] border border-[#ECECEC] rounded-[4px] flex items-center justify-center bg-white">
                  <img src="~/assets/css/icon/minus-icon.png" alt="-" class="w-[12px] h-[16px] object-contain" />
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Item 2 -->
        <div class="flex bg-white rounded-[6px] shadow-[0px_1px_2px_0px_#37415114] h-[96px]">
          <div class="w-[116px] h-full bg-[#ECECEC29] p-[16px] rounded-l-[4px] flex-shrink-0 flex items-center justify-center">
             <img src="/images/ashley-joy-shampoo.png" alt="Product" class="w-full h-full object-contain mix-blend-multiply" />
          </div>
          <div class="flex-1 px-2 py-2">
            <h3 class="text-sm text-[#2A2A48] font-medium leading-[24px] mb-1 line-clamp-2">Ashley Joy Strengthening Shampoo 400ml</h3>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-[#485363]">29,45 TL</span>
              <div class="flex items-center gap-2">
                <button class="w-[24px] h-[24px] border border-[#ECECEC] rounded-[4px] flex items-center justify-center bg-white">
                  <img src="~/assets/css/icon/plus-icon.png" alt="+" class="w-[12px] h-[16px] object-contain" />
                </button>
                <span class="text-[16px] font-medium text-[#1D1D1B]">1</span>
                <button class="w-[24px] h-[24px] border border-[#ECECEC] rounded-[4px] flex items-center justify-center bg-white">
                  <img src="~/assets/css/icon/minus-icon.png" alt="-" class="w-[12px] h-[16px] object-contain" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Discount Code -->
      <div class="mt-6 mb-6">
        <input type="text" placeholder="Discount code" class="w-full h-[48px] px-4 border border-[#ECECEC] rounded focus:outline-none" />
      </div>
  
      <!-- Totals -->
      <div class="space-y-3">
        <div class="flex justify-between items-center text-sm">
          <span class="font-roboto font-normal text-[16px] leading-[16px] text-[#485363]">Subtotal</span>
          <span class="font-roboto font-normal text-[16px] leading-[16px] text-[#485363]">74,40 TL</span>
        </div>
        <div class="flex justify-between items-center text-sm">
          <span class="font-roboto font-normal text-[16px] leading-[16px] text-[#485363]">Shipping</span>
          <span class="font-roboto font-normal text-[16px] leading-[16px] text-[#485363]">10,50 TL</span>
        </div>
        <div class="flex justify-between items-center pt-3 border-t border-gray-100 mt-3">
          <span class="font-roboto font-bold text-[20px] leading-[24px] text-[#2A2A48]">Total</span>
          <span class="font-roboto font-bold text-[20px] leading-[24px] text-[#2A2A48]">84,90 TL</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.custom-card-shadow {
  box-shadow: 0px 4px 16px 0px #2A2A480A;
}
</style>
