import React from 'react'
import styles from './App.module.css'

const Instructions = () => {
  return (
    <>
      <h1><span>SNAPPY</span>
        <div className={styles.triangle}></div>
      </h1>
      <h2>The Quick Elevator Pitch Generator</h2>
      <h4>Instructions:</h4>
      <ol>
        <li>Insert name</li>
        <li>Provide your career title</li>
        <li>Provide your specialty</li>
        <li>Describe your job in one or two adjectives</li>
        <li>Share your goal of your pitch, e.g. to connect</li>
        <li>Click Generate Pitch!</li>
      </ol>
      <p>hint: add to what's given and don't delete the template!</p>
    </>
  )
}

export default Instructions;