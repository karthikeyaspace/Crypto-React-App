import './Footer.css'

export default function Footer(){
    return (
        <div className='footer' id='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>Crypt0<span className='primary'>Know</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Developers</h5>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pro</a>
                        <a href='/'>API</a>
                   
                </div>
                <div className='col'>
                    <h5>Company</h5>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                        <a href='/'>Facebook</a>
                        <a href='/'>Twitter</a>
                        <a href='/'>Linkedin</a>
                        <a href='/'>Github</a>
                </div>
            </div>
            
        </div>
    )
}