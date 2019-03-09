import React from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'

// eslint-disable-next-line react/prefer-stateless-function
class FieldButtons extends React.PureComponent {
  constructor(props) {
    super(props)
    const { listArr } = this.props
    this.state = {
      listArr,
    }
  }

  getFieldButtons = arr => arr.map((item, i) => {
    const { capture, active, general } = item
    let classForGeneral = ''
    if (general) {
      classForGeneral = 'FieldButtons__button_general'
    }

    let activeClass = ''
    if (active === true) {
      activeClass = 'FieldButtons__button_active'
    }
    const eid = `FieldButtons__button-${uuidv4()}`
    const action = { type: 'selectItem', ...item, eid }
    return (
      <button
        id={eid}
        key={eid}
        type='button'
        className={`btn btn-success FieldButtons__button ${activeClass} ${classForGeneral}`}
        onClickCapture={e => this.handleEvent(e, action)}
      >
        {capture}
      </button>
    )
  })

  handleEvent = (e, action) => {
    switch (action.type) {
      case 'selectItem': {

        const { listArr } = this.state
        const { capture: capturePayload, general: generalPayload } = action

        const listArrNext = listArr.map(item => {
          const { capture, active, general } = item
          let activeNext

          if (generalPayload) {
            activeNext = false
            if (capture === capturePayload) {
              activeNext = true
            }
          }
          else {
            activeNext = active
            if (general) {
              activeNext = false
            }
            else if (capture === capturePayload) {
              activeNext = !active
            }
          }

          return { ...item, active: activeNext }
        })

        this.setState({ listArr: listArrNext })
      } break

      default: {
        console.info( 'FieldButtons->handleEvent() [10]','I have never heard of that ... ', action)
      } break
    }
  }

  render() {
    const { sid } = this.props
    const { listArr } = this.state
    const fieldButtons = this.getFieldButtons(listArr)

    return (
      <div className={`FieldButtons ${sid}`}>
        {fieldButtons}
      </div>
    )
  }
}


FieldButtons.defaultProps = {
  cid: '',
  classNames: '',
  displayBtnType: 'icon',
}

/* eslint-disable indent */
FieldButtons.propTypes = {
  sid: PropTypes.string.isRequired,
    // section class for Less(css)
  cid: PropTypes.string,
    // component id
  classNames: PropTypes.string,
    // affect the "main button"
  displayBtnType: PropTypes.string,
    // Possible values: 'icon', 'text'
  listArr: PropTypes.arrayOf(PropTypes.object).isRequired,
    /* Example
      [ 
        { capture: 'Все виды', classNameArr: ['fas fa-video'], active: true },
        ...
      ],
    */
}

export default FieldButtons
