import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../Commponent/CourseItems";
const initialState={
    cartItems:courseItems,
    quantity:3,
    total:0
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{                     //tamamını silme işlemi ıtemların
        clearCart:(state)=>{
            state.cartItems=[];
        },
        removeItem: (state, action) => {                    //silmek istenilen öğeyi silme metodu
            // console.log(action.payload);
            const itemId = action.payload;                //id değerini yakalıyoz butona tıklanınca
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId); 
          },
          increase: (state, action) => {                     //arttırma metodu
            const cartItem = state.cartItems.find(
              (item) => item.id === action.payload
            );
            cartItem.quantity += 1;
          },
          decrease: (state, action) => {                     // azaltma metodu
            const cartItem = state.cartItems.find(
              (item) => item.id === action.payload
            );
            cartItem.quantity -= 1;
          },
          calculateTotal: (state) => {                            //toplam değer 
            let total = 0;
            let quantity = 0;
            state.cartItems.forEach((item) => {
              total += item.quantity * item.price;
              quantity += item.quantity;
            });
            state.quantity = quantity;
            state.total = total;
          },
    }
})
console.log(cartSlice);

export default cartSlice.reducer;
export const {clearCart,removeItem,increase,decrease,calculateTotal}=cartSlice.actions;        //dışarı açma