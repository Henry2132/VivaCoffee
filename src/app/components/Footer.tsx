import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook,faInstagram,faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";



export default function Footer(){
    return(
        <div id="footer">
            <div className="box">
                <div className="logo">
                    <label className="viva">Viva Coffee</label>
                </div>
                <p>Mang đến cho bạn những trải nghiệm tốt nhất</p>
            </div>
            <div className="box">
                <h2>ABOUT</h2>
                 <ul className="quick-menu">
                    <div className="box-menu">
                        <a href="">Trang chủ</a>
                    </div>

                    <div className="box-menu">
                        <a href="">Sản phẩm</a>
                    </div>

                    <div className="box-menu">
                        <a href="">Chương trình</a>
                    </div>

                    <div className="box-menu">
                        <a href="">Địa chỉ</a>
                    </div>
                 </ul>
            </div>
            <div className="box">
                <h2>CONTACT</h2>
                <div className="font">
                    <Link href=""> <FontAwesomeIcon icon={faFacebook} className="footer-i"/></Link>
                    <Link href=""> <FontAwesomeIcon icon={faFacebookMessenger} className="footer-i"/></Link>
                    <Link href=""> <FontAwesomeIcon icon={faInstagram} className="footer-i"/></Link>
                </div>
            </div>
        </div>

    );
}