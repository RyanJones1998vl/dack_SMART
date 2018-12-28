export const getEles = () => {
    return {
        type: 'GET_ELES'
    }
}

export const selectEle = (ele) => {
    return {
        type: 'SELECT_ELE',
        ele: ele
    }
}

export const showEleslist = () => {
    return {
        type: 'SHOW_ELES_LIST'
    }
}

export const orderByName = () => {
    return {
        type: 'ORDER_BY_NAME'
    }
}

export const orderByNumber = (eles) => {
    return {
        type: 'ORDER_BY_NUMBER'
    }
}