// HomePage.js

import React from 'react';
import './Home.css';  // Import the CSS file for styling
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <header className="header">
                <h1>مرحباً في رؤية</h1>
                <p>
"يُعَدّ هذا الموقع وجهة رائدة لاستكشاف العلوم الإسلامية بلغة سهلة وواضحة. يقدم محتوى شامل يشمل القرآن والسنة وتعاليم الصحابة بأسلوب سلس، يُسهم في فهم عميق للتعاليم الدينية. يُعَزز التواصل الفعّال مع المعلومات، جعله مصدراً قيماً للتعلم والتثقيف الإسلامي."
 </p>
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
                        <div class="cards">
                            <div class="card card-1">
                                <div class="card__icon"><i class="fa fa-book"></i></div>
                                <p class="card__exit"><i class="fas fa-times"></i></p>
                                <h2 class="card__title">كتب في السيرة النبويه والأحاديث الشريفه</h2>
                                <p class="card__apply">
                                    <a class="card__link" href="#">shop now <i class="fas fa-arrow-right"></i></a>
                                </p>
                            </div>
                            <div class="card card-2">
                                <div class="card__icon"><i class="fas fa-bolt"></i></div>
                                <p class="card__exit"><i class="fas fa-times"></i></p>
                                <h2 class="card__title">كتب عن الصحابه وتعاليمهم القيمة</h2>
                                <p class="card__apply">
                                    <a class="card__link" href="#">shop Now <i class="fas fa-arrow-right"></i></a>
                                </p>
                            </div>
                            <div class="card card-3">
                                <div class="card__icon"><i class="fas fa-bolt"></i></div>
                                <p class="card__exit"><i class="fas fa-times"></i></p>
                                <h2 class="card__title">كتب في تفسير القرآن الكريم </h2>
                                <p class="card__apply">
                                    <a class="card__link" href="#">shop Now <i class="fas fa-arrow-right"></i></a>
                                </p>
                            </div>
                        </div>
                       
                    </div>
                </section>





                <section className="main-content">
                    <h1 className='heading'>الكتب الأكثر مبيعاً</h1>
                    <div className="featured-items">
                        {/* Add featured content here */}

                        <div class="single-item" id ='single'>
                            <div class="left-set">
                            <img  className='imag1' src={require('../../image/5.webp')}alt="" />
                            </div>
                            <div class="right-set">
                                <div class="name"><h1>لأنك اللَه</h1></div>
                                <div class="subname">علي بن جابر الفيفي</div>
                                <div class="price">105 EGP</div>
                                <div class="description">
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



                        <div class="single-item"  id ='single'>
                            <div class="left-set">
                                <img className='imag1' src={require('../../image/8.png')}alt="" />
                            </div>
                            <div class="right-set">
                                <div class="name"><h1> مع النبي</h1></div>
                                <div class="subname">أدهم الشرقاوي</div>
                                <div class="price">85 EGP</div>
                                <div class="description">
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






                      <section>
                        <h2>About Us</h2>
                        <p>
                         </p>
                    </section>

                    <section>
                        </section>
  


                <footer>
                <h2>Our Team</h2>
                        <p>
Rahaf Mamdouh   </p>
                        <p>
Marwa Rabiea    </p>
                   
                </footer>



            </div >
        </div >

    );
}

export default HomePage;
