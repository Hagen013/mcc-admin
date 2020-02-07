<template>
    <div class="view-container details-view--container">
        <div class="details-view--controls">
            <el-button icon="el-icon-back" @click="back"
                size="medium"
            >
                Назад
            </el-button>
            <el-button type="primary" icon="el-icon-check"
                size="medium"
            >
                Сохранить
            </el-button>
            <el-button type="warning"
                size="medium"
            >
                Отменить изменения
            </el-button>
            <el-button type="danger"
                v-if="instanceId!==null"
                icon="el-icon-delete"
                size="medium"
            >
                Удалить
            </el-button>
        </div>
        <div class="details-view--form">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="field">
                        <div class="field-label">
                            Название:
                        </div>
                        <div class="field-value">
                            <el-input v-model="instance.name">
                            </el-input>
                        </div>
                    </div>
                    <div class="field">
                        <div class="field-label">
                            Autodesk Bucket:
                        </div>
                        <div class="field-value">
                            <el-input v-model="instance.bucket_name">
                            </el-input>
                        </div>
                    </div>
                    <div class="field">
                        <div class="field-label">
                            Сфера деятельности:
                        </div>
                        <div class="field-value">
                            <el-select v-model="instance.scope" placeholder="Сфера деятельности">
                                <el-option
                                    v-for="item in scopeOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
const SCOPE_MAPPING = {
    'none': 'Не выбрано',
    'control': 'Строительный контроль',
    'monolith': 'Монолитные работы',
    'geoworks':  'Геодезические работы'
}

import crudMixin from '@/components/mixins/crudMixin'

export default {
    name: 'Company',
    mixins: [crudMixin],
    data: () => ({
        listApiUrl: '/core/company/',
        scopeOptions: [
            {value: 'none', label: 'Не выбрано'},
            {value: 'control', label: 'Строительный контроль'},
            {value: 'monolith', label: 'Монолитные работы'},
            {value: 'geoworks', label: 'Геодезические работы'},
        ]
    }),
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .view-container {
        padding: 20px;
    }
    .details-view--controls {
        margin-bottom: 40px;
    }
    .field {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .field-label {
        width: 180px;
        margin-right: 20px;
        font-size: 14px;
    }
    .field-value {
        flex-grow: 1;
    }
</style>