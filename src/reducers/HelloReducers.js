import HELLO_BUTTON from '../actions/types'
const initialState = {
  helloText: 'Hello',
  pressedButton: false
}

export default(state = initialState, action) => {
  switch (action.type) {
    case "HELLO":
      return {
        pressedButton: !state.pressedButton,
        helloText: (!state.pressedButton
          ? 'you have pressed the button'
          : 'Hello')
      }
    default:
      return initialState
  }
}