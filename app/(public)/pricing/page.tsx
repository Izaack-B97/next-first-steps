
import type { Metadata } from "next"

export const metadata : Metadata = {
  title: 'Princing Page',
  description: 'Esta es la pagina de precios mis productos', 
}


export default function PricingPage () {
    return (
      <>
          <span className="text-7xl">
              Pricing page
          </span>
      </>
    )
  }
  