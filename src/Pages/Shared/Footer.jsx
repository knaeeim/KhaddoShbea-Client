import React from "react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer sm:footer-horizontal text-base-content py-10 max-w-[90%] mx-auto">
                <aside>
                    <img src="https://i.ibb.co/wb7VMSN/Khaddo-Sheba-90-x-50-px.png" alt="" />
                    <p className="font-bold">
                        For the lower income people <br /> of Bangladesh since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to='/availableFoods' className="link link-hover">Available Foods</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Media</h6>
                    <Link to="https://www.facebook.com" target="_blank" className="link link-hover">Facebook</Link>
                    <Link to="https://www.youtube.com" target="_blank" className="link link-hover">Youtube</Link>
                    <Link to="https://www.linkedin.com" target="_blank" className="link link-hover">LinkedIn</Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;