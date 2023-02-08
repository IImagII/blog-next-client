import NavBar from '@/components/NavBar'
import Head from 'next/head'
import styled from 'styled-components'

const Wrapper = styled.div`
   background: #eef5ff;
   min-height: 100vh;
   width: 100%;
`
const PostsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   column-gap: 30px;
`

export default function Home() {
   return (
      <>
         <Head>
            <title>My Blog NEXT</title>
         </Head>
         {/* он на всю ширину нашего экрана как контейнер */}
         <Wrapper>
            <NavBar />
            <div className='container'>
               <PostsWrapper></PostsWrapper>
            </div>
         </Wrapper>
      </>
   )
}
