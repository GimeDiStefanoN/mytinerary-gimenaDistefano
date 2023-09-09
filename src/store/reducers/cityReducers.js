import { createReducer } from '@reduxjs/toolkit';
import { get_cities, filter_cities } from '../actions/cityActions'

const initialState = {
    cities: [],
    loading: false,
    error: false 
}

const cityReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_cities.pending, (state) => {
            return {
                ...state,
                loading: true,
                error: false,
            };
        })
        .addCase(get_cities.fulfilled,
            (state, action) => {
                return {
                    ...state,
                    cities: action.payload.cities,
                    loading: false,
                    error: false,
                }
            }
        )
        .addCase(get_cities.rejected, (state) => {
            return {
              ...state,
              loading: false,
              error: true,
            };
        })
        .addCase(filter_cities.fulfilled,
            (state, action) => {
                return {
                    ...state,
                    cities: action.payload.cities,
                    loading: false,
                    error: false,
                }
            }
        )
        .addCase(filter_cities.rejected, (state) => {
            return {
              ...state,
              loading: false,
              error: true,
            };
        })
);

export default cityReducer
