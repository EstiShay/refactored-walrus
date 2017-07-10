$(document).ready(function() {
    var h1Tag = "header"
    var pTag = "paragraph"
    var imgTag = "image"

    var tags = ["h1", "p", "img"]
    var tagMeanings = ["header", "paragraph", "image"]

    tags.forEach(function(tag) {
      $(tag).click(function() {
        index = tags.indexOf(tag);
        alert("This is a " + tagMeanings[index]);
      });
    });
  });

  //  $("h1").click(function() {
  //    alert("This is a header.");
  //  });
  //  $("p").click(function() {
  //    alert("This is a paragraph.");
  //  });
  //  $("img").click(function() {
  //    alert("This is an image.");
  //  });
  // });
