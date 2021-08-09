<template>
    <div class="items">
        <div>{{ $t("components.numbers") }}</div>
        <div>&nbsp;{{count}}&nbsp;</div>
        <div>{{ $t("components.from") }}</div>
        <div>&nbsp;{{total}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
      count:{
        type: Number,
        required: true
      },
      total:{
        type: Number,
        required: true
      }
    },
}
</script>
<style scoped>
    .items{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 39px;
        min-width: 39px;
        padding: 8px;
        /* border-radius: 7px; */
        /* background-color: red; */
        /* border: 1px solid green; */
        border-bottom: 2px solid #efefef;
        font-size: 12px !important;
        
    }
</style>