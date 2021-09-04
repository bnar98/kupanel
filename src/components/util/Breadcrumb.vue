<template>
  <ul class="breadcrumb flex justify-items-center items-center py-0 px-2 list-none">
    <li class="inline text-gray-800">
      <nuxt-link to="/panel/home" class="text-gray-600 no-underline">{{$t('breadcrumb.panel.index') }}</nuxt-link>
    </li>
    <ion-icon class=" icon text-gray-600 text-icon-small block py-0 px-1" name="chevron-back-outline"></ion-icon>
    <template v-for="(crumb, index) in crumbs"

              property="itemListElement"
              typeof="ListItem">
      <li :key="index" class="inline text-gray-800">
        <nuxt-link :to="crumb.path" class="text-gray-600 no-underline">{{crumb.title}}</nuxt-link>
      </li>
      <ion-icon class="icon text-gray-600 text-icon-small block py-0 px-1" name="chevron-back-outline"
                v-if="index !== crumbs.length - 1"></ion-icon>
    </template>
  </ul>
</template>

<script>

  export default {

    computed: {

      crumbs() {

        const fullPath = this.$route.fullPath

        const params = fullPath.startsWith('/')
          ? fullPath.substring(1).split('/')
          : fullPath.split('/')

        if (Object.keys(this.$route.params).length > 0){
          // because /1014343 make problem for translate ,show edit translate twice
          params.pop()
        }
        if(localStorage.getItem('language') !== this.$i18n.defaultLocale) {
          params.splice(0,1);
        }

        const crumbs = []
        let path = ''
        let translatableTitle = '';
        params.forEach((param, index) => {
          console.log(param);
          path = `${path}/${param}`
          const match = this.$router.match(path)
          translatableTitle = '';
          let crumbTitle = ''
          if (match.name) {
            crumbTitle = match.path.split("/");
            crumbTitle.splice(0, 2);

            crumbTitle.forEach((title, index1) => {
              if (index1 !== 0) {
                translatableTitle = translatableTitle + '.' + title
              } else {
                translatableTitle = translatableTitle + title
              }
            })


            if(index !== 0 && index !== params.length -1 && param){
              translatableTitle = translatableTitle + '.index'
            } else if (index !== 0 && this.hasChild() > 0 && param) {
              translatableTitle = translatableTitle + '.index'
            }

          }

          if (match.name !== null) {
            crumbs.push({
              title: this.$t('breadcrumb.' + translatableTitle),
              path: match.path
            })
          }

        })

        return crumbs
      },

    },

    methods: {

      hasChild() {
        const childRoutes = this.$router.options.routes.filter(x => x.path.startsWith(this.$route.path+ '/'))
        return childRoutes.length;
      }

    }

  }
</script>
<style lang="scss">
.localization-ltr{
  .icon{
    transform: rotate(180deg);
  }
}


</style>

