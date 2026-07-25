import Header from "./Componentes/Header.jsx"
import Hero from "./Componentes/Hero.jsx"
import Produtos from "./Componentes/Produtos.jsx"
import SobreNos from "./Componentes/Sobre-nos.jsx"
import Contato from "./Componentes/Contato.jsx"
import Footer from "./Componentes/Footer.jsx"
import "./App.css"
import {useState,useEffect} from "react"

function App(){
  const [index,setIndex] = useState(0)
  const [pausa,setPausa] = useState(false)
  
  function mostrarDireita(){
    setPausa(true)
    setTimeout(() => setPausa(false),5000)
    setIndex(prev => {
      if(prev > 2){
      return 0
    }
    
    return prev + 1
    })
  }
  
  function mostrarEsquerda(){
    setPausa(true)
    setTimeout(() => setPausa(false),5000)
    setIndex(prev => {
      if(prev === 0){
      return 3
    }
      
      return prev - 1})
  }
  
  
  useEffect(() => {
    if(pausa) return
    const intervalo = setInterval(() => {
   setIndex(prev => {
     if(prev === 3){
       return 0
     }
     
     return prev + 1
   }
   )
  }, 2000)
  return () => clearInterval(intervalo)
  },[pausa])
 
  
  return (<>
    <Header/>
    <Hero/>
    <Produtos mostrarEsquerda = {mostrarEsquerda} mostrarDireita = {mostrarDireita} index = {index}/>
    <SobreNos/>
    <Contato/>
    <Footer/>
  </>
    )
}

export default App





