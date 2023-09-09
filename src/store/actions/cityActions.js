import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const get_cities = createAsyncThunk('get_cities',
    async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/cities?name=')
              
            return {
                cities: response.data.allCities
            }
        } catch (error) {
            console.log(error);
        }
    }
)

export const filter_cities = createAsyncThunk('filter_cities',
    async (obj) => { 
            try {
                const response = await axios.get(`http://localhost:8000/api/cities?name=${obj.value}`)
                
            
                if (response.data && response.data.allCities) {
                    return {
                      cities: response.data.allCities
                    };
                  } else {
                    throw new Error('Invalid API response');
                  }
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
)

