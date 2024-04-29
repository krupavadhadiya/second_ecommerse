import { useMutation, useQuery } from "@tanstack/react-query"
import { SubCategoryList, brandList, categoryList, productAddData, productList, prouctDelete, prouctSearch, userDetail } from "../api/auth_servise"

export const useCategoryQuery = () =>{
    return useQuery({
      queryKey:["category-list"],
      queryFn: async () => await categoryList(),
    })
  }
  export const useProductListQuery = () =>{
    return useQuery({
      queryKey:["product-list"],
      queryFn: async () => await productList(),
    })
  }
  
  export const useUserDetailQuery = () =>{
    return useQuery({
      queryKey:["user -detail"],
      queryFn: async () => await userDetail(),
    })
  }
  
  // export const useproductaddMutation = (mutational) =>{
  
  //   return useMutation();
   
  // }
  
  export const useProductaddMutation = (mutational) =>{
  
    return useMutation({
      mutationKey: ["product-add"],
      mutationFn: async (data) => await productAddData(data),
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
  export const useProductSearchMutation = (mutational) =>{
  
    return useMutation({
      mutationKey: ["product-search"],
      mutationFn: async (value) => await prouctSearch(value),
      ...mutational
    });
  }