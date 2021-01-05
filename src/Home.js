import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB407694131_.jpg"
            alt=""/>
            
            {/* products- (properties) id, title, price, rating, image */}
           <div className="home__row">
           <Product 
                id="1"
                title="The Learn Startup: How Constant Innovation Creates Radically Successful Business PaperBack"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/81HK1DyQEQL._AC_UL320_.jpg"
                />
                <Product 
                id="2"
                title="Corelle Coordinates by Reston Lloyd 8-Piece Utensil Set, Simple Lines"
                price={9.80}
                rating={4}
                image="https://ae01.alicdn.com/kf/Ha97b74806edf47d4a310df0fe7e47f34G/Kitchen-Utensils-Wood-Handle-Silica-Gel-Kitchenware-11-Sets-Cooking-Utensils-Non-Stick-Pot-Shovel-Kitchenware.jpg"
                />
           </div>

           <div className="home__row">
           <Product 
                id="3"
                title="Smart Watch for Girl Pink A1, BT 3.0, Compatible with All Android and iOS Phone"
                price={36}
                rating={4}
                image="https://www.buyersparade.com/wp-content/uploads/2019/11/2019-New-Women-Waterproof-Smart-Watch-T80-Bluetooth-Smartwatch-For-Apple-IPhone-Xiaomi-Heart-Rate-Monitor.jpg"
                />
                <Product 
                id="4"
                title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (White)"
                price={132.9}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61UnzwX%2B4NL._SX466_.jpg"
                />
                 <Product 
                id="5"
                title="Samsung Galaxy A71 ( 8GB RAM, 128GB Storage) with No Cost EMI/Easy Exchange Offers"
                price={122.68}
                rating={5}
                image="https://www.parallelimported.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/v/cvbcbcvbc_1.png"
                />
           </div>

           <div className="home__row">
           <Product 
                id="6"
                title="Angel Bear 29 Pieces Professional Sketching & Drawing Art Tool Kit with Graphite Pencils, Charcoal Pencils, Paper Erasable Pen, Craft Knife-Lightwish (with Canvas Rolling Pouch)"
                price={13.32}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/61LGBZ61wUL._SX569_.jpg"/>
                <Product 
                id="7"
                title="Swadesi Stuff N95 Filter Multi Color Face Mask, Reusable, Washable CE & ISO Certified to Protect Mouth Droplets, Dust and Pollution, Pack of 5 Mask"
                price={11.32}
                rating={5}
                image="https://i5.walmartimages.com/asr/2c069523-2039-4248-840d-749e7d1d4d47.f5ab84ca7f3b3d75d13a82fa31f164fd.jpeg"            
                />
           </div>

           <div className="home__row">
           <Product 
                id="8"
                title="TCL 138.7 cm (55 inches)  AI 4K Ultra HD Smart Certified Android LED TV 55P8S | Supreme with Farfield Voice Search (Black)"
                price={571.57}
                rating={3}
                image="https://thegoodguys.sirv.com/products/50064479/50064479_624248.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90"
               />
               
           </div>
            
        </div>
    );
}

export default Home;
