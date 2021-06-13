<template>
  <div :class="['tags-input', {'form-group': gap}]">
    <label :for="name" class="label" v-if="label">{{ label }}</label>
    <input type="text"
           name="tags"
           class="form-control"
           id="tags"
           :placeholder="placeholder"
           autocomplete="off"
           @keyup.enter.prevent="addTags"
           v-model="newTagValue"
           v-if="!disabled"
    />

    <div class="tag-list">
      <ul>
        <li v-for="(tag, index) in tags" :key="index">
            <span class="tag-content">
                <span :class="['tag-title', {'disabled': disabled}]">{{tag}}</span>
                <span class="tag-remove-btn" v-if="!disabled" @click="removeTag(index)">
                    <ion-icon class="icon" name="close-outline"></ion-icon>
                </span>
            </span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

  export  default {

    data(){
      return{
        newTagValue:'',
        tags: []
      }
    },

    props:{

      value: {
        default: []
      },

      placeholder: String,

      disabled: {
        default: false
      },
      name: {
        type: String,
        default: '',
        required:true
      },
      label: {
        type: String,
        default: ''
      },
      gap:{
        type: Boolean,
        default: true
      }

    },

    methods:{

      addTags(){
        if(this.newTagValue !== '')
          this.tags.push(this.newTagValue);
        this.newTagValue = '';
        this.$emit('input', this.tags);
      },

      removeTag(tagIndex){
        this.tags.splice(tagIndex, 1);
        this.$emit('input', this.tags);
      }

    },

    created() {
      this.tags = this.value;
    },

    watch: {
      value() {
        this.tags = this.value
      }
    }

  }

</script>


<style lang="scss">

  .tags-input{

    .tag-list {

      ul {
        @apply p-0 m-0 list-none;

        li{
          @apply inline-block py-0 px-2 border border-input-border-color border-solid bg-input-background-color mt-4 rounded-lg;

          .tag-content{
            @apply flex items-center justify-between;

            &.disabled{
              @apply cursor-not-allowed;
            }

            .tag-title{
              @apply text-input-text-color text-sm;
            }

            .tag-remove-btn{
              @apply cursor-pointer flex items-center;

              .icon{
                @apply text-sm;
              }

            }


          }

        }

      }

    }

  }

  .localization-rtl{

    .tags-input{

      .tag-list {

        ul {

          li{
            @apply ml-2;

            .tag-content{

              .tag-remove-btn{
                @apply pr-4;
              }

            }

          }

        }

      }

    }

  }

  .localization-ltr{

    .tags-input{

      .tag-list {

        ul {

          li{
            @apply mr-2;

            .tag-content{

              .tag-remove-btn{
                @apply pl-4;
              }

            }

          }

        }

      }

    }

  }

</style>
