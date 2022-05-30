import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Banner from "../../components/layout/Banner";
import Topic from "../../components/layout/Topic";
import ItemBlog from "../Home/component/ItemBlog";

const Category = () => {
  let [datas, setDatas] = useState([]);
  function usePageViews() {
    let location = useLocation();
    let string = location.pathname.substring(10);
    return string;
  }
  let array = usePageViews();
  let getListCategory = async (id) => {
    let response = await fetch("http://nhatphidev2k.pythonanywhere.com/api/v1/categories/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(array)
    console.log("id", id);
    let data = await response.json();
    console.log(data.category_post);
    setDatas(data.category_post);
    console.log("response", response);
  };

  useEffect(() => {
    getListCategory(array);
  }, []);

  const lists = () => {
    if(datas !== undefined){
    let list = datas.map((data, index) => (
     <ItemBlog myBlog={data} ></ItemBlog>
    ));
    return list;
    }else {
      <div>Không có sản phẩm</div>
    }
  };
  return (
    <div>
    
      <Banner></Banner>
      <section className="blog">
        <div className="container">
          <div className="blog__wrapper">
          <div className="blog__item news">
          <div className="blog__title">
            <h2>Chủ đề</h2>
          </div>
              {lists()}
              </div>
            <div className="blog__item suggests">
              <div className="blog__title">
                <h2>Đề xuất</h2>
              </div>
              <div className="suggests__blog">
                <div className="suggests__item">
                  <div className="suggests__image">
                    <img src="/images/suggests_item.jpg" alt="" />
                  </div>
                  <div className="suggests__title">
                    <h3>Cuộc sống hàng ngày</h3>
                  </div>
                </div>
                <div className="suggests__item">
                  <div className="suggests__image">
                    <img src="/images/suggests_item_2.jpg" alt="" />
                  </div>
                  <div className="suggests__title">
                    <h3>Cuộc sống hàng ngày</h3>
                  </div>
                </div>
                <div className="suggests__item">
                  <div className="suggests__image">
                    <img src="/images/suggests_item_3.jpg" alt="" />
                  </div>
                  <div className="suggests__title">
                    <h3>Cuộc sống hàng ngày</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Topic></Topic>
    </div>
  );
};

export default Category;
