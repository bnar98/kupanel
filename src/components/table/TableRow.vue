<template>
  <tbody>
    <tr :class="['real-row']">
      <td
        v-if="$slots.rowDetail"
        :class="['collapse-icon', { collapsed: showDetail }]"
        @click="toggleContent()"
      >
        <i></i>
      </td>
      <slot name="rowColumns"></slot>
      <td v-if="actions.length !== 0" class="dropdown">
        <button
          class="dropdown-btn"
          @focusout="closeDropdown"
          @click="dropDown()"
        >
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </button>
        <ul
          :class="[{ show: activeDropDown }]"
          @mouseout="actionsMouseIn = false"
          @mouseover="actionsMouseIn = true"
        >
          <li
            v-for="(action, index2) in actions"
            :key="index2"
            @click="selectAction(action.name, row)"
            v-can="[action.permission ? action.permission: '']"
          >
            <ion-icon class="icon" :name="action.icon"></ion-icon>
            <span>{{ action.label }}</span>
          </li>
        </ul>
      </td>
    </tr>
    <tr
      v-if="$slots.rowDetail"
      :class="['collapse-content', { show: showDetail }]"
    >
      <td colspan="100%">
        <div class="collapse-content-box">
          <slot name="rowDetail"></slot>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script lang="js">

  export default {

    data(){

      return {
        showDetail: false,
        activeDropDown: false,
        actionsMouseIn:false
      }

    },

    props:{
      row: {
        type: Object,
        default: function () {
          return {}
        },
        required: true
      },
      actions:{
        type:Array,
        default: function () {
          return []
        },
        required: false
      }


    },

    methods: {
      //This function is for opening and closing boxes under each row
      toggleContent: function () {
        this.showDetail = !this.showDetail;
      },
      //This function is for opening and closing action boxes
      dropDown: function () {
        this.activeDropDown = ! this.activeDropDown;
      },
      //This method is for closing action boxes, When one of the actions is selected
      selectAction: function(actionName, row) {
        this.activeDropDown = false;
        this.$emit('bus', actionName ,row)
      },
      closeDropdown: function() {
        if (!this.actionsMouseIn){
          this.activeDropDown = '';
        }

      }
    }

  }
  // import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
  //
  // @Component
  // export default class TableRow extends Vue {
  //   private showDetail: Boolean = false
  //   private activeDropDown: Boolean = false
  //   private actionsMouseIn: Boolean = false
  //
  //   @Prop({required: true, type: Object, default: function () {
  //     return {}
  //     }}) row!: object;
  //   @Prop({required: false, type: Array, default: function () {
  //       return []
  //     }}) actions!: any;
  //
  //     // This function is for opening and closing boxes under each row
  //     public toggleContent () :void {
  //       this.showDetail = !this.showDetail
  //     }
  //     //This function is for opening and closing action boxes
  //     public dropDown ():void {
  //       this.activeDropDown = ! this.activeDropDown
  //     }
  //     //This method is for closing action boxes, When one of the actions is selected
  //     @Emit('bus')
  //     public selectAction(actionName: any, row: Object) :void{
  //       this.activeDropDown = false
  //     }
  //     public closeDropdown():void {
  //       if (!this.actionsMouseIn){
  //         this.activeDropDown = false;
  //       }
  //
  //     }
  // }

</script>
