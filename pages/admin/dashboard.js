import React from 'react'
import withSession from '../../lib/session'
import {Container , Row , Col} from 'react-bootstrap'
import Layout from '../../Components/Admin/Layout'
function dashboard(props) {
    return (
        <Layout>
          <h5 className="text-center ikb d-block">به پنل مدیریت رستوران رامسر خوش آمدید</h5>
        </Layout>
    )
}



export const getServerSideProps = withSession(async function ({ req, res }) {
    const user = req.session.get('user')
    if (!user) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false,
            },
        }
    }

    return {
        props: { user: req.session.get('user') },
    }
})

export default dashboard
