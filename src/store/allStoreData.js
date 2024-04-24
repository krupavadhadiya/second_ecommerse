import { create } from 'zustand';


export const allStoreData = create((set) => ({

    categoryListDatat:[],

   
    setState: (nexstate) => set((state) => ({ ...nexstate })),
  }));