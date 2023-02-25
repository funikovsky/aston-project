import axios from 'axios';
import { _apiBase } from '../common/variables';

export const apiMain = axios.create({
  baseURL: _apiBase,
});
