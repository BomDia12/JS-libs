async function eventCalendar() {
    let raw_data = await fetch_holidays()
    console.log(raw_data)
    let data = convert_format(raw_data)
    console.log(data)
    return $('#event_calendar').fullCalendar({
        events: data
    });
};

function clearCalendar() {
    $('#event_calendar').fullCalendar('delete');
    $('#event_calendar').html('');
};

function convert_format (raw_data) {
    raw_data = raw_data.holidays;
    let events = [];
    for (let i = 0; i < raw_data.length; i++) {
        events.push ({
            id: i,
            title: raw_data[i].nameEn,
            start: raw_data[i].date,
        })
        console.log(i)
    }
    return events
}

function fetch_holidays () {
    return $.ajax(
        {
            url: "https://canada-holidays.ca/api/v1/holidays",
            success: function (result) {
                console.log('Canadian holidays fetched')
            },
            error: function (result) {
                console.log('Failiure fetching holidays')
            }
        }
    )
}

$(document).on('turbolinks:load', eventCalendar);
$(document).on('turbolinks:before-cache', clearCalendar);