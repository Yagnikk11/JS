const accountId = 1234
let accountEmail = "yagnik@gmail.com"

/* avoid use of var, 
 because of the issue in block scope and functional scope
*/
var accountPassword = "123"
accountCity = "Surat"
let accountState;

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])