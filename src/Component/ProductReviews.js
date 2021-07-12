import '../styles/ProductReview.css'
import ProductReviewCard from './ProductReviewCard.js'

const ProductReviews = ({ productReviews }) => {
    return (
        <div className="ProductReviews">
            {
                productReviews.map((item, index) => (
                    <ProductReviewCard price={item.price} image={item.image} name={item.name} review={item.review} index={item.index} key={item.image} />
                ))
            }
        </div>

    )
}

export default ProductReviews
