import { ReactNode } from 'react';
import Header from '../Header';
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
