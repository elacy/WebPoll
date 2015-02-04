function PollOption(name) {
    var self = this;
    self.name = ko.observable(name);
}

function CreatePollViewModel() {

    var self = this;
    self.pollOptions = ko.observableArray([new PollOption("Opt 1"), new PollOption("Opt 2"), new PollOption("Opt 3")]);
    
    self.submit = function () {
        alert(self.pollOptions()[0].name());
    };

}
ko.applyBindings(new CreatePollViewModel());