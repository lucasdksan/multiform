import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

import { Container } from './styles';

import  Theme  from '../../components/Theme';
import { useForm } from '../../contexts/FormContext';
import { FormActions } from '../../types/contextTypes';
import SelectOption from "../../components/SelectOption";

function FormStep2() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=>{
    if(state.name === ""){
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      });
    }
  },[]);

  const handleNextStep = ()=>{
    if(state.name !== ''){
      navigate("/step3");
    } else {
      alert("Preencha o seus dados.");
    }
  }

  const setLevel = (level: number)=>{
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  }

  return (
    <Theme>
      <Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>
        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="😅"
          selected={ state.level === 0 }
          onClick={()=>setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há mais de 2 anos"
          icon="😎"
          selected={ state.level === 1 }
          onClick={()=>setLevel(1)}
        />
        <Link to="/" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  );
};

export default FormStep2;
