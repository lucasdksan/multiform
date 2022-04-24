import { ReactNode } from "react";

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

export type State = {
    currentStep: number,
    name: string,
    level: 0 | 1,
    email: string,
    github: string
}

export type Action = {
    type: FormActions,
    payload: any
}

export type ContextType = {
    state: State,
    dispatch: (action: Action) => void,
}

export type FormProviderProps = {
    children: ReactNode
}
