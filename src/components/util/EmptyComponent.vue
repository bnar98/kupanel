<template>

  <div class="empty-component w-full flex items-center flex-col justify-center">
    <img class="empty-placeholder-image" width="400" :src="image" alt="Product Placeholder">
    <h3 class="empty-placeholder-title">{{title}} </h3>
    <p class="empty-placeholder-description">{{description}}</p>
    <ku-Button
      v-if="route"
      ui="btn btn-primary medium"
      :title="routeTitle"
      @click.native="changeRoute"
      icon="add-outline"
      v-can="[permission]"
    />
  </div>

</template>

<script>

export default {

  props:['title','description', 'image', 'route', 'routeTitle', 'permission'],

  methods: {
    changeRoute() {
      this.$router.push(this.route);
    }
  }

}

</script>

<style>
.empty-component{
  min-height: 94vh;
  margin-top: -100px;
}
</style>
