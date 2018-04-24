// collapse
$(".panel-collapse").on("show.bs.collapse", function() {
  $(this)
    .siblings(".title-box")
    .addClass("active");
});

$(".panel-collapse").on("hide.bs.collapse", function() {
  $(this)
    .siblings(".title-box")
    .removeClass("active");
});

// data
$.ajax({
  dataType: "json",
  url: "http://design.propcom.co.uk/buildtest/accordion-data.json",
  success: function(data) {
    $.each(data, function(i, item) {
      for (let i = 0; i < data.blocks.length; i++) {
        const element = data.blocks[i];
        var $title = $(".title-text-data")[i];
        var $content = $(".title-text-content")[i];

        $title.append(data.blocks[i].heading);
        $content.append(data.blocks[i].content);
      }
    });
  }
});
