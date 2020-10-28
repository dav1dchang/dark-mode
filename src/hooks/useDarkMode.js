import { relativeTimeRounding } from 'moment';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key, false)
    const toggleDarkMode = () => {
        setSomeValue(!someValue)
    }
    
    return([someValue, toggleDarkMode])
}