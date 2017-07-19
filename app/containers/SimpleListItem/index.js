/**
 * SimpleListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { FormattedNumber } from 'react-intl'

import { makeSelectCurrentUser } from 'containers/App/selectors'
import ListItem from 'components/ListItem'
import Wrapper from './Wrapper'

export class SimpleListItem extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render () {
    const item = this.props.item

    // Put together the content of the repository
    const content = (
      <Wrapper>
        {item.base}: {item.value}
      </Wrapper>
    )

    // Render the content into a list item
    return <ListItem key={`repo-list-item-${item.base}`} item={content} />
  }
}

SimpleListItem.propTypes = {
  item: React.PropTypes.object,
}

export default SimpleListItem
