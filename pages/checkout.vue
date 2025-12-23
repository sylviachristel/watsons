<template>
  <div class="checkout-page w-full">
    <!-- Breadcrumb & Title Section -->
    <div :style="{ width: '100vw', marginLeft: 'calc(50% - 50vw)', backgroundColor: 'rgba(236, 236, 236, 0.3)', position: 'relative', zIndex: 10 }">
      <div class="px-4 flex flex-col justify-center breadcrumb-section">
        <div class="w-full flex flex-col gap-4 checkout-header-align">
          <!-- Breadcrumb -->
          <div class="flex items-center" style="height: 16px; gap: 12px; opacity: 1;">
            <!-- Link to homepage-->
            <NuxtLink to="/" class="font-roboto font-normal text-[12px] leading-[16px] text-[#8493A8] tracking-[0px] align-middle hover:text-[#0099A8] transition-colors">Homepage</NuxtLink>
            <img src="~/assets/css/icon/checkout-icon.png" alt=">" class="w-3 h-3 object-contain opacity-40" />
            <span class="font-roboto font-normal text-[12px] leading-[16px] text-[#8493A8] tracking-[0px] align-middle">Shopping Cart</span>
            <img src="~/assets/css/icon/checkout-icon.png" alt=">" class="w-3 h-3 object-contain opacity-40" />
            <span class="font-roboto font-normal text-[12px] leading-[16px] text-[#0099A8] tracking-[0px] align-middle">Checkout</span>
          </div>

          <!-- Title -->
          <h1 class="w-[162px] h-[48px] font-rubik font-medium text-[34px] leading-[48px] text-[#2A2A48] tracking-[0px] flex items-center whitespace-nowrap ml-[2px]">Checkout</h1>
        </div>
      </div>
    </div>
    
    <!-- Content Section -->
    <div class="mx-auto flex flex-col justify-center items-center content-section">
      <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 relative right-[11px]" style="max-width: 1160px;">
          <!-- Left Column: Shipping Details -->
          <div class="lg:col-span-2 relative left-[30px]">
              <ShippingDetails />

              <div class="relative -mt-4">
                  <PaymentDetails />
              </div>
              <button class="w-[360px] h-[32px] mt-2 mb-2 relative z-10 bg-[#FF27AD] rounded-[4px] font-roboto font-bold text-[14px] leading-[16px] text-white tracking-[0px] hover:opacity-90 transition-opacity">
                  PAY NOW
              </button>
          </div>

          <!-- Right Column: Cart Summary -->
          <div class="lg:col-span-1 relative left-[32px]">
              <CartSummary />
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ShippingDetails from '~/components/checkout/ShippingDetails.vue'
import CartSummary from '~/components/checkout/CartSummary.vue'
import PaymentDetails from '~/components/checkout/PaymentDetails.vue'
</script>

<style scoped>
.checkout-header-align {
  margin-left: 161px;
}

/* Responsive adjustments matching AppHeader.vue */
.breadcrumb-section {
  padding-top: 24px;
  padding-bottom: 24px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.content-section {
  max-width: 1440px;
  padding: 24px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1440px) {
  .breadcrumb-section {
    margin-left: 190px;
  }
  .content-section {
    margin-left: 206px;
  }
}

@media (max-width: 1439px) and (min-width: 1200px) {
  .checkout-header-align {
    margin-left: 100px;
  }
}

@media (max-width: 1199px) and (min-width: 1024px) {
  .checkout-header-align {
    margin-left: 40px;
  }
}

@media (max-width: 1023px) {
  .checkout-header-align {
    margin-left: 0px;
  }
}
</style>
