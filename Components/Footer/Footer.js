import {Row , Col , Container} from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import {footer , footer_about , footer_social_medias , footer_logo} from '../../styles/Footer.module.css';
const Footer = () => {
	return <Row className={footer}>
			<Col xs="12" md="12">		
				<Container>					
					<Row>						
						<Col xs="12" md="3" className={[footer_logo , "py-5 px-5"]}>
                            <h2 className="text-center text-light">رستوران و کافی شاپ رامسر</h2>
                        </Col>
						<Col xs="12" md="5" className={[footer_social_medias , "py-5 px-5"]}>

                            <h6>مارا در شبکه های اجتماعی دنبال کنید</h6>
                            <div>
                                <a href="instagram"><FaInstagram /></a>
                                <a href="instagram"><FaFacebook /></a>
                                <a href="instagram"><FaTelegram /></a>
                            </div>
                        </Col>
						<Col xs="12" md="4" className={[footer_about , "py-5 px-5"]}>
							<h6>درباره ما</h6>
							<p>
                            رستوران و کافی شاپ رامسر در سال 1398 با بهره گیری از کادری مجرب توانسته است تا یکی از پرطرفدار ترین رستوران های رامسر باشد. این رستوران با بهره گیری از سرویس دهی مناسب ، کیفیت خوب غذا و ویو خوب از شهر رامسر یکی از اولین انتخاب های رستوران در شهرستان رامسر باشد
                            </p>

\						</Col>
					</Row>
				</Container>
			</Col>
 
	</Row>
}

export default Footer;