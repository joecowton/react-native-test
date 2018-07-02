// @flow
import React from 'react';
import { ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ReleaseDetail } from './index';
import { fetchData } from '../actions';

type Props = {
    fetchData: string => void,
    data?: Array<*>,
};

const mapStateToProps = state => ({
    data: state.data,
});

const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
});

class ReleaseList extends React.Component<Props> {
    static defaultProps = {
        data: [],
    };

    componentDidMount() {
        this.props.fetchData('251117');
    }

    render() {
        const { data } = this.props;

        return (
            <ScrollView>
                {data &&
                    data.map(album => (
                        <ReleaseDetail key={album.id} album={album} />
                    ))}
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseList);
