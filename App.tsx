import React from 'react';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import Sidebar from './components/Sidebar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <ProductForm />
        <ProductTable />
      </div>
    </div>
  );
};

export default App;