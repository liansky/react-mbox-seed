import React from 'react'
import { ThemeContext, themes } from './context'
import ThemedButton, { ThemedButton2 } from './themed-button'

// 一个使用 ThemedButton 的中间组件
function Toolbar() {
  return <ThemedButton>Change Theme</ThemedButton>
}
export default class MyContext extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.dark,
    }

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }))
    }
  }

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar />
          <br />
          <ThemedButton>你好</ThemedButton>

          {/* 函数组件 */}
          <ThemeContext.Consumer>
            {(value) => {
              return (
                <div>
                  <ThemedButton2 theme={value} text="世界你好啦啦啦" />
                </div>
              )
            }}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>

        <div>
          <button onClick={this.toggleTheme}>点击更换按钮主题颜色</button>
        </div>
      </div>
    )
  }
}
