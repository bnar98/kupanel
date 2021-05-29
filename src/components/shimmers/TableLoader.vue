<template>
  <div class="table-loader">
    <div v-if="hasSearch">
        <SearchLoader></SearchLoader>
    </div>
    <table>
      <thead>
        <tr>
          <th
            v-for="(column, index) in columns"
            :key="index"
            :width="column + '%'"
          >
            <Shimmer></Shimmer>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rowCount" :key="index">
          <td
            v-for="(column, index) in columns"
            :key="index"
            :width="column + '%'"
          >
            <Shimmer></Shimmer>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Shimmer from "./Shimmer";
import SearchLoader from "./SearchLoader";
export default {
  components: {SearchLoader, Shimmer},
  data() {
    return {
      rowCount: 10,
    };
  },

  props: {
    columns: {
      default: [],
      require: true,
    },
    hasSearch: {
      default: true,
    },
  },
};
</script>

<style lang="scss">
.table-loader {
  @apply overflow-hidden;

  table {
    @apply w-full;
    thead {
      @apply bg-table-header-background-color;
    }

    th,
    td {
      @apply p-2.5 rounded;
      min-width: 15px;

      .loader-box {
        height: 30px;
      }
    }
  }

  .search-container {
    .loader-box {
      height: 41px;

      &:first-child {
        width: calc(100% - 82px);
      }

      &:last-child {
        @apply my-0 mx-2.5;
        width: 82px;
      }
    }
  }
}
</style>
