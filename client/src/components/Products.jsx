import { useParams } from "react-router-dom"
import { useGetCategoryProductsQuery } from "../features/store/categories-api";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/store/cartSlice";

const Products = () => {
    const { productId } = useParams()
    const { data } = useGetCategoryProductsQuery(productId);
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const addProductToCart = (product) => {
        dispatch(addToCart(product))
    }

    console.log("cart", cart);

    if (!data) return <div>Loading</div>

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Product: {productId}</h1>
            <div className="item-container">
                {
                    data.map((product, idx) => (
                        <div key={idx}>
                            <div key={idx} className="item">
                                <h3>{product.title}</h3>
                                <img src={product.image} alt={product.name} style={{ height: "200px", width: "200px" }} />
                                <p>${product.price}</p>
                            </div>
                            <button onClick={() => addProductToCart(product)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Products;