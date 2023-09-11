import { createReducer } from '@reduxjs/toolkit';
import { get_itineraries } from '../actions/itineraryActions';

const initialState = {
    itineraries: [],
    error: false 
}

const itineraryReducer = createReducer(initialState,
    (builder)=> builder
        .addCase(get_itineraries.fulfilled,
            (state,action)=>{
                console.log("Action Payload:", action.payload);
                return {
                    ...state,
                    itineraries: action.payload.itineraries,
                    error: false,
                }
            }
        )
    );

export default itineraryReducer