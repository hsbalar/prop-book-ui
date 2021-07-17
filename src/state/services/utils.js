/* eslint-disable eqeqeq */
const listA = [
  '',
  'one ',
  'two ',
  'three ',
  'four ',
  'five ',
  'six ',
  'seven ',
  'eight ',
  'nine ',
  'ten ',
  'eleven ',
  'twelve ',
  'thirteen ',
  'fourteen ',
  'fifteen ',
  'sixteen ',
  'seventeen ',
  'eighteen ',
  'nineteen ',
];
const listB = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

export function inWords(num) {
  if ((num = num.toString()).length > 9) return 'overflow';
  let n = ('000000000' + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  let str = '';
  str +=
    n[1] != 0
      ? (listA[Number(n[1])] || listB[n[1][0]] + ' ' + listA[n[1][1]]) +
        'crore '
      : '';
  str +=
    n[2] != 0
      ? (listA[Number(n[2])] || listB[n[2][0]] + ' ' + listA[n[2][1]]) + 'lakh '
      : '';
  str +=
    n[3] != 0
      ? (listA[Number(n[3])] || listB[n[3][0]] + ' ' + listA[n[3][1]]) +
        'thousand '
      : '';
  str +=
    n[4] != 0
      ? (listA[Number(n[4])] || listB[n[4][0]] + ' ' + listA[n[4][1]]) +
        'hundred '
      : '';
  str +=
    n[5] != 0
      ? (str != '' ? 'and ' : '') +
        (listA[Number(n[5])] || listB[n[5][0]] + ' ' + listA[n[5][1]]) +
        'only '
      : '';
  return str;
}
