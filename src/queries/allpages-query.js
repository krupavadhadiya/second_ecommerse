import { useMutation, useQuery } from "@tanstack/react-query"
import { SubCategoryList, brandList, categoryAddData, categoryDelete, categoryList, productAddData,cartDetail, productList, productListSearch, prouctAddToCart, prouctDelete, userDetail, cartDataDelete } from "../api/auth_servise"

export const useCategoryQuery = () =>{
    return useQuery({
      queryKey:["category-list"],
      queryFn: async () => await categoryList(),
    })
  }
  export const useProductListQuery = (data) =>{
    return useQuery({
      queryKey:["product-list"],
      queryFn: async () => await productList(data),
    })
  }
  // export const useProductListSearchQuery = (data) =>{
  //   return useQuery({
  //     queryKey:["product-search"],
  //     queryFn: async () => await productListSearch(data),
  //   })
  // }
  
  export const useUserDetailQuery = () =>{
    return useQuery({
      queryKey:["user -detail"],
      queryFn: async () => await userDetail(),
    })
  }
  

  
  export const useProductaddMutation = (mutational) =>{
  
    return useMutation({
      mutationKey: ["product-add"],
      mutationFn: async (data) => await productAddData(data),
      ...mutational
    });
  }
  export const useCategoryAddMutation = (mutational) =>{
  
    return useMutation({
      mutationKey: ["category-add"],
      mutationFn: async (data) => await categoryAddData(data),
      ...mutational
    });
  }
  
  export const useBrandListQuery = () =>{
    return useQuery({
      queryKey:["brand-list"],
      queryFn: async () => await brandList(),
    })
  }
  export const useSubCategoryListQuery = () =>{
    return useQuery({
      queryKey:["subategory-list"],
      queryFn: async () => await SubCategoryList(),
    })
  }
  export const useProductDeleteMutation = (mutational) =>{
  
    return useMutation({
      mutationKey: ["product-delete"],
      mutationFn: async (payload) => await prouctDelete(payload),
      ...mutational
    });
  }
  export const useCategoryDeleteMutation = (mutational) =>{
  
    return useMutation({
      mutationKey: ["catgory-delete"],
      mutationFn: async (payload) => await categoryDelete(payload),
      ...mutational
    });
  }
  export const useCartDeleteMutation = (mutational) =>{
  
    return useMutation({
      mutationKey: ["cart-delete"],
      mutationFn: async (payload) => await cartDataDelete(payload),
      ...mutational
    });
  }
  export const useProductAddtoCartMutation = (mutational) =>{
  
    return useMutation({
      mutationKey: ["product-addtocart"],
      mutationFn: async (payload) => await prouctAddToCart(payload),
      ...mutational
    });
  }

  export const useCartListQuery = () =>{
    return useQuery({
      queryKey:["add-to-cart"],
      queryFn: async () => await cartDetail(),
    })
  }
  