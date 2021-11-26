import {Settings, StyleSheet} from 'react-native';
const SettingsPageStyles = StyleSheet.create({
    MainWrapperStyles: {backgroundColor: 'white', flex: 1},
    HeaderViewStyles: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        justifyContent: 'center',
        height: 56,
        paddingLeft: 56,
    },
    HeaderTextStyles: {
        color: 'black',
        fontWeight: '600',
        lineHeight: 22,
        letterSpacing: -0.5,
        fontSize: 18,
    },
    TitleTextStyles: {
        color: '#1F498A',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '600',
        letterSpacing: -0.5,
        backgroundColor: 'red',
    },
    OptionsTextStyles: {
        color: '#262626',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 'normal',
        letterSpacing: -0.5,
    },
    SettingDetailsViewStyles: {
        height: 48,
        justifyContent: 'center',
        paddingLeft: 16,
    },
    HorizontalLineStyles: {
        paddingTop: 12,
        borderBottomColor: 'rgba(207, 207, 207, 0.5)',
        borderBottomWidth: 1,
    },
    LegalDetailsViewStyles: {
        marginTop: 8,
        height: 48,
        justifyContent: 'center',
        paddingLeft: 16,
    },
    VersionDetailesViewStyles: {
        alignSelf: 'center',
    },
    VesionTextStyles: {
        color: 'rgba(161, 161, 161, 1)',
        fontSize: 12,
        lineHeight: 15,
    },
    TrademarkViewStyles: {alignSelf: 'center', marginTop: 20},
    TrademarkTextStyles: {
        color: 'rgba(161, 161, 161, 1)',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: -0.5,
    },
});

export {SettingsPageStyles};
