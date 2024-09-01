import React from 'react'

function ContactUs() {
  return (
    <section id='contact' className="mb-32">
        <h1 className='text-center text-3xl my-5 border-2 border-gray-200 w-fit mx-auto p-2'>تواصل معنا </h1>
  <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
      width="100%" height="480" ></iframe>
  </div>
  <div className="container px-6 md:px-12">
    <div
      className="block rounded-lg bg-[hsla(0,0%,100%,0.8)]  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
      <div className=" flex flex-wrap">
        <div className=" w-full mx-auto shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className=" p-1 mx-auto w-full flex flex-wrap">
            <div className=" mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
              <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                   
                   </div>
                <div className="mr-3 grow">
                  
                  <p className="mb-2 font-bold ">
                     دعم فني متواصل   
                  </p>
                  <p className="text-sm text-neutral-500">
                    example@gmail.com
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
                  <p className="text-sm text-neutral-500">
                    201021432931+
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