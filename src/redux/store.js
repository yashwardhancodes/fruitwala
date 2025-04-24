import { configureStore } from "@reduxjs/toolkit";
import { contoctusApi } from "./contoctusApi";





const reduxStore = configureStore({
    reducer: {
     
        [contoctusApi.reducerPath]: contoctusApi.reducer,


    },
    middleware: def => [...def(),contoctusApi.middleware]
})

export default reduxStore