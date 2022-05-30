import React from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {

  const navigate = useNavigate();
 
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null
  );
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens")) : null
  );

  let loginUser = async (e) => {

    console.log("form", e);
    let response = await fetch("http://nhatphidev2k.pythonanywhere.com/user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: e.email, password: e.password })
    });
    let data = await response.json();
    console.log("data", data);
    console.log("response", response);
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.Token.access));
      localStorage.setItem("authTokens", JSON.stringify(data.Token.access));
       navigate("/");
    } else {
      toast.error("Tài khoản hoặc mật khẩu không đúng!");
    }
  };
  let signinUser = async (e) => {
    console.log("form-resg", e);
    let response = await fetch("http://nhatphidev2k.pythonanywhere.com/user/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: e.first_name,
        last_name: e.last_name,
        email: e.email,
        password: e.password,
      })
    });
    let data = await response.json();
    console.log("data", data);
    console.log("response", response);
    if (response.status === 201) {
      navigate("/login/");
      toast.success("Đăng ký thành công! Vui lòng đăng nhập!");
      
    } else {
      toast.error("Email đã tồn tại!");
    }
  };
  let resetPassword = async (e) => {
    e.preventDefault();
    console.log("form-resg", e.target.useremail.value);
    let response = await fetch("http://nhatphidev2k.pythonanywhere.com/user/send-reset-password-email/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: e.target.useremail.value })
    });
    let data = await response.json();
    console.log("data", data);
    console.log("response", response);
    if (response.status === 200) {
      toast.success("Thành công! Vui lòng kiểm tra email của bạn!");
    } else {
      console.log("Wrong");
    }
  };
  let changePassword = async (e) => {
    // e.preventDefault()
    console.log("test", e.url);
    let response = await fetch("http://nhatphidev2k.pythonanywhere.com/user/reset-password/" + e.url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ password: e.password, password2: e.confirm_password })
    });
    let data = await response.json();
    console.log("data", data);
    console.log("response", response);
    if (response.status === 200) {
      navigate("/login");
      toast.success("Thành công! Vui lòng đăng nhập lại");
    } else {
      console.log("Wrong");
    }
  };

  let changePassword1 = async (e) => {
    console.log(e)
      const local = localStorage.getItem("authTokens")
      try {
        const response = await fetch("http://nhatphidev2k.pythonanywhere.com/user/changepassword/", 
        {
          method: "PATCH",
          headers: {
            'Authorization': `Bearer ${JSON.parse(local)}` , 
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ password: e.password})  
        });
        const data = await response.json();
        console.log(data)
      } catch (error) {
        console.log("error", error);
      }
    };
  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };





  let updateToken = async () => {
    let response = fetch("http:/ddang nhap o day/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();
  };


  const getBlog = async (e) => {
    const local = localStorage.getItem("authTokens")
    console.log("data",e.image[0])
    let array ={category: e.category, title: e.title, content: e.content, image: e.image[0]}
    console.log(array)
    try {
      const response = await fetch("http://nhatphidev2k.pythonanywhere.com/api/v1/post/list/", 
      {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${JSON.parse(local)}` , 
        
        },
        body: array 
      });
      const data = await response.json();
      console.log(data)
    } 
    catch (error) {
      console.log("error", error);
    }
  };


  let contextData = {
    user: user,
    loginUser: loginUser,
    signinUser: signinUser,
    logoutUser: logoutUser,
    resetPassword: resetPassword,
    changePassword: changePassword,
    changePassword1:changePassword1,
    getBlog:getBlog
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};
