import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-bold mb-4">Find Us on</h2>

            <div>
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 justify-start join-item py-6">
                        <FaFacebook /> Facebook
                    </button>
                    <button className="btn bg-base-100 justify-start join-item py-6">
                        <FaTwitter /> Twitter
                    </button>
                    <button className="btn bg-base-100 justify-start join-item py-6">
                        <FaInstagram /> Instagram
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;
