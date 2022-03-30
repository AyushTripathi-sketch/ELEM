/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import { Navbar, Footerr } from "../components";
import { Layout } from "antd";
import "../App.css";
import DSPN from "../images/DSPN.jpg"
import "./DSPN_General.css"
import AOS from "aos";
import signin from "../images/sign.gif"

const { Content } = Layout;
export default function AboutDSPN() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Content className="site-layout-content" style={{background:"linear-gradient(to bottom, #8BDFC7 20%, #458986 60%, #3c7875 80%, #346765 100%)" }}>

            {/* ....................... */}
            {/* <!-- Slider --> */}
            <div id="slider" style={{ zIndex: "0" }}>
              <div class="slides">
                <div class="slider">
                  <div class="legend"></div>
                  <div class="content">
                    <div class="content-txt">
                      <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2.5rem", textAlign: "center", fontWeight: "700", padding: "2% 0%" }}>Lorem ipsum dolor</h1>
                      {/* <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2> */}
                    </div>
                  </div>
                  <div class="dspnimage">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/VVHE6VHMAW.jpg" />
                  </div>
                </div>
                <div class="slider">
                  <div class="legend"></div>
                  <div class="content">
                    <div class="content-txt">
                      <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2.5rem", textAlign: "center", fontWeight: "700", padding: "2% 0%" }}>Lorem ipsum dolor</h1>
                      {/* <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2> */}
                    </div>
                  </div>
                  <div class="dspnimage">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/AKWVXIXFA8.jpg" />
                  </div>
                </div>
                <div class="slider">
                  <div class="legend"></div>
                  <div class="content">
                    <div class="content-txt">
                      <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2.5rem", textAlign: "center", fontWeight: "700", padding: "2% 0%" }}>Lorem ipsum dolor</h1>
                      {/* <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2> */}
                    </div>
                  </div>
                  <div class="dspnimage">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/TPLJK7JPRR.jpg" />
                  </div>
                </div>
                <div class="slider">
                  <div class="legend"></div>
                  <div class="content">
                    <div class="content-txt">
                      <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2.5rem", textAlign: "center", fontWeight: "700", padding: "2% 0%" }}>Lorem ipsum dolor</h1>
                      {/* <h2>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</h2> */}
                    </div>
                  </div>
                  <div class="dspnimage">
                    <img src="https://cdn.stocksnap.io/img-thumbs/960w/XJ2BKV9ASS.jpg" />
                  </div>
                </div>
              </div>
              <div class="switch">
                <ul>
                  <li>
                    <div class="on"></div>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>




            {/* ............................... */}



            <div className="container">
              <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "3.5rem", textAlign: "center", fontWeight: "700", padding: "2% 0%" }}>ELEMart</div>
              <div class="row">
                <div class="col-md-12">
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2.0rem", fontWeight: "700", padding: "2% 0%" }}>Featured Products</div>
                  <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                    {/* <!-- Carousel indicators --> */}
                    <ol class="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    {/* <!-- Wrapper for carousel items --> */}
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="row">
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/ipad.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Apple iPad</h4>
                                <p class="item-price"><strike>$400.00</strike> <span>$369.00</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/headphone.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Sony Headphone</h4>
                                <p class="item-price"><strike>$25.00</strike> <span>$23.99</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/macbook-air.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Macbook Air</h4>
                                <p class="item-price"><strike>$899.00</strike> <span>$649.00</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/nikon.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Nikon DSLR</h4>
                                <p class="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="row">
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/play-station.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Sony Play Station</h4>
                                <p class="item-price"><strike>$289.00</strike> <span>$269.00</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/macbook-pro.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Macbook Pro</h4>
                                <p class="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/speaker.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Bose Speaker</h4>
                                <p class="item-price"><strike>$109.00</strike> <span>$99.00</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/galaxy.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Samsung Galaxy S8</h4>
                                <p class="item-price"><strike>$599.00</strike> <span>$569.00</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="row">
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/iphone.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Apple iPhone</h4>
                                <p class="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/canon.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Canon DSLR</h4>
                                <p class="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/pixel.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Google Pixel</h4>
                                <p class="item-price"><strike>$450.00</strike> <span>$418.00</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="thumb-wrapper">
                              <div class="img-box">
                                <img src="/examples/images/products/watch.jpg" class="img-fluid" alt="" />
                              </div>
                              <div class="thumb-content">
                                <h4>Apple Watch</h4>
                                <p class="item-price"><strike>$350.00</strike> <span>$330.00</span></p>
                                <div class="star-rating">
                                  <ul class="list-inline">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                  </ul>
                                </div>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Carousel controls --> */}
                    <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                      <i class="fa fa-angle-left"></i>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                      <i class="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Product List */}

              <section class="section-products">
                <div class="container">
                  <div class="row justify-content-center text-center">
                    <div class="col-md-8 col-lg-6">
                      <div class="header">
                      <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2.0rem", fontWeight: "700", padding: "2% 0%" }}>Popular Products</div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    {/* <!-- Single Product --> */}
                    <div class="col-md-6 col-lg-4 col-xl-3">
                      <div id="product-1" class="single-product">
                        <div class="part-1">
                          <img src="https://rukminim1.flixcart.com/image/416/416/l0igvww0/refrigerator-new/s/t/i/-original-imagcafgreta8nzt.jpeg?q=70" style={{maxHeight:"100%", maxWidth:"100%"}} alt=""/>
                          <ul>
                            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i class="fas fa-heart"></i></a></li>
                            <li><a href="#"><i class="fas fa-plus"></i></a></li>
                            <li><a href="#"><i class="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                        <div class="part-2">
                          <h3 class="product-title">Godrej Refridgerator</h3>
                          
                          <h4 class="product-price">120 CC</h4>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Product --> */}
                    <div class="col-md-6 col-lg-4 col-xl-3">
                      <div id="product-2" class="single-product">
                        <div class="part-1">
                        <img src="https://m.media-amazon.com/images/I/71PpAFGSYyL._SY741_.jpg" style={{maxHeight:"100%", maxWidth:"100%"}} alt=""/>
                          <span class="discount">25% off</span>
                          
                          <ul>
                            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i class="fas fa-heart"></i></a></li>
                            <li><a href="#"><i class="fas fa-plus"></i></a></li>
                            <li><a href="#"><i class="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                        <div class="part-2">
                          <h3 class="product-title">Whirlpool Refridgerator</h3>
                          <h4 class="product-old-price">150 CC</h4>
                          <h4 class="product-price">112.5 CC</h4>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Product --> */}
                    <div class="col-md-6 col-lg-4 col-xl-3">
                      <div id="product-3" class="single-product">
                        <div class="part-1">
                        <img src="https://m.media-amazon.com/images/I/71VrKE7KqmL._SX679_.jpg" style={{maxHeight:"100%", maxWidth:"100%"}} alt=""/>
                          <ul>
                            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i class="fas fa-heart"></i></a></li>
                            <li><a href="#"><i class="fas fa-plus"></i></a></li>
                            <li><a href="#"><i class="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                        <div class="part-2">
                          <h3 class="product-title">Havells Fan</h3>
                          <h4 class="product-price">25 CC</h4>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Product --> */}
                    <div class="col-md-6 col-lg-4 col-xl-3">
                      <div id="product-4" class="single-product">
                        <div class="part-1">
                        
                        <img src="https://m.media-amazon.com/images/I/81od9GbumhL._SX679_.jpg" style={{maxHeight:"100%", maxWidth:"100%"}} alt=""/>
                          {/* <span class="new">new</span> */}
                          <ul>
                            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i class="fas fa-heart"></i></a></li>
                            <li><a href="#"><i class="fas fa-plus"></i></a></li>
                            <li><a href="#"><i class="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                        <div class="part-2">
                          <h3 class="product-title">Prestige Induction Cooker</h3>
                          <h4 class="product-price">18 CC</h4>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Product --> */}
                    <div class="col-md-6 col-lg-4 col-xl-3">
                      <div id="product-1" class="single-product">
                      
                      <div class="part-1">
                      <img src="https://m.media-amazon.com/images/I/61txU3NE6aL._SX679_.jpg" style={{maxHeight:"100%", maxWidth:"100%"}} alt=""/>
                          <ul>
                            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i class="fas fa-heart"></i></a></li>
                            <li><a href="#"><i class="fas fa-plus"></i></a></li>
                            <li><a href="#"><i class="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                        <div class="part-2">
                          <h3 class="product-title">Whirlpool Air Conditioner</h3>
                          {/* <h4 class="product-old-price">$79.99</h4> */}
                          <h4 class="product-price">359 CC</h4>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Product --> */}
                    <div class="col-md-6 col-lg-4 col-xl-3">
                      <div id="product-2" class="single-product">
                        <div class="part-1">
                       
                        <img src="https://m.media-amazon.com/images/I/61x0Qnm08HS._SX679_.jpg" style={{maxHeight:"100%", maxWidth:"100%"}} alt=""/>
                          {/* <span class="discount">15% off</span> */}
                          <ul>
                            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i class="fas fa-heart"></i></a></li>
                            <li><a href="#"><i class="fas fa-plus"></i></a></li>
                            <li><a href="#"><i class="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                        <div class="part-2">
                          <h3 class="product-title">Philips Induction Cooker</h3>
                          <h4 class="product-price">29 CC</h4>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Product --> */}
                    <div class="col-md-6 col-lg-4 col-xl-3">
                      <div id="product-3" class="single-product">
                        <div class="part-1">
                        
                        <img src="https://images.samsung.com/is/image/samsung/in-convection-mc32j7035ct-mc32j7035ct-tl-frontsilver-145994834?$684_547_PNG$" style={{maxHeight:"100%", maxWidth:"100%"}} alt=""/>
                          <ul>
                            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i class="fas fa-heart"></i></a></li>
                            <li><a href="#"><i class="fas fa-plus"></i></a></li>
                            <li><a href="#"><i class="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                        <div class="part-2">
                          <h3 class="product-title">Samsung Oven</h3>
                          <h4 class="product-price">150 CC</h4>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Single Product --> */}
                    <div class="col-md-6 col-lg-4 col-xl-3">
                      <div id="product-4" class="single-product">
                        <div class="part-1">
                       
                        <img src="https://m.media-amazon.com/images/I/71Sh4Tra6xL._SX679_.jpg" style={{maxHeight:"100%", maxWidth:"100%"}} alt=""/>
                          <span class="new">new</span>
                          <ul>
                            <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i class="fas fa-heart"></i></a></li>
                            <li><a href="#"><i class="fas fa-plus"></i></a></li>
                            <li><a href="#"><i class="fas fa-expand"></i></a></li>
                          </ul>
                        </div>
                        <div class="part-2">
                          <h3 class="product-title">Havells Stealth Ceiling Fan</h3>
                          <h4 class="product-price">30 CC</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>




          </Content>
          <Footerr className="site-layout-footer" />
        </Layout>
      </Layout>
    </>
  );
}
