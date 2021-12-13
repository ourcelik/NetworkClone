import { createStore} from 'vuex';
import {getCart,addToCart,removeFromCart} from '../services/cartService';
import { getItemsSummary,getItem,getItemsByCategoryId,getItemsBySubCategoryId,getItemsBySubtitleId } from '../services/itemService';

export default createStore({
    state:{
        attractiveItems:[],
        CompleteOutfit:[],
        lastViewedItems:[],
        homeItems:[],
        categoryItems:[],
        cart:{
            items:[],
            total:0,
            shipping:0,
            discount:0,
        },
        item:null
    },
    mutations:{
        setItemsForHome(state,items){
            state.homeItems = items;
        },
        setItemsForAttractive(state,items){
            state.attractiveItems = items;
        },
        setItemsForCompleteOutfit(state,items){
            state.CompleteOutfit = items;
        },
        setItemsForLastViewed(state,items){
            state.lastViewedItems = items;
        },
        setCart(state,cart){
            state.cart = cart;
        },
        addToCart(state,item){
            console.log(item);
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

        },
        setItem(state,item){
            state.item = item;
        },
        setItemsForCategory(state,items){
            state.categoryItems = items;
        }
    },
    actions:{
        fetchItemsForHome(context){
            getItemsSummary().then(res => {
                context.commit('setItemsForHome',res.data);
            });
        },
        fetchItemsForAttractiveItems(context){
            getItemsSummary().then(res => {
                context.commit('setItemsForAttractive',res.data);
            });
        },
        fetchItemsForCompleteOutfit(context){
            getItemsSummary().then(res => {
                context.commit('setItemsForCompleteOutfit',res.data);
            });
        },
        fetchItemsForLastViewedItems(context){
            getItemsSummary().then(res => {
                context.commit('setItemsForLastViewed',res.data);
            });
        },
        fetchCart(context){
            getCart().then(res => {
                context.commit('setCart',res.data);
            });
        },
        addToCart(context,item){
            addToCart(item).then(() => {
                context.commit('addToCart',item);
            });
        },
        removeFromCart(context,item){
            removeFromCart(item.content.id).then(() => {
                context.commit('removeFromCart',item);
            });
            
        },
        resetCart(context){
            context.commit('resetCart');
        },
        fetchItem(context,id){
            getItem(id).then(res => {
                context.commit('setItem',res.data);
            });
        },
        fetchItemsForCategory(context,id){
            console.log("girdifetchItemsForCategory");
            getItemsByCategoryId(id).then(res => {
                context.commit('setItemsForCategory',res.data);
            });
        },
        fetchItemsForSubCategory(context,id){
            console.log("girdifetchItemsForSubCategory");

            getItemsBySubCategoryId(id).then(res => {
                context.commit('setItemsForCategory',res.data);
            });
        },
        fetchItemsForSubTitle(context,itemInfo){
            getItemsBySubtitleId(itemInfo).then(res => {
                console.log(res.data);
                context.commit('setItemsForCategory',res.data);
            });
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



  