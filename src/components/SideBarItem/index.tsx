import * as C from './styles';
import { Link } from 'react-router-dom';

import ReactProComponents from '../../assets/profile.svg';
import ReactBookComponents from '../../assets/book.svg';
import ReactMailComponents from '../../assets/mail.svg';

interface SideBarItemProps {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
}

function SideBarItem({ description, icon, title, path, active }: SideBarItemProps) {

  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.InfoArea active={active}>
          {
            icon === "profile" && <C.Image src={ReactProComponents}/>
          }

          {
            icon === "book" && <C.Image src={ReactBookComponents}/>
          }

          {
            icon === "mail" && <C.Image src={ReactMailComponents}/>
          }
        </C.InfoArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};

export default SideBarItem;
