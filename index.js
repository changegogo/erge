const axiosHttp = require('./axiosHttp');

// 发起get请求
const pageNum = 0;
const array = [];

function getData(){
  axiosHttp.get(pageNum, function(res){
    pageNum++;
    console.log(res.data.hasMore);
    /*if(res.data.hasMore==='Y'){
      getData(); 
    }  
    array = array.concat(res.data.ergeData);
    console.log(array);*/

  })
}

getData();
