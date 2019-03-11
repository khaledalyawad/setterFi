import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import WorldSvg from '../assets/WorldSvg';
import SatelliteSvg from '../assets/SatelliteSvg';

export default class FindingSattelite extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>
                        Finding Your Sattelite
                    </Text>
                    <Text style={styles.subtitleText}>
                        We have lots of sattelites. We’re looking for a good match...
                    </Text>
                    <View style={styles.satContainer}>
                        <SatelliteSvg style={styles.satLt}/>
                        <SatelliteSvg style={styles.satRt}/>
                    </View>
                    <View>
                        <WorldSvg />
                    </View>
                    <View style={styles.satContainerLower}>
                        <SatelliteSvg style={styles.satLt}/>
                        <SatelliteSvg style={styles.satRt}/>
                    </View>                  
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={[styles.button]} onPress={() => navigate('FoundSattelite')} >
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
        lineHeight: 72,
        color: '#E9E9E9',
        textAlign: 'center'
    },
    subtitleText: {
        flex: 2,
        fontSize: 20,
        color: '#E9E9E9',
        textAlign: 'center'
    },
    satContainer: {
        flexDirection: 'row',
    },
    satContainerLower: {
        flexDirection: 'row',
        transform: [{ rotate: '180deg' }]
    },
    satRt: {
        marginLeft: 50,
        transform: [{ rotate: '90deg' }]
    },
    satLt: {
        marginRight: 50,
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

