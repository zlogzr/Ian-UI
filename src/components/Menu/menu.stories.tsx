import { ComponentMeta, ComponentStory } from '@storybook/react'

import Menu from './menu'
import Item from './menuItem'
import SubMenu from './subMenu'

const menuMeta: ComponentMeta<typeof Menu> = {
  title: 'Menu',
  id: 'Menu',
  component: Menu,
  subcomponents: { SubMenu: SubMenu, Item: Item },
  args: {
    defaultIndex: '1'
  }
  // argTypes: {
  //   defaultIndex: {
  //     control: 'color',
  //     description: 'normal test'
  //   }
  // }
  // parameters: {
  //   controls: {
  //     matchers: {
  //       date: /mode$/
  //     }
  //   }
  // }
}

export default menuMeta

const Template: ComponentStory<typeof Menu> = args => (
  <Menu {...args}>
    <Item>cool link</Item>
    <Item>cool link 2</Item>
    <Item disabled>disabled</Item>
    <SubMenu title="下拉选项">
      <Item>下拉选项一</Item>
      <Item>下拉选项二</Item>
    </SubMenu>
  </Menu>
)

export const DefaultMenu = Template.bind({})
DefaultMenu.storyName = '默认Menu'

export const ClickMenu = Template.bind({})
ClickMenu.args = {
  defaultIndex: '0',
  mode: 'vertical'
}
// ClickMenu.argTypes = {
//   defaultIndex: {
//     control: 'color'
//   }
// }
ClickMenu.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' }
    ]
  }
}
ClickMenu.storyName = '纵向Menu'
