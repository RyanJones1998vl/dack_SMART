import React, { Component } from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'

import styles from './styles/eles'

class EleCell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let ele = this.props.ele;

        return (
            <View style={styles.cell}>
                <TouchableHighlight
                    onPress={() => { this.props.onSelectEle(ele) }}>
                    <View style={styles.cell}>
                        <Image
                            source={{ uri: ele.image }}
                            style={styles.thumbnail}
                        />
                        <Text style={styles.cellTitle}>{ele.ele}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export default EleCell