<template>
    <div class="flex p-3 justify-items-center border-b border-solid cursor-pointer border-gray-300" @click="action">
        <div>
            <img :src="image" alt="image" class="w-10 h-10 rounded-full ">
        </div>
        <div class="pr-3 flex flex-col justify-center h-10">
            <span class="text-sub-title-color">{{ title }}</span>
            <span class="text-sm text-gray-800">{{ subtitle }}</span>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        action(){
            this.$emit('actionEvent');
        }
    },
    props: {
        image: {
            type: String,
            require: true,
        },
         title: {
            type: String,
            require: true,
        },
        subtitle:{
            type: String,
            require: false,
        }
    },
}
</script>
<style lang="scss" scoped>
    p{
        @apply m-0;
    }
    
</style>