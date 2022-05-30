import React from 'react'

import { useForm } from "react-hook-form";
import {useState, useContext, useEffect } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import yup from 'pages/Login and Signup/yupGlobal';
import AuthContext from "context/AuthContext";

const CreateBlog = () => {  

  const local = localStorage.getItem("authTokens")
  const [advice, setAdvice] = useState([]);
  
  const [title, setTitle] = useState("");
  const [category, setcategory] = useState("");
  const [content, setcontent] = useState("");
  const [image, setimage] = useState();
  const navigate = useNavigate();

  const newBlog =(e)=>{
    e.preventDefault()
    console.log(category)
    
    let up =new FormData();
     up.append('title', title);
     up.append('category', category.substring(0,1));
     up.append('content', content)
     up.append('image',image)
     fetch('https://nhatphidev2k.pythonanywhere.com/api/v1/post/list/', {
      method:'POST',
      headers: {
       'Authorization': `Bearer ${JSON.parse(local)}` , 
      },
      body:up
    })
    .then(res=>{ 
      console.log(res)
      if(res.status == 201 ){
        toast.success("Tạo blog thành công!");
        navigate("/profile/");
      }
    }
    )
    .catch(errors=> console.log(errors))
  }
  

  const schema = yup.object().shape({
    title: yup.string()
        .required("This is not nul"),
    category: yup.string(),
    // image:yup.string(),
    content: yup.string()
        .required("This is not null"),

  })
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
      mode: 'all',
      resolver: yupResolver(schema)
  });


  
  const getLists = async () => {
    try {
      const response = await fetch("https://nhatphidev2k.pythonanywhere.com/api/v1/categories/");
      const data = await response.json();
      setAdvice(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getLists();
  }, []);
  const lists = () => {
    let list = advice.map((data, index) => (
     
      <option  name='category' key={data.id} id={data.id} >{data.id + " "+ data.name}</option>
     
    ));
    return list;
  };

  return (
   <div className='create '>
   <div className='container'>
    <div className='create__form none'>
    <div className='form'>
      <form >
            <h3>Tạo Blog cho riêng bạn</h3>
            <div className="form-group">
                <p>Tiêu đề</p>
                <input name="title" className='form__title' value={title}  onChange={(e)=> setTitle(e.target.value)}   type="text" placeholder="nhập tiêu đề bài viết" /> 
               
            </div>
            <div className="form-group">
                <p>Hình ảnh</p>
                <input id='image'  name="image" className='form__title'  onChange={(e)=> setimage(e.target.files[0])}   type="file"   /> 
               
            </div>
            <div className="form-group">
                <p>Thể loại</p>
                <select  value={category}  onChange={(e)=>setcategory(e.target.value)}  className='form__category'>
                 {lists()}
                </select>
            </div>
            <div className="form-group">
                <p>Nội dung</p>                    
            <textarea name='content' className='form__content' value={content}  onChange={(e)=>setcontent(e.target.value)}  > </textarea>
            </div>
            <div className="form-group">
                <button onClick={(e)=>newBlog(e)}  className="form-submit" >Đăng bài</button>                      
            </div>
                   
      </form>
      </div>
    </div>

   </div>

   </div>
  )
}

export default CreateBlog