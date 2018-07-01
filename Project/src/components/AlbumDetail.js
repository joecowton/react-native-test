// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, Image, Linking } from 'react-native';
import { fetchRelease } from '../actions/index';
import Card from './Card';
import CardSection from './CardSection';

import Button from './Button';

type AlbumType = {
    title: ?String,
    artist: ?String,
    thumbnail_image?: String,
    image?: String,
    resource_url?: String,
    thumb?: string,
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    headerTextStyle: {
        fontSize: 18,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
};

type Props = {
    album: AlbumType,
    uri: string,
    fetchRelease: string => void,
    resource_url: string,
};

class AlbumDetail extends React.Component<Props> {
    componentDidMount() {
        const { resource_url } = this.props.album;
        console.log(resource_url);
        this.props.fetchRelease(resource_url);
    }

    render() {
        const {
            album: { title, artist, thumb },
            uri,
        } = this.props;

        const {
            thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle,
        } = styles;

        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image style={thumbnailStyle} source={{ uri: thumb }} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={imageStyle} source={{ uri }} />;
                </CardSection>
                <CardSection>
                    <Button onPress={() => Linking.openURL(resource_url)}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    if (state.release && state.release.data && state.release.data.images) {
        return { uri: state.release.data.images[0].uri };
    }
    return {};
};

const mapDispatchToProps = dispatch => ({
    fetchRelease: bindActionCreators(fetchRelease, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
