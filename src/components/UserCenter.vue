<template>
    <div class="account">
        <div>
            <h3>账号管理</h3>
        </div>
        <div class="topWrap">
            <span v-text="$auth.user().name"></span>
        </div>
        <div>
            <h3>账号安全</h3>
        </div>
    </div>
</template>
<style>
    .topWrap{
        margin: 20px auto;
        margin-left: 17px;
    }
</style>
