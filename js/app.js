function Unicorn (name, area) {
  this.name = name;
  this.area = area;
}

var unicornArr = [];

unicornArr.push(new Unicorn("Sparkle", "pasture"));
unicornArr.push(new Unicorn("Glitter", "pasture"));
unicornArr.push(new Unicorn("Liz Taylor", "pasture"));

for (var i = 0; i < unicornArr.length; i++) {

var listEl = $($(this).attr("pasture"));
$("#pasture").append("<li>" + unicornArr[i].name + "</li>");

  $(function() {
    $("#pasture").on("click", "li", function() {
      $(this).appendTo("#corral");
      });

    $("#corral").on("click", "li", function() {
      $(this).appendTo("#pasture");
    });
  });

}
