import React, { useEffect } from "react";
import { useAllStoreData } from "../../store/useAllStoreData";
import {
  useCartDeleteMutation,
  useCartListQuery,
} from "../../queries/allpages-query";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

const AddtoCart = () => {
  const { setState, addtoCartList } = useAllStoreData();
  const { data: cartget } = useCartListQuery();
  const queryClient = useQueryClient();

  console.log(cartget, "cartget");

  useEffect(() => {
    if (cartget) {
      const cartgetdata = cartget.cart?.products || [];

      console.log(cartgetdata, "cartgetdata25");
      setState({ addtoCartList: cartgetdata });
    }
  }, [cartget, setState]);

  const cartdeleteMutation = {
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["add-to-cart"] });

      console.log(res, "product deleted");
      toast.success("product delete");
    },
    onError: (res) => {
      console.log(res, "error");
      toast.success("Registration fail!");
    },
  };

  const { mutateAsync: cartDelete } = useCartDeleteMutation(cartdeleteMutation);

  const cartdelete = (id) => {
    const payload = { id };

    try {
      const responce = cartDelete(payload);
    } catch (err) {
      toast.error("Cart's not deleted");
    }
  };
  return (
    <>
      <div className="addtocart-main">
        {addtoCartList.map((mval, i) => {
          return (
            <>
              <div className="subcart">
                <div className="image">
                  <img
                    src={mval.image}
                    style={{ height: "50px", width: "50px" }}
                  />

                  <div className="quantity">
                    <button>-</button>
                    <span>
                      <strong>{mval.cartItems}</strong>
                    </span>
                    <button>+</button>
                  </div>

                  <div className="cart-delete">
                    <div className="remove">
                      <span>REMOVE</span>
                    </div>
                    <div style={{ color: "#0066C0" }}>
                      <span>SAVE FOR LATER</span>
                    </div>
                  </div>
                </div>
                <div className="cartdetail">
                  <h4>{mval.name}</h4>
                  <p>₹{mval.price} Off3 offers applied</p>
                  <p>Seller:SALEONNOW</p>
                </div>
                <div className="deliverytime">
                  <p>
                    Delivery by Sun May 5 |{" "}
                    <span style={{ color: "green" }}> ₹40Free</span>{" "}
                  </p>
                </div>
              </div>
              <div
                className="allcart-remove"
                style={{ textAlign: "end", marginTop: "10px" }}
              >
                <button onClick={() => cartdelete(mval._id)}>Cart Clear</button>
              </div>
            </>
          );
        })}
        <div className="cart-footer">
          <div className="totalprice">
            <h2>₹{cartget?.cart?.total}</h2>
          </div>
          <div className="placeorder">
            <button>Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddtoCart;
