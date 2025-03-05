import React from 'react'

function Footer() {
    const socialLinks = [
      { name: 'Facebook', url: '#' },
      { name: 'Instagram', url: '#' },
      { name: 'Twitter', url: '#' }
    ];
  
    return (
      <footer className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2025 AP Tourism. All rights reserved.</p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                className="hover:text-yellow-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
}
export default Footer