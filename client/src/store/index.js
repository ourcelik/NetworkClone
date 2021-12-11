import { createStore} from 'vuex';
import { dummyItems,dummyCart } from './dummy';
export default createStore({
    state:{
        items:[],
        cart:{
            items:[],
            total:0,
            shipping:0,
            discount:0,
        }
    },
    mutations:{
        setItems(state,items){
            state.items = items;
        },
        setCart(state,cart){
            state.cart = cart;
        },
        addToCart(state,item){
            let cartItem = state.cart.items.find(cartItem => cartItem.content.id === item.content.id);
            if(cartItem){
                cartItem.content.count++;
                cartItem.content.totalPrice = cartItem.content.count * cartItem.content.price;
            }else{
                state.cart.items.push(item);
            }
            state.cart.total += item.content.price;
        },
        removeFromCart(state,item){
            let cartItem = state.cart.items.find(cartItem => cartItem.content.id === item.content.id);
            if(cartItem){
                if(cartItem.content.count > 1){
                    cartItem.content.count--;
                    cartItem.content.totalPrice = cartItem.content.count * cartItem.content.price;
                }else{
                    state.cart.items.splice(state.cart.items.indexOf(cartItem),1);
                }
                state.cart.total -= item.content.price;
            }
            if(state.cart.items.length === 0){
                state.cart.total = 0;
                state.cart.shipping = 0;
                state.cart.discount = 0;
            }
        },
        resetCart(state){
            state.cart.items = [];
            state.cart.total = 0;
            state.cart.discount = 0;
            state.cart.shipping = 0;

        }
    },
    actions:{
        fetchItems(context){
            //burada veriyi cekecez
                context.commit('setItems',dummyItems);
        },
        fetchCart(context){
            //burada veriyi cekecez
                context.commit('setCart',dummyCart);
        },
        addToCart(context,item){
            console.log(item);
            context.commit('addToCart',item);
        },
        removeFromCart(context,item){
            context.commit('removeFromCart',item);
        },
        resetCart(context){
            context.commit('resetCart');
        }
        
    },
    getters:{
        finalCartPrice(state){
            return state.cart.total + state.cart.shipping - state.cart.discount;
        },
        totalCartPrice(state){
            return state.cart.total;
        },
        discountCartPrice(state){
            return state.cart.discount;
        },
        shippingCartPrice(state){
            return state.cart.shipping;
        },
        
    },
});



  