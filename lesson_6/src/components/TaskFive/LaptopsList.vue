<template>
    
        <div v-for= 'laptop in laptopsList' :key="laptop.id" class="card">
            <h3> {{laptop.brand}} </h3>
            <div class="img">
                <img :src="laptop.imageSrc" alt="laptop image">
                </div>
            
            <p> {{laptop.description}} </p>
            <h4> {{laptop.price}} &#8372; </h4>
            <p> {{laptop.seller}} </p>
        </div>

    
</template>

<script>
    export default {
        name: 'LaptopsList',

        props:{
            laptopsList: {
                type: Array,
                default: () => [],
    },
        }
    }
</script>

<style lang="scss" scoped>
p {
    font-size: 10px;
}
img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    
}
.img {
    width: 100px;
    height:110px;
}
.card {
    width: 105px;
    margin: 2px;
    padding: 2px;
    border: 1px solid gray;
    border-radius: 3px;

}

</style>