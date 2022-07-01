import React, { useState } from 'react'

const fillRating = function (rating) {
    const ratings = [];
    for (let i = 0; i < Number(rating); i++) {
        ratings.push(<div className="bi-star-fill"></div>);
    }

    return(
        <div className="d-flex justify-content-center small text-warning mb-2">
            {ratings}
        </div>
    )
}

export default function Card(props) {
    // console.log(props);
    const [isAdded, setisAdded] = useState(false);
    return (
        <div className="card h-100">

            {props.old_price === "" ? "" : <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>}
            <img className="card-img-top" src={props.image} alt="..." />

            <div className="card-body p-4">
                <div className="text-center">

                    <h5 className="fw-bolder">{props.product_title}</h5>
                    
                    {fillRating(props.rating)}

                    {props.old_price === "" ? "" : <span className="text-muted text-decoration-line-through">$20.00</span>}
                    {props.new_price}
                </div>
            </div>

            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                {props.type === "product_list" ?
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div> :
                    isAdded === false ?
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {props.cartAdded(); setisAdded(true)}}>Add to cart</a></div> :
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={() => {props.cartDeleted(); setisAdded(false)}}>Remove from cart</a></div>
                }
            </div>
        </div>

    )
}
