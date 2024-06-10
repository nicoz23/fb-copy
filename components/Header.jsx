import React, { useState, useEffect } from 'react'
import Logo from '/app-facebook-circle-bp.png'
import { GoHomeFill } from 'react-icons/go'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import { RiGroup2Line } from 'react-icons/ri'
import { CgGames } from 'react-icons/cg'
import { PiDotsNineBold } from 'react-icons/pi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FaShop  } from 'react-icons/fa6'
import { HiBell } from 'react-icons/hi'
import { IoMdArrowBack } from 'react-icons/io'
import Pic from '/nopic.jpg'
import { Link, useLocation} from 'react-router-dom'
import LateralBar from './LateralBar'
import EventosImg from '/eventos.png'

function Header() {

  const [ section, setSection ] = useState('home')
  const changeSection = (sec) => setSection(sec)
  const location = useLocation(); // Obtiene la ruta actual

  // Utiliza useEffect para actualizar el estado "section" cuando la ruta cambia
  useEffect(() => {
    const path = location.pathname;
    // Implementa la lógica para asignar "section" según la ruta actual
    if (path === '/home') {
      setSection('home');
    } else if (path === '/video') {
      setSection('video');
    } else if (path === '/marketplace') {
      setSection('market');
    } else if (path === '/groups') {
      setSection('group');
    } else if (path === '/games') {
      setSection('play');
    }
  }, [location.pathname]);

  const [ search, setSearch ] = useState(false)
  const onSearch = (searchbar) => setSearch(searchbar)

  const [ menu, setMenu ] = useState(false)
  const openMenu = (menu) => setMenu(menu)

  const [ messenger, setMessenger ] = useState(false)
  const openMsg = (msg) => setMessenger(msg)

  const [ notification, setNotification ] = useState(false)
  const openNotification = (notification) => setNotification(notification)

  const [ account, setAccount ] = useState(false)
  const openAccount = (account) => setAccount(account)

  return (
    <>
      <div style={{
          display:'inline-flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          height:'3.4rem',
          width:'100%',
          backgroundColor:'#fff',
          boxShadow:'0 2px 2px #b3b3b384'
      }}>
        <div style={{display:'inline-flex', width:'fit-content', marginLeft:'.9%',float:'left'}}>
          {
            search === false ? <Link to="/" style={{marginRight:'3%'}}><img src={Logo} alt="facebook" style={{height:'40px',width:'40px', minWidth:'40px'}}/>
            </Link>  : <button onClick={() => onSearch(false)} className='header-searchbar-onfocus-arrowback'>
                  <IoMdArrowBack style={{
                    fontSize:'20px',
                    color:'#65676b'
                    }}/>
                </button>
          }
          <div className='searchbarWrapper'>
            <input type="text" onBlur={() => onSearch(false)} onFocus={() => onSearch(true)} placeholder={`${search === false ? '🔍︎' : ''} Buscar en Facebook`} className={`header-searchbar`}/>
            { search === true &&
            <div>
              <span>No hay búsquedas recientes</span>
            </div>}
          </div>
        </div>
        <div>
          <ul className='header-buttons-nav'>
              <li className={`${section === 'home' && 'header-li-active header-li-active-no-hover'}`}>
                <Link to='/home' className={`header-li`}>
                  <GoHomeFill className={`header-button ${section === 'home' && 'header-button-active'} `}/>
                </Link>
              </li>
              <li  className={`${section === 'video' && 'header-li-active header-li-active-no-hover'}`}>
                <Link to='/video' className={`header-li`}>
                  <MdOutlineOndemandVideo className={`header-button ${section === 'video' && 'header-button-active'} `}/>
                </Link>
              </li>
              <li className={`${section === 'market' && 'header-li-active header-li-active-no-hover'}`}>
                <Link to='/marketplace' className={`header-li`}>
                  <FaShop className={`header-button ${section === 'market' && 'header-button-active'} `}/>
                </Link>
              </li>
              <li className={`${section === 'group' && 'header-li-active header-li-active-no-hover'}`}>
                <Link to='/groups' className={`header-li`}>
                  <RiGroup2Line className={`header-button ${section === 'group' && 'header-button-active'} `}/>
                </Link>
              </li>
              <li className={`${section === 'play' && 'header-li-active header-li-active-no-hover'}`}>
                <Link to='/games' className={`header-li`}>
                  <CgGames className={`header-button ${section === 'play' && 'header-button-active'} `}/>
                </Link>
              </li>
          </ul>
        </div>
        <div style={{width:'fit-content', marginRight:'1.5%'}}>
          <ul style={{display:'inline-flex'}}>
              <li onClick={() => openMenu(!menu)} ><button style={{borderRadius:'50%',backgroundColor:'#f0f2f5', height:'40px', width:'40px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}><PiDotsNineBold style={{fontSize:'1.5rem'}}/></button></li>
              <li style={{marginLeft:'3.3%'}}><button style={{borderRadius:'50%',backgroundColor:'#f0f2f5', height:'40px', width:'40px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}><FaFacebookMessenger style={{fontSize:'1.5rem'}}/></button></li>
              <li style={{marginLeft:'3.3%'}}><button style={{borderRadius:'50%',backgroundColor:'#f0f2f5', height:'40px', width:'40px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}><HiBell style={{fontSize:'1.5rem'}}/></button></li>
              <li style={{marginLeft:'3.3%'}}><button style={{borderRadius:'50%',backgroundColor:'#f0f2f5', height:'40px', width:'40px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}><img src={Pic} alt="profilepic" style={{
              height:'40px',
              width:'40px',
              borderRadius:'50%'
          }}/></button></li>
          </ul>
          { menu === true &&
          <div className='header-menu-open'>
            <h2 style={{width:'100%', float:'left', fontWeight:'700', fontSize:'1.5rem'}}>
                Menú
              </h2>
            <div className='header-menu'>
              <div className='header-menu-socialsec'>
                <input placeholder='🔍︎ Buscar en el menú' type="text" />
                <span>Social</span>
                <ul>
                  <li>
                    <img src={EventosImg}
                    alt="" style={{height:'36px', width:'36px'}}/>
                    <div>
                      <span>Eventos</span>
                      <p>Organiza o busca eventos y otras cosas para hacer online y cerca de ti.</p>
                    </div>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <div>
                      <span>Amigos</span>
                      <p>Busca amigos o personas que quizás conozcas.</p>
                    </div>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <div>
                      <span>Grupos</span>
                      <p>Conéctate con personas que comparten tus mismos intereses.</p>
                    </div>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <div>
                      <span>Noticias</span>
                      <p>Mira las publicaciones relevantes de personas y páginas que sigues.</p>
                    </div>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <div>
                      <span>Favoritos</span>
                      <p>View post by Favorites</p>
                    </div>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <div>
                      <span>Feeds</span>
                      <p>Mira las publicaciones más recientes de tus amigos, grupos, páginas y mucho más</p>
                    </div>
                  </li>
                  <li>
                    <img src="" alt="" />
                    <div>
                      <span>Páginas</span>
                      <p>Descubre negocios en Facebook y conéctate con ellos.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='header-menu-crearsec'>
                <h2>Crear</h2>
                <ul><img src="" alt="" /><span>Publicación</span></ul>
                <ul><img src="" alt="" /><span>Historia</span></ul>
                <ul><img src="" alt="" /><span>Reel</span></ul>
                <ul><img src="" alt="" /><span>Acontecimiento importante</span></ul>
                <br />
                <ul><img src="" alt="" /><span>Página</span></ul>
                <ul><img src="" alt="" /><span>Anuncio</span></ul>
                <ul><img src="" alt="" /><span>Grupo</span></ul>
                <ul><img src="" alt="" /><span>Evento</span></ul>
                <ul><img src="" alt="" /><span>Publicación de Marketplace</span></ul>
              </div>
            </div>
          </div> 
          }
        </div>
      </div>
      {section !== 'home' ? null : <LateralBar/>}
    </>
  )
}

export default Header
