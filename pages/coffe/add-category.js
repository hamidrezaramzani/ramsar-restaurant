import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Layout from '../../Components/Admin/Layout'
const AddCategory = () => {

    const onClickHandler = (e) => {
        e.preventDefault();
        console.log("Hi");
    }
    return <Layout>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label className="ik d-block float-end">عنوان دسته بندی</Form.Label>
                <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>

            <Button size="sm" onClick={onClickHandler} className="ik" variant="dark" type="submit">
                اضافه کردن
            </Button>
        </Form>
    </Layout>;
}

export default AddCategory;
