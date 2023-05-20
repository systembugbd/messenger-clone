import Image from "next/image"
import AuthForm from "./components/AuthForm"

function page() {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 '>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image 
        height="48"
        width="48"
        alt="logo"
        src='/images/logo.png'
        className="mx-auto w-auto"
        />
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mt-6">
            Sign in to your account
        </h2>
        </div>
        <AuthForm />
    </div>



)
}

export default page