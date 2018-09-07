var enkrypted = '', dekrypted, j = 0

dekrypted = prompt('entrez le code a décrypter');

for(var i = 0; i <= dekrypted.length ; i++){
	j++;
	switch (dekrypted.substring(i,j)) {
    case "i":
       enkrypted = enkrypted + "1";
    break;

    case "e":
       enkrypted = enkrypted + "3";
    break;

    case "a":
       enkrypted = enkrypted + "4";
    break;

    case "s":
       enkrypted = enkrypted + "5";
    break;

    case "b":
       enkrypted = enkrypted + "7";
    break;

    default : enkrypted = enkrypted + dekrypted.substring(i,j);
  }
}
  alert(enkrypted);
