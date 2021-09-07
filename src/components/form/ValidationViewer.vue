<template>
    <div class="grid grid-cols-1 gap-4">
        <!--      // help text-->
        <small class="help" v-if="!currentFieldClient.$error && !backend.has(id) && helpText">{{helpText}}</small>

        <!--      // backend meta text-->
        <small class="help error" v-if="!$store.state.static.formLoading && backend.has(id)" v-text="backend.get(id)"></small>

        <!--      //required validation-->
        <small class="help error" v-if="currentFieldClient.hasOwnProperty('required') && !$store.state.static.formLoading && currentFieldClient.$error && !currentFieldClient.required"
               v-text="$t('validations.required')"></small>

        <!--      //array required validation-->
        <small class="help error" v-if="currentFieldClient.hasOwnProperty('required') && !$store.state.static.formLoading && currentFieldClient.$each && currentFieldClient.$each[index].$error"
               v-text="$t('validations.required')"></small>

        <!--      //required variant array validation-->
<!--        <small class="help error" v-if="currentFieldClient.hasOwnProperty('required') && !$store.state.static.formLoading && currentFieldClient.$each && currentFieldClient.$each.$error"-->
<!--               v-text="$t('validations.variant-required')"></small>-->

        <!--      //minLength validation text-->
        <small class="help error" v-if="currentFieldClient.hasOwnProperty('minLength') && !$store.state.static.formLoading && currentFieldClient.$error && !currentFieldClient.minLength"
               v-text="name +' ' + $t('validations.min-length') + currentFieldClient.$params.minLength.min + $t('validations.char-be')"></small>

        <!--      // maxLength validation tex-->
        <small class="help error" v-if="currentFieldClient.hasOwnProperty('maxLength') && !$store.state.static.formLoading && currentFieldClient.$error && !currentFieldClient.maxLength"
               v-text="name +' ' + $t('validations.max-length') + currentFieldClient.$params.maxLength.max + $t('validations.char-be')"></small>

        <!--      //SpecifiedLength validation tex-->
        <small class="help error" v-if="currentFieldClient.hasOwnProperty('SpecifiedLength') && !$store.state.static.formLoading && currentFieldClient.$error && !currentFieldClient.SpecifiedLength"
               v-text="name +' ' + $t('validations.Specified-length') + currentFieldClient.$params.SpecifiedLength.length + $t('validations.char-be')"></small>

        <!--      //numeric validation tex-->
        <small class="help error" v-if="currentFieldClient.hasOwnProperty('numeric') && !$store.state.static.formLoading && currentFieldClient.$error && !currentFieldClient.numeric"
               v-text="name +' ' + $t('validations.numeric')"></small>
        <!--      //email validation tex-->
        <small class="help error" v-if="currentFieldClient.hasOwnProperty('email') && !$store.state.static.formLoading && currentFieldClient.$error && !currentFieldClient.numeric"
               v-text="name +' ' + $t('validations.email')"></small>
      <!--      //maxValue validation text-->
      <small class="col-xs-12 help error" v-if="currentFieldClient.hasOwnProperty('maxValueDate') && !$store.state.static.formLoading && currentFieldClient.$error && !currentFieldClient.maxValue"
             v-text="name +' ' + $t('validations.max-value') + $t('validations.end-date') + $t('validations.be')"></small>
      <!--      //minValue validation text-->
      <small class="col-xs-12 help error" v-if="currentFieldClient.hasOwnProperty('minValueDate') && !$store.state.static.formLoading && currentFieldClient.$error && !currentFieldClient.minValue"
             v-text="name +' ' + $t('validations.min-value') + $t('validations.start-date') + $t('validations.be')"></small>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                client: {},
                backend: {},
                validationId: '',
                arrayId:[],
                currentFieldClient:''

            }
        },

        props: {

            clientValidations: {
                type: Object
            },

            backendValidations: {
                type: Object
            },

            name:{
                type: String
            },

            id: {
                type: String
            },

            helpText: {
                default: null,
                type: String,
                required: false
            },

            index:{
              type: Number,
              required: false
            }

        },

        created() {
            this.validationId = this.id;
            this.client = this.clientValidations;
            this.backend = this.backendValidations;
            this.arrayId = this.validationId.split('.');
            this.setCurrentFieldClient();
        },

        watch: {
            clientValidations(value){
                this.client = value;
                this.setCurrentFieldClient();
            },
            backendValidations(value){
                this.backend = value;
            },

            id(value) {
                this.validationId = value;
                this.arrayId = this.validationId.split('.');
                this.setCurrentFieldClient();
            }
        },

        methods: {

            setCurrentFieldClient() {
                if(this.id && this.clientValidations) {
                    if(this.arrayId.length > 1) {
                        this.currentFieldClient = this.client[this.arrayId[0]][this.arrayId[1]]
                    } else {
                        this.currentFieldClient = this.client[this.validationId]
                    }
                }
            }

        }
    }
</script>
