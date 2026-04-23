// load the global variables and functions being tested from code.js
const {state, saveCookie, readCookie, searchColor} = require("./code");


// unit test for saveCookie - test whether teh saveCookie function correctly reads the global variable
// tests that the values are written to document.cookie in the correct format
it("saveCookie sets the cookie correctly", () => {
    state.userId = 1;
    state.firstName = "Alice";
    state.lastName = "Smith";

    saveCookie();

    expect(document.cookie).toContain("firstName=Alice");
    expect(document.cookie).toContain("lastName=Smith");
    expect(document.cookie).toContain("userId=1");
    console.log("cookie = " + document.cookie);
});



// integration test to check if function searchColor processes the http response json properly
it("searchColor retrieves colors correctly", () => {
    // set up the DOM elements that searchColor() uses
    document.body.innerHTML = `
        <input id="searchText" value="re" />
        <span id="colorSearchResult"></span>
        <p id="colorList"></p>
    `;

    // mock XMLHttpRequest
    global.XMLHttpRequest = jest.fn().mockImplementation(() => ({
        open: jest.fn(),
        setRequestHeader: jest.fn(),
        send: jest.fn(function() {
            this.readyState = 4;
            this.status = 200;
            this.responseText = JSON.stringify({
                results: ["Red_Test", "Green_Test", "Reddish_Brown_Test"],
                error: ""
            });
            this.onreadystatechange();
        }),
    }));

    // call function searchColor to test how it handles a specified json response object
    searchColor();

    // expected if the request is complete and returned a successful http response
    expect(document.getElementById("colorSearchResult").innerHTML).toBe("Color(s) has been retrieved");
    // function searchColor will put the found colors in the paragraph in color.html as shown below
    // note that jsdom converts '<br />' to '<br>'
    expect(document.getElementsByTagName("p")[0].innerHTML).toBe("Red_Test<br>Green_Test<br>Reddish_Brown_Test");
});




