const SET_FRIENDS = "USERS/SET_FRIENDS"
const SET_USER = "USERS/SET_USER"
let init = {
    user:null,
    friends:null,
};

export const userReducer = (state = init, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return{
                ...state,
                friends:action.friends
            }
        case SET_USER:
            return{
                ...state,
                user:action.user
            }
        default:
            return state
    }
};

export const setFriends = (friends) => {
    return {
      type: SET_FRIENDS,
      friends,
    };
};

export const setUser = (user) => {
    return {
      type:SET_USER,
      user,
    };
};
