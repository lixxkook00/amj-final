import React , {useState} from 'react'
import './ShopPage.scss'

export default function ShopPage() {

    const [currentTag,setCurrentTag] = useState("avatar")

    return (
        <div className="shop container">
            <div className="shop-control row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                    <div onClick={() => setCurrentTag("avatar")} className={`userinfor-item ${currentTag === "avatar" ? "active" : ""}`}>
                        AVATAR
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                    <div onClick={() => setCurrentTag("ticket")} className={`userinfor-item ${currentTag === "ticket" ? "active" : ""}`}>
                        TICKET
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                    <div onClick={() => setCurrentTag("character")} className={`userinfor-item ${currentTag === "character" ? "active" : ""}`}>
                        CHARACTERS 
                    </div>
                </div>
            </div>

            {
                currentTag === "avatar"
                &&
                <div className="shop-list row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-avt.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-avt.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-avt.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-avt.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-avt.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-avt.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-avt.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-avt.png" alt="" />
                        </div>
                    </div>
                </div>
            }
    
            {
                currentTag === "ticket"
                &&
                <div className="shop-list row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-sticket.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-sticket.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-sticket.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-sticket.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-sticket.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-sticket.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-sticket.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-sticket.png" alt="" />
                        </div>
                    </div>
                </div>
            }

            {
                currentTag === "character"
                &&
                <div className="shop-list row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-char.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-char.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-char.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-char.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-char.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-char.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-char.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div className="shop-item">
                            <img src="./images/shop-char.png" alt="" />
                        </div>
                    </div>
                </div>
            }

            

        </div>
    )
}
