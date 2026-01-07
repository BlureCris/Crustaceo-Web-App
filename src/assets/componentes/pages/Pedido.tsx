import { useEffect, useState } from 'react'
import './Pedido.css'

type Producto = {
  nombre: string
  precio: number
  img: string
}

type PedidoProps = { 
  volver: () => void
  irAcerca: () => void   // ✅ nueva prop para navegar a Acerca
}

const productos: Producto[] = [
  { nombre: 'Hamburguesa', precio: 48, img: 'https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/Hamburguesa.jpg?raw=true' },
  { nombre: 'HotDog', precio: 45, img: 'https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/HOTDOG.jpg?raw=true' },
  { nombre: 'Papas a la francesa', precio: 30, img: 'https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/papas%20fritas.jpg?raw=true' },
  { nombre: 'Hamburguesa Especial', precio: 50, img: 'https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/especial1.jpg?raw=true' },
  { nombre: 'Hot Dog especial', precio: 50, img: 'https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/especial2.jpg?raw=true' }
]

const especiales = [
  { img: 'https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/especial1.jpg?raw=true', texto: 'Hamburguesa Especial 😋🍔' },
  { img: 'https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/especial2.jpg?raw=true', texto: 'Hot Dog especial delicioso 😍🌭' },
  { img: 'https://github.com/BlureCris/Crustaceo-Web-App/blob/main/public/imgs/especial3.jpg?raw=true', texto: 'Papas fritas a tan solo 45 pesos 🦀🍟' }
]

function Pedido({ volver, irAcerca }: PedidoProps) {
  const [cantidades, setCantidades] = useState<number[]>(() => {
    const guardado = JSON.parse(localStorage.getItem('cantidades') || 'null')
    if (guardado && Array.isArray(guardado)) {
      return guardado
    }
    return Array(productos.length).fill(0)
  })

  const [mostrarModal, setMostrarModal] = useState(false)
  const [especialIndex, setEspecialIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setEspecialIndex(i => (i + 1) % especiales.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const cambiarCantidad = (i: number, valor: number) => {
    const copia = [...cantidades]
    copia[i] = valor
    setCantidades(copia)
  }

  const carrito = productos
    .map((p, i) => ({
      ...p,
      cantidad: cantidades[i],
      subtotal: cantidades[i] * p.precio
    }))
    .filter(p => p.cantidad > 0)

  const total = carrito.reduce((acc, p) => acc + p.subtotal, 0)

  const abrirCarrito = () => {
    localStorage.setItem('cantidades', JSON.stringify(cantidades))
    setMostrarModal(true)
  }

  const finalizarCompra = () => {
    alert('¡Gracias por tu compra en el Crustáceo Cascarudo! 🦀🍔')
    const reset = Array(productos.length).fill(0)
    setCantidades(reset)
    localStorage.removeItem('cantidades')
    setMostrarModal(false)
  }

  return (
    <>
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
          <button onClick={volver}>Inicio</button>
          <button onClick={irAcerca}>Acerca de</button> {/* ✅ ahora sí navega */}
        </nav>
      </header>

      <main>
        <h2>Menú de Productos</h2>

        <div className="productos">
          {productos.map((producto, i) => (
            <div className="producto" key={producto.nombre}>
              <img src={producto.img} alt={producto.nombre} className="img-producto" />
              <h3>{producto.nombre}</h3>
              <p>${producto.precio}</p>
              <input
                type="number"
                min={0}
                value={cantidades[i]}
                onChange={e => cambiarCantidad(i, Number(e.target.value))}
              />
            </div>
          ))}
        </div>

        <button className="caja3" onClick={abrirCarrito}>
          🛒 ¡¡COMPRAR!!
        </button>
      </main>

      <section className="especial-del-dia">
        <h2>🔥 Promociones 🔥</h2>
        <div className="especial-contenedor">
          <img
            src={especiales[especialIndex].img}
            alt="promoción"
            className="fade show"
          />
          <p className="fade show">{especiales[especialIndex].texto}</p>
        </div>
      </section>

      {mostrarModal && (
        <div className="modal" onClick={() => setMostrarModal(false)}>
          <div className="modal-contenido" onClick={e => e.stopPropagation()}>
            <span className="cerrar" onClick={() => setMostrarModal(false)}>
              &times;
            </span>

            <h2>🧾 Tu orden</h2>

            {carrito.length === 0 ? (
              <p>Tu carrito está vacío 😢</p>
            ) : (
              carrito.map(p => (
                <p key={p.nombre}>
                  {p.nombre} x{p.cantidad} — ${p.subtotal}
                </p>
              ))
            )}

            <h3>Total: ${total}</h3>

            <button onClick={finalizarCompra}>Finalizar Compra</button>
          </div>
        </div>
      )}

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

export default Pedido
