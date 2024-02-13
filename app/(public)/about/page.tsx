import type { Metadata } from "next"


export const metadata : Metadata = {
  title: 'Seo Title',
  description: 'SEO Description', 
  keywords: [ 'About Page', 'Isaac', 'Informacion', '...' ],
}

export default function AboutPage () {
  return (
    <span className="text-7xl">About page</span>
  )
}
