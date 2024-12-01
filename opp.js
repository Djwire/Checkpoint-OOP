class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    calculateTotalPrice() {
      return this.product.price * this.quantity;
    }
  }

  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to get the total of all items inside the cart
    getTotal() {
      return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; // If item already in cart, update the quantity
      } else {
        const newItem = new ShoppingCartItem(product, quantity);
        this.items.push(newItem); // Add new item to cart
      }
    }
  
    // Method to remove an item from the cart by product id
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to display all cart items
    displayItems() {
      this.items.forEach(item => {
        console.log(`${item.product.name} (x${item.quantity}) - $${item.calculateTotalPrice()}`);
      });
    }
  }
  
  // Create some products
const product1 = new Product(1, 'Laptop', 1000);
const product2 = new Product(2, 'Phone', 500);
const product3 = new Product(3, 'Headphones', 150);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 2);  // 2 Laptops
cart.addItem(product2, 1);  // 1 Phone
cart.addItem(product3, 3);  // 3 Headphones

// Display the cart
console.log('Cart Items:');
cart.displayItems();

// Display the total of items inside the cart
console.log('Total Cart Price: $' + cart.getTotal());

// Remove an item from the cart (remove product2 - Phone)
cart.removeItem(product2.id);

// Display the updated cart
console.log('Updated Cart Items after removal:');
cart.displayItems();
