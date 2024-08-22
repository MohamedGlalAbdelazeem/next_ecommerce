import React from 'react'

function ContactUs() {
  return (
    <section id='contact' className="mb-32">
        <h1 className='text-center text-3xl my-5 border-2 border-gray-200 w-fit mx-auto p-2'>تواصل معنا </h1>
  <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
      width="100%" height="480"    loading="lazy"></iframe>
  </div>
  <div className="container px-6 md:px-12">
    <div
      className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
      <div className="flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <form>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput90" />
              <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  for="exampleInput90">الأسم
                </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="email"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput91" />
              <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  for="exampleInput91"> البريد الإلكتروني  
                </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleFormControlTextarea1" rows="3"></textarea>
              <label for="exampleFormControlTextarea1"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">رسالتك هنا</label>
            </div>
           
            <button type="button"
                className="mb-6 w-full rounded bg-secondary text-white px-6 pt-2.5 pb-2 text-lg font-bold uppercase leading-normal   lg:mb-0">
                ارسال
              </button>
          </form>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                  
                  </div>
                </div>
                <div className="mr-3 grow">
                  <p className="mb-2 font-bold ">
                     دعم فني متواصل   
                  </p>
                  <p className="text-sm text-neutral-500">
                    example@gmail.com
                  </p>
                  <p className="text-sm text-neutral-500">
                    1-600-890-4567
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="srink-0">
                  <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                   
                  </div>
                </div>
                <div className="mr-3 grow">
                  <p className="mb-2 font-bold ">
                    العنوان
                  </p>
                  Egypt
                </div>
              </div>
            </div>
            <div
              className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                  </div>
                </div>
                <div className="mr-3 grow">
                  <p className="mb-2 font-bold ">Land Line</p>
                  <p className="text-neutral-500"> (0421) 431 2030
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                    
                  </div>
                </div>
                <div className="mr-3 grow">
                  <p className="mb-2 font-bold ">Mobile</p>
                  <p className="text-neutral-500"> +91 123456789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  )
}

export default ContactUs