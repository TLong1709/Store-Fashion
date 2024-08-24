import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount, placeOrder } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    console.log("Placing order...");
    placeOrder(); // Đặt hàng và xóa giỏ hàng
  };

  return (
    <form onSubmit={handlePlaceOrder} className="font">
      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Hình</p>
          <p>Tiêu Đề</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Tổng</p>
          <p>Xóa</p>
        </div>
        <hr />
        {all_product.length > 0 ? (
          all_product.map((e) => {
            const cartItemCount = cartItems[e.id];
            if (cartItemCount > 0 && e.new_price) {
              return (
                <div key={e.id}>
                  <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className="cartitems-product-icon" />
                    <p>{e.name}</p>
                    <p>{(e.new_price * cartItemCount * 10000).toLocaleString()} đồng</p>
                    <button className="cartitems-quantity">{cartItemCount}</button>
                    <p>{e.category}</p>
                    <img
                      className="cartitems-remove-icon"
                      src={remove_icon}
                      onClick={() => removeFromCart(e.id)}
                      alt="Remove"
                    />
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>Không có sản phẩm trong giỏ hàng</p>
        )}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Tổng tiền </h1>
            <div>
              <div className="cartitems-total-item">
                <p>Giá</p>
                <p>{(totalAmount * 1).toLocaleString()} VNĐ</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Phí Vận Chuyển</p>
                <p>Miễn phí</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Tổng tiền cần thanh toán:</h3>
                <h3>{(totalAmount * 1).toLocaleString()} VNĐ</h3>
              </div>
            </div>
            <button type="submit">Xác Nhận Đặt Hàng</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CartItems;
