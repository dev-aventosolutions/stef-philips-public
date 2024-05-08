// import { defineStore } from "@pinia/nuxt";
// import API from "../Service/API";
// import useToast from "../helper/useToast";
import useApi from "@/composables/useApi";
//
//
export const useAppStore = defineStore("store", {
  state: () => ({
    hover: false,
    aboutUs: false,
    loader: false,
    main_page: {},
    help_and_advices: {},
    national_helplines: {},
    housing_partners: {},
    temporary_accommodations: {},
    housing_partner_prs: {},
    hp_accommodation_types: {},
    where_we_operates: {},
    our_projects: {},
    projects: { cards: [], pagination: {} },
    project_detail: {},

    project_templates: {},
    investors: {},
    corporate_investors: {},
    investors_landlords: {},
    private_investors: {},
    careers: {},
    contacts: {},
    contact_faqs: {},
    press_medias: {},
    contact_community: {},
    c_housing_partners: {},
    contact_investors: {},
    contact_medias: {},
    contact_generals: {},
    c_letting_violations: {},
    form_submissions: {},
    about_us: {},
    about_us_communities: {},
    about_us_meet_teams: {},
    about_us_meet_news: {},
    featured_article: {},
    about_us_meet_news_details: {
      cards: [],
      pagination: {},
    },
    about_us_meet_new_articles: {},
    your_homes: {},
    repair_and_main: {},
    anti_social_behavior: {},
    other_issues: {},
    yr_temp_accommodation: {},
    yr_out_of_hour_emergency: {},
    tenant_services: {},
    yr_temp_accommodation: {},
    yr_prs: {},
    yr_meet_your_team: {},
    council_tax_and_utility: {},
    tenant_feedbacks: {},
    contact_tenants: {},
    equal_pay: {},
    privacy_policy: {},
    terms_use: {},
    modern_policy: {},
    equal_diversity: {},
    privacy_policies: {},
    cookies: {},
    keyStats: [
      {
        title: "Key Stat",
        desc: "x studio flats",
      },
      {
        title: "Key Stat",
        desc: "x one bedroom flats",
      },
      {
        title: "Key Stat",
        desc: "x two bedroom flats",
      },
      {
        title: "Key Stat",
        desc: "x studio flats",
      },
      {
        title: "Key Stat",
        desc: "x one bedroom flats",
      },
      {
        title: "Key Stat",
        desc: "x two bedroom flats",
      },
    ],
  }),

  actions: {
    async mainPage() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/mains?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.main_page = response.data.data[0].attributes;
    },
    async yourHomes() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/your-homes?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.your_homes = response.data.data[0].attributes;
    },
    async repairAndMain() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/your-home-r-and-ms?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.repair_and_main = response.data.data[0].attributes;
    },
    async antiSocialBehavior() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/your-home-asbs?populate=deep,2");
      this.loader = false;
      if (response.status == 200)
        this.anti_social_behavior = response.data.data[0].attributes;
    },
    async otherIssues() {
      const API = useApi();
      this.loader = true;
      const response = await API.get(
        "api/your-home-other-isses?populate=deep,2"
      );
      this.loader = false;
      if (response.status == 200)
        this.other_issues = response.data.data[0].attributes;
    },

    async yROutOfHourEmergency() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/your-home-oohes?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.yr_out_of_hour_emergency = response.data.data[0].attributes;
    },
    async tenantServices() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/your-home-t-servs?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.tenant_services = response.data.data[0].attributes;
    },
    async yRTempAccommodation() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/your-home-tem-accs?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.yr_temp_accommodation = response.data.data[0].attributes;
    },
    async yRPRS() {
      const API = useApi();
      this.loader = true;
      const response = await API.get(
        "api/yh-tenant-services-prs?populate=deep,3"
      );
      this.loader = false;
      if (response.status == 200)
        this.yr_prs = response.data.data[0].attributes;
    },
    async yRMeetYourTeam() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/your-home-myts?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.yr_meet_your_team = response.data.data[0].attributes;
    },
    async councilTaxAndUtility() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/your-home-ctus?populate=deep,2");
      this.loader = false;
      if (response.status == 200)
        this.council_tax_and_utility = response.data.data[0].attributes;
    },
    async helpAndAdvices() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/help-and-advices?populate=deep,4");
      this.loader = false;
      if (response.status == 200)
        this.help_and_advices = response.data.data[0].attributes;
    },
    async nationalHelplines() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/national-helplines?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.national_helplines = response.data.data[0].attributes;
    },
    async housingPartners() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/housing-partners?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.housing_partners = response.data.data[0].attributes;
    },
    async temporaryAccommodations() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/temporary-accoms?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.temporary_accommodations = response.data.data[0].attributes;
    },
    async housingPartnerPrs() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/housing-partner-prs?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.housing_partner_prs = response.data.data[0].attributes;
    },
    async hpAccommodationTypes() {
      const API = useApi();
      this.loader = true;
      const response = await API.get(
        "api/hp-accommodation-types?populate=deep,3"
      );
      this.loader = false;
      if (response.status == 200)
        this.hp_accommodation_types = response.data.data[0].attributes;
    },
    async whereWeOperates() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/whereweoperates?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.where_we_operates = response.data.data[0].attributes;
    },
    async ourProjects() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/ourprojects?populate=deep");

      this.loader = false;
      if (response.status == 200)
        this.our_projects = response.data.data[0].attributes;
    },
    async ourProjectProjects(pageNumber, itemsPerPage) {
      const API = useApi();
      this.loader = true;
      const response = await API.get(
        `api/our-project-listings?sort=createdAt&populate=deep&pagination[page]=${pageNumber}&pagination[pageSize]=${itemsPerPage}`
      );
      this.loader = false;
      this.projects.cards = response.data.data;
      this.projects.pagination = response.data.meta.pagination;
    },
    async ourProjectDetail(slug) {
      const API = useApi();
      this.loader = true;
      const response = await API.get(
        `api/our-project-listings/${slug}?populate=deep`
      );
      this.loader = false;
      if (response.status == 200)
        this.project_detail = response?.data?.data?.attributes;
    },

    async projectTemplates() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/project-templates?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.project_templates = response.data.data[0].attributes;
    },

    async getInvestors() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/investors?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.investors = response.data.data[0].attributes;
    },
    async corporateInvestors() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/corporate-investors?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.corporate_investors = response.data.data[0].attributes;
    },
    async privateInvestors() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/private-investers?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.private_investors = response.data.data[0].attributes;
    },
    async investorsLandlords() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/investors-landlords?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.investors_landlords = response.data.data[0].attributes;
    },

    async Careers() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/careers?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.careers = response.data.data[0].attributes;
    },
    async Contacts() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/contacts?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.contacts = response.data.data[0].attributes;
    },
    async contactFaqs() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/faqs?populate=deep");
      this.loader = false;
      if (response.status == 200)
        this.contact_faqs = response.data.data[0].attributes;
    },
    async pressMedias() {
      const API = useApi();
      this.loader = true;
      const response = await API.get(
        "api/contacts-press-medias?populate=deep,3"
      );
      this.loader = false;
      if (response.status == 200)
        this.press_medias = response.data.data[0].attributes;
    },
    async contactCommunity() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/contact-comunities?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.contact_community = response.data.data[0].attributes;
    },
    async cHousingPartners() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/c-housing-partners?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.c_housing_partners = response.data.data[0].attributes;
    },
    async contactInvestors() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/contact-investors?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.contact_investors = response.data.data[0].attributes;
    },
    async contactGenerals() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/contact-generals?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.contact_generals = response.data.data[0].attributes;
    },
    async cLettingViolations() {
      const API = useApi();
      this.loader = true;
      const response = await API.get(
        "api/c-letting-violations?populate=deep,3"
      );
      this.loader = false;
      if (response.status == 200)
        this.c_letting_violations = response.data.data[0].attributes;
    },
    async formSubmissions() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/form-submissions?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.form_submissions = response.data.data[0].attributes;
    },
    async aboutUs() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/about-us-opts?populate=deep");
      this.loader = false;
      if (response.status == 200)
        this.about_us = response.data.data[0].attributes;
    },
    async aboutUsCommunities() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/about-us-comunities?populate=deep");
      this.loader = false;
      if (response.status == 200)
        this.about_us_communities = response.data.data[0].attributes;
    },
    async aboutUsMeetTeams() {
      const API = useApi();
      this.loader = true;
      const response = await API.get(
        "api/about-us-meet-team-opts?populate=deep"
      );
      this.loader = false;
      if (response.status == 200)
        this.about_us_meet_teams = response.data.data[0].attributes;
    },
    async aboutUsMeetNews() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/about-us-news?populate=deep");
      if (response.status == 200) {
        this.about_us_meet_news = response.data.data[0].attributes;
        this.featured_article = response.data.data[0].featured_article;
      }
      this.loader = false;
    },
    async aboutUsMeetNewsDetail(pageNumber = 1, itemsPerPage = 4) {
      const API = useApi();
      const response = await API.get(
        // `api/about-us-new-articles?populate=deep&sort=id:DESC&pagination[page]=${pageNumber}&pagination[pageSize]=${itemsPerPage}`
        `api/about-us-new-articles?populate=deep&sort=id:DESC`
      );
      if (response.status == 200) {
        this.about_us_meet_news_details.cards.push(...response.data.data);
      }
    },
    async aboutUsMeetNewArticles(slug) {
      const API = useApi();
      this.loader = true;
      const response = await API.get(
        `api/about-us-new-articles?filters[slug][$eq]=${slug}&populate=deep`
      );
      if (response.status == 200)
        this.about_us_meet_new_articles = response?.data?.data[0];
      this.loader = false;
    },
    async contactMedias() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/contact-medias?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.contact_medias = response.data.data[0].attributes;
    },
    async Downloads() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/downloads?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.downloads = response.data.data[0].attributes;
    },
    async Glossaries() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/glossaries?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.glossaries = response.data.data[0].attributes;
    },
    async privacyPolicies() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/privacy-policies?populate=deep");
      this.loader = false;
      if (response.status == 200)
        this.privacyPolicies = response.data.data[0].attributes;
    },
    async tenantFeedbacks() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/yh-tenant-feedbacks");
      this.loader = false;
      if (response.status == 200)
        this.tenant_feedbacks = response.data.data[0].attributes;
    },
    async contactTenants() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/contact-tenants?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.contact_tenants = response.data.data[0].attributes;
    },
    async equalPay() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/equal-pays?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.equal_pay = response.data.data[0].attributes;
    },
    async privacyPolicy() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/equal-pays?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.privacy_policy = response.data.data[0].attributes;
    },
    async termsUse() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/term-of-uses?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.terms_use = response.data.data[0].attributes;
    },
    async modernPolicy() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/modern-slaveries?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.modern_policy = response.data.data[0].attributes;
    },
    async equalityDiversity() {
      const API = useApi();
      this.loader = true;
      const response = await API.get(
        "api/equality-diversities?populate=deep,3"
      );
      this.loader = false;
      if (response.status == 200)
        this.equal_diversity = response.data.data[0].attributes;
    },
    async privacyPolicies() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/privacy-policies?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.privacy_policies = response.data.data[0].attributes;
    },
    async Cookies() {
      const API = useApi();
      this.loader = true;
      const response = await API.get("api/cookies?populate=deep,3");
      this.loader = false;
      if (response.status == 200)
        this.cookies = response.data.data[0].attributes;
    },

    async updateState() {
      this.hover = !this.hover;
    },
    async updateAbout() {
      this.aboutUs = !this.aboutUs;
    },

    getKeyStats() {
      this.keyStats.pudh();
    },
  },
});
// index.js
