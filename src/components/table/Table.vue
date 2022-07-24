<template>
  <div class="simple-table">
    <table class="min-w-full pb-24">
      <thead>
        <tr class="font-medium">
          <th class="w-px" v-if="collapsible"></th>
          <th
            v-for="(header, index) in headers"
            :key="index"
            @click="header.actionfield ? changeOrder(header.actionfield) : ''"
          >
            <div class="flex justify-between">
              <span>{{ header.header ? header.header : header }}</span>
              <span class="mt-1" v-if="orderIcon !== ''">
                <ion-icon
                  v-if="header.actionfield !== ''"
                  :color="
                    header.actionfield == orderedField ? 'light' : 'medium'
                  "
                  class="icon"
                  :name="orderIcon"
                ></ion-icon>
              </span>
            </div>
          </th>
          <th class="w-px" v-if="hasActions">
            <span>{{ $t("components.actions") }}</span>
          </th>
        </tr>
      </thead>
      <slot></slot>
    </table>
  </div>
</template>

<script lang="js">

export default {

  props:{

    collapsible: {
      type: Boolean,
      default: false,
      require: false
    },

    headers: {
      type:Array,
      default: function () {
        return []
      },
      required: false
    },
    
    orderIcon:{
     type:String,
     default:''
    },
    hasActions:{
      type: Boolean,
      default: false,
      require: false
    },
    orderedField:{
      type:String,
      default:''
    }

  },
  methods:{
  changeOrder(actionfield){
     this.$emit("changeOrder",actionfield);
  }
  },
}
</script>

<style lang="scss">
.simple-table {
  @apply min-w-full w-full max-w-full overflow-x-auto overflow-y-hidden;

  table {
    border-spacing: 2px;
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;

    td,
    th {
      @apply p-4;
    }
    thead {
      tr {
        th {
          @apply bg-table-header-background-color text-gray-800 whitespace-nowrap cursor-pointer;

          span {
            @apply flex items-center font-semibold;
          }
        }
      }
    }
    tbody {
      &:nth-child(odd) {
        td {
          @apply bg-table-odd-background-color;
        }
      }
      &:nth-child(even) {
        td {
          @apply bg-table-even-background-color;
        }
      }
      tr {
        td {
          @apply text-base text-gray-800 whitespace-nowrap transition duration-200 ease-in;

          &.collapse-icon {
            &:before {
              @apply cursor-pointer;
              content: "\25BE";
            }
          }
          &.collapsed {
            &:before {
              @apply text-xl;
              content: "\25B4";
            }
          }
          &.dropdown {
            @apply relative text-center;

            .dropdown-btn {
              @apply relative cursor-pointer outline-none bg-transparent border-none;
            }
            ul {
              @apply bg-selectbox-background-color z-10 rounded-lg absolute invisible p-0;
              top: calc(50% + 2px);
              min-width: 120px;
              border: 2px solid var(--default-border-color);
              border-top: 3px solid var(--primary-color);
              max-height: 95px;
              overflow: auto;
              li {
                @apply cursor-pointer p-2.5 flex items-center;

                span {
                  @apply pl-5 text-gray-600;
                }
                .icon {
                  @apply text-gray-600 pl-2.5 text-icon-small;
                }

                &:hover {
                  @apply bg-gray-200;
                }

                &:first-child {
                  @apply rounded-tl-lg rounded-tr-lg;
                }

                &:last-child {
                  @apply rounded-bl-lg rounded-br-lg;
                }
              }
              &.show {
                @apply visible;
              }
            }
          }
        }
        &.collapse-content {
          @apply bg-gray-300;

          td {
            @apply p-0;
            .collapse-content-box {
              @apply p-0;
            }
          }
          &.show {
            td {
              .collapse-content-box {
                @apply visible opacity-100;
                max-height: 500px;
                transition: max-height 0.6s, opacity 0.7s ease-in-out;
              }
            }
          }

          &:not(.show) {
            td {
              .collapse-content-box {
                @apply opacity-0 overflow-hidden max-h-0 invisible;
                transition: max-height 0.2s cubic-bezier(0, 1, 0, 1);
              }
            }
          }
        }
        &.real-row {
          &:hover {
            td {
              @apply bg-table-row-hover-background-color;
            }
          }
        }
      }
    }
  }
}
.localization-rtl {
  table {
    direction: rtl;
    th,
    td {
      @apply text-right;
    }

    thead {
      tr {
        th {
          &:first-child {
            @apply rounded-tr-lg rounded-br-lg;
          }

          &:last-child {
            @apply rounded-tl-lg rounded-bl-lg;
          }
        }
      }
    }

    tbody {
      tr {
        td {
          &:first-child {
            @apply border-r-4 border-solid border-transparent;
          }
        }

        &.real-row {
          &:hover {
            td:first-child {
              @apply border-r-4 border-solid border-primary;
            }
          }
        }
      }
    }
  }
  .dropdown {
    ul {
      left: calc(100% - 36px);
    }
  }
}
.localization-ltr {
  table {
    direction: ltr;
    th,
    td {
      @apply text-left;
    }

    thead {
      tr {
        th {
          &:last-child {
            @apply rounded-tr-lg rounded-br-lg;
          }

          &:first-child {
            @apply rounded-tl-lg rounded-bl-lg;
          }
        }
      }
    }

    tbody {
      tr {
        td {
          &:first-child {
            @apply border-l-4 border-solid border-transparent;
          }
        }

        &.real-row {
          &:hover {
            td:first-child {
              @apply border-l-4 border-solid border-primary;
            }
          }
        }
      }
    }
  }
  .dropdown {
    ul {
      right: calc(100% - 16px);
    }
  }
}
</style>
