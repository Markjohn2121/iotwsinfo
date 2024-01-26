$(document).ready(function() {
  
  
 // https://github.com/Markjohn2121/iotwsinfo/tree/8e70341b06ead831d6ee15d3bbf0fe8ab66d7267/bannerImage
  
  
  
  // Load banner images dynamically
  // var bannerContainer = $('#banner .carousel-inner');
  // $.ajax({
  //   url: 'iotwsinfo/bannerImage/', // Assuming this is the path to your banner images folder
  //   success: function(data) {
  //     $(data).find("a:contains('.jpg')").each(function() {
  //       var image = $(this).attr("href");
        
  //       var imgTag = `<div class="carousel-item"><img src="${image}" class="d-block w-100" alt="Banner Image"></div>`;
  //       bannerContainer.append(imgTag);
  //     });
  //     // Set the first image as active
  //     bannerContainer.find('.carousel-item:first').addClass('active');
  //   }
  // });

  // Load screenshots images dynamically
  var screenshotsContainer = $('#screenshots .carousel-inner');
  $.ajax({
    url: 'https://github.com/Markjohn2121/iotwsinfo/tree/WebDev-softwareDev/bannerImage/', // Assuming this is the path to your screenshots images folder
    success: function(data) {
      $(data).find("a:contains('.jpg')").each(function() {
        var image = $(this).attr("href");
        console.log(image)
        var imgTag = `<div class="carousel-item"><img src="${image}" class="d-block w-100" alt="Screenshot"></div>`;
        screenshotsContainer.append(imgTag);
      });
      // Set the first image as active
      screenshotsContainer.find('.carousel-item:first').addClass('active');
    }
  });

  // Load developer information dynamically
  var developersContainer = $('#developer .developer-container');
  $.ajax({
    url: 'iotinfo/developerImage/', // Assuming this is the path to your developers' images folder
    success: function(data) {
      $(data).find("a:contains('.jpg')").each(function() {
        var image = $(this).attr("href");
        var developer = {
          name: image.replace('.jpg', ''),
          role: 'Developer',
          image: "developerImage/official.jpg"
        };

        var im = developer.image;
        console.log(im);
        var imgTag = `<div class="developer-card">
                          <img src="developerImage/official.jpg" class="img-fluid rounded-circle" alt="${developer.name}">
                          <h5>${developer.name}</h5>
                          <p>${developer.role}</p>
                        </div>`;
        developersContainer.append(imgTag);
        console.log(developer.image);
      });
    }

  });

  // Enable carousel for screenshots
  $('#screenshots .carousel').carousel({
    interval: false, // Disable automatic cycling
  });

  // JavaScript to show/hide content based on navigation tabs
  $(".nav-link").on("click", function() {
    var targetSection = $(this).attr("href");
    $(".container").hide();
    $(targetSection).show();
  });
});


