<template>
    <div class="dashboard-container">
        <div class="view-placeholder">
            <div class="view-placeholder-container">
                BIM Модели
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/utils/request'

export default {
    name: 'Models',
    data: () => ({
        itemsList: []
    }),
    computed: {
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            api.get('/main/bim/').then(
                response => {
                    this.handleSuccessfulGetListResponse(response);
                },
                response => {
                    this.handleFailedGetListResponse(response);
                }
            )
        },
        handleSuccessfulGetListResponse(response) {
            this.itemsList = response.data;
        },
        handleFailedGetListResponse(response) {

        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>