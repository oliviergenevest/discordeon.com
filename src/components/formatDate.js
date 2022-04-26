import { fr } from 'date-fns/locale';
import { format } from 'date-fns';

const FormatDate = ({date, formatDate = "LLL yyyy"}) => {
    
    return (
        format(new Date(date), formatDate, {locale: fr}) 
    )
}
export default FormatDate;