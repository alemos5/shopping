import createDataContext from "./createDataContext";
import productService from "../service/productService";

const productReducer = (state, action) => {
    switch(action.type) {
        case 'get_products':
            return action.payload;
        default:
            return state;
    }
};

const getProducts = dispatch => {
    return async () => {
        const response = await productService.get('/product');

        dispatch({ type: 'get_products', payload: response.data });
    };
};

export const { Context, Provider } = createDataContext(productReducer, { getProducts }, []);