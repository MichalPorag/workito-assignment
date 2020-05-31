import ATTENDANCE from '../data/attendance.json';
const attendance = new Array(...ATTENDANCE);
import EMPLOYEES from '../data/employees.json';
const employees = new Array(...EMPLOYEES);

const RECOVERY_DAY_SALARY = 378;
const STANDARD_WORK_HOURS_IN_MONTH = 182;
const NUMBER_OF_MONTHS = 12;

module.exports = {
  recoveryDaysByEmployee: (id, year, month) => {
    const hours = module.exports.getTotalHoursThisMonth(id, year, month);
    const seniority = module.exports.getSeniority(id, year, month);
    const recoveryDaysByMonth = seniority / NUMBER_OF_MONTHS;
    const recoveryDayPayment =
      (hours * recoveryDaysByMonth * RECOVERY_DAY_SALARY) /
      STANDARD_WORK_HOURS_IN_MONTH;

    return `The recovery day payment for ${module.exports.getNameOfMonth(
      month,
    )} is: ${recoveryDayPayment.toFixed(2)}₪`;
  },

  getTotalHoursThisMonth: (id, year, month) => {
    const workDays = module.exports.getWorkDaysThisMonth(id, year, month);
    return workDays.length > 0
      ? workDays.reduce((i, j) => i.total + j.total)
      : 0;
  },

  getWorkDaysThisMonth: (id, year, month) => {
    const days = attendance.filter(
      i => i.id === id && i.date.year === year && i.date.month === month,
    );
    return days;
  },

  getSeniority: (id, year, month) => {
    const employee = employees.find(i => i.id === id);

    return (
      (year - employee.startDate.year) * 12 - employee.startDate.month + month
    );
  },

  getRecoveryDaysBySeniority: (id, year, month) => {
    const seniority = Math.floor(
      module.exports.getSeniority(id, year, month) / 12,
    );
    if (seniority < 1) {
      return 5;
    } else if (seniority > 1 && seniority <= 3) {
      return 6;
    } else if (seniority > 3 && seniority <= 10) {
      return 7;
    } else if (seniority > 10 && seniority <= 15) {
      return 8;
    } else if (seniority > 15 && seniority <= 19) {
      return 9;
    } else {
      return 10;
    }
  },

  getNameOfMonth: month => {
    switch (month) {
      case 1:
        return 'January';
        break;
      case 2:
        return 'February';
        break;
      case 3:
        return 'March';
        break;
      case 4:
        return 'April';
        break;
      case 5:
        return 'May';
        break;
      case 6:
        return 'June';
        break;
      case 7:
        return 'July';
        break;
      case 8:
        return 'August';
        break;
      case 9:
        return 'September';
        break;
      case 10:
        return 'October';
        break;
      case 11:
        return 'November';
        break;
      case 12:
        return 'December';
        break;

      default:
        break;
    }
  },
};
