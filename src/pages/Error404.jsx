import React from 'react'
import Icon from '/page-404.svg'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { changeTitle } from '../../hooks/dynamicTitles'

function Error404() {
  {changeTitle('Contenido no disponible | Facebook')}
  return (
      <>
      <Header />
      <div style={{height:'100vh', width:'100vw',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#f0f2f5'}}>
        <div style={{textAlign:'center', width:'23%'}} className='error404'>
          <img src={Icon} alt="Error" style={{height:'7rem',width:'7rem', margin:'0 auto'}}/>
          <h2 style={{fontSize:'1.25rem', lineHeight:'24px', color:'#65676b', fontWeight:'bold'}}>Este contenido no está disponible en este momento</h2>
          <span style={{color:'#65676b'}}>Por lo general, esto sucede porque el propietario solo compartió el contenido con un grupo reducido de personas, cambió quién puede verlo o este se eliminó.</span>
          <br />
          <button>Ir a la sección de noticias</button>
          <br />
          <Link to="/home">Volver</Link><br />
          <a href="#">Ir al servicio de ayuda</a>
        </div>
      </div>
      </>
  )
}

export default Error404
