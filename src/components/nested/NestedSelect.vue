<template>
  <div class="w-full">
    <div class="form-group">
      <label class="label">{{ label }}</label>
      <input
        type="text"
        :name="name"
        class="form-control"
        :id="name"
        :placeholder="placeHolder"
        autocomplete="off"
        @focus="showModal"
        v-if="!disabled || !multi"
        v-model="singleSelectedValue"
        :disabled="!multi && disabled"
      />
    </div>
    <div class="flex flex-row tags-input" v-if="multi">
      <div class="tag-list w-full">
        <ul v-if="dataArray.length > 0">
          <li v-for="(item, index) in selectedItemTags" :key="index">
            <span :class="['tag-content', { disabled: disabled }]">
              <span class="tag-title">{{ getTitle(item) }}</span>
              <span
                class="tag-remove-btn"
                v-if="!disabled"
                @click="removeItem(item)"
              >
                <ion-icon class="icon" name="close-outline"></ion-icon>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <transition name="modal">
      <div class="modal-mask" @click="close" v-show="show">
        <div class="select-modal-container" @click.stop>
          <div class="select-modal-header">
            <span class="title">{{ title }}</span>
            <span class="ion-close-circled" @click="close"
            ><ion-icon name="close-outline"></ion-icon
            ></span>
          </div>
          <div class="select-modal-body">
            <div class="flex flex-row items-center mx-0 step-items" v-if="steps.length > 0">
              <div
                class="flex items-center step-item"
                v-for="(step, index) in steps"
                :key="index"
              >
                <ion-icon
                  class="icon"
                  :name="step.icon"
                  v-if="index === 0 && type === 'category'"
                ></ion-icon>
                <span v-if="index === 0" @click="backStep(-1)"
                >دسته بندی اصلی</span
                >
                <span class="separator" v-if="index === 0">/</span>
                <span
                  :class="{ 'primary-txt': index == steps.length - 1 }"
                  @click="backStep(step.id)"
                >{{ step.label }}</span
                >
                <span class="separator" v-if="index !== steps.length - 1"
                >/</span
                >
              </div>
            </div>
            <ul class="items flex flex-col" v-if="selectedTemp.length > 0">
              <div
                class="w-full px-0"
                v-for="(item, index) in selectableDataArray"
                :key="index"
              >
                <nested-item
                  @select="selectItem"
                  :type="type"
                  :item="item"
                  @getChild="getChild"
                  v-model="selectedTemp[getPosition(item.id)].value"
                  :multi="multi"
                ></nested-item>
              </div>
            </ul>
            <div class="flex flex-row" v-if="multi">
              <div class="w-full px-7 py-4">
                <ku-Button
                  ui="btn btn-primary small float-left"
                  :title="$t('account.save')"
                  @click.native="confirm"
                ></ku-Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import NestedItem from "./NestedItem";

  export default {
    data() {
      return {
        show: false,
        dataArray: [],
        selectableDataArray: [], // you can just select last level
        steps: [],
        reverseStep: [],
        selectedItems: [], // for form
        selectedItemTags: [], // for show tags
        selectedTemp: [], // for v-bind NestedItem
        isFirstWatch: true,
        singleSelectedValue: "",
      };
    },

    props: {
      value: {},
      title: {},
      name: {},
      placeHolder: {},
      data: {},
      label: {},
      type: {
        default: "category",
      },
      disabled: {
        default: false,
      },
      multi: {
        default: true,
        type: Boolean,
      },
    },

    methods: {
      getList() {
        this.dataArray = this.data;
        if (this.selectedTemp.length === 0) {
          this.selectedTemp = this.data.map((item) => {
            return {
              id: item.id,
              value: false,
            };
          });
        }

        this.selectableDataArray = this.dataArray.filter(
          (item) => item.parent_id === null
        );
      },

      close() {
        this.steps = [];
        this.reverseStep = [];
        this.show = false;
        this.selectedItems = JSON.parse(JSON.stringify(this.selectedItemTags));
        this.selectedTemp = this.selectedTemp.map((item) => {
          return {
            id: item.id,
            value: this.selectedItemTags.find((x) => x === item.id)
              ? true
              : false,
          };
        });
      },

      confirm() {
        return new Promise((resolve) => {
          if (this.multi) {
            this.$emit("input", this.selectedItems);
          } else {
            this.$emit("input", this.selectedItems[0]);
          }

          resolve();
        }).then(() => {
          this.steps = [];
          this.reverseStep = [];
          this.show = false;
          this.selectedItemTags = JSON.parse(JSON.stringify(this.selectedItems));
        });
      },

      showModal() {
        this.selectableDataArray = this.dataArray.filter(
          (item) => item.parent_id === null
        );
        this.show = true;
      },

      getChild(newiItem) {
        const selectedItemID = newiItem.id;
        if (newiItem.has_child) {
          this.selectableDataArray = this.dataArray.filter(
            (item) => item.parent_id === selectedItemID
          );
          if (
            this.steps.filter((step) => step.id === selectedItemID).length === 0
          ) {
            this.steps.push(newiItem);
          }
        }
      },

      backStep(id) {
        if (id === -1) {
          this.selectableDataArray = this.dataArray.filter(
            (item) => item.parent_id === null
          );
          this.steps = [];
        } else {
          const stepIndex = this.steps.findIndex({ id: id });
          this.steps.splice(stepIndex + 1);
          this.getChild(this.steps.filter({ id: id })[0]);
        }
      },

      selectItem(id, status) {
        if (status && this.multi) {
          if (!this.selectedItems.find((x) => x === id)) {
            this.selectedItems.push(id);
          }
          this.selectedTemp.find((x) => x.id === id).value = true;
        } else if (this.multi) {
          this.selectedItems = this.selectedItems.filter((item) => item !== id);
          this.selectedTemp.find((x) => x.id === id).value = false;
        } else if (!this.multi) {
          this.selectedItems = [id];
          this.singleSelectedValue = this.getTitle(this.selectedItems);
          this.selectedTemp.find((x) => x.id === id).value = true;
          this.confirm();
        }
      },

      getPosition(id) {
        return this.selectedTemp.findIndex((x) => x.id === id);
      },

      getTitle(id) {
        // momkene child va parent yek id dashte bashan ma bayad child ro begirim
        const itemsWithThisID = this.dataArray.filter(
          (x) => x.id.toString() === id.toString()
        );
        if (itemsWithThisID.length > 0) {
          return itemsWithThisID.filter((x) => x.has_child === false)[0].label;
        }
        return '';

      },

      removeItem(id) {
        this.selectedItems = this.selectedItems.filter((item) => item !== id);
        this.selectedItemTags = JSON.parse(JSON.stringify(this.selectedItems));
        this.selectedTemp.find((x) => x.id === id).value = false;
        this.$emit("input", this.selectedItems);
      },

      checkFirstSet() {
        if (this.isFirstWatch) {
          this.isFirstWatch = false;
          this.selectedItemTags = JSON.parse(JSON.stringify(this.value));
          if (this.data) {
            this.selectedTemp = this.data.map((item) => {
              return {
                id: item.id,
                value: this.selectedItems.find((x) => x === item.id)
                  ? true
                  : false
              };
            });
          }
        }
      },
    },

    created() {
      if (this.data.length > 0) {
        this.getList();
      }

      if (this.multi && this.value.length > 0) {
        this.selectedItems = this.value;
        this.checkFirstSet();
      } else if (!this.multi && this.value) {
        this.selectedItems = [];
        this.selectedItems.push(this.value);
        this.singleSelectedValue = this.getTitle(this.selectedItems);
      }
    },
    watch: {
      value(newValue) {
        if (this.multi && newValue) {
          this.selectedItems = newValue;
        } else if (newValue) {
          this.selectedItems = [];
          this.selectedItems.push(newValue);
          this.singleSelectedValue = this.getTitle(newValue);
        }

        this.checkFirstSet();
      },
      data() {
        if (this.data.length > 0) {
          this.getList();
        }
      },
    },

    computed: {},

    components: { NestedItem },
  };
