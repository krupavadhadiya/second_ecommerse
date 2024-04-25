import { create } from 'zustand';


export const allStoreData = create((set) => ({

    categoryListDatat:[],
    ProductListData:[],

   
    setState: (nexstate) => set((state) => ({ ...nexstate })),
  }));