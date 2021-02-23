import React from 'react'
import cookies from 'next-cookies'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

const login = () => {
    const router = useRouter()

    const loginHandler = () => {
        document.cookie = 'token=asdkwl920-3asdaoidw--'

        router.push('/dashboard')
    }

    return (
        <div className={styles.container}>
            <p>Login Page</p>
            <button onClick={loginHandler}>Login</button>
        </div>
    )
}

export const getServerSideProps = async ctx => {
    const allCookies = cookies(ctx)

    if (allCookies.token) {
        return ctx.res.writeHead(302, { Location: '/dashboard' }).end()
    }

    return {
        props: {
            allCookies,
        },
    }
}

export default login
