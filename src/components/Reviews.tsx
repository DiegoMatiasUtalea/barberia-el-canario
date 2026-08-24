import styles from './Reviews.module.css'

const reviews = [
  {
    name: 'Aitor Almeida',
    time: 'Hace un año',
    rating: 5,
    text: 'Super profesional y super simpático, da gusto ir a cortarse el pelo allí. Mi hijo va encantado y yo también. Lo recomiendo totalmente. Si no le conocéis, no sé a qué estás esperando.',
    initials: 'AA',
  },
  {
    name: 'Abel Rosado Molin',
    time: 'Hace 5 meses',
    rating: 5,
    text: 'Grandes profesionales, y gracias a Adrián por el corte y el trato. Recomendado al 100%.',
    initials: 'AR',
    badge: 'Guía Local',
  },
  {
    name: 'Celia Echevarría',
    time: 'Hace un año',
    rating: 5,
    text: 'Mi niño es el único con el que se deja cortar el pelo. Es encantador y muy cariñoso con niños y adultos. Así da gusto ir a la peluquería. Lo recomiendo al 100%.',
    initials: 'CE',
    badge: 'Guía Local',
  },
  {
    name: 'Pablo M.',
    time: 'Hace 8 meses',
    rating: 5,
    text: 'Llevo 2 años yendo a cortarme el pelo con él y seguiré haciéndolo. Buen corte de pelo, buen ambiente, limpio y trato inmejorable.',
    initials: 'PM',
  },
  {
    name: 'Laura G.',
    time: 'Hace 3 meses',
    rating: 5,
    text: 'He ido varias veces y seguiré yendo. El mejor sitio para cortarse el pelo en Castro-Urdiales sin duda.',
    initials: 'LG',
  },
  {
    name: 'Carlos R.',
    time: 'Hace 6 meses',
    rating: 5,
    text: 'Excelente profesional. Te escucha, entiende lo que quieres y el resultado es siempre perfecto. El local es acogedor y siempre limpio.',
    initials: 'CR',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={styles.star}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="resenas" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Reseñas de clientes</p>
          <h2 className={styles.title}>Lo que dicen de nosotros</h2>
          <div className={styles.summary}>
            <span className={styles.summaryScore}>4,8</span>
            <div>
              <Stars count={5} />
              <p className={styles.summaryCount}>Basado en 49 reseñas de Google</p>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatar}>{r.initials}</div>
                <div>
                  <p className={styles.reviewerName}>{r.name}</p>
                  {r.badge && <span className={styles.badge}>{r.badge}</span>}
                  <p className={styles.reviewTime}>{r.time}</p>
                </div>
              </div>
              <Stars count={r.rating} />
              <p className={styles.reviewText}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
