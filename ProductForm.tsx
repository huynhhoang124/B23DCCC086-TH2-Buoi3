import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import './ProductForm.css';

const ProductForm: React.FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && price > 0) {
            const newProduct = { id: Date.now().toString(), name, price };
            dispatch(addProduct(newProduct));
            setName('');
            setPrice(0);
        }
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <h2>Thêm sản phẩm</h2>
            <input
                type="text"
                placeholder="Tên sản phẩm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Giá sản phẩm"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
            />
            <button type="submit">Thêm sản phẩm</button>
        </form>
    );
};

export default ProductForm;
