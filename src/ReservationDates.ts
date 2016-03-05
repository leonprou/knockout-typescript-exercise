import ko = require('knockout');

class ReservationDates {
    checkIn: KnockoutObservable<Date>;
    checkOut: KnockoutObservable<Date>;
    options: any;

    constructor(checkIn: Date, checkOut: Date, options: any) {
      this.checkIn = ko.observable(checkIn);
      this.checkOut = ko.observable(checkOut);
      this.options = options;
      this.options.startDate = checkIn;
      this.options.endDate = checkOut;
    }
}

export = ReservationDates;
