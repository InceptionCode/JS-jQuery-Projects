$(document).ready(function () {
  (function  (){
    var list = ["Study JavaScript"];
      //Cache DOM
    var $div = $('div .list'),
        $input = $div.find('input'),
        $button = $div.find('button'),
        $checked = $div.find('span'),
        $ul = $div.find('#list-display'),
        $template = $div.find('#list-template').html();
        //Events
        $button.on('click', addItem);
        $ul.delegate('.fa-trash','click', deleteItem);
        $ul.delegate('.fa-pencil','click', editItem);
        $ul.delegate('.check','click', clearItem);

      function render () {
        var data = {
          list: list
        };
        $ul.html(Mustache.render($template,data));
      }
        render();

      function addItem(e) {
        if($input.val()){
          list.push($input.val());
        } else{
          $input.attr('placeholder','You forgot to add a To-Do');
          setTimeout(function () {
            $input.attr('placeholder','Add a To-Do . . .');
          }, 3000);
        }
        render();
        $input.val('');
      }

      function deleteItem(e) {
        var $remove = $(e.target).closest("li");
        var i = $ul.find('li').index($remove);

        list.splice(i,1);
        render();
      }

      function clearItem(e) {
        $(e.target).toggleClass('checked');
        $(e.target).closest('li').toggleClass('cancel');
      }

      function editItem(e) {
        var target = $(e.target).closest('li');
        $input.val(target.text());
        var i = $ul.find('li').index(target);
        list.splice(i,1);
        render();
      }
    })();
  });
