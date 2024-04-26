import { Mutation, useMutation, useQuery } from "@tanstack/react-query";
import { categoryList, productList, registerdata } from "../api/auth_servise";

export const useRegisterMutation = (mutational) =>{
  
  return useMutation({
    mutationKey: ["register-key"],
    mutationFn: async (data) => await registerdata(data),
    ...mutational
  });
}
