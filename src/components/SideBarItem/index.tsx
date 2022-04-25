import * as C from './styles';
import { Link } from 'react-router-dom';

import ReactComponents from '../../assets/profile.svg';

interface SideBarItemProps {
  title: string;
  description: string;
  icon: string;
  path: string;
}

function SideBarItem({ description, icon, title, path }: SideBarItemProps) {

  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.InfoArea>
          <C.Image src={ReactComponents}/>
        </C.InfoArea>
        <C.Point></C.Point>
      </Link>
    </C.Container>
  );
};

export default SideBarItem;
