import { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Layout from '../../Components/Admin/Layout'
import { useRouter } from 'next/router'
const AddCategory = () => {
    const ref = useRef(null);
    const router = useRouter();
    const onClickHandler = (e) => {
        e.preventDefault();
        const value = ref.current.value.trim();
        if (value) {
            fetch("/api/coffe/new", {
                method: "POST",
                body: JSON.stringify({ title: value }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res1) => res1.json())
                .then(() => {
                    router.push("/coffe/all-categories")
                }).catch((err) => {
                    console.log(err)
                    alert("مشکلی در سرور وجود دارد")
                })
        } else {
            alert("پر کنید")
        }
    }
    return <Layout>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label className="ik d-block float-end">عنوان دسته بندی</Form.Label>
                <Form.Control ref={ref} type="text" placeholder="Enter title" />
            </Form.Group>

            <Button size="sm" onClick={onClickHandler} className="ik" variant="dark" type="submit">
                اضافه کردن
            </Button>
        </Form>
    </Layout>;
}

export default AddCategory;
