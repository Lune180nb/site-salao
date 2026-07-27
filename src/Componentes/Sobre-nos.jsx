
import {useEffect,useRef} from "react"

function SobreNos(){
  
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
    <div className = "SobreNos" id = "SobreNos">
      <div className = "Titulo">
        <h2 ref = {cardRef} className = "cima">Quem somos?</h2>
      </div>
      <div className = "descricao">
       <img ref = {cardRef2} className = "esquerda" src = "SobreNos.jpg" alt = ""/>
        <p ref = {cardRef3} className = "direita">No nosso salão de beleza, acreditamos que cada pessoa merece sentir-se confiante e valorizada. Nossa equipe é dedicada a oferecer um atendimento acolhedor, com serviços de qualidade e atenção aos detalhes.
          
          Trabalhamos com profissionalismo, produtos selecionados e técnicas atualizadas para proporcionar uma experiência agradável, sempre respeitando o estilo e as necessidades de cada cliente.
          
          Nosso compromisso é realçar a sua beleza e bem-estar em um ambiente moderno, confortável e pensado para que você se sinta em casa.</p>
      </div>
    </div>
  </>)
}

export default SobreNos




