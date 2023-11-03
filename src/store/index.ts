import Storage, { PersistanceKeys } from "../utils/storage";
import { Observer, Screens } from "../types/store";
import { reducer } from "./reducer";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { navigate, setUserCredentials } from "./actions";



onAuthStateChanged(auth, (user) => {
  if (user) {
    user.uid !== null ? dispatch(setUserCredentials(user.uid)) : '';
    dispatch(navigate(Screens.HOMEPAGE));
  } else {
    dispatch(navigate(Screens.LANDING));
  }
});

const emptyState: any = {
  screen: Screens.LANDING,
  user: {},
  posts: [],
  };

export let appState = Storage.get<any>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: any) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;

  persistStore(newState);
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};