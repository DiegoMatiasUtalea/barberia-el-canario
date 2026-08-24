import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandIcon}>✂</span>
          <span className={styles.brandName}>Barbería El Canario</span>
        </div>
        <p className={styles.address}>C. Leonardo Rucabado, 2 · Castro-Urdiales, Cantabria</p>
        <p className={styles.copy}>© {new Date().getFullYear()} Barbería El Canario. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
