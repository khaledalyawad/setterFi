import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default class Congratulations extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>
                        Congratulations!
                    </Text>
                    <Text style={styles.subtitleText}>
                        Now you know exactly where SATTEFI-US-117 lives. You should visit! But seriously, just point your antenna at the same place in the sky, and you’re all set. If you like, you can tap “Fine- Tune” for some advanced adjustment options. Otherwise, welcome to SatteFiTM.
                    </Text>               
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#FFF' }]} onPress={() => navigate('Home')} >
                        <Text style={[styles.btnText, { color: '#9013FE'}]}>Fine-tune</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#9013FE' }]} onPress={() => navigate('Home')} >
                        <Text style={[styles.btnText, { color: '#FFF'}]}>Finish</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#4A90E2',
    },
    container: {
        flex: 1,
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
        flex: 1,
        textAlign: 'center',
    },
    subtitleText: {
        fontSize: 20,
        flex: 1,
        color: '#E9E9E9',
        textAlign: 'center',

    },
    footer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnText: {
        margin: 10,
        fontSize: 20,
    },
    button: {
        flex: 1,
        width: '30%',
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
        
    }
});

