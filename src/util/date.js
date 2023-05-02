import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

// 기본 en_Us, 전달하면 ko
export function formatAgo(date, lang = 'en_US') {
    return format(date, lang);
}