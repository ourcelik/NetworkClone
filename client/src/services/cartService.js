import { appAxios } from '../utils/appAxios';
    

    export async function getCart() {
        return appAxios.get('/cart');
    }

    export async function addToCart(item) {
        return appAxios.post('cart/addItem', item);
    }

    export async function removeFromCart(id) {
        return appAxios.post('cart/removeItem',{id});
    }
