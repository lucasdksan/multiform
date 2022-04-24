import { Router } from "./router";
import { FormProvider } from "./contexts/FormContext";

import './App.css';

const App = ()=>{
  return(
    <FormProvider>
      <Router/>
    </FormProvider>
  );
}

export default App;