import {FaBars,FaTimes} from "react-icons/fa"
import {useState,useEffect,useRef} from "react"

function Header(){
  const cardRef = useRef(null)
  const cardRef2 = useRef(null)
  const cardRef3 = useRef(null)
  const cardRef4 = useRef(null)
  const [aberto,setAberto] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add("ativo")
        }
      })
    })
    observer.observe(cardRef.current)
    observer.observe(cardRef2.current)
    observer.observe(cardRef3.current)
    observer.observe(cardRef4.current)
    return () => {
      observer.disconnect()
    }
  },[])
  
  function navResponsivo(){
    setAberto(prev => !prev)
  }
  
  return(<>
    <header>
      <nav>
        <div ref = {cardRef} className = "esquerda">
          <a href = "#Hero">Incio</a>
          <a href = "#Servicos">Serviços</a>
          <a href = "#SobreNos">Sobre nós</a>
          <a href = "#Contato">Contato</a>
        </div>
        
        <button ref = {cardRef4} onClick = {navResponsivo} className = {aberto ? "button-responsivo desativado":"button-responsivo esquerda"}><FaBars/></button>
        <button onClick = {navResponsivo} className = {aberto ? "button-voltar ativo":"button-voltar"}><FaTimes/></button>
      </nav>
      <div className = "logo">
        <h2 ref = {cardRef2} className = "baixo">Studio Elegance</h2>
      </div>
      <a href = "#" ref = {cardRef3} className = "link-agendar direita">Agendar</a>
    </header>
    <div className = {aberto ? "menuResponsivo ativo": "menuResponsivo"}>
      <div>
        <a onClick = {navResponsivo} href = "#Hero">Incio</a>
        <a onClick = {navResponsivo} href = "#Servicos">Serviços</a>
        <a onClick = {navResponsivo} href = "#SobreNos">Sobre nós</a>
        <a onClick = {navResponsivo} href = "#Contato">Contato</a>
        <a href = "#" ref = {cardRef3} className = "link-agendar-responsivo">Agendar</a>
        </div>
    </div>
  </>)
}

export default Header





