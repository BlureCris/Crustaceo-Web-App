import { useState } from 'react'
import './App.css'
import Pedido from './assets/componentes/pages/Pedido'
import Acerca from './assets/componentes/pages/Acerca'

function App() {
  // Estado para controlar la vista actual
  const [vista, setVista] = useState<'inicio' | 'pedido' | 'acerca'>('inicio')

  return (
    <>
      {vista === 'inicio' && (
        <>
          {/* 🔥 HEADER */}
          <header>
            <img
              src="https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/crustaceo-logo.jpg?raw=true"
              alt="Logo del restaurante Crustáceo Cascarudo"
              width="235"
              height="200"
            />
            <div className="titulo">
              <h1>Crustáceo Cascarudo</h1>
              <p className="subtitulo">De las brasas a tu paladar</p>
            </div>
            <nav>
              <button onClick={() => setVista('inicio')}>Inicio</button>
              <button onClick={() => setVista('acerca')}>Acerca de</button>
            </nav>
          </header>

          {/* 🔥 CONTENIDO PRINCIPAL */}
          <main>
            <section className="ep">
              <p>¡Atención amantes de la comida deliciosa!</p>
              <p>
                ¡Bienvenidos al <strong>Crustáceo Cascarudo</strong>, tu nuevo
                destino favorito para satisfacer tus antojos!
              </p>
              <p>
                Aquí encontrarás las hamburguesas más jugosas, los hot dogs más sabrosos
                y las papas fritas más crujientes de la zona.
              </p>
              <p>
                Ven solo o trae a tus amigos y familia, porque aquí la comida se disfruta
                mejor en compañía. ¡Te esperamos en Santiago 14, Santa Elena Cuautitlán!
              </p>
            </section>

            <button className="caja2" onClick={() => setVista('pedido')}>
              Pide aquí
            </button>
          </main>

          {/* 🔥 FOOTER */}
          <footer>
            <div className="footer-contenedor">
              <div className="footer-redes">
                <a href="https://www.facebook.com" target="_blank">
                  <img src="https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/facebook.png?raw=true" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <img src="https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/instagram.png?raw=true" alt="Instagram" />
                </a>
                <a href="https://www.tiktok.com" target="_blank">
                  <img src="https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/tiktok.png?raw=true" alt="TikTok" />
                </a>
              </div>
              <p className="footer-texto">
                © 2025 Crustáceo Cascarudo — De las brasas a tu paladar 🦀
              </p>
            </div>
          </footer>
        </>
      )}

      {/* 🔥 VISTA PEDIDO */}
      {vista === 'pedido' && (
        <Pedido 
          volver={() => setVista('inicio')} 
          irAcerca={() => setVista('acerca')} 
        />
      )}

      {/* 🔥 VISTA ACERCA DE */}
      {vista === 'acerca' && (
        <Acerca volver={() => setVista('inicio')} />
      )}
    </>
  )
}

export default App
