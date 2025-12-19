<template>
  <header class="w-full">
    <!-- Responsive Design & Mobile First (Hidden on mobile, flex on desktop) -->
    <div class="top-bar hidden md:flex">
      <div class="container mx-auto px-4 top-bar-container relative">
        <div class="right-part header-right-part">
          <!-- Stores -->
          <div class="nav-item">
            <div class="icon-wrapper" style="width: 18px; height: 14px;">
               <img src="~/assets/css/icon/store-icon.png" alt="Stores" class="w-full h-full object-contain" />
            </div>
            <span class="label">Stores</span>
          </div>

          <!-- Catalog -->
          <div class="nav-item">
             <div class="icon-wrapper" style="width: 18px; height: 14px;">
               <img src="~/assets/css/icon/catalog-icon.png" alt="Catalog" class="w-full h-full object-contain" />
             </div>
            <span class="label">Catalog</span>
          </div>
        </div>
        
        <!-- Centered Text -->
        <div class="absolute left-[50%] transform -translate-x-1/2" style="font-family: 'Roboto'; font-weight: 400; font-size: 14px; line-height: 24px; letter-spacing: 0px; text-align: center; vertical-align: middle; color: #ECECEC80; margin-left: 2px;">
          Watsons Beauty and Personal Care Awards Nominees!
        </div>

        <!-- Contact Info (Right Aligned) -->
        <div class="ml-auto flex items-center space-x-2">
           <span style="font-family: 'Roboto'; font-weight: 500; font-size: 14px; line-height: 24px; letter-spacing: 0px; text-align: center; vertical-align: middle; color: #FFFFFF;">Call us:(+90) 850 123 45 67</span>
           <div class="icon-wrapper header-phone-icon" style="width: 18px; height: 14px;">
               <img src="~/assets/css/icon/phone-icon.png" alt="Phone" class="w-full h-full object-contain" />
           </div>
        </div>
      </div>
    </div>

    <!-- Middle Section -->
    <div class="container mx-auto px-4 pt-0 pb-1 flex md:flex-nowrap justify-start items-center gap-4">
      <!-- Logo -->
      <div class="logo flex-shrink-0 header-logo"> 
         <img src="~/assets/css/icon/logo.png" alt="Watsons" class="h-7 w-auto" />
      </div>

      <!-- Search Bar -->
      <div class="flex items-center w-full md:w-[620px] order-3 md:order-none mt-2 md:mt-0 header-search" style="height: 42px; background: rgba(236, 236, 236, 0.3); border-radius: 32px; padding: 0px 8px; gap: 8px;">
        <!-- Icon (Order 0) -->
        <div style="width: 16px; height: 16px; flex: none; order: 0; display: flex; align-items: center; justify-content: center; margin-left: 4px;">
           <img src="~/assets/css/icon/search-icon.png" alt="Search" class="w-full h-full object-contain" />
        </div>
        
        <!-- Input (Order 1) -->
        <input 
          type="text" 
          placeholder="Write the product or category you are looking for" 
          class="bg-transparent border-none focus:outline-none placeholder-custom w-full"
          style="height: 24px; font-family: 'Roboto'; font-weight: 400; font-size: 14px; line-height: 24px; color: #8493A8; flex: none; order: 1; flex-grow: 1;"
        />
      </div>

      <!-- User & Cart Section -->
      <div class="flex items-center ml-auto header-user-section" style="gap: 32px;">
        <!-- Search Icon for Mobile -->
        <button class="md:hidden text-gray-700" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- User Profile -->
        <div class="hidden md:flex items-center" style="margin-left: 11px; gap: 16px;">
          <span class="text-sm font-medium whitespace-nowrap">
            <span style="color: #8493A8">Hello, </span> <span style="color: #2A2A48">Clara Clara</span>
          </span>
          <div class="rounded-full overflow-hidden" style="width: 36px; height: 36px; border: 2px solid #FFFFFF; border-radius: 50%; flex-shrink: 0;">
             <img src="~/assets/css/images/clara-avatar.png" alt="Clara" class="w-full h-full object-cover" />
          </div>
          <img src="~/assets/css/icon/arrow-down.png" alt="Arrow" class="object-contain" style="width: 13px; height: 14px; opacity: 1; margin-left: 6px; margin-right: 10px; position: relative;" />
        </div>

        <!-- Separator -->
        <div class="hidden md:block" style="background-color: #ECECEC; margin-right: -7px; width: 0.5px; height: 24px; opacity: 1;"></div>

        <!-- Cart -->
        <div class="relative cursor-pointer flex items-end justify-center" style="width: 25px; height: 72px; padding-bottom: 10px; margin-top: 12px; margin-right: 15px;">
           <img src="~/assets/css/icon/cart-icon.png" alt="Cart" class="w-full h-full object-contain" />
        </div>
      </div>
    </div>

    <!-- Bottom Menu (Desktop) -->
    <div class="hidden md:block">
      <div class="container mx-auto px-4 pr-[105px] pl-[180px]">
        <nav class="flex overflow-x-auto whitespace-nowrap items-center w-full" style="gap: 40px;">
           <a href="#" class="nav-menu-item">CAMPAIGNS</a>
           <a href="#" class="nav-menu-item">PERSONAL CARE</a>
           <a href="#" class="nav-menu-item">SKIN CARE</a>
           <a href="#" class="nav-menu-item">MAKE UP</a>
           <a href="#" class="nav-menu-item">MOTHER & BABY</a>
           <a href="#" class="nav-menu-item">MEN CARE</a>
           <a href="#" class="nav-menu-item">HEALTHY LIFE</a>
           <a href="#" class="nav-menu-item" style="margin-left: -5px;">BRANDS</a>
        </nav>
      </div>
    </div>

    <!-- Mobile Menu (Slide Down) -->
    <div v-show="isMenuOpen" class="md:hidden absolute top-auto left-0 w-full bg-white z-50 shadow-lg p-4 flex flex-col gap-4 border-t border-gray-100">
        <!-- Mobile Links -->
        <a href="#" class="block py-2 text-[#2A2A48] font-bold">CAMPAIGNS</a>
        <a href="#" class="block py-2 text-[#2A2A48] font-bold">PERSONAL CARE</a>
        <a href="#" class="block py-2 text-[#2A2A48] font-bold">SKIN CARE</a>
        <a href="#" class="block py-2 text-[#2A2A48] font-bold">MAKE UP</a>
        <a href="#" class="block py-2 text-[#2A2A48] font-bold">MOTHER & BABY</a>
        <a href="#" class="block py-2 text-[#2A2A48] font-bold">MEN CARE</a>
        <a href="#" class="block py-2 text-[#2A2A48] font-bold">HEALTHY LIFE</a>
        <a href="#" class="block py-2 text-[#2A2A48] font-bold">BRANDS</a>
        
        <hr class="border-gray-200" />
        
        <!-- Mobile Stores & Catalog -->
        <div class="flex flex-col gap-2">
           <div class="nav-item justify-start w-full" style="background: #505357;">
             <div class="icon-wrapper" style="width: 18px; height: 14px;">
                <img src="~/assets/css/icon/store-icon.png" alt="Stores" class="w-full h-full object-contain" />
             </div>
             <span class="label">Stores</span>
           </div>
           <div class="nav-item justify-start w-full" style="background: #505357;">
              <div class="icon-wrapper" style="width: 18px; height: 14px;">
                <img src="~/assets/css/icon/catalog-icon.png" alt="Catalog" class="w-full h-full object-contain" />
              </div>
             <span class="label">Catalog</span>
           </div>
        </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.top-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 100%;
  height: 40px;
  background: #505357;
}

