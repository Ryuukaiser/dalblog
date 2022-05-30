import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useContext } from "react";

import yup from '../Login and Signup/yupGlobal'
import AuthContext from "../../context/AuthContext";
const Change_Password = () => {
    const schema = yup.object().shape({
        password: yup.string()
            .required("Không được để trống!")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Mật khẩu tối thiểu 8 ký tự, 1 chữ cái viết hoa, 1 chữ cái viết thường và 1 số!"),
        confirm_password: yup.string()
            .required("Không được để trống!")
            .oneOf([yup.ref('password'), null], "Does not match with Password!"),
        url:yup.string()
     })
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(schema)
    });

    let {changePassword1}= useContext(AuthContext);
    
      
  return (
    <div className='rs'>
    <div className='rs__formRp'>
     <div className="form">
         <form onSubmit={handleSubmit(changePassword1)} >
            <h3>Thay đổi mật khẩu</h3>
            <div className="form-group">
                 <p>Mật khẩu</p>
                 <input name="password" type="password" placeholder="Nhập mật khẩu" {...register("password")} />
                  {errors.password && <span className="form-message">{errors.password.message}</span>}   
             </div>
             <div className="form-group">
                 <p>Nhập lại mật khẩu</p>  
                 <input name="confirm_password" type="password" placeholder="Nhập lại mật khẩu"                         
                {...register("confirm_password")} 
                 />   
                   {errors.confirm_password && <span className="form-message">{errors.confirm_password.message}</span>}       
             </div>

             <div className="form-group flex">
                 <button  className="form-submit" >Thay đổi</button>
                 <button   className="form-submit" ><a href='/'>Hủy</a></button>
             </div>
        </form>
       
     </div>
    </div>
    </div>

  )
}

export default Change_Password