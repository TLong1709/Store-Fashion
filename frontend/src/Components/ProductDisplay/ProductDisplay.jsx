import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="Product Thumbnail" />
                    <img src={product.image} alt="Product Thumbnail" />
                    <img src={product.image} alt="Product Thumbnail" />
                    <img src={product.image} alt="Product Thumbnail" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="Main Product" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <p>Đánh giá:  </p>
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_dull_icon} alt="Dull Star" />
                    <p>(5.9k)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">{product.old_price} vnđ</div>
                    <div className="productdisplay-right-price-new">{product.new_price} vnđ</div>
                </div>
                <div className="productdisplay-right-description">
                   Cừa hàng mang đến cho người dùng phong cách thời trang mới mẽ, độc đáo và thoải mái.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Chọn Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>Thêm Vào Giỏ Hàng</button>
                <p className='productdisplay-right-category'><span>Loại :</span>Women, T-Shirt, Crop Top </p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest </p>
            </div>
        </div>
    )
}

export default ProductDisplay;
