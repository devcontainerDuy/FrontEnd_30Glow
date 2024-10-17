import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

function Index() {
  return (
    <>
      <Header />
      <>
        {/*start page content*/}
        <div className='page-content'>
          {/*start carousel*/}
          <section className='slider-section'>
            <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
              <div className='carousel-indicators'>
                <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to={0} className='active' aria-current='true' />
                <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to={1} />
                <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to={2} />
                <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to={3} />
                <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to={4} />
              </div>
              <div className='carousel-inner'>
                <div className='carousel-item active bg-primary'>
                  <div className='row d-flex align-items-center'>
                    <div className='col d-none d-lg-flex justify-content-center'>
                      <div className=''>
                        <h3 className='h3 fw-light text-white fw-bold'>New Arrival</h3>
                        <h1 className='h1 text-white fw-bold'>Women Fashion</h1>
                        <p className='text-white fw-bold'>
                          <i>Last call for upto 25%</i>
                        </p>
                        <div className=''>
                          <a className='btn btn-dark btn-ecomm' href='shop-grid.html'>
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <img src='./src/assets/images/sliders/s_1.webp' className='img-fluid' alt='...' />
                    </div>
                  </div>
                </div>
                <div className='carousel-item bg-red'>
                  <div className='row d-flex align-items-center'>
                    <div className='col d-none d-lg-flex justify-content-center'>
                      <div className=''>
                        <h3 className='h3 fw-light text-white fw-bold'>Latest Trending</h3>
                        <h1 className='h1 text-white fw-bold'>Fashion Wear</h1>
                        <p className='text-white fw-bold'>
                          <i>Last call for upto 35%</i>
                        </p>
                        <div className=''>
                          {" "}
                          <a className='btn btn-dark btn-ecomm' href='shop-grid.html'>
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <img src='./src/assets/images/sliders/s_2.webp' className='img-fluid' alt='...' />
                    </div>
                  </div>
                </div>
                <div className='carousel-item bg-purple'>
                  <div className='row d-flex align-items-center'>
                    <div className='col d-none d-lg-flex justify-content-center'>
                      <div className=''>
                        <h3 className='h3 fw-light text-white fw-bold'>New Trending</h3>
                        <h1 className='h1 text-white fw-bold'>Kids Fashion</h1>
                        <p className='text-white fw-bold'>
                          <i>Last call for upto 15%</i>
                        </p>
                        <div className=''>
                          <a className='btn btn-dark btn-ecomm' href='shop-grid.html'>
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <img src='./src/assets/images/sliders/s_3.webp' className='img-fluid' alt='...' />
                    </div>
                  </div>
                </div>
                <div className='carousel-item bg-yellow'>
                  <div className='row d-flex align-items-center'>
                    <div className='col d-none d-lg-flex justify-content-center'>
                      <div className=''>
                        <h3 className='h3 fw-light text-dark fw-bold'>Latest Trending</h3>
                        <h1 className='h1 text-dark fw-bold'>Electronics Items</h1>
                        <p className='text-dark fw-bold'>
                          <i>Last call for upto 45%</i>
                        </p>
                        <div className=''>
                          <a className='btn btn-dark btn-ecomm' href='shop-grid.html'>
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <img src='./src/assets/images/sliders/s_4.webp' className='img-fluid' alt='...' />
                    </div>
                  </div>
                </div>
                <div className='carousel-item bg-green'>
                  <div className='row d-flex align-items-center'>
                    <div className='col d-none d-lg-flex justify-content-center'>
                      <div className=''>
                        <h3 className='h3 fw-light text-white fw-bold'>Super Deals</h3>
                        <h1 className='h1 text-white fw-bold'>Home Furniture</h1>
                        <p className='text-white fw-bold'>
                          <i>Last call for upto 24%</i>
                        </p>
                        <div className=''>
                          <a className='btn btn-dark btn-ecomm' href='shop-grid.html'>
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <img src='./src/assets/images/sliders/s_5.webp' className='img-fluid' alt='...' />
                    </div>
                  </div>
                </div>
              </div>
              <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true' />
                <span className='visually-hidden'>Previous</span>
              </button>
              <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true' />
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
          </section>
          {/*end carousel*/}
          {/*start Featured Products slider*/}
          <section className='section-padding'>
            <div className='container'>
              <div className='text-center pb-3'>
                <h3 className='mb-0 h3 fw-bold'>Featured Products</h3>
                <p className='mb-0 text-capitalize'>The purpose of lorem ipsum</p>
              </div>
              <div className='row'>
                <div className='col-3 card'>
                  <div className='position-relative overflow-hidden'>
                    <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                      <a>
                        <i className='bi bi-heart' />
                      </a>
                      <a>
                        <i className='bi bi-basket3' />
                      </a>
                      <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                        <i className='bi bi-zoom-in' />
                      </a>
                    </div>
                    <a href='product-details.html'>
                      <img src='./src/assets/images/featured-products/01.webp' className='card-img-top' alt='...' />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='product-info text-center'>
                      <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                      <div className='ratings mb-1 h6'>
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                      </div>
                      <p className='mb-0 h6 fw-bold product-price'>$49</p>
                    </div>
                  </div>
                </div>
                <div className='col-3 card'>
                  <div className='position-relative overflow-hidden'>
                    <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                      <a>
                        <i className='bi bi-heart' />
                      </a>
                      <a>
                        <i className='bi bi-basket3' />
                      </a>
                      <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                        <i className='bi bi-zoom-in' />
                      </a>
                    </div>
                    <a href='product-details.html'>
                      <img src='./src/assets/images/featured-products/02.webp' className='card-img-top' alt='...' />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='product-info text-center'>
                      <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                      <div className='ratings mb-1 h6'>
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                      </div>
                      <p className='mb-0 h6 fw-bold product-price'>$49</p>
                    </div>
                  </div>
                </div>
                <div className='col-3 card'>
                  <div className='position-relative overflow-hidden'>
                    <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                      <a>
                        <i className='bi bi-heart' />
                      </a>
                      <a>
                        <i className='bi bi-basket3' />
                      </a>
                      <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                        <i className='bi bi-zoom-in' />
                      </a>
                    </div>
                    <a href='product-details.html'>
                      <img src='./src/assets/images/featured-products/03.webp' className='card-img-top' alt='...' />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='product-info text-center'>
                      <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                      <div className='ratings mb-1 h6'>
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                      </div>
                      <p className='mb-0 h6 fw-bold product-price'>$49</p>
                    </div>
                  </div>
                </div>
                <div className='col-3 card'>
                  <div className='position-relative overflow-hidden'>
                    <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                      <a>
                        <i className='bi bi-heart' />
                      </a>
                      <a>
                        <i className='bi bi-basket3' />
                      </a>
                      <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                        <i className='bi bi-zoom-in' />
                      </a>
                    </div>
                    <a href='product-details.html'>
                      <img src='./src/assets/images/featured-products/04.webp' className='card-img-top' alt='...' />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='product-info text-center'>
                      <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                      <div className='ratings mb-1 h6'>
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                      </div>
                      <p className='mb-0 h6 fw-bold product-price'>$49</p>
                    </div>
                  </div>
                </div>
                <div className='col-3 card'>
                  <div className='position-relative overflow-hidden'>
                    <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                      <a>
                        <i className='bi bi-heart' />
                      </a>
                      <a>
                        <i className='bi bi-basket3' />
                      </a>
                      <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                        <i className='bi bi-zoom-in' />
                      </a>
                    </div>
                    <a href='product-details.html'>
                      <img src='./src/assets/images/featured-products/05.webp' className='card-img-top' alt='...' />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='product-info text-center'>
                      <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                      <div className='ratings mb-1 h6'>
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                      </div>
                      <p className='mb-0 h6 fw-bold product-price'>$49</p>
                    </div>
                  </div>
                </div>
                <div className='col-3 card'>
                  <div className='position-relative overflow-hidden'>
                    <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                      <a>
                        <i className='bi bi-heart' />
                      </a>
                      <a>
                        <i className='bi bi-basket3' />
                      </a>
                      <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                        <i className='bi bi-zoom-in' />
                      </a>
                    </div>
                    <a href='product-details.html'>
                      <img src='./src/assets/images/featured-products/06.webp' className='card-img-top' alt='...' />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='product-info text-center'>
                      <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                      <div className='ratings mb-1 h6'>
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                      </div>
                      <p className='mb-0 h6 fw-bold product-price'>$49</p>
                    </div>
                  </div>
                </div>
                <div className='col-3 card'>
                  <div className='position-relative overflow-hidden'>
                    <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                      <a>
                        <i className='bi bi-heart' />
                      </a>
                      <a>
                        <i className='bi bi-basket3' />
                      </a>
                      <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                        <i className='bi bi-zoom-in' />
                      </a>
                    </div>
                    <a href='product-details.html'>
                      <img src='./src/assets/images/featured-products/07.webp' className='card-img-top' alt='...' />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='product-info text-center'>
                      <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                      <div className='ratings mb-1 h6'>
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                      </div>
                      <p className='mb-0 h6 fw-bold product-price'>$49</p>
                    </div>
                  </div>
                </div>
                <div className='col-3 card'>
                  <div className='position-relative overflow-hidden'>
                    <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                      <a>
                        <i className='bi bi-heart' />
                      </a>
                      <a>
                        <i className='bi bi-basket3' />
                      </a>
                      <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                        <i className='bi bi-zoom-in' />
                      </a>
                    </div>
                    <a href='product-details.html'>
                      <img src='./src/assets/images/featured-products/08.webp' className='card-img-top' alt='...' />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='product-info text-center'>
                      <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                      <div className='ratings mb-1 h6'>
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                        <i className='bi bi-star-fill text-warning' />
                      </div>
                      <p className='mb-0 h6 fw-bold product-price'>$49</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*end Featured Products slider*/}
          {/*start tabular product*/}
          <section className='product-tab-section section-padding bg-light'>
            <div className='container'>
              <div className='text-center pb-3'>
                <h3 className='mb-0 h3 fw-bold'>Latest Products</h3>
                <p className='mb-0 text-capitalize'>The purpose of lorem ipsum</p>
              </div>
              <div className='row'>
                <div className='col-auto mx-auto'>
                  <div className='product-tab-menu table-responsive'>
                    <ul className='nav nav-pills flex-nowrap' id='pills-tab' role='tablist'>
                      <li className='nav-item' role='presentation'>
                        <button className='nav-link active' data-bs-toggle='pill' data-bs-target='#new-arrival' type='button'>
                          New Arrival
                        </button>
                      </li>
                      <li className='nav-item' role='presentation'>
                        <button className='nav-link' data-bs-toggle='pill' data-bs-target='#best-sellar' type='button'>
                          Best Sellar
                        </button>
                      </li>
                      <li className='nav-item' role='presentation'>
                        <button className='nav-link' data-bs-toggle='pill' data-bs-target='#trending-product' type='button'>
                          Trending
                        </button>
                      </li>
                      <li className='nav-item' role='presentation'>
                        <button className='nav-link' data-bs-toggle='pill' data-bs-target='#special-offer' type='button'>
                          Special Offer
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
              <div className='tab-content tabular-product'>
                <div className='tab-pane fade show active' id='new-arrival'>
                  <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4'>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/new-arrival/01.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='ribban'>New Season</div>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/new-arrival/02.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/new-arrival/03.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/new-arrival/04.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/new-arrival/05.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/new-arrival/06.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/new-arrival/07.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/new-arrival/08.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/new-arrival/09.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/new-arrival/10.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='tab-pane fade' id='best-sellar'>
                  <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4'>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/best-sellar/01.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/best-sellar/02.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/best-sellar/03.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='ribban bg-primary'>New Fashion</div>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/best-sellar/04.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/best-sellar/05.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='tab-pane fade' id='trending-product'>
                  <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4'>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/trending-product/01.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/trending-product/02.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='ribban bg-warning text-dark'>New Season</div>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a>
                            <img src='./src/assets/images/trending-product/03.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/trending-product/04.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/trending-product/05.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='tab-pane fade' id='special-offer'>
                  <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4'>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/special-offer/01.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/special-offer/02.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='ribban'>50% Discount</div>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/special-offer/03.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/special-offer/04.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='card'>
                        <div className='position-relative overflow-hidden'>
                          <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
                            <a>
                              <i className='bi bi-heart' />
                            </a>
                            <a>
                              <i className='bi bi-basket3' />
                            </a>
                            <a data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                              <i className='bi bi-zoom-in' />
                            </a>
                          </div>
                          <a href='product-details.html'>
                            <img src='./src/assets/images/special-offer/05.webp' className='card-img-top' alt='...' />
                          </a>
                        </div>
                        <div className='card-body'>
                          <div className='product-info text-center'>
                            <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
                            <div className='ratings mb-1 h6'>
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                              <i className='bi bi-star-fill text-warning' />
                            </div>
                            <p className='mb-0 h6 fw-bold product-price'>$49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*end tabular product*/}
          {/*start features*/}
          <section className='product-thumb-slider section-padding'>
            <div className='container'>
              <div className='text-center pb-3'>
                <h3 className='mb-0 h3 fw-bold'>What We Offer!</h3>
                <p className='mb-0 text-capitalize'>The purpose of lorem ipsum</p>
              </div>
              <div className='row row-cols-1 row-cols-lg-4 g-4'>
                <div className='col d-flex'>
                  <div className='card depth border-0 rounded-0 border-bottom border-primary border-3 w-100'>
                    <div className='card-body text-center'>
                      <div className='h1 fw-bold my-2 text-primary'>
                        <i className='bi bi-truck' />
                      </div>
                      <h5 className='fw-bold'>Free Delivery</h5>
                      <p className='mb-0'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                    </div>
                  </div>
                </div>
                <div className='col d-flex'>
                  <div className='card depth border-0 rounded-0 border-bottom border-danger border-3 w-100'>
                    <div className='card-body text-center'>
                      <div className='h1 fw-bold my-2 text-danger'>
                        <i className='bi bi-credit-card' />
                      </div>
                      <h5 className='fw-bold'>Secure Payment</h5>
                      <p className='mb-0'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                    </div>
                  </div>
                </div>
                <div className='col d-flex'>
                  <div className='card depth border-0 rounded-0 border-bottom border-success border-3 w-100'>
                    <div className='card-body text-center'>
                      <div className='h1 fw-bold my-2 text-success'>
                        <i className='bi bi-minecart-loaded' />
                      </div>
                      <h5 className='fw-bold'>Free Returns</h5>
                      <p className='mb-0'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                    </div>
                  </div>
                </div>
                <div className='col d-flex'>
                  <div className='card depth border-0 rounded-0 border-bottom border-warning border-3 w-100'>
                    <div className='card-body text-center'>
                      <div className='h1 fw-bold my-2 text-warning'>
                        <i className='bi bi-headset' />
                      </div>
                      <h5 className='fw-bold'>24/7 Support</h5>
                      <p className='mb-0'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*end row*/}
            </div>
          </section>
          {/*end features*/}
          {/*start special product*/}
          <section className='section-padding bg-section-2'>
            <div className='container'>
              <div className='card border-0 rounded-0 p-3 depth'>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-lg-6 text-center'>
                    <img src='./src/assets/images/extra-images/promo-large.webp' className='img-fluid rounded-0' alt='...' />
                  </div>
                  <div className='col-lg-6'>
                    <div className='card-body'>
                      <h3 className='fw-bold'>New Features of Trending Products</h3>
                      <ul className='list-group list-group-flush'>
                        <li className='list-group-item bg-transparent px-0'>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                        <li className='list-group-item bg-transparent px-0'>All the Lorem Ipsum generators on the Internet tend.</li>
                        <li className='list-group-item bg-transparent px-0'>There are many variations of passages of Lorem Ipsum available.</li>
                        <li className='list-group-item bg-transparent px-0'>There are many variations of passages available.</li>
                      </ul>
                      <div className='buttons mt-4 d-flex flex-column flex-lg-row gap-3'>
                        <a className='btn btn-lg btn-dark btn-ecomm px-5 py-3'>Buy Now</a>
                        <a className='btn btn-lg btn-outline-dark btn-ecomm px-5 py-3'>View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*start special product*/}
          {/*start Brands*/}
          <section className='section-padding'>
            <div className='container'>
              <div className='text-center pb-3'>
                <h3 className='mb-0 h3 fw-bold'>Shop By Brands</h3>
                <p className='mb-0 text-capitalize'>Select your favorite brands and purchase</p>
              </div>
              <div className='brands'>
                <div className='row row-cols-2 row-cols-lg-5 g-4'>
                  <div className='col'>
                    <div className='p-3 border rounded brand-box'>
                      <div className='d-flex align-items-center'>
                        <a>
                          <img src='./src/assets/images/brands/01.webp' className='img-fluid' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='p-3 border rounded brand-box'>
                      <div className='d-flex align-items-center'>
                        <a>
                          <img src='./src/assets/images/brands/02.webp' className='img-fluid' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='p-3 border rounded brand-box'>
                      <div className='d-flex align-items-center'>
                        <a>
                          <img src='./src/assets/images/brands/03.webp' className='img-fluid' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='p-3 border rounded brand-box'>
                      <div className='d-flex align-items-center'>
                        <a>
                          <img src='./src/assets/images/brands/04.webp' className='img-fluid' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='p-3 border rounded brand-box'>
                      <div className='d-flex align-items-center'>
                        <a>
                          <img src='./src/assets/images/brands/05.webp' className='img-fluid' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='p-3 border rounded brand-box'>
                      <div className='d-flex align-items-center'>
                        <a>
                          <img src='./src/assets/images/brands/06.webp' className='img-fluid' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='p-3 border rounded brand-box'>
                      <div className='d-flex align-items-center'>
                        <a>
                          <img src='./src/assets/images/brands/07.webp' className='img-fluid' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='p-3 border rounded brand-box'>
                      <div className='d-flex align-items-center'>
                        <a>
                          <img src='./src/assets/images/brands/08.webp' className='img-fluid' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='p-3 border rounded brand-box'>
                      <div className='d-flex align-items-center'>
                        <a>
                          <img src='./src/assets/images/brands/09.webp' className='img-fluid' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='p-3 border rounded brand-box'>
                      <div className='d-flex align-items-center'>
                        <a>
                          <img src='./src/assets/images/brands/10.webp' className='img-fluid' alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end row*/}
              </div>
            </div>
          </section>
          {/*end Brands*/}
          {/*start cartegory slider*/}
          <section className='cartegory-slider section-padding bg-section-2'>
            <div className='container'>
              <div className='text-center pb-3'>
                <h3 className='mb-0 h3 fw-bold'>Top Categories</h3>
                <p className='mb-0 text-capitalize'>Select your favorite categories and purchase</p>
              </div>
              <div className='cartegory-box row'>
                <a className='col-3' href='shop-grid-type-4.html'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='overflow-hidden'>
                        <img src='./src/assets/images/categories/01.webp' className='card-img-top rounded-0' alt='...' />
                      </div>
                      <div className='text-center'>
                        <h5 className='mb-1 cartegory-name mt-3 fw-bold'>Kurtas</h5>
                        <h6 className='mb-0 product-number fw-bold'>856 Products</h6>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='col-3' href='shop-grid-type-4.html'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='overflow-hidden'>
                        <img src='./src/assets/images/categories/02.webp' className='card-img-top rounded-0' alt='...' />
                      </div>
                      <div className='text-center'>
                        <h5 className='mb-1 cartegory-name mt-3 fw-bold'>Heels</h5>
                        <h6 className='mb-0 product-number fw-bold'>169 Products</h6>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='col-3' href='shop-grid-type-4.html'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='overflow-hidden'>
                        <img src='./src/assets/images/categories/03.webp' className='card-img-top rounded-0' alt='...' />
                      </div>
                      <div className='text-center'>
                        <h5 className='mb-1 cartegory-name mt-3 fw-bold'>Lehenga</h5>
                        <h6 className='mb-0 product-number fw-bold'>589 Products</h6>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='col-3' href='shop-grid-type-4.html'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='overflow-hidden'>
                        <img src='./src/assets/images/categories/04.webp' className='card-img-top rounded-0' alt='...' />
                      </div>
                      <div className='text-center'>
                        <h5 className='mb-1 cartegory-name mt-3 fw-bold'>Plazzos</h5>
                        <h6 className='mb-0 product-number fw-bold'>278 Products</h6>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='col-3' href='shop-grid-type-4.html'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='overflow-hidden'>
                        <img src='./src/assets/images/categories/05.webp' className='card-img-top rounded-0' alt='...' />
                      </div>
                      <div className='text-center'>
                        <h5 className='mb-1 cartegory-name mt-3 fw-bold'>Makeup</h5>
                        <h6 className='mb-0 product-number fw-bold'>985 Products</h6>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='col-3' href='shop-grid-type-4.html'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='overflow-hidden'>
                        <img src='./src/assets/images/categories/06.webp' className='card-img-top rounded-0' alt='...' />
                      </div>
                      <div className='text-center'>
                        <h5 className='mb-1 cartegory-name mt-3 fw-bold'>Shoes</h5>
                        <h6 className='mb-0 product-number fw-bold'>489 Products</h6>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
          {/*end cartegory slider*/}
          {/*subscribe banner*/}
          <section className='product-thumb-slider subscribe-banner p-5'>
            <div className='row'>
              <div className='col-12 col-lg-6 mx-auto'>
                <div className='text-center'>
                  <h3 className='mb-0 fw-bold text-white'>
                    Get Latest Update by <br /> Subscribe Our Newslater
                  </h3>
                  <div className='mt-3'>
                    <input type='text' className='form-control form-control-lg bubscribe-control rounded-0 px-5 py-3' placeholder='Enter your email' />
                  </div>
                  <div className='mt-3 d-grid'>
                    <button type='button' className='btn btn-lg btn-ecomm bubscribe-button px-5 py-3'>
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*subscribe banner*/}
          {/*start blog*/}
          <section className='section-padding'>
            <div className='container'>
              <div className='text-center pb-3'>
                <h3 className='mb-0 fw-bold'>Latest Blog</h3>
                <p className='mb-0 text-capitalize'>Check our latest news</p>
              </div>
              <div className='blog-cards'>
                <div className='row row-cols-1 row-cols-lg-3 g-4'>
                  <div className='col'>
                    <div className='card'>
                      <img src='./src/assets/images/blog/01.webp' className='card-img-top rounded-0' alt='...' />
                      <div className='card-body'>
                        <div className='d-flex align-items-center gap-4'>
                          <div className='posted-by'>
                            <p className='mb-0'>
                              <i className='bi bi-person me-2' />
                              Virendra
                            </p>
                          </div>
                          <div className='posted-date'>
                            <p className='mb-0'>
                              <i className='bi bi-calendar me-2' />
                              15 Aug, 2022
                            </p>
                          </div>
                        </div>
                        <h5 className='card-title fw-bold mt-3'>Blog title here</h5>
                        <p className='mb-0'>Some quick example text to build on the card title and make.</p>
                        <a href='blog-read.html' className='btn btn-outline-dark btn-ecomm mt-3'>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='card'>
                      <img src='./src/assets/images/blog/02.webp' className='card-img-top rounded-0' alt='...' />
                      <div className='card-body'>
                        <div className='d-flex align-items-center gap-4'>
                          <div className='posted-by'>
                            <p className='mb-0'>
                              <i className='bi bi-person me-2' />
                              Virendra
                            </p>
                          </div>
                          <div className='posted-date'>
                            <p className='mb-0'>
                              <i className='bi bi-calendar me-2' />
                              15 Aug, 2022
                            </p>
                          </div>
                        </div>
                        <h5 className='card-title fw-bold mt-3'>Blog title here</h5>
                        <p className='mb-0'>Some quick example text to build on the card title and make.</p>
                        <a href='blog-read.html' className='btn btn-outline-dark btn-ecomm mt-3'>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='card'>
                      <img src='./src/assets/images/blog/03.webp' className='card-img-top rounded-0' alt='...' />
                      <div className='card-body'>
                        <div className='d-flex align-items-center gap-4'>
                          <div className='posted-by'>
                            <p className='mb-0'>
                              <i className='bi bi-person me-2' />
                              Virendra
                            </p>
                          </div>
                          <div className='posted-date'>
                            <p className='mb-0'>
                              <i className='bi bi-calendar me-2' />
                              15 Aug, 2022
                            </p>
                          </div>
                        </div>
                        <h5 className='card-title fw-bold mt-3'>Blog title here</h5>
                        <p className='mb-0'>Some quick example text to build on the card title and make.</p>
                        <a href='blog-read.html' className='btn btn-outline-dark btn-ecomm mt-3'>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end row*/}
              </div>
            </div>
          </section>
          {/*end blog*/}
        </div>
        {/*end page content*/}
      </>

      <Footer />
    </>
  );
}

export default Index;
