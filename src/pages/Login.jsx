import React from 'react'
import Logo from '../assets/img/facebook-logo.svg'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { changeTitle } from '../../hooks/dynamicTitles'

function Login() {
{changeTitle('Login | Home')}
  return (
    <div className='bg-[#f0f2f5] w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
        <div className='w-[60%] flex flex-row justify-evenly'>
            <section className='w-[500px] pr-[32px]'>
                <div className='pt-[15%]'>
                    <img src={Logo} alt="facebook" className='m-[-28px] h-[106px]'/>
                </div>
                <h2 className='text-[28px] mt-5 leading-8'>Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</h2>
            </section>
            <section className='w-[396px] h-[456px] text-center'>
                <div className='bg-white shadow-md shadow-[#6666] w-full p-3 flex flex-col h-[315.817px] items-center justify-evenly rounded-lg'>
                    <input type="text" required className='rounded-lg p-3 border w-full text-lg active:outline-1 focus:outline-1 font-arial font-thin' placeholder='Correo electrónico o número de teléfono'/>
                    <input type="password" className='rounded-lg p-3 border w-full text-lg font-arial font-thin' placeholder='Contraseña'/>
                    <Link to='/home' className='rounded-lg w-full hover:cursor-pointer p-3 bg-[#1877f2] text-lg text-[#fff] font-semibold border-none'>Iniciar sesión</Link>
                    <a href="#" style={{color:'##1877f2', fontSize:'14px'}} className='text-[##1877f2] visited:text-[#1877f2] text-sm hover:underline'>¿Olvidaste tu contraseña?</a>
                    <hr className='w-full'/>
                    <button className='bg-[#42b72a] text-[#fff] p-3 text-lg font-semibold rounded-lg'>Crear cuenta nueva</button>
                </div>
                <div className='font-arial text-sm mt-[28px]'><a href="#" className='font-semibold hover:underline'>Crea una página</a> para una celebridad, una marca o un negocio.</div>
            </section>
        </div>
        <Footer/>
    </div>
  )
}

export default Login
