export const Login = () => {
        
  return (
    <>
      <div className="py-2 px-2 mx-10 lg:px-42 md:px-40 md:mx-30 sm:px-36 lg:mx-60">
        <h1 className="text-center py-6 text-3xl font-semibold">
          Sign in to your account.
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered input-primary w-full max-w-full rounded-lg m-1"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered input-primary w-full max-w-full rounded-lg m-1"
        />       
        <button className="tn btn-active btn-primary font-bold btn-md sm:btn-md md:btn-md lg:btn-md rounded-lg m-1">Sign In</button>
      </div>      
    </>
  )
}
