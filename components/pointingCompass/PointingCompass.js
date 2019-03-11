import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ClockSvg from '../assets/ClockSvg';
import { Constants, Location, Permissions } from 'expo';

export default class PointingCompass extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
        location: null,
        errorMessage: null,
    };
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        await Location.watchHeadingAsync(
            (location) =>{
                this.setState({ location });

            }
        );
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }
    
    render() {
        let msg = 'Waiting..';
        let trueHeading;
        if (this.state.errorMessage) {
            msg = this.state.errorMessage;
        } else if (this.state.location) {
            msg = '';
            trueHeading = this.state.location.trueHeading;
        }
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>
                        Pointing in the right direction
                    </Text>
                    <Text style={styles.subtitleText}>
                        The minute hand is where you’re pointing
                    </Text>
                    <View style={styles.clock}>
                        <ClockSvg trueHeading={trueHeading}></ClockSvg>
                        <Text>{msg}</Text>
                    </View>
                    <Text style={styles.subtitleText}>
                        The hour hand is SATTEFI-US-117
                    </Text>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity 
                        style={[
                            styles.button,
                            { backgroundColor: (this.state.location && (this.state.location.trueHeading > 178 && this.state.location.trueHeading < 182)) ? '#9013FE' : '#5b8af2' }
                        ]}
                        disabled={
                            this.state.location && !(this.state.location.trueHeading > 178 && this.state.location.trueHeading < 182)
                        }
                        onPress={() => navigate('Pitch')} 
                    >
                        <Text style={[
                            styles.btnText,
                            { color: (this.state.location && (this.state.location.trueHeading > 178 && this.state.location.trueHeading < 182)) ? '#FFF' : '#5da8ee' }
                            ]}>Next</Text>
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
        flex: 3,
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
    clock: {
        flex: 8
    },
    footer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    btnText: {
        margin: 10,
    },
    button: {
        width: 100,
        margin: 30,
        borderRadius: 20,
        alignItems: 'center'
    }
});

