import React, { useEffect } from "react";
import { useAllStoreData } from "../../store/useAllStoreData";
import {
   
    useCartListQuery
  } from "../../queries/allpages-query";

const AddtoCart = () => {
    const { setState } = useAllStoreData();
  const { data: cartget } = useCartListQuery();

  useEffect(() => {
    if (cartget) {
      //   const categoryResData = categoryData.data?.data?.category || [];
      //   setState({ categoryListDatat: categoryResData });
    }
  }, [cartget, setState]);

  return <div>addtocart</div>;
};

export default AddtoCart;
