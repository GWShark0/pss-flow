function showErrors(state = false, action) {
  switch (action.type) {
    case 'SHOW_ERRORS':
      return true;
    case 'NEXT_PAGE':
    case 'PREVIOUS_PAGE':
    case 'RESET':
      return false;
    default:
      return state;
  }
}

export default showErrors;
