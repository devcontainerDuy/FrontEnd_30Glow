/* eslint-disable */
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Headers from "../../layouts/Header";
import Footers from "../../layouts/Footer";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import { Helmet } from "react-helmet";
import CardPost from "../../components/CardPost";
const postList = [
  {
    name: "Làm thế nào để chọn dầu gội phù hợp với da đầu?",
    slug: "chon-dau-goi-phu-hop",
    image: "https://i.pinimg.com/736x/77/ac/25/77ac25c3b4b1cc810cc0afe803923ae2.jpg",
    createdAt: "2024-11-02",
    author: "Lê Minh Hằng",
    content: "Chọn dầu gội đúng không chỉ giúp làm sạch da đầu mà còn cải thiện sức khỏe tóc đáng kể. Hãy cùng tìm hiểu cách xác định loại da đầu và chọn sản phẩm phù hợp nhất.",
  },
  {
    name: "Khám phá dịch vụ chăm sóc da chuyên sâu tại spa",
    slug: "cham-soc-da-chuyen-sau-tai-spa",
    image: "https://i.pinimg.com/736x/13/95/30/13953045964276a03b5bf63ca6e72813.jpg",
    createdAt: "2024-10-28",
    author: "Trần Quỳnh Hoa",
    content:
      "Dành thời gian chăm sóc da tại các spa không chỉ mang lại làn da khỏe mạnh mà còn giúp bạn thư giãn sau những ngày làm việc căng thẳng. Cùng khám phá các liệu trình làm đẹp da nổi bật tại các spa uy tín.",
  },
  {
    name: "Bí quyết chăm sóc tóc nhuộm để luôn óng mượt",
    slug: "bi-quyet-cham-soc-toc-nhuom",
    image: "https://i.pinimg.com/736x/f8/66/9c/f8669caae105949e4b20d9ee701e4dc4.jpg",
    createdAt: "2024-11-05",
    author: "Phạm Hải Yến",
    content:
      "Tóc nhuộm rất dễ bị hư tổn nếu không được chăm sóc đúng cách. Trong bài viết này, chúng tôi sẽ chia sẻ những mẹo nhỏ giúp tóc nhuộm luôn bền màu và bóng khỏe, từ cách chọn dầu gội đến sản phẩm dưỡng tóc phù hợp.",
  },
  {
    name: "Xu hướng làm tóc 2024: Những kiểu tóc được yêu thích nhất",
    slug: "xu-huong-lam-toc-2024",
    image: "https://i.pinimg.com/736x/2a/a5/92/2aa592e1d127dff0273050a68f5ad2d0.jpg",
    createdAt: "2024-11-15",
    author: "Nguyễn Thùy Linh",
    content:
      "Cùng khám phá những xu hướng làm tóc hot nhất 2024. Từ tóc bob cá tính, tóc dài layer mềm mại cho đến tóc nhuộm màu pastel nổi bật, bài viết này sẽ giúp bạn tìm được kiểu tóc phù hợp nhất với bản thân.",
  },
  {
    name: "Top 5 sản phẩm chăm sóc da không thể thiếu mùa đông này",
    slug: "san-pham-cham-soc-da-mua-dong",
    image: "https://i.pinimg.com/736x/ac/44/33/ac443315165341065240183cbdc313a4.jpg",
    createdAt: "2024-11-10",
    author: "Hoàng Anh Dung",
    content:
      "Mùa đông khô hanh đang đến gần, bạn đã chuẩn bị sẵn sàng bộ sản phẩm chăm sóc da chưa? Hãy cùng khám phá 5 sản phẩm dưỡng da tốt nhất, bao gồm kem dưỡng ẩm sâu, serum cấp nước, và sữa rửa mặt nhẹ nhàng.",
  },
  {
    name: "Khám phá dịch vụ chăm sóc da chuyên sâu tại spa",
    slug: "cham-soc-da-chuyen-sau-tai-spa",
    image: "https://i.pinimg.com/736x/ec/10/03/ec100312fe8f58d25eb792544cdb456f.jpg",
    createdAt: "2024-10-28",
    author: "Trần Quỳnh Hoa",
    content:
      "Dành thời gian chăm sóc da tại các spa không chỉ mang lại làn da khỏe mạnh mà còn giúp bạn thư giãn sau những ngày làm việc căng thẳng. Cùng khám phá các liệu trình làm đẹp da nổi bật tại các spa uy tín.",
  },
];
function Post() {
  return (
    <>
      <Helmet>
        <title>Tin Tức - 30GLOW</title>
        <meta name="description" content="Mô tả của bài viết" />
      </Helmet>
      <Headers />
      <BreadcrumbComponent props={[{ name: "Tin Tức", url: "/tin-tuc" }]} />
      <Container className="my-5">
        <Row className="mb-3">
          <Col>
            <h2 className="fw-bold text-uppercase text-center text-primary-emphasis">Tin Tức - 30GLOW</h2>
            <p className="text-center fs-4 text-muted">30GLOW – Hệ thống làm đẹp hiện đại, kết hợp dịch vụ tạo kiểu tóc và cung cấp sản phẩm chăm sóc chất lượng.</p>
          </Col>
        </Row>
        <Row className="row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
          {postList ? postList.map((post, index) => <CardPost key={index} {...post} />) : <h3 className="text-center">Không có bài đăng</h3>}
        </Row>

        {/*end row*/}
      </Container>
      <Footers />
    </>
  );
}

export default Post;
