import React from 'react'
import { BsPlus } from 'react-icons/bs'

function Footer() {
  return (
    <footer className='bg-white flex flex-col w-[100vw] items-center' style={{position:'absolute', bottom:'0'}}>
            <ul style={{display:'flex', flexDirection:'row',width:'50%', margin:'1% auto 0 auto'}}>
                <li><a href="#" className='footer-anchor-text'>Español</a></li>
                <li><a href="#" className='footer-anchor-text'>English (US)</a></li>
                <li><a href="#" className='footer-anchor-text'>Português (Brasil)</a></li>
                <li><a href="#" className='footer-anchor-text'>Français (France)</a></li>
                <li><a href="#" className='footer-anchor-text'>Italiano</a></li>
                <li><a href="#" className='footer-anchor-text'>Deutsch</a></li>
                <li><a href="#" className='footer-anchor-text'>العربية</a></li>
                <li><a href="#" className='footer-anchor-text'>中文(简体)</a></li>
                <li><a href="#" className='footer-anchor-text'>हिन्दी</a></li>
                <li><a href="#" className='footer-anchor-text'>日本語</a></li>
                <li ><button className=' footer-button-style'><BsPlus /></button></li>
            </ul>
            <hr style={{width:'50%', margin:'.8rem'}}/>
            <ul className='footer-u-list'>
                <li><a href="#" className='footer-anchor-text'>Registrarte</a></li>
                <li><a href="#" className='footer-anchor-text'>Iniciar sesión</a></li>
                <li><a href="#" className='footer-anchor-text'>Messenger</a></li>
                <li><a href="#" className='footer-anchor-text'>Facebook Lite</a></li>
                <li><a href="#" className='footer-anchor-text'>Video</a></li>
                <li><a href="#" className='footer-anchor-text'>Lugares</a></li>
                <li><a href="#" className='footer-anchor-text'>Juegos</a></li>
                <li><a href="#" className='footer-anchor-text'>Marketplace</a></li>
                <li><a href="#" className='footer-anchor-text'>Meta Pay</a></li>
                <li><a href="#" className='footer-anchor-text'>Meta Store</a></li>
                <li><a href="#" className='footer-anchor-text'>Meta Quest</a></li>
                <li><a href="#" className='footer-anchor-text'>Instagram</a></li>
                <li><a href="#" className='footer-anchor-text'>Threads</a></li>
                <li><a href="#" className='footer-anchor-text'>Recaudaciones de fondos</a></li>
                <li><a href="#" className='footer-anchor-text'>Centro de información de votación</a></li>
                <li><a href="#" className='footer-anchor-text'>Política de privacidad</a></li>
                <li><a href="#" className='footer-anchor-text'>Centro de privacidad</a></li>
                <li><a href="#" className='footer-anchor-text'>Grupos</a></li>
                <li><a href="#" className='footer-anchor-text'>Crear anuncio</a></li>
                <li><a href="#" className='footer-anchor-text'>Crear página</a></li>
                <li><a href="#" className='footer-anchor-text'>Desarrolladores</a></li>
                <li><a href="#" className='footer-anchor-text'>Empleo</a></li>
                <li><a href="#" className='footer-anchor-text'>Cookies</a></li>
                <li><a href="#" className='footer-anchor-text'>Opciones de anuncios</a></li>
                <li><a href="#" className='footer-anchor-text'>Condiciones</a></li>
                <li><a href="#" className='footer-anchor-text'>Ayuda</a></li>
            </ul>
            <span style={{fontSize:'11px', color:'#737373', float:'left'}}>Nicolás Zunino © 2023</span>
    </footer>
  )
}

export default Footer
