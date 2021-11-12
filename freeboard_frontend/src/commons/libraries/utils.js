export function getDate(myDate){
    const date = new Date(myDate)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()

    if(day < 10){
        day = String(day)
        day=day.split("")
        day.unshift("0")
        day=day.join("")
    }
    if(hour < 10){
        hour = String(hour)
        hour=hour.split("")
        hour.unshift("0")
        hour=hour.join("")
    }
    if(minute < 10){
        minute = String(minute)
        minute=minute.split("")
        minute.unshift("0")
        minute=minute.join("")
    }

    return `${year}-${month}-${day} / ${hour}:${minute}` // 2021-11-10
}