import React, { PropTypes } from 'react'

import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'
import SimpleListItem from 'containers/SimpleListItem'

function SimpleList ({ loading, error, rates }) {
  if (loading) {
    return <List component={LoadingIndicator} />
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    )
    return <List component={ErrorComponent} />
  }

  if (rates !== false) {
    return <List items={rates} component={SimpleListItem} />
  }

  return null
}

SimpleList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  rates: PropTypes.any
}

export default SimpleList
