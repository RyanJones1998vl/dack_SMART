import React, { Component } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles/ele'

class Ele extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let ele = this.props.ele;

        return (
            <ScrollView style={styles.modal}>
                <View>
                    <View style={styles.headerWrapper}>
                        <Text style={styles.header}>
                            {`#${ele.eleNumber}`}
                        </Text>
                        <Image
                            source={{ uri: ele.image }}
                            style={styles.thumbnail}
                        />
                    </View>
                    <Text style={styles.text}>{ele.description}</Text>

                    <Text style={styles.mark}>BASIC INFO</Text>

                    <View style={styles.basicInfoWrapper}>
                        <Text style={styles.title}>{'Atomic mass'}</Text>
                        <Text style={styles.text}>{ele.mass}</Text>
                    </View >
                    <View style={styles.basicInfoWrapper}>
                        <Text style={styles.title}>{'Density'}</Text>
                        <Text style={styles.text}>{ele.density}</Text>
                    </View >
                    <View style={styles.basicInfoWrapper}>
                        <Text style={styles.title}>{'Melting point'}</Text>
                        <Text style={styles.text}>{ele.meltingpoint}</Text>
                    </View >
                    <View style={styles.basicInfoWrapper}>
                        <Text style={styles.title}>{'Boiling point'}</Text>
                        <Text style={styles.text}>{ele.boilingpoint}</Text>
                    </View >
                    <View style={styles.basicInfoWrapper}>
                        <Text style={styles.title}>{'Isotopes'}</Text>
                        <Text style={styles.text}>{ele.isotopes}</Text>
                    </View >
                   <View style={styles.basicInfoWrapper}>
                       <Text style={styles.title}>{'Discovered by'}</Text>
                       <Text style={styles.text}>{ele.discover}</Text>
                   </View >

                    <Text style={styles.mark}>STORY</Text>

                    <Text style={styles.title}>{'Applications'}</Text>
                    <Text style={styles.text}>{ele.application}</Text>

                    <Text style={styles.title}>{'Health effects'}</Text>
                    <Text style={styles.text}>{ele.healtheffect}</Text>

                </View>
            </ScrollView>
        )
    }
}

export default Ele