function something()
{

  var x = window.localStorage.getItem('bbb');
  
  x = x * 1 + 2;

  window.localStorage.setItem('bbb', x);
  
  alert(x);

}