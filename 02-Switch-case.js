var key = 2;

// Caso você crie um case dentro do switch e não coloque o break ou return; todas as intruções abaixo serão executadas
// inclusive o default, então se a key for 2, o resultado no console vai ser: test 2 - default

switch (key) {
  case 1:
    console.log('test 1')
    break;
  case 2: 
    console.log('test 2');
  default:
    console.log('default');
    break;
}

