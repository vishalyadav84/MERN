const obj = new Buffer.from('abcxyz');;
console.log(obj.toString());
obj.write('other');
console.log(obj.toString());