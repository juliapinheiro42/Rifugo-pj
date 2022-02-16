import React, {  useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
    NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Header = (props) => {



    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='header w-100'>
            <Navbar  dark expand="md" className='nav'>
                <div >
                <Link to='/'> <img src={logo}/></Link>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav  className='m-2 navbar' navbar>
                        <NavItem >
                            <Link to='/aboutus'> About us</Link>
                        </NavItem>
                        <NavItem className='item'>
                            <Link to='signin'>SignIn/ SignUp</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Documentation
                </DropdownToggle>
                            <DropdownMenu right className='drop'>
                                <DropdownItem>
                                    <Link to='/documentation'> Documentação</Link>
                  </DropdownItem>
                                <DropdownItem>
                                <Link to='/duvidas'> Dúvidas </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to='/documentation'> Tradutores</Link>
                  </DropdownItem>
                        <DropdownItem divider/>
                                <DropdownItem>
                                <Link to='/map'> Map </Link>
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                       
                    </Nav>

                </Collapse>

            </Navbar>
  
        </div>
    );
}


export default Header;
