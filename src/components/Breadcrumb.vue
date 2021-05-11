<template>
    <ul class="breadcrumb">
        <template v-for="(breadcrumb, index) in breadcrumbs" >
            <li><a href="#" @click.prevent="routerLinkHandler(breadcrumb.route)">{{ breadcrumb.name }}</a></li>
            <ion-icon name="chevron-back-outline" v-if="index !== breadcrumbs.length - 1"></ion-icon>
        </template>
    </ul>
</template>

<script>
    export default {
        computed: {
            breadcrumbs() {
                let crumbs = [];
                this.$route.matched.forEach(match => {
                    if(match.name !== undefined) {
                        crumbs.push({
                            name: 'breadcrumb.' + match.name,
                            route: match.name
                        });
                    }
                });
                return crumbs;
            }
        },
        methods: {
            routerLinkHandler(route) {
                this.$router.push({name: route});
            }
        }
    }
</script>

<style lang="scss">
.breadcrumb {
  display: flex;
  align-items: center;
  padding: 0 20px;
  list-style: none;

  li {
    color: var(--gray-800-color);
    display: inline;

    a {
      color: var(--gray-600-color);
      text-decoration: none;
    }

  }

  ion-icon{
    color: var(--gray-600-color);
    font-size: var(--icon-small-font-size);
    display: block;
    padding: 0 4px;
  }

}
</style>