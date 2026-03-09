import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer>
      <div className="ctn">
        <div className="ft-top">
          <div className="ft-brand">
            <div className="ft-logo">
              <Image src="/logo-assets/logo_leiko.png" alt="Leiko" width={20} height={20} /> Leiko
            </div>
            <p>
              The AI operating layer for independent businesses. Built in Finland.
            </p>
          </div>
          <div className="ft-col">
            <h4>Product</h4>
            <Link href="/#features">Features</Link>
            <Link href="/#how">How it works</Link>
            <Link href="/#changelog">Changelog</Link>
            <a href="#">Roadmap</a>
          </div>
          <div className="ft-col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <a href="#">Careers</a>
            <a href="mailto:hello@leiko.ai">Contact</a>
          </div>
          <div className="ft-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
            <Link href="/#security">Security</Link>
          </div>
        </div>
        <div className="ft-bottom">
          <div className="ft-copy">
            &copy; 2026 Leiko AI Oy &middot; Helsinki, Finland
          </div>
          <div className="ft-socials">
            <a href="#">𝕏</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
