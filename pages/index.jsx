import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
            </Head>

            <div>Home</div>
            <ul>
                <li>
                    <LinkTo href='/dashboard'>Dashboard</LinkTo>
                </li>
                <li>
                    <LinkTo href='/login'>Login</LinkTo>
                </li>
            </ul>
        </div>
    )
}

const LinkTo = ({ href, children }) => {
    return (
        <Link href={href}>
            <a>{children}</a>
        </Link>
    )
}

export default Home
