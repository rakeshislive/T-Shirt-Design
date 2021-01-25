const initialState = {
    designs: [
        {
            id: 1,
            upperText: "Let's make India",
            lowerText: "Great",
            memeImage: "../public/one.png"
        },
        {
            id: 2,
            upperText: "Born to make",
            lowerText: "the bold statements",
            memeImage: "../public/two.png"
        },
        {
            id: 3,
            upperText: "Born to make",
            lowerText: "the bold statements",
            memeImage: "../public/two.png"
        }
    ]
}

const designReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_MEME':
            console.log('Design is saved in the database'+ action)
            break;
        default:
    }
    return state
}

export default designReducer;