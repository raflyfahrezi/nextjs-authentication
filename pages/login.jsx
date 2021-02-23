import React from 'react'
import cookies from 'next-cookies'

import styles from '../styles/Home.module.css'

const login = ({ allCookies }) => {
    return (
        <div className={styles.container}>
            <p>Login Page</p>
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

export default login
