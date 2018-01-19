const initialState = {
  helloText: 'Hello'
}

export default(state = initialState, action) => {
  switch (action.type) {
    default:
      return initialState
  }
}