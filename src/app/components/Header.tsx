"use client"
import { faUser ,faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";




export default function Header() {
    const [isItemVisible, setItemVisible] = useState(false);

    const showFormItem = () => {
        setItemVisible(true); // Sửa thành true để hiển thị form
    }
    const closeFormItem = () => {
        setItemVisible(false); // Sửa thành false để ẩn form
    }
   
    return(
    <div className="img">
        <div id="header">
                <Link href="/" className="viva"><label className="viva-label">Viva Coffee</label></Link>
                        <div id="menu">
                            <div className="list"><Link href="/" >Trang chủ</Link></div>
                            <div className="list"><a href="">Về chúng tôi</a>
                            <div className="dropdown-ab">
                                <p>HKT</p>
                            </div>
                            </div>
                            <div className="list"><a href="">Sản phẩm</a>
                            <div className="dropdown">
                               <a href="#">Cà phê</a>
                               <a href="#">Trà</a>
                            </div>
                            </div>
                        </div>

                        <div id="search">
                            <input type="text" className="search-inp" placeholder="Tìm kiếm tại đây !!!" />
                            <button className="search-btn">Search</button>
                        </div>
                        <div className="action">
                            <div className="action-icon">
                               <FontAwesomeIcon icon={faUser}className="fa" onClick={showFormItem}/>
                            </div>
                                
                            <div className="action-icon">
                                <Link href="/components/Shopping-cart" ><FontAwesomeIcon icon={faShoppingCart} className="fa"/></Link>
                            </div>
                        </div>      
                        {isItemVisible &&(
                              <div className="from-add">
                              <div className="container-login">
                                  <form className="form-login">
                                      {/* Cancel */}
                                      <span className="close-btnlogin" onClick={closeFormItem}>X</span>
                                      <h2>Đăng nhập</h2>
          
                                      {/* usernam */}
                                      <input className="username" type="text" placeholder="Tên đăng nhập" required /><br />
          
                                      {/*password */}
                                      <input className="password" type="password" placeholder="Mật khẩu" required /><br />
                                        <Link href={"components/Signup"} onClick={closeFormItem}>Nhấn vào đây để đăng ký</Link><br/>
                                      {/* login */}
                                      <button className="button-login" type="submit">Đăng nhập</button>
                                  </form>
                              </div>
        </div>
                        )

                        }     

        </div>

        
    </div>
   
    );
}