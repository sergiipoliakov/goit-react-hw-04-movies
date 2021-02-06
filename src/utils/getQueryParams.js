import queryString from 'query-string';

export default function getQueryString(QS) {
  return queryString.parse(QS);
}
