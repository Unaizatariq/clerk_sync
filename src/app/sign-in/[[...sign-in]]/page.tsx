import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
        <SignIn />
    </div>
  )
}