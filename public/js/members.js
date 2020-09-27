$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $("#mood1").hover(
    function() {
      const $this = $(this); // caching $(this)
      $this.data("defaultText", $this.text());
      $this.html("<i class='fas fa-sad-cry'></i>");
    },
    function() {
      const $this = $(this); // caching $(this)
      $this.text($this.data("defaultText"));
    }
  );
  $("#mood2").hover(
    function() {
      const $this = $(this); // caching $(this)
      $this.data("defaultText", $this.text());
      $this.html("<i class='fas fa-grimace'></i>");
    },
    function() {
      const $this = $(this); // caching $(this)
      $this.text($this.data("defaultText"));
    }
  );
  $("#mood3").hover(
    function() {
      const $this = $(this); // caching $(this)
      $this.data("defaultText", $this.text());
      $this.html("<i class='fas fa-meh'></i>");
    },
    function() {
      const $this = $(this); // caching $(this)
      $this.text($this.data("defaultText"));
    }
  );
  $("#mood4").hover(
    function() {
      const $this = $(this); // caching $(this)
      $this.data("defaultText", $this.text());
      $this.html("<i class='fas fa-smile'></i>");
    },
    function() {
      const $this = $(this); // caching $(this)
      $this.text($this.data("defaultText"));
    }
  );
  $("#mood5").hover(
    function() {
      const $this = $(this); // caching $(this)
      $this.data("defaultText", $this.text());
      $this.html("<i class='fas fa-laugh-beam'></i>");
    },
    function() {
      const $this = $(this); // caching $(this)
      $this.text($this.data("defaultText"));
    }
  );
});

// Captures Mood Button Values on Click
$(".mood").on("click", function() {
  const userMood = $(this).val();
  $("#mood").val(userMood);
  console.log($("#mood").val());
});

// when i submit, i want to send userMood, soberYN, and textValue to checkIn object with key value pairs
$(".submit").on("click", () => {
  let soberYN = false;
  if ($("#soberYN").is(":checked")) {
    soberYN = true;
  }
  checkIn = {
    // date:
    feeling: $("#mood").val(),
    body: $("#checkInText").val(),
    hiccup: soberYN
  };
});