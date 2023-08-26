import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


export const metadata = {
  title: 'Nithu Contact',
  description: 'Welcome to Contact',
}


const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt=''
            fill={true}
            className={styles.image}/>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='text' className={styles.input} />
          <input type='text' placeholder='email' className={styles.input}/>
          <textarea className={styles.textArea} cols="30" rows="10" placeholder='message'></textarea>
          <Button url="#" text="send"></Button>
        </form>
      </div>
    </div>
  )
}

export default Contact