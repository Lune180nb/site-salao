
import {useEffect,useRef} from "react"

function Hero(){
  const cardRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add("ativo")
        }
      })
    })
    observer.observe(cardRef.current)
    return () => {
      observer.disconnect()
    }
  }
  ,[])
  
  return(<>
    <div id = "Hero" className = "Hero">
      <div ref = {cardRef} className = "info-hero esquerda">
        <h1>Sua beleza merece <br/> o melhor <span>cuidado</span></h1>
        <p>Transforme seu visual com profissionais especializados e atendimento de excelência. Agende seu horário e viva uma experiência única de beleza.</p>
        <a href = "#" className = "link-whatsapp">Venha Agendar</a>
       </div>
     </div>
  </>)
}

export default Hero



