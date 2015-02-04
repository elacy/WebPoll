function PollOption(name) {
    var self = this;
    self.name = ko.observable(name).extend({ required: true });
}
function Voter(name, email) {
    var self = this;
    self.name = ko.observable(name).extend({ required: true });
    self.email = ko.observable(email).extend({ required: true, email: true });
}

function CreatePollViewModel() {

    var self = this;

    self.winningOptionsIsLessThanNumberOfPollOptions = function(val) {
        var intVal = parseInt(val);
        if (!intVal) {
            return true;
        }
        return intVal < self.pollOptions().length;
    };

    self.pollName = ko.observable().extend({ required: true});
    self.pollOptions = ko.observableArray([new PollOption(null), new PollOption(null)]);
    self.winningOptions = ko.observable().extend({ required: { params: true, message: "This field must be a valid number" }, nullableInt:{ params:true, message: "This field must be an integer (no decimal)" }, min: 1, validation: { validator: self.winningOptionsIsLessThanNumberOfPollOptions, message: "The number of winning options has to be less than the number of poll options" } });
    self.pollEndDate = ko.observable().extend({ required: true, localizedDate: true, futureDate: true });
    self.voters = ko.observableArray([new Voter(null, null), new Voter(null, null)]);
    self.includeCreatorAsVoter = ko.observable();
    self.message = ko.observable();
    self.yourEmail = ko.observable().extend({ required: true, email: true });
    self.password = ko.observable().extend({ required: true, passwordComplexity:true });
    self.confirmPassword = ko.observable().extend({ required: true, equal: { params: self.password, message: "Your confirmation must match the password you've entered above" } });

    self.errors = ko.validation.group(self);

    self.timeTillPollEnds = ko.computed(function () {
        var dateString = this.pollEndDate();
        if (!dateString) {
            return null;
        }
        var date = moment(dateString.trim());
        if (!date.isValid() || date < moment()) {
            return null;
        }
        return date.fromNow().toString();
    },this);

    self.addNewPollOption = function() {
        self.pollOptions.push(new PollOption(null));
    };
    self.deleteOption = function (pollOption) {
        self.pollOptions.remove(pollOption);
    };
    self.addNewVoter = function () {
        self.voters.push(new Voter(null,null));
    };
    self.deleteVoter = function (voter) {
        self.voters.remove(voter);
    };
    self.submit = function() {
        if (self.errors().length == 0) {
            alert('Thank you.');
        } else {
            self.errors.showAllMessages();
            $('html, body').animate({
                scrollTop: $(".has-error:first").offset().top - 80
            }, 500);
        }
    };

}
ko.applyBindings(new CreatePollViewModel());