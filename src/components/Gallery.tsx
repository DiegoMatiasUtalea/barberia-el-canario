import styles from './Gallery.module.css'

const photos = [
  {
    src: 'https://images.pexels.com/photos/12339159/pexels-photo-12339159.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Interior de la barbería',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
    alt: 'Barber dando un corte de calidad',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/897271/pexels-photo-897271.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    alt: 'Herramientas de barbería',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/3998413/pexels-photo-3998413.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
    alt: 'Arreglo de barba',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/7518692/pexels-photo-7518692.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    alt: 'Ambiente relajado en la barbería',
    span: 'wide',
  },
]

export default function Gallery() {
  return (
    <section id="galeria" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Galería</p>
          <h2 className={styles.title}>Nuestro espacio</h2>
        </div>

        <div className={styles.grid}>
          {photos.map((p, i) => (
            <div key={i} className={`${styles.item} ${styles[p.span]}`}>
              <img src={p.src} alt={p.alt} className={styles.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
