import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { PropsWithChildren } from 'react';
import { AuthProvider, FirebaseAppProvider, FirestoreProvider, StorageProvider, useFirebaseApp } from 'reactfire';
import { firebaseConfiguration } from './configuration';

type Properties = PropsWithChildren<{}>;

export const Firebase = ({ children }: Properties) => {
    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfiguration}>
            <FirebaseSetup>
                {children}
            </FirebaseSetup>
        </FirebaseAppProvider>
    );
};

const FirebaseSetup = ({ children }: Properties) => {
    const app = useFirebaseApp();

    const authInstance = getAuth(app);
    const firestoreInstance = getFirestore(app);
    const storageInstance = getStorage(app);

    return (
        <AuthProvider sdk={authInstance}>
            <FirestoreProvider sdk={firestoreInstance}>
                <StorageProvider sdk={storageInstance}>
                    {children}
                </StorageProvider>
            </FirestoreProvider>
        </AuthProvider>
    );
};
