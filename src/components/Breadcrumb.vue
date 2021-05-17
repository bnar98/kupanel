<template>
    <ul class="breadcrumb flex justify-items-center py-0 px-2 list-none">
        <template v-for="(breadcrumb, index) in breadcrumbs" >
            <li class="inline text-gray-800"><a class="text-gray-600 no-underline" href="#" @click.prevent="routerLinkHandler(breadcrumb.route)">{{ breadcrumb.name }}</a></li>
            <ion-icon class="text-gray-600 text-icon-small block py-0 px-1" name="chevron-back-outline" v-if="index !== breadcrumbs.length - 1"></ion-icon>
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
