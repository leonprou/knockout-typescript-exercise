import ko = require('knockout');
import ReservationDates = require('./ReservationDates');

class DateRangePickerBinder {
    init(element: HTMLElement, valueAccessor: () => ReservationDates) {
      var dateModel : ReservationDates = valueAccessor();

      $(element)
        .daterangepicker(dateModel.options)
        .on('apply.daterangepicker', function(ev, picker) {
          var startDate : moment.Moment = picker.startDate.clone();
          var endDate : moment.Moment = picker.endDate.clone();

          dateModel.checkIn(new Date(startDate.format('MM/DD/YYYY')));
          dateModel.checkOut(new Date(endDate.format('MM/DD/YYYY')));
        });
    }

    update(element: HTMLElement, valueAccessor: () => ReservationDates) {
      var dateModel : ReservationDates = valueAccessor();
      var jqElem : JQuery = $(element);
      jqElem.data('daterangepicker').setStartDate(dateModel.checkIn())
      jqElem.data('daterangepicker').setEndDate(dateModel.checkOut())
    }
};

export = DateRangePickerBinder;
