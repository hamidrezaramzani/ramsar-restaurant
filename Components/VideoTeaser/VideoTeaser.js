import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/VideoTeaser.module.css'

const VideoTeaser = () => {

    return <Row className='my-5 py-5'>
        <Col xs="12" md="12" className={styles.video}>

            <div className={styles.effect}>
                <img src="/images/logo-coffe.png" width="180" className="mb-3" alt="this is for test" />
                <h3>کافه رستوران رامسر</h3>
                <p>حال خوب شما</p>
            </div>

            <video loop autoPlay fullscreen muted >
                <source src="/videos/teaser.mp4" />
            </video>
        </Col>
    </Row>
}

export default VideoTeaser;
