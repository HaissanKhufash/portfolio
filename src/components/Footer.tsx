import './Footer.css'
import { Github, Instagram, Linkedin, Mail, Whatsapp } from './Icons'

export default function Footer() {
    return (
        <footer className='page-footer'>
            <h3>Did you get interested about all this stuff? Contact me on:</h3>
            <div className='network-icons'>
                <a href='https://www.instagram.com/khufash.haissan/' target='_blank'>
                    <Instagram/>
                </a>
                <a href='https://wa.me/+573012544695' target='_blank'>
                    <Whatsapp/>
                </a>
                <a href='https://github.com/HaissanKhufash' target='_blank'>
                    <Github/>
                </a>
                <a href='https://www.linkedin.com/in/haissan-khufash-827191225/' target='_blank'>
                    <Linkedin/>
                </a>
                <a href='mailto:haissank@gmail.com' target='_blank'>
                    <Mail/>
                </a>
            </div>
        </footer>
    )
}