
import { randomUUID } from 'crypto';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getDatabase, ref, set, goOffline } from 'firebase/database';
import { firebaseConfig } from './firebaseConfig';

export const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Firebase Database
export const getFirebaseDatabase = () => getDatabase(firebaseApp);

export const getFirebaseDatabaseRef = (path) => ref(getFirebaseDatabase(), path);

export const closeFirebaseConnection = () => {
    goOffline(getFirebaseDatabase());
}

export const writeDataRdb = (path, payload) => {
    set(getFirebaseDatabaseRef(path),payload)
}
