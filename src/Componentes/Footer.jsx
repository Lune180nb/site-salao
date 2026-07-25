
import {FaWhatsapp,FaInstagram,FaFacebook} from "react-icons/fa"
import{MdMail} from "react-icons/md"

function Footer(){
  return(<>
    <div className = "Footer">
  <div className = "descricao-footer">
    <h3>Studio Elegance</h3>
    <p>Realçando sua beleza com cuidado e sofisticação.</p>
  </div>

  <div className = "horario">
    <h4>Horário:</h4>
    <p>Segunda a Sexta: 9h às 19h</p>
    <p>Sábado: 9h às 17h</p>
    <p>Domingo: Fechado</p>
  </div>

  <div className = "redes-sociais">
    
    <a href = "#"><FaInstagram className = "icone" /></a>
    <a href = "#"><FaWhatsapp className = "icone" /></a>
    <a href = "#"><FaFacebook className = "icone" /></a>
  </div>

  <hr />

  <p>© 2026 Studio Elegance. Todos os direitos reservados.</p>
 
    </div>
  </>)
}

export default Footer





