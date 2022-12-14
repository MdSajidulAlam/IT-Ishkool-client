import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { FcGoogle } from 'react-icons/fc'

const Login = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  if (gUser) {
    console.log(gUser)
  }
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  //   const [token] =useToken(user || gUser)
  console.log(gUser);
  let signInErrorMessage;
  if (loading || gLoading) {
    return <Loading></Loading>
  }
  if (error || gError) {
    signInErrorMessage = <p className='text-red-500'><small>{error?.message || gUser?.message}</small></p>

  }

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
    navigate('/')
  }


  //    if(token){
  //    console.log(user||gUser);

  //        navigate('/home')
  //    }


  return (
    <div className='flex h-screen justify-center items-start mt-8'>
      <div className='card w-96 bg-accent shadow-xl'>
        <div className='card-body text-white'>
          <h2 className=' text-2xl font-bold'>Log in</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-white text-lg">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full h-[35px] max-w-xs bg-accent border-1 border-white"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required"
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email'
                  }
                })}
              />
              <label class="label">
                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-white text-lg">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full h-[35px] max-w-xs bg-accent border-1 border-white"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required"
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 character or or longer'
                  }
                })}
              />
              <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox checkbox-primary bg-white" />
                <div className='w-full ml-3'>
                  <span className="label-text text-white">Remember me</span>
                </div>
              </label>
            </div>
            {signInErrorMessage}
            <input className='btn w-full h-[35px] text-white max-w-xs rounded-full btn-secondary font-bold' value='Login' type="submit" />
          </form>

          <div className='grid grid-cols-5 w-5/6 mx-auto mt-5'>
            <div className='col-span-2 h-[1px] bg-gray-100 rounded-full'></div>
            <div className='col-span-1 flex justify-center items-center mt-[-13px]'>or</div>
            <div className='col-span-2 h-[1px] bg-gray-100 rounded-full'></div>
          </div>

          {/* <div className='divider'>or</div> */}
          <button
            onClick={() => signInWithGoogle()}
            className='btn btn-ghost text-slate-400'
          >Log in with <FcGoogle className='ml-2' />

          </button>
          <p className='text-slate-400 text-center'>Do you have an account? <Link className='text-slate-400 font-bold btn btn-link' to="/signup"> Sign Up</Link></p>


        </div>

      </div>
    </div>
  );
};

export default Login;