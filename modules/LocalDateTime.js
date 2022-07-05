import { DateTime } from './luxon.js';

const date = DateTime.now();
const time = date.toLocaleString(DateTime.DATETIME_MED);

export default time;
