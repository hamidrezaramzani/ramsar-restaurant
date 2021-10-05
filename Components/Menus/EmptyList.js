import React from 'react'

function EmptyList(props) {
    return (
        <div className="empty-list">
            <img src={props.image} />
            <h3>محصولی موجود نیست.</h3>
        </div>
    )
}

export default EmptyList
