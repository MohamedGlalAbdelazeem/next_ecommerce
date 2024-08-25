import { SignIn } from '@clerk/nextjs'
import Image from 'next/image';
export const metadata = {
  title: "سجل الدخول",
  description: "سجل الدخول في منصة متجركو",
};

export default function Page() {
  return(
<section class="bg-white dark:bg-gray-900">
  <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      
      <Image
      src={"https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
      className="absolute inset-0 h-full w-full object-cover"
      width={"5 00"}
      height={"500"}
     />
    </aside>
    <main  class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6" >
      <div class="max-w-xl lg:max-w-3xl">
        <h1 class="my-7 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
         أهلا بك في متجركو👋
        </h1>
        <SignIn/> 
      </div>
    </main>
  </div>
</section>
  )  
}