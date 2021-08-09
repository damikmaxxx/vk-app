const SET_FRIENDS = "USERS/SET_FRIENDS"
const SET_USER = "USERS/SET_USER"
const SET_ACTIVE_USER_PAGE = "USERS/SET_ACTIVE_USER_PAGE"
const SET_UNSEEN_INFO = "USERS/SET_UNSEEN_INFO"
let init = {
    user:null,
    friends:null,
    activeUserPage:1,
    unseen:null,
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
        case SET_ACTIVE_USER_PAGE:
            return{
                ...state,
                activeUserPage:action.id
            }
        case SET_UNSEEN_INFO:
            return{
                ...state,
                unseen:action.info
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

export const setActiveUserPage = (id) => {
    return {
      type:SET_ACTIVE_USER_PAGE,
      id,
    };
};

export const setUnseenInfo = (info) => {
    return {
      type:SET_UNSEEN_INFO,
      info,
    };
};