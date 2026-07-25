
import {FaWhatsapp,FaInstagram} from "react-icons/fa"
import{MdMail} from "react-icons/md"

function Contato(){
  return(<>
    <div className = "Contato" id = "Contato">
      <div className = "Titulo-contato">
        <p>Onde você pode encontrar?</p>
        <h2>Contato</h2>
      </div>
      <div className = "info-contato">
        <h2><span>Endereço:</span> Rua das Flores, 123 - Centro</h2>
        <a href = "#" className = "link"><FaWhatsapp className = "Whatsapp"/> Whatsapp</a>
        <a href = "#" className = "link"><MdMail className = "Email"/> Email</a>
        <a href = "#" className = "link"><FaInstagram className = "instagram"/> instagram</a>
      </div>
    </div>
  </>)
}

export default Contato





