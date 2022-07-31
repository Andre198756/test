var Token = artifacts.require("./Token.sol");
var Sale = artifacts.require("./Sale.sol");

module.exports = function(deployer) {
	deployer.deploy(Sale, "0x93F0E039Bd798e4C8428D9940A45Ce3860D7BAC7").then(function() {
		return deployer.deploy(Token, Sale.address);
	});
};
