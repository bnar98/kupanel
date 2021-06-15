<template>
    <div class="flex m-3 justify-items-center cursor-pointer " @click="action">
        <div>
            <img :src="image" alt="image" class="w-10 h-10 rounded-full ">
        </div>
        <div class="px-3 flex flex-col justify-center h-10">
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