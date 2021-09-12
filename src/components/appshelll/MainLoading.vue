<template>
    <div class="loading-global flex justify-center items-center" v-if="!isLoaded">
        <div class="loading-full flex justify-center">
            <div class="logo flex justify-center items-center" :class="{'animated': animated}">
                <transition name="ku-fade">
                    <div class="img" v-show="showLogo"></div>
                </transition>
            </div>
            <p class="intro-version">{{title}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                animated: false,
                showLogo: false,
                loading: false
            }
        },

        props: {
          title:{
            type:String,
            default: ''
          },
          isLoaded: {
            type: Boolean,
            default: false
          }
        },

      created() {
          this.loading = this.isLoaded
      },

      watch: {
        isLoaded(newValue) {
          this.loading = newValue
        }
      },

      mounted() {
            setTimeout(() => {
                this.showLogo = true;
                setTimeout(() => {
                    this.animated = true;
                }, 100)
            }, 300);
        }
    }
</script>

<style>
    .loading-global {
        @apply box-border bg-overlay-background-color z-50 w-full h-full fixed top-0 right-0;
    }

    .loading-global .logo {
        @apply mb-14;
        width: 250px;
        height: 250px;
    }

    .animated {
        animation: shadow 5s;
    }

    @keyframes shadow {
        0% {
          @aooly rounded-none bg-transparent shadow-none;
        }

        100% {
          @apply bg-overlay-background-color;
            border-radius: 52px;
            box-shadow:  5px 5px 28px #cacacf,
            -5px -5px 28px #ffffff;
        }
    }

    .loading-global .logo .img {
        background: url(../../assets/images/logo.svg);
        @apply bg-cover bg-center bg-no-repeat;
        height: 85px;
        width: 98px;
    }

    .intro-title {
      @apply text-description-color -mt-6;
    }

    .intro-version {
      @apply absolute bottom-4 text-gray-600 font-bold;
        word-spacing: 6px;
    }
</style>
