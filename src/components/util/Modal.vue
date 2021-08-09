<template>
	<transition name="modal">
		<div class="modal-mask" @click="close" v-show="show">
			<div :class="['modal-container', size]" @click.stop>
				<div class="modal-header">
					<span class="title">{{ title }}</span>
					<span class="ion-close-circled" @click="close"><ion-icon name="close-outline"></ion-icon></span>
				</div>
				<div class="body">
					<slot></slot>
				</div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
			</div>
		</div>
	</transition>
</template>

<script lang="js">

  export default {
    props: {

      show:{
        default:false
      },
      title: {
        default: ''
      },
      size: {
        default: 'default',
        type: String,
        validator: function (value) {
          // The value must match one of these strings
          return ['default', 'small', 'large', 'tiny'].indexOf(value) !== -1
        },
        required: false
      }

    },
    methods: {
      close: function () {
        this.$emit('close');
      }
    },
    mounted: function () {
      document.addEventListener("keydown", (e) => {
        if (this.show && e.keyCode == 27) {
          this.close();
        }
      });
    }
  }

  // import { Component, Prop, Vue } from 'vue-property-decorator'
  //
  // @Component
  // export default class Modal extends Vue {
  //   hasScrolledToBottom: Boolean = false
  //
  //   @Prop({required: true, type: Boolean, default: false})  show!: boolean;
  //   @Prop({required: true, type: String, default: ''})  title!: string;
  //   @Prop({required: false, type: String, default: 'default',
  //     validator: function (value) {
  //       // The value must match one of these strings
  //       return ['default', 'small', 'large', 'tiny'].indexOf(value) !== -1
  //     },})
  //    size!: string;
  //
  //   public close(): void {
  //     this.$emit('close');
  //   }
  //
  //   public handleScroll(el: any): void {
  //     if((el.srcElement.offsetHeight + el.srcElement.scrollTop) >= el.srcElement.scrollHeight) {
  //       this.hasScrolledToBottom = true;
  //       this.$emit('scrolled');
  //     }
  //   }
  //
  //   public mounted(): void {
  //     document.addEventListener("keydown", (e) => {
  //       if (this.show && e.keyCode === 27) {
  //         this.close();
  //       }
  //     });
  //   }
  //
  // }

</script>
<style lang="scss">
  // modal

  .modal-mask {
    @apply fixed top-0 left-0 w-full h-full transition-opacity duration-300 ease-in z-50;
    background-color: rgba(0, 0, 0, .5);
  }

  .modal-container {
    @apply mt-10 m-auto mb-0 rounded-t bg-white transition-all duration-300 ease-in shadow;

    &.default {
      @apply w-3/4;
    }

    &.small{
      @apply w-2/5;
      min-width: 500px;
    }

    &.tiny{
      @apply w-1/4;
      min-width: 400px;
    }

    &.large{
      @qapply w-11/12;
    }

    .body{
      @apply p-2.5 overflow-auto;
      max-height: 77vh;

    }

  }


  .modal-header {
    @apply text-right text-sm py-3.5 px-5 rounded-t flex items-center justify-between bg-gray-700;

  }

  .modal-header .title {
    @apply text-white;
  }

  .modal-header .ion-close-circled {
    @apply flex items-center;

    ion-icon{
      @apply text-white text-icon-large cursor-pointer;
    }

  }

  .modal-body {
    @apply my-5 mx-0;
  }

  .modal-enter {
    @apply opacity-0;
  }

  .modal-leave-active {
    @apply opacity-0;
  }

  .modal-enter .modal-container,

  .modal-leave-active .modal-container {
    @apply transform scale-110;
  }
</style>
