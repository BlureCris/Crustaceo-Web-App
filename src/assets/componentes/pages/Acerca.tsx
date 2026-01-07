import './Acerca.css'

type AcercaProps = { volver: () => void }

function Acerca({ volver }: AcercaProps) {
  return (
    <>
      {/* 🔥 HEADER igual que App.tsx */}
      <header>
        <img
          src="https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/crustaceo-logo.jpg?raw=true"
          alt="Logo Crustáceo Cascarudo"
          width="150"
          height="auto"
        />
        <div className="titulo">
          <h1>Crustáceo Cascarudo</h1>
          <p className="subtitulo">De las brasas a tu paladar</p>
        </div>
        <nav>
          <button onClick={volver}>Inicio</button>
          <button disabled>Acerca de</button>
        </nav>
      </header>

      <main>
        <h2 className="OWO">Conoce nuestra historia</h2>

        <div className="productos">
          <div className="producto">
            <h3>Nuestra historia</h3>
            <p>
              Desde 2020, en Crustáceo Cascarudo nos apasiona crear hamburguesas,
              hot dogs y papas que llenen de sabor cada bocado. ¡De las brasas a tu paladar!
            </p>
          </div>

          <div className="producto">
            <h3>Nuestra filosofía</h3>
            <p>
              Utilizamos ingredientes frescos y locales, recetas artesanales y nos esforzamos
              por ofrecer un servicio rápido y amigable. Cada comida se disfruta mejor en compañía.
            </p>
          </div>

          <div className="producto">
            <h3>El equipo</h3>
            <p>
              Contamos con un equipo apasionado por la cocina, siempre dispuesto a sorprenderte
              con nuevos sabores y presentaciones deliciosas.
            </p>
          </div>

          <div className="producto">
            <h3>Contáctanos</h3>
            <p>
              Teléfono: 555-123-4567<br />
              WhatsApp: +52 55 9876 5432<br />
              Redes: Instagram @crustaceocascarudo8 | Facebook CrustaceoCascarudo | Tiktok crustaceocascarudo_8
            </p>
          </div>
        </div>
      </main>

      {/* 🔥 FOOTER igual que App.tsx */}
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
  )
}

export default Acerca
