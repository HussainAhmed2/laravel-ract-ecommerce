jQuery(document).ready(function ($) {

    var ps = {};
    var csrf = $('meta[name="csrf-token"]').attr('content');

    var swald = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-info',
          cancelButton: 'btn btn-warning'
        },
        buttonsStyling: false
      })

  var axiosd = axios.create({
    timeout: 10000, //10seconds default timeout for all requests
    headers: {
        'X-XSRF-TOKEN':csrf,
        "X-Requested-With": "XMLHttpRequest",
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json'
    }
  });

  var index_records_selected = 0;

  if ($(".table-responsive").length) {

    $(".table-responsive").each(function(index, obj){

        ps = new PerfectScrollbar(obj);
    })

    console.log($(".table-responsive").length)

  }

  $('#pills-tab a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab

    if ($(".table-responsive").length) {

        $(".table-responsive").each(function(index, obj){

            ps = new PerfectScrollbar(obj);
        })

        console.log($(".table-responsive").length)

      }

  })



  function initOrdersChart(year) {

    var ordersChartCanvas = $("#ordersChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.

    axiosd
        .get('./orders-chart?year=' + year)
               .then(function(response) {

                   if (response.data && response.status == 200) {

                      console.log('orders data', response);


                      var myChart = new Chart(ordersChartCanvas, {
                        type: 'bar',
                        data: {
                          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                          datasets: [{
                            label: 'YEARLY ORDERS SUMMARY',
                            //data: [12, 19, 3, 5, 2, 3, 4, 7, 10, 25, 35, 23],
                            data: response.data,
                            backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 206, 86, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(153, 102, 255, 0.2)',
                              'rgba(255, 159, 64, 0.2)',
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 206, 86, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(153, 102, 255, 0.2)',
                              'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                              'rgba(255, 99, 132, 1)',
                              'rgba(54, 162, 235, 1)',
                              'rgba(255, 206, 86, 1)',
                              'rgba(75, 192, 192, 1)',
                              'rgba(153, 102, 255, 1)',
                              'rgba(255, 159, 64, 1)',
                              'rgba(255, 99, 132, 1)',
                              'rgba(54, 162, 235, 1)',
                              'rgba(255, 206, 86, 1)',
                              'rgba(75, 192, 192, 1)',
                              'rgba(153, 102, 255, 1)',
                              'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 2
                          }]
                        },
                        options: {
                          responsive: true,
                          title: {
                            display: false,
                            text: '<h6></h6>'
                          },
                          scales: {
                            yAxes: [{
                              ticks: {
                                beginAtZero: true,
                                stepSize: 1,
                              }
                            }]
                          }
                        }
                      });

                   }


               })
               .catch(function(error) {
                   console.log(error);
               });


  }

  if ($("#ordersChart").length) {
    initOrdersChart(new Date().getFullYear());
  }

  $('.year-orders-menu > a').on('click', function(e) {

    e.preventDefault();

    $('#year-orders-toggle').text($(this).data('year'));

    initOrdersChart($(this).data('year'));
  })





  if ($("#progress-user-overview").length) {
    var progress_profile_percent = $("#progress-user-overview").data('profile-progress');
    var bar = new ProgressBar.Circle("#progress-user-overview", {
      color: '#000',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 7,
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 2400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#FF4747', width: 2 },
      to: { color: '#50E3C2', width: 7 },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var progress_circle = Math.round(circle.value() * 100);
        if (progress_circle === 0) {
          circle.setText('0%');
        } else {
          circle.setText(progress_circle + '%');
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate( (progress_profile_percent / 100) , function () {
      $('#progress-user-overview').addClass('compact');
      $('.profile-completion-checks').addClass('active');
    });  // Number from 0.0 to 1.0
  }




  if ($("#north-america-chart").length) {
    var areaData = {
      labels: ["Jan", "Feb", "Mar"],
      datasets: [{
        data: [100, 50, 50],
        backgroundColor: [
          "#4B49AC", "#FFC100", "#248AFD",
        ],
        borderColor: "rgba(0,0,0,0)"
      }
      ]
    };
    var areaOptions = {
      responsive: true,
      maintainAspectRatio: true,
      segmentShowStroke: false,
      cutoutPercentage: 78,
      elements: {
        arc: {
          borderWidth: 4
        }
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: true
      },
      legendCallback: function (chart) {
        var text = [];
        text.push('<div class="report-chart">');
        text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Offline sales</p></div>');
        text.push('<p class="mb-0">88333</p>');
        text.push('</div>');
        text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Online sales</p></div>');
        text.push('<p class="mb-0">66093</p>');
        text.push('</div>');
        text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[2] + '"></div><p class="mb-0">Returns</p></div>');
        text.push('<p class="mb-0">39836</p>');
        text.push('</div>');
        text.push('</div>');
        return text.join("");
      },
    }
    var northAmericaChartPlugins = {
      beforeDraw: function (chart) {
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

        ctx.restore();
        var fontSize = 3.125;
        ctx.font = "500 " + fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#13381B";

        var text = "90",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
    var northAmericaChartCanvas = $("#north-america-chart").get(0).getContext("2d");
    var northAmericaChart = new Chart(northAmericaChartCanvas, {
      type: 'doughnut',
      data: areaData,
      options: areaOptions,
      plugins: northAmericaChartPlugins
    });
    document.getElementById('north-america-legend').innerHTML = northAmericaChart.generateLegend();
  }



   //Check Records
   $(document).on('click', '#master',  function(e) {
       if ($(this).is(':checked', true)) {
           $(".sub_chk").prop('checked', true);
       } else {
           $(".sub_chk").prop('checked', false);
       }

       index_records_selected = $(".sub_chk:checked").length;
       if(index_records_selected > 0){
        $('.selected-records-count').html(index_records_selected + " records selected");
       }
       else{
        $('.selected-records-count').html(0 + " records selected");
    }

   });


   $(document).on('click', '.sub_chk',  function(e) {


    index_records_selected = $(".sub_chk:checked").length;
    if(index_records_selected > 0){
        $('.selected-records-count').html(index_records_selected + " records selected");
       }
    else{
        $('.selected-records-count').html(0 + " records selected");
    }

});


   //Delete Multiple Records
   $('#delete').on('click', function() {
       var allVals = [];
       $('.sub_chk:checked').each(function() {
           allVals.push($(this).attr('data-id'));
       });
       if (allVals.length <= 0) {

           swald.fire('Please select atleast one');
       } else {
           swald.fire({
               title: 'Are you sure?'
               , text: "You won't be able to revert this!"
               , type: 'warning'
               , showCancelButton: true
               , confirmButtonText: 'Yes, delete it!'
           }).then(function(result) {
               if (result.value) {

                   var join_selected_values = allVals.join(",");

                   axiosd
                       .post('./users/destroy', {
                           _method: 'DELETE'
                           , _token: $('meta[name="csrf-token"]').attr('content')
                           , id: join_selected_values
                       , })
                       .then(function(response) {
                           if (response.data) {
                               console.log(response);
                               $(".sub_chk:checked").each(function() {

                                //$(this) is representing the check(ed)box row
                                   $(this).parents("tr").remove();
                               });
                               swald.fire(
                                   'Deleted!'
                                   , 'Users has been deleted.'
                                   , 'success'
                               )
                           }
                       })
                       .catch(function(error) {
                           console.log(error);
                           swald.fire(
                               'Failed!'
                               , error.response.data.error
                               , 'error'
                           )
                       });
               }
           })
       }
   });

   //Change Status
   //Active Multiple Records Status
   $('#active').on('click', function() {
       var allVals = [];
       $('.sub_chk:checked').each(function() {
           allVals.push($(this).attr('data-id'));
       });

       if (allVals.length <= 0) {

           swald.fire('Please select atleast one')
       } else {

           var join_selected_values = allVals.join(",");

           axiosd
               .post('{{route("users.active")}}', {
                   _method: 'patch'
                   , _token: '{{csrf_token()}}'
                   , ids: join_selected_values
               , })
               .then(function(response) {

                   if (response.data) {

                       var msg = document.getElementById('msg');
                       msg.className = 'alert alert-info';
                       msg.innerHTML = `<button data-dismiss="alert" class="close"></button>
                       <strong>Message!</strong><br>`;
                       msg.appendChild(document.createTextNode(response.data.message));

                       setTimeout(() => {
                           location.reload(true);
                       }, 1000);
                   }


               })
               .catch(function(error) {
                   console.log(error);
               });
       }
   });

   //Inactive Multiple Records Status
   $('#inactive').on('click', function() {
       var allVals = [];
       $('.sub_chk:checked').each(function() {
           allVals.push($(this).attr('data-id'));
       });

       if (allVals.length <= 0) {

           swald.fire('Please select atleast one')
       } else {

           var join_selected_values = allVals.join(",");

           axiosd
               .post('{{route("users.inactive")}}', {
                   _method: 'patch'
                   , _token: '{{csrf_token()}}'
                   , ids: join_selected_values
               , })
               .then(function(response) {
                   if (response.data) {
                       var msg = document.getElementById('msg');
                       msg.className = 'alert alert-info';
                       msg.innerHTML = `<button data-dismiss="alert" class="close"></button>
                           <strong>Message!</strong><br>`;
                       msg.appendChild(document.createTextNode(response.data.message));

                       setTimeout(() => {
                           location.reload(true);
                       }, 1000);
                   }
               })
               .catch(function(error) {
                   console.log(error);
               });
       }
   });

   if($('#user-average-rating-show').length){
    var currentRating = $('#user-average-rating-show').data('current-rating');
    $('#user-average-rating-show').barrating({
        theme: 'fontawesome-stars-o',
        initialRating: currentRating,
        readonly: 'true'
      });
   }


});
