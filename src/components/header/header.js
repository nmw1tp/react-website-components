import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Schedule from "../time/time";

function Header() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Dilya's</Navbar.Brand>
            <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show' : ''}>
                <Nav className="mr-auto">
                    <Schedule/>
                    <Nav.Link href="#home">Instagram</Nav.Link>
                    <Nav.Link href="#home">WhatsApp</Nav.Link>
                    <NavDropdown title="Про мои услуги косметолога" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#srv1">Консультация и диагностика кожи</NavDropdown.Item>
                        <NavDropdown.Item href="#srv2">Очищение лица</NavDropdown.Item>
                        <NavDropdown.Item href="#srv3">Пилинг</NavDropdown.Item>
                        <NavDropdown.Item href="#srv4">Процедуры увлажнения кожи</NavDropdown.Item>
                        <NavDropdown.Item href="#srv5">Процедуры омоложения</NavDropdown.Item>
                        <NavDropdown.Item href="#srv6">Удаление пигментных пятен и татуировок</NavDropdown.Item><NavDropdown.Item href="#action/3.3">Пилинг</NavDropdown.Item>
                        <NavDropdown.Item href="#srv7">Коррекция морщин и объемов</NavDropdown.Item>
                        <NavDropdown.Item href="#srv8">Лечение акне и других проблем кожи</NavDropdown.Item>
                        <NavDropdown.Item href="#srv9">Уход за кожей головы и волосами</NavDropdown.Item>
                        <NavDropdown.Item href="#srv10">Уход за руками и ногами</NavDropdown.Item>
                        <NavDropdown.Item href="#srv11">Коррекция формы бровей и ресниц </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#srv12">Ссылки</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
