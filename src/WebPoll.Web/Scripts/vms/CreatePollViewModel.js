function PollOption(name) {
    var self = this;
    self.name = ko.observable(name);
}
function Voter(name, email) {
    var self = this;
    self.name = ko.observable(name);
    self.email = ko.observable(email);
}

function CreatePollViewModel() {

    var self = this;

    self.pollName = ko.observable("Test");
    self.pollOptions = ko.observableArray([new PollOption(null), new PollOption(null)]);
    self.winningOptions = ko.observable();
    self.pollEndDate = ko.observable();
    self.pollEndTime = ko.observable();
    self.voters = ko.observableArray([new Voter(null, null), new Voter(null, null)]);
    self.includeCreatorAsVoter = ko.observable();
    self.message = ko.observable();
    self.yourEmail = ko.observable();
    self.password = ko.observable();
    self.confirmPassword = ko.observable();

    self.timeTillPollEnds = ko.computed(function() {
        return this.pollEndDate();
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

}
ko.applyBindings(new CreatePollViewModel());