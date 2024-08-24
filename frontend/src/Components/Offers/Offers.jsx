import React from 'react'
import  './Offers.css'
import  datlich from    '../Assets/datlich.jpg'
import  exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h2>Độc Quyền</h2>
                <h2>Ưu Đãi Dành Cho Bạn</h2>
                <p>Chỉ Có Trên Những Sản Phẩm Bán Chạy Nhất</p>
                <button>Kiểm Tra Ngay</button>    
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div> 
    )
}

export default Offers
