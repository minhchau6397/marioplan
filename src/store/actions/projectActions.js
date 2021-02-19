export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userID = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authFirstName: profile.firstName,
            authLastName: profile.lastName,
            authId: userID,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
}