</script>

<style lang="scss">
  .select-modal-container {
    @apply mt-10 mb-0 mx-auto rounded bg-white shadow;
    width: 550px;
    transition: all 0.3s ease;

    .select-modal-header {
      @apply text-sm  bg-white py-3.5 px-5 flex items-center justify-between border-b border-solid border-border-color;
    }

    .select-modal-header .title {
      @apply text-gray-800;
    }

    .select-modal-header .ion-close-circled {
      @apply flex items-center;

      ion-icon {
        @apply text-gray-600 text-icon-default cursor-pointer;
      }
    }

    .select-modal-body {
      @apply my-5 mx-0;
      min-height: 300px;

      .items {
        @apply pt-0 pb-7 px-7;

        .item {
          @apply list-none border-b border-solid border-border-color py-4 px-0 flex justify-between items-center cursor-pointer;

          &:last-child {
            @apply border-0;
          }

          .item-name {
            @apply flex items-center;
          }
        }
      }

      .step-items {
        @apply pt-0 pb-4 px-4 border-b border-solid border-border-color;

        .step-item {
          .separator {
            @apply py-0 px-1.5;
          }

          span:not(.primary-txt) {
            @apply text-gray-600 cursor-pointer;
          }
        }
      }
    }
  }

  .localization-rtl {
    .select-modal-container {
      .select-modal-header {
        @apply text-right rounded-tl rounded-tr rounded-br-none rounded-bl-none;
      }

      .select-modal-body {
        .items {
          .item {
            .item-name {
              .icon {
                @apply ml-4;
              }
            }
          }
        }

        .step-items {
          .step-item {
            .icon {
              @apply ml-2.5;
            }
          }
        }
      }
    }
  }

  .localization-ltr {
    .select-modal-container {
      .select-modal-header {
        @apply text-left  rounded-tl rounded-tr-none rounded-br rounded-bl-none;
      }

      .select-modal-body {
        .items {
          .item {
            .item-name {
              .icon {
                @apply mr-4;
              }
            }
          }
        }

        .step-items {
          .step-item {
            .icon {
              @apply mr-2.5;
            }
          }
        }
      }
    }
  }
</style>
