import { makeObservable, observable, action, runInAction } from "mobx";
import Cookies from "js-cookie";

export interface CartItem {
    itemName: string;
    itemPrice: string;
    itemImage: string;
  }

class CartStore {
       cartItems: CartItem[] = [];
        

        constructor() {
                makeObservable(this, {
                        cartItems: observable,
                        addtoCart: action,
                });

                const savedCartItems = Cookies.get("cartItems");
                if (savedCartItems) {
                    // If there are saved cart items in cookies, parse and assign them
                    this.cartItems = JSON.parse(savedCartItems);
                }
        };

        addtoCart = (item: CartItem) => {

                runInAction(() => {
                        this.cartItems.push(item);
                        Cookies.set("cartItems", JSON.stringify(this.cartItems));
                });


                console.log(this.cartItems);
            
        // addIdtoCart = (id: string) => {
        //         this.cartItems.push(id);
        //         console.log(this.cartItems);
        }
}

export default new CartStore();
