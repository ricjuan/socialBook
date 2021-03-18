Template.addProfile.events({
    'click .js-save'(event){
        let profFirst = $('#FirstName').val();
        let profLast = $('#LastName').val();
        let profAge = $('#Age').val();
        //console.log(profFirst, profLast, profAge);
        profilesdb.insert({
            "pFirst" : profFirst,
            "pLast" : profLast,
            "pAge" : profAge
        });
        $('#FirstName').val("");
        $('#LastName').val("");
        $('#Age').val("");
    }
})  