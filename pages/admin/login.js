import React, { useState } from 'react'
import { useRouter } from 'next/router'
import withSession from '../../lib/session'

function Login() {
    const router = useRouter();
    const [values, setValues] = useState({ username: "", password: "" });
    const onSubmit = (e) => {
        e.preventDefault();

        fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res1) => res1.json())
            .then(res => {
                if(res.login){
                  router.push("/admin/dashboard")
                }else{
                  alert("نام کاربری یا رمز عبور اشتباه است")
                }
            }).catch((err) => {
              console.log(err)
              alert("مشکلی در سرور وجود دارد")
            })
    }

    const handleValue = (e) => {
        const { value, name } = e.target;
        setValues((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="form-box">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal ik text-center">ورود به پنل رستوران رامسر</h1>
                <label htmlFor="inputUsername" className="sr-only">نام کاربری</label>
                <input required type="text" name="username" id="inputUsername" className="form-control" value={values.username} onChange={handleValue} placeholder="Username" />
                <br />
                <label htmlFor="inputPassword" className="sr-only">رمز عبور</label>
                <input required type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" value={values.password} onChange={handleValue} />

                <button className="btn  btn-sm btn-primary btn-block mt-3" onClick={onSubmit} type="submit">ورود</button>

            </form>
        </div>
    )
}


export const getServerSideProps = withSession(async function ({ req, res }) {
    const user = req.session.get('user')
    if (user) {
        return {
            redirect: {
                destination: '/admin/dashboard',
                permanent: false,
            },
        }
    }

    return {
        props: { user: req.session.get('user') },
    }
})
export default Login
