import React from 'react'
import { ThemeContext } from './context'

class ThemedButton extends React.Component {
  static contextType = ThemeContext

  render() {
    let props = this.props
    let theme = this.context
    return (
      <button
        {...props}
        style={{ backgroundColor: theme.background, color: theme.foreground }}
      />
    )
  }
}

export const ThemedButton2 = ({ theme, text }) => {
  return (
    <button
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      {text}
    </button>
  )
}

export default ThemedButton
