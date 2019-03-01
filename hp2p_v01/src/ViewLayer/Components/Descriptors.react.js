
import React from 'react'
import PropTypes from 'prop-types'
import * as serviceFunc from '../../Shared/serviceFunc'
import SearchForm from './SearchForm.react'
// eslint-disable-next-line react/prefer-stateless-function
class Descriptors extends React.PureComponent {

  componentDidMount() {
    setTimeout(() => {
      serviceFunc.updateTransition('.descWrapper1.transitionPrevDesc', 'transitionNextDesc')
      serviceFunc.updateTransition('.descWrapper2.transitionPrevDesc', 'transitionNextDesc')
    }, 0)
  }

  render() {
    const { propsScope } = this.props
    const { sid, h1, h2 } = propsScope
    // console.info('Descriptors->render() [10]',{});
    return (
      <div id={sid} className={`container-fluid ${sid}`}>
        <div className='row'>
          <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10 descWrapper1 transitionPrevDesc'>
            <h1 className='descriptorRow1'>{h1}</h1>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' />
        </div>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 descWrapper2 transitionPrevDesc'>
            <h2 className='descriptorRow2'>{h2}</h2>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6' />
        </div>
      </div>
    )
  }
}

Descriptors.propTypes = {
}

export default Descriptors
