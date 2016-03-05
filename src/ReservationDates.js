define(["require", "exports", 'knockout'], function (require, exports, ko) {
    "use strict";
    var ReservationDates = (function () {
        function ReservationDates(checkIn, checkOut, options) {
            this.checkIn = ko.observable(checkIn);
            this.checkOut = ko.observable(checkOut);
            this.options = options;
            this.options.startDate = checkIn;
            this.options.endDate = checkOut;
        }
        return ReservationDates;
    }());
    return ReservationDates;
});
