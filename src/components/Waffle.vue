<template>
    <div class="product-item">
      <div class="img-flex">
          <img
        :src="product.image.desktop"
        alt="Waffle"
        @click="showImage(product)"
      />
      <div class="btnn" v-if="addedToCart">
        <button class="plus-btn" @click="increment">+</button>
        <p class="number">{{quantity}}</p>
        <button class="minus-btn" @click="decrement">-</button>
      </div>
      <div class="btn" v-else>
        <button @click="addToCart">Add to Cart</button>
      </div>
      </div>
      
      <div class="product-flex">
        <h4>{{ product.category }}</h4>
        <h3>{{ product.name }}</h3>
        <p>${{ product.price.toFixed(2) }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from "vue";
  
  // Define the product prop
  const props = defineProps({
    product: {
      type: Object,
      required: true, // Ensure the product is required
    },
    addedToCart:{
      type:Boolean,
      required:true,
      default:false,
    }
  });
  const product = ref(props.product);
  
  const quantity = ref(1);
  
  function showImage(product) {
    console.log(product);
  }
  const emit = defineEmits(["add-to-cart", "increment" , "decrement"]);
  
  function addToCart() {
    emit("add-to-cart", props.product);
  }
  function increment(){
      emit("increment",props.product)
      quantity.value++
  }
  function decrement(){
      emit("decrement",props.product)
      quantity.value--
  }
  </script>
  
  <style scoped>
  .product-item img {
    width: 100%;
    height: auto;
  }
  .product-item {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .product-item {
    flex: 0 1 200px; /* Fixed width (200px) and responsive */
    /* Adjust the height as needed */
  }
  .product-flex {
    line-height: 5px;
  }
  h3 {
    font-size: 13px;
  }
  h4 {
    font-size: 10px;
    color: hsl(7, 20%, 60%);
  }
  p {
    color: hsl(14, 86%, 42%);
    font-weight: 600;
  }
  .img-flex{
      position: relative;
    display: inline-block;
  }
  
  button {
    height: 35px;
    width: 120px;
    border-radius: 30px;
    /* outline: none; */
    border: 1px solid hsl(14, 86%, 42%);
    background: hsl(20, 50%, 98%);
    cursor: pointer;
  }
  .btn,
  .btnn {
      position: absolute;
    left: 50%;  
    transform: translateX(-50%); 
   
    bottom:-10px; 
    
    
   
  }
  
  .btnn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    /* border: 1px solid hsl(14, 86%, 42%); */
    background:  hsl(14, 86%, 42%);
    height: 35px;
    width: 120px;
    border-radius: 30px;
    cursor: pointer;
  }
  .plus-btn:hover{
      background-color: white;
      color: hsl(14, 86%, 42%) ;
  }
  .minus-btn:hover{
      background-color: white;
      color: hsl(14, 86%, 42%) ;
  }
  .plus-btn,
  .minus-btn {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color:transparent;
    border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .number{
      color: white;
  }
  
  
  @media only screen and (max-width: 600px){
      .product-item{
          width: 100%;
      }
      .product-item {
    flex: 0 1 100%; 
  }
  }
  
  
  </style>
  