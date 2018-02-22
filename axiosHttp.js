const axios = require('axios');
const commonUtils = require('./commonUtils');
module.exports = {
  get: function(pageNum, callback){
    axios.get(commonUtils.baseUrl+pageNum+commonUtils.endString)
      .then(function(res){
        callback(res.data);
      })
      .catch(function(error){
        callback(error);
      })
  }
}
