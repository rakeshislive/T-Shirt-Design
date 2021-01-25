export const saveMeme = (design) => {
    return(dispatch, getState) => {
        dispatch({type: 'SAVE_MEME', design})
    }
}