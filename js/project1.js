$(document).ready(function(){
  (function (){

    var people = {
      people: ["Darrell Washington"],
      init: function () {
        this.cacheDom();
        this.bindEvent();
        this.render();
      },
      cacheDom: function () {
        this.$div = $('.container');
        this.$button = this.$div.find('button');
        this.$input = this.$div.find('input');
        this.$ul = this.$div.find('ul');
        this.template = this.$div.find('#people-template').html();
      },
      bindEvent: function () {
        this.$button.on('click', this.addPerson.bind(this));
        this.$ul.delegate('.fa','click', this.deletePerson.bind(this));
      },
      render: function () {
        var data = {
          people: this.people,
        };
        this.$ul.html(Mustache.render(this.template, data));
      },
      addPerson: function () {
        this.people.push(this.$input.val());
        this.render();
        this.$input.val('');
      },
      deletePerson: function (e) {
        var $remove = $(e.target).closest('li');
        var i = this.$ul.find('li').index($remove);

        this.people.splice(i,1); //Removes the name from the array.
        this.render(); //Once you re-render the name should be out of the HTML document.
      }
    };
    people.init();
  })()
});
