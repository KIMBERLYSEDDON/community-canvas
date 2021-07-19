module.exports = {
    format_date: (date) => {
        var year = date.getFullYear();
        var month = 1 + date.getMonth();
        var day = date.getDate();
        return month + '/' + day + '/' + year;
      },
      
      format_time: (time) => {
        var hr = d.getHours();
        var min = d.getMinutes();
        if (min < 10) {
          min = "0" + min;
        }
        var ampm = "am";
        if (hr > 12) {
          hr -= 12;
          ampm = "pm";
        }
        return hr + ":" + min + ampm;
      }
}