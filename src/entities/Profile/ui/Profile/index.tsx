import React from "react";
import { ProfileForm } from "../ProfileForm";
import "../../assets/styles/profile.scss"

interface ProfileProps {
    logout: () => void;
}

export const Profile = ({ logout }: ProfileProps): JSX.Element => {
    return (
        <div className="profile">
            <div className="container">
                <div className="profile__inner">
                    <ProfileForm logout={logout} />
                </div>
            </div>
        </div>
    )
}