<template>
  <div class="w-full flex justify-center items-center mx-auto">
    <div class="w-full mx-auto">
      <!-- to open or expand accordio :activeIndex="2" -->
      <Accordion v-for="faq in props.message" :key="faq">
        <!-- <AccordionTab
          :header="faq.attributes.title"
          class="font-black-custom font-bold lg:text-[18px] text-[#20407c]"
          color="white"
        >
          <p v-html="items.text" class="text-[18px] font-regular-custom text-custom-color">
          </p>
          <p v-html="items.text2" class="font-black-custom text-[18px] text-[#2a8cfb] py-8">
          </p>
        </AccordionTab> -->
        <AccordionTab :header="faq.attributes.title" class="font-black-custom text-[18px] text-[#20407c]" color="white">
          <p v-html="faq.attributes.description" class="text-[18px] font-regular-custom text-[#1d1d33]"></p>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
let count = 0;
const props = defineProps(["message"]);
</script>

<style>
.text-custom-color {
  color: #1d1d33;
}

.p-accordion-header-text {
  color: #20407c;
  font-size: 18px;
  font-weight: 900;
  font-family: "Black", sans-serif;
}

.p-accordion-toggle-icon {
  position: absolute;
  right: 0%;
  padding: 2px;
  color: #20407c;
}

.p-accordion .p-accordion-content {
  padding-left: 2rem !important;
}

.p-accordion .p-accordion-header .p-accordion-header-link {
  background-color: white !important;
  min-height: 70px;
  height: auto;
  display: block;
  padding: 1.5rem 2.75rem 1.5rem 2rem;
  border: 1px solid #dee2e6;
  color: #495057;
  background: #f8f9fa;
  font-weight: 900 !important;
  border-radius: 3px;
  transition: box-shadow 0.2s;
  font-size: 18px;
}

.p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
  width: 20px;
  height: 20px;
  margin: 0 auto;
  right: 25px;
  top: 25px;
}

.p-accordion .pi {
  color: #2a8cfb;
}</style>
