<template>
    <div class="view-container list-view--container">
        <div class="list-view--pagination">
        </div>
        <div class="list-view--filters">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Users',
    computed: {
        listApiUrl: '/auth/user/',
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
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>