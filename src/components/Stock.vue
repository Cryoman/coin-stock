<template>
    <div class="content">
        <div  
        class="coins"
        v-for="(coin, i) in 5"
        :key="i"></div>
    </div>
</template>
<style scoped>
.coins {
    width: 100%;
    height: 50px;
    border: 1px solid grey;
    margin-bottom: 10px;
}
</style>