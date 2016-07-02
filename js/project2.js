$(document).ready(function () {
  (function (){
    // Main array
    var contacts = ["Darrell: 678-364-2397"];
    //Cache Dom
    var $div = $('#contacts-section'),
        $input = $div.find('#add-contact'),
        $filter = $div.find('#filter'),
        $button = $div.find('button'),
        $ul = $div.find('ul'),
        $template = $div.find('#contacts-template').html();
    //Events
      $ul.delegate('.fa','click',deleteContact);
      $button.on('click', addContact);
      $filter.on('keypress',filter);
    //render
    function render() {
      var data = {
        contacts: contacts
      };
      $ul.html(Mustache.render($template,data));
    }
    render();
    //Interactions & Behaviors
    function deleteContact(e) {
      var $remove = $(e.target).closest('li');
      var i = $ul.find('li').index($remove);
      contacts.splice(i,1); //Removes the name from the array.
      render(); //Once you re-render the name should be out of the HTML document.
    }
    function addContact() {
      contacts.push($input.val());
      $input.val('');
      render();
    }
    function filter (e) {
       contacts = $.grep(contacts, function(value, index) {
          console.log(contacts);
          return value.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
      });
      render();
    }
  })();
})
