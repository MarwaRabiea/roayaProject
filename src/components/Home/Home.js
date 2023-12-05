// HomePage.js

import React from 'react';
import './Home.css';  // Import the CSS file for styling
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <header className="header">
                <h1>مرحباً في رؤية</h1>
                <p>عايز جملة طويله فيها حوالي 12 كلمة عشان شكلها يبقي حلو</p>
            </header>

            <section class="home" id="home">
                <div class="image" style={{ marginTop: "25px" }} >
                    <img src={require('./d.jpeg')} alt="" />
                </div>

                <div class="content">
                    <p style={{ fontFamily: 'Marhey', fontSize: '250%' }}>استثمر في مستقبلك<br></br>اختر كتب دراستك من تشكيلتنا وامضِ نحو النجاح</p>
                    <Link to="/" class="btn2"><b style={{ fontFamily: 'Marhey' }}>ابدأ الان</b></Link>
                </div>

            </section>



            <div className="home-container">

                <section className="categories-section">
                    <h1 className='heading'>الأقسام</h1>
                    <div className="category-cards">
                        {/* Add category cards here */}
                        
                       
                    </div>
                </section>





                <section className="main-content">
                    <h1 className='heading'>الكتب الأكثر مبيعاً</h1>
                    <div className="featured-items">
                        {/* Add featured content here */}

                        <div class="single-item">
                            <div class="left-set">
                            <img src="image/5" alt="" />
                            </div>
                            <div class="right-set">
                                <div class="name"><h1>لأنك اللَه</h1></div>
                                <div class="subname">رحلة إلى السماء السابعة</div>
                                <div class="price">65 EGP</div>
                                <div class="description">
                                    <p>
                                    كتاب يتحدث عن بعض أسماء الله الحسنى وكيف نعيشها في حياتنا حرص المؤلف أن يكون الكتاب مناسباً لمن هم متوسطي الثقافة، ويكون ناسباً للمحتاج و المريض و السليم                                    </p>
                                </div>
                                {/* <div class="color">
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div> */}
                                <button class="add-to-cart-button">ADD TO CART</button>
                            </div>
                        </div>



                        <div class="single-item">
                            <div class="left-set">
                                <img className='imag1' src="http://images.nike.com/is/image/DotCom/PDP_HERO_S/NIKE-YA-LEBRON-MAX-AIR-BP-BA5124_660_A.jpg" alt="" />
                            </div>
                            <div class="right-set">
                                <div class="name"><h1> مع النبي</h1></div>
                                <div class="subname">صلى اللَه عليه وسلم</div>
                                <div class="price">75 EGP</div>
                                <div class="description">
                                    <p>
                                   !الحِكايةُ أدبٌ جميل فكيف إذا كانتْ في حضرة نبيّ ؟
                                    والإصغاءُ لها ماتعٌ فكيف إذا كان راويها سيّدُ الأولين والآخرين ؟
                                   هُنا حَكايا لا تُشبه الحَكايا لأنّ راويها لا يُشبه الرّواة !
                                    و الذي ما ضلَّ وما غوَى وما نطقَ يوماً عن هوَى " علّمه شديدُ القُوَى " فجاءنا بحديثٍ " إنْ هو إلا وحيٌ يُوحَى
                                    </p>
                                </div>
                                {/* <div class="color">
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div> */}
                                <button class="add-to-cart-button">ADD TO CART</button>
                            </div>
                        </div>
                    </div >

                </section >







                <section className="about-section">
                    <h1 className='heading'>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi id varius ultrices,
                        arcu felis facilisis arcu, vel malesuada metus leo non nibh. Nulla facilisi.
                    </p>
                </section>

            </div >
        </div >

    );
}

export default HomePage;
