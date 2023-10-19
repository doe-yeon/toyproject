import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerInner}>
                <nav className={styles.footerNav}>
                    <div className={styles.footerNavItem}>
                        <strong>
                            <a>회사소개</a>
                        </strong>
                        <ul>
                            <li><a>우아한 문화</a></li>
                            <li><a>히스토리</a></li>
                            <li><a>지속가능경영</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerNavItem}>
                        <strong>
                            <a>서비스</a>
                        </strong>
                        <ul>
                            <li><a>배달/포장</a></li>
                            <li><a>커머스</a></li>
                            <li><a>사장님/라이더</a></li>
                            <li><a>컬처</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerNavItem}>
                        <strong>
                            <a>함께가치</a>
                        </strong>
                        <ul>
                            <li><a>배민그린</a></li>
                            <li><a>배민아카데미</a></li>
                            <li><a>파트너 성장</a></li>
                            <li><a>이웃과 함께</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerNavItem}>
                        <strong>
                            <a>뉴스룸</a>
                        </strong>
                        <ul>
                            <li><a>보도자료</a></li>
                            <li><a>언론보도</a></li>
                            <li><a>팩트 바로 알기</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerNavItem}>
                        <strong>
                            <a>글꼴</a>
                        </strong>
                        <strong>
                            <a>음악</a>
                        </strong>
                    </div>
                    <div className={styles.footerNavItem}>
                        <ul>
                            <li><a>오시는 길</a></li>
                            <li><a>공지사항</a></li>
                            <li><a>개인정보처리방침</a></li>
                            <li><a>제휴문의</a></li>
                            <li><a>소비자중심경영</a></li>
                            <li><a>제보센터</a></li>
                        </ul>
                    </div>
                </nav>
                <div><button type='button'><span>관련사이트</span></button></div>
                <div className={styles.footerAddress}>
                    <h2>(주)우아한형제들</h2>
                    <p><span>사업자 등록번호 : 120-87-65763</span><span>대표 : 이국환</span><span>주소 : 서울시 송파구 위례성대로 2 (방이동, 장은빌딩)</span></p>
                </div>
            </div>
        </div >
    )
}

export default Footer