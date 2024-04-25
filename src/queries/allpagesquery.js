import { useQuery } from "@tanstack/react-query"
import { categoryList, productList } from "../api/auth_servise"

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
  