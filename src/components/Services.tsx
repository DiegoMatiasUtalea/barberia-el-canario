import styles from './Services.module.css'

const services = [
  {
    icon: '✂',
    name: 'Corte de cabello',
    description: 'Corte clásico o moderno adaptado a tu estilo y estructura facial.',
    price: 'desde 12 €',
  },
  {
    icon: '🪒',
    name: 'Arreglo de barba',
    description: 'Perfilado, afeitado y cuidado de barba con navaja y productos premium.',
    price: 'desde 8 €',
  },
  {
    icon: '✦',
    name: 'Corte + Barba',
    description: 'El pack completo para salir impecable. La combinación más popular.',
    price: 'desde 18 €',
  },
  {
    icon: '👦',
    name: 'Corte infantil',
    description: 'Ambiente tranquilo y trato cariñoso para los más pequeños.',
    price: 'desde 9 €',
  },
]

export default function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Nuestros servicios</p>
          <h2 className={styles.title}>Arte en cada corte</h2>
          <p className={styles.description}>
            Cada visita es una experiencia. Utilizamos las mejores técnicas y productos para que salgas sintiéndote único.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.name} className={styles.card}>
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardName}>{s.name}</h3>
              <p className={styles.cardDescription}>{s.description}</p>
              <p className={styles.cardPrice}>{s.price}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="tel:+34611156315" className={styles.ctaBtn}>
            Reservar cita · 611 15 63 15
          </a>
        </div>
      </div>
    </section>
  )
}
