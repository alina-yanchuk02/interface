import sidebarBgImage from 'assets/img/nav.jpg';
import React from 'react';
import {
  MdDashboard,
  MdPeople,
  MdHome,
  MdInfo,
} from 'react-icons/md';
import { BiNews, BiTable } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink as BSNavLink,
  Col,
  Row,
} from 'reactstrap';
import bn from 'utils/bemnames';
import ua from 'assets/img/logo/aveiro.png';
import arquivo from 'assets/img/logo/arquivopng.png';
import fccn from 'assets/img/logo/fccn.png';
const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


const navItems = [
  { to: '/', name: 'Início', exact: true, Icon: MdHome },
  { to: '/sobre', name: 'Sobre o projeto', exact: true, Icon: MdInfo },
  { to: '/exemplo', name: 'Exemplo', exact: true, Icon: BiNews },
  { to: '/resultados', name: 'Resultados', exact: true, Icon: MdDashboard},
  { to: '/artigos', name: 'Todos os artigos', exact: true, Icon: BiTable },
  { to: '/recursos', name: 'Recursos e Contactos', exact: true, Icon: MdPeople },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
         <p className="barTitle">Classificação automática de artigos estigmatizantes de doenças mentais online</p>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <div >
            <Col>
            <img style={{marginLeft:"70px", marginTop:"60px"}} width="150" src={ua}/>
            <Row>
            <img style={{marginLeft:"20px", marginTop:"20px"}} width="100" src={arquivo}/>
            <img style={{marginLeft:"20px", marginTop:"20px"}} width="160" src={fccn}/>
            </Row>
            </Col>
            </div>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
