<template>
    <div class="view-container list-view--container">
        <div class="list-view--controls">
            <el-button type="primary"
                size="medium"
            >
                Добавить
            </el-button>
        </div>
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
                            Сервисное название
                        </div>
                    </th>
                    <th class="table-head">
                        <div class="table-label">
                            Тип работ
                        </div>
                    </th>
                    <th class="table-head">
                        <div class="table-label">
                            Цвет
                        </div>
                    </th>
                    <th class="table-head">
                        <div class="table-label">
                            Порядок следования
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
                            {{item.service_name}}
                        </div>
                    </td>
                    <td class="table-cell">
                        <div class="table-container">
                            {{item.work_type|worktypeFilter}}
                        </div>
                    </td>
                    <td class="table-cell">
                        <div class="table-container">
                            {{item.colour}}
                        </div>
                    </td>
                    <td class="table-cell">
                        <div class="table-container">
                            {{item.order}}
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
    name: 'Statuses',
    data: () => ({
        listApiUrl: '/main/bim-status/',
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
        worktypes: {}
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
            this.getWorktypesList();
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
            this.items = response.data;
        },
        handleFailedGetListResponse(response) {

        },
        select(pk) {
            this.$router.push({path: `/companies/${pk}/`})
        }
    },
    filters: {
        worktypeFilter(value) {
            if (value === 1) {
                return 'Монолитные (Вертикальная)'
            } else if (value === 2) {
                return 'Монолитные (Горизонтальная)'
            } else {

            }
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .list-view--container {
        padding: 20px;
    }
    .list-view--controls {
        margin-bottom: 20px;
    }
</style>