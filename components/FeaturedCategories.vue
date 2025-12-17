<template>
  <section class="featured-categories bg-white w-full" style="padding-top: 40px; padding-bottom: 40px;">
    <div class="container mx-auto" style="width: 760px;">
      <!-- Section Title with Lines -->
      <div class="flex items-center mb-10" style="gap: 40px;">
        <div class="h-px flex-1" style="background-color: #0099A81A;"></div>
        <h2 class="font-roboto font-medium text-2xl text-[#0099A8] whitespace-nowrap">
          Featured categories
        </h2>
        <div class="h-px flex-1" style="background-color: #0099A81A;"></div>
      </div>

      <!-- Categories Grid -->
      <div class="flex flex-col" style="gap: 40px;">
        <!-- Row 1 -->
        <div class="flex" style="gap: 40px; height: 280px;">
          <!-- Personal Care -->
          <div class="category-card relative overflow-hidden" style="width: 360px; height: 280px; border-radius: 6px; border: 1px solid #ECECEC80; box-shadow: 0px 1px 8px 0px #0000000A, 0px 24px 24px 0px #0000000F, 0px -6px 30px 0px #0000000F;">
            <img 
              src="/images/personal-care.jpg" 
              alt="Personal Care" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <div class="flex flex-col text-center" style="width: 232px; height: 152px; background-color: rgba(255, 255, 255, 0.9); border-radius: 8px; padding: 16px; gap: 8px; justify-content: center; border: 1px solid #ECECEC80; box-shadow: 0px 1px 8px 0px #0000000A, 0px 24px 24px 0px #0000000F, 0px -6px 30px 0px #0000000F;">
                <h3 class="font-roboto" style="font-weight: 700; font-size: 20px; line-height: 24px; letter-spacing: 0px; text-align: center; color: #2A2A48;">Personal Care</h3>
                <p class="font-roboto text-sm" style="color: #485363; line-height: 1.5;">
                  Lorem ipsum dolor sit amet<br />consectetu elit aliquam
                </p>
                <button class="font-roboto font-medium text-sm text-white mx-auto" style="width: 89px; height: 32px; padding-left: 16px; padding-right: 16px; gap: 8px; background-color: rgba(19, 138, 150, 1); border-radius: 4px; border: none; cursor: pointer;">
                  BROWSE
                </button>
              </div>
            </div>
          </div>

          <!-- Skin Care -->
          <div class="category-card relative overflow-hidden" style="width: 360px; height: 280px; border-radius: 6px; border: 1px solid #ECECEC80; box-shadow: 0px 1px 8px 0px #0000000A, 0px 24px 24px 0px #0000000F, 0px -6px 30px 0px #0000000F;">
            <img 
              src="/images/skin-care.jpg" 
              alt="Skin Care" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <div class="flex flex-col text-center" style="width: 232px; height: 152px; background-color: rgba(255, 255, 255, 0.9); border-radius: 8px; padding: 16px; gap: 8px; justify-content: center; border: 1px solid #ECECEC80; box-shadow: 0px 1px 8px 0px #0000000A, 0px 24px 24px 0px #0000000F, 0px -6px 30px 0px #0000000F;">
                <h3 class="font-roboto" style="font-weight: 700; font-size: 20px; line-height: 24px; letter-spacing: 0px; text-align: center; color: #2A2A48;">Skin Care</h3>
                <p class="font-roboto text-sm" style="color: #485363; line-height: 1.5;">
                  Lorem ipsum dolor sit amet<br />consectetu elit aliquam
                </p>
                <button class="font-roboto font-medium text-sm text-white mx-auto" style="width: 89px; height: 32px; padding-left: 16px; padding-right: 16px; gap: 8px; background-color: rgba(19, 138, 150, 1); border-radius: 4px; border: none; cursor: pointer;">
                  BROWSE
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="flex" style="gap: 40px; height: 280px;">
          <!-- Make-Up -->
          <div class="category-card relative overflow-hidden" style="width: 360px; height: 280px; border-radius: 6px; border: 1px solid #ECECEC80; box-shadow: 0px 1px 8px 0px #0000000A, 0px 24px 24px 0px #0000000F, 0px -6px 30px 0px #0000000F;">
            <img 
              src="/images/makeup.jpg" 
              alt="Make-Up" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <div class="flex flex-col text-center" style="width: 232px; height: 152px; background-color: rgba(255, 255, 255, 0.9); border-radius: 8px; padding: 16px; gap: 8px; justify-content: center; border: 1px solid #ECECEC80; box-shadow: 0px 1px 8px 0px #0000000A, 0px 24px 24px 0px #0000000F, 0px -6px 30px 0px #0000000F;">
                <h3 class="font-roboto" style="font-weight: 700; font-size: 20px; line-height: 24px; letter-spacing: 0px; text-align: center; color: #2A2A48;">Make - Up</h3>
                <p class="font-roboto text-sm" style="color: #485363; line-height: 1.5;">
                  Lorem ipsum dolor sit amet<br />consectetu elit aliquam
                </p>
                <button class="font-roboto font-medium text-sm text-white mx-auto" style="width: 89px; height: 32px; padding-left: 16px; padding-right: 16px; gap: 8px; background-color: rgba(19, 138, 150, 1); border-radius: 4px; border: none; cursor: pointer;">
                  BROWSE
                </button>
              </div>
            </div>
          </div>

          <!-- Mother & Baby -->
          <div class="category-card relative overflow-hidden" style="width: 360px; height: 280px; border-radius: 6px; border: 1px solid #ECECEC80; box-shadow: 0px 1px 8px 0px #0000000A, 0px 24px 24px 0px #0000000F, 0px -6px 30px 0px #0000000F;">
            <img 
              src="/images/mother-baby.jpg" 
              alt="Mother & Baby" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <div class="flex flex-col text-center" style="width: 232px; height: 152px; background-color: rgba(255, 255, 255, 0.9); border-radius: 8px; padding: 16px; gap: 8px; justify-content: center; border: 1px solid #ECECEC80; box-shadow: 0px 1px 8px 0px #0000000A, 0px 24px 24px 0px #0000000F, 0px -6px 30px 0px #0000000F;">
                <h3 class="font-roboto" style="font-weight: 700; font-size: 20px; line-height: 24px; letter-spacing: 0px; text-align: center; color: #2A2A48;">Mother & Baby</h3>
                <p class="font-roboto text-sm" style="color: #485363; line-height: 1.5;">
                  Lorem ipsum dolor sit amet<br />consectetu elit aliquam
                </p>
                <button class="font-roboto font-medium text-sm text-white mx-auto" style="width: 89px; height: 32px; padding-left: 16px; padding-right: 16px; gap: 8px; background-color: rgba(19, 138, 150, 1); border-radius: 4px; border: none; cursor: pointer;">
                  BROWSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
button:hover {
  background-color: rgba(19, 138, 150, 0.85) !important;
}

</style>
