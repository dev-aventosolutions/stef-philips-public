<template>
  <div class="pt-11 container mx-auto">
    <h2 class="lg:text-[30px] xxxs:text-[25px] text-[#20407c] font-black-custom mb-[2rem]">
      Report a repair
    </h2>
    <p class="lg:text-[18px] xxxs:text-[16px] text-[#20407C] font-black-custom mt-3">
      Select the option that best describes your issue
    </p>
    <!-- <button @click="trackEvent">Track Event</button> -->
    <form ref="form" @submit.prevent="submitForm()" id="repair-form">
      <p
        class="lg:text-[18px] xxxs:text-[15px] text-custom-color font-regular-custom lg:mt-3 lg:mb-3 xxxs:mt-1 xxxs:mb-1">
        Select one
      </p>
      <Dropdown v-model="selectedOption" inputId="dd-city" :options="props.selectOption" optionLabel="attributes.title"
        placeholder="Select..." class="w-full lg:max-w-[632px] min-h-[50px]" />

      <p class="lg:text-[18px] xxxs:text-[16px] text-[#20407C] font-black-custom mt-16">
        Please describe the issue
      </p>
      <p class="lg:text-[18px] xxxs:text-[16px] text-custom-color font-regular-custom mt-2">
        Be as detailed as possible
      </p>
      <Textarea v-on:blur="onBlurEvent()" v-model="message" rows="5" cols="30"
        class="lg:mt-8 xxxs:mt-4 w-full max-w-[632px] min-h-[180px]" />
      <p class="lg:text-[18px] xxxs:text-[14px] text-[#20407C] font-black-custom mt-11">
        Upload any supporting images or documents that may be helpful
      </p>
      <p class="lg:text-[18px] xxxs:text-[16px] text-custom-color font-regular-custom mt-3">
        Total size of all files not to exceed 20MB.
      </p>
      <div class="mt-3 flex flex-col max-w-[632px] justify-start" v-for="(fileInput, index) in fileInputRefs"
        :key="index">
        <div class="flex justify-between items-center">
          <input ref="fileUpload" type="file"
            class="block w-full text-slate-500 file:cursor-pointer file:mr-6 file:py-4 file:px-4 rounded file:border-0 file:text-[16px] text-[16px] file:bg-[#2196F3] file:text-white"
            @change="onFileChange(index, $event)" accept=".pdf, .docx, .mp4, image/*" />
          <button class="pi pi-trash text-[#f00] mr-3" v-if="fileInputRefs[index + 1]"
            @click.prevent="deleteFile(index)"></button>
          <button class="pi pi-plus text-primary" v-show="index == fileInputs.length - 1"
            @click.prevent="addremoveFile('add', index)"></button>
          <button class="pi pi-minus text-danger ml-3" v-show="index || (!index && fileInputs.length > 1)"
            @click.prevent="addremoveFile('minus', index)"></button>
        </div>
      </div>

      <div class="pt-11 pb-24">
        <h2 class="lg:text-[30px] xxxs:text-[25px] text-[#20407c] font-black-custom mb-5">
          Your details
        </h2>
        <div class="w-full">
          <div class="pt-5">
            <div>
              <label for="username" class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom">Your full
                name
                <sup style="
                    color: red;
                    position: inherit;
                    margin-left: 3px;
                    font-size: 18px;
                  ">*</sup>
              </label>
            </div>
            <InputText type="text" required v-model="full_name" class="my-4 w-full max-w-[632px] min-h-[50px]" />
          </div>
          <div class="pt-1">
            <div>
              <label for="username" class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom">
                Street address
                <sup style="
                    color: red;
                    position: inherit;
                    margin-left: 3px;
                    font-size: 18px;
                  ">*</sup>
              </label>
            </div>
            <InputText type="text" required v-model="street_address" class="my-4 w-full max-w-[632px] min-h-[50px]" />
          </div>
          <div class="pt-1">
            <div>
              <label for="username" class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom">Flat/unit
                number
                <sup style="
                    color: red;
                    position: inherit;
                    margin-left: 3px;
                    font-size: 18px;
                  ">*</sup>
              </label>
            </div>
            <InputText type="text" required v-model="flat_number" class="my-4 w-full max-w-[632px] min-h-[50px]" />
          </div>
          <div class="grid md:grid-cols-2 max-w-[632px] py-1 gap-x-[36px] w-full">
            <div class="">
              <div>
                <label for="username" class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom">Town / city
                  <sup style="
                      color: red;
                      position: inherit;
                      margin-left: 3px;
                      font-size: 18px;
                    ">*</sup>
                </label>
              </div>
              <InputText type="text" required v-model="town" class="my-4 w-full min-h-[50px]" />
            </div>
            <div class="">
              <div>
                <label for="username" class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom">Postcode
                  <sup style="
                      color: red;
                      position: inherit;
                      margin-left: 3px;
                      font-size: 18px;
                    ">*</sup>
                </label>
              </div>
              <InputText type="text" required v-model="postcode" class="my-4 w-full max-w-[632px] min-h-[50px]" />
            </div>
          </div>
          <div class="py-1">
            <div>
              <label for="username" class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom">Email address
                <sup style="
                    color: red;
                    position: inherit;
                    margin-left: 3px;
                    font-size: 18px;
                  ">*</sup>
              </label>
            </div>
            <InputText type="email" required v-model="email" class="my-4 w-full max-w-[632px] min-h-[50px]" />
          </div>
          <div>
            <label class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom">Contact number
              <sup style="
                  color: red;
                  position: inherit;
                  margin-left: 3px;
                  font-size: 18px;
                ">*</sup>
            </label>
          </div>
          <InputText type="text" v-model="contact_number" required class="my-4 w-full max-w-[632px] min-h-[50px]" />
          <!-- <Button link='contact-submitted' value="Submit" addClass="my-4 w-full max-w-[632px] min-h-[50px] font-xbold-custom bg-[#2A8CFB] hover:bg-[#1F73D3]  focus:bg-[#175EB1] mt-7 rounded-xs text-white"></Button> -->
          <vue-recaptcha @verify="onCaptchaVerified" :sitekey="yourRecaptchaSiteKey"></vue-recaptcha>

          <input type="submit" value="Send"
            class="my-4 w-full max-w-[632px] min-h-[50px] font-xbold-custom bg-[#2A8CFB] hover:bg-[#1F73D3] focus:bg-[#175EB1] mt-7 rounded-xs text-white" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
