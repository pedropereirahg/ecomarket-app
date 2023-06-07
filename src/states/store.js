import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { reducers } from "./reducers/index";

export const store = configureStore({ reducer: reducers, preloadedState: {}, enhancers: [applyMiddleware(thunk)] });
