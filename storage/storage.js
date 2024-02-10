import { NativeStorage } from './backend/native';
import { WebStorage } from './backend/web';


export const getStorage = async () => {
    let isWeb = typeof document !== 'undefined';
    return isWeb ? WebStorage : NativeStorage;
}
