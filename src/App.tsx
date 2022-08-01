import Button, { ButtonSize, ButtonType } from '@/components/Button/button'

import './App.scss'
import { ReactComponent as Logo } from './assets/logo.svg'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="app">
      <Logo width={200} />
      <Menu
        defaultIndex={0}
        onSelect={index => {
          alert(index)
        }}
        mode="vertical"
      >
        <MenuItem index={0}>cool link</MenuItem>
        <MenuItem index={1} disabled>
          cool link 2
        </MenuItem>
        <MenuItem index={2}>cool link 3</MenuItem>
      </Menu>
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
