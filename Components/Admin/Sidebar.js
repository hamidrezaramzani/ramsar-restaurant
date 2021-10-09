import React from 'react'
import { Col } from 'react-bootstrap'
import {sidebar , head_item} from '../../styles/Dashboard.module.css';
import Link from 'next/link'
function Sidebar() {
    return (
        <Col xs="12" md="3" className={sidebar}>
            <ul>

                <li className={head_item}>
                    <Link  href="/test">
                        <a>مدیریت منوی کافه</a>
                    </Link>
					
					<ul>
						<li>
							<Link  href="/coffe/add-category">
								<a>اضافه کردن دسته بندی</a>
							</Link>						
						</li>

                        <li>
							<Link  href="/coffe/add-product">
								<a>اضافه کردن محصول</a>
							</Link>						
						</li>
						<li>
							<Link  href="/coffe/manage-categories">
								<a>مدیریت دسته بندی ها</a>
							</Link>						
						</li>
					</ul>
					
					
                </li>


                <li className={head_item}>
                    <Link  href="/test">
                        <a>مدیریت منوی رستوران</a>
                    </Link>
					
					
					
					<ul>
						<li>
							<Link  href="/coffe/add-categories">
								<a>اضافه کردن دسته بندی</a>
							</Link>						
						</li>
						<li>
							<Link  href="/coffe/manage-categories">
								<a>مدیریت دسته بندی ها</a>
							</Link>						
						</li>
					</ul>
					
                </li>
            </ul>
        </Col>
        )
}

export default Sidebar
