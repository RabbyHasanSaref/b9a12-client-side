import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="footer p-10 bg-orange-50 text-base-content">
                <aside>
                   <img className="w-[100px] h-[100px]" src="https://i.ibb.co/Th5fTgx/graduation-cap.png" alt="" />
                   <Link to="/"><h2 className="lg:text-[20px] text-[12px] font-bold uppercase text-green-500">Online <span className="text-red-500">Edu</span> Bd</h2></Link>
                   <p className="text-[12px] font-medium">Learn, Grow, Succeed with ONLINE EDU BD</p>
                </aside>
                <nav>
                    <h6 className="text-black font-medium lg:text-[15px] text-[12px] uppercase">Services</h6>
                    <a className="link link-hover text-[14px] text-center font-medium">Branding</a>
                    <a className="link link-hover text-[14px] text-center font-medium">Design</a>
                    <a className="link link-hover text-[14px] text-center font-medium">Marketing</a>
                    <a className="link link-hover text-[14px] text-center font-medium">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-black font-medium lg:text-[15px] text-[12px] uppercase">Company</h6>
                    <a className="link link-hover text-[14px] text-center font-medium">About us</a>
                    <a className="link link-hover text-[14px] text-center font-medium">Contact</a>
                    <a className="link link-hover text-[14px] text-center font-medium">Jobs</a>
                    <a className="link link-hover text-[14px] text-center font-medium">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-black font-medium lg:text-[15px] text-[12px] uppercase">Legal</h6>
                    <a className="link link-hover text-[14px] text-center font-medium">Terms of use</a>
                    <a className="link link-hover text-[14px] text-center font-medium">Privacy policy</a>
                    <a className="link link-hover text-[14px] text-center font-medium">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p className="text-[12px] font-medium">Copyright © 2024 - All right reserved by Online Edu BD</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;