import React from 'react'
import { useStores } from './store'
import { observer } from 'mobx-react'

const Counter = observer(() => {
  const { counterStore } = useStores()

  return (
    <div>
      <div>{counterStore.count}</div>
      <button onClick={() => counterStore.increment()}>++</button>
      <button onClick={() => counterStore.decrement()}>--</button>
    </div>
  )
})

const ThemeToggler = observer(() => {
  const { themeStore } = useStores()

  return (
    <div>
      <div>{themeStore.theme}</div>
      <button onClick={() => themeStore.setTheme('light')}>
        set theme: light
      </button>
      <button onClick={() => themeStore.setTheme('dark')}>
        set theme: dark
      </button>
    </div>
  )
})

export default () => (
  <div>
    <Counter />
    <ThemeToggler />
  </div>
)
