import React from 'react'

function New() {
  return (
    <>
    <section id='new' className="overflow-hidden bg-[url(https://cdn2.hubspot.net/hubfs/53/00-Blog_Thinkstock_Images/sell-ideas.png)] bg-cover bg-bottom bg-no-repeat">
    <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">ما الجديد</h2>

        <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
        أهلاً بكم في متجركو، وجهتكم الإلكترونية الموثوقة لتلبية كافة احتياجاتكم الشرائية. نحن هنا لنقدم لكم تجربة تسوق استثنائية تجمع بين الجودة والراحة والابتكار.
        </p>

        <div className="mt-4 sm:mt-8">
            <a
            href="#"
            className="inline-block rounded-full bg-secondary px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-500 focus:outline-none focus:ring focus:ring-yellow-400"
            >
            اكتشف ما هو جديد كل يوم
            </a>
        </div>
        </div>
    </div>
    </section>
    <section>
    <div className="mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
        <h2 className="text-xl font-bold text-secondary sm:text-3xl">افضل الكوليكشن</h2>

        <p className="mt-4  text-lg text-gray-500">
        في متجركو، نقدم مجموعة مختارة بعناية من المنتجات المتنوعة التي تلبي احتياجاتكم وتواكب أحدث الاتجاهات في السوق. من خلال موقعنا، نضمن لكم تجربة تسوق سهلة وسلسة بفضل واجهتنا المبتكرة والمصممة لتكون بسيطة وسريعة.
        </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <li>
            <a href="#" className="group relative block">
            <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

                <span
                className="mt-1.5 inline-block bg-secondary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                تسوق الأن
                </span>
            </div>
            </a>
        </li>

        <li>
            <a href="#" className="group relative block">
            <img
                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

                <span
                className="mt-1.5 inline-block bg-secondary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                تسوق الأن
                </span>
            </div>
            </a>
        </li>

        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="group relative block">
            <img
                src="https://sutrastores.com/cdn/shop/files/067A0016.jpg?v=1719839036&width=2000"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                <span
                className="mt-1.5 inline-block bg-secondary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                تسوق الأن
                </span>
            </div>
            </a>
        </li>
        </ul>
    </div>
    </section>
    </>
  )
}

export default New