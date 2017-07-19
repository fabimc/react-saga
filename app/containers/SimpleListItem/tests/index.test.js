/**
 * Test the repo list item
 */

import React from 'react'
import { shallow, render } from 'enzyme'
import { IntlProvider } from 'react-intl'

import ListItem from 'components/ListItem'
import { SimpleListItem } from '../index'

const renderComponent = (props = {}) => render(
  <IntlProvider locale='en'>
    <SimpleListItem {...props} />
  </IntlProvider>
)

describe('<SimpleListItem />', () => {
  let item

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = { name: 'USD' }
  })

  it('should render a ListItem', () => {
    const renderedComponent = shallow(<SimpleListItem item={item} />)
    expect(renderedComponent.find(ListItem).length).toBe(1)
  })
})
