import React from "react";
import { SettingsForm } from "./_components/settings-form";

export const metadata = {
    title: "Setting|Vehiql Admin",
    description:"Manage dealership working hours And Admin users"
}

const SettingPage = () => {
    return (
        <div className="p-6">
            <h1 className="text-2x1 font-bold mb-6">SettingPage</h1>
            <SettingsForm/>
        </div>
    );
};


export default SettingPage;
