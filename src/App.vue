<template>
  <div class="app">
    <div class="products-grid">
      <h2>Desserts</h2>
      <div class="product-list">
        <ProductItem
          v-for="(product, index) in products"
          :key="index"
          :product="product"
          :addedToCart="isInCart(product)"
          @add-to-cart="addToCart"
          @increment="increment"
          @decrement="decrement"
        />
      </div>
    </div>

    <!-- Cart Section -->
    <CartItem :cartItems="cartItems" @remove-from-cart="removeFromCart" />
  </div>
</template>


<script>
// import ProductList from "./components/ProductList.vue";
import CartItem from "./components/CartItem.vue";
import ProductItem from "./components/ProductItem.vue";

export default {
  name: "App",
  components: {
    ProductItem,
    CartItem,
  },
  data() {
    return {
      cartItems: [],
      addedItemToCart:false,
      products: [
        {
          id: 1, // Add an id for better key management
          image: {
            thumbnail: require("@/assets/images/image-waffle-thumbnail.jpg"),
            mobile: require("@/assets/images/image-waffle-mobile.jpg"),
            tablet: require("@/assets/images/image-waffle-tablet.jpg"),
            desktop: require("@/assets/images/image-waffle-desktop.jpg"),
          },
          name: "Waffle with Berries",
          category: "Waffle",
          price: 6.5,
        },
        {
          id: 2,
          image: {
            thumbnail: require("@/assets/images/image-creme-brulee-thumbnail.jpg"),
            mobile: require("@/assets/images/image-creme-brulee-mobile.jpg"),
            tablet: require("@/assets/images/image-creme-brulee-tablet.jpg"),
            desktop: require("@/assets/images/image-creme-brulee-desktop.jpg"),
          },
          name: "Vanilla Bean Crème Brûlée",
          category: "Crème Brûlée",
          price: 7.0,
        },
        {
          id: 3,
          image: {
            thumbnail: require("@/assets/images/image-macaron-thumbnail.jpg"),
            mobile: require("@/assets/images/image-macaron-mobile.jpg"),
            tablet: require("@/assets/images/image-macaron-tablet.jpg"),
            desktop: require("@/assets/images/image-macaron-desktop.jpg"),
          },
          name: "Macaron Mix of Five",
          category: "Macaron",
          price: 8.0,
        },
        {
          id: 4,
          image: {
            thumbnail: require("@/assets/images/image-tiramisu-thumbnail.jpg"),
            mobile: require("@/assets/images/image-tiramisu-mobile.jpg"),
            tablet: require("@/assets/images/image-tiramisu-tablet.jpg"),
            desktop: require("@/assets/images/image-tiramisu-desktop.jpg"),
          },
          name: "Classic Tiramisu",
          category: "Tiramisu",
          price: 5.5,
        },
        {
          id: 5,
          image: {
            thumbnail: require("@/assets/images/image-baklava-thumbnail.jpg"),
            mobile: require("@/assets/images/image-baklava-mobile.jpg"),
            tablet: require("@/assets/images/image-baklava-tablet.jpg"),
            desktop: require("@/assets/images/image-baklava-desktop.jpg"),
          },
          name: "Pistachio Baklava",
          category: "Baklava",
          price: 4.0,
        },
        {
          id: 6,
          image: {
            thumbnail: require("@/assets/images/image-meringue-thumbnail.jpg"),
            mobile: require("@/assets/images/image-meringue-mobile.jpg"),
            tablet: require("@/assets/images/image-meringue-tablet.jpg"),
            desktop: require("@/assets/images/image-meringue-desktop.jpg"),
          },
          name: "Lemon Meringue Pie",
          category: "Pie",
          price: 5.0,
        },
        {
          id: 7,
          image: {
            thumbnail: require("@/assets/images/image-cake-thumbnail.jpg"),
            mobile: require("@/assets/images/image-cake-mobile.jpg"),
            tablet: require("@/assets/images/image-cake-tablet.jpg"),
            desktop: require("@/assets/images/image-cake-desktop.jpg"),
          },
          name: "Red Velvet Cake",
          category: "Cake",
          price: 4.5,
        },
        {
          id: 8,
          image: {
            thumbnail: require("@/assets/images/image-brownie-thumbnail.jpg"),
            mobile: require("@/assets/images/image-brownie-mobile.jpg"),
            tablet: require("@/assets/images/image-brownie-tablet.jpg"),
            desktop: require("@/assets/images/image-brownie-desktop.jpg"),
          },
          name: "Salted Caramel Brownie",
          category: "Brownie",
          price: 4.5,
        },
        {
          id: 9,
          image: {
            thumbnail: require("@/assets/images/image-panna-cotta-thumbnail.jpg"),
            mobile: require("@/assets/images/image-panna-cotta-mobile.jpg"),
            tablet: require("@/assets/images/image-panna-cotta-tablet.jpg"),
            desktop: require("@/assets/images/image-panna-cotta-desktop.jpg"),
          },
          name: "Vanilla Panna Cotta",
          category: "Panna Cotta",
          price: 6.5,
        },
      ],
    };
  },
  methods: {
    // Method to add product to the cart
    addToCart(product) {
      const cartItem = this.cartItems.find(
        (item) => item.name === product.name
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
      this.addedItemToCart = true;
    },
    // Method to remove a product from the cart
    removeFromCart(index) {
      
        this.cartItems.splice(index, 1); // Remove item if quantity is 1
      
      this.addedItemToCart = false;
    },
    increment(product) {
      const cartItem = this.cartItems.find(
        (item) => item.name === product.name
      );
      if (cartItem) {
        cartItem.quantity += 1; // Increment the quantity
      }
      console.log(cartItem); // This logs the cart item after updating its quantity
    },

    decrement(product) {
      const cartItem = this.cartItems.find(
        (item) => item.name === product.name
      );
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1; // Decrement the quantity, but don't let it go below 1
      }else{
        this.addedItemToCart = false;
      }
    },
    isInCart(product) {
      return this.cartItems.some((item) => item.name === product.name);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap");

.app {
  font-family: "Red Hat Text", sans-serif;
  gap: 15px;
  background-color: hsl(20, 50%, 98%);
  width: 100%;
  margin: 0 auto;
  padding-top: 15px;
  display: flex;
  flex-direction: row;
}
.product-item {
  display: flex;
  gap: 0px;
}
.products-grid {
  max-width: 50%;
  width: 100%;
  margin-left: 80px;
  /* border: 1px solid red; */
  flex-wrap: nowrap;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

@media only screen and (max-width: 600px) {
  .app {
    display: flex;
    width: 100%;
    flex-direction: column; /* Switch to column layout on small screens */
    
  }
  .products-grid {
    margin-left:0px;
    max-width:100%;
    padding:5px;
  }
  h2 {
    font-size: 30px;
  }
}
</style>