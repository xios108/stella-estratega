import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

const benefits = [
  { icon: '🔒', text: 'Comunidad privada en WhatsApp' },
  { icon: '📅', text: 'Clases gratuitas en vivo: 18, 19 y 21 de mayo' },
  { icon: '🎁', text: 'Recursos, plantillas y estrategias' },
  { icon: '📈', text: 'Aprender a vender de verdad en redes sociales' },
  { icon: '📋', text: 'Paso a paso, sin complicaciones' },
];

const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

function App() {
  const [registerData, setRegisterData] = useState({ name: '', email: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    if (!registerData.name.trim() || !registerData.email.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Completa nombre y correo para continuar.',
      });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setFormStatus({
        type: 'error',
        message:
          'Faltan configurar REACT_APP_EMAILJS_SERVICE_ID y REACT_APP_EMAILJS_TEMPLATE_ID.',
      });
      return;
    }

    try {
      setIsSending(true);
      setFormStatus({ type: '', message: '' });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: registerData.name.trim(),
          from_email: registerData.email.trim(),
          email: registerData.email.trim(),
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        type: 'success',
        message: 'Registro enviado. Revisa tu correo para confirmar el acceso.',
      });
      setRegisterData({ name: '', email: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus({
        type: 'error',
        message:
          error?.text || 'No se pudo enviar el formulario. Revisa la configuración de EmailJS e intenta de nuevo.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="landing-page">
      <section className="landing-shell">
        <header className="hero">
          <img className="hero-bg" src="/images/portada.png" alt="Stella Estratega en su escritorio" />
          <div className="hero-shade" />

          <div className="hero-content">
            <div className="hero-top-row">
              <div className="hero-logo" aria-label="Stella Estratega">
                <span className="hero-logo__script">Stella</span>
                <span className="hero-logo__tag">Estratega</span>
              </div>
              <aside className="top-badge" aria-label="Comunidad privada en WhatsApp">
                <span aria-hidden="true">🔒</span>
                <p>Comunidad privada en WhatsApp</p>
              </aside>
            </div>

            <h1>
              CONVIERTE WHATSAPP EN TU<br />
              <span>FUENTE DE INGRESOS</span><br />
              DESDE CASA
            </h1>

            <p className="hero-intro">
              Esto ya está pasando para muchas personas...{' '}
              <strong className="c-gold">ahora es tu turno.</strong>
            </p>
            <p className="hero-intro">
              Deja de usar WhatsApp solo para chatear.{' '}
              <strong className="c-gold">Aprende a vender por WhatsApp</strong>{' '}
              (aunque empieces desde cero).
            </p>
            <p className="hero-intro">
              No necesitas inventar productos... pero si ya tienes el tuyo, también{' '}
              <strong className="c-pink">aprenderás a venderlo en redes sociales.</strong>
            </p>
            <p className="hero-intro">
              Te enseño cómo usar WhatsApp, IA y redes sociales para vender productos
              digitales paso a paso —{' '}
              <strong className="c-pink">sin experiencia previa</strong> y con{' '}
              <strong className="c-gold">acompañamiento real.</strong>
            </p>

            <div className="hero-bottom-row">
              <ul className="benefits-list" aria-label="Beneficios principales">
                {benefits.map((item) => (
                  <li key={item.text}>
                    <span aria-hidden="true">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="hero-cta-col">
                <a className="cta-button cta-hero" href="https://chat.whatsapp.com/GBQ4Ml62aSJLszyrccpYpc" target="_blank" rel="noreferrer">
                  <span className="cta-wa-logo" aria-hidden="true">💬</span>
                  <span className="cta-text">
                    <span className="cta-line1">QUIERO APRENDER A</span>
                    <span className="cta-line2">VIVIR DEL WHATSAPP</span>
                  </span>
                </a>
                <p className="cta-note">
                  <span aria-hidden="true">🔒</span> Acceso inmediato +{' '}
                  <strong>acompañamiento real</strong> dentro de WhatsApp
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* SECCIÓN 2 — Banner de clases + Video */}
        <section className="section2-wrapper" aria-label="Sección video y clases">

          {/* Banner fechas */}
          <div className="classes-banner">
            <span className="classes-banner__icon" aria-hidden="true">📅</span>
            <div className="classes-banner__text">
              <p className="classes-banner__label">CLASES GRATUITAS EN VIVO</p>
              <p className="classes-banner__date">18, 19 Y 21 DE MAYO</p>
              <p className="classes-banner__sub">Aprende cómo empezar desde cero y vender con WhatsApp paso a paso.</p>
            </div>
          </div>

          {/* Video + copy */}
          <div className="about-grid">
            <div className="video-col">
              <article className="video-placeholder-card">
                <img src="/images/portada.png" alt="Video de presentación de Stella Estratega" />
                <button type="button" className="play-overlay" aria-label="Reproducir video">▶</button>
                <div className="video-controls" aria-hidden="true">
                  <span>▶</span>
                  <div className="video-progress"><span /></div>
                  <small>0:00 / 1:30</small>
                  <span>🔊</span>
                  <span>⛶</span>
                </div>
              </article>
              <p className="video-hint">
                <span aria-hidden="true">🕐</span> Míralo antes de entrar{' '}
                <strong className="c-pink">(1:30)</strong>
              </p>
            </div>

            <article className="about-copy">
              <h3>Hola, soy Stella Estratega</h3>
              <p>Convierte WhatsApp en una herramienta real de ingresos.</p>
              <ul className="about-checks">
                <li><span className="check-pink">✔</span> Sin experiencia.</li>
                <li><span className="check-pink">✔</span> Sin complicarte.</li>
                <li><span className="check-pink">✔</span> Paso a paso.</li>
              </ul>
            </article>
          </div>

        </section>

        {/* SECCIÓN 3 — Filtro */}
        <section className="filter-section" aria-label="Para quién es este curso">

          <div className="filter-box">
            {/* Columna SÍ */}
            <div className="filter-col filter-col--yes">
              <h3>
                <span className="filter-icon filter-icon--yes" aria-hidden="true">✔</span>
                ESTO <span className="f-white">ES PARA TI</span> SI...
              </h3>
              <ul>
                <li>
                  <span className="filter-icon filter-icon--yes" aria-hidden="true">✔</span>
                  <span>Quieres generar ingresos <strong className="c-green">desde casa</strong> usando tu celular y <strong className="c-green">WhatsApp.</strong></span>
                </li>
                <li>
                  <span className="filter-icon filter-icon--yes" aria-hidden="true">✔</span>
                  <span>Estás lista para <strong className="c-green">aprender algo real</strong> que te dé <strong className="c-green">libertad financiera.</strong></span>
                </li>
                <li>
                  <span className="filter-icon filter-icon--yes" aria-hidden="true">✔</span>
                  <span>Quieres un <strong className="c-green">paso a paso claro,</strong> sin complicaciones ni tecnicismos.</span>
                </li>
                <li>
                  <span className="filter-icon filter-icon--yes" aria-hidden="true">✔</span>
                  <span>Tienes ganas de <strong className="c-green">tomar acción</strong> y construir un ingreso constante.</span>
                </li>
                <li>
                  <span className="filter-icon filter-icon--yes" aria-hidden="true">✔</span>
                  <span>Buscas un <strong className="c-green">cambio real</strong> en tu vida y en la de tu familia.</span>
                </li>
              </ul>
            </div>

            {/* Corazón central */}
            <div className="filter-heart-col" aria-hidden="true">
              <span className="filter-heart">♥</span>
              <p>No necesitas más información...<br /><strong className="c-pink">necesitas empezar.</strong></p>
            </div>

            {/* Columna NO */}
            <div className="filter-col filter-col--no">
              <h3>
                <span className="filter-icon filter-icon--no" aria-hidden="true">✖</span>
                ESTO <span className="f-white">NO ES PARA TI</span> SI...
              </h3>
              <ul>
                <li>
                  <span className="filter-icon filter-icon--no" aria-hidden="true">✖</span>
                  <span>Buscas <strong className="c-pink">dinero rápido</strong> sin aprender nada.</span>
                </li>
                <li>
                  <span className="filter-icon filter-icon--no" aria-hidden="true">✖</span>
                  <span>No estás dispuesta a <strong className="c-pink">tomar acción.</strong></span>
                </li>
                <li>
                  <span className="filter-icon filter-icon--no" aria-hidden="true">✖</span>
                  <span>Quieres resultados <strong className="c-pink">sin esfuerzo.</strong></span>
                </li>
                <li>
                  <span className="filter-icon filter-icon--no" aria-hidden="true">✖</span>
                  <span>No estás lista para salir de tu <strong className="c-pink">zona de confort.</strong></span>
                </li>
                <li>
                  <span className="filter-icon filter-icon--no" aria-hidden="true">✖</span>
                  <span>No estás dispuesta a <strong className="c-pink">invertir tiempo</strong> en tu crecimiento.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA inferior */}
          <div className="filter-cta-row">
            <a className="cta-button filter-cta-btn" href="https://chat.whatsapp.com/GBQ4Ml62aSJLszyrccpYpc" target="_blank" rel="noreferrer">
              <span className="cta-wa-logo" aria-hidden="true">💬</span>
              <span className="cta-text">
                <span className="cta-line1">QUIERO ENTRAR Y APRENDER</span>
                <span className="cta-line2">ESTO PASO A PASO</span>
              </span>
            </a>
            <div className="filter-guarantees">
              <div className="filter-guarantee">
                <span aria-hidden="true">⚡</span>
                <p>Acceso inmediato</p>
              </div>
              <div className="filter-guarantee">
                <span aria-hidden="true">🛡️</span>
                <p>Sin riesgo</p>
              </div>
              <div className="filter-guarantee">
                <span aria-hidden="true">👤</span>
                <p>Puedes salir cuando quieras</p>
              </div>
            </div>
          </div>

        </section>

        {/* SECCIÓN 4 — Formulario de registro */}
        <section className="register-section" aria-label="Formulario de registro">
          <div className="register-form-col">
            <p className="register-eyebrow">Estás a un paso de entrar.</p>
            <h2>
              RESERVA TU LUGAR EN LAS{' '}
              <span className="reg-h2-pink">CLASES GRATUITAS</span>
            </h2>
            <p className="register-desc">
              Aprende cómo empezar desde cero y usar{' '}
              <strong className="c-gold">WhatsApp, redes sociales</strong> e{' '}
              <strong className="c-gold">inteligencia artificial</strong> para generar
              ingresos paso a paso.
            </p>
            <form className="register-form" onSubmit={handleRegisterSubmit}>
              <label htmlFor="reg-name" className="sr-only">Nombre</label>
              <div className="reg-input-wrap">
                <span className="reg-input-icon" aria-hidden="true">👤</span>
                <input
                  id="reg-name"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={registerData.name}
                  onChange={handleRegisterChange}
                />
              </div>
              <label htmlFor="reg-email" className="sr-only">Correo electrónico</label>
              <div className="reg-input-wrap">
                <span className="reg-input-icon" aria-hidden="true">✉️</span>
                <input
                  id="reg-email"
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                />
              </div>
              <button type="submit" className="cta-button reg-cta-btn" disabled={isSending}>
                <span className="cta-wa-logo" aria-hidden="true">💬</span>
                <span className="reg-cta-label">
                  {isSending ? 'ENVIANDO...' : 'QUIERO MI ACCESO AHORA'}
                </span>
              </button>
              {formStatus.message ? (
                <p className={`form-status form-status--${formStatus.type}`}>
                  {formStatus.message}
                </p>
              ) : null}
              <p className="form-note">
                <span aria-hidden="true">🔒</span> Tu información está protegida. No spam.<br />
                Solo acceso a la clase y contenido útil.
              </p>
            </form>
          </div>

          <div className="register-benefits-col">
            <div className="reg-benefit">
              <span className="reg-benefit__icon reg-icon--pink" aria-hidden="true">⚡</span>
              <div>
                <strong>ACCESO INMEDIATO</strong>
                <p>Desbloquea tu acceso al instante y entra hoy a la comunidad.</p>
              </div>
            </div>
            <div className="reg-benefit">
              <span className="reg-benefit__icon reg-icon--pink" aria-hidden="true">🕐</span>
              <div>
                <strong>CLASES PRÓXIMAMENTE</strong>
                <p>Las clases inician pronto, no te quedes por fuera.</p>
              </div>
            </div>
            <div className="reg-benefit">
              <span className="reg-benefit__icon reg-icon--pink" aria-hidden="true">👥</span>
              <div>
                <strong>COMUNIDAD PRIVADA</strong>
                <p>Entra a la comunidad de WhatsApp y aprende junto a personas como tú.</p>
              </div>
            </div>
            <div className="reg-benefit">
              <span className="reg-benefit__icon reg-icon--pink" aria-hidden="true">🎁</span>
              <div>
                <strong>CONTENIDO EXCLUSIVO</strong>
                <p>Recursos, estrategias y plantillas que te ayudarán a avanzar más rápido.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5 — Frase de empuje emocional */}
        <section className="emotional-push" aria-label="Frase motivacional">
          <div className="emotional-push__box">
            <div className="emotional-push__heart-col" aria-hidden="true">
              <span className="emotional-push__heart">♥</span>
            </div>
            <div className="emotional-push__copy">
              <p className="ep-line1">Si ya llegaste hasta aquí...</p>
              <p className="ep-line2">no lo dejes para después.</p>
              <p className="ep-body">Miles de personas ya están aprendiendo y tomando acción.<br />Este puede ser el cambio que estabas esperando.</p>
              <p className="ep-script">Da el primer paso hoy. ♡</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 6 — Beneficios / Claridad */}
        <section className="clarity-section" aria-label="Qué vas a lograr">
          <ul className="clarity-grid">
            <li className="clarity-item">
              <span className="clarity-icon" aria-hidden="true">📣</span>
              <strong>NO NECESITAS<br />EXPERIENCIA</strong>
              <p>Te enseñamos desde cero, paso a paso.</p>
            </li>
            <li className="clarity-item">
              <span className="clarity-icon" aria-hidden="true">🛒</span>
              <strong>PUEDES VENDER<br />PRODUCTOS</strong>
              <p>Aprende a promocionar y vender productos digitales o físicos.</p>
            </li>
            <li className="clarity-item">
              <span className="clarity-icon" aria-hidden="true">📱</span>
              <strong>PUEDES VENDER<br />EN REDES SOCIALES</strong>
              <p>Usa WhatsApp, Facebook, Instagram y más para generar ingresos.</p>
            </li>
            <li className="clarity-item">
              <span className="clarity-icon" aria-hidden="true">🚀</span>
              <strong>SOLO NECESITAS<br />APRENDER EL SISTEMA</strong>
              <p>Te damos las estrategias, herramientas y apoyo que necesitas.</p>
            </li>
          </ul>
        </section>

        {/* SECCIÓN 7 — Proceso en 3 pasos */}
        <section className="process-section" aria-label="Proceso de 3 pasos">
          <div className="process-box">
            <span className="process-check" aria-hidden="true">✔</span>
            <h2>¡LISTO! CASI ESTÁS <span className="c-pink">DENTRO</span></h2>
            <p className="process-sub">
              Tu acceso ha sido confirmado.<br />
              Ahora, <strong className="c-pink">entra a la comunidad privada</strong> para que no te pierdas nada.
            </p>
            <div className="process-steps">
              <div className="process-step">
                <span className="process-step__icon" aria-hidden="true">👤</span>
                <strong>1. REGISTRO</strong>
                <p>Acceso confirmado</p>
              </div>
              <div className="process-dots" aria-hidden="true">······</div>
              <div className="process-step">
                <span className="process-step__icon" aria-hidden="true">👥</span>
                <strong>2. COMUNIDAD</strong>
                <p>Entra a WhatsApp</p>
              </div>
              <div className="process-dots" aria-hidden="true">······</div>
              <div className="process-step">
                <span className="process-step__icon" aria-hidden="true">▶</span>
                <strong>3. CLASES</strong>
                <p>Aprende y toma acción</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 8 — CTA WhatsApp */}
        <section className="cta-whatsapp-section" aria-label="Unirse a la comunidad de WhatsApp">
          <div className="cta-wa-box">
            <span className="cta-wa-icon" aria-hidden="true">💬</span>
            <div className="cta-wa-copy">
              <p className="cta-wa-eyebrow">ENTRA AHORA A LA</p>
              <h2>COMUNIDAD PRIVADA<br />DE WHATSAPP</h2>
              <p className="cta-wa-desc">Aquí recibirás el enlace de las clases en vivo, recordatorios, recursos exclusivos y apoyo del grupo.</p>
              <div className="cta-wa-btn-wrap">
                <a className="cta-button cta-wa-btn" href="https://chat.whatsapp.com/GBQ4Ml62aSJLszyrccpYpc" target="_blank" rel="noreferrer">
                  <span className="cta-wa-logo" aria-hidden="true">💬</span>
                  <span className="reg-cta-label">ENTRA A LA COMUNIDAD</span>
                </a>
                <span className="cta-wa-arrow" aria-hidden="true">↵</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 9 — Qué recibe dentro */}
        <section className="inside-section" aria-label="Qué recibirás dentro">
          <h2>DENTRO DE LA <span className="c-pink">COMUNIDAD</span> VAS A RECIBIR:</h2>
          <ul className="inside-grid">
            <li className="inside-item">
              <span aria-hidden="true">📅</span>
              <p>Recordatorios de las clases en vivo</p>
            </li>
            <li className="inside-item">
              <span aria-hidden="true">🎁</span>
              <p>Recursos y plantillas exclusivas</p>
            </li>
            <li className="inside-item">
              <span aria-hidden="true">👥</span>
              <p>Apoyo y dudas dentro del grupo</p>
            </li>
            <li className="inside-item">
              <span aria-hidden="true">📈</span>
              <p>Estrategias para vender en WhatsApp, redes sociales y más</p>
            </li>
          </ul>
        </section>

        {/* SECCIÓN 10 — Cierre emocional */}
        <section className="closing-section" aria-label="Cierre emocional">
          <div className="closing-box">
            <span className="closing-heart" aria-hidden="true">♥</span>
            <div className="closing-copy">
              <p className="closing-top">ESTE ES TU <span className="c-pink">PRIMER PASO.</span></p>
              <p className="closing-sub">La decisión es tuya, pero el cambio comienza hoy.</p>
              <p className="closing-script">Nos vemos dentro ♡</p>
            </div>
          </div>
          <p className="closing-note">
            <span aria-hidden="true">🔒</span> Comunidad 100% segura y privada.<br />
            Solo para personas que quieren tomar acción y transformar su vida.
          </p>
        </section>

      </section>
    </main>
  );
}

export default App;
