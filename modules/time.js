const Timing = () => {
  const dateContainer = document.querySelector('#date');
  const Func = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = Func.getFullYear();
  const month = months[Func.getMonth()];
  let current = Func.getDate();
  const hour = Func.getHours();
  const minutes = Func.getMinutes();
  const second = Func.getSeconds();
  if (current === 1) current = 'first';
  else if (current === 2) current = 'second';
  else if (current === 3) current = 'third';
  else current += 'th';

  const time = (hour < 12) ? `${month} ${current} ${year}, ${hour} ${minutes} ${second} AM`
    : `${month} ${current} ${year}, ${hour}: ${minutes}: ${second} PM`;
  dateContainer.innerHTML = time;
};

export default Timing;