.top-bar-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 100%;
}

.right-part {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 15px; 
  flex: none;
  order: 0;
  flex-grow: 1;
}

.header-right-part {
  margin-left: 180px;
}

.header-phone-icon {
  margin-right: 185px;
}

.header-logo {
  margin-left: 161px;
}

.header-search {
  margin-left: 156px;
}

.header-user-section {
  margin-right: 150px;
}

.nav-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 8px;
  cursor: pointer;
  background: #505357; 
  border-radius: 4px;
  transition: background 0.2s;
}

.nav-item:hover {
  background: #FFFFFF33; 
}

.icon-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.label {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
}

.placeholder-custom::placeholder {
  color: #8493A8;
  opacity: 1; 
}

.nav-menu-item {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: #2A2A48;
  text-decoration: none;
  transition: all 0.2s;
  padding: 0 16px;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 4px 4px 0 0;
}

.nav-menu-item:hover {
  background: rgba(236, 236, 236, 0.3);
  color: #2A2A48;
  cursor: pointer;
}

/* Responsive adjustments - only for screens smaller than 1440px */
@media (max-width: 1439px) and (min-width: 1200px) {
  .header-right-part {
    margin-left: 120px;
  }
  .header-phone-icon {
    margin-right: 120px;
  }
  .header-logo {
    margin-left: 100px;
  }
  .header-search {
    margin-left: 100px;
  }
  .header-user-section {
    margin-right: 100px;
  }
}

/* Screens 1024px - 1199px */
@media (max-width: 1199px) and (min-width: 1024px) {
  .header-right-part {
    margin-left: 60px;
  }
  .header-phone-icon {
    margin-right: 60px;
  }
  .header-logo {
    margin-left: 40px;
  }
  .header-search {
    margin-left: 60px;
  }
  .header-user-section {
    margin-right: 40px;
  }
}

/* Screens 768px - 1023px */
@media (max-width: 1023px) and (min-width: 768px) {
  .header-right-part {
    margin-left: 20px;
  }
  .header-phone-icon {
    margin-right: 20px;
  }
  .header-logo {
    margin-left: 0px;
  }
  .header-search {
    margin-left: 20px;
  }
  .header-user-section {
    margin-right: 0px;
  }
}

</style>
