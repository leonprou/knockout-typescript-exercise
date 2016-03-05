require(['knockout', 'jquery', 'daterangepicker', 'src/ReservationDates', 'src/DateRangePickerBinder'], function (ko, $, daterangepicker, ReservationDates, DateRangePickerBinder) {
    $(function () {
        $('input[name="checkIn"]').daterangepicker({
            singleDatePicker: true,
        });
    });
    $(function () {
        $('input[name="checkOut"]').daterangepicker({
            singleDatePicker: true,
        });
    });
    $(document).ready(function () {
        ko.bindingHandlers.dateRangePicker = new DateRangePickerBinder();
        ko.applyBindings(new ReservationDates(new Date('03/04/2016'), new Date('03/16/2016'), {
            minDate: '03/01/2016',
            maxDate: '03/01/2017'
        }));
    });
});
