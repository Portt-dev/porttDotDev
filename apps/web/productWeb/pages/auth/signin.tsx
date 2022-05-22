import { getProviders, signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from "react"
export default function SignIn({ providers }: any) {
  const { data: session, status } = useSession()
  const router = useRouter()
  // if there is a session then we want to redirect back 
  if (session) router.push('/') // in theory - we do not even need to show a link to the signin page any way
  return (
    <>
       {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context: any) {
  return { props: { providers: await getProviders() } };
}