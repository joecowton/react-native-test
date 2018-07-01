import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Image } from 'react-native';
import { fetchRelease } from '../actions/index';

type Props = {
    resourceUrl: string,
    fetchRelease: () => void,
};

const imageStyle = {
    height: 300,
    flex: 1,
    width: null,
};

class AlbumImage extends React.Component<Props> {
    componentWillMount() {
        this.props.fetchRelease(this.props.resourceUrl);
    }

    render() {
        const { uri } = this.props;

        return <Image style={imageStyle} source={{ uri }} />;
    }
}

const mapStateToProps = state => {
    console.log('HERE', state.release.data);
    if (state.release) {
        return { uri: state.release };
    }
    return {};
};

const mapDispatchToProps = dispatch => ({
    fetchRelease: bindActionCreators(fetchRelease, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumImage);
