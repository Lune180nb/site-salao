import {FaWhatsapp,FaInstagram,FaFacebook} from "react-icons/fa"
import{MdMail} from "react-icons/md"
import {useEffect,useRef} from "react"

function Footer(){
  
  const cardRef = useRef(null)
  const cardRef2 = useRef(null)
  const cardRef3 = useRef(null)
  const cardRef4 = useRef(null)
  const cardRef5 = useRef(null)
  
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
    observer.observe(cardRef5.current)
    
    return () => {
      observer.disconnect()
    }
  },[])
  
  return(<>
    <div className = "Footer">
  <div className = "descricao-footer">
    <h3 ref = {cardRef} className = "esquerda">Studio Elegance</h3>
    <p ref = {cardRef2} className = "direita">Realçando sua beleza com cuidado e sofisticação.</p>
  </div>

  <div ref = {cardRef3} className = "horario baixo">
    <h4>Horário:</h4>
    <p>Segunda a Sexta: 9h às 19h</p>
    <p>Sábado: 9h às 17h</p>
    <p>Domingo: Fechado</p>
  </div>

  <div ref = {cardRef4} className = "redes-sociais cima">
    
    <a href = "#"><FaInstagram className = "icone" /></a>
    <a href = "#"><FaWhatsapp className = "icone" /></a>
    <a href = "#"><FaFacebook className = "icone" /></a>
  </div>

  <hr />

  <p ref = {cardRef5} className = "esquerda">© 2026 Studio Elegance. Todos os direitos reservados.</p>
 
    </div>
  </>)
}

export default Footer





