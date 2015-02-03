ko.validation.init({
    decorateInputElement: true,
    errorElementClass: 'has-error',
    errorMessageClass: 'help-block'
});

function PollOption(name) {
    var self = this;
    self.name = ko.observable(name).extend({ required: true });
}
function Voter(name, email) {
    var self = this;
    self.name = ko.observable(name);
    self.email = ko.observable(email);
}

function CreatePollViewModel() {

    var self = this;

    self.pollName = ko.observable().extend({ required: true});
    self.pollOptions = ko.observableArray([new PollOption(null), new PollOption(null)]);
    self.winningOptions = ko.observable();
    self.pollEndDate = ko.observable();
    self.voters = ko.observableArray([new Voter(null, null), new Voter(null, null)]);
    self.includeCreatorAsVoter = ko.observable();
    self.message = ko.observable();
    self.yourEmail = ko.observable();
    self.password = ko.observable();
    self.confirmPassword = ko.observable();

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
            alert('Please check your submission.');
            self.errors.showAllMessages();
        }
    };

}
ko.applyBindings(new CreatePollViewModel());