import { create } from 'zustand';


export const allStoreData = create((set) => ({

    categoryListDatat:[],
    ProductListData:[],
    userData:[],

   
    setState: (nexstate) => set((state) => ({ ...nexstate })),
  }));