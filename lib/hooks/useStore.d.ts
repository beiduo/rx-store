import StoreClass from '../store';
/**
 * the hook for using store in functional components
 * @param storeObj store object
 */
export default function useStore<T>(
/** store object that need to be subscribed */
storeObj: StoreClass<T> & {
    [random: string]: any;
}): T;
