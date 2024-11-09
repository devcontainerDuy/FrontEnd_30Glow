// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import BreadcrumbComponent from '../../components/BreadcrumbComponent';

function Account() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  useEffect(() => {
    const storedUserInfo = {
      name: 'Phan Thị Minh Thư',
      email: 'thu1205@gmail.com',
      phone: '0123456789',
      address: 'Hồ Chí Minh',
    };
    setUserInfo(storedUserInfo);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Thông tin đã được cập nhật');
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <>
      <Helmet>
        <title>Tài khoản - 30GLOW</title>
        <meta name="description" content="Thông tin tài khoản" />
      </Helmet>
      <Header />
      <BreadcrumbComponent props={[{ name: 'Tài khoản', url: '/tai-khoan' }]} />
      <Container className="pb-5">
        <Row className="mt-2">
        <h4>Thông tin tài khoản</h4>
          <Col md={6}>
            <Form onSubmit={handleSave}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Tên</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="phone" className="mb-3">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="address" className="mb-3">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Cập nhật thông tin
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group controlId="currentPassword" className="mb-3">
                <Form.Label>Mật khẩu hiện tại</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword.currentPassword ? 'text' : 'password'}
                    placeholder="Mật khẩu hiện tại"
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => togglePasswordVisibility('currentPassword')}
                  >
                    <FontAwesomeIcon icon={showPassword.currentPassword ? faEyeSlash : faEye} />
                  </Button>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="newPassword" className="mb-3">
                <Form.Label>Mật khẩu mới</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword.newPassword ? 'text' : 'password'}
                    placeholder="Mật khẩu mới"
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => togglePasswordVisibility('newPassword')}
                  >
                    <FontAwesomeIcon icon={showPassword.newPassword ? faEyeSlash : faEye} />
                  </Button>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="confirmPassword" className="mb-3">
                <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword.confirmPassword ? 'text' : 'password'}
                    placeholder="Xác nhận mật khẩu mới"
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => togglePasswordVisibility('confirmPassword')}
                  >
                    <FontAwesomeIcon icon={showPassword.confirmPassword ? faEyeSlash : faEye} />
                  </Button>
                </InputGroup>
              </Form.Group>
              <Button variant="secondary" type="button">
                Đổi mật khẩu
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Account;
