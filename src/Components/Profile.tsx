import Image from "../icons/avatar.jpg";
import { useState } from "react";

export function Profile() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="header-profile">
            <div className="header-profile__btn" onClick={() => setIsExpanded(!isExpanded)}>
                <img src={Image} alt="avatar" />
                {!isExpanded &&
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.415 0.209991L6 4.79499L10.585 0.209991L12 1.62499L6 7.62499L0 1.62499L1.415 0.209991Z" fill="white"/>
                </svg>}
                {isExpanded && 
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.415 7.79001L6 3.20501L10.585 7.79001L12 6.37501L6 0.375008L0 6.37501L1.415 7.79001Z" fill="white"/>
                </svg>}
            </div>
            {isExpanded &&
                <div className="header-profile__options">
                    <div>Profile</div>
                    <div>Log Out</div>
                </div>
            }
        </div>
    )
}