import React from 'react'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

const dashboard = () => {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <p>Dashboard Page</p>
            <button onClick={() => router.push('/')}>Home</button>
        </div>
    )
}

export const getServerSideProps = async ctx => {
    const allCookies = cookies(ctx)

    if (!allCookies.token) {
        return ctx.res.writeHead(302, { Location: '/' }).end()
    }

    return {
        props: {
            allCookies,
        },
    }
}

export default dashboard
