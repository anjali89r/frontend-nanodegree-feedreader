/* feedreader.js
 */
$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('loops through each feed ensuring a defined, non-empty url', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            })
        })

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('loops through each feed ensuring a defined, non-empty url', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            })
        })
    });


    describe('menu', function(){
        //test that ensures the menu element is hidden by default.
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('changes visibility when icon clicked', function() {
            var menuIcon = $('.menu-icon-link');

            //  test for menu display toggles when clicked.
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    })


    describe('Initial Entries', function() {
        //for asyn loadFeed function
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            })
        })
        //test that checks atleast one feed exists
        it('at least one entry in the feed', function(done) {
            var feedEntries = $('.feed');
            expect(feedEntries.length).toBeGreaterThan(0);
            done();
        })
    })


        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    describe('New Feed Selection', function() {
        var initialFeed, anotherFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = $('.feed').html();
                done();
            })
        })
        it('content changes when new feed is loaded', function(done) {
            loadFeed(2, function() {
                anotherFeed = $('.feed').html();
                expect(anotherFeed).not.toEqual(initialFeed);
                done();
            })
        })
    })
}());
