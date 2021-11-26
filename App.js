import React from 'react';
import SettingsPage from './settingsData';

const Country_Currency_Language = () => {
    console.log('Select Country');
};
const Notifications = () => {
    console.log('Select Notifications');
};
const DevicePermissions = () => {
    console.log('Select Permissions');
};
const AboutUs = () => {
    console.log('Select about us ');
};
const ShippingPolicy = () => {
    console.log('Select Policy');
};
const Privacy_Policy = () => {
    console.log('Select Policy');
};
const Terms = () => {
    console.log('Select Terms');
};
const Settings = () => {
    const settingDetails = [
        {title: 'General'},
        {
            options: 'Country, Currency & Language',
            onClick: {Country_Currency_Language},
            clickColor: 'rgba(236, 243, 253, 0.5)',
        },
        {
            options: 'Notifications',
            clickColor: 'rgba(236, 243, 253, 0.5)',
            onClick: {Notifications},
        },
        {
            options: 'Device Permissions',
            onClick: {DevicePermissions},
            clickColor: 'rgba(236, 243, 253, 0.5)',
        },
        {
            options: 'Shipping Policy',
            onClick: {ShippingPolicy},
            clickColor: 'rgba(236, 243, 253, 0.5)',
        },
    ];
    const legalDetails = [
        {title: 'Legal & About'},
        {options: 'About Us', onClick: {AboutUs}},
        {options: 'Privacy Policy', onClick: {Privacy_Policy}},
        {options: 'Terms & Conditions', onClick: {Terms}},
    ];
    return (
        <SettingsPage
            settingDetails={settingDetails}
            legalDetails={legalDetails}
        />
    );
};

export default Settings;
