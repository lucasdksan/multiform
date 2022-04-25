import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";

import { Container } from './styles';

import  Theme  from '../../components/Theme';
import { useForm } from '../../contexts/FormContext';
import { FormActions } from '../../types/contextTypes';

function FormStep1() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=>{
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  },[]);

  const handleNextStep = ()=>{
    if(state.name !== ''){
      navigate("/step2");
    } else {
      alert("Preencha o seus dados");
    }
  }

  const handleNameChange=(event:ChangeEvent<HTMLInputElement>)=>{
    dispatch({
      type: FormActions.setName,
      payload: event.target.value
    });
  }

  return (
    <Theme>
      <Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr />
        <label htmlFor="">
          Seu nome completo.
          <input 
            type="text" 
            value={state.name}
            onChange={(e)=>handleNameChange(e)}
            autoFocus
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  );
};

export default FormStep1;
