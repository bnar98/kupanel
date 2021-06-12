<template>
    <div class="steps col-span-1">
        <div class="steps-box grid grid-cols-12">
            <span v-if="activeStep" class="section-inside-title m-0 col-span-12 lg:col-span-4">{{activeStep.componentInstance.name}}</span>
            
            <div :class="['steps-list', 'col-span-12', 'lg:col-span-8', 'grid', colsNumberClass]">
                <div class="step col-xs px-0" v-for="(step, index) in steps" :key="index" v-if="step.componentInstance" :class="{'is-active': step.componentInstance.isActive && !step.componentInstance.isValidation, 'is-validate': step.componentInstance.isValidation }">
                    <div class="step-ui">
                        <div class="step-line" v-if="index !== 0"></div>
                        <div class="step-number" @click="selectStep(index+1)">
                            {{index+1}}
                            <ion-icon class="icon" name="checkmark-outline" v-if="step.componentInstance.isValidation"></ion-icon>
                        </div>
                        <div class="step-line" v-if="index !== steps.length - 1"></div>
                    </div>
                    <span class="step-title" @click="selectStep(index+1)">{{step.componentInstance.name}}</span>
                </div>
            </div>

        </div>
        <!-- <div class="tab-details col-xs-12 px-0"> -->
            <slot></slot>
        </div>
    </div>

</template>

<script>
import { EventBus } from '../../event'
    export default {

        data(){

            return {
                steps: [],
                activeStep: null
            }

        },
        computed:{
            colsNumberClass(){
                return 'grid-cols-' + this.steps.length;
            }
        },

        created() {
            window.events.$on(
                'updateStep', (step) => this.selectStep(step)
            );
        },
        mounted() {
            if (this.$slots.default){
                this.steps = this.$slots.default.filter((step) => {
                    if (step.tag){
                        const tag = step.tag.substr(step.tag.length - 4);
                        if (tag === 'step' || tag === 'Step') {
                            if (step.componentInstance && step.componentInstance.isActive) {
                                this.activeStep = step;
                            }
                            return true
                        }
                    
                    }
                })
            }
        },

        // mounted() {
        //     this.activeStep = this.steps.filter(x => x.isActive === true)[0];
        // },

        methods:{

            selectStep(selectedStepIndex) {
                console.log("aaaaaa",this.steps);
                this.steps.forEach((step,index) => {
                  if (index < selectedStepIndex -1) {
                    step.componentInstance.isValidation = true;
                  }
                  else {
                    step.componentInstance.isValidation = false;
                  }
                  step.componentInstance.isActive = (step.componentInstance.name === this.steps[selectedStepIndex-1].componentInstance.name);

                  if (step.componentInstance.name === this.steps[selectedStepIndex-1].componentInstance.name) {
                      this.activeStep = step;
                  }

                })

            }
        },

        props: {
            stepsClass: {
                default: '',
                type: String
            }

        }
    }
</script>

<style lang="scss">
  // steps
  .steps-box{
    //   display: flex;
      border-bottom: 1px solid var(--gray-300-color);
      margin-bottom: 30px;
    //   justify-content: flex-start;

      .section-inside-title{
          font-size: 1.5rem;
          color: var(--gray-900-color);
          width: 190px;
          margin-top: 8px;
      }

      .steps-list{
        //   display: flex;
        //   width: 100%;

          .step{
              display: flex;
              justify-content: center;
              flex-direction: column;
              margin: 0 1px;
              text-align: center;
              cursor: pointer;

              &.is-active{

                  .step-number{
                      border: 1px solid var(--primary-color) !important;
                      color: var(--primary-color) !important;
                      background-color: transparent !important;
                  }

              }

              &.is-validate{

                  .step-number{
                      border: 1px solid var(--green-color) !important;
                      background-color: transparent !important;

                      .icon{
                          color: var(--green-color);
                          font-size: 1.2rem;
                      }

                  }

              }

              &.is-active, &.is-validate{

                  .step-number, .step-title{
                      pointer-events: unset !important;
                  }

              }

              .step-ui{
                  display: flex;
                  align-items: center;

                  .step-number{
                      width: 30px;
                      height: 30px;
                      border-radius: 9999px;
                      background-color: var(--gray-500-color);
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      color: var(--white-color);
                      border: 1px solid var(--gray-500-color);
                      pointer-events: none;
                  }

                  .step-line{
                      border-top: 1px dotted var(--gray-500-color);
                      flex-grow: 1;
                  }

              }

              .step-title{
                  padding: 10px 15px;
                  pointer-events: none;
                  
              }

              &:first-child, &:last-child{

                  .step-title{
                      padding: 10px 0 !important;
                  }

              }

          }

      }

  }

  // rtl

  .localization-rtl{

      .steps-box{

          .steps-list{

              .step{

                  &.is-validate{

                      .step-number{

                          .icon{
                              margin-right: -9px;
                          }

                      }

                  }

                  &:first-child{
                      text-align: right;
                  }

                  &:last-child{
                      text-align: left;
                  }

              }

          }

      }

  }

  // ltr

  .localization-ltr{

      .steps-box{

          .steps-list{

              .step{

                  &.is-validate{

                      .step-number{

                          .icon{
                              margin-left: -9px;
                          }

                      }

                  }

                  &:first-child{
                      text-align: left;
                  }

                  &:last-child{
                      text-align: right;
                  }

              }

          }

      }

  }





</style>