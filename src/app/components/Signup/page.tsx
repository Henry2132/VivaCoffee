"use client";
import { useState } from "react";

export default function Order(){
  const [isItemVisible, setItemVisible] = useState(false);

  const showFormItem = () => {
      setItemVisible(true); // Sửa thành true để hiển thị form
  }

  const closeFormItem = () => {
      setItemVisible(false); // Sửa thành false để ẩn form
  }
  return(
    <div className="signup-container">

        <form className="signup-form">
        <h1>Đăng ký</h1>
          
                   
           <input className="user-name"type="text" placeholder="Tên đăng nhập" required/><br/>          
           
           <input className="pass-word"type="text" placeholder="Mật khẩu" required/><br/>  
           
           <input className="number"type="number" placeholder="Số điện thoại" required/><br/>  
           
           
           
           <button className="btn-signup">Đăng ký</button><br/>
           
        </form>
    </div>


  );
}
