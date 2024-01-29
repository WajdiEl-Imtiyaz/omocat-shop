import { makeObservable, observable, action, runInAction } from "mobx";
import Cookies from "js-cookie";

export interface CartItem {
  itemName: string;
  itemPrice: string;
  itemImage: string;
  quantity: number; // Add a quantity property to the CartItem interface
}

class CartStore {
  cartItems: CartItem[] = [];

  constructor() {
    makeObservable(this, {
      cartItems: observable,
      addtoCart: action,
      removeFromCart: action,
    });

    try {
      var savedCartItems = JSON.parse(localStorage.getItem("cartItems")!);
      if (savedCartItems) {
        this.cartItems = savedCartItems;
      }
    } catch (error) {
      console.log(error);
    }
  }

  addtoCart = (item: CartItem, quantity: number) => {
    // Add a quantity parameter to the addtoCart function
    runInAction(() => {
      const existingItem = this.cartItems.find(
        (cartItem) => cartItem.itemName === item.itemName
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cartItems.push({ ...item, quantity });
      }
      this.saveCartItems();
    });

    console.log(this.cartItems);
  };

  removeFromCart = (itemName: string) => {
    // Add this function
    runInAction(() => {
      this.cartItems = this.cartItems.filter(
        (item) => item.itemName !== itemName
      );
      this.saveCartItems();
    });

    console.log(this.cartItems);
  };

  private saveCartItems() {
    try {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CartStore();
