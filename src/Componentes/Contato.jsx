
import {useEffect,useRef} from "react"

import {FaWhatsapp,FaInstagram} from "react-icons/fa"
import{MdMail} from "react-icons/md"

function Contato(){
  
  const cardRef = useRef(null)
  const cardRef2 = useRef(null)
  const cardRef3 = useRef(null)
  
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
    
    return () => {
      observer.disconnect()
    }
  },[])
  
  return(<>
    <div className = "Contato" id = "Contato">
      <div className = "Titulo-contato">
        <p ref = {cardRef} className = "esquerda">Onde você pode encontrar?</p>
        <h2 ref = {cardRef2} className = "direita">Contato</h2>
      </div>
      <div ref = {cardRef3} className = "info-contato cima">
        <h2><span>Endereço:</span> Rua das Flores, 123 - Centro</h2>
        <a href = "#" className = "link"><FaWhatsapp className = "Whatsapp"/> Whatsapp</a>
        <a href = "#" className = "link"><MdMail className = "Email"/> Email</a>
        <a href = "#" className = "link"><FaInstagram className = "instagram"/> instagram</a>
      </div>
    </div>
  </>)
}

export default Contato





