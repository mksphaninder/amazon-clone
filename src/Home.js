import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
                className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Marketing/070620_SummerSitewidePromo/Gateway_Design4/US-EN_062220_SummerSW_ACQ_GW_Hero_D_3000x1200_CV61b._CB428432023_.jpg"
                alt="" 
            />
            <div className="home__row">
                <Product
                    id="123"
                    title="Shirts and shorts"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/SUMMER_1/GW/CATCARDS/DESKTOP/GW_D_CatCard_AF_M_XGL_2x._SY608_CB431389547_.jpg"
                />

                <Product
                    id="123"
                    title="Shirts and shorts"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/SUMMER_1/GW/CATCARDS/DESKTOP/GW_D_CatCard_AF_M_XGL_2x._SY608_CB431389547_.jpg"
                />
            </div> {/*home__row*/}
            <div className="home__row">
                <Product
                    id="123"
                    title="Shirts and shorts"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/SUMMER_1/GW/CATCARDS/DESKTOP/GW_D_CatCard_AF_M_XGL_2x._SY608_CB431389547_.jpg"
                />

                <Product
                    id="123"
                    title="Shirts and shorts"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/SUMMER_1/GW/CATCARDS/DESKTOP/GW_D_CatCard_AF_M_XGL_2x._SY608_CB431389547_.jpg"
                />

                <Product
                    id="123"
                    title="Shirts and shorts"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/SUMMER_1/GW/CATCARDS/DESKTOP/GW_D_CatCard_AF_M_XGL_2x._SY608_CB431389547_.jpg"
                />
            </div> {/*home__row*/}
            <div className="home__row">
                <Product
                    id="123"
                    title="Shirts and shorts"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/SUMMER_1/GW/CATCARDS/DESKTOP/GW_D_CatCard_AF_M_XGL_2x._SY608_CB431389547_.jpg"
                />
            </div> {/*home__row*/}
        </div>
    )
}

export default Home
