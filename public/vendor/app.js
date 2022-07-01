function something()
{
  var x = window.localStorage.getItem('bbb');
  
  x = x * 1 + 1;

  window.localStorage.setItem('bbb', x);
  
  alert(x);
}

function add_to_card(id)
{
  var key = 'product_' + id;

  var x = window.localStorage.getItem(key); // x = hh['bbb']
  x = x * 1 + 1; // x = x + 1
  window.localStorage.setItem(key, x);  // hh['bbb'] = x

  // вывод количество item's в корзине
  alert('Items in your card: ' + cart_get_number_of_items());
}

function cart_get_number_of_items()
{
  var cnt = 0;
  for(var i = 0; i < window.localStorage.length; i++)
  {
    var key = window.localStorage.key(i);         // получаем ключ
    var value = window.localStorage.getItem(key); // получаем значение аналог в ruby hh['bbb'] = x
    
    if(keyindexOf('product_') == 0)
    {
      cnt = cnt + value * 1;
    }
  }

  return cnt;
}

function cart_get_orders()
{
  var orders = 0;
  for(var i = 0; i < window.localStorage.length; i++)
  {
    var key = window.localStorage.key(i);         // получаем ключ
    var value = window.localStorage.getItem(key); // получаем значение аналог в ruby hh['bbb'] = x
    
    if(keyindexOf('product_') == 0)
    {
      orders = orders + key + '=' + value + ',' ;
    }
  }

  return orders;
}