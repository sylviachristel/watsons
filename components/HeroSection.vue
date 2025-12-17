<template>
  <div class="relative w-full overflow-hidden bg-[#F2F0FF]" style="height: 400px; background: linear-gradient(90deg, #F2F0FF 0%, #FFFFFF 67%, #FCFCFF 96%, #F2F0FF 100%);">
     
     <div class="container mx-auto px-0 h-full flex flex-col md:flex-row items-center justify-between relative z-10 pt-8 md:pt-0 pb-8 md:pb-0" style="max-width: 1160px; gap: 40px;">
        <!-- Left Side: Text Content -->
        <div class="z-20 w-full md:w-[580px] shrink-0 text-center md:text-left flex flex-col justify-center items-center md:items-start h-full pl-[0px]">
            <p class="uppercase mb-2 text-[#8493A8]" style="font-family: 'Roboto'; font-weight: 700; font-size: 14px; line-height: 16px; letter-spacing: 0px;">NATURALS BY WATSONS</p>
            <h1 class="text-[#2A2A48] mb-4" style="font-family: 'Rubik'; font-weight: 700; font-size: 34px; line-height: 48px; letter-spacing: 0px;">The new 2021 collection</h1>
            <p class="mb-6 md:mb-8 mx-auto md:mx-0" style="font-family: 'Roboto'; font-weight: 400; font-size: 16px; line-height: 24px; letter-spacing: 0px; color: #485363; vertical-align: middle;">
                Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep&nbsp;the<br /> hair looking smooth. Let your hair be flexible and fresh.
            </p>
            <button class="bg-[#FF33A1] hover:bg-pink-600 text-white font-bold py-3 px-8 rounded flex items-center gap-2 text-sm md:text-base mb-12" style="border-radius: 4px;">
                SHOP NOW
            </button>

            <!-- Progress Bar -->
            <div>
               <img src="~/assets/css/images/progress-bar.png" alt="Progress" style="width: auto; height: auto;" />
            </div>
        </div>

        <div class="relative w-full md:w-[540px] h-[300px] md:h-[400px] flex items-end justify-center md:block pointer-events-none mt-4 md:mt-0" style="transform: translateX(60px);">
             
             <!--  Background -->
             <img src="~/assets/css/images/hero-leaves.png" class="absolute z-0 object-contain opacity-100" style="width: 334px; height: 314px; top: 15px; left: -96px;" />
             
             <!-- Circles -->
             <img src="~/assets/css/images/Ellipse60.png" class="absolute z-0 object-contain opacity-100" style="width: 326.75px; height: 325.35px; top: 20.65px; left: 160px;" />
             <img src="~/assets/css/images/Ellipse61.png" class="absolute z-0 object-contain opacity-100" style="width: 328.27px; height: 325.86px; top: 40.73px; left: 130px;" />


             <!-- Desktop Layout (Balanced) - Hidden on Mobile, shown on MD -->
             <div class="hidden md:block w-full h-full relative">
                 <img src="~/assets/css/images/hero-prod-1.png" class="absolute z-10" style="width: 101px; height: 326px; top: 36px; left: 270px;" />
                 <img src="~/assets/css/images/hero-prod-3.png" class="absolute z-20" style="width: 336px; height: 336px; top: 27px; left: 30px;" />
                 <img src="~/assets/css/images/hero-prod-2.png" class="absolute z-30" style="width: 256px; height: 256px; top: 129.5px; left: -15px;" />
             </div>

             <!-- Mobile Layout -->
             <div class="md:hidden relative w-full h-full flex items-end justify-center">
                 <img src="~/assets/css/images/hero-prod-1.png" class="absolute bottom-0 right-[15%] z-10 h-[85%] object-contain" />
                 <img src="~/assets/css/images/hero-prod-3.png" class="absolute bottom-0 right-[30%] z-20 h-[70%] object-contain" />
                 <img src="~/assets/css/images/hero-prod-2.png" class="absolute bottom-0 right-[45%] z-30 h-[55%] object-contain" />
             </div>
        </div>
     </div>

     <!-- Slider Arrows -->
      
     <!-- Left Arrow -->
     <div class="hidden md:flex absolute left-16 top-1/2 -translate-y-1/2 items-center justify-center cursor-pointer hover:scale-110 transition-transform z-30">
        <img src="/images/arrow-left.png" alt="Previous" style="height: 32px; width: auto; image-rendering: -webkit-optimize-contrast; backface-visibility: hidden;" />
     </div>

     <!-- Right Arrow -->
     <div class="hidden md:flex absolute right-16 top-1/2 -translate-y-1/2 items-center justify-center cursor-pointer hover:scale-110 transition-transform z-30">
        <img src="/images/arrow-right.png" alt="Next" style="height: 32px; width: auto; image-rendering: -webkit-optimize-contrast; backface-visibility: hidden;" />
     </div>

  </div>
</template>

<script setup>
</script>