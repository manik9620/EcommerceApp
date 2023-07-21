import React from 'react'
import './Contact.css'
// import Layout from '../components/Layouts/Layout'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
const Contact = () => {
  return (
    <>
    <Header />
    <div>
	<div className="contact-container">
		<div className="contact-box">
			<div className="left"></div>
			<div className="right">
				<h2 className="contact-heading" style={{fontSize:'27px'}}>Contact Us</h2>
				<input type="text" className="field" placeholder="Your Name" />
				<input type="text" className="field" placeholder="Your Email" />
				<input type="text" className="field" placeholder="Phone" />
				<textarea placeholder="Message" className="field"></textarea>
				<button className="btn">Send</button>
			</div>

		</div>
		
	</div>
</div>
<Footer/>
    </>
  )
}
export default Contact