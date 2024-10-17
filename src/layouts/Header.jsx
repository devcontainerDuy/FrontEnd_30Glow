/* eslint-disable*/
import React, { useEffect, useState } from "react";
import { Notyf } from "notyf";
import Modal from "react-bootstrap/Modal";

function Header() {
  const [lgShow, setLgShow] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const changeShow = () => setShow(true);
  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
    types: [
      {
        type: "warning",
        background: "orange",
        icon: {
          className: "material-icons",
          tagName: "i",
          text: "warning",
        },
      },
      {
        type: "error",
        background: "indianred",
        duration: 2000,
        dismissible: true,
      },
      {
        type: "success",
        background: "green",
        color: "white",
        duration: 2000,
        dismissible: true,
      },
      {
        type: "info",
        background: "#24b3f0",
        color: "white",
        duration: 1500,
        dismissible: false,
        icon: '<i class="bi bi-bag-check"></i>',
      },
    ],
  });

  return (
    <>
      <header className='top-header'>
        <Modal size='lg' show={lgShow} onHide={() => setLgShow(false)} aria-labelledby='example-modal-sizes-title-lg'>
          <Modal.Body>
            <div className='input-group mb-3'>
              <input type='text' className='form-control' placeholder='Nhập tên sản phẩm' aria-label="Recipient's username" aria-describedby='button-addon2' />
              <button className='btn btn-outline-success' type='button' id='button-addon2'>
                Tìm kiếm
              </button>
            </div>
          </Modal.Body>
        </Modal>
        <nav className='navbar navbar-expand-xl w-100 navbar-dark container gap-3'>
          <a className='navbar-brand d-none d-xl-inline' href='/'>
            <img src='/assets/images/codevui_shop.png' className='logo-img' alt='' />
          </a>
          <a className='mobile-menu-btn d-inline d-xl-none' href='#' onClick={(e) => changeShow()}>
            <i className='bi bi-list' />
          </a>
          <div className={show ? "offcanvas offcanvas-start show" : "offcanvas offcanvas-start"} tabIndex={-1} id='offcanvasNavbar'>
            <div className='offcanvas-header'>
              <div className='offcanvas-logo'>
                <img src='/assets/images/codevui_shop.png' className='logo-img' alt='' />
              </div>
              <button type='button' className='btn-close text-reset' data-bs-dismiss='offcanvas' aria-label='Close' />
            </div>
            <div className='offcanvas-body primary-menu'>
              <ul className='navbar-nav justify-content-start flex-grow-1 gap-1'>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Trang chủ
                  </a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link' href='/about'>
                    Thông tin
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/dich-vu'>
                    Dịch vụ
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  {/* <a className="nav-link" href="/san-pham">
                                    Shop
                                    </a> */}
                  <a className='nav-link dropdown-toggle dropdown-toggle-nocaret' href='#!' data-bs-toggle='dropdown'>
                    Sản phẩm
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='/san-pham'>
                        Sản phẩm
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle dropdown-toggle-nocaret' href='#!' data-bs-toggle='dropdown'>
                    Thương hiệu
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='/thuong-hieu'>
                        Thuong hieu
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/lien-he'>
                    Liên hệ
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle dropdown-toggle-nocaret' href='#!' data-bs-toggle='dropdown'>
                    Tài khoản
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='/thong-tin-tai-khoan'>
                        Thong tin tai khoan
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle dropdown-toggle-nocaret' href='#' data-bs-toggle='dropdown'>
                    Tin tức
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href={"/tin-tuc"}>
                        Tin tức
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <ul className='navbar-nav secondary-menu flex-row'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <i className='bi bi-search' />
              </a>
            </li>
            <li className='nav-item' data-bs-toggle='offcanvas' data-bs-target='#offcanvasRight'>
              <a className='nav-link position-relative' href='/gio-hang'>
                <i className='bi bi-basket2' />
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>
                <i className='bi bi-person-circle' />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
