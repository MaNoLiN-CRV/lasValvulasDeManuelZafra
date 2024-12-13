import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
        
    },
    
});

// debes irte a usage with typescript y debes meter aqui los export types, ademas 
// de ello, en el combine reducers mete entre corchetes lo del nombre y todo [nombrePath.pollas] : pollas.reducer o slie no recuerdo ya
// por que si no te petardeará el middleware cuando lo intentes meter en el concat
