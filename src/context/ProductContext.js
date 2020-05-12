import createDataContext from "./createDataContext";
import productService from "../service/productService";

const productReducer = (state, action) => {
    switch(action.type) {
        case 'get_products':
            return { list: action.payload };
        case 'get_products_by_seller':
            return { ...state, listBySeller: action.payload };
        default:
            return state;
    }
};

const getProducts = dispatch => {
    return async () => {
        const response = await productService.get('/offers');

        dispatch({ type: 'get_products', payload: response.data });
    };
};

const getProductsBySeller = (dispatch) => {
    return async () => {
        const response = await productService.get('/offers/search/categoria/1');

        dispatch({ type: 'get_products_by_seller', payload: response.data });
    }
}

export const { Context, Provider } = createDataContext(productReducer, { getProducts, getProductsBySeller }, []);