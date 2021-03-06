import React from 'react'
import { Link } from 'react-router-dom'

import * as Interfaces from '../../Shared/interfaces'
import { CommonContainer } from '../Containers/CommonContainer.react'
import { SectionWrapper } from '../Components/SectionWrapper.react'
import { NavBar } from '../Components/NavBar.react'
import { Footer } from '../Components/Footer.react'

interface Props {
  reduxState: any,
  handleActions: Function,
}
interface State {
}

class AboutUs extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { reduxState } = this.props

  }

  componentDidUpdate() {
    const { reduxState } = this.props

  }


  public handleEvents: Function = (e: any, action: Interfaces.Action): void => {
    const { handleActions } = this.props
    const sid: string = 'AboutUs'
    let data: any

    switch (action.type) {

      case 'clickBack':
      {
        const action01: Interfaces.Action = { type: 'clickBack' }
        handleActions(e, action01)
        // console.info(`Footer->handleEvents type->${action.type} [10]`, { props: this.props, action, e })
      }
      break

      default: {
        console.info(`${sid}->handleEvents unexpected action type: ${action.type}`, { action })
      }
    }
  }

  public render(): JSX.Element {

    // console.info('AboutUs->render() [10]', { modalWindows, reduxState, modals, props: this.props })
    return (
      <div className='AboutUs globalStyle'>
        <header><NavBar /></header>
        <main>
          <SectionWrapper classStyle='AboutUs__linkBack'>
            <Link to={'/326_HP2P_v01/enter'} onClickCapture={e => this.handleEvents(e, {type: 'clickBack'})}>
              <div className={`AboutUs__linkBackCapture`}>
                  Назад
              </div>
            </Link>
          </SectionWrapper>

          <SectionWrapper classStyle='AboutUs__content'>
          <div>UserTo.com, основан в конце 2018 года.  Миссия —  дать возможность любому пользователю поделиться своими знаниями и опытом онлайн в самых разных областях: от традиционных, до специфических.  На UserTo.com вы можете мгновенно получить знания в формате  "от человека к человеку" через чат, аудио или видеосвязь.  Это делает максимально простым профессиональное решение сложных и даже узкоспециализированных вопросов.  С UserTo.com специалисты всегда "под рукой".</div>
          <div>Что предлагает UserTo.com?</div>
          <div>Выбор</div>
          <div>На UserTo.com вы сможете найти специалиста по интересующему вас вопросу выбрав из множества.</div>
          <div>Интересное соотношение цены за сэкономленное время</div>
          <div>Для решения многих вопросов не требуется физического присутствия специалиста. Зачем за это платить, если вопрос можно решить в чате, по аудио или видеосвязи?! Специалист экономит время, вы выигрываете в деньгах.</div>
          <div>Удобство</div>
          <div>Решайте важный вопрос в любом месте, где есть интернет. Вы сами выбираете удобное время и формат общения.</div>
          <div>Конфиденциальность</div>
          <div>Мы не передаем ваши контактные данные при общении. Вы можете решать вопрос максимально конфиденциально.</div>

          </SectionWrapper>
        </main>
        <footer>
          <SectionWrapper classStyle='SectionWrapper_footerSection bg_greyDark'>
            <Footer />
          </SectionWrapper>
        </footer>
      </div>
    )
  }
}

// tslint:disable-next-line: export-name
export const AboutUsPage = CommonContainer(AboutUs)
