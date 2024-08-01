import React,{createContext,useReducer,useContext,useCallback} from 'react'
import supabase from '../api/SupabaseClient'
import { myAxios } from '../api/Api'

const ProductsContext = createContext()

const initialState = {
    products: [],
    error: null,
    filteredProducts: [],
    filter: ''
}

function Reducer(state,action){
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return {...state,products:action.payload,filteredProducts: action.payload};

        case 'SET_ERROR':
            return{...state,error: action.payload}

        case 'SET_FILTER':
            const filteredProducts = state.products.filter(product =>
                product.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            return { ...state, filter: action.payload, filteredProducts };

        default:
            return state
    }
}

export function ProductsProvider({children}){
    const [state, dispatch] = useReducer(Reducer, initialState)

    const fetchProducts = useCallback(async () => {
        try {
            const response = await myAxios.get('/products');
            dispatch({type: 'FETCH_PRODUCTS', payload: response.data});
        } catch (error) {
            dispatch({type: 'SET_ERROR', payload: error.message});
        }
    }, []);

    const setFilter = useCallback(async (filter) => {
        dispatch({type: 'SET_FILTER',payload: filter})
    })

    const addProduct = useCallback(async (name, price) => {
        try {
            const { error } = await supabase.from('products').insert([{ name, price }]);
            if (error) throw error;
            await fetchProducts();
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.message });
        }
    }, [fetchProducts]);

    const deleteProduct = useCallback(async (id) => {
        try {
            const { error } = await supabase.from('products').delete().eq('id', id);
            if (error) throw error;
            await fetchProducts();
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.message });
        }
    }, [fetchProducts]);

    return (
        <ProductsContext.Provider value={{ state, fetchProducts, addProduct, deleteProduct,setFilter }}>
            {children}
        </ProductsContext.Provider>
    );
}
export default ProductsContext
export function useProducts(){
    return (useContext(ProductsContext))
}
