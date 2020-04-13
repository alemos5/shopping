import createDataContext from "./createDataContext";
import businessService from "../service/businessService"

const businessReducer = (state, action) => {
    switch(action.type) {
        case 'get_business':
            return action.payload;
        default:
            return state;
    }
};

const getBusiness = dispatch => {
    return async () => {
        const response = await businessService.get('/business');

        dispatch({ type: 'get_business', payload: response.data });
    };
};

export const { Context, Provider } = createDataContext(businessReducer, { getBusiness }, []);