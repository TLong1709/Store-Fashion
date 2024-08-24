import React from 'react'
import  './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Nhận ưu đãi độc quyền trên Email của bạn</h1>
            <p>Đăng ký nhận bản tin của chúng tôi và luôn cập nhật</p>
            <div>
                <input type="email" placeholder='Địa chi Email của bạn'/>
                <button>Gửi</button>
            </div>
        </div>

    )
}

export default NewsLetter