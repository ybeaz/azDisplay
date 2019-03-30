import React from 'react'

import { Markup } from './Markup.react'

interface Props {
  readonly sid: string,
  readonly listArr: any,
  readonly captureSection: string,
  readonly imgSrc: string,
  readonly sequence: any,
}
interface State {
}

export class ImgListTable extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  getListBlock = (listArr, listCapture) => {
  
    const listLi = listArr.map((item, i) => (
      <li key={i} className='ImgList_li'>
        <div className='ImgList__liCapture'>
          {item.capture}
        </div>
        <div className='ImgList__details'>
          {item.details}
        </div>
      </li>
    ))

    return (
      <div className='col-lg-6 col-md-6 col-sm-6 col-12 ImgList__capture'>
        <Markup el='h2' content={listCapture} className='ImgList__capture titleSection' />
        <ul className='ImgList__ul'>
          {listLi}
        </ul>
      </div>
    )
  }

  getImgBlock = imgSrc => {
    return (
      <div className='col-lg-6 col-md-6 col-sm-6 col-0 ImgList__imgWrapper'>
        <img className='img-fluid' src={imgSrc} alt='No text' />
      </div>
    )
  }

  public render(): JSX.Element {
    // console.info('ImgListTable->render() [10]', { props: this.props })
    const { sid, listArr, captureSection, imgSrc, sequence } = this.props
    const listBlock = this.getListBlock(listArr, captureSection)
    const imgBlock = this.getImgBlock(imgSrc)

    return (
      <div id={sid} className={`container-fluid form-group ImgList ImgList_${sid}`}>
        <div className='row'>
          {sequence.a === 'img' ? imgBlock : listBlock}
          {sequence.b === 'list' ? listBlock : imgBlock}
        </div>
      </div>
    )
  }
}