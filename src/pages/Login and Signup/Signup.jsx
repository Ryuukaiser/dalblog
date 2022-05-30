import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import yup from "./yupGlobal";
import AuthContext from "../../context/AuthContext";
export default function Signup() {
  
    const schema = yup.object().shape({
        first_name: yup.string()
          .required("Không được để trống!"),
        last_name: yup.string()
          .required("Không được để trống!"),
        email: yup.string()
          .required("Không được để trống!")
          .email("Không đúng định dạng Email"),
        password: yup.string()
          .required("Không được để trống!")
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Mật khẩu tối thiểu 8 ký tự, 1 chữ cái viết hoa, 1 chữ cái viết thường và 1 số!"),
        password2: yup.string()
          .required("Không được để trống!")
          .oneOf([yup.ref('password'), null], "Mật khẩu không trùng khớp!")
        
    })

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(schema)
    });
    const onSubmit =data => console.log(data);
    let {signinUser} = useContext(AuthContext);


  return (
    <div className="form signupForm">
                <form onSubmit = {handleSubmit(signinUser)}>
                    <h3>Đăng ký</h3>
                    <div className="form-group ">
                    <div className="flex">
                      <div  className="first_name">
                        <p>Họ</p>
                        <input name="first_name" type="text" placeholder="VD: Nguyễn" {...register("first_name")} />      
                      </div>
                      <div  className="last_name">
                        <p>Tên</p>
                        <input name="last_name" type="text" placeholder="VD: Văn A" {...register("last_name")} />  
                      </div>
                      </div>
                      {(errors.first_name || errors.last_name) && <span className="form-message">Không được để trống!</span>} 
                      {/* {errors.last_name && <span className="form-message last">{errors.last_name.message}</span>}  */}
                     
                    </div>
                    <div className="form-group">
                        <p>Email</p>
                        <input name="email" type="text" placeholder="VD: abc@gmail.com"             
                         {...register("email")}
                        /> 
                          {errors.email && <span className="form-message">{errors.email.message}</span>} 
                        
                    </div>
                    <div className="form-group">
                        <p>Mật khẩu</p>
                        <input name="password" type="password" placeholder="Nhập mật khẩu"            
                        {...register("password")} 
                        />
                         {errors.password && <span className="form-message">{errors.password.message}</span>}   
                    </div>
                    <div className="form-group">
                        <p>Nhập lại mật khẩu</p>  
                        <input name="password2" type="password" placeholder="Nhập lại mật khẩu"                         
                       {...register("password2")} 
                        />   
                          {errors.password2 && <span className="form-message">{errors.password2.message}</span>}       
                    </div>
                    <div className="form-group">
                        <button  className="form-submit" >Đăng ký</button>
                    </div>

                </form>
            </div>
  );
}