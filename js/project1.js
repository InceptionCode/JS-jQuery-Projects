$(document).ready(function(){
  (function (){
  var url = "https://peoplejquery.firebaseio.com/people/";
    var people = {
      people: [],
      init: function () {
        this.cacheDom();
        this.bindEvent();
        this.render();
      },
      axios:axios.get(url + ".json")
        .then(result => {
          var array=people.people;
          for(let id in result.data) {
            var person= {id, text: result.data[id].text};
            array.push(person);
          }
          people.render();
        }, err => {
          console.log(err);
        }),
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
        var person = this.people.map(p => p.text);
        var data = {
          people: person
        };
        this.$ul.html(Mustache.render(this.template, data));
      },
      addPerson: function () {
        const text = this.$input.val();
        const people = this.people;

        axios.post(url + '.json',{text})
        .then(result => {
          people.push({text});
          this.render();
          this.$input.val('');
        }, err => {
          console.log(err);
        });
      },
      deletePerson: function (e) {
        var $remove = $(e.target).closest('li');
        var i = this.$ul.find('li').index($remove);
        var people = this.people;

        axios.put(url + ".json",people)
        .then(result => {
          people.splice(i,1); //Removes the name from the array.
        }, err => {
          console.log(err);
        });
        this.render(); //Once you re-render the name should be out of the HTML document.
      }
    };
    people.init();
  })()
});
