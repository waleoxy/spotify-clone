import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

const login = ({ providers }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <img
        className="mb-5 w-52"
        src="https://brandlogos.net/wp-content/uploads/2021/12/spotify-brandlogo.net_.png"
        alt="pix"
      />
      {Object.values(providers).map((provider) => (
        <button
          onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          className="rounded-full bg-[#18D860] p-5 text-white"
          key={provider.name}
        >
          Login with {provider.name}
        </button>
      ))}
    </div>
  )
}

export default login

export const getServerSideProps = async () => {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
