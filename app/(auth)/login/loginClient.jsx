'use client';
import Image from 'next/image';
import { useState } from 'react';
import LogoPath from '@/assets/colorful.svg';
import { useRouter } from 'next/navigation';
import Loader from '@/components/loader/Loader';

export default function LoginClient() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isAutoLogin, setIsAutoLogin] = useState();

  const router = useRouter();

  const redirectUser = () => {
    router.push('/');
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {};

  return (
    <>
      <section className='h-screen grid place-items-center'>
        <div className='w-[576px]'>
          <h1 className='text-center mb-12'>
            <Image priority src={LogoPath} alt='logo' />
          </h1>
          <form
            action=''
            onSubmit={loginUser}
            className='flex flex-col w-full max-w-xl'
          >
            {/*  Input  */}Input
            <div className='flex justify-between mt-0.5'>
              {/*  Auto Login, edit password  */}Auto
            </div>
            <div className='m-8'>
              {/*  Button  */}Button
              <div>{/*  Button  */}Button</div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
