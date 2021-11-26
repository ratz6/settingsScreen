import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Container,
    Button,
} from 'react-native';
import {SettingsPageStyles} from './settingsDataStyles';
import BackIcon from './assets/BackIcon.svg';
import RevoIcon from './assets/Logo.svg';

const SettingsPage = ({settingDetails, legalDetails}) => {
    console.log('setting details are : ', settingDetails);
    const [changeColor, setChangeColor] = useState('');
    return (
        <View style={SettingsPageStyles.MainWrapperStyles}>
            <View style={SettingsPageStyles.HeaderViewStyles}>
                {/* <View style={{position: 'absolute'}}>
                     <BackIcon />
                </View> */}
                <View>
                    <Text style={SettingsPageStyles.HeaderTextStyles}>
                        Settings
                    </Text>
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{justifyContent: 'center'}}
                style={{marginBottom: 62}}>
                {settingDetails.map(
                    ({title, options, clickColor, onClick}, index) => (
                        <View>
                            {title && (
                                <View
                                    style={
                                        SettingsPageStyles.SettingDetailsViewStyles
                                    }>
                                    <Text
                                        style={
                                            SettingsPageStyles.TitleTextStyles
                                        }>
                                        {title}
                                    </Text>
                                </View>
                            )}
                            {options && (
                                <TouchableOpacity
                                    delayPressIn={1}
                                    delayPressOut={1}
                                    key={options}
                                    onPress={() => {
                                        setChangeColor(
                                            'rgba(236, 243, 253, 0.5)',
                                        );
                                    }}>
                                    <View
                                        style={{
                                            height: 48,
                                            justifyContent: 'center',
                                            paddingLeft: 16,
                                            key: {options},
                                            backgroundColor:
                                                changeColor === clickColor
                                                    ? clickColor
                                                    : 'white',
                                        }}>
                                        <Text
                                            style={
                                                SettingsPageStyles.OptionsTextStyles
                                            }>
                                            {options}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    ),
                )}
                <View style={SettingsPageStyles.HorizontalLineStyles} />
                {legalDetails.map(({title, options, onClick}, index) => (
                    <View key={title}>
                        {title && (
                            <View
                                style={
                                    SettingsPageStyles.LegalDetailsViewStyles
                                }>
                                <Text
                                    style={SettingsPageStyles.TitleTextStyles}>
                                    {title}
                                </Text>
                            </View>
                        )}
                        {options && (
                            <TouchableOpacity
                                key={options}
                                delayPressIn={1}
                                delayPressOut={1}
                                onPress={() => {}}>
                                <View
                                    style={
                                        SettingsPageStyles.LegalDetailsViewStyles
                                    }>
                                    <Text
                                        style={
                                            SettingsPageStyles.OptionsTextStyles
                                        }>
                                        {options}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
                <View
                    style={{
                        backgroundColor: 'rgba(250, 252, 255, 1)',
                    }}>
                    <View
                        style={{
                            marginTop: 18.21,
                            alignSelf: 'center',
                            width: 67.67,
                            height: 35,
                            alignItems: 'center',
                        }}>
                        <Text style={{color: 'black'}}>REVO.</Text>
                        {/* <RevoIcon /> */}
                    </View>
                    <View style={SettingsPageStyles.VersionDetailesViewStyles}>
                        <Text style={SettingsPageStyles.VesionTextStyles}>
                            Version 1.0.1
                        </Text>
                    </View>
                    <View style={SettingsPageStyles.TrademarkViewStyles}>
                        <Text style={SettingsPageStyles.TrademarkTextStyles}>
                            © 2021 Revo Video
                        </Text>
                    </View>
                    <View style={SettingsPageStyles.TrademarkViewStyles}>
                        <Text style={SettingsPageStyles.TrademarkTextStyles}>
                            Powered by Borderfree Technologies
                        </Text>
                    </View>
                    <View
                        style={{
                            alignSelf: 'center',
                            marginBottom: 40,
                            marginTop: 20,
                        }}>
                        <Button title="Logout"></Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default SettingsPage;
