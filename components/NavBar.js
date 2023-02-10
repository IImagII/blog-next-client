import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
   background: #fefefe;
   padding: 17px 0;
`

const NavBarItem = styled.div`
   position: relative;
`

export default function NavBar() {
   return (
      <Nav>
         <div className='container'>
            <NavBarItem>
               <Link href='/' className='logo'>
                  {/* тут будет логотип */}
                  NEXT | BLOG
               </Link>
               <Link href='/add-post' className='post'>
                  {/* тут вставляем нашу кнопку */}
                  Добавить статью
               </Link>
            </NavBarItem>
         </div>
      </Nav>
   )
}
