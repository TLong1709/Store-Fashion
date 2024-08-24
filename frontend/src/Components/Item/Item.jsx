import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { id, image, name, new_price, old_price } = props;

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='item'>
            <Link to={`/product/${id}`}>
                <img onClick={handleClick} src={image} alt={name} />
            </Link>
            <p>{name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    {new_price} VNĐ
                </div>
                <div className="item-price-old">
                    {old_price} VNĐ
                </div>
            </div>
        </div>
    );
}

export default Item;
