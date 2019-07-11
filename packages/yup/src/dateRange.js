import moment from 'moment';

export default function({ min, max, format = 'MM/DD/YYYY' }, msg) {
  const minDate = moment(
    min,
    ['MM/DD/YYYY', format, 'MMDDYYYY', 'YYYYMMDD'],
    true
  );

  const maxDate = moment(
    max,
    ['MM/DD/YYYY', format, 'MMDDYYYY', 'YYYYMMDD'],
    true
  );

  // Can't use arrow function because we rely on 'this' referencing yup's internals
  return this.test({
    name: 'dateRange',
    exclusive: true, // Validation errors don't stack
    // NOTE: Intentional use of single quotes - yup will handle the string interpolation
    message:
      msg ||
      `Date Range must be between ${minDate.format(
        format
      )} and ${maxDate.format(format)}`,
    test(value) {
      if (!value) return false;
      let { startDate, endDate } = value;
      if (!startDate || !endDate) return false;

      startDate = moment(
        startDate,
        ['MM/DD/YYYY', format, 'MMDDYYYY', 'YYYYMMDD'],
        true
      );

      endDate = moment(
        endDate,
        ['MM/DD/YYYY', format, 'MMDDYYYY', 'YYYYMMDD'],
        true
      );

      return (
        startDate.isValid() &&
        endDate.isValid() &&
        endDate.isSameOrAfter(startDate) &&
        startDate.isSameOrAfter(minDate) &&
        endDate.isSameOrBefore(maxDate)
      );
    },
  });
}
