import React from 'react'
import styles from './Header.module.css'
import logo from '../img/logo.png'

const Header = () => {
    return (
        <div className={styles.headerBox}>
            <div><img src={logo} className={styles.logo} /></div>
            <div className={styles.navbar} >
                <ul>
                    <li className={styles.nav}>회사소개</li>
                    <li className={styles.nav}>서비스</li>
                    <li className={styles.nav}>함께가치</li>
                    <li className={styles.nav}>뉴스룸</li>
                    <li className={styles.nav}>글꼴</li>
                    <li className={styles.nav}>음악</li>
                </ul>
            </div>
            <div>
                <ul className={styles.navlang}>
                    <li><button className={styles.btn}>한</button></li>
                    <li><button className={styles.btn}>A</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header