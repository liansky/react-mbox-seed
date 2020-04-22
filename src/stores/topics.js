import { observable, action } from 'mobx'

class Topics {
  @observable name = '小明'
  @observable age = 18

  @action plus() {
    this.age++
  }
}

export default new Topics()
