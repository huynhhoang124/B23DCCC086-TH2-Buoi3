import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    const products = useSelector((state: RootState) => state.products.products);

    return (
        <div className="sidebar">
            <h2>Tổng số sản phẩm: {products.length}</h2>
        </div>
    );
};

export default Sidebar;