import {
  format
} from 'date-fns';

export default (data) => {
  return `${data.months.map((d, i) => `<div class="datepicker-month" data-month="${format(new Date(2100, d, 1), 'MM', {
    locale: data.locale
  })}">${format(new Date(2100, d, 1), 'MMM', {
    locale: data.locale
  })}</div>`).join('')}`;
}