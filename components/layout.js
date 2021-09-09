import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/Link'

const name = 'Optical Font'
const logo = '/images/logo.png'

export const siteTitle = 'Optical Font'

export default function Layout({children, home}){
    return(
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name ="description"
                    content="Optical Font for Accessibility"
                />
                <meta
                    property="og:image"
                    content=""
                />

                <meta name="og:title" content={siteTitle}/>
                
            </Head>

            <header className={styles.header}>
                {/* if home page  */}
                {home ? (
                    <>
                    <Image
                        priority
                        src = {logo}
                        className={utilStyles.logo}
                        height={144}
                        width={144}
                        alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <Link href="/">
                        <a>
                            <Image
                                priority
                                src={logo}
                                className={utilStyles.logo}
                                height={144}
                                width={144}
                                alt={name}
                            />  
                        </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            )}        
            </header>
            
            
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}