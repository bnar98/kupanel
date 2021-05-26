<template>
  <paginate
    :click-handler="pageHandler"
    :container-class="'pagination'"
    :next-text="nextText"
    :page-count="page"
    :prev-text="prevText">
  </paginate>
</template>
<script>
  import Paginate from 'vuejs-paginate';

  export default {

    data() {
      return {
        page: ''
      }
    },

    props: {
      nextText: {
        type: String,
        default: 'next'
      },
      prevText: {
        type: String,
        default: 'next'
      },
      pageCount: {
        type: Number,
        default: 1,
        required: true
      },
    },

    created() {
      this.page = this.pageCount;
    },

    watch: {
      pageCount(newValue) {
        this.page = newValue;
      }
    },

    methods: {
      pageHandler(page) {
        this.$emit('pageHandler', page);
      }
    },

    components: {
      Paginate
    }

  }
</script>

<style lang="scss">
  .pagination {
    @apply inline-block;
  }

  .pagination li {
    @apply list-none text-black float-left no-underline border border-solid border-box-border-color;

    a {
      @apply py-2 px-4 block;
    }

  }

  .pagination li.active {
    @apply bg-primary;

    a {
      @apply text-white;
    }

  }

  .pagination li a:focus {
    @apply outline-none;
  }

</style>
