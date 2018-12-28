import { Platform, StyleSheet } from 'react-native'
import Colors from './colors'

export default StyleSheet.create({
    cell: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginRight: 30,
    },
    cellTitle: {
        color: Colors.text.highlight.dark,
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,

    },
    container: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: Colors.background.light,
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    grid: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    thumbnail: {
        height: 65,
        width: 65,
        marginRight: 10,
        marginLeft: 20
    },
    toolbar: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: Colors.background.dark,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'flex-end'
    },
    toolbarItem: {
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    toolbarItemText: {
        color: Colors.text.header,
        fontSize: 16,
        fontFamily: 'FiraSans-Bold',
        marginRight: 10
    }
});