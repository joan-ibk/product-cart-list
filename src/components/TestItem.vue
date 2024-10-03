<template>
  <div :class="['cart', { expanded: cartItems.length > 0 }]">
    <!-- Apply 'expanded' class if cart has items -->
    <div class="cart-flex">
      <h2>Your Cart</h2>
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
                <button @click="$emit('remove-from-cart', index)">
                  Remove
                </button>
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
            <button @click="closeModal">remove</button>
          </div>
          <h3 id="confirm">Order Confirmed</h3>
          <p id="hope-flex">We hope you enjoy your food!</p>
          <ul>
            <li v-for="(item, index) in cartItems" :key="index">
              <img :src="item.image.thumbnail" alt="" />
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
  },

  methods: {
    removeFromCart(index) {
      this.$emit("remove-item", index);
    },
    closeModal() {
      this.showModal = false; // Only closes when the Remove button is clicked
    },
    startNewOrder() {
      // Close the modal then start new order
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

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.qt-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 350px; */
}
#item-name {
  color: hsl(14, 65%, 9%);
  font-weight: 700;
  font-style: bold;
  opacity: 0.85;
  font-size: 14px;
}
#item-price {
  color: hsl(12, 20%, 44%);
  font-size: 14px;
  /* font-weight: 700; */
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
  gap: 10px;
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
  font-style: bold;
  opacity: 0.85;
  font-size: 20px;
}
.item-flex {
  display: flex;
  gap: 15rem;
}
.confirm-order,
#start-new {
width: 365px;
 /* min-width: 50%; */
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
  /* line-height: 0px; */
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
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
}
#img {
  width: 100%;
}
.modal-header {
  display: flex;
  justify-content: flex-end;
}

@media only screen and (max-width: 600px) {
  .cart.expanded {
    max-width: 100%;
  }
  .confirm-order {
    max-width: 100%;
  }
}
</style>
  