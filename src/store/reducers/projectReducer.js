const initialState = {
    projects: [
        // { id: '1', title: 'help me find peach', content: 'blah blah blah' },
        // { id: '2', title: 'collect all stars', content: 'blah blah blah' },
        // { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('project created error', action.err);
            return state;
        default:
            return state;
    }
}