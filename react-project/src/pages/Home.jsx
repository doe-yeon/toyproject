import React, { useEffect } from 'react'
import axios from 'axios'
import styles from './Home.module.css'

import HomeTopSlide from '../components/HomeTopSlide';
import HomeCardSlide from '../components/HomeCardSlide';
import HomeServiceVideo from '../components/HomeServiceVideo';
import HomeSeason from '../components/HomeSeason';
import HomeNews from '../components/HomeNews';
import HomeFont from '../components/HomeFont';

const Home = () => {
    return (
        <div className={styles.body}>
            <HomeTopSlide />

            <div className={styles.homeDiv}>
                <h1 className={styles.homeTitle}><strong>우아한형제들이 일하는 이야기</strong></h1>
                <p className={styles.homeContent}>평범한 사람들이 모여 비범한 성과를 만들어 내도록</p>
                <HomeCardSlide />
            </div>

            <div className={styles.homeDiv}>
                <h1 className={styles.homeTitle}><strong>‘문 앞으로 배달되는 일상의 행복’이라는<br />
                    비전으로</strong></h1>
                <p className={styles.homeContent}>우아한형제들은 배달이 일상을 조금 더 행복하게 하도록 오늘도 달리고 있어요</p>
                <HomeServiceVideo />
            </div>

            <div className={styles.homeDiv}>
                <h1 className={styles.homeTitle}><strong>오늘이 전설이 될 수 있도록</strong></h1>
                <p className={styles.homeContent}>세계 진출, 배민로봇 개발, 인공지능을 연구하며<br />
                    우아한형제들은 미래를 더 가깝게 만들고 있어요.</p>
            </div>

            <div className={styles.homeDiv}>
                <HomeSeason />
</div>

            <div className={styles.homeDiv}>
                <h1 className={styles.homeTitle}><strong>빠르고 정확한<br/>
                    우아한형제들의 새 소식</strong></h1>
                <HomeNews />
            </div>

            <div className={styles.homeDiv} style={{backgroundColor:'#232324'}}>
                <h1 style={{color:'white'}} className={styles.homeTitle}><strong>배달의민족<br/>
                    글꼴 찾으세요?</strong></h1>
                <p style={{color:'white'}} className={styles.homeContent}>배달의민족이 만든 모든 글꼴은 무료입니다.<br/>
                    마음껏 쓰고, 널리 퍼뜨리는 것도 무료!</p>
                <HomeFont/>
            </div>
        </div>
    )
}

export default Home