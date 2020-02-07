<template>
    <div class="view-container list-view--container">
        <div class="list-view--pagination">
        </div>
        <div class="list-view--filters">
        </div>
        <div class="list-view--table-container">
            <table class="table">
                <tr class="table-heading">
                    <th class="table-head">
                        <div class="table-label">
                            ID
                        </div>
                    </th>
                    <th class="table-head">
                        <div class="table-label">
                            Название
                        </div>
                    </th>
                    <th class="table-head">
                        <div class="table-label">
                            Сфера деятельности
                        </div>
                    </th>
                </tr>
                <tr class="table-row" v-for="item in items" :key="item.id"
                    @click="select(item.id)"
                >
                    <td class="table-cell">
                        <div class="table-container">
                            {{item.id}}
                        </div>
                    </td>
                    <td class="table-cell">
                        <div class="table-container">
                            {{item.name}}
                        </div>
                    </td>
                    <td class="table-cell">
                        <div class="table-container">
                            {{item.scope|scopeFilter}}
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import request from '@/utils/request'

const SCOPE_MAPPING = {
    'none': 'Не выбрано',
    'control': 'Строительный контроль',
    'monolith': 'Монолитные работы',
    'geoworks':  'Геодезические работы'
}

export default {
    name: 'Companies',
    data: () => ({
        listApiUrl: '/core/company/',
        items: [],
        loading: false,
        totalCount: 0,
        offset: 0,
        limit: 100,
        pageSize: 100,
        pageSizeOptions: [
            {label: '50', value: 50},
            {label: '100', value: 100},
            {label: '200', value: 200}
        ],
    }),
    computed: {
        queryParams() {
            let params = {
                offset: this.offset,
                limit: this.limit,
                ordering: this.ordering
            }
            return params
        }
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            this.getList();
        },
        getList() {
            this.loading = true;
            let params = this.queryParams;
            request.get(this.listApiUrl, {params: params}).then(
                response => {
                    this.handleSuccessfulGetListResponse(response);
                },
                response => {
                    this.handleFailedGetListResponse(response);
                }
            )
        },
        handleSuccessfulGetListResponse(response) {
            console.log(response.data)
            this.items = response.data;
        },
        handleFailedGetListResponse(response) {

        },
        select(pk) {
            this.$router.push({path: `/companies/${pk}/`})
        }
    },
    filters: {
        scopeFilter(value) {
            return SCOPE_MAPPING[value]
        } 
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .list-view--container {
        padding: 20px;
    }
</style>