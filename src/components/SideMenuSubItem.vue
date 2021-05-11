<template>
    <router-link tag="li" :to="route" class="sub-menu-item">
        <a>{{ title }}</a>
    </router-link>
</template>

<script>
    export default {
        props: ['route', 'title'],
    }
</script>