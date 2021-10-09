import { Row, Col, Container } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { footer, footer_about, footer_social_medias, footer_data, footer_list_items, footer_bottom_data } from '../../styles/Footer.module.css';
import Link from 'next/link'
const Footer = () => {
    return <Row className={footer}>
        <Col xs="12" md="12">
            <Container className={footer_data}>
                <Row>
                    <Col xs="12" md="3" className={[footer_list_items, "py-5 px-5"]}>
                        <h6>کافه رستوران رامسر</h6>
                        <ul>
                            <li>
                                <Link href="/hello">
                                    <a>درباره ما</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/#address">
                                    <a>تماس با ما</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/#address">
                                    <a>آدرس</a>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs="12" md="3" className={[footer_list_items, "py-5 px-5"]}>

                        <h6>سرویس ها</h6>
                        <ul>
                            <li>
                                <Link href="/hello">
                                    <a>رستوران</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/hello">
                                    <a>کافی شاپ</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/hello">
                                    <a>املاک</a>
                                </Link>
                            </li>
                        </ul>

                    </Col>
                    <Col xs="12" md="6" className={[footer_about, footer_social_medias, "py-5 px-5"]}>
                        <h6>درباره ما</h6>
                        <p>
                            رستوران و کافی شاپ رامسر در سال 1398 با بهره گیری از کادری مجرب توانسته است تا یکی از پرطرفدار ترین رستوران های رامسر باشد. این رستوران با بهره گیری از سرویس دهی مناسب ، کیفیت خوب غذا و ویو خوب از شهر رامسر یکی از اولین انتخاب های رستوران در شهرستان رامسر باشد
                        </p>
                        <div>
                            <a href="instagram"><FaInstagram /></a>
                            <a href="instagram"><FaFacebook /></a>
                            <a href="instagram"><FaTelegram /></a>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Container className={footer_bottom_data}>
                <Row>
                    <Col xs="6" md="6">
                        <p>© تمام حقوق محفوظ است</p>
                    </Col>
                    <Col xs="6" md="6">
                        <Link href="https://instagram.com/hamidrezaramzani_">
                            <a>
                                <img src="/images/logo.png" alt="hamidrezaramzani logo" width={100} />
                            </a>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Col>


    </Row>
}

export default Footer;