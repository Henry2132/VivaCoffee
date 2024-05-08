import Image from "next/image";
import Link from "next/link";
import { useState } from "react";




export default function ManagerPage() {
  const [isImageVisible, setImageVisible] = useState(false);
  const [isOrder, setOrderVisible] = useState(false);

  const showFormItem = () => {
      setImageVisible(true); // Sửa thành true để hiển thị form
     
  }
  const showFormOrder = () => {
    setOrderVisible(true);
}

  const closeFormItem = () => {
     
      setImageVisible(false);
  }

  const closeFormOrder = () => {
    setOrderVisible(false);
}

    return (
        <div>
          {/* <label className="viva"onClick={handleHomeClick}>Viva Coffee</label> */}
         
            <div id="product-front">
              <h2>SẢN PHẨM CỦA CHÚNG TÔI</h2>
              <ul id="list-pro">
                  <div className="item">
                    <Image src={"/cf.png"} width={200} height={150} alt={""} className="i"/>
                    <h4>Capuchino</h4>
                        <div className="pri">$8.60</div><br/>
                        <button className="btn-item">Đặt hàng</button>
                  </div>

                  <div className="item">
                    <Image src={"/mocha.png"} width={200} height={150} alt={""}className="i"/>
                    <h4>Cold Brew</h4>
                        <div className="pri">$5.60</div><br/>
                        <button className="btn-item">Đặt hàng</button>
                  </div>

                  <div className="item">
                    <Image src={"/coldbrew.png"} width={200} height={150} alt={""}className="i"/>
                    <h4>Milk Coffee</h4>
                        <div className="pri">$7.60</div><br/>
                        <button className="btn-item">Đặt hàng</button>
                  </div>

                  <div className="item">
                    <Image src={"/latte.png"} width={200} height={150} alt={""}className="i"/>
                    <h4>Lattle</h4>
                        <div className="pri">$11.60</div><br/>
                        <button className="btn-item">Đặt hàng</button>
                  </div>

                  <div className="item">
                    <Image src={"/machiato.jpg"} width={200} height={150} alt={""}className="i"onClick={showFormItem}/>
                    <h4>Caramel Macchiato</h4>
                    <h5>"Nhấn vào hình để xem chi tiết"</h5>
                        <div className="pri">$8.60</div><br/>
                        <button className="btn-item">Đặt hàng</button>
                  </div>

                  <div className="item">
                    <Image src={"/neko.jpg"} width={200} height={150} alt={""}className="i"/>
                    <h4>Matcha Mèo</h4>
                        <div className="pri">$18.60</div><br/>
                        <button className="btn-item" onClick={showFormOrder}>Đặt hàng</button>
                  </div>

                  <div className="item">
                    <Image src={"/salt.jpg"} width={200} height={150} alt={""}className="i"/>
                    <h4>Salt Lemon</h4>
                        <div className="pri">$9.60</div><br/>
                        <button className="btn-item">Đặt hàng</button>
                  </div>

                  <div className="item">
                    <Image src={"/sat.jpg"} width={200} height={150} alt={""}className="i"/>
                    <h4>Strawberry Tea</h4>
                        <div className="pri">$8.60</div><br/>
                        <button className="btn-item">Đặt hàng</button>
                  </div>

                  
              </ul>
              <div className="list-page">
                    <div className="number"><a href="">1</a></div>
                    <div className="number"><a href="">2</a></div>
                    <div className="number"><a href="">3</a></div>
                    <div className="number"><a href="">4</a></div>
                </div>
            </div>
          {isImageVisible && (
          <div className="container">

            <div className="container-detail">
            <div className="image-container">
                <Image src="/machiato.jpg" alt="Product Image"width={300} height={300}/>
            </div>
        
            <div className="info-container">
                <h2>Viva Coffee</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="productName">Tên Sản Phẩm:</label>
                        <input type="text" id="productName" name="productName" readOnly value="Caramel Macchiato"/>
                    </div>
        
                    <div className="form-group">
                        <label htmlFor="productDescription">Mô Tả:</label>
                        <textarea id="productDescription" name="productDescription" readOnly>Đường nâu,sữa,cà phê . Một sự kết hợp hoàn hảo</textarea>
                    </div>
        
                    <div className="form-group">
                        <label htmlFor="productPrice">Giá:</label>
                        <input type="text" id="productPrice" name="productPrice" readOnly value="$9.60"/>
                    </div>
        
                    <div className="form-group">
                        <button type="button" onClick={closeFormItem}>Thoát</button>
                    </div>
                </form>
            </div>
        </div>
        
          </div>
            
          )

          }

          {isOrder &&(
            <div className="from-add">
            <div className="container-login">
                <form className="form-login">
                    {/* Cancel */}
                    <span className="close-btnlogin" onClick={closeFormOrder}>X</span>
                    <h2>Đặt hàng</h2>

                    {/* usernam */}
                    <input className="username" type="text" placeholder="Tên đăng nhập" required /><br />

                    {/*adress */}
                    <input className="username" type="text" placeholder="Địa chỉ" required /><br />
                    {/* number */}
                    <input className="username" type="number" placeholder="Số điện thoại" required /><br />
                      <Link href={"/"} onClick={closeFormOrder}>Hãy đăng nhập trước khi đặt hàng</Link><br/>
                    {/* login */}
                    <button className="button-login" type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
          )}
        </div>
    );
}