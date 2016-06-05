function addZero (s) {
  return s<10?'0'+s:s
}
//
const s=new Date();
export const TomorrowDate=s.getFullYear()+'-'+addZero((s.getMonth()+1))+'-'+addZero((s.getDate()+1));
