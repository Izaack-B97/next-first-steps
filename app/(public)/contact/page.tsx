import type { Metadata } from "next"

export const metadata : Metadata = {
  title: 'Contact Page',
  description: 'Esta es la pagina de contacto de nosotros', 
}

export default function ContactPage () {
    return (
      <>
          <span className="text-7xl">
              Contact page
          </span>
      </>
    )
  }
  