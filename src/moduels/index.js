import {combineReducers} from 'redux';

function reducer_cart(currentState, action) {
    if (currentState === undefined) {
        return [{
            id: 0,
            title: "White and Black",
            content: "Born in France",
            price: 120000
        }]
    }
    let newState = [...currentState];

    switch (action.type) {
        case 'ADDCART':
            let temp = newState.find(item => item.id === action.payload.id);
            if (temp) {
                let tempIndex = newState.findIndex(item => item.id === action.payload.id);
                newState[tempIndex].quan = !newState[tempIndex].quan ? 2 : newState[tempIndex].quan + 1;
            } else {
                newState.push(action.payload);
            }
            break;
        case 'PLUS':
            newState = newState.map(item => {
                if (item.id === action.payload) {
                    item.quan = (item.quan) ? Number(item.quan) + 1 : 2
                }
                return item;
            })
            break;
        case 'MINUS':
            newState = newState.map(item => {
                if (item.id === action.payload) {
                    if (item.quan) {
                        item.quan = ((Number(item.quan) - 1) < 0) ? 0 : (Number(item.quan) - 1);
                    } else {
                        item.quan = 0;
                    }
                }
                return item;
            })
            break;
        default:
            break;
    }
    return newState;
}

function reducer_logIn(currentState = true, action) {
    let newState = currentState;
    switch (action.type) {
        case 'LOGOUT':
            newState = false;
            break;
        case 'LOGIN':
            newState = true;
            break;
        default:
            break;
    }
    return newState;
}

const rootReducer = combineReducers({reducer_cart, reducer_logIn});

export default rootReducer;