import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, TouchableOpacity } from 'react-native';
import HipsterSvg from '../assets/HipsterSvg';
import { Accelerometer } from 'expo';

export default class Pitch extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
        accelerometerData: {},
        showInfo: true,
        buttonStateHolder: true
    };

    componentDidMount() {
        Accelerometer.addListener(result => {
            this.setState({ accelerometerData: result });
        });
        Accelerometer.setUpdateInterval(80);
        this.setState({ accelerometerData: this.state.accelerometerData});
    }

    next(){
        if (this.state.showInfo){
            this.setState({ showInfo: false });
            this.setState({ buttonStateHolder: false });
        } else {
            const { navigate } = this.props.navigation;
            navigate('Congratulations');
        }
    }


    render() {
        let y
        let info = 'Now we ask, “How high?” You need to point about 30o up from the ground. We don’t know what that means, either, but with your arm out, like before, raise and lower it until the handlebar mustache fits.';
        let showInfo = true;
        if (this.state.accelerometerData && !this.state.showInfo) {
            y = this.state.accelerometerData.y;
        }
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>
                        Pointing up
                    </Text>
                    <HipsterSvg y={round(y)} info={info} showInfo={this.state.showInfo}/>
                    <View style={styles.perfect}>
                        {(round(y) > 260 && round(y) < 275) && <Image source={require('../../assets/100_Emoji_large.png')} /> }
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity 
                        style={[
                            styles.button, 
                            { backgroundColor: (this.state.buttonStateHolder || (round(y) > 260 && round(y) < 275)) ? '#9013FE' : '#5b8af2' }
                        ]} 
                        onPress={this.next.bind(this)} 
                        disabled={
                            !this.state.buttonStateHolder &&
                            !(round(y) > 260 && round(y) < 275)
                        }>
                        <Text style={[styles.btnText, { color: (this.state.buttonStateHolder || (round(y) > 260 && round(y) < 275)) ? '#FFF' : '#5da8ee' }]}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function round(n) {
    if (!n) {
        return 0;
    }

    return Math.floor(n * 100) * -4;
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 10,
        flex: 1,
        backgroundColor: '#4A90E2',
    },
    perfect: {
        flex: 1,
    },
    container: {
        flex: 5,
        padding: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: '#E9E9E9'
    },
    titleText: {
        fontSize: 40,
        lineHeight: 72,
        color: '#E9E9E9',
        flex: 5
    },
    subtitleText: {
        fontSize: 20,
        color: '#E9E9E9',
    },
    footer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    btnText: {
        margin: 10
    },
    button: {
        width: 100,
        margin: 30,
        borderRadius: 20,
        alignItems: 'center'
    }
});

