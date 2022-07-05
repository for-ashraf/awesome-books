import { DateTime } from './luxon.js';

DateTime = () => {
const date = DateTime.now();
const time = date.toLocaleString(DateTime.DATETIME_MED);

return (time);
}
