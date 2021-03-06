// @flow
import React from 'react';
import { View } from 'react-native';

type Props = {
    children: any,
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
};

export default (props: Props) => (
    <View style={styles.containerStyle}>{props.children}</View>
);
