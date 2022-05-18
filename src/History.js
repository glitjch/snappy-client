import { useState } from 'react'
import styles from './History.module.css';


const History = () => {
  const [focus, setFocus] = useState(false)

  return (
    <main className={focus ? styles.focused : styles.main} onClick={() => setFocus(focus => !focus)}>
      <article >

      </article>
      hello
    </main>
  )
}

export default History