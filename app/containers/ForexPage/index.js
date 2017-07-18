/*
 * ForexPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  makeSelectRates,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors'
import H2 from 'components/H2'
// import ReposList from 'components/ReposList'
import AtPrefix from './AtPrefix'
import CenteredSection from './CenteredSection'
import Form from './Form'
import Input from './Input'
import Section from './Section'
import messages from './messages'
import { loadRates } from '../App/actions'
import { changeBase } from './actions'
import { makeSelectBase } from './selectors'

export class ForexPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state base is not null, submit the form to load rates
   */
  componentDidMount () {
    if (this.props.base && this.props.base.trim().length > 0) {
      this.props.onSubmitForm()
    }
  }

  render () {
    const { loading, error, rates } = this.props
    const ratesListProps = { loading, error, rates }

    return (
      <article>
        <Helmet
          title='Forex Page'
          meta={
            [
              {
                name: 'description',
                content: 'A React.js Boilerplate application homepage'
              }
            ]
          }
        />
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor='base'>
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id='base'
                  type='text'
                  placeholder='USD'
                  value={this.props.base}
                  onChange={this.props.onChangeBase}
                />
              </label>
            </Form>
            <p> here goes the list </p>
          </Section>
        </div>
      </article>
    )
  }
}

ForexPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  rates: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  onSubmitForm: React.PropTypes.func,
  base: React.PropTypes.string,
  onChangeBase: React.PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    onChangeBase: evt => dispatch(changeBase(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(loadRates())
    }
  }
}

const mapStateToProps = createStructuredSelector({
  rates: makeSelectRates(),
  base: makeSelectBase(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ForexPage)
