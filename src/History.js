import { useState } from 'react'
import styles from './History.module.css';
import HistoryItem from './HistoryItem';

const History = ({userHistory}) => {
  const [focus, setFocus] = useState(false);
  
  const historyItem = userHistory.slice(0).reverse().map(log => {
    return (
      <HistoryItem 
        id={log.id} 
        input={log.input} 
        pitch={log.result} 
      />
    );
  })

  return (
    <main 
      className={focus ? styles.focused : styles.main} 
      onClick={() => setFocus(focus => !focus)}>
      {historyItem}
    </main>
  )
}

export default History