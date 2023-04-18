import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./ShareButton.css";

const ShareButton = () => {
    const shareUrl = "https://example.com"; // replace with your website URL
    const title = "Check out this awesome website!"; // replace with your website title

    const handleShare = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="share-button">
            <button className="share-button__button" onClick={() => handleShare(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`)}>
                <FaFacebook className="share-button__icon" />
            </button>
            <button className="share-button__button" onClick={() => handleShare(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`)}>
                <FaLinkedin className="share-button__icon" />
            </button>
            <button className="share-button__button" onClick={() => handleShare(`https://www.instagram.com/sharer.php?u=${shareUrl}`)}>
                <FaInstagram className="share-button__icon" />
            </button>
            <button className="share-button__button" onClick={() => handleShare(`https://twitter.com/intent/tweet?text=${title}&url=${shareUrl}`)}>
                <FaTwitter className="share-button__icon" />
            </button>
        </div>
    );
};

export default ShareButton;
