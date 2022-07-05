import { DateTime } from './luxon.js';

const myDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

export default myDate;