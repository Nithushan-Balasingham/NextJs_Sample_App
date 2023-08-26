import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Nithushan. All rights limited</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15}  className={styles.icon} alt="Nithu"/>
        <Image src="/2.png" width={15} height={15} className={styles.icon}  alt="Nithu"/>
        <Image src="/3.png" width={15} height={15} className={styles.icon}   alt="Nithu"/>
        <Image src="/4.png" width={15} height={15} className={styles.icon}  alt="Nithu"/>
      </div>
    </div>
  )
}

export default Footer