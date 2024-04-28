import React from 'react'
import './Main.css'
import banner from '../Assets/banner.jpg'
import AddData from '../AllData/AddData';
import Offers from '../Offers/Offers';
import NewCollection from '../NewCollection/NewCollection';
import NewsLetter from '../NewsLetter/NewsLetter';

const Main = () => {
    return (
        <div className='main'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <p>SPRING / SUMMER COLLECTION</p>
                            <h5>Get up to 30% Off New Arrivals</h5>
                            <button>Shop now</button>
                    </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        <p>SPRING / SUMMER COLLECTION</p>
                            <h5>Get up to 30% Off New Arrivals</h5>
                            <button>Shop now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        <p>SPRING / SUMMER COLLECTION</p>
                            <h5>Get up to 30% Off New Arrivals</h5>
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="main-left">
                <div>
                    <div className="banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="banner_item align-items-center" style={{backgroundImage:"url('https://themewagon.github.io/coloshop/images/banner_1.jpg')"}}>
                                        <div className="banner_category">
                                            <a href="categories.html">women's</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="banner_item align-items-center" style={{backgroundImage:"url('	https://themewagon.github.io/coloshop/images/banner_2.jpg')"}}>
                                        <div className="banner_category">
                                            <a href="categories.html">accessories's</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="banner_item align-items-center" style={{backgroundImage:"url('https://themewagon.github.io/coloshop/images/banner_3.jpg')"}}>
                                        <div className="banner_category">
                                            <a href="categories.html">men's</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hand-hand-icon">
                    <AddData/>
                    <Offers/>
                    <NewCollection/>
                    <NewsLetter/>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main