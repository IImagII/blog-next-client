import styled from 'styled-components'

const Nav = styled.nav`
   background: #fefefe;
   padding: 17px 0;
`

const NavBarItem = styled.div`
   position: relative;
`
// стили для логотипа это будет ссылка
const Logo = styled.a`
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 21px;
   color: #3260a1;
`

const AddPostBtn = styled.a`
   font-style: normal;
   font-weight: 300;
   font-size: 14px;
   line-height: 16px;
   color: #ffffff;
   background: #67bfff;
   box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
   border-radius: 10px;
   position: absolute;
   padding: 4px 13px 5px 13px;
   left: 50%; // чтобы выровнять кнопку по центру
   top: 38px; // чтобы выровнять кнопку по центру
   transform: translate(-50%, -50%); // чтобы выровнять кнопку по центру
   display: flex; // чтоыб выровнять по центру содержимое кнопки
   justify-content: center; // чтоыб выровнять по центру содержимое кнопки
   align-items: center; // чтоыб выровнять по центру содержимое кнопки
   cursor: pointer;
`

export default function NavBar() {
   return (
      <Nav>
         <div className='container'>
            <NavBarItem>
               {/* тут будет логотип */}
               <Logo>NEXT | BLOG</Logo>
               {/* тут вставляем нашу кнопку */}
               <AddPostBtn>Добавить статью</AddPostBtn>
            </NavBarItem>
         </div>
      </Nav>
   )
}
