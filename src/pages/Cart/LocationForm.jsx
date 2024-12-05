import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

function LocationForm() {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [formData, setFormData] = useState({
        provinceId: "",
        districtId: "",
        wardId: "",
        addressDetail: "", // Thêm trường địa chỉ chi tiết
    });

    const [loading, setLoading] = useState({
        provinces: false,
        districts: false,
        wards: false,
    });

    // Fetch Provinces
    useEffect(() => {
        const fetchProvinces = async () => {
            setLoading((prev) => ({ ...prev, provinces: true }));
            try {
                const response = await axios.get(
                    "https://open.oapi.vn/location/provinces?page=0&size=300"
                );
                setProvinces(response.data.data);
            } catch (error) {
                console.error("Error fetching provinces:", error);
            } finally {
                setLoading((prev) => ({ ...prev, provinces: false }));
            }
        };
        fetchProvinces();
    }, []);

    // Fetch Districts when Province changes
    useEffect(() => {
        if (!formData.provinceId) {
            setDistricts([]);
            setWards([]);
            return;
        }
        const fetchDistricts = async () => {
            setLoading((prev) => ({ ...prev, districts: true }));
            try {
                const response = await axios.get(
                    `https://open.oapi.vn/location/districts/${formData.provinceId}?page=0&size=300`
                );
                setDistricts(response.data.data);
            } catch (error) {
                console.error("Error fetching districts:", error);
            } finally {
                setLoading((prev) => ({ ...prev, districts: false }));
            }
        };
        fetchDistricts();
    }, [formData.provinceId]);

    // Fetch Wards when District changes
    useEffect(() => {
        if (!formData.districtId) {
            setWards([]);
            return;
        }
        const fetchWards = async () => {
            setLoading((prev) => ({ ...prev, wards: true }));
            try {
                const response = await axios.get(
                    `https://open.oapi.vn/location/wards/${formData.districtId}?page=0&size=300`
                );
                setWards(response.data.data);
            } catch (error) {
                console.error("Error fetching wards:", error);
            } finally {
                setLoading((prev) => ({ ...prev, wards: false }));
            }
        };
        fetchWards();
    }, [formData.districtId]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
            ...(id === "provinceId" ? { districtId: "", wardId: "" } : {}),
            ...(id === "districtId" ? { wardId: "" } : {}),
        }));
    };

    const handleSubmit = () => {
        // Lấy tên tỉnh/thành, quận/huyện, xã/phường từ danh sách
        const provinceName = provinces.find((p) => p.id === formData.provinceId)?.name || "";
        const districtName = districts.find((d) => d.id === formData.districtId)?.name || "";
        const wardName = wards.find((w) => w.id === formData.wardId)?.name || "";

        // Ghép chuỗi địa chỉ hoàn chỉnh
        const fullAddress = `${formData.addressDetail}, ${wardName}, ${districtName}, ${provinceName}`;
        console.log("Địa chỉ hoàn chỉnh:", fullAddress);
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="addressDetail">
                <Form.Label>Địa chỉ chi tiết</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Số nhà, tên đường..."
                    value={formData.addressDetail}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="provinceId">
                <Form.Label>Tỉnh / Thành phố</Form.Label>
                <Form.Select
                    required
                    value={formData.provinceId}
                    onChange={handleInputChange}
                >
                    <option value="">Chọn tỉnh/thành phố</option>
                    {loading.provinces ? (
                        <option>Loading...</option>
                    ) : (
                        provinces?.map((province) => (
                            <option key={province.id} value={province.id}>
                                {province.name}
                            </option>
                        ))
                    )}
                </Form.Select>
            </Form.Group>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="districtId">
                        <Form.Label>Quận / Huyện</Form.Label>
                        <Form.Select
                            required
                            value={formData.districtId}
                            onChange={handleInputChange}
                            disabled={!formData.provinceId || loading.districts}
                        >
                            <option value="">Chọn quận/huyện</option>
                            {loading.districts ? (
                                <option>Loading...</option>
                            ) : (
                                districts?.map((district) => (
                                    <option key={district.id} value={district.id}>
                                        {district.name}
                                    </option>
                                ))
                            )}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3" controlId="wardId">
                        <Form.Label>Xã / Phường</Form.Label>
                        <Form.Select
                            required
                            value={formData.wardId}
                            onChange={handleInputChange}
                            disabled={!formData.districtId || loading.wards}
                        >
                            <option value="">Chọn xã/phường</option>
                            {loading.wards ? (
                                <option>Loading...</option>
                            ) : (
                                wards?.map((ward) => (
                                    <option key={ward.id} value={ward.id}>
                                        {ward.name}
                                    </option>
                                ))
                            )}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" onClick={handleSubmit}>
                Hoàn thành
            </Button>
        </Form>
    );
}

export default LocationForm;
