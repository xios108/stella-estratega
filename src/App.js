import './App.css';

const actionCards = [
  {
    title: 'MIRA MI CLASE',
    subtitle: 'Aprende el Sistema del Creador Inteligente y hazte viral',
    href: 'https://www.youtube.com/',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Smartphone mostrando una aplicacion',
  },
  {
    title: 'HAILOU APP',
    subtitle: 'Echa un vistazo a Hailou y descarga la app ahora',
    href: 'https://www.apple.com/app-store/',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Smartphone mostrando una aplicacion',
  },
  {
    title: 'PRUEBA MINIMAX',
    subtitle: 'Crea voces realistas con IA en minutos',
    href: 'https://www.minimax.io/',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Pantalla con degradado y tecnologia',
  },
  {
    title: 'MI CANAL YOUTUBE',
    subtitle: 'Aprende mas aqui con tutoriales paso a paso',
    href: 'https://www.youtube.com/',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Pantalla con icono de reproduccion',
  },
];

function App() {
  return (
    <main className="bio-page">
      <section className="bio-wrapper">
        <header className="hero-block">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
            alt="Persona trabajando con laptop y microfono"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>MELISA ESCOBAR</h1>
            <p>Te enseno a ganar dinero en internet con ayuda de la I.A.</p>
          </div>
        </header>

        <section className="cards-stack" aria-label="Enlaces principales">
          {actionCards.map((card) => (
            <a
              key={card.title}
              className="action-card"
              href={card.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-card__media">
                <img src={card.image} alt={card.imageAlt} />
              </div>
              <div className="action-card__copy">
                <h2>{card.title}</h2>
                <p>{card.subtitle}</p>
              </div>
            </a>
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
