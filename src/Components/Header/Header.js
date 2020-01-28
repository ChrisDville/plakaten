import React from 'react';
import './Header.scss';

import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'

export default function Header() {
    return (
        <header>
            <Navbar expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link className="bg-red" href="/">Forside</Nav.Link>
                    <Nav.Link className="bg-yellow" href="/om-plakaten">Om Plakaten</Nav.Link>
                    <Nav.Link className="bg-green" href="/kontakt">Kontakt</Nav.Link>

                    <Form inline className="searchbar-header">
                        <FormControl type="text" placeholder="Search" />
                        <Button variant="info">SØG</Button>
                    </Form>

                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
