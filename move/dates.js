const dateFormat = (time, format = 'DD/MM/YYYY') => {
    return moment(time).format(format);
  };