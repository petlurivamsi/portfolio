import "./productList.css";
import Product from "../Product/Product"

const ProductList = () => {
    return (
        <div className="pl"> 
                <div className="pl-texts">
                    <h1 className="pl-title">Create and inspire.Its Vamsi.</h1>
                    <p className="pl-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rerum dolore reprehenderit nostrum obcaecati facere saepe repellendus laudantium dolorum quod. Officiis placeat eaque commodi sed!
                    </p>
                </div>

                <div className="pl-list">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
        </div>
    )
}

export default ProductList
