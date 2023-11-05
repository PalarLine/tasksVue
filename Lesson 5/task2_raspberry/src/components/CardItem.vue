<template>
    <div class="container">
        <div class="image">
            <img :src="cardData.imgSrc" alt="img" class="img" />
        </div>
        <div class="logo"> 
            <div class="companyIcon">
                <img :src="cardData.logo" alt="logo">
            </div>
            <div class="companyTitle">
                <span>{{ cardData.companyTitle}}</span>
            </div>
        </div>
        <span class="description">{{ cardData.description}}</span>

    </div>
</template>

<script>
    export default {
        name: 'CardItem',

        props: {
            cardData: {
                type: Object,
                default: () => ({}),
            },
        },
    }
</script>

<style lang="css" scoped>
* {
    box-sizing: border-box;
    padding: 3px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
span {
    color: wheat
}
.container {
    margin: 0 auto;    
    background-color:  black;
    display: inline-block;
    
}
.image {
    width: 140px;
    height: 140px;

}
.logo {
    display: flex;
    justify-content: start;
}


</style>