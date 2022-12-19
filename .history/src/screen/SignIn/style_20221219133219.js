import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        // paddingHorizontal: 20,
        marginHorizontal: 20,
    },
    topContent: {
        height: '20%',
        width: '100%',
    },
    loginWrapper: {
        height: '50%',
        // backgroundColor: '#FFFBEB',
        // borderRadius: 10,
        // borderWidth: 2,
    },
    emailWrapper: {
        borderColor: '#FED049',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 20,
        shadowColor: '#FCF9BE',
        backgroundColor: '#fff',
    },
    password: {
        width: '100%',
        marginTop: 5,
        borderColor: '#FED049',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    eyePasswordWrapper: {
        position: 'absolute',
        top: 10,
        right: 20,
        width: 10,
        height: 10,
    },
    eyePassword: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
    },
    signUpWrapper: {
        backgroundColor: '#46C2CB',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',
        marginTop: 40,
    },
    creactAccount: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 20,
        alignSelf: 'center',
    },
    iconWrapper: {
        flexDirection: 'row',
        marginHorizontal: 10,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20,
        // backgroundColor: "grey",
    },
    iconFacebook: {
        // width: 10,
    },
    icon: {
        marginRight: 30,
    },
    bottomContent: {
        height: '25%',
        width: '100%',
    },
});
