ko.validation.rules['passwordComplexity'] = {
    validator: function (val) {
        return /(?=^[^\s]{6,128}$)((?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])|(?=.*?\d)(?=.*?[^\w\d\s])(?=.*?[a-z])|(?=.*?[^\w\d\s])(?=.*?[A-Z])(?=.*?[a-z])|(?=.*?\d)(?=.*?[A-Z])(?=.*?[^\w\d\s]))^.*/.test('' + val + '');
    },
    message: 'Password must be between 6 and 128 characters long and contain three of the following 4 items: upper case letter, lower case letter, a symbol, a number'
};
ko.validation.rules['areSame'] = {
    getValue: function (o) {
        return (typeof o === 'function' ? o() : o);
    },
    validator: function (val, otherField) {
        return val === this.getValue(otherField);
    },
    message: 'The fields must have the same value'
};
ko.validation.rules['nullableInt'] = {
    validator: function (val, validate) {
        return val === null || val === "" || (validate && /^-?\d*$/.test(val.toString()));
    },
    message: 'Must be empty or an integer value'
};
ko.validation.rules['localizedDate'] = {
    validator: function (value, culture) {
        if (ko.validation.utils.isEmptyVal(value) || !culture) return true;
        return moment(value).isValid();
    },
    message: 'Please enter a proper date'
};
ko.validation.rules['futureDate'] = {
    validator: function (value, culture) {
        if (ko.validation.utils.isEmptyVal(value) || !culture) return true;
        var date = moment(value);
        if (!date.isValid()) {
            return true;
        }
        return !date.isBefore(moment().startOf('day'));
    },
    message: 'Please enter date in the future'
};
ko.validation.init({
    grouping: {
        deep: true,
        observable: false //important ! Needed so object trees are correctly traversed every time so added objects AFTER the initial setup get included
    },
    decorateInputElement: true,
    errorElementClass: 'has-error',
    errorMessageClass: 'help-block'
});