function ReservationRange() {
    this.checkIn = ko.observable('03/04/2016');
    this.checkOut = ko.observable('03/16/2016');
    this.options = {
      minDate: '03/01/2016',
      maxDate: '03/01/2017',
      startDate: this.checkIn(),
      endDate: this.checkOut()
    };
}

ko.bindingHandlers.dateRangePicker = {
    init: function(element, valueAccessor) {
      var dateModel = valueAccessor();

      $(element)
        .daterangepicker(dateModel.options)
        .on('apply.daterangepicker', function(ev, picker) {
          var startDate = picker.startDate.clone();
          var endDate = picker.endDate.clone();

          dateModel.checkIn(startDate.format('MM-DD-YYYY'));
          dateModel.checkOut(endDate.format('MM-DD-YYYY'));
        });
    },
    update: function(element, valueAccessor) {
      var dateModel = valueAccessor();
      var jqElem = $(element);
      jqElem.data('daterangepicker').setStartDate(dateModel.checkIn())
      jqElem.data('daterangepicker').setEndDate(dateModel.checkOut())
    }
};


ko.applyBindings(new ReservationRange());
