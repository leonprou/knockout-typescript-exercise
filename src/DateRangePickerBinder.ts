
import ko = require('knockout');

class DateRangePickerBinder {
    init(element: any, valueAccessor: any) {
      var dateModel = valueAccessor();

      $(element)
        .daterangepicker(dateModel.options)
        .on('apply.daterangepicker', function(ev, picker) {
          var startDate = picker.startDate.clone();
          var endDate = picker.endDate.clone();

          dateModel.checkIn(startDate.format('MM-DD-YYYY'));
          dateModel.checkOut(endDate.format('MM-DD-YYYY'));
        });
    }

    update(element: any, valueAccessor: any) {
      var dateModel = valueAccessor();
      var jqElem = $(element);
      jqElem.data('daterangepicker').setStartDate(dateModel.checkIn())
      jqElem.data('daterangepicker').setEndDate(dateModel.checkOut())
    }
};

export = DateRangePickerBinder;
