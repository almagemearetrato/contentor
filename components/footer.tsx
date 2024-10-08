import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary-300 text-bg-100">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CONTENTOR</h3>
            <p className="mb-4">Empowering your SEO strategy with AI-driven tools and insights.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-accent-100"><Facebook size={24} /></Link>
              <Link href="#" className="hover:text-accent-100"><Twitter size={24} /></Link>
              <Link href="#" className="hover:text-accent-100"><Instagram size={24} /></Link>
              <Link href="#" className="hover:text-accent-100"><Linkedin size={24} /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-accent-100">Features</Link></li>
              <li><Link href="#" className="hover:text-accent-100">Pricing</Link></li>
              <li><Link href="#" className="hover:text-accent-100">Use Cases</Link></li>
              <li><Link href="#" className="hover:text-accent-100">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-accent-100">Blog</Link></li>
              <li><Link href="#" className="hover:text-accent-100">Guides</Link></li>
              <li><Link href="#" className="hover:text-accent-100">API Documentation</Link></li>
              <li><Link href="#" className="hover:text-accent-100">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-accent-100">About Us</Link></li>
              <li><Link href="#" className="hover:text-accent-100">Careers</Link></li>
              <li><Link href="#" className="hover:text-accent-100">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-accent-100">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-bg-300">
          <p className="text-center">&copy; 2023 CONTENTOR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}