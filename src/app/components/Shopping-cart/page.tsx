import Image from "next/image"
export default function Cart(){
    return(
        <div className="small-container cart-page">
        <table>
            <thead>
                <tr>
                <th>Sản phẩm</th>
                <th>Số lượng</th>
                <th>Tổng</th>
                </tr>
            </thead>
            <tbody>
                <tr>

                <td>
                    <div className="cart-info">
                        <Image src={"/cf.png"} alt="" width={130} height={100} className="img-cart"/>
                        <div className="cart-details">
                            <p>Capuchino</p>
                            <small>Price :$8.60</small><br/>
                            <a>Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="2"/></td>
                <td>$17.20</td>
                </tr>
            </tbody>

            <tbody>
                <tr>

                <td>
                    <div className="cart-info">
                        <Image src={"/salt.jpg"} alt="" width={130} height={100} className="img-cart"/>
                        <div className="cart-details">
                            <p>Salt Lemon</p>
                            <small>Price :$9.60</small><br/>
                            <a>Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"/></td>
                <td>$5000</td>
                </tr>
            </tbody>


            <tbody>
                <tr>

                <td>
                    <div className="cart-info">
                        <Image src={"/machiato.jpg"} alt="" width={130} height={100} className="img-cart"/>
                        <div className="cart-details">
                            <p>Caramel Macchiato</p>
                            <small>Price :$8.60</small><br/>
                            <a>Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"/></td>
                <td>$8.60</td>
                </tr>
            </tbody>

           
        </table>

        <div className="total-price">
            <table>
                <tbody>
                <tr>
                    <td>Subtotal</td>
                    <td>$34.4</td>
                </tr>
                </tbody>
                <tbody>
                    <tr>

                    <td><button className="check">Thanh toán</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );

}