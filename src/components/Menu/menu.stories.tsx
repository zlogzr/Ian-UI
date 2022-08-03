import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

export default {
  title: 'Menu',
  id: 'Menu',
  component: Menu,
  subcomponents: { SubMenu: SubMenu, Item: MenuItem },
  args: {
    defaultIndex: '1'
  },
  argTypes: {
    defaultIndex: {
      description: '下标'
    }
  }
} as ComponentMeta<typeof Menu>

export const DefaultMenu: ComponentStory<typeof Menu> = args => (
  <Menu defaultIndex="0" {...args}>
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <SubMenu title="下拉选项">
      <MenuItem>下拉选项一</MenuItem>
      <MenuItem>下拉选项二</MenuItem>
    </SubMenu>
  </Menu>
)
DefaultMenu.storyName = '默认Menu'

export const ClickMenu: ComponentStory<typeof Menu> = args => (
  <Menu {...args} defaultIndex="0" mode="vertical">
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <SubMenu title="点击下拉选项">
      <MenuItem>下拉选项一</MenuItem>
      <MenuItem>下拉选项二</MenuItem>
    </SubMenu>
  </Menu>
)
ClickMenu.storyName = '纵向Menu'
