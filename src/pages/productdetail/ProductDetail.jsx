import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import { useAllStoreData } from "../../store/useAllStoreData";
import wc from "../../assets/Images/mobile2.webp";
import { toast } from "sonner";
import { useProductAddtoCartMutation } from "../../queries/allpages-query";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { productListData } = useAllStoreData();
  const navigate = useNavigate();

  useEffect(() => {
    const findProduct = productListData.find((product) => product._id === id);
    setProduct(findProduct);
  }, [id, productListData]);

  console.log(product, "product27");

  const productaddtocartMutation = {
    onSuccess: (res) => {
        navigate('/addtocart');
      toast.success("product addtocart");
    },
    onError: (res) => {
      toast.error("not added");
    },
  };

  const { mutateAsync: addtocartdata } = useProductAddtoCartMutation(
    productaddtocartMutation
  );

  const addtocart = async (productId) => {
    const payload = { productId }; 
    try {
      const responce = await addtocartdata(payload);
    } catch (err) {
      console.error(err, "addtocarterror");
    }
  };
  return (
    <div className="product-main">
      <h2>Product Details</h2>

      {product ? (
        <div className="product-detail">
          <div className="image">
            <img src={wc} alt="" />

            <div className="allbtn">
              <button
                className="addtocart"
                onClick={() => addtocart(product._id)}
              >
                Add to Cart
              </button>
              <button className="buynow">Buy Now</button>
            </div>
          </div>
          <div className="detail-page">
            <div className="heading">
              <p> {product.name}</p>
            </div>
            <div className="review-cls">
              <div className="review">4.5</div>
              <div>
                <p>257 Ratings & 13 Reviews</p>
              </div>
            </div>
            <div>
              <div className="price">
                <p>₹{product.price}</p>
              </div>
              <div className="offer">
                <h4>Available offers</h4>
                <p>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p>
                <p>Buy for 2000 get ₹500 off your Next BuyT&C</p>
                <p>
                  Bank OfferGet ₹25* instant discount for the 1st Flipkart Order
                  using Flipkart UPIT&C
                </p>
              </div>
              <strong>brand:</strong> {product.brand}
            </div>
            <div>
              <strong>category:</strong> {product.category}
            </div>
            <div>
              <strong>discription:</strong> {product.discription}
            </div>
            <div>
              <strong>quantity:</strong> {product.quantity}
            </div>
            <div>
              <strong>subCategory:</strong> {product.subCategory}
            </div>
          </div>
        </div>
      ) : null}

      {/* <p><strong>Name:</strong> {product.name}</p> */}
      {/* <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p> */}
      {/* Add additional product details as needed */}
    </div>
  );
};

export default ProductDetail;
