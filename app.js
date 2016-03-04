function ReservationRange() {
    this.checkIn = ko.observable('03/04/2016');
    this.checkOut = ko.observable('03/16/2016');
    this.options = {
      minDate: '03/01/2016',
      maxDate: '03/01/2017'
    };
}

ReservationRange.toRangeFormat = function(checkIn, checkOut) {
  return checkIn + ' - ' + checkOut;
}

ko.bindingHandlers.dateRangePicker = {
    init: function(element, valueAccessor) {
      var dateModel = valueAccessor();

      $(element)
        .val(ReservationRange.toRangeFormat(dateModel.checkIn(), dateModel.checkOut()))
        .daterangepicker(dateModel.options)
        .on('apply.daterangepicker', function(ev, picker) {
          dateModel.checkIn(picker.startDate.format('MM-DD-YYYY'));
          dateModel.checkOut(picker.endDate.format('MM-DD-YYYY'));
        });
    },
    update: function(element, valueAccessor) {
      var dateModel = valueAccessor();
      $(element)
        .daterangepicker(Object.assign({}, dateModel.options, {
          startDate: dateModel.checkIn(),
          endDate: dateModel.checkOut()
        }));
    }
};


ko.applyBindings(new ReservationRange());
