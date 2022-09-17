import styles from '../styles/Home.module.css'
import {MatajiSection} from '../components/section/section-export'
import { FeesSection } from '../components/section/section-export'
import {MahaGuru} from '../components/section/section-export'
export default function Home() {
  return (
    <div className={styles.container}>
     <MatajiSection/>
     <FeesSection/>
     <MahaGuru/>
    </div>
  )
}
