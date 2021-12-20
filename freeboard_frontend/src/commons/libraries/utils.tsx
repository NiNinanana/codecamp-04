export function getDate(myDate: any) {
  const date = new Date(myDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  let day: any = date.getDate();
  let hour: any = date.getHours();
  let minute: any = date.getMinutes();

  if (day < 10) {
    day = String(day);
    day = day.split("");
    day.unshift("0");
    day = day.join("");
  }
  if (hour < 10) {
    hour = String(hour);
    hour = hour.split("");
    hour.unshift("0");
    hour = hour.join("");
  }
  if (minute < 10) {
    minute = String(minute);
    minute = minute.split("");
    minute.unshift("0");
    minute = minute.join("");
  }

  return `${year}-${month}-${day} / ${hour}:${minute}`; // 2021-11-10
}

export function youtubeUrl(myYoutubeUrl: any) {
  return String(myYoutubeUrl).split("watch?v=").join("embed/");
}

export function getPrice(myPrice: any) {
  myPrice = String(myPrice).split("");
  // if(myPrice.length>)
}
