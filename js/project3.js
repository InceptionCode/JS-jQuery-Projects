$(document).ready(function () {
  (function  (){
    var todo = {
      list: ["Study JavaScript"],
      init: function () {
        this.cacheDom();
        this.bindEvent();
        this.render();
      },
      cacheDom: function () {
        this.$div = $('div .list');
        this.$input = this.$div.find('input');
        this.$button = this.$div.find('button');
        this.$checked = this.$div.find('span');
        this.$ul = this.$div.find('#list-display');
        this.$template = this.$div.find('#list-template').html();
      },
      bindEvent: function () {
        this.$button.on('click', this.addItem.bind(this));
        this.$ul.delegate('.fa','click', this.deletItem.bind(this));
        this.$ul.delegate('.check','click', this.clearItem.bind(this));
      },
      render: function () {
        var data = {
          list: this.list
        };
        this.$ul.html(Mustache.render(this.$template,data));
      },
      addItem: function (e) {
        if(this.$input.val()){
          this.list.push(this.$input.val());
        } else{
          this.$input.attr('placeholder','You forgot to add a To-Do');
          setTimeout(function () {
            $('input').attr('placeholder','Add a To-Do . . .');
          }, 3000);
        }
        this.render();
        this.$input.val('');
      },
      deletItem: function (e) {
        var $remove = $(e.target).closest("li");
        var i = this.$ul.find('li').index($remove);

        this.list.splice(i,1);
        this.render();
      },
      clearItem: function (e) {
        $(e.target).toggleClass('checked');
        $(e.target).closest('li').toggleClass('cancel');
      }
    };
    todo.init();
  })();

});
