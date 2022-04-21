import { configureStore, createAction, createReducer, createSelector, createSlice } from "@reduxjs/toolkit";
import { useReducer, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

// Объявление интерфейса для версии
interface VersionState {
  version: number;
}

// Объявление значения по умолчанию для версии
const initialState: VersionState = {
  version: 1
};

// Объявление редюсера для версий
const versionReducer = createSlice({
  name: "version",
  initialState,
  reducers: {
    upgradeVersion: (state, action) => {
      state.version += action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    versionReducer: versionReducer.reducer,
  },
});

const { upgradeVersion } = versionReducer.actions;

export type RootState = ReturnType<typeof store.getState>;

function AppWithStore() {
  const selectVersion = createSelector(
    (state: RootState) => state.versionReducer,
    ({ version }) => version,
  );
  const version = useSelector(selectVersion);
  const call = useDispatch();
  return <div className="App">
    <h1>{version}</h1>
    <button onClick={() => call(upgradeVersion(2))}>
      Upgrade Version
    </button>
  </div>;
}

function AppWithUseReducer() {
  // const upgradeVersion = createAction('version/upgrade');

  // const versionReducer = createReducer(initialState, (builder) => {
  //   builder.addCase(upgradeVersion, (state) => {
  //     state.version += 1;
  //   })
  // })
  const oldVersionReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'create':
        return { ...state, version: state.version + action.payload }
      case 'edit':
        return { ...state, version: state.version + 1 } 
      case 'read':
        return { ...state, version: state.version + 1 }
      case 'delete':
        return { ...state, version: state.version + 1 } 
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(oldVersionReducer, initialState);
  const [versionState, setVersionState] = useState(initialState);

  const onUpgrade = () => dispatch({ type: 'create', payload: 2 });

  return <div className="App">
    <h1>{state.version}</h1>
    <button onClick={onUpgrade}>
      Upgrade Version
    </button>
  </div>;
}

export default function ReduxSimplePage() {
  return (
    <Provider store={store}>
      <AppWithStore />
      <AppWithUseReducer />
    </Provider>
  )
}
