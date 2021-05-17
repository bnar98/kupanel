<template>
    <div class="flex px-4 py-1 justify-items-center  cursor-pointer"  @click="action">
        <div>
            <ion-icon :name="icon" class="text-2xl text-gray-500"></ion-icon>
        </div>
        <div class="pr-3 flex flex-col justify-center">
            <span class="text-gray-800-color text-sm">{{ title }}</span>
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
        icon: {
            type: String,
            require: true,
        },
         title: {
            type: String,
            require: true,
        }
    },
}
</script>
<style lang="scss" scoped>
    p{
        @apply m-0;
    }
    
</style>