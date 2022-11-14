import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  //   const [token]=useToken(user||gUser);

  let signInErrorMessage;
  if (loading || gLoading || updating) {
    return <Loading></Loading>
  }
  if (error || gError || updateError) {
    signInErrorMessage = <p className='text-red-500'><small>{error?.message || gUser?.message || updateError?.message}</small></p>

  }

  const onSubmit = async (data) => {
    const firstName = data.firstName
    const lastName = data.lastName
    const fullName = firstName + ' ' + lastName
    if (data.password === data.confirmPassword) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: fullName });
      reset()
      navigate('/');
    }
    else {
      signInErrorMessage = "Password didn't matched"
    }

    // console.log(firstName + ' ' + lastName);

    // console.log('update done');

  }

  // console.log(user);
  // if(token){
  //     // console.log(user||gUser);
  //     navigate('/home');

  // }

  return (
    <div className='flex h-screen justify-center items-start mt-5'>
      <div className="card w-96 bg-accent  shadow-xl">
        <div className="card-body">
          <h2 className=" text-2xl font-bold">Sign Up</h2>


          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ----------------------------- Name -------------------- */}
            <div className='grid grid-cols-2 gap-5'>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-white font-semibold">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  class="input input-bordered w-full h-[35px] max-w-xs bg-accent border-1 border-white"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "name is required"
                    }
                  })}
                />
                <label class="label">
                  {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                </label>
              </div>


              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-white font-semibold">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  class="input input-bordered w-full h-[35px] max-w-xs bg-accent border-1 border-white"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "name is required"
                    }
                  })}
                />
                <label class="label">
                  {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                </label>
              </div>
            </div>
            {/* --------------------------- Email --------------------- */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-white font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder=""
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
            {/* ------------------------ Password -------------------- */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-white font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder=""
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
            {/* ---------------------- Confirm Password ------------------ */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-white font-semibold">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder=""
                class="input input-bordered w-full h-[35px] max-w-xs bg-accent border-1 border-white"
                {...register("confirmPassword", {
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


            {signInErrorMessage}
            <input className='btn w-full h-[35px] text-white max-w-xs rounded-full btn-secondary font-bold' value='Sign Up' type="submit" />
          </form>

          {/* ----------------------------- Divider-------------------------------- */}

          <div className='grid grid-cols-5 w-5/6 mx-auto mt-5'>
            <div className='col-span-2 h-[1px] bg-gray-100 rounded-full'></div>
            <div className='col-span-1 flex justify-center items-center mt-[-13px]'>or</div>
            <div className='col-span-2 h-[1px] bg-gray-100 rounded-full'></div>
          </div>


          <button
            onClick={() => signInWithGoogle()}
            className='btn btn-ghost text-slate-400'
          >Log in with <FcGoogle className='ml-2' />

          </button>

          <p><small>Already have an account? <Link className='text-blue-800 font-bold' to="/login">Please Login</Link></small></p>
          {/* <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-accent"
          >Continue with google</button> */}

        </div>
      </div>
    </div>
  );
};

export default SignUp;