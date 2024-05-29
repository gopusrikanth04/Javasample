sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/books/bookpp/test/integration/FirstJourney',
		'com/books/bookpp/test/integration/pages/BooksList',
		'com/books/bookpp/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/books/bookpp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);