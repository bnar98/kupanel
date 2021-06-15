<template>
    <nuxt-link tag="li" :to="route" class="sub-menu-item">
        <a>{{ title }}</a>
    </nuxt-link>
</template>

<script>
    export default {
        props: ['route', 'title'],
    }
</script>