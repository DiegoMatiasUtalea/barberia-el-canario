import styles from './Contact.module.css'

const schedule = [
  { day: 'Lunes – Viernes', hours: '9:00 – 14:00 · 16:30 – 20:00' },
  { day: 'Sábado', hours: '9:00 – 14:00' },
  { day: 'Domingo', hours: 'Cerrado' },
]

export default function Contact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Encuéntranos</p>
          <h2 className={styles.title}>Visítanos</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Dirección</h3>
              <p className={styles.infoText}>C. Leonardo Rucabado, 2</p>
              <p className={styles.infoText}>39700 Castro-Urdiales, Cantabria</p>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Teléfono</h3>
              <a href="tel:+34611156315" className={styles.phone}>611 15 63 15</a>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Instagram</h3>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.igLink}
              >
                @barberia_elcanario
              </a>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Horario</h3>
              <div className={styles.scheduleList}>
                {schedule.map((s) => (
                  <div key={s.day} className={styles.scheduleRow}>
                    <span className={styles.scheduleDay}>{s.day}</span>
                    <span className={`${styles.scheduleHours} ${s.hours === 'Cerrado' ? styles.closed : ''}`}>
                      {s.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a href="tel:+34611156315" className={styles.callBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
              </svg>
              Llamar para reservar
            </a>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              className={styles.map}
              title="Ubicación Barbería El Canario"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.0!2d-3.2167!3d43.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4d3f8a8b8b3f%3A0x0!2sCalle+Leonardo+Rucabado+2+Castro-Urdiales!5e0!3m2!1ses!2ses!4v1600000000000!5m2!1ses!2ses"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
