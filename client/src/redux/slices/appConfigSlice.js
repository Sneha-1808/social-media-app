// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// // import { create } from '../../../../server/models/User';
// import { axiosClient } from '../../utils/axiosClient';

// // old code
// // export const getMyInfo = createAsyncThunk('/user/getMyInfo',async (_, thunkAPI)=>{
// //      try {
// //         thunkAPI.dispatch(setLoading(true));
// //         const response = await axiosClient.get('/user/getMyInfo');
// //         return response.result
// //      } catch (e) {
// //         console.log(e);
// //         return Promise.reject(e);
// //      }finally{
// //         thunkAPI.dispatch(setLoading(false))
// //      }
// // })

// //new code
// export const getMyInfo = createAsyncThunk(
//     "user/getMyInfo",
//     async () => {
//         try {
//             const response = await axiosClient.get("/user/getMyInfo");
//             return response.result;
//         } catch (error) {
//             return Promise.reject(error);
//         }
//     }
// );

// // export const updateMyProfile = createAsyncThunk('user/updateMyProfile', async(body, thunkAPI )=>{
// //     try {
// //         thunkAPI.dispatch(setLoading(true));
// //         const response = await axiosClient.put('/user/', body);
// //         return response.result
// //      } catch (e) {
// //         console.log(e);
// //         return Promise.reject(e);
// //      }finally{
// //         thunkAPI.dispatch(setLoading(false))
// //      }
// // })
// // const appConfigSlice = createSlice({
// //     name: 'appConfigSlice',
// //     initialState: {
// //         isLoading: false,
// //         myProfile: {}
// //     },
// //     reducers: {
// //         setLoading: (state, action)=>{
// //             state.isLoading = action.payload;
// //         } 
// //     },
// //     extraReducers: (builder) =>{
// //         builder.addCase(getMyInfo.fulfilled, (state, action)=>{
// //             state.myProfile = action.payload.user;
// //         }) 
// //         .addCase(updateMyProfile.fulfilled, (state, action)=>{
// //             state.myProfile = action.payload.user;
// //         });
// //     }
// // })

// export const updateMyProfile = createAsyncThunk(
//     "user/updateMyProfile",
//     async (body) => {
//         try {
//             const response = await axiosClient.put("/user/", body);
//             return response.result;
//         } catch (error) {
//             return Promise.reject(error);
//         } 
//     }
// );

// const appConfigSlice = createSlice({
//     name: "appConfigSlice",
//     initialState: {
//         isLoading: false,
//         toastData: {},
//         myProfile: null,
//     },
//     reducers: {
//         setLoading: (state, action) => {
//             state.isLoading = action.payload;
//         },
//         showToast: (state, action) => {
//             state.toastData = action.payload;
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(getMyInfo.fulfilled, (state, action) => {
//             state.myProfile = action.payload.user;
//         })
//         .addCase(updateMyProfile.fulfilled, (state, action) => {
//             state.myProfile = action.payload.user;
//         });
//     },
// });

// export default appConfigSlice.reducer;
// export const {setLoading, showToast} = appConfigSlice.actions;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const getMyInfo = createAsyncThunk(
    "user/getMyInfo",
    async () => {
        try {
            const response = await axiosClient.get("/user/getMyInfo");
            return response.result;
        } catch (error) {
            return Promise.reject(error);
        }
    }
);

export const updateMyProfile = createAsyncThunk(
    "user/updateMyProfile",
    async (body) => {
        try {
            const response = await axiosClient.put("/user/", body);
            return response.result;
        } catch (error) {
            return Promise.reject(error);
        } 
    }
);

const appConfigSlice = createSlice({
    name: "appConfigSlice",
    initialState: {
        isLoading: false,
        toastData: {},
        myProfile: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        showToast: (state, action) => {
            state.toastData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMyInfo.fulfilled, (state, action) => {
            state.myProfile = action.payload.user;
        })
        .addCase(updateMyProfile.fulfilled, (state, action) => {
            state.myProfile = action.payload.user;
        });
    },
});

export default appConfigSlice.reducer;

export const { setLoading, showToast } = appConfigSlice.actions;