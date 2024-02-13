import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

// const temporalAsync = () => {
//   return new Promise(( resolve : any, reject: any ) => {
//     setTimeout(() => {
//       resolve(true);
//       console.log('Que show');
//     }, 2000);
//   });
// }

const links = [
  { text: 'About', path: '/about' },
  { text: 'Pricing', path: '/pricing' },
  { text: 'contact  ', path: '/contact' }
];

export const Navbar = () => {
  
  // console.log('Server Component')
  // await temporalAsync();
  
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p2 m-2 rounded'>
        <Link className="flex items-center" href={'/'}>
          <HomeIcon className="mr-1"  size={16} />
          Home
        </Link>
        
        <div className='flex flex-1' />
        
        { 
          links.map( link => <ActiveLink key={link.path} { ...link } /> ) 
        }
    </nav>
  )
}
