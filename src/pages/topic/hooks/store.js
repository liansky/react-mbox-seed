import { observable, action, computed } from 'mobx'
import React from 'react'

class CounterStore {
  @observable count = 0

  @action
  increment() {
    this.count++
  }

  @action
  decrement() {
    this.count--
  }

  @computed
  get doubleCount() {
    return this.count * 2
  }
}

class ThemeStore {
  @observable
  theme = 'light'

  @action
  setTheme(newTheme) {
    this.theme = newTheme
  }
}

const storesContext = React.createContext({
  counterStore: new CounterStore(),
  themeStore: new ThemeStore(),
})

export const useStores = () => React.useContext(storesContext)
