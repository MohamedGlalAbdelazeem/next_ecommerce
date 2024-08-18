import Image from "next/image"

function About() {
  return (
    <section id="about">
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
        <h2 className="text-3xl text-secondary font-bold sm:text-4xl">
        نبذة عن متجركو
        </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden  lg:h-full">
                  <Image
                        src="/about.jpg"
                        width={"550"}
                        height={"550"}
                        className="rounded-xl"
                        alt="متجركو لوجو"/>
        </div>

        <div className="lg:py-16">
            <article className="leading-normal my-2 text-xl text-gray-600">
            <p>
            مرحبًا بكم في متجركو، وجهتكم المثلى للتسوق عبر الإنترنت حيث تلتقون بأفضل المنتجات ذات الجودة العالية وبأسعار تنافسية. نحن ملتزمون بتقديم تجربة تسوق مميزة وسهلة لعملائنا الكرام، من خلال مجموعة متنوعة من المنتجات التي تلبي احتياجاتكم وتفوق توقعاتكم.
            </p>

            <p className="leading-normal my-5">
            في متجركو، نؤمن بأن التسوق يجب أن يكون ممتعًا وسلسًا، لذا نقدم لك واجهة مستخدم سهلة الاستخدام، خيارات دفع مرنة، وتوصيل سريع وآمن إلى باب منزلك. نحن نفخر بامتلاكنا فريقًا محترفًا من خدمة العملاء المستعدين دائمًا لمساعدتك والإجابة على استفساراتك، لضمان تجربة تسوق خالية من المتاعب.
            </p>

            <p className="leading-normal">
            استمتع بتصفح تشكيلتنا الواسعة من المنتجات الرائعة، وكن على يقين أنك ستجد كل ما تحتاجه لتلبية احتياجاتك وتحقيق رغباتك.
            شكرًا لاختيارك متجركو، ونتطلع لخدمتك وتلبية جميع احتياجاتك التسويقية.

            </p>
            </article>
        </div>
        </div>
    </div>
    </section>
  )
}

export default About