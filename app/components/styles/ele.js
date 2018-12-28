import { StyleSheet } from 'react-native'
import Colors from './colors'

export default StyleSheet.create({
    header: {
        color: Colors.text.highlight,
        fontFamily: 'FiraSans-Bold',
        fontSize: 50,
        fontWeight: 'bold'
    },
    headerWrapper: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20
    },
    basicInfoWrapper:{
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginTop: 0,
    },
    modal: {
        backgroundColor: Colors.background.primary,
        flex: 1,
        opacity: 1,
        padding: 20
    },
    title: {
        color: Colors.text.highlight,
        fontFamily: 'FiraSans-Bold',
        fontSize: 15,
        paddingBottom: 0,
        paddingTop: 10,
    },
    mark: {
        color: Colors.text.highlight,
        fontFamily: 'FiraSans-Bold',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 0,
        paddingTop: 20,
    },
    text: {
        color: Colors.text.primary.light,
        fontFamily: 'FiraSans-Light',
        fontSize: 15,
        paddingBottom: 0,
        paddingTop: 10
    },
    thumbnail: {
        height: 75,
        width: 75
    },
});