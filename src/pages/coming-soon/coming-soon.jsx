import './coming-soon.css'

const Header = () => {
    return (
        <div className='header'>
            <p>Terraforma</p>
            <p><a href='mailto:info@terraforma.world'>Contact us</a></p>
        </div>
    )
}

const Footer = () => {
    return <div className='footer'><p>© {new Date().getFullYear()} Terraforma</p></div>
}

const Content = () => {
    return (
        <div className='content'>
            <h1>Coming soon</h1>
            <h2>2023</h2>
            <img src='field.jpg' alt='an image of a blurry field'/>
            <p>Automated vertical aquaponics</p>
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
