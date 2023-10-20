import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "react-multi-carousel/lib/styles.css";
import styles from './HomeTopSlide.module.css'

const HomeTopSlide = () => {
    const navbarHeight = '95px';
    return (
        <div>
            <Carousel fade interval={3000}>
                <Carousel.Item>
                    <div style={{
                        width: '100%', height: `calc(100vh - ${navbarHeight}`, margin: '0 auto', overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '90vh',
                            objectFit: 'cover',
                            backgroundImage: `url("https://woowahan-cdn.woowahan.com/new_resources/image/banner/5a76ab3c37ea4e7d80d3a6e11b36e0f1.jpg")`,
                            backgroundSize: 'cover'
                        }}
                            alt="Image One"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: `calc(100vh - ${navbarHeight}`, margin: '0 auto', overflow: 'hidden' }}>
                        <div style={{
                            width: '100%',
                            height: '90vh',
                            objectFit: 'cover',
                            backgroundImage: `url("https://woowahan-cdn.woowahan.com/new_resources/image/banner/eae7989f3b2e490299b80c9f5bd80ad3.jpg")`,
                            backgroundSize: 'cover'
                        }}
                            alt="Image Two"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: `calc(100vh - ${navbarHeight}`, margin: '0 auto', overflow: 'hidden' }}>
                        <div style={{
                            width: '100%',
                            height: '90vh',
                            objectFit: 'cover',
                            backgroundImage: `url("https://woowahan-cdn.woowahan.com/new_resources/image/banner/9f861f6086e845b98dfba7ec241f82ca.jpg")`,
                            backgroundSize: 'cover'
                        }}
                            alt="Image Three"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: `calc(100vh - ${navbarHeight}`, margin: '0 auto', overflow: 'hidden' }}>
                        <div style={{
                            width: '100%',
                            height: '90vh',
                            objectFit: 'cover',
                            backgroundImage: `url("https://woowahan-cdn.woowahan.com/new_resources/image/banner/8f94fc8c4bf3455dbd05a43b9d59bee9.jpg")`,
                            backgroundSize: 'cover'
                        }}
                            alt="Image Four"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: `calc(100vh - ${navbarHeight}`, margin: '0 auto', overflow: 'hidden' }}>
                        <div style={{
                            width: '100%',
                            height: '90vh',
                            objectFit: 'cover',
                            backgroundImage: `url("https://woowahan-cdn.woowahan.com/new_resources/image/banner/a744b994004242869f0ad158cbc00988.jpg")`,
                            backgroundSize: 'cover'
                        }}
                            alt="Image Five"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeTopSlide