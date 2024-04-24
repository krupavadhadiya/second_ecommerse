import { Mutation, useMutation, useQuery } from "@tanstack/react-query";
import { categoryList, productList, registerdata } from "../api/auth_servise";

export const useRegisterMutation = (mutational) =>{
  return useMutation({
    mutationKey: ["register-key"],
    mutationFn: async (data) => await registerdata(data),
    ...mutational
  });
}
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
