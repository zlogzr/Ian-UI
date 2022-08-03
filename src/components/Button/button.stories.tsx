import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Button from './button'

const buttonMeta = {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>
export default buttonMeta

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Button'
}
Default.storyName = '默认按钮样式'

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  children: 'Large Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'Small Button'
}

export const Primary = Template.bind({})
Primary.args = {
  btnType: 'primary',
  children: 'Primary Button'
}

export const Danger = Template.bind({})
Danger.args = {
  btnType: 'danger',
  children: 'Danger Button'
}

export const Link = Template.bind({})
Link.args = {
  btnType: 'link',
  children: 'Link Button',
  href: 'https://baidu.com'
}
