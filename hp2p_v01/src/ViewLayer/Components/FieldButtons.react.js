import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuidv4'

// eslint-disable-next-line react/prefer-stateless-function
class FieldButtons extends React.PureComponent {
  constructor(props) {
    super(props)
    const { dataArr } = this.props
    this.state = {
      dataArr,
    }
  }


  eventHandle = (e, action) => {
    switch (action.type) {
      case 'changeDataItem': {

        const { dataArr } = this.state
        const { payload } = action
        const { capture: capturePayload } = payload
        // console.info(`action.type ${action.type}`, { action, state: this.state })

        const dataArrNext = dataArr.map(item => {
          const { capture } = item
          let autoFocus = false
          if (capture === capturePayload) {
            autoFocus = true
          }
          return { ...item, autoFocus }
        })

        this.setState({ dataArr: dataArrNext })
      } break

      default: {
        console.info( 'FieldButtons->eventHandle() [10]','I have never heard of that ... ', action)
      } break
    }
  }

  getFieldButtons = arr => arr.map((item, i) => {
    const { capture, autoFocus } = item
    let autoFocusClass = ''
    if (autoFocus === true) {
      autoFocusClass = 'FieldButtons__button_active'
    }
    const eid = `FieldButtons__button-${uuid()}`
    const payload = { eid, capture }
    const action = { type: 'changeDataItem', payload }
    return (
      <button
        id={eid}
        key={eid}
        type='button'
        className={`btn btn-success FieldButtons__button ${autoFocusClass}`}
        onClickCapture={e => this.eventHandle(e, action)}
      >
        {capture}
      </button>
    )
  })

  render() {
    const { prefix } = this.props
    const { dataArr } = this.state
    const fieldButtons = this.getFieldButtons(dataArr)

    return (
      <div className={`FieldButtons ${prefix}`}>
        {fieldButtons}
      </div>
    )
  }
}


FieldButtons.defaultProps = {
  cid: '',
  classNames: '',
  displayType: 'icon',
}

/* eslint-disable indent */
FieldButtons.propTypes = {
  cid: PropTypes.string,
    // component id
  prefix: PropTypes.string,
    // For each prefix styles tree can be created in Dropdown.less file
  classNames: PropTypes.string,
    // affect the "main button"
  displayType: PropTypes.string,
    // Possible values: 'icon', 'text'
  dataArr: PropTypes.arrayOf(PropTypes.object).isRequired,
    /* Example
      [ 
        { capture: 'Все виды', classNameArr: ['fas fa-video'], autoFocus: true },
        ...
      ],
    */
}

export default FieldButtons
