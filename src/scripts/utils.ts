// utils

export default {
  getFullDate: (date: Date) => {
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${year} 年 ${month} 月 ${day} 日 ${hours}:${minutes}`;
  },

  getMonthDay: (date: Date) => {
    date = new Date(date);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}-${day}`;
  },
};
