import dayjs from "dayjs"

//你给一个日期我，我帮你格式化
export const formatDateTime = (str, split = "YYYY-MM-DD") => {
    let d = dayjs(str);   //将原来的日期字符串转换成dayjs对象
    if (d.isValid()) {   //如果你是一个合法的字符串
        return d.format(split);
    }
    else {
        return "";
    }
}