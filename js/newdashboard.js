if ($(window).width() > 739) {
    //javascript for large screens here 
    //
    'use strict';
    var Navigation = function() {
        function Navigation() {
            this.navItem = $('.side-navigation li');
            this.categoryItem = $('.category-navigation li');
            this.activeItem(this.navItem);
            this.activeItem(this.categoryItem);
        }
        Navigation.prototype.activeItem = function(elem) {
            elem.click(function(event) {
                event.preventDefault();
                elem.removeClass('active');
                $(event.currentTarget).addClass('active');
            });
        };
        return Navigation;
    }();
    var Tabs = function() {
        function Tabs() {
            this.tab = $('.card .tabs li');
            this.changeTab();
        }
        Tabs.prototype.changeTab = function() {
            this.tab.click(function(event) {
                var tab = $(event.currentTarget);
                var tabId = tab.attr('data-tab');
                tab.addClass('active');
                tab.siblings().removeClass('active');
                $('.card .content[data-content=' + tabId + ']').siblings().removeClass('visible');
                $('.card .content[data-content=' + tabId + ']').addClass('visible');
            });
        };
        return Tabs;
    }();
    var Collapse = function() {
        function Collapse() {
            this.collapse();
        }
        Collapse.prototype.collapse = function() {
            $('.hidden-content').slideUp('fast');
            $('.show-more').click(function(event) {
                var target = $(event.currentTarget),
                    less = target.attr('data-less'),
                    more = target.attr('data-more');
                if (target.hasClass('active')) {
                    target.removeClass('active');
                    $('span', target).text(more);
                    $('.fa', target).removeClass().addClass('fa fa-chevron-down');
                    target.prev('.hidden-content').slideUp(250);
                } else {
                    target.addClass('active');
                    $('span', target).text(less);
                    $('.fa', target).removeClass().addClass('fa fa-chevron-up');
                    target.prev('.hidden-content').slideDown(250);
                }
            });
        };
        return Collapse;
    }();
    var Graphs = function() {
        function Graphs() {
            this.graph = $('.graph');
            this.setGraphValue();
        }
        Graphs.prototype.setGraphValue = function() {
            this.graph.each(function(i, element) {
                var graph = $(element),
                    margin = graph.parents('.experience-graphs').length ? 0 : 13,
                    bar = $('.bar', graph),
                    barText = graph.attr('data-text'),
                    value = $('.value', graph),
                    parentHeight = graph.parent().innerHeight() - margin,
                    barValue = parseInt(graph.attr('data-value')),
                    barHeight = parentHeight * (barValue / 100);
                bar.text(barText);
                value.css({
                    height: barHeight + 'px'
                });
                bar.css({
                    bottom: barHeight - 1 + 'px'
                });
            });
        };
        return Graphs;
    }();
    new Navigation();
    new Tabs();
    new Collapse();
    new Graphs();
    //counts up or down depending on date entered in //format at the bottom
    function counter(date) {
        var theDate = new Date(date);
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function count() {
            var now = new Date();
            if (theDate > now) {
                var distance = theDate - now;
                if (distance < 0) {
                    clearInterval(timer);
                    return;
                }
            } else {
                var distance = now - theDate;
                if (distance < 0) {
                    clearInterval(timer);
                    return;
                }
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            if (hours < 10) {
                hours = '0' + hours;
            }
            var minutes = Math.floor((distance % _hour) / _minute);
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var seconds = Math.floor((distance % _minute) / _second);
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            var daytext = '';
            if (days > 1) {
                daytext = ' days ';
            } else {
                daytext = ' day ';
            }
            if (days > 0) {
                document.getElementById('counter').innerHTML = '<p class="fall">Your account exp in:</p>' +
                    '<span class="days">' + days + '</span>' + '<i> : </i>' + '<span class="hours">' + hours +
                    '</span>' + '<i> : </i>' + '<span class="minutes">' + minutes + '</span>' + '<i> : </i>' +
                    '<span class="seconds">' + seconds + '</span>';
            } else {
                document.getElementById('counter').innerHTML = '<p class="fall">Your account exp in:</p>' +
                    '<span class="hours">' + hours + '</span>' + '<i> : </i>' + '<span class="minutes">' + minutes +
                    '</span>' + '<i> : </i>' + '<span class="seconds">' + seconds + '</span>';
            }
        }
        timer = setInterval(count, 1000);
    }
    counter('01/01/2017 1:00:00 GMT-0400 (EDT)');






} else {
    //javascript for small screens here 

    'use strict';
    var Navigation = function() {
        function Navigation() {
            this.navItem = $('.side-navigation li');
            this.categoryItem = $('.category-navigation li');
            this.activeItem(this.navItem);
            this.activeItem(this.categoryItem);
        }
        Navigation.prototype.activeItem = function(elem) {
            elem.click(function(event) {
                event.preventDefault();
                elem.removeClass('active');
                $(event.currentTarget).addClass('active');
            });
        };
        return Navigation;
    }();
    var Tabs = function() {
        function Tabs() {
            this.tab = $('.card .tabs li');
            this.changeTab();
        }
        Tabs.prototype.changeTab = function() {
            this.tab.click(function(event) {
                var tab = $(event.currentTarget);
                var tabId = tab.attr('data-tab');
                tab.addClass('active');
                tab.siblings().removeClass('active');
                $('.card .content[data-content=' + tabId + ']').siblings().removeClass('visible');
                $('.card .content[data-content=' + tabId + ']').addClass('visible');
            });
        };
        return Tabs;
    }();
    var Collapse = function() {
        function Collapse() {
            this.collapse();
        }
        Collapse.prototype.collapse = function() {
            $('.hidden-content').slideUp('fast');
            $('.show-more').click(function(event) {
                var target = $(event.currentTarget),
                    less = target.attr('data-less'),
                    more = target.attr('data-more');
                if (target.hasClass('active')) {
                    target.removeClass('active');
                    $('span', target).text(more);
                    $('.fa', target).removeClass().addClass('fa fa-chevron-down');
                    target.prev('.hidden-content').slideUp(250);
                } else {
                    target.addClass('active');
                    $('span', target).text(less);
                    $('.fa', target).removeClass().addClass('fa fa-chevron-up');
                    target.prev('.hidden-content').slideDown(250);
                }
            });
        };
        return Collapse;
    }();
    var Graphs = function() {
        function Graphs() {
            this.graph = $('.graph');
            this.setGraphValue();
        }
        Graphs.prototype.setGraphValue = function() {
            this.graph.each(function(i, element) {
                var graph = $(element),
                    margin = graph.parents('.experience-graphs').length ? 0 : 13,
                    bar = $('.bar', graph),
                    barText = graph.attr('data-text'),
                    value = $('.value', graph),
                    parentHeight = graph.parent().innerHeight() - margin,
                    barValue = parseInt(graph.attr('data-value')),
                    barHeight = parentHeight * (barValue / 100);
                bar.text(barText);
                value.css({
                    height: barHeight + 'px'
                });
                bar.css({
                    bottom: barHeight - 1 + 'px'
                });
            });
        };
        return Graphs;
    }();
    new Navigation();
    new Tabs();
    new Collapse();
    new Graphs();
    //counts up or down depending on date entered in //format at the bottom
    function counter(date) {
        var theDate = new Date(date);
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function count() {
            var now = new Date();
            if (theDate > now) {
                var distance = theDate - now;
                if (distance < 0) {
                    clearInterval(timer);
                    return;
                }
            } else {
                var distance = now - theDate;
                if (distance < 0) {
                    clearInterval(timer);
                    return;
                }
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            if (hours < 10) {
                hours = '0' + hours;
            }
            var minutes = Math.floor((distance % _hour) / _minute);
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var seconds = Math.floor((distance % _minute) / _second);
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            var daytext = '';
            if (days > 1) {
                daytext = ' days ';
            } else {
                daytext = ' day ';
            }
            if (days > 0) {
                document.getElementById('counter').innerHTML =
                    '<p class="fall">Your account exp in:</p>' + '<span class="days">' + days +
                    '<p class="name">days</p>' + '</span>' + '<i> : </i>' + '<span class="hours">' + hours +
                    '<p class="name">hours</p>' + '</span>' + '</span>' + '<i> : </i>' + '<span class="minutes">' + minutes +
                    '<p class="name">minutes</p>' + '</span>' + '</span>' + '<i> : </i>' + '<span class="seconds">' + seconds +
                    '<p class="name">seconds</p>' + '</span>' + '</span>';
            } else {
                document.getElementById('counter').innerHTML =
                    '<p class="fall">Your account exp in:</p>' + '<span class="hours">' + hours +
                    '<p class="name">hours</p>' + '</span>' + '<i> : </i>' + '<span class="minutes">' + minutes +
                    '<p class="name">minutes</p>' + '</span>' + '<i> : </i>' + '<span class="seconds">' + seconds +
                    '<p class="name">seconds</p>' + '</span>';
            }
        }
        timer = setInterval(count, 1000);
    }
    counter('01/01/2017 1:00:00 GMT-0400 (EDT)');
    // end of small screen code

}


// json data

$(document).ready(function() {

    var options = {
        chart: {
            renderTo: 'container1',
            type: 'spline'
        },
        title: {
                    text: 'Rainfall drop'
                },
        series: [{}],
        navigation: {
            buttonOptions: {
                enabled: true
            }
        }

    };

    $.getJSON('data.json', function(data) {
        options.series[0].data = data;
        var chart = new Highcharts.Chart(options);
    });

 // Column chart
options.chart.renderTo = 'container1';
options.chart.type = 'spline';
var chart1 = new Highcharts.Chart(options);

chartfunc = function()
{
var column = document.getElementById('column');
var bar = document.getElementById('bar');
var pie = document.getElementById('pie');
var line = document.getElementById('line');

        
if(column.checked)
    {
        
        options.chart.renderTo = 'container1';
        options.chart.type = 'column';
        var chart1 = new Highcharts.Chart(options);
    }
else if(bar.checked)
    {
        options.chart.renderTo = 'container1';
        options.chart.type = 'bar';
        var chart1 = new Highcharts.Chart(options);
    }
else if(pie.checked)
    {
        options.chart.renderTo = 'container1';
        options.chart.type = 'pie';
        var chart1 = new Highcharts.Chart(options);
    }
else
    {
        options.chart.renderTo = 'container1';
        options.chart.type = 'spline';
        var chart1 = new Highcharts.Chart(options);
    }

}

$('#change_chart_title').click(function(){
    options.title.text = $('#chart_title').val();
    var chart1 = new Highcharts.Chart(options);
});
    


});


// csv data

$(document).ready(function() {
            
            var options = {
                chart: {
                    renderTo: 'container',
                    type: 'bar'
                },
                title: {
                    text: 'Fruit Consumption'
                },
                xAxis: {
                    Categories: [{}],
                },
                 xAxis: {
                    categories: []
                },
                yAxis: {
                    title: {
                        text: 'Units'
                    }
                },
                series: [],
                navigation: {
                    buttonOptions: {
                        enabled: true
                    }
                }
            };
        
            $.get('data.csv', function(data) {
                // Split the lines
                var lines = data.split('\n');
                $.each(lines, function(lineNo, line) {
                    var items = line.split(',');
                    
                    // header line containes categories
                    if (lineNo == 0) {
                        $.each(items, function(itemNo, item) {
                            if (itemNo > 0) options.xAxis.categories.push(item);
                        });
                    }
                    
                    // the rest of the lines contain data with their name in the first position
                    else {
                        var series = { 
                            data: []
                        };
                        $.each(items, function(itemNo, item) {
                            if (itemNo == 0) {
                                series.name = item;
                            } else {
                                series.data.push(parseFloat(item));
                            }
                        });
                        
                        options.series.push(series);
                    }
                    
                });
                
                var chart = new Highcharts.Chart(options);
            });



            // Column chart
options.chart.renderTo = 'container';
options.chart.type = 'column';
var chart1 = new Highcharts.Chart(options);

chartfunc = function()
{
var column = document.getElementById('column');
var bar = document.getElementById('bar');
var pie = document.getElementById('pie');
var line = document.getElementById('line');

        
if(column.checked)
    {
        
        options.chart.renderTo = 'container';
        options.chart.type = 'column';
        var chart1 = new Highcharts.Chart(options);
    }
else if(bar.checked)
    {
        options.chart.renderTo = 'container';
        options.chart.type = 'bar';
        var chart1 = new Highcharts.Chart(options);
    }
else if(pie.checked)
    {
        options.chart.renderTo = 'container';
        options.chart.type = 'pie';
        var chart1 = new Highcharts.Chart(options);
    }
else
    {
        options.chart.renderTo = 'container';
        options.chart.type = 'spline';
        var chart1 = new Highcharts.Chart(options);
    }

}

$('#change_chart_title').click(function(){
    options.title.text = $('#chart_title').val();
    var chart1 = new Highcharts.Chart(options);
});
            
});

$('#major').click(function () {
  $('#container').css('display','block');
  $('#container1').css('display','none');

});

$('#rainfall').click(function () {
  $('#container').css('display','none');
  $('#container1').css('display','block');
  
});


// END OF WINDOW SCRIPT