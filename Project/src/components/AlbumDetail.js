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
    title: ?string,
    artist: ?string,
    thumbnail_image?: string,
    image?: string,
    resource_url?: string,
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
    fetchRelease: string => void,
    resource_url: string,
    data: { images: Array<*> },
};

class AlbumDetail extends React.Component<Props> {
    componentWillMount() {
        const { resource_url = '' } = this.props.album;
        this.props.fetchRelease(resource_url);
    }

    render() {
        const {
            album: { title, artist, thumb, resource_url },
            data,
        } = this.props;

        const {
            thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle,
        } = styles;

        return data && data.images ? (
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
                    <Image
                        style={imageStyle}
                        source={{ uri: data.images[0].uri }}
                    />;
                </CardSection>
                <CardSection>
                    <Button onPress={() => Linking.openURL(resource_url)}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        ) : null;
    }
}

const mapStateToProps = (state, ownProps) => ({
    data: state.release[ownProps.album.id],
});

const mapDispatchToProps = dispatch => ({
    fetchRelease: bindActionCreators(fetchRelease, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
