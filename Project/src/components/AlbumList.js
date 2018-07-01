// @flow
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import AlbumDetail from './AlbumDetail';
import * as actions from '../actions';

type Props = {
    fetchData: string => void,
    data?: Array<*>,
};

class AlbumList extends Component<Props> {
    static defaultProps = {
        data: [],
    };

    componentWillMount() {
        this.props.fetchData('251117');
    }

    render() {
        const { data } = this.props;

        return (
            <ScrollView>
                {data &&
                    data.map(album => (
                        <AlbumDetail key={album.id} album={album} />
                    ))}
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return { data: state.data };
}

export default connect(mapStateToProps, actions)(AlbumList);
