exports.render = function(req, res) {  

if(req.session.lastVisit)
{
console.log('Last visted : ');
console.log(req.session.lastVisit);
}

req.session.lastVisit=new Date();

/*res.render('index',{title:'Node Js Application'})*/
res.render('index', {
title: 'NodejsAppln',userFullName: req.user ?req.user.fullName : ''
});

};
