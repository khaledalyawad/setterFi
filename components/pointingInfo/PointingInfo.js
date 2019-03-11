import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ClockSvg from '../assets/ClockSvg';

export default class PointingInfo extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>
                        Pointing in the right direction
                    </Text>              
                    <Text style={styles.subtitleText}>
                        Stand with your phone in your hand, arm extended, screen facing up, and rotate on your feet until the two clock hands on the next screen are at midnight.
                    </Text>
                    <View>
                        <Image source={require('../../assets/clock.png')} />
                    </View>

                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={[styles.button]} onPress={() => navigate('PointingCompass')} >
                        <Text style={[styles.btnText]}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#4A90E2',
    },
    container: {
        flex: 5,
        padding: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: '#E9E9E9'
    },
    titleText: {
        flex: 1,
        fontSize: 30,
        color: '#E9E9E9',
        textAlign: 'center'
    },
    subtitleText: {
        flex: 2,
        fontSize: 20,
        color: '#E9E9E9',
        textAlign: 'center'
    },
    footer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    btnText: {
        margin: 10,
        color: '#fff'
    },
    button: {
        backgroundColor: '#9013FE',
        width: 100,
        margin: 30,
        borderRadius: 20,
        alignItems: 'center'
    }
});

