<template>
  <div :class="['cart', { expanded: cartItems.length > 0 }]">
    <!-- Apply 'expanded' class if cart has items -->
    <div class="cart-flex">
      <h2>Your Cart  ({{ totalQuantity }})</h2>
      <div v-if="cartItems.length === 0">
        Your added items will appear here.
      </div>
      <div v-else>
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
                <div id="item-name">{{ item.name }}</div>
            <div class="qt-flex">
              <div class="quantity">
                <p id="item-quantity">{{ item.quantity }}x</p>
                <p id="item-price2">@{{ item.price.toFixed(2) }}</p>
                <p id="item-price">
                  ${{ (item.price * item.quantity).toFixed(2) }}
                </p>
              </div>
              <div class="btn2">
                <button @click="removeFromCart(index)" class="button"><i class="fa fa-close"></i></button>
              </div>
            </div>
          </li>
        </ul>
        <div class="order-total">
          <p id="order">Order total</p>
          <p id="total">${{ total.toFixed(2) }}</p>
        </div>

        <!-- Show Confirm Order button if there are items -->
        <button
          class="confirm-order"
          v-if="cartItems.length > 0"
          @click="showModal = true"
        >
          Confirm Order
        </button>
      </div>

      <!-- Modal for confirming order -->
      <div v-if="showModal" class="modal-backdrop">
        <div class="modal-content">
          <div class="modal-header"> 
           <p><i class="fa fa-check-circle-o" style="font-size:28px;color:hsl(159, 69%, 38%)"></i></p>
            <button @click="closeModal" class="button"><i class="fa fa-close"></i></button>
          </div>
          <h3 id="confirm">Order Confirmed</h3>
          <p id="hope-flex">We hope you enjoy your food!</p>

          <ul>
            <li id="list" v-for="(item, index) in cartItems" :key="index">
              <img :src="item.image.thumbnail" alt="" width="45px" />
             <div class="list-flex">
                <div id="item-name">{{ item.name }}</div>
              <div class="qt-flex">
                <div class="quantity">
                  <p id="item-quantity">{{ item.quantity }}x</p>
                  <div class="item-flex">
                    <p id="item-price2">@{{ item.price.toFixed(2) }}</p>
                    <p id="item-price">
                      ${{ (item.price * item.quantity).toFixed(2) }}
                    </p>
                  </div>
                </div>
              </div>
             </div>
            </li>
          </ul>

          <div class="order-total">
            <p id="order">Order total</p>
            <p id="total">${{ total.toFixed(2) }}</p>
          </div>
          <button id="start-new" @click="startNewOrder">Start New Order</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    cartItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showModal: false, // Used to control modal visibility
    };
  },
  computed: {
    total() {
      return this.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    totalQuantity() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
  },
  methods: {
    removeFromCart(index) {
         // Remove the product completely from the cart array
      this.$emit("remove-from-cart", index);
    },
    closeModal() {
      this.showModal = false;
    },
    startNewOrder() {
      // Close the modal then start a new order
      window.location.reload();
    },
  },
};
</script>
  
  <style scoped>
.cart {
  margin: 20px;
  /* max-width: 50%; */
  display: flex;
  flex-direction: column;
  font-family: "Red Hat Text", sans-serif;
  overflow: auto;
  max-height: 200px;
  transition: max-height 0.5s ease-in-out;
  box-shadow: 2px 4px 20px 2px hsl(17, 7%, 80%);
  border-radius: 7px;
}

.cart.expanded {
  max-height: 500px; /* Adjust as needed for expanded height */
}
.cart-flex {
  margin: 20px;
  padding: 15px;
}
.btn2{
    display: flex;
    justify-content: center;
    align-items: center;
}
.button{
    background-color:  hsl(13, 31%, 94%); 
  border: 1px solid hsl(14, 65%, 9%); 
  border-radius: 50%;
  color: hsl(14, 65%, 9%);
  padding: 2px 5px;
  cursor: pointer; /* Mouse pointer on hover */
 
}
.button:hover{
    border: 1px solid hsl(14, 86%, 42%);
    color: hsl(14, 86%, 42%); 
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#list{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.list-flex{
    display:flex;
    flex-direction: column;
    text-align: left;
    line-height: 10px;
    justify-content: center;
    padding-top: 10px;
    padding-left: 10px;
    
}

.qt-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#item-name {
  color: hsl(14, 65%, 9%);
  font-weight: 700;
  font-size: 14px;
}
#item-price {
  color: hsl(12, 20%, 44%);
  font-size: 14px;
}
#item-price2 {
  color: hsl(7, 20%, 60%);
  font-size: 14px;
}
#item-quantity {
  color: hsl(14, 86%, 42%);
  font-size: 14px;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;
}
h2 {
  color: hsl(14, 86%, 42%);
}
.order-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#order {
  color: hsl(12, 20%, 44%);
  font-weight: 500;
}
#total {
  color: hsl(14, 65%, 9%);
  font-weight: 700;
  font-size: 20px;
}
.item-flex {
    display: flex;
    gap: 13rem;
}
.confirm-order,
#start-new {
  width: 300px;
  height: 40px;
  background: hsl(14, 86%, 42%);
  color: white;
  border: none;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

#confirm {
  color: hsl(14, 65%, 9%);
  line-height: 0px;
}
#hope-flex {
  color: hsl(7, 20%, 60%);
  font-weight: 400;
  font-size: 12px;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  /* width: 350px; */
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  .cart.expanded{
    max-width: 100%;
  }
  .confirm-order {
    max-width: 100%;
  }
  .modal-content{
    width: 100%;
    border-top-right-radius: 10%;
    border-top-left-radius: 10%;
  }
  .order-total{
    padding: 20px;
  }
  #list{
    padding: 20px;
  }
}


@media only screen and (max-width: 1000px) {
  .cart.expanded{
    margin: 0px;
  }
  .confirm-order {
    max-width: 100%;
  }
  #list{
    padding: 20px;
  }
}
</style>
  