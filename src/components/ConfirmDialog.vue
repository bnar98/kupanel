<template>
    <transition name="modal">
        <div class="modal-mask" @click="close" v-show="show">
            <div class="dialog-container" @click.stop>
                <div class="body">
                    <slot></slot>
                </div>

                    <div class="w-full px-7">
                        <div class="flex flex-row dialog-footer">
                            <div class="w-full px-0">
                                <ku-Button v-if="buttons.custom" ui="btn btn-primary small float-left" :title="buttons.custom" @click.native="custom"></ku-Button>
                                <ku-Button v-if="buttons.confirm" ui="btn btn-default small float-left" :title="buttons.confirm" @click.native="confirm"></ku-Button>
                                <ku-Button v-if="buttons.cancel" ui="btn small float-left" :title="buttons.cancel" @click.native="cancel"></ku-Button>
                            </div>

                        </div>
                    </div>

            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['show', 'buttons'],
        methods: {
            close: function () {
                this.$emit('close');
            },
            confirm() {
                this.$emit('confirm');
            },

            cancel() {
                this.close();
            },

            custom() {
                this.$emit('customEvent');
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
</script>

<style lang="scss">
  .dialog-container {
    width: 550px;
    margin: 40px auto 0;
    border-radius: 4px 4px 0 0 !important;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  }

  .dialog-container .body {
    padding: 30px !important;
  }

  .dialog-footer {
    border-top: 1px solid var(--box-border-color);
    padding:20px 0;
  }
</style>
