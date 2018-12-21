/**
 *
 * AlbumPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import LoadingIndicator from 'components/LoadingIndicator';

import makeSelectAlbumPage, {
  makeSelectAlbum,
  makeSelectAlbumLoading,
  makeSelectAlbumError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadAlbumById } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class AlbumPage extends React.Component {
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    console.log('Query ID: ', query.id);
    this.props.loadAlbum(query.id);
  }

  render() {
    let content;
    const { album, error, loading } = this.props;
    if (album) {
      console.log(this.props.album);
      content = <div>album loaded</div>;
    } else if (error) {
      console.log(error);
      content = <div>Oh no error</div>;
    } else if (loading) {
      content = <LoadingIndicator />;
    }

    return (
      <div>
        <Helmet>
          <title>AlbumPage</title>
          <meta name="description" content="Description of AlbumPage" />
        </Helmet>
        {content}
      </div>
    );
  }
}

AlbumPage.propTypes = {
  loadAlbum: PropTypes.func.isRequired,
  location: PropTypes.any,
  album: PropTypes.object,
  error: PropTypes.any,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  albumPage: makeSelectAlbumPage(),
  album: makeSelectAlbum(),
  loading: makeSelectAlbumLoading(),
  error: makeSelectAlbumError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAlbum: id => dispatch(loadAlbumById(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'albumPage', reducer });
const withSaga = injectSaga({ key: 'albumPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AlbumPage);