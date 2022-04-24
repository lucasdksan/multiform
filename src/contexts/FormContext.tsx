import { createContext, useContext, useReducer } from "react";
import { ContextType, Action, FormActions, FormProviderProps, State } from "../types/contextTypes";

const initialData = {
    currentStep: 0,
    name: "",
    level: 0,
    email: "",
    github: ""
}

const FormContext = createContext<ContextType | undefined>(undefined);

const formReducer = (state: State, action: Action)=>{
    switch(action.type){
        case FormActions.setCurrentStep: 
            return { ...state, currentStep: action.payload };
        break;
        case FormActions.setName: 
            return { ...state, name: action.payload };
        break;
        case FormActions.setLevel: 
            return { ...state, level: action.payload };
        break;
        case FormActions.setEmail: 
            return { ...state, email: action.payload };
        break;
        case FormActions.setGithub: 
            return { ...state, github: action.payload };
        break;
        default:
            return state;
    }
}

export const FormProvider = ({children}:FormProviderProps)=>{
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch }

    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = ()=>{
    const context = useContext(FormContext);
    if(context === undefined){
        throw new Error("useForm precisa ser usado dentro do formProvider");
    }
    return context;
}