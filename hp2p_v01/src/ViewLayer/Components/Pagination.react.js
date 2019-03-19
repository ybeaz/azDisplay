import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class Pagination extends React.Component {

  paginationRender = ( source, activeItem, handleEvent ) => {

    const items = source.map(( item, i ) => {
      let itemClass = 'page-item'
      if (item.id === activeItem) {
        itemClass += ' active'
      }
      // console.info('MenuContent->paginationRender', { id: item.id, item, pageItemClass, activeItem: activeItem })
      return <li key={i} className={ itemClass }>
        <a className="page-link" href="#"
        onClick={ e => handleEvents( e, 'clickItem', item )}>
          { i + 1 }</a>
      </li>
    })

    return (
      <ul className="pagination pagination-sm justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" 
            onClick={e => handleEvents( e, 'prevItem', {}, items )}>Prev</a>
        </li>
        {items}
        <li className="page-item">
          <a className="page-link" href="#"
            onClick={e => handleEvents( e, 'nextItem', {}, items )}>Next</a>
        </li>
      </ul>
    )
  }

  render() {
    const { itemsSrc, activeItem, handleEvents } = this.props
    // console.info('MenuContent->render()', { source })

    return <div>{this.paginationRender( itemsSrc, activeItem, handleEvents)}</div>
  }
}

Pagination.propTypes = {
}

export default Pagination