import { ref, onMounted, watch } from "vue";
import { getAnalytics, logEvent } from 'firebase/analytics';
import emailjs from "@emailjs/browser";
import Button from "./Button.vue";
const props = defineProps(["selectOption", "selectedOption"]);
import { useAppStore } from "../store";
const store = useAppStore();
const message = ref("");
const selectedOption = ref("");
const router = useRouter();
const form = ref("form");
const analytics = getAnalytics();

const fileInputs = ref([null]);
const fileInputRefs = ref([null]);
const fileUpload = ref(null);
const full_name = ref("");
const street_address = ref("");
const flat_number = ref("");
const town = ref("");
const postcode = ref("");
const email = ref("");
const contact_number = ref("");
watch(() => {
  selectedOption.value = props.selectedOption;
  // console.log('Prop value changed:', props.selectedOption);
});

const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
const onBlurTriggered = ref(false);

const onBlurEvent = (e) => {
  if (!onBlurTriggered.value && message.value !== '') {
    logEvent(analytics, 'repair_maintainance_start', {
      custom_param: 'custom_value'
    });
    onBlurTriggered.value = true;
  }
};

async function sendEmail() {
  try {
    const API = useApi();
    store.loader = true;
    const attachments = [];
    // Prepare the data to be sent via Axios
    const formDataFile = new FormData();

    fileInputs.value.forEach((file, index) => {
      if (file) {
        formDataFile.append("form", 'repair-and-maintenance');
        formDataFile.append('attachment-' + index, file);
      }
    });

    // Make the Axios POST request
    await axios.post('https://prod-backend.stefphilips.com/api/upload-forms/s3', formDataFile, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(async response => {
        // Handle the response here if needed
        console.log(response);
        response.data.urls.forEach((url, index) => {
          if (url) {
            const parts = url.split("/");
            const lastPart = parts[parts.length - 1];
            const newAttachment = {
              url: url,
              filename: lastPart,
            };
            attachments.push(newAttachment);
          }
        });
        logEvent(analytics, 'repair_maintainance', {
          custom_param: 'custom_value'
        });

        var html =
          "<strong> Issue :</strong>" +
          selectedOption.value.attributes.title +
          "</br>" +
          "<strong> Description of the issue:</strong>" +
          message.value +
          "</br>" +
          "<strong>Your full name: </strong>" +
          full_name.value +
          " </br> " +
          "<strong>Street address:</strong> " +
          street_address.value +
          "</br>" +
          "<strong>Flat/unit number: </strong>" +
          flat_number.value +
          "  </br>" +
          "<strong>City :</strong> " +
          town.value +
          "  </br> " +
          "<strong>Postcode :</strong> " +
          postcode.value +
          "</br>" +
          "<strong>Email:</strong>" +
          email.value +
          "</br>" +
          "<strong>Phone number: </strong>" +
          contact_number.value +
          "";

        const formData = {
          data: {
            selectedOption: selectedOption.value.attributes.title,
            message: message.value,
            full_name: full_name.value,
            street_address: street_address.value,
            flat_number: flat_number.value,
            town: town.value,
            postcode: postcode.value,
            email: email.value,
            to: "maintenance@stefphilips.com",
            // to: "abdul@regroup-media.co.uk",
            subject: "Repairs & maintenance",
            contact_number: contact_number.value,
            attachments: attachments,
            html: html,
          },
        };
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
        // const apiEndpoint = "http://18.130.252.122/api/emails/send-email";
        const apiEndpoint = "https://prod-backend.stefphilips.com/api/emails/send-email";

        const responseData = axios.post(apiEndpoint, formData);
        store.loader = false;
        // console.log("Form submitted successfully!", responseData.data);
        const data = {
          data: {
            full_name: full_name.value,
            email: email.value,
            contact_number: contact_number.value,
            message: message.value,
            street_address: street_address.value,
            flat_number: flat_number.value,
            town: town.value,
            postcode: postcode.value,
            selectedOption: selectedOption.value.attributes.title,
            attachments: attachments,
          },
        };
        await API.post(`api/repair-and-maintenance-forms`, data);
        router.push({ path: "/submitted-issue" });

      })
      .catch(error => {
        store.loader = false;
        // Handle errors here
        console.error(error);
      });


    // You can add additional logic here based on the API response if needed
  } catch (error) {
    console.error("Error submitting form:", error);
    // Handle errors here
  }
}

import { VueRecaptcha } from 'vue-recaptcha';

const recaptcha = ref(false);
const recaptchaError = ref("");
const yourRecaptchaSiteKey = '6Ld9GSIpAAAAAH5xA5_5rL5WSD5JuWE1WObuX-n2';
const onCaptchaVerified = (response) => {
  // Handle reCAPTCHA verification success
  recaptchaError.value = ""
  recaptcha.value = true
};
const submitForm = () => {
  // Check if reCAPTCHA is verified before submitting the form
  if (recaptcha.value) {
    sendEmail()
    // Form submission logic
    console.log('Form submitted successfully!');
  } else {
    recaptchaError.value = "Please complete the reCAPTCHA verification."
    console.error('Please complete the reCAPTCHA verification.');
  }
};
// function sendEmail() {
//   emailjs.sendForm('service_6m9ng7m', 'template_fkg96gq', form.value, 'RtTLN46lgECBHDLtY')
//     .then((result) => {
//         console.log('SUCCESS!', result.text);
//     }, (error) => {
//         console.log('FAILED...', error.text);
//     });
// }

function addremoveFile(type, index) {
  if (type === "add") {
    fileInputRefs.value.push(null);
  }
  if (type === "minus") {
    fileInputRefs.value.splice(index, 1);
  }
}

// function onFileChange(e) {
//   if (e.target.files[0].size > 3000000) {
//     alert("File size exceed");
//   } else {
//     fileInputRefs.value.push(e);
//   }
// }

function onFileChange(index, e) {
  const MAX_TOTAL_SIZE = 20 * 1024 * 1024; // 20MB in bytes
  const file = e.target.files[0];
  // Calculate the total size of all selected files
  const totalSize = fileInputs.value.reduce((acc, currFile) => {
    return acc + (currFile ? currFile.size : 0);
  }, 0) + file.size;
  if (totalSize > MAX_TOTAL_SIZE) {
    alert("Total size of all files should not exceed 20MB");
    return false; // Stop further processing if total size exceeds 20MB
  } else {
    fileInputRefs.value.push(e);
    fileInputs.value[index] = file; // Update the fileInputs array with the selected file
  }
}

function deleteFile(index) {
  console.log(index);
  fileInputRefs.value.splice(index, 1);
  fileUpload.value[index].value = null;
}
</script>

<style>
.p-dropdown.p-component.p-inputwrapper.w-full {
  border-radius: 0px !important;
}

.p-dropdown {
  border: 0.16rem solid #20407c;
  border-radius: 0px !important;
  border-color: rgba(34, 66, 122, 0.8) !important;
  border-radius: 0px;
}

.p-dropdown .p-dropdown-trigger {
  background-color: #20407c;
  color: white;
  width: 50px;
  border-radius: 0px !important;
}

.p-dropdown .pi {
  display: inline-block;
  color: white;
  margin-left: 8px;
  font-weight: bold;
}

.p-dropdown .p-dropdown-label.p-placeholder {
  padding-top: 9px !important;
  color: #1d1d33 !important;
  border-color: #20407c;
  background: #e1efff;
  font-size: 18px;
  font-family: "Black", sans-serif;
  opacity: inherit;
}

.p-inputtext {
  border: 0.16rem solid #20407c;
  background: #e1efff;
}

.p-button.p-fileupload-choose .pi {
  display: none;
}

.text-custom-color {
  color: #1d1d33 !important;
}
</style>
