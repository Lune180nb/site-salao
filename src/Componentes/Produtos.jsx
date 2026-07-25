
function Produtos({mostrarEsquerda,mostrarDireita,index}){
  return(<>
    <div className = "Produtos" id = "Servicos">
        <div className = "info-produtos">
        <h2>Nosso Serviços</h2>
        <p>Transforme seu visual com quem entende de beleza.
        </p>
      </div>
      <div className = "produtos-servicos">
      <button onClick = { mostrarEsquerda} className = "esquerda">&#10094;</button>
        <div className = "slides">
          <div className = "cards" style = {{transform:`translateX(-${index * 100}%)`}}>
            <img src = "servicos.jpg"/>
            <h2>Manicure & Pedicure</h2>
            <p>Cuidados completos para mãos e pés, com acabamento impecável, higiene e atenção aos detalhes.</p>
            <a href = "#" className = "link-whatsapp">Agenda aqui</a>
          </div>
            <div className = "cards" style = {{transform:`translateX(-${index * 100}%)`}}>
            <img src = "Servicos2.jpg"/>
            <h2>Coloração</h2>
            <p>
Transforme o visual com técnicas de coloração, luzes e retoques realizados com produtos de alta qualidade.</p>
            <a href = "#" className = "link-whatsapp">Agenda aqui</a>
          </div>
            <div className = "cards" style = {{transform:`translateX(-${index * 100}%)`}}>
            <img src = "Servicos3.jpg"/>
            <h2>Corte & Finalização</h2>
            <p>
Realce seu estilo com cortes modernos e finalizações feitas para valorizar a sua beleza e personalidade.</p>
            <a href = "#" className = "link-whatsapp">Agenda aqui</a>
          </div>
                    <div className = "cards" style = {{transform:`translateX(-${index * 100}%)`}}>
            <img src = "Servicos4.jpg"/>
            <h2>Tratamentos Capilares</h2>
            <p>
Recupere a saúde dos fios com hidratação, nutrição e reconstrução para cabelos mais fortes, macios e brilhantes.</p>
            <a href = "#" className = "link-whatsapp">Agenda aqui</a>
          </div>
          </div>
      <button onClick = {mostrarDireita} className = "direita">&#10095;</button>
      </div>
    </div>
  </>)
}

export default Produtos




