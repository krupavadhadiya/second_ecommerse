import React from "react";
import Routefile from "./route-file/Routefile";
import '../src/assets/scss/Main.scss'
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient, QueryClientContext } from "@tanstack/react-query";

const App = () => {

  const queryClient = new QueryClient();
  return (
    <div>
    
    <QueryClientProvider client={queryClient}>
    <Routefile /> 
    </QueryClientProvider>
    
  
    </div>
  );
};

export default App;
