import './FooterSite.css'

const FooterSite = (props) =>{

    return(

        <div className='footer-site'>

            <section className='footer-site-social'>

                <img src='/images/footer/fb.png' alt='Facebook'/>
                <img src='/images/footer/ig.png' alt='Instagram'/>
                <img src='/images/footer/tw.png' alt='Twitter'/>

            </section>

            <section className='footer-site-devby'>
                <h4>Desenvolvido por Yuri Fernandes</h4>
            </section>

        </div>

    )

}

export default FooterSite