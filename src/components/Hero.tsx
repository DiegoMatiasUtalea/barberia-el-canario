import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.bg}>
        <img
          src="https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Interior de la barbería"
          className={styles.bgImg}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Castro-Urdiales, Cantabria</p>
        <h1 className={styles.title}>
          Barbería<br />
          <span className={styles.gold}>El Canario</span>
        </h1>
        <p className={styles.subtitle}>
          Cortes de calidad, trato inmejorable y el mejor ambiente de Castro-Urdiales.
        </p>
        <div className={styles.rating}>
          <div className={styles.stars}>
            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <span className={styles.ratingText}>4,8 · 49 reseñas en Google</span>
        </div>
        <div className={styles.actions}>
          <a href="tel:+34611156315" className={styles.btnPrimary}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
            </svg>
            Llamar ahora
          </a>
          <a href="#servicios" className={styles.btnSecondary}>Ver servicios</a>
        </div>
      </div>

      <div className={styles.scroll}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  )
}
