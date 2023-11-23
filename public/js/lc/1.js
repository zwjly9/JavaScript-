setTimeout(() => {
  console.log(2);
}, 0)
Promise.resolve().then(() => {
  console.log(1);
})

function getWeekDate() {
  var now = new Date();
  var day = now.getDay();
  var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
  var week = weeks[day];
  console.log(day, weeks);
  return week;
}
console.log(getWeekDate());

var a = {};
var _a = 0;
Object.defineProperty(this, a, {
  get() {
    console.log(_a++);
    return _a++
  }
})
if (a == 1 && a == 2 && a == 3) {
  console.log("长安十八");
}
console.log(location);

let arr = 'http://35.1.200.190:8050/pictures/3/20210817/01be106d7c3d497497285d16174a402f_141635.png;http://35.1.200.190:8050/pictures/3/20210817/5adbb3da94114323bfc588c11882e876_141646.png;http://35.1.200.190:8050/pictures/3/20210817/51cc9bd434574d1d94c3425b9a032ea9_141656.png'

let arr1 = arr.split(';')
console.log(arr1);

let srcList = []
let childList = [
  {
    departmentUrl: "http://35.1.200.190/api/eventhandle/sys/doc/viewImg//12/20201118/174324aa908a4922bf6358f3841068ca_093817.jpg,http://35.1.200.190/api/eventhandle/sys/doc/viewImg//12/20201118/5566b2a882e74df3a8b734afc5b6c5a1_093825.jpg"
  },
  {
    departmentUrl: "http://35.1.200.190/api/eventhandle/sys/doc/viewImg//12/20201118/174324aa908a4922bf6358f3841068ca_093817.jpg,http://35.1.200.190/api/eventhandle/sys/doc/viewImg//12/20201118/5566b2a882e74df3a8b734afc5b6c5a1_093825.jpg"
  },
  {
    departmentUrl: "http://35.1.200.190/api/eventhandle/sys/doc/viewImg//12/20201118/174324aa908a4922bf6358f3841068ca_093817.jpg,http://35.1.200.190/api/eventhandle/sys/doc/viewImg//12/20201118/5566b2a882e74df3a8b734afc5b6c5a1_093825.jpg"
  }
]
if(childList) {
  childList.forEach(item => {
    let temp = item.departmentUrl.split(',')
    srcList = srcList.concat(temp)
  })
}
console.log(srcList);