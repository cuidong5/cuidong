var http = require('http'),
    url = require('url'),
    fs=require('fs');

http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	var json = url.parse(req.url,true).query
	if(json['user'] == 'cd' && json['pass'] == '753753'){
		res.write('ok')
		fs.writeFile('cd.txt',json.user+json.pass,function(err){
		if (err) throw err;
		// res.write('OK');
	})
		fs.readFile('cd.txt','utf-8',function(err){
			// res.write('ok')
			fs.writeFile('cd.html',json.user+json.pass,function(err){
				if (err) throw err;
				console.log('ok')
			})
		});
	}else{
		res.write('no')
	}
	res.end();

}).listen(8080)
