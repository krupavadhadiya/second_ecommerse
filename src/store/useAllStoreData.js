import { create } from 'zustand';


export const useAllStoreData = create((set) => ({

    categoryListDatat:[],
    productListData:[],
    userData:[],
    subcategoryListData:[],
    addtoCartList:[],

   
    setState: (nexstate) => set((state) => ({ ...nexstate })),
  }));