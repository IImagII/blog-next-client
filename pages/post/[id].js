import NavBar from '@/components/NavBar'
import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

//стандартная обвертка
const Wrapper = styled.div`
   background: #eef5ff;
   min-height: 100vh;
   width: 100%;
   padding-bottom: 135px;
`

//стилизация кнопки назад
const BackBtn = styled.a`
   background: #ffffff;
   border-radius: 10px;
   padding: 15px;
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #3260a1;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
   margin-top: 30px;
   outline: none;
   width: 117px;
   height: 45px;
   :hover {
      box-shadow: 0px 0px 35px rgba(148, 174, 213, 1);
      transition: 0.3s all ease;
   }
`
//стилизуем оболочку которая будет отображать пост
const WrapperPoster = styled.div`
   display: flex;
   background: #fefefe;
   border-radius: 15px;
   margin-top: 50px;
   position: relative;
`

//стилизуем содержимое поста
const PostItem = styled.div`
   display: flex;
   flex-direction: column;
   flex: 0 0 50%;
   justify-content: center;
   padding: 35px;
`

//Стилизуем заголовок поста
const PostTitle = styled.h1`
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 28px;
   color: #3260a1;
   margin-bottom: 25px;
`
//стилизует вывод текста поста
const PostText = styled.p`
   font-style: normal;
   font-weight: 300;
   font-size: 18px;
   line-height: 21px;
   color: #000000;
`

//Стилизация кнопки удаления поста (красная)
const RemovePostBtn = styled.a`
   font-style: normal;
   font-weight: 300;
   font-size: 14px;
   line-height: 16px;
   background: #eb5050;
   box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
   border-radius: 10px;
   color: #ffffff;
   position: absolute;
   padding: 4px 13px 5px 13px;
   left: 50%; // чтобы выровнять кнопку по центру
   bottom: -25px; // чтобы выровнять кнопку по центру
   transform: translate(-50%, -50%); // чтобы выровнять кнопку по центру
   display: flex; // чтоыб выровнять по центру содержимое кнопки
   justify-content: center; // чтоыб выровнять по центру содержимое кнопки
   align-items: center; // чтоыб выровнять по центру содержимое кнопки
   cursor: pointer;
`

export default function Post() {
   return (
      <>
         <Wrapper>
            <Head>
               <title>ONE POST</title>
            </Head>
            <NavBar />
            <div className='container'>
               <Link href='/' className='backBtn'>
                  {/* вставляем нашу стрелку */}
                  <Image
                     src='/static/images/arrow.svg'
                     alt='Back'
                     width={24}
                     height={15}
                  />
                  Назад
               </Link>
               {/* сами посты где будут отображаться */}

               <WrapperPoster>
                  <PostItem>
                     <PostTitle>Альпы. Покори вершину с нами !</PostTitle>
                     <PostText>
                        А́льпы (фр. Alpes, нем. Alpen, итал. Alpi, романш. Alps,
                        словен. Alpe) — самый высокий и протяжённый горный
                        хребет среди систем, целиком лежащих в Европе. При этом
                        Кавказские горы выше, а Уральские — протяжённей, но они
                        лежат также и на территории Азии (в зависимости от
                        выбранного определения границы между Европой и Азией).
                        Альпы представляют собой сложную систему хребтов и
                        массивов, протянувшуюся выпуклой к северо-западу дугой
                        от Лигурийского моря до Среднедунайской низменности.
                        Альпы располагаются на территории 8 стран: Франции,
                        Монако, Италии, Швейцарии, Германии, Австрии,
                        Лихтенштейна и Словении. Общая длина альпийской дуги
                        составляет около 1200 км (по внутреннему краю дуги —
                        около 750 км), ширина — до 260 км. Самой высокой
                        вершиной Альп является гора Монблан высотой 4810 метров
                        над уровнем моря, расположенная на границе Франции и
                        Италии[1]. Всего в Альпах сосредоточено около 100
                        вершин-четырёхтысячников[2].
                     </PostText>
                  </PostItem>
                  <PostItem>
                     <Image
                        src='/static/images/1.jpg'
                        alt='Post'
                        width={440}
                        height={356}
                     />
                  </PostItem>
                  <RemovePostBtn>Удалить статью</RemovePostBtn>
               </WrapperPoster>
            </div>
         </Wrapper>
      </>
   )
}
