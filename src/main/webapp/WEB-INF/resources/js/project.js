/**
 * Created by marco on 24/05/16.
 */

jQuery(document).ready(function() {

    jQuery("#calendar").fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: moment(),
        editable: false,
        eventLimit: false, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2016-05-01'
            },
            {
                title: 'Long Event',
                start: '2016-05-07',
                end: '2016-05-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-05-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-05-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-05-11',
                end: '2016-05-13'
            },
            {
                title: 'Meeting',
                start: '2016-05-12T10:30:00',
                end: '2016-05-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2016-05-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2016-05-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2016-05-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2016-05-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2016-05-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2016-05-28'
            }
        ],
        eventAfterAllRender: function(view) {
            console.log("eventAfterAllRender");
        },
        viewRender: function(view, element) {
            console.log("viewRender");
            console.log(view);
        },
        eventStartEditable: false,
        evetnDurationEditable: false,
        eventClick: function( event, jsEvent, view ) {
            console.log(event,jsEvent, view);

        },
        dayClick: function(event,a) {
            console.log("dayClick");
            console.log(event,a);
        },
        selectable: true,
        select: function( start, end, jsEvent, view ) {
            console.log("select");
            console.log(start, end, jsEvent, view);
        }
    });


    jQuery("#demobutton").click(function() {
        jQuery("#calendar").fullCalendar("gotoDate", moment("2016-12-24", 'YYYY-MM-DD'));
    });

});
