import React from 'react'

function ProductDetail(props) {
    console.log(props)
  return (
    <div>
        {
                props.data.map((elem,idx)=>{
                  return(
                    <>
                  { props.data.length-6===idx && <h2>{elem.category}</h2>}
                    <div className="productdetailmain">
                    <div>
                        <img className="productDeatilsimg"src={elem.image} alt="" />
                    </div>
                    <div>
                       <span> <h3>Product Name</h3>
                        <p>{elem.title}</p></span> 
                        <span> <h3>Product Price</h3> 
                        <p>{elem.price}</p></span>
                       <span><h3>Product description</h3>
                        <p>{elem.description}</p></span>
                         <span><h3>Product Rating</h3>
                        <p>{elem.rating.rate}</p></span>
                    </div>

                    </div>
                    </>
                  )
                })
              }
    </div>
  )
}

export default ProductDetail