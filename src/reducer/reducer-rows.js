
// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = [], action) {
    switch (action.type) {
        case 'getGithubData':
            return action.payload;
            break;
        case 'handleGridRowsUpdated':
                return {
                    ...state,
                    rows: action.payload
                  };
         //   return action.payload;
            break;
    }
    return state;
}