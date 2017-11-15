import RedditData from "./RedditData";

const INITIAL_STATE = {
    posts: RedditData
};


export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_POSTS":
            return Object.assign({}, state,
                                posts: []
                                 });
            
                                
                                
                                
                                )
    }
    
            return state;
    }


