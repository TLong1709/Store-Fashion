import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/allproducts');
            if (response.ok) {
                const data = await response.json();
                setAllProducts(data);
            } else {
                console.error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const removeProduct = async (id) => {
        try {
            await fetch('http://localhost:4000/removeproduct', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id })
            });
            await fetchInfo();
        } catch (error) {
            console.error('Error removing product:', error);
        }
    };

    return (
        <div className='list-product'>
            <h1>Danh sách tất cả sản phẩm</h1>
            <div className="listproduct-format-main">
                <p>Sản phẩm</p>
                <p>Tiêu đề</p>
                <p>Giá củ</p>
                <p>Giá mới</p>
                <p>Danh mục</p>
                <p>Xóa</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allProducts.map((product,index) => {
                    return  <div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <p>{product.name}</p>
                        <p>{product.old_price} VNĐ</p>
                        <p>{product.new_price} VNĐ</p>
                        <p>{product.category}</p>
                        <img onClick={() => { removeProduct(product.id) }} className='listproduct-remove-icon' src={cross_icon} alt="Remove" />
                    </div>
                })}
                <hr />
            </div>
        </div>
    );
};

export default ListProduct;
