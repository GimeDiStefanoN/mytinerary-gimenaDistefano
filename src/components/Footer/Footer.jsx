import Link from '../Link/Link'
import './Footer.css'

function Footer() {

  const social = [
    { title: 'Instagram', icon: '/Icons/Instagram.svg', to: 'https://www.instagram.com' },
    { title: 'Facebook', icon: '/Icons/Facebook.svg', to: 'https://es-la.facebook.com/' },
    { title: 'WhatsApp', icon: '/Icons/Whatsapp.svg', to: 'https://www.whatsapp.com/?lang=es_LA' },
  ]
  const company = [
    { title: 'About us', to: '#' },
    { title: 'Contact', to: '#' },
   
  ]
  const legal = [
    { title: 'Terms of use', to: '#' },
    { title: 'Privacy policy', to: '#' },
    { title: 'Cookie policy', to: '#' },
  ]
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">follow us</span>
          <div className="contenedor-redes">
            {
              social.map((link) => (
                <Link key={link.title} title={link.title} to={link.to} icon={link.icon} />
              ))
            }
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          {
              company.map((link) => (
                <Link key={link.title} title={link.title} to={link.to} />
              ))
            }

        </div>
        <div>
          <span className="footer-title">Legal</span>
          {
              legal.map((link) => (
                <Link key={link.title} title={link.title} to={link.to} />
              ))
            }
        </div>
      </footer>
    </>
  )
}

export default Footer