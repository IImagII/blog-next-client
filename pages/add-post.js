import NavBar from '@/components/NavBar'
import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

//стандартная обвертка
const Wrapper = styled.div`
   background: #eef5ff;
   min-height: 100vh;
   width: 100%;
`

//стилизуем форму
// это обвертка для формы
const FormWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`
//стили для самой формы
const Form = styled.form`
   background: #ffffff;
   border-radius: 15px;
   padding: 30px;
   /* margin-top: 194px; */
   max-width: 500px; // вот этим идвумя свойствами мы деламе форму в ширину 500px
   width: 100%; // вот этим идвумя свойствами мы деламе форму в ширину 500px
`
//стилизация наших input - это мы делаем оболочку
const InputField = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 15px;
`
//стилизуем сам input
const Input = styled.input`
   width: 100%;
   display: flex;
   border: 1px solid #e5e5e5;
   box-sizing: border-box;
   border-radius: 5px;
   outline: none;
   padding: 5px 10px;
   margin-bottom: 15px;
`
//стилизация label
const TextLabel = styled.div`
   font-style: normal;
   font-weight: 300;
   font-size: 18px;
   line-height: 21px;
   color: #222222;
   margin-bottom: 5px;
`
//стилизация textArea для ввода текста
const TextArea = styled.textarea`
   border: 1px solid #e5e5e5;
   border-radius: 5px;
   min-height: 150px;
   outline: none;
   resize: none;
   overflow-wrap: break-word;
`

//Стилизуем кнопку
const AddBtn = styled.button`
   background: #67bfff;
   box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
   border-radius: 10px;
   padding: 8px 37px;
   outline: none;
   font-style: normal;
   font-weight: 300;
   font-size: 14px;
   line-height: 16px;
   text-align: center;
   color: #ffffff;
   border: none;
   margin: 0 auto; // делаем по цекнтру
   display: flex; // обязательный параметр чтобы сделать по центру
   cursor: pointer;
`

export default function AddPost() {
   const [title, setTitle] = useState('') // формируем заголовк для отправки на сервер
   const [text, setText] = useState('') // формируем текст поста для отправки на сервер
   const [imgUrl, setImgUrl] = useState('') // формируем картинку для отправки на сервер
   const router = useRouter() // в next используется для навигации

   //Создаем метод добавления постов
   const addPost = async () => {
      try {
         await axios
            .post(
               `https://server-next-blog-production.up.railway.app/api/post/add`,
               {
                  title,
                  text,
                  imgUrl,
               }
            )
            .then(() => router.push('/')) //делаем редирект на главную страницу
      } catch (e) {
         console.log(e)
      }
   }

   return (
      <>
         <Wrapper>
            <Head>
               <title>Add-Post</title>
            </Head>
            <NavBar />
            <div className='container'>
               {/* стилизация кнопки назад */}
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

               <FormWrapper>
                  <Form onSubmit={e => e.preventDefault()}>
                     <InputField>
                        {/* вставляем тег label */}
                        <TextLabel>Название статьи:</TextLabel>
                        {/* вставляем сам input */}
                        <Input
                           onChange={e => setTitle(e.target.value)}
                           value={title}
                        />
                     </InputField>

                     <InputField>
                        <TextLabel>Текст статьи:</TextLabel>
                        <TextArea
                           onChange={e => setText(e.target.value)}
                           value={text}
                        />
                     </InputField>

                     <InputField>
                        <TextLabel>URL картинки:</TextLabel>
                        <Input
                           onChange={e => setImgUrl(e.target.value)}
                           value={imgUrl}
                        />
                     </InputField>
                     <AddBtn onClick={addPost}>Добавить</AddBtn>
                  </Form>
               </FormWrapper>
            </div>
         </Wrapper>
      </>
   )
}
