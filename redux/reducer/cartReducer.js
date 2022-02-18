let defaultState = {
    selectedItems: {items: [], restaurantname: ''},
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newState ={...state};
            if (action.payload.checkboxValue) {
                
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurantName: action.payload.restaurantName,
                }
            } else {
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            (item) => item.title !== action.payload.title
                        ),
                    ],
                    restaurantName: action.payload.restaurantName,
                };
            }

            return newState;  
        }
        default:
            return state;
    }
};

export default cartReducer;