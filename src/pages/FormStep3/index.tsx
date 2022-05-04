import { useNavigate, Link } from "react-router-dom";
import { useEffect, ChangeEvent } from "react";

import { Container } from './styles';

import  Theme  from '../../components/Theme';
import { useForm } from '../../contexts/FormContext';
import { FormActions } from '../../types/contextTypes';

function FormStep3() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=>{
    if(state.name === ""){
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  },[]);

  const handleEmailChange = (event:ChangeEvent<HTMLInputElement>)=>{
    dispatch({
      type: FormActions.setEmail,
      payload: event.target.value
    });
  }

  const handleGitHubChange = (event:ChangeEvent<HTMLInputElement>)=>{
    dispatch({
      type: FormActions.setGithub,
      payload: event.target.value
    });
  }

  const handleNextStep = ()=>{
    if(state.email !== '' && state.github !== ''){
      console.log(state);
    } else {
      alert("Preencha os dados.");
    }
  }

  return (
    <Theme>
      <Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>
        <hr />

        <label htmlFor="">
          Qual seu e-mail?
          <input 
            type="email" 
            value={state.email}
            onChange={handleEmailChange}
            autoFocus
          />
        </label>

        <label htmlFor="">
          Qual seu GitHub?
          <input 
            type="url" 
            value={state.github}
            onChange={handleGitHubChange}
          />
        </label>

        <Link to="/step2" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </Container>
    </Theme>
  );
};

export default FormStep3;
