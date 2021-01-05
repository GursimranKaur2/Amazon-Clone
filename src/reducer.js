export const initialState ={
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => 
            basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return { ...state, user: action.user };

            
        case "ADD_TO_BASKET":
            // LOGIN FOR ADDING ITEMS TO BASKET
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
         
            case "REMOVE_FROM_BASKET":
                //LOGIC TO REMOVE ITEM FROM BASKET

                // we cloned basket 
                let newBasket = [...state.basket];

                // we checked to see if product exists
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

                if (index >=0) {
                    newBasket.splice(index, 1);
                } else {
                    console.warn(
                        `can't remove product (id: ${action.id}) as its not there`
                    );
                }

                return {...state, basket: newBasket };
                
            default:
                    return state;
    }

};

export default reducer;