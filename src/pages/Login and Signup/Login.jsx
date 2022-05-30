import React from "react";
import { useForm } from "react-hook-form";
import {useState, useContext } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import yup from "./yupGlobal";
import Signup from "./Signup";
import AuthContext from "context/AuthContext";

export default function Login() {
    const [active, setAcitve]= useState(false)
    const [activeEmail, setActiveEmail]= useState(false);
    let {loginUser} = useContext(AuthContext);
    let {resetPassword}= useContext(AuthContext);

    function checkActive (){
        setAcitve(!active)
    }
    function checkActiveEmail () {
        setActiveEmail(!activeEmail)
        console.log("set",activeEmail)

    }
    const schema = yup.object().shape({
        email: yup.string()
            .required("This is not null")
            .email("Email must be a valid email"),
        password: yup.string()
            .required("This is not null."),
     })
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(schema)
    });
   
    console.log(resetPassword)
  return (
    
    <section className="lg">
    
        <ToastContainer  position="top-center" reverseOrder={false} className="lg__toast" ></ToastContainer>
   
        <div className="lg__main">
        <div className="lg__primary">
            <div className="box signin">
                <h2>Bạn đã có tài khoản?</h2>
                <button className="signinBtn" onClick={checkActive} >Đăng nhập</button>
            </div> 
            <div className="box signup">
                <h2>Bạn chưa có tài khoản?</h2>
                <button className="signupBtn" onClick={checkActive}>Đăng ký</button>
            </div>
        </div>
        <div id="form-1" className= {active ? "lg__formBx active": "lg__formBx "}>
            <div className="form signinForm ">
                <form className={ activeEmail ? "none":""} onSubmit={handleSubmit(loginUser)} >
                    <h3>Đăng nhập</h3>
                    <div className="form-group">
                        <p>Email</p>
                        <input name="email"  type="text" placeholder="VD: abc@gmail.com" {...register("email")}
                        /> 
                        {errors.email && <span className="form-message">{errors.email.message}</span>}
                    </div>
                    <div className="form-group">
                        <p>Mật khẩu</p>
                        <input name="password" type="password" placeholder="Nhập mật khẩu"  {...register("password", { required: true })}
                        />                          
                        {errors.password && <span className="form-message">{errors.password.message}</span>}   
                    </div>
                    <div className="form-group">
                        <button  className="form-submit" >Đăng nhập</button>                      
                    </div>
                    <a href="#" className="forgot" onClick={checkActiveEmail}>Quên mật khẩu?</a>
                </form>


                {/* resetPassword */}
                <form className={activeEmail ? "emailform":"none"} onSubmit={resetPassword} >
                    <h3>Lấy lại mật khẩu</h3>
                    <div className="form-group">
                        <p>Nhập Email </p>
                        <input name="useremail"  type="email"  placeholder="VD: abc@gmail.com" required />
                        {/* {errors.useremail && <span className="form-message">{errors.useremail.message}</span>}    */}
                    </div>
                    <div className="form-group">
                        <button  className="form-submit" >Xác nhận</button>
                        <button type="button" className="form-submit cancel" onClick={checkActiveEmail} >Hủy</button>
                    </div>
                </form>
            </div> 
            <Signup></Signup>
        </div>
        </div>
        </section>
  );
}
