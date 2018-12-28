import sortBy from 'lodash/sortBy'

const elesData = require('../data/eles.json')

const eles = (state = { eles: elesData, showEle: false }, action) => {
    switch(action.type) {
        case 'GET_ELES':
            return Object.assign({}, state, {
                eles: elesData
            })

        case 'SELECT_ELE':
            return Object.assign({}, state, {
                ele: action.ele,
                showEle: true
            })

        case 'SHOW_ELES_LIST':
            return Object.assign({}, state, {
                showEle: false
            })

        case 'ORDER_BY_NAME':
            return Object.assign({}, state, {
                eles: sortBy(elesData, 'actor')
            })

        case 'ORDER_BY_NUMBER':
            return Object.assign({}, state, {
                eles: sortBy(elesData, 'eleNumber')
            })

        default:
            return state
    }
}

export default eles