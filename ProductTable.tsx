import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteProduct } from '../redux/productSlice';
import './ProductTable.css';

const ProductTable: React.FC = () => {
    const products = useSelector((state: RootState) => state.products.products);
    const dispatch = useDispatch();

    return (
        <div className="product-table">
            <h2>Danh sách sản phẩm</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => dispatch(deleteProduct(product.id))}>Xóa</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>Không có sản phẩm nào</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;