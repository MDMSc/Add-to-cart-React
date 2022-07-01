import React from 'react'
import Card from './Card'
import card_data from './Card_Details.json'

export default function Card_Section(props) {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            {
              card_data.map((data, index) => (
                <div className="col mb-5" key={index}>
                  <Card
                    product_title={data.product_title}
                    type={data.type}
                    image={data.image}
                    old_price={data.old_price}
                    new_price={data.new_price}
                    rating={data.rating}
                    addedToCart={data.addedToCart}
                    id={data.id}
                    cartAdded={props.cartAdded}
                    cartDeleted={props.cartDeleted}
                  />
                </div>
              ))}

          </div>
        </div>
      </section>
    </>
  )
}
