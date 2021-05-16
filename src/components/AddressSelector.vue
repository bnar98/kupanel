<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-if="countries.length >0">
      <ku-SelectBox
              :options="countries"
              property="title"
              :placeholder="$t('country')"
              v-model="addressForm.country_id"
              @change="updateRegions($event)"
      ></ku-SelectBox>
<!--      <ku-ValidationViewer :clientValidations="client" :backendValidations="backend" id="address.country_id" :name="$t('country')"> </ku-ValidationViewer>-->
    </div>
    <div  v-if="regions.length >0">
      <ku-SelectBox
              :options="regions"
              property="title"
              :placeholder="$t('region')"
              v-model="addressForm.region_id"
              @change="updateCities($event)"
      ></ku-SelectBox>
<!--      <ku-ValidationViewer :clientValidations="client" :backendValidations="backend" id="address.region_id" :name="$t('region')"> </ku-ValidationViewer>-->
    </div>
    <div  v-if="cities.length >0">
      <ku-SelectBox
              :options="cities"
              property="title"
              :placeholder="$t('city')"
              v-model="addressForm.city_id"
              @change="emitForm($event)"
      ></ku-SelectBox>
<!--      <ku-ValidationViewer :clientValidations="client" :backendValidations="backend" id="address.city_id" :name="$t('city')"> </ku-ValidationViewer>-->
    </div>
  </div>
</template>

<script>
  // import ValidationViewer from "@/components/ValidationViewer";
  // import SelectBox from "@/components/SelectBox";

  export default {

    data() {
      return {
        addressForm: {
          country_id: '',
          region_id: '',
          city_id: ''
        },
        availableAreas: {},
        countries: [],
        regions: [],
        cities: [],
        client: {},
        backend: {},
        watchCounter: 0
      }
    },

    props: {
      country: {
        type: Number,
        default: null
      },
      region: {
        type: Number,
        default: null
      },
      city: {
        type: Number,
        default: null
      },
      clientValidations: {
        type: Object
      },

      backendValidations: {
        type: Object
      },
    },

    // components: {ValidationViewer, SelectBox},

    created() {
      this.addressForm.country_id = this.country;
      this.addressForm.region_id = this.region;
      this.addressForm.city_id = this.city;
      this.client = this.clientValidations;
      this.backend = this.backendValidations;
      this.setAddress();
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'static/updateAreas') {
          this.setAddress();
        }
      })
    },

    watch: {
      country(value){
        this.addressForm.country_id = value;
      },
      region(value) {
        this.addressForm.region_id = value;
      },
      city(value) {
        this.addressForm.city_id = value;
        this.watchCounter ++;
        if (this.watchCounter === 1) {
          this.setAddress();
        }
      },
      clientValidations(value){
        this.client = value;
      },
      backendValidations(value){
        this.backend = value;
      }
    },

    methods: {
      updateRegions(e) {
        return new Promise((resolve) => {
          this.regions = this.availableAreas.regions.filter(region => region.country_id === e);
          resolve();
        }).then(() => {
          this.cities = this.availableAreas.cities.filter(city => city.country_id === e);
          this.addressForm.region_id = null;
          this.addressForm.city_id = null;
          this.$emit('update', this.addressForm);
        })


      },
      updateCities(e) {
        this.cities = this.availableAreas.cities.filter(city => city.region_id === e);
        this.addressForm.city_id = null;
        this.$emit('update', this.addressForm);
      },
      emitForm() {
        this.$emit('update', this.addressForm);
      },

      setAddress() {
        this.availableAreas = this.$store.state.static.availableAreas;
        this.countries = this.$store.state.static.availableAreas.countries;
        if (this.country && this.region && this.city) {
          this.watchCounter ++;
          this.regions = this.availableAreas.regions.filter(region => region.country_id === this.country);
          this.cities = this.availableAreas.cities.filter(city => city.region_id === this.region);
        } else {
          this.regions = this.$store.state.static.availableAreas.regions;
          this.cities = this.$store.state.static.availableAreas.cities;
        }

      }
    }

  }

</script>
