'use client';
import Image from 'next/image';
import { useState } from 'react';
import LogoPath from '@/assets/colorful.svg';
import { useRouter } from 'next/navigation';
import Loader from '@/components/loader/Loader';
import Input from '@/components/input/input';

export default function LoginClient() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
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
      {isLoading ?? <Loader />}
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
            <Input
              email
              icon='letter'
              id='email'
              name='email'
              label='Email'
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              password
              icon='lock'
              id='password'
              name='password'
              label='Password'
              placeholder='Please Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='flex justify-between mt-0.5'>
              {/*  Auto Login, edit password  */}Auto
            </div>
            <div className='m-8'>
              {/*  Button  */}
              <div>{/*  Button  */}</div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
