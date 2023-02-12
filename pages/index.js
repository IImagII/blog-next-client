import NavBar from '@/components/NavBar'
import Head from 'next/head'
import Link from 'next/link'
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
// непосредственно сами посты это маленькие квадратики их у нас будет 6шт
const Post = styled.div`
   width: 350px;
   height: 270px;
   border-radius: 15px;
   margin-top: 50px;
   position: relative;
   cursor: pointer;
   background: url('${props => props.bgImage}') center / cover no-repeat; // динамическое отображение картинки
   &:hover {
      transform: scale(1.1);
      transition: 0.3s all ease; // при наведении  увеличивается
   }
`
// Название поста
const PostTitle = styled.div`
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 21px;
   color: #3260a1;
   padding: 15px 20px;
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   background: white;
   border-radius: 0px 0px 15px 15px;
`

export default function Home({ posts }) {
   if (!posts) 'Loading....'
   return (
      <>
         <Head>
            <title>My Blog NEXT</title>
         </Head>
         {/* он на всю ширину нашего экрана как контейнер */}
         <Wrapper>
            <NavBar />
            <div className='container'>
               <PostsWrapper>
                  {posts.map(post => (
                     <Link href={`/post/${post._id}`}>
                        <Post bgImage={post.imgUrl} {...post} key={post._id}>
                           <div className='postTitle'>{post.title}</div>
                        </Post>
                     </Link>
                  ))}
               </PostsWrapper>
            </div>
         </Wrapper>
      </>
   )
}

//делаем запрос на сервер для реализации SSR
export async function getServerSideProps() {
   try {
      const res = await fetch(`${process.env.API_HOST}/post`)
      const posts = await res.json()

      //делаем проверку если ничего не будет то выводим следующее
      if (!posts) {
         return {
            notFound: true,
         }
      }
      console.log('posts', posts)
      return { props: { posts } }
   } catch {
      return { props: { posts: null } }
   }
}
