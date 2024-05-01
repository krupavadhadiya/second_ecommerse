import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAllStoreData } from "../../store/useAllStoreData";
import { toast } from "sonner";
import { useCategoryDeleteMutation } from "../../queries/allpages-query";
import { useQueryClient } from "@tanstack/react-query";

const CategoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const { categoryListDatat } = useAllStoreData();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (id && categoryListDatat) {
      const findDataDetail = categoryListDatat.find(
        (category) => category._id === id
      );
      setProduct(findDataDetail);
      // console.log(product,"product88")
    }
  }, [id, categoryListDatat]);

  const categorydeleteMutation = {
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["category-list"] });
      navigate("/dashbord");
      console.log(res, "category deleted");
      toast.success("category delete");
    },
    onError: (res) => {
      console.log(res, "error");
      toast.success("Registration fail!");
    },
  };

  const { mutateAsync: categoryDelete } = useCategoryDeleteMutation(
    categorydeleteMutation
  );

  const categorydeleteData = async (id) => {
    console.log(id, "category delete");
    try {
      const responce = await categoryDelete({ _id: id });
    } catch (e) {
      toast.error("An error occurred.");
    }
  };

  return (
    <>
      {product ? (
        <div>
          <h2>Category Detail</h2>
          <p>Name: {product.name}</p>

          <button onClick={() => categorydeleteData(product._id)}>
            Delete
          </button>
          <button>Edit</button>
        </div>
      ) : null}
    </>
  );
};
export default CategoryDetail;
