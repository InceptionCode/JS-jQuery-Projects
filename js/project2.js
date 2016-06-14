$(document).ready(function () {
  (function (){
    var contacts = {
      contacts: ["Darrell: 678-364-2397"],
      init: function () {
        this.cacheDom ();
        this.bindEvent();
        this.render();
      },
      cacheDom: function () {
        this.$div = $('#contacts-section');
        this.$input = this.$div.find('#add-contact');
        this.$filter = this.$div.find('#filter');
        this.$button = this.$div.find('button');
        this.$ul = this.$div.find('ul');
        this.$template = this.$div.find('#contacts-template').html();
      },
      bindEvent: function () {
        this.$ul.delegate('.fa','click',this.deleteContact.bind(this));
        this.$button.on('click', this.addContact.bind(this));
        this.$filter.on('keypress',this.filter.bind(this));
      },
      render: function () {
        var data = {
          contacts: this.contacts
        };
        this.$ul.html(Mustache.render(this.$template,data));
      },
      deleteContact: function (e) {
        var $remove = $(e.target).closest('li');
        var i = this.$ul.find('li').index($remove);

        this.contacts.splice(i,1); //Removes the name from the array.
        this.render(); //Once you re-render the name should be out of the HTML document.
      },
      addContact: function () {
        this.contacts.push(this.$input.val());
        this.$input.val('');
        this.render();
      },
      filter: function (e) {
         contacts.contacts = $.grep(contacts.contacts, function(value, index) {
            console.log(contacts.contacts);
            return value.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
        });
        this.render();
      }
    };
    contacts.init();
  })();



})
