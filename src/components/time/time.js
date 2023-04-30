import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Schedule = () => {
    return (
        <div className="vc_column-inner vc_custom_1564486080597">
            <div className="wpb_wrapper">
                <div className="thsn-ihbox thsn-ihbox-style-8 ">
                    <div className="thsn-ihbox-box">
                        <div className="thsn-ihbox-headingicon d-flex align-items-center">
                            <div className="thsn-ihbox-icon">
                                <div className="thsn-ihbox-icon-wrapper"><i className="fa fa-calendar"></i></div>
                            </div>
                            <div className="thsn-heading">
                                <div className="thsn-ihbox-heading"><h2 className="vc_custom_heading">График работы:</h2></div>
                            </div>
                        </div>
                        <div className="thsn-ihbox-contents"></div>
                    </div>
                </div>
                <div className="thsn-timelist-ele-wrapper ">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={4}>
                                <span className="thsn-timelist-li-title">Жду Вас на прием ежедневно</span>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                <span className="thsn-timelist-li-title">Часы работы:</span>
                                <span className="thsn-timelist-li-value">10:00 - 21:00</span>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                <span className="thsn-timelist-li-title">Только по предварительной записи</span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Schedule;
