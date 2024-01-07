<template>
<div class="container">    
    <div class="img_container">
        <img :src="card.image" alt="car picture" >
    </div>
    <div class='description_container'>
        <p> {{card.brand}} </p>
        <p> {{card.model}} </p>
        <p> {{card.bodytype}} </p>
        <p> {{card.manufactured}} </p>
        <p> {{card.price}} $  </p>        
    </div>  

</div>
    
</template>

<script>
    export default {
        name: 'CarItemCard' ,
        props: {
            card: {
                type: Object,
                default: () => ({}) 
            },
        },
               
    }

</script>

<style lang="scss" scoped>
p {
    font-size: 10px;
    margin: 0;
}
img {
    width:  100%;
    height: 100%;
    object-fit: contain;
}
.img_container {
    width: 110px;
    // display: flex;
    gap: 2px;
    
}
.container {
    margin: 2px;
    width: 260px;
    display: flex;
    gap: 2px;
    border: 1px solid gray;
}
// .description_container {
//     width: 150px;
// }

</style>