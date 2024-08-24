import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-logo">
                    <img src={footer_logo} alt="Henry Fashion Logo" />
                    <p>HENRY FASHION</p>
                </div>

                <div className="footer-info">
                    <h4>Thông tin liên hệ</h4>
                    <p>Địa chỉ: Khu Phố 5, An Phú Đông, Quận 12, TP.Hồ Chí Minh</p>
                    <p>Email: thanhlong122006@gmail.com</p>
                    <p>Điện thoại: 0935309377</p>
                </div>

                <div className="footer-map">
                    <h4>Địa chỉ của chúng tôi</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.924561394105!2d105.78361281532425!3d21.03623779284251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1540a7c0d9%3A0xd33cbe0d3dd00048!2sHanoi!5e0!3m2!1sen!2svn!4v1620542674810!5m2!1sen!2svn"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>

                <div className="footer-social-icon">
                    <h4>Kết nối với chúng tôi</h4>
                    <div className="footer-icons-container">
                        <img src={instagram_icon} alt="Instagram" />
                        <p>Instagram: @Henry Fashion</p>
                    </div>
                    <div className="footer-icons-container">
                        <img src={pintester_icon} alt="Pintester" />
                        <p>Pintester: @Henry Fashion</p>
                    </div>
                    <div className="footer-icons-container">
                        <img src={whatsapp_icon} alt="Whatsapp" />
                        <p>Whatsapp: 0935309377</p>
                    </div>
                </div>

                <div className="footer-support">
                    <h4>Tổng đài hỗ trợ miễn phí</h4>
                    <p>Gọi mua hàng 1900.0207 (7h30 - 22h00)</p>
                    <p>Gọi khiếu nại 1900.0110 (7h00 - 21h30)</p>
                    <p>Gọi bảo hành 1900.2441 (7h00 - 21h00)</p>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - Henry Fashion - Nguyễn Thành Long</p>
            </div>
        </div>
    );
};

export default Footer;
