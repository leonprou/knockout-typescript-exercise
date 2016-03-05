define(["require", "exports"], function (require, exports) {
    "use strict";
    var DateRangePickerBinder = (function () {
        function DateRangePickerBinder() {
        }
        DateRangePickerBinder.prototype.init = function (element, valueAccessor) {
            var dateModel = valueAccessor();
            $(element)
                .daterangepicker(dateModel.options)
                .on('apply.daterangepicker', function (ev, picker) {
                var startDate = picker.startDate.clone();
                var endDate = picker.endDate.clone();
                dateModel.checkIn(new Date(startDate.format('MM-DD-YYYY')));
                dateModel.checkOut(new Date(endDate.format('MM-DD-YYYY')));
            });
        };
        DateRangePickerBinder.prototype.update = function (element, valueAccessor) {
            var dateModel = valueAccessor();
            var jqElem = $(element);
            jqElem.data('daterangepicker').setStartDate(dateModel.checkIn());
            jqElem.data('daterangepicker').setEndDate(dateModel.checkOut());
        };
        return DateRangePickerBinder;
    }());
    ;
    return DateRangePickerBinder;
});
