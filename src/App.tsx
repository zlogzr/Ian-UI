import Button, { ButtonSize, ButtonType } from '@/components/Button/button'

import './App.scss'
import { ReactComponent as Logo } from './assets/logo.svg'

function App() {
  return (
    <div className="app">
      <Logo width={200} />
      {/* 大中小Button */}
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large
      </Button>
      <Button btnType={ButtonType.Primary}>Middle</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        Small
      </Button>
      {/* disabled */}
      <Button disabled> Disabled Button </Button>
      {/* Danger */}
      <Button btnType={ButtonType.Danger}>Danger</Button>
      {/* Link */}
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">
        Baidu Link
      </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
        Disabled Link
      </Button>
    </div>
  )
}

export default App
