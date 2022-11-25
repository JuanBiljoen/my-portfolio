import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                        <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink("aboutme")}>About Me</Nav.Link>

                        <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink("connect")}>Let's Connect</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://twitter.com/Juan94949036"><img src={"https://cdn-icons-png.flaticon.com/512/733/733635.png"} alt="" /></a>
                            <a href="https://www.linkedin.com/in/juan-viljoen-409895245/"><img src={"https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"} alt="" /></a>
                            <a href="https://studio.youtube.com/channel/UCTvF4Js1H3r3vqk9qvUwBfA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"><img src={"https://cdn-icons-png.flaticon.com/512/1077/1077046.png"} alt="" /></a>
                        </div>
                        <button href="#connect" className='vvd' onClick={() => onUpdateActiveLink("connect")}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;