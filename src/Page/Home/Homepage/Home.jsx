import { Link } from "react-router-dom";
import Carousel from "../../../Components/Carousel/Carousel";
import Class_Course from "../../../Components/Classes_Courses/Class_Course";
import Partnership from "../../../Components/Partnership/Partnership";


const Home = () => {
    return (
        <div>
            {/* carousel */}
            <div>
                <Carousel></Carousel>
            </div>

            {/* class and course  */}
            <div className="mt-10 bg-orange-50">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white uppercase text-center p-3">
                        Our Best Course
                    </h2>
                </div>
                <Class_Course></Class_Course>
            </div>

            {/* teacher section  */}
            <div className="my-10 bg-orange-50 flex lg:flex-row flex-col items-center">
                <img className="h-[400px] p-3" src="https://i.ibb.co/1L6CZSZ/teacher-day-featured.jpg" alt="" />
                <div className="p-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white uppercase">
                        Become A Teacher
                    </h2>
                    <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">Teaching is a rewarding profession, but there are many paths to consider and ways to fulfill your future goals. This guide offers a step-by-step breakdown of how to become a licensed teacher. </p>

                    <Link to="/teacher">
                        <button className="btn bg-primary text-white mt-2">Start teaching today</button>
                    </Link>
                </div>
            </div>

            {/* Partnership */}
            <div className="mt-10 bg-orange-50">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white uppercase text-center p-3">
                        Our Trusted Partnership
                    </h2>
                </div>
                <Partnership></Partnership>
            </div>

            {/* extera section 1 */}
            <div className="bg-orange-50 dark:bg-gray-900 mt-10">
                <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                    <div className="flex justify-center xl:w-1/2">
                        <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
                    </div>

                    <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white uppercase">
                            Download our free mobile app
                        </h2>

                        <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">In a bustling city where technology was ever-present, there lived a young woman named Sara. Sara was always on the go, juggling her job, hobbies, and social life. Despite her busy schedule, she always felt like something was missing—until one day, she discovered an app that promised to change her life. </p>

                        <div className="mt-6 sm:-mx-2">
                            <a href="#" className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                <svg className="w-5 h-5 mx-2 fill-current" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302c41.355,0,75,33.645,75,75V407z"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                                        </g>
                                    </g>
                                </svg>

                                <span className="mx-2">
                                    Get it on the App Store
                                </span>
                            </a>

                            <a href="#"
                                className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                <svg className="w-5 h-5 mx-2 fill-current" viewBox="-28 0 512 512.00075" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0">
                                    </path>
                                </svg>

                                <span className="mx-2">
                                    Get it on Google Play
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* extera section 2 */}
            {/* <div className="bg-orange-50 mt-10">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white uppercase text-center p-3">
                        Online Edu BD Admission Success
                    </h2>
                    <p>Unlock Your Potential,
                        Secure Your Future,
                        Achieve Admission Success,
                        With ONLINE EDU BD,
                        Your Gateway to Excellence</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5">
                    <div className="w-full h-[200px] flex items-center justify-center bg-slate-50">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold">15,548</h2>
                            <p className="text-xl font-bold uppercase">Total students</p>
                        </div>
                    </div>

                    <div className="w-full  h-[200px] flex items-center justify-center bg-slate-50">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold">1,400+</h2>
                            <p className="text-xl font-bold uppercase">chance student</p>
                        </div>
                    </div>

                    <div className="w-full  h-[200px] flex items-center justify-center bg-slate-50">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold">34</h2>
                            <p className="text-xl font-bold uppercase">Top 100 chance students</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="flex lg:flex-row flex-col justify-center items-start gap-5 mt-10 p-3 bg-orange-50">
                <div className="w-full">
                    <img src="https://i.ibb.co/DDvgg30/slider4.jpg" alt="" />
                </div>
                <div className="w-full space-y-5">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white uppercase text-center p-3">
                        Questions & Answers
                    </h2>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            How do I change my password?
                        </div>
                        <div className="collapse-content">
                            <p>Once upon a time in the vibrant city of Dhaka, there lived a young woman named Ayesha. She was passionate about learning and had always dreamed of becoming an engineer. However, the traditional education system often felt restrictive and inaccessible due to her familys financial constraints. Determined not to give up on her dreams, Ayesha started exploring alternatives.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How do I sign up?
                        </div>
                        <div className="collapse-content">
                            <p>Once upon a time in the vibrant city of Dhaka, there lived a young woman named Ayesha. She was passionate about learning and had always dreamed of becoming an engineer. However, the traditional education system often felt restrictive and inaccessible due to her familys financial constraints. Determined not to give up on her dreams, Ayesha started exploring alternatives.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Do you offer a student discount?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Once upon a time in the bustling city of Dhaka, there was a bright and ambitious young woman named Ayesha. From a young age, Ayesha dreamed of becoming an engineer, but financial constraints and the rigid structure of traditional education systems made it difficult for her to pursue her aspirations.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;