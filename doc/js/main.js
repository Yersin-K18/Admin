(function () {
	"use strict";

	var treeviewMenu = $('.app-menu');

	// Toggle Sidebar
	$('[data-toggle="sidebar"]').click(function(event) {
		event.preventDefault();
		$('.app').toggleClass('sidenav-toggled');
	});

	// Activate sidebar treeview toggle
	$("[data-toggle='treeview']").click(function(event) {
		event.preventDefault();
		if(!$(this).parent().hasClass('is-expanded')) {
			treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
		}
		$(this).parent().toggleClass('is-expanded');
	});

	// Set initial active toggle
	$("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

	//Activate bootstrip tooltips
	$("[data-toggle='tooltip']").tooltip();

})();
function readURL(input, thumbimage) {
	if (input.files && input.files[0]) { //Sử dụng  cho Firefox - chrome
	  var reader = new FileReader();
	  reader.onload = function (e) {
		$("#thumbimage").attr('src', e.target.result);
	  }
	  reader.readAsDataURL(input.files[0]);
	}
	else { // Sử dụng cho IE
	  $("#thumbimage").attr('src', input.value);

	}
	$("#thumbimage").show();
	$('.filename').text($("#uploadfile").val());
	$('.Choicefile').css('background', '#14142B');
	$('.Choicefile').css('cursor', 'default');
	$(".removeimg").show();
	$(".Choicefile").unbind('click');

  }
  $(document).ready(function () {
	$(".Choicefile").bind('click', function () {
	  $("#uploadfile").click();

	});
	$(".removeimg").click(function () {
	  $("#thumbimage").attr('src', '').hide();
	  $("#myfileupload").html('<input type="file" id="uploadfile"  onchange="readURL(this);" />');
	  $(".removeimg").hide();
	  $(".Choicefile").bind('click', function () {
		$("#uploadfile").click();
	  });
	  $('.Choicefile').css('background', '#14142B');
	  $('.Choicefile').css('cursor', 'pointer');
	  $(".filename").text("");
	});
  })
  function readURL(input, thumbimage) {
	if (input.files && input.files[0]) { //Sử dụng  cho Firefox - chrome
	  var reader = new FileReader();
	  reader.onload = function (e) {
		$("#thumbimage").attr('src', e.target.result);
	  }
	  reader.readAsDataURL(input.files[0]);
	}
	else { // Sử dụng cho IE
	  $("#thumbimage").attr('src', input.value);

	}
	$("#thumbimage").show();
	$('.filename').text($("#uploadfile").val());
	$('.Choicefile').css('background', '#14142B');
	$('.Choicefile').css('cursor', 'default');
	$(".removeimg").show();
	$(".Choicefile").unbind('click');

  }
  $(document).ready(function () {
	$(".Choicefile").bind('click', function () {
	  $("#uploadfile").click();

	});
	$(".removeimg").click(function () {
	  $("#thumbimage").attr('src', '').hide();
	  $("#myfileupload").html('<input type="file" id="uploadfile"  onchange="readURL(this);" />');
	  $(".removeimg").hide();
	  $(".Choicefile").bind('click', function () {
		$("#uploadfile").click();
	  });
	  $('.Choicefile').css('background', '#14142B');
	  $('.Choicefile').css('cursor', 'pointer');
	  $(".filename").text("");
	});
  })
  const inpFile = document.getElementById("inpFile");
    const loadFile = document.getElementById("loadFile");
    const previewContainer = document.getElementById("imagePreview");
    const previewContainer = document.getElementById("imagePreview");
    const previewImage = previewContainer.querySelector(".image-preview__image");
    const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");
    inpFile.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";
        reader.addEventListener("load", function () {
          previewImage.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
      }
    });
	function time() {
		var today = new Date();
		var weekday = new Array(7);
		weekday[0] = "Chủ Nhật";
		weekday[1] = "Thứ Hai";
		weekday[2] = "Thứ Ba";
		weekday[3] = "Thứ Tư";
		weekday[4] = "Thứ Năm";
		weekday[5] = "Thứ Sáu";
		weekday[6] = "Thứ Bảy";
		var day = weekday[today.getDay()];
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
		nowTime = h + " giờ " + m + " phút " + s + " giây";
		if (dd < 10) {
		  dd = '0' + dd
		}
		if (mm < 10) {
		  mm = '0' + mm
		}
		today = day + ', ' + dd + '/' + mm + '/' + yyyy;
		tmp = '<span class="date"> ' + today + ' - ' + nowTime +
		  '</span>';
		document.getElementById("clock").innerHTML = tmp;
		clocktime = setTimeout("time()", "1000", "Javascript");
  
		function checkTime(i) {
		  if (i < 10) {
			i = "0" + i;
		  }
		  return i;
		}
	  }
	  var data = {
		labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
		datasets: [{
		  label: "Dữ liệu đầu tiên",
		  fillColor: "rgba(255, 213, 59, 0.767), 212, 59)",
		  strokeColor: "rgb(255, 212, 59)",
		  pointColor: "rgb(255, 212, 59)",
		  pointStrokeColor: "rgb(255, 212, 59)",
		  pointHighlightFill: "rgb(255, 212, 59)",
		  pointHighlightStroke: "rgb(255, 212, 59)",
		  data: [20, 59, 90, 51, 56, 100]
		},
		{
		  label: "Dữ liệu kế tiếp",
		  fillColor: "rgba(9, 109, 239, 0.651)  ",
		  pointColor: "rgb(9, 109, 239)",
		  strokeColor: "rgb(9, 109, 239)",
		  pointStrokeColor: "rgb(9, 109, 239)",
		  pointHighlightFill: "rgb(9, 109, 239)",
		  pointHighlightStroke: "rgb(9, 109, 239)",
		  data: [48, 48, 49, 39, 86, 10]
		}
		]
	  };
