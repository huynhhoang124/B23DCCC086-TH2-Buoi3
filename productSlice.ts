import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
    id: string;
    name: string;
    price: number;
};

interface ProductState {
    products: Product[];
    currentPage: number;
    itemsPerPage: number;
}

const initialState: ProductState = {
    products: [],
    currentPage: 1,
    itemsPerPage: 5,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        editProduct: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
});

export const { addProduct, editProduct, deleteProduct, setPage } = productSlice.actions;
export default productSlice.reducer;
