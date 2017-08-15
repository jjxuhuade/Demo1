<template>
    <div class="component">
        <div class="container">
            <div class="row">
                <router-link to="/demo21/child">demo21/child</router-link><br/>
                <router-link to="/demo21/child111">空路由：demo21/child111</router-link>
                <router-view></router-view>
                <router-view name="block2"></router-view>
                <router-view name="block3"></router-view>
            </div>
        </div>
    </div>
</template>



