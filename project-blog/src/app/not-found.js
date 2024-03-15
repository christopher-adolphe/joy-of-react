import Link from 'next/link';

import styles from './homepage.module.css';
 
export default function NotFound() {
  return (
    <div className={ styles.wrapper }>
      <h1 className={ styles.mainHeading }>404 Not Found</h1>

      <p className={ styles.textCenter }>This page does not exist. Please check the URL and try again or click the following link to <Link href="/">return Home</Link></p>
    </div>
  )
}
