import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()


  return (
<footer className="footer footer-center p-4 bg-base-200 text-base-content">
  <div>
    <p>Copyright © {footerYear} - All right reserved by Drew Barton</p>
  </div>
</footer>
    
  )
}

export default Footer