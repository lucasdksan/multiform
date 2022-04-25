import { ReactNode } from 'react';
import Header from '../Header';
import SideBarItem from '../SideBarItem';
import * as C  from './styles';

interface ThemeProps {
  children: ReactNode;
}

function Theme({ children }: ThemeProps) {
  return (
    <C.Container>
      <C.Area>
        <Header/>
        <C.Steps>
          <C.SideBar>
            <SideBarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
            />
            <SideBarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
            />
            <SideBarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
            />
          </C.SideBar>
          <C.Page>
            { children }
          </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

export default Theme;
