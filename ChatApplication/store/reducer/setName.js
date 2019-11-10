import StoreAction from '../action/action';

const INITIAL_STATE = {
    name : ''
}

const setName=(state = INITIAL_STATE , action) =>
{
    switch(action.type)
    {
        case StoreAction.setName() :
            {
                return {
                    ...state,
                    name: action.name
                }
            }
        default : return state
    }
}
export default setName;