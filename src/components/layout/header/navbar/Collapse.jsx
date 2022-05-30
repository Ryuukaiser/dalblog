import React from "react";
import { useState, useEffect,useContext } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styleMui } from "components/common/styleMui";

import AuthContext from "context/AuthContext";

function Collapse() {
  // Content.propTypes = {
//   blog: PropTypes.shape({
//         title: PropTypes.string,
//         created_at: PropTypes.string,
//         image: PropTypes.string,
//         content: PropTypes.string,
//         user: PropTypes.string

//   }),
// }
  const {user} = useContext(AuthContext);
  const { logoutUser } = useContext(AuthContext);
  const classes = styleMui();
  const [advice, setAdvice] = useState([]);
  
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
      <a key={data.id} href={`/category/${data.id}/`}>
        {data.name}
      </a>
    ));
    return list;
  };

  return (
    <div className="navbar__collapse">
       <ul>
        <li className="navbar__item ">
          <a className="link" href="/">
            TRANG CHỦ
          </a>
        </li>
        <li className="navbar__item dropdown">
          <a className="link">CHỦ ĐỀ</a>
          <div class="dropdown__a">
            <div className="tg"></div>
            {lists()}
          </div>
        </li>
        <li className="navbar__item">
          <a className="link" href="/about">
            VỀ CHÚNG TÔI
          </a>
        </li>
        <li className="navbar__item">
        {user ? ( <a  href="/profile/"> <AccountCircleIcon  className={classes. icon__user} fontSize="large"></AccountCircleIcon></a>) : (<a className="link" href="/login/">ĐĂNG NHẬP</a> )}
        
        </li> 
      </ul> 
    </div>
    
  );
}

export default Collapse;
