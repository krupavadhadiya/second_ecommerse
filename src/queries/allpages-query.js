import { useMutation, useQuery } from "@tanstack/react-query"
import { brandList, categoryList, productAddData, productList, userDetail } from "../api/auth_servise"

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