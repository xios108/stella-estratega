import './App.css';

const actionCards = [
  {
    title: 'STELLA ESTRATEGA',
    subtitle: 'Aprende el Sistema del Creador Inteligente y hazte viral',
    href: 'https://www.youtube.com/',
    image: '/images/stella-logo.png',
    imageAlt: 'Stella Estratega logo neon',
  },
  {
    title: 'TRABAJA DESDE CASA',
    subtitle: 'Desde su WhatsApp aprovecha la Inteligencia Artificial',
    href: 'https://www.whatsapp.com/',
    image: '/images/trabaja-desde-casa.png',
    imageAlt: 'Mujer trabajando desde casa',
  },
  {
    title: 'ZONA VIP',
    subtitle: 'Acceso exclusivo a contenido premium y estrategias avanzadas',
    href: 'https://ejemplo.com/vip',
    image: '/images/zona-vip.png',
    imageAlt: 'Zona VIP neon azul',
  },
];

function App() {
  return (
    <main className="bio-page">
      <section className="bio-wrapper">
        <header className="hero-block">
          <img
            className="hero-image"
            src="/images/portada.png"
            alt="Mujer profesional en traje rosa neon"
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
