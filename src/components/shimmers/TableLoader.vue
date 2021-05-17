<template>
    <div class="table-loader">
        <div class="row" v-if="hasSearch">
            <div class="col-xs-12 col-md-6">
                <div class="search-container">
                   <span class="loader-box">
                        <div class="loader-animation"></div>
                   </span>
                    <span class="loader-box">
                        <div class="loader-animation"></div>
                    </span>
                </div>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th v-for="(column, index) in columns" :key="index" :width="column + '%'">
                        <span class="loader-box">
                            <div class="loader-animation"></div>
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rowCount" :key="index">
                    <td v-for="(column, index) in columns" :key="index" :width="column + '%'">
                        <span class="loader-box">
                            <div class="loader-animation"></div>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                rowCount: 10
            }
        },

        props: {
            columns: {
                default: [],
                require: true
            },
            hasSearch: {
                default: true
            }
        }
    }
</script>

<style lang="scss">


    .table-loader{
        overflow: hidden;

        table{
            width: 100%;

            thead{
                background-color: var(--table-header-background-color);

            }

            th, td{
                padding: 10px;
                min-width: 15px;
                border-radius: 4px;

                .loader-box{
                    height: 30px;
                }

            }



        }

        .search-container{
            .loader-box{
                height: 41px;

                &:first-child{
                    width: calc(100% - 82px);
                }

                &:last-child{
                    width: 82px;
                    margin: 0 10px;
                }
            }
        }



    }

</style>