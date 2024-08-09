

const About = () => {
    return (
        <section className="pt-10 overflow-hidden bg-orange-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16 mt-10">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">

                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Hey 👋 I
                            am
                            <br className="block sm:hidden" /> Saref
                        </h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                        Certainly! The phrase Saref About do not seem to correspond to a commonly recognized term or phrase in English. It could be a typo, a specific name, or a term in another language. Could you please provide more context or clarify what you mean by Saref About? This will help me give you a more accurate and helpful response.
                        </p>

                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                                <span className="relative"> Have a question? </span>
                            </span>
                            <br className="block sm:hidden" />Ask me on <a href="#" title=""
                                className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Facebook</a>
                        </p>
                    </div>

                    <div className="relative">
                        <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                        <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://i.ibb.co/x6dyQpQ/IMG-20230710-134925-359-removebg-preview.png" alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;