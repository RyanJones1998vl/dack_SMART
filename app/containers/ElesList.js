import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ListView, View } from 'react-native'
import { orderByName, orderByNumber, selectEle, showEleslist } from '../core-module/actions'
import Eles from '../components/Eles'

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = (state) => {
    let eles = state.eles.eles;

    return {
        eles: eles,
        elesDataSource: ds.cloneWithRows(eles),
        showEle: state.eles.showEle,
        ele: state.eles.ele
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        orderByName,
        orderByNumber,
        selectEle,
        showEleslist
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Eles);