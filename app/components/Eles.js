import React, { Component } from 'react'
import { ListView, ScrollView, Modal, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Ele from '../components/Ele'
import EleCell from '../components/EleCell'

import styles from './styles/eles'

class Eles extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarItemText}>{'Sort'}</Text>

                    <TouchableOpacity onPress={this.props.orderByName}>
                        <View style={styles.toolbarItem}>
                            <Icon name="sort-alpha-asc" size={20} color="#FFF"/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.orderByNumber}>
                        <View style={styles.toolbarItem}>
                            <Icon name="sort-numeric-asc" size={20} color="#FFF"/>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <ListView
                        contentContainerStyle={styles.grid}
                        dataSource={this.props.elesDataSource}
                        renderRow={
                            (ele) => {
                                return (
                                    <EleCell
                                        ele={ele}
                                        onSelectEle={this.props.selectEle}
                                    />
                                )
                            }
                        }
                    />
                </ScrollView>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.props.showEle}
                    onRequestClose={this.props.showEleslist}
                >
                    <Ele
                        ele={this.props.ele}
                        closeModal={this.props.showEleslist}
                    />
                </Modal>
            </View>
        )
    }
}

export default Eles