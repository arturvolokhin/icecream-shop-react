import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["products", "cart", "notification", "search"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PURGE,
                    PAUSE,
                    PERSIST,
                    REGISTER,
                ],
            },
        }),
});

export let persistor = persistStore(store);