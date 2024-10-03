<template>
    
        <div class="products-grid">
            <h2>Desserts</h2>
            <div class="product-list">
                <ProductItem
                v-for="(product, index) in products" 
                :key="index" 
                :product="product" @add-to-cart="addToCart"/>
            </div>
            
        </div>
   
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
    name: "ProductList",
    components: {
        ProductItem,
    },
    data() {
        return {
            products: [
                {
                    id: 1, // Add an id for better key management
                    image: {
                        thumbnail: require('@/assets/images/image-waffle-thumbnail.jpg'),
                        mobile: require('@/assets/images/image-waffle-mobile.jpg'),
                        tablet: require('@/assets/images/image-waffle-tablet.jpg'),
                        desktop: require('@/assets/images/image-waffle-desktop.jpg')
                    },
                    name: "Waffle with Berries",
                    category: "Waffle",
                    price: 6.50
                },
                {
                    id: 2,
                    image: {
                        thumbnail: require('@/assets/images/image-creme-brulee-thumbnail.jpg'),
                        mobile: require('@/assets/images/image-creme-brulee-mobile.jpg'),
                        tablet: require('@/assets/images/image-creme-brulee-tablet.jpg'),
                        desktop: require('@/assets/images/image-creme-brulee-desktop.jpg')
                    },
                    name: "Vanilla Bean Crème Brûlée",
                    category: "Crème Brûlée",
                    price: 7.00
                },
                {
                    id: 3,
                    image: {
                        thumbnail: require('@/assets/images/image-macaron-thumbnail.jpg'),
                        mobile: require('@/assets/images/image-macaron-mobile.jpg'),
                        tablet: require('@/assets/images/image-macaron-tablet.jpg'),
                        desktop: require('@/assets/images/image-macaron-desktop.jpg')
                    },
                    name: "Macaron Mix of Five",
                    category: "Macaron",
                    price: 8.00
                },
                {
                    id: 4,
                    image: {
                        thumbnail: require('@/assets/images/image-tiramisu-thumbnail.jpg'),
                        mobile: require('@/assets/images/image-tiramisu-mobile.jpg'),
                        tablet: require('@/assets/images/image-tiramisu-tablet.jpg'),
                        desktop: require('@/assets/images/image-tiramisu-desktop.jpg')
                    },
                    name: "Classic Tiramisu",
                    category: "Tiramisu",
                    price: 5.50
                },
                {
                    id: 5,
                    image: {
                        thumbnail: require('@/assets/images/image-baklava-thumbnail.jpg'),
                        mobile: require('@/assets/images/image-baklava-mobile.jpg'),
                        tablet: require('@/assets/images/image-baklava-tablet.jpg'),
                        desktop: require('@/assets/images/image-baklava-desktop.jpg')
                    },
                    name: "Pistachio Baklava",
                    category: "Baklava",
                    price: 4.00
                },
                {
                    id: 6,
                    image: {
                        thumbnail: require('@/assets/images/image-meringue-thumbnail.jpg'),
                        mobile: require('@/assets/images/image-meringue-mobile.jpg'),
                        tablet: require('@/assets/images/image-meringue-tablet.jpg'),
                        desktop: require('@/assets/images/image-meringue-desktop.jpg')
                    },
                    name: "Lemon Meringue Pie",
                    category: "Pie",
                    price: 5.00
                },
                {
                    id: 7,
                    image: {
                        thumbnail: require('@/assets/images/image-cake-thumbnail.jpg'),
                        mobile: require('@/assets/images/image-cake-mobile.jpg'),
                        tablet: require('@/assets/images/image-cake-tablet.jpg'),
                        desktop: require('@/assets/images/image-cake-desktop.jpg')
                    },
                    name: "Red Velvet Cake",
                    category: "Cake",
                    price: 4.50
                },
                {
                    id: 8,
                    image: {
                        thumbnail: require('@/assets/images/image-brownie-thumbnail.jpg'),
                        mobile: require('@/assets/images/image-brownie-mobile.jpg'),
                        tablet: require('@/assets/images/image-brownie-tablet.jpg'),
                        desktop: require('@/assets/images/image-brownie-desktop.jpg')
                    },
                    name: "Salted Caramel Brownie",
                    category: "Brownie",
                    price: 4.50
                },
                {
                    id: 9,
                    image: {
                        thumbnail: require('@/assets/images/image-panna-cotta-thumbnail.jpg'),
                        mobile: require('@/assets/images/image-panna-cotta-mobile.jpg'),
                        tablet: require('@/assets/images/image-panna-cotta-tablet.jpg'),
                        desktop: require('@/assets/images/image-panna-cotta-desktop.jpg')
                    },
                    name: "Vanilla Panna Cotta",
                    category: "Panna Cotta",
                    price: 6.50
                }
            ],
        };
    },
    methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  }
};
</script>

<style  scoped>
.product-item{
    display: flex;
    gap:0px;
}
.products-grid{
    max-width: 50%;
    width:100%;
    margin-left: 80px;
    border: 1px solid red;
    flex-wrap: nowrap;
}
.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; }




    @media only screen and (max-width : 600px) {
        .products-grid{
            margin-left: 30px;
            
        }
        h2{
            font-size: 30px;
        }
    }

</style>
