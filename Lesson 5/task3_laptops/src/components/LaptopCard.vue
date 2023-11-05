<template>
    <div>
        <div class="wrapper">
            <div class="img_wrapper">
            <div class="image">
                <img :src="itemData.imgSrc" alt="img of item">
            </div>
            </div>
            <div class="description">
                <h2>
                    <a :href="itemData.link">{{ itemData.title }}</a>
                </h2>
                <p><span>Ваша економія</span> {{ itemData.discount }} &#8372; </p>
                <p class="old_price">{{ itemData.oldPrice}} &#8372;</p>
                <p class="new_price">{{ itemData.price}}  &#8372;</p>
                <div class="button">
                    <button> Купити </button>
                </div>

            </div>
            
        </div>

    </div>
</template>

<script>

    export default {
        name: 'LaptopCard',

        props: {
            itemData: {
                type: Object,
                default: () => ({}),
            },
        },

        
    }
</script>

<style lang="css" scoped>
* {
    box-sizing: border-box;
}
a {
text-decoration: none;
}

p {
    margin: 0;
    color: red;
}

span {
    color: black;
}

.wrapper {
    margin: 0 auto;
    border: 2px solid grey;
    width: 650px;
    display: flex;  
   
}

img {
    
    width: 100%;
    height: 100%;
    object-fit: contain;
    flex-shrink: 0;
}

.image {
    width: 180px;
    height: 180px;  
    margin: 15px 0;  
    padding: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
}           

.description {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
}

.old_price {
    color: grey;
    text-decoration: line-through;
}

.new_price {
    font-size: 25px;
}

button {
    width: 100px;
    background: green;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}
.button {
    padding-bottom: 15px;
    width: 400px;
    display: flex;
    justify-content: flex-end;
   
    
}

</style>