<template>    
    <div class="filter-by-seller" :class=" isActiveSeller">
        <h5> Продавець <span class="numberOf">{{ amountSellerItems }}</span> </h5>        
        <template v-for="seller in sellerSetList" :key="seller.id" >
            <label>
                {{ seller }}
            <input  
                v-model="sellerValue"                
                type="checkbox"                
                :value="seller"
            />
            </label>            
        </template>              
    </div>
    <div class="filter-by-brand" :class=" isActiveBrand">
        <h5 >Бренд <span class="numberOf">{{ amountBrandItems }}</span></h5>
       
        <template v-for="brand in brandSetList" :key="brand.id" >
           
            <label >
                {{ brand }}
            <input  
                v-model="brandValue"                
                type="checkbox"                
                :value="brand"
            />
            </label>            
        </template>
        
    </div>
</template>

<script>
    import { laptops } from '@/constants/data'
    
    export default {
        name: 'LaptopCheckBox',

        props: {
            checkBrand: {
                type: Array,
                default: () => []
            },
            checkBrandModifiers: {
                default: () => ({})
            },
            checkSeller: {
                type: Array,
                default: () => []
            },  
            checkSellerModifiers: {
                default: () => ({})
            },          
        },  
        
        data() {
            return {
                laptops,
                amountOfBrands: 0,
                isActiveSeller: '',
                isActiveBrand: '',
            }
        },      

        computed: {
            brandValue: {
                get() {
                    if (this.checkSellerModifiers.isChecked)
                        this.changeBorderColorBrand()

                    return this.checkBrand
                },
                set(newValue) {  
                    this.$emit('update:checkBrand', newValue)
                }            
            },
            sellerValue: {
                get() {
                        if (this.checkSellerModifiers.isChecked)
                            this.changeBorderColorSeller()
                    
                    return this.checkSeller
                },
                set(newValue) {
                    this.$emit('update:checkSeller', newValue)
                }
            },
            brandSetList() {
                return new Set(laptops.map(item => item.brand))
            },
            sellerSetList() {
                return new Set(laptops.map(item => item.seller))
            },
            amountBrandItems() {
                return this.brandSetList.size
            },
            amountSellerItems() {
                return this.sellerSetList.size            
            },         

        },
        methods: {            
            changeBorderColorBrand() {                
                if (this.checkBrand.length > 0)
                    return  this.isActiveBrand = 'blackBorder'
                 else  
                    return  this.isActiveBrand = 'greenBorder' 
            },
            changeBorderColorSeller() {                
                if (this.checkSeller.length > 0)                
                  return  this.isActiveSeller = 'blackBorder'
                 else               
                   return  this.isActiveSeller = 'greenBorder'
            },         
            
        },        
    }
</script>

<style lang="scss" scoped>
h5 {
    margin: 10 0;
}

.filter-by-seller,
.filter-by-brand {
    width: 120px;
    display: flex;
    flex-direction: column;
    margin: 2px; 
    border: 2px solid green; 
}
.greenBorder {
    border: 2px solid green;

}
.blackBorder {
    border: 2px solid black;
}

</style>