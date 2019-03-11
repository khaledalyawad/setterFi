import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>
                        SatteFi
                        <Text style={styles.superScript}>TM</Text>
                    </Text>
                    <Text style={styles.subtitleText}>
                        You’re just moments away from crystal- clear phone calls and all-you-can-type messaging! Let’s get your antenna set up.
                    </Text>
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
        fontSize: 50,
        lineHeight: 72,
        color: '#E9E9E9',
        textAlign: 'center'
    },
    subtitleText: {
        flex: 2,
        fontSize: 30,
        color: '#E9E9E9',
        textAlign: 'center'
    },    
    superScript: {
        color: '#E9E9E9',
        lineHeight: 22,
        fontSize: 20,
        textAlignVertical: 'top'
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
