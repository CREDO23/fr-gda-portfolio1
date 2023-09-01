import {DatePicker as Dp} from 'antd'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const dateFormat = 'YYYY/MM/DD';


export default function DatePicker () {
    return <Dp placeholder='2022/02/22' format={dateFormat} />
}