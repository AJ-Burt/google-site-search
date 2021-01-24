import axios from 'axios';
import {safeKey, safeCX} from './keys';

const KEY = safeKey;

export default axios.create({
    baseURL: 'https://www.googleapis.com/customsearch/v1?',
    params: {
        cx: safeCX,
        key: KEY
    }
});