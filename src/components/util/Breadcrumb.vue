<template>
  <ul class="breadcrumb flex justify-items-center items-center py-0 px-2 list-none">
    <li class="inline text-gray-800">
      <nuxt-link to="/panel/home" class="text-gray-600 no-underline">{{$t('breadcrumb.panel.index') }}</nuxt-link>
    </li>
    <ion-icon class="text-gray-600 text-icon-small block py-0 px-1" name="chevron-back-outline"></ion-icon>
    <template v-for="(crumb, index) in crumbs"

              property="itemListElement"
              typeof="ListItem">
      <li :key="index" class="inline text-gray-800">
        <nuxt-link :to="crumb.path" class="text-gray-600 no-underline">{{crumb.title}}</nuxt-link>
      </li>
      <ion-icon class="text-gray-600 text-icon-small block py-0 px-1" name="chevron-back-outline"
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
        const crumbs = []

        let path = ''
        let translatableTitle = '';

        params.forEach((param, index) => {
          path = `${path}/${param}`
          const match = this.$router.match(path)
          translatableTitle = '';
          if (match.name) {
            const crumbTitle = match.name.split("___")[0].split("-");
            crumbTitle.shift();
            // index 0 is for /panel that has no name it apply in html code
            if (index === 1 && !match.name.includes("-list")) {
              translatableTitle = crumbTitle[0] + '.index'
            } else {
              crumbTitle.forEach((title, index) => {
                if (index !== 0) {
                  translatableTitle = translatableTitle + '.' + title
                } else {
                  translatableTitle = translatableTitle + title
                }
              })
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

    }

  }
</script>
