import './coming-soon.css'

const Header = () => {
    return (
        <div className='header'>
            <p>Hydro Harvest</p>
            <p><a href='mailto:hello@hydroharvest.co'>Contact us</a></p>
        </div>
    )
}

const Footer = () => {
    return <div className='footer'><p>© {new Date().getFullYear()} Hydro Harvest</p></div>
}

const Content = () => {
    return (
        <div className='content'>
            <h1>Coming soon</h1>
            <h2>2023</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="1008" zoomAndPan="magnify" viewBox="0 0 252 143.999998" height="576" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="625a2664db"><path d="M 80.757812 10.5625 L 171.507812 10.5625 L 171.507812 133.5625 L 80.757812 133.5625 Z M 80.757812 10.5625 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#625a2664db)"><path fill="#ff8210" d="M 128.460938 125.664062 L 128.460938 106.035156 L 166.519531 77.695312 L 166.519531 97.472656 Z M 85.75 77.867188 L 123.582031 106.035156 L 123.582031 125.640625 L 85.75 97.472656 Z M 123.582031 53.707031 L 123.582031 73.21875 L 87.253906 46.183594 L 100.21875 36.316406 Z M 123.582031 47.632812 L 104.257812 33.242188 L 123.582031 18.554688 Z M 128.460938 47.632812 L 128.460938 18.53125 L 147.910156 33.144531 Z M 128.460938 53.707031 L 152 36.195312 L 165.039062 45.984375 L 128.460938 73.242188 Z M 85.75 51.152344 L 123.582031 79.316406 L 123.582031 99.933594 L 85.75 71.765625 Z M 166.519531 71.59375 L 128.460938 99.933594 L 128.460938 79.316406 L 166.519531 50.980469 Z M 126.023438 10.5625 L 80.84375 44.902344 L 80.84375 99.933594 L 126.023438 133.5625 L 171.421875 99.933594 L 171.421875 44.65625 L 126.023438 10.5625 " fill-opacity="1" fill-rule="nonzero"/></g></svg>            <p>Automated vertical farming</p>
        </div>
    )
}

export const ComingSoonPage = () => {
    return (
        <div className='coming-soon'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
