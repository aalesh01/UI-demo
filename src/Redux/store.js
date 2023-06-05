import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const demoAPI = createAsyncThunk(
    "demoAPI",
    async (values) => {
        var requestOptions = {
            method: "POST",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": sessionStorage.getItem("q2p_token"),
            },
            body: JSON.stringify(values),
        };

        return await fetch(
            "https://api.q2pay.co.in/api/v1/transactions/add_status",
            requestOptions
        )
            .then((response) => response.json())
            .catch((error) => console.log("error", error));
    }
);

const demoAPIState = createSlice({
    name: "addStatusState",
    initialState: {
        isLoading: null,
        response: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(demoAPI.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(demoAPI.fulfilled, (state, action) => {
            state.isLoading = false;
            state.response = action.payload;
        });
        builder.addCase(demoAPI.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
    },
});

export default demoAPIState.reducer;
