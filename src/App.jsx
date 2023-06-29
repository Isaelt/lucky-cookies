import './App.css'
import LuckyCookie from './components/cookie'
import phrases from './data/phrases.json'
import { useState } from 'react'
import AuthorPhrase from './components/author'

function App() {
  //console.log(phrases.length)
  
  const [index, setIndex] = useState(0)
  const images = ["/fondo1.jpg", "/fondo2.jpg", "/fondo3.jpg", "/fondo4.jpg", "/fondo1.png", "/fondo2.png", "/fondo3.png", "/fondo4.png"]

  const changePhrase = () => {
  
      setIndex(Math.floor(Math.random() * phrases.length))
      console.log(Math.floor(Math.random() * phrases.length))
  }
  
  document.body.style = `background-image: url(${images[Math.floor(Math.random() * images.length)]});`

  return (
    <>
      <LuckyCookie
      data={phrases[index]}
      />
      <AuthorPhrase
      data={phrases[index]}
      />
      <div className='btn-position'><button className='btn-lucky' onClick={changePhrase}> prueba otra frase </button></div>
      
  
    </>
  )
}

export default App
