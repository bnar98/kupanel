<template>
  <ul
    class="
      breadcrumb
      flex
      justify-items-center
      items-center
      py-0
      px-2
      list-none
    "
  >
    <li class="inline text-gray-800">
      <nuxt-link :to="lang" class="text-gray-600 no-underline">{{
        $t("breadcrumb.panel.index")
      }}</nuxt-link>
    </li>
    <ion-icon
      class="icon text-gray-600 text-icon-small block py-0 px-1"
      name="chevron-back-outline"
    ></ion-icon>
    <template
      v-for="(crumb, index) in crumbs"
      property="itemListElement"
      typeof="ListItem"
    >
      <li :key="index" class="inline text-gray-800">
        <nuxt-link :to="crumb.path" class="text-gray-600 no-underline">{{
          crumb.title
        }}</nuxt-link>
      </li>
      <ion-icon
        class="icon text-gray-600 text-icon-small block py-0 px-1"
        name="chevron-back-outline"
        v-if="index !== crumbs.length - 1"
      ></ion-icon>
    </template>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      lang:
        localStorage.getItem("language") === "fa_IR"
          ? "/panel/home/"
          : `/${localStorage.getItem("language")}/panel/home/`,
    };
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath;
      const params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/")
        : fullPath.split("/");
      if (params[params.length - 1] === "") {
        params.pop(); // it is for trailing slash
      }
      // because /1014343 make problem for translate ,show edit translate twice
      if (Object.keys(this.$route.params).length > 0) {
        Object.keys(this.$route.params).forEach((routeParam) => {
          if (this.$route.params[routeParam]) {
            params.pop();
          }
        });
      }
      const crumbs = [];
      let path = "";
      let translatableTitle = "";
      params.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = this.$router.match(path + "/");
        translatableTitle = "";
        let crumbTitle = "";
        if (match.name) {
          crumbTitle = match.path.split("/");
          localStorage.getItem("language") === "en_US"
            ? crumbTitle.splice(0, 2)
            : crumbTitle.splice(0, 3);

          crumbTitle.forEach((title, index1) => {
            if (index1 !== 0 && title) {
              translatableTitle = translatableTitle + "." + title;
            } else if (title) {
              translatableTitle = translatableTitle + title;
            }
          });
          if (index !== 0 && index !== params.length - 1) {
            translatableTitle = translatableTitle + ".index";
          } else if (index !== 0 && this.hasChild() > 0) {
            translatableTitle = translatableTitle + ".index";
          }
        }
        if (match.name !== null && crumbTitle.length !== 0) {
          crumbs.push({
            title: this.$t("breadcrumb." + translatableTitle),
            path: match.path,
          });
        }
      });
      return crumbs;
    },
  },

  methods: {
    hasChild() {
      const childRoutes = this.$router.options.routes.filter(
        (x) =>
          x.path.startsWith(this.$route.path) &&
          x.path !== this.$route.path &&
          Object.keys(this.$route.params).length < 0
      );
      return childRoutes.length;
    },
  },
};
</script>
<style lang="scss" scoped>
.localization-ltr {
  .icon {
    transform: rotate(180deg);
  }
}
</style>
