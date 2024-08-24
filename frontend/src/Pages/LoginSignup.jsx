import React, { useState } from 'react';
import './CSS/LoginSignup.css'; // Import CSS vào đây

const LoginSignup = () => {
    const [state, setState] = useState("Đăng Nhập");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("Chức năng đăng nhập đã thực hiện", formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)
        
        if (responseData.success) {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors);
        }
    };

    const signup = async () => {
        console.log("Chức năng đăng ký đã thực hiện", formData);
        
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)
        
        if (responseData.success) {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors);
        }
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Đăng Ký" && (
                        <input
                            name='username'
                            value={formData.username}
                            onChange={changeHandler}
                            type="text"
                            placeholder='Tên Tài Khoản'
                        />
                    )}
                    <input
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        type="email"
                        placeholder='Địa chỉ Email'
                    />
                    <input
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        type="password"
                        placeholder='Mật khẩu'
                    />
                </div>
                <button onClick={state === "Đăng Nhập" ? login : signup}>
                    {state === "Đăng Nhập" ? "Đăng Nhập" : "Đăng Ký"}
                </button>
                {state === "Đăng Ký" ? (
                    <p className='loginsignup-login'>
                        Bạn chưa có tài khoản? 
                        <span onClick={() => setState("Đăng Nhập")}>Đăng nhập ngay</span>
                    </p>
                ) : (
                    <p className='loginsignup-login'>
                        Tạo tài khoản mới? 
                        <span onClick={() => setState("Đăng Ký")}>Đăng ký ngay</span>
                    </p>
                )}
                <div className="loginsignup-agree">
                    <input type="checkbox" id='agree' name='agree' />
                    <p>Tôi đồng ý với các điều khoản sử dụng và chính sách quyền riêng tư.</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
