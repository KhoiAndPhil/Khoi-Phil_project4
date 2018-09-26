(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// IMPORT HEAP MODULE FROM NPM
var MinHeap = require("fastpriorityqueue");

// Create an object representing our travel app (NAMESPACE)
var travelApp = {};

// ARRAY WITH ALL RELEVANT STATS FOR EACH PURPOSE
travelApp.statArray = [
// VACATION BUTTON
// ===============
{
  id: "button-vacation",
  stats: [{
    stat: "density",
    direction: "min",
    statName: "Population Density (low)",
    description: "The population density is measured in per km²."
  }, {
    stat: "happiness_index",
    direction: "max",
    statName: "Happiness Index",
    description: "Based on factors such as GDP per capita, social support, life expectancy. The higher the value, the happier the country."
  }, {
    stat: "tourist_arrivals",
    direction: "max",
    statName: "Tourist Arrivals",
    description: "Represents foreign citizens that stayed at least one night. Includes hotel stays, transfers, conference visits, etc."
  }, {
    stat: "tourism_expenditure",
    direction: "max",
    statName: "Tourist Expenditure",
    description: "The amount of government spending dedicated for tourism (in % of the GDP for a country)."
  }, {
    stat: "urban_population",
    direction: "max",
    statName: "Urban Population (high)",
    description: "The percentage of people who live in a city."
  }, {
    stat: "forest_area_percent",
    direction: "max",
    statName: "Forest Area",
    description: "The total amount of forest area in a country (in km²)"
  }]
},
// EDUCATION BUTTON
// ================
{
  id: "button-education",
  stats: [{
    stat: "education_expenditure",
    direction: "max",
    statName: "Education Expenditure",
    description: "Education expenditure represents government spending in % of GDP."
  }, {
    stat: "co2_emissions",
    direction: "min",
    statName: "CO2 Emissions",
    description: "CO2 emissions in metric tons per person per year."
  }, {
    stat: "corruption_index",
    direction: "min",
    statName: "Corruption Index",
    description: "Corruption Perceptions Index (CPI). (Scale: 0-100; 0 = high corruption. 100 = low corruption)."
  }, {
    stat: "happiness_index",
    direction: "max",
    statName: "Happiness Index",
    description: "Based on factors such as GDP per capita, social support, life expectancy. The higher the value, the happier the country."
  }, {
    stat: "hdi",
    direction: "max",
    statName: "Human Development Index",
    description: "Indicator of life expectancy, education, and per capita income. (Scale: 0-1; 0 = low score. 1 = high score)."
  }, {
    stat: "health_expenditure",
    direction: "max",
    statName: "Health Expenditure",
    description: "Public spending on health, measured in % of GDP."
  }]
},
// VISITOR VISA BUTTON
// ===================
{
  id: "button-visit-visa",
  stats: [{
    stat: "happiness_index",
    direction: "max",
    statName: "Happiness Index",
    description: "Based on factors such as GDP per capita, social support, life expectancy. The higher the value, the happier the country."
  }, {
    stat: "health_expenditure",
    direction: "max",
    statName: "Health Expenditure",
    description: "Public spending on health, measured in % of GDP."
  }, {
    stat: "tourist_arrivals",
    direction: "max",
    statName: "Tourist Arrivals",
    description: "Represents foreign citizens that stayed at least one night. Includes hotel stays, transfers, conference visits, etc."
  }, {
    stat: "density",
    direction: "min",
    statName: "Population Density (low)",
    description: "The population density is measured in per km²."
  }, {
    stat: "co2_emissions",
    direction: "min",
    statName: "CO2 Emissions",
    description: "CO2 emissions in metric tons per person per year."
  }, {
    stat: "inflation",
    direction: "min",
    statName: "Inflation",
    description: "The annual change of consumer prices (unit: %)."
  }]
},
// WORKING HOLIDAY BUTTON
// ======================
{
  id: "button-work-holiday",
  stats: [{
    stat: "density",
    direction: "min",
    statName: "Population Density (low)",
    description: "The population density is measured in per km²."
  }, {
    stat: "tourist_arrivals",
    direction: "max",
    statName: "Tourist Arrivals",
    description: "Represents foreign citizens that stayed at least one night. Includes hotel stays, transfers, conference visits, etc."
  }, {
    id: "button-perm-solo",
    stat: "gini",
    direction: "min",
    statName: "Gini Coefficient",
    description: "States how uniformly assets are distributed. (scale: 0-100; 0 = equal distribution. 100 = unequal distribution)."
  }, {
    stat: "happiness_index",
    direction: "max",
    statName: "Happiness Index",
    description: "Based on factors such as GDP per capita, social support, life expectancy. The higher the value, the happier the country."
  }, {
    stat: "jobless_rate",
    direction: "min",
    statName: "Jobless Rate",
    description: "The number of unemployed people in relation to the labor force for a country."
  }, {
    stat: "medianwage",
    direction: "max",
    statName: "Median Wage",
    description: "A measure of the monthly median wage before taxes, including public benefits (e.g child allowance); unit: USD."
  }]
},
// PERMANENT-SOLO BUTTON
// ======================
{
  id: "button-perm-solo",
  stats: [{
    stat: "hdi",
    direction: "max",
    statName: "Human Development Index",
    description: "Indicator of life expectancy, education, and per capita income. (Scale: 0-1; 0 = low score. 1 = high score)."
  }, {
    stat: "corruption_index",
    direction: "min",
    statName: "Corruption Index",
    description: "Corruption Perceptions Index (CPI). (Scale: 0-100; 0 = high corruption. 100 = low corruption)."
  }, {
    stat: "medianwage",
    direction: "max",
    statName: "Median Wage",
    description: "A measure of the monthly median wage before taxes, including public benefits (e.g child allowance); unit: USD."
  }, {
    stat: "inflation",
    direction: "min",
    statName: "Inflation",
    description: "The annual change of consumer prices (unit: %)."
  }, {
    stat: "health_expenditure",
    direction: "max",
    statName: "Health Expenditure",
    description: "Public spending on health, measured in % of GDP."
  }, {
    stat: "urban_population",
    direction: "max",
    statName: "Urban Population (high)",
    description: "The percentage of people who live in a city."
  }]
},
// PERMANENT-COUPLE BUTTON
// ======================
{
  id: "button-perm-couple",
  stats: [{
    stat: "hdi",
    direction: "max",
    statName: "Human Development Index",
    description: "Indicator of life expectancy, education, and per capita income. (Scale: 0-1; 0 = low score. 1 = high score)."
  }, {
    stat: "jobless_rate",
    direction: "min",
    statName: "Jobless Rate",
    description: "The number of unemployed people in relation to the labor force for a country."
  }, {
    id: "button-perm-solo",
    stat: "gini",
    direction: "min",
    statName: "Gini Coefficient",
    description: "States how uniformly assets are distributed. (scale: 0-100; 0 = equal distribution. 100 = unequal distribution)."
  }, {
    stat: "happiness_index",
    direction: "max",
    statName: "Happiness Index",
    description: "Based on factors such as GDP per capita, social support, life expectancy. The higher the value, the happier the country."
  }, {
    stat: "death_rate",
    direction: "min",
    statName: "Rate of Deaths",
    description: "The average number of deaths per year per 1,000 people."
  }, {
    stat: "debts_percent",
    direction: "min",
    statName: "Government Debt",
    description: "The percentage of government borrowings in relation to the GDP."
  }]
},
// PERMANENT-FAMILY BUTTON
// ======================
{
  id: "button-perm-family",
  stats: [{
    stat: "education_expenditure",
    direction: "max",
    statName: "Education Expenditure",
    description: "Education expenditure represents government spending in % of GDP."
  }, {
    stat: "health_expenditure",
    direction: "max",
    statName: "Health Expenditure",
    description: "Public spending on health, measured in % of GDP."
  }, {
    stat: "literacy_rate",
    direction: "max",
    statName: "Literacy Rate",
    description: "The percentage of people that have the ability to read and write by age 15."
  }, {
    stat: "life_expectancy",
    direction: "max",
    statName: "Life Expectancy",
    description: "The average number of years a person will live (at birth)."
  }, {
    stat: "death_rate",
    direction: "min",
    statName: "Rate of Deaths",
    description: "The average number of deaths per year per 1,000 people."
  }, {
    stat: "medianwage",
    direction: "max",
    statName: "Median Wage",
    description: "A measure of the monthly median wage before taxes, including public benefits (e.g child allowance); unit: USD."
  }]
}];

/* 0. GET STARTED */
travelApp.getStarted = function () {
  // Listens for click on GET STARTED BUTTON
  $(".welcome__button").on("click", function () {
    // Smooth scroll to next section
    $("html, body").stop().animate({ scrollTop: $(".purpose-section").offset().top }, 900, "swing");
  });
};

/* 1. GET USER INPUT */
travelApp.getUserPurpose = function () {
  $(".travel-form__button").on("click", function () {
    // Store user input in variable
    var inputID = $(this).attr("id");
    travelApp.userPurpose = inputID;

    // Call the display stats function
    travelApp.displayStats(travelApp.userPurpose);

    // Display the criterias to be chosen
    $(".criterias").css("display", "flex");

    // Smooth Scroll to criteria's section
    $("html, body").stop().animate({
      scrollTop: $(".criterias").offset().top
    }, 900, "swing");
  });
};

/* 2. DISPLAY ALL STATS FOR THE SELECTED PURPOSE ON SCREEN */
travelApp.displayStats = function (purposeID) {
  $(".choices").empty();
  // Header for the choose Criteria section
  $(".criteria-header").text("Please rank the following criteria in order of importance from top to bottom. Use your cursor to drag and drop the items.");
  // Add css position to criteria container
  $(".choices-list-container").css("position", "relative");

  // Go through each purpose object in the Stat Array
  travelApp.statArray.forEach(function (purposeObj) {
    // If the purpose ID matches the purpose Object id
    if (purposeID === purposeObj.id) {
      // Go through every stat for this purpose
      purposeObj.stats.forEach(function (stat) {
        // Append each of the stat name on screen for the user to rank
        var markUpItem = $("<li>").attr("id", stat.stat).addClass("criteria").text(stat.statName);
        $(".choices").append(markUpItem);
      });
    }
  });

  // append submit button
  var markUpButton = "<li><button class=\"user-submit btn\">Submit Ranking</button></li>";
  $(".choices").append(markUpButton);

  travelApp.getUserRankings();
};

/* 3. OBTAIN THE RANKING OF THE STATS FROM USER */
travelApp.getUserRankings = function () {
  $(".choices").on("click", ".user-submit", function () {
    // remove submit button and put a loader until the results come back
    // .html(`<img class="loader" src="../../assets/spinner-1s-100px.svg">`);
    $(".choices").find("li:last-child").html("<svg class=\"lds-spinner loader\" width=\"100px\"  height=\"100px\"  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" style=\"background: none;\"><g transform=\"rotate(0 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(30 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(60 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(90 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(120 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(150 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(180 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(210 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(240 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(270 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(300 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(330 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#fd9341\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g></svg>");

    // get the user rankings from his ordering of stats and store in a variable
    var userRankings = $(".choices")[0].children;

    // initialize an empty array to store the top 3 rankings
    var statsForAPICall = [];

    // get first top 3 rankings (stats in 1st, 2nd and 3rd positions)
    // and store them inside an array
    for (var i = 0; i < 3; i++) {
      statsForAPICall.push(userRankings[i].id);
    }

    // INITIALIZE ALL GLOBAL VARIABLES FOR DISPLAY AT THE END
    travelApp.wikiExtract = [];
    travelApp.statNamesArray = [];
    travelApp.statDescriptionArray = [];
    travelApp.statCodeArray = [];
    travelApp.wikiPromiseArray = [];
    travelApp.pixaPromiseArray = [];
    travelApp.imageArray = [];
    travelApp.imageTextArray = [];

    // If flickity is not enabled yet, initialize a variable to keep track of whether it is enabled or not
    if (!travelApp.flickityOn) {
      travelApp.flickityOn = false;
    }

    // If flickity is enabled, "destroy" it so the results can be re-rendered without flickity conflicts
    if (travelApp.flickityOn === true) {
      $(".results").flickity("destroy");
    }

    $(".results").css("display", "none");

    travelApp.getStat.apply(travelApp, statsForAPICall);
  });
};

/* 4. SEND AJAX REQUEST TO INQSTATS API */

// Store important info for calls to the INQStats API.
travelApp.statKey = "5d3687c7c1788d5f";
travelApp.statURL = "http://inqstatsapi.inqubu.com";
travelApp.getStat = function (statType1, statType2, statType3) {
  (0, _axios2.default)({
    method: "GET",
    url: travelApp.statURL,
    dataResponse: "jsonp",
    params: {
      api_key: travelApp.statKey,
      data: "hdi," + statType1 + "," + statType2 + "," + statType3,
      cmd: "getWorldData"
    }
  }).then(function (res) {
    var _$;

    // calling the calculation function to get the top n / bottom n countries
    // finalResults holds the final 3 coutries and all of their stats
    var finalResults = travelApp.getRecommendations(res.data, statType1, statType2, statType3);

    // Get wiki and pixa extracts for each country
    finalResults.forEach(function (countryObj) {
      // get wiki extracts and put promises into array
      travelApp.wikiPromiseArray.push(travelApp.getWiki(countryObj.countryName));

      // get pixa extracts and put promises into array
      travelApp.pixaPromiseArray.push(travelApp.getPixa(countryObj.countryName));
    });

    // when all wiki and pixa promises are fulfilled, store the results
    // to prepare them for display
    (_$ = $).when.apply(_$, _toConsumableArray(travelApp.wikiPromiseArray).concat(_toConsumableArray(travelApp.pixaPromiseArray))).then(function () {
      // go through the wikiPixa results
      for (var i = 0; i < arguments.length; i++) {
        // first three are wiki, push (store) into array
        if (i < 3) {
          travelApp.storeWiki(arguments.length <= i ? undefined : arguments[i]);
        }
        // last three are pixa, push (store) into array
        else {
            travelApp.storePixa(arguments.length <= i ? undefined : arguments[i]);
          }
      }

      // Once results all stored, display all info on screen (3 countries, wiki and pixa)
      travelApp.displayDestinations(finalResults, [statType1, statType2, statType3]);
    });
  });
};

/* 5. START CALCULATION FOR 3 RECOMMENDED COUNTRIES */
travelApp.getRecommendations = function (res, statType1, statType2, statType3) {
  // Find direction of each stat type and return it in an array
  var arrDirections = travelApp.findDirections(statType1, statType2, statType3);

  // Initialize arrays and numbers for each round of iteration/filtering
  var initialArr = [];
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  var initialIter = 60;
  var iteration1 = 10;
  var iteration2 = 5;
  var iteration3 = 3;

  //Initial filter to account for realistic results (based on HDI)
  initialArr = travelApp.determineResults(res, "hdi", "max", initialIter);

  // ITERATION 1
  arr1 = travelApp.determineResults(initialArr, statType1, arrDirections[0], iteration1);

  // ITERATION 2
  arr2 = travelApp.determineResults(arr1, statType2, arrDirections[1], iteration2);

  // ITERATION 3
  arr3 = travelApp.determineResults(arr2, statType3, arrDirections[2], iteration3);

  // return the array with the final results
  return arr3;
};

/* 5.1 FIND MIN/MAX FOR EACH STAT TYPE */
travelApp.findDirections = function (statType1, statType2, statType3) {
  // Find whether each stattype is max or min
  var stat1Direction = "";
  var stat2Direction = "";
  var stat3Direction = "";

  // Loop through the Stat Array to find direction of stattypes
  travelApp.statArray.forEach(function (purpose) {
    // if the current purpose matches the user purpose,
    if (purpose.id === travelApp.userPurpose) {
      // go through the stats array of that purpose object
      purpose.stats.forEach(function (stat) {
        // if the current stat in the stats array is stattype1, get this direction
        if (stat.stat === statType1) {
          stat1Direction = stat.direction;
          travelApp.statCodeArray.push(stat.stat);
          travelApp.statNamesArray.push(stat.statName);
          travelApp.statDescriptionArray.push(stat.description);
        }
        // if the current stat in the stats array is stattype2, get this direction
        else if (stat.stat === statType2) {
            stat2Direction = stat.direction;
            travelApp.statCodeArray.push(stat.stat);
            travelApp.statNamesArray.push(stat.statName);
            travelApp.statDescriptionArray.push(stat.description);
          }
          // if the current stat in the stats array is stattype3, get this direction
          else if (stat.stat === statType3) {
              stat3Direction = stat.direction;
              travelApp.statCodeArray.push(stat.stat);
              travelApp.statNamesArray.push(stat.statName);
              travelApp.statDescriptionArray.push(stat.description);
            }
      });
    }
  });

  return [stat1Direction, stat2Direction, stat3Direction];
};

/* 5.2 FUNCTION TO DETERMINE WHETHER THE TOP OR BOTTOM SCORES SHOULD BE FOUND */
travelApp.determineResults = function (array, statType, direction, iterationNumber) {
  var resultArray = [];
  // if we want TOP numbers
  if (direction === "max") {
    resultArray = travelApp.determineNCountries(array, statType, iterationNumber, 1);
  }
  // if we want BOT numbers
  else if (direction === "min") {
      resultArray = travelApp.determineNCountries(array, statType, iterationNumber, -1);
    }
  return resultArray;
};

/* 5.3 CALCULATE THE N COUNTRIES */
travelApp.determineNCountries = function (result, statType, n, direction) {
  // initialize a heap array to keep track of the n largest/smallest stat scores
  var heap = new MinHeap();

  // initialize a secondary array to keep track of the n scores AND
  // the associated country to each score
  var nCountries = [];

  // store the stat type into a property variable for easier use
  var property = statType;

  // start a country counter at 0 just for the sake of adding the first n countries into the heap
  var countryCounter = 0;

  // go through each country from the results of the AJAX call to INQStats
  result.map(function (country) {
    // store the stat score and the name of the current country in variables.
    // IMPORTANT: multiply by direction to implement max/min heap
    // a direction of 1 = we want maximum scores
    // a direction of -1 = we want minimum scores
    var stat = Number(country[property]) * direction;

    // if it's the first n countries from the result, no work required. Just add them directly into both the heap and nCountries variables
    if (countryCounter < n) {
      heap.add(stat);
      nCountries.push(country);

      // increment countryCounter to know when we're past the first n countries
      countryCounter++;
    } else {
      // CONDITION TO CHECK IF the current country stat is greater/smaller than any of the current stats in the current n countries
      if (stat > heap.peek()) {
        // if so, find the location of the smallest/largest stat score in the current nCountries array and replace it with the new stat and its associated country
        for (var m = 0; m < nCountries.length; m++) {
          // multiply by direction again to compare properly with the heap
          var currentStat = Number(nCountries[m][property]) * direction;
          if (currentStat === heap.peek()) {
            // replace country
            nCountries.splice(m, 1, country);
            break;
          }
        }

        // remove the smallest/largest stat score from the heap as well
        heap.poll();

        // add the new smallest/largest score onto the heap
        heap.add(stat);
      }
    }
  });
  // return n countries
  return nCountries;
};

/* 6. SEND API REQUESTS TO WIKI AND PIXA */

// 6.1 WIKIPEDIA API: GET AND STORE
// ==============================
// Store important info for calls to the Wiki API.
travelApp.wikiURL = "https://en.wikipedia.org/w/api.php";
// Get info from Wikipedia (AJAX)
travelApp.getWiki = function (country) {
  // get extract
  return $.ajax({
    url: travelApp.wikiURL,
    method: "GET",
    dataType: "jsonp",
    data: {
      action: "query",
      prop: "extracts",
      titles: country,
      format: "json",
      exlimit: 1,
      exchars: 600, // Number of text characters in wiki extract
      exintro: true,
      explaintext: true,
      redirects: 1
    }
  });
};

// Store Wikipedia country extract
travelApp.storeWiki = function (result) {
  // This variable stores the object that holds a key name unique to every country. The value of this key is an object that holds the extact.
  var wikiExtractObject = result[0].query.pages;
  // If we convert the above object into an array, the extract can be accessed on the first value of the array. This variable holds the wiki extract.
  travelApp.wikiExtract.push(Object.values(wikiExtractObject)[0].extract);
};

// 6.2 PIXABAY API: GET AND STORE
// ============================
// Store important info for calls to the Pixabay API.
travelApp.pixaKey = "9879571-e4cbbef3e692aa15a24a7119b";
travelApp.pixaURL = "https://www.pixabay.com/api/";
// Get info from Wikipedia (AJAX)
travelApp.getPixa = function (country) {
  // Get image URL
  return $.ajax({
    url: travelApp.pixaURL,
    method: "GET",
    dataType: "jsonp",
    data: {
      key: travelApp.pixaKey,
      q: country,
      per_page: 15
    }
  });
};

// Store Pixabay country images on the page
travelApp.storePixa = function (results) {
  // Store the array that holds the image URLs in an array
  var resultsArray = results[0].hits;
  // Loop through the results array and push all images into the imageArray
  resultsArray.forEach(function (item) {
    // Array of images for each country
    travelApp.imageArray.push(item.largeImageURL);
    // Array of image information from each country to be used for Alt text
    travelApp.imageTextArray.push(item.tags);
  });
};

/* 7. DISPLAY DESTIONATIONS ON SCREEN WITH WIKI + PIXA RESULTS */
travelApp.displayDestinations = function (results, statChoices) {
  // Get rid of previous clicked results
  $(".results").empty();
  // Go through each country result and build the string literal to append to the page
  var countryCounter = 0;
  var imageCounter = 0;
  results.forEach(function (country) {
    // This element holds all elements for one country result
    var countryContainerElement = $("<div>").addClass("result-container")
    // assign random pixa image of country to the result background
    .css("background-image", "url(\"" + travelApp.imageArray[travelApp.randomize(imageCounter, imageCounter + 15)] + "\")");
    // This element will hold all text and image(s) referring to the country result
    var countryCardElement = $("<div>").addClass("card");
    // This element holds the name of the country
    var countryNameElement = $("<h2>").addClass("country-name").text("" + country.countryName);
    // This element holds the description of the country, taken from the wiki API
    var countryDescriptionElement = $("<p>").addClass("wiki-text").text(travelApp.wikiExtract[countryCounter]);
    countryCounter++;
    // This element holds the text for each of the three stats we're displaying
    var statListElement = $("<ul>").addClass("stat-list");
    // This element holds the container that will hold the small pixa country image
    var smallPixaContainerElement = $("<div>").addClass("country-image-container");
    // This new image counter gets the image in the array that follows the first image being used as a background image for the card
    // This image element will be appended to the image container
    var smallPixaImage = $("<img>").addClass("country-image").attr({
      src: "" + travelApp.imageArray[travelApp.randomize(imageCounter, imageCounter + 15)],
      alt: "Scenic image of " + country.countryName + ". Image tags include " + travelApp.imageTextArray + "."
    });
    // Add 15 to the image counter ensures that every iteration through the forEach will add images to the associated coutries
    imageCounter += 15;
    //Append the country image to its container
    // smallPixaContainerElement.append(smallPixaImage);
    // Append the country name <h2>, wiki text <p>, stat list <ul> and image container <div> to the card <div>.
    countryCardElement.append(countryNameElement, countryDescriptionElement, statListElement, smallPixaContainerElement);
    // Append the card div to the result-container
    countryContainerElement.append(countryCardElement);
    //Append the result-container to the results section element on our page
    $(".results").append(countryContainerElement);

    // Go through the array "statChoices" and set up 3 information:
    // 1. title of stat (taken from travelApp.statNamesArray)
    // 2. value of stat (taken from results object)
    // 3. description of stat (taken from travelApp.statDescriptionArray)
    var statCounter = 0;
    statChoices.forEach(function (stat) {
      var statTitle = travelApp.statNamesArray[statCounter];
      var statValue = country[travelApp.statCodeArray[statCounter]];
      var statDescription = travelApp.statDescriptionArray[statCounter];
      statCounter++;
      // This list item element will hold stat information
      var statListItemElement = $("<li>").addClass("stat-list__item");
      // This div will hold the stat title and question mark icon
      var statTitleIconContainerElement = $("<div>").addClass("stat-list__item__title-icon-container");
      // This element holds the stat title and value
      var statTitleElement = $("<h4>").addClass("stat-list__item__title-icon-container__title-number").text(statTitle + ": " + travelApp.numberWithCommas(statValue));
      // This question mark icon will sit next to the statTitleElement and when clicked/hoverover, will display the stat description
      var statHoverIconElement = "<i class=\"stat-list__item__title-icon-container__icon far fa-question-circle\"></i>";
      // append the stat title and icon to the statTitleIconContainerElement
      statTitleIconContainerElement.append(statTitleElement, statHoverIconElement);
      // This div will hold the stat description and is a sibling of the statTitleIconContainer.
      var statDescriptionContainerElement = $("<div>").addClass("stat-list__item__description-container display-none");
      // This element holds the stat description
      var statDescriptionElement = $("<p>").addClass("stat-list__item__description-container__description").text(statDescription);
      // Append the statDescriptionElement to the statDescriptionContainerElement
      statDescriptionContainerElement.append(statDescriptionElement);
      // Append the two stat div containers to the <li>
      statListItemElement.append(statTitleIconContainerElement, statDescriptionContainerElement);
      // Append the <li>s to the <ul>
      statListElement.append(statListItemElement);
    });
  });

  travelApp.finalDisplay();
};

/*  7.1 Once all images are loaded as background images or regular images, display the final results without "lag"*/
travelApp.finalDisplay = function () {
  $(".results").waitForImages(function () {
    $(".results").css("display", "block");

    $("html, body").stop().animate({ scrollTop: $(".results").offset().top }, 900, "swing");

    // remove loader and display submit ranking button again
    var markUpButton = "<li><button class=\"user-submit btn\">Submit Ranking</button></li>";
    $(".choices").find("li:last-child").html(markUpButton);

    /* FLICKITY */
    $(".results").flickity({
      // options
      cellAlign: "left",
      contain: true,
      autoPlay: 5000,
      pageDots: false,
      watchCSS: true,
      lazyLoad: true
      // wrapAround: true
    });

    travelApp.flickityOn = true;
  });
};

// 7.2 On hover or click over the question mark icon, display the stat description
travelApp.displayStatDescription = function () {
  $(".results").on("click", ".stat-list__item__title-icon-container__icon", function () {
    if ($(this).parents(".stat-list__item").find(".stat-list__item__description-container").hasClass("display-none") === false) {
      $(".results").find(".stat-list__item__description-container").removeClass("display-none").addClass("display-none");
    } else {
      $(".results").find(".stat-list__item__description-container").addClass("display-none");
      $(this).parents(".stat-list__item").find(".stat-list__item__description-container").removeClass("display-none");
    }
  });
};

// This function holds all our events funtions
travelApp.eventsFunction = function () {
  travelApp.getUserPurpose();
  travelApp.getStarted();
  travelApp.transformSVG();
  travelApp.displayStatDescription();
};

// Init function to hold all our functions in order
travelApp.init = function () {
  travelApp.eventsFunction();
  travelApp.slideDrag();
};

// Document Ready to call our init() function and start the app
$(function () {
  travelApp.init();
});

/* 8. EXTRA FUNCTIONS USED THROUGHOUT APP */

// 8.1 Sortable functionality for criterias
travelApp.slideDrag = function () {
  $(".choices").sortable({
    connectWith: ".sortable",
    scroll: false,
    revert: true,
    helper: "clone",
    containment: ".criterias-container"
  }).css("position", "absolute");
  $("ul, li").disableSelection();
};

// 8.2 Randomizer function to select random images to display
travelApp.randomize = function (startingNum, endingNum) {
  return Math.floor(Math.random() * (endingNum - startingNum)) + startingNum;
};

// 8.3 Event listener to transform SVGs into inline SVGS to be able to change their colors with css fill
travelApp.transformSVG = function () {
  jQuery("img.svg").each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find("svg");

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== "undefined") {
        $svg = $svg.attr("id", imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr("xmlns:a");

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
        $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"));
      }

      // Replace image with new SVG
      $img.replaceWith($svg);
    }, "xml");
  });
};

/* 8.4 TRANSFORM STRING NUMBERS INTO SEPARATED STRINGS WITH PROPER COMMAS FOR EACH THOUSAND UNIT */
travelApp.numberWithCommas = function (stat) {
  return stat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

},{"axios":2,"fastpriorityqueue":27}],2:[function(require,module,exports){
module.exports = require('./lib/axios');
},{"./lib/axios":4}],3:[function(require,module,exports){
(function (process){
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var buildURL = require('./../helpers/buildURL');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || require('./../helpers/btoa');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = require('./../helpers/cookies');

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

}).call(this,require('_process'))

},{"../core/createError":10,"./../core/settle":13,"./../helpers/btoa":17,"./../helpers/buildURL":18,"./../helpers/cookies":20,"./../helpers/isURLSameOrigin":22,"./../helpers/parseHeaders":24,"./../utils":26,"_process":29}],4:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./cancel/Cancel":5,"./cancel/CancelToken":6,"./cancel/isCancel":7,"./core/Axios":8,"./defaults":15,"./helpers/bind":16,"./helpers/spread":25,"./utils":26}],5:[function(require,module,exports){
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],6:[function(require,module,exports){
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":5}],7:[function(require,module,exports){
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],8:[function(require,module,exports){
'use strict';

var defaults = require('./../defaults');
var utils = require('./../utils');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../defaults":15,"./../utils":26,"./InterceptorManager":9,"./dispatchRequest":11}],9:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":26}],10:[function(require,module,exports){
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":12}],11:[function(require,module,exports){
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var isAbsoluteURL = require('./../helpers/isAbsoluteURL');
var combineURLs = require('./../helpers/combineURLs');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"../cancel/isCancel":7,"../defaults":15,"./../helpers/combineURLs":19,"./../helpers/isAbsoluteURL":21,"./../utils":26,"./transformData":14}],12:[function(require,module,exports){
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

},{}],13:[function(require,module,exports){
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":10}],14:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":26}],15:[function(require,module,exports){
(function (process){
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

}).call(this,require('_process'))

},{"./adapters/http":3,"./adapters/xhr":3,"./helpers/normalizeHeaderName":23,"./utils":26,"_process":29}],16:[function(require,module,exports){
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],17:[function(require,module,exports){
'use strict';

// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

},{}],18:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":26}],19:[function(require,module,exports){
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],20:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);

},{"./../utils":26}],21:[function(require,module,exports){
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],22:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);

},{"./../utils":26}],23:[function(require,module,exports){
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":26}],24:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":26}],25:[function(require,module,exports){
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],26:[function(require,module,exports){
'use strict';

var bind = require('./helpers/bind');
var isBuffer = require('is-buffer');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

},{"./helpers/bind":16,"is-buffer":28}],27:[function(require,module,exports){
/**
 * FastPriorityQueue.js : a fast heap-based priority queue  in JavaScript.
 * (c) the authors
 * Licensed under the Apache License, Version 2.0.
 *
 * Speed-optimized heap-based priority queue for modern browsers and JavaScript engines.
 *
 * Usage :
         Installation (in shell, if you use node):
         $ npm install fastpriorityqueue

         Running test program (in JavaScript):

         // var FastPriorityQueue = require("fastpriorityqueue");// in node
         var x = new FastPriorityQueue();
         x.add(1);
         x.add(0);
         x.add(5);
         x.add(4);
         x.add(3);
         x.peek(); // should return 0, leaves x unchanged
         x.size; // should return 5, leaves x unchanged
         while(!x.isEmpty()) {
           console.log(x.poll());
         } // will print 0 1 3 4 5
         x.trim(); // (optional) optimizes memory usage
 */
'use strict';

var defaultcomparator = function(a, b) {
  return a < b;
};

// the provided comparator function should take a, b and return *true* when a < b
function FastPriorityQueue(comparator) {
  if (!(this instanceof FastPriorityQueue)) return new FastPriorityQueue(comparator);
  this.array = [];
  this.size = 0;
  this.compare = comparator || defaultcomparator;
}

// copy the priority queue into another, and return it. Queue items are shallow-copied.
// Runs in `O(n)` time.
FastPriorityQueue.prototype.clone = function() {
  var fpq = new FastPriorityQueue(this.compare);
  fpq.size = this.size;
  for (var i = 0; i < this.size; i++) {
    fpq.array.push(this.array[i]);
  }
  return fpq;
};

// Add an element into the queue
// runs in O(log n) time
FastPriorityQueue.prototype.add = function(myval) {
  var i = this.size;
  this.array[this.size] = myval;
  this.size += 1;
  var p;
  var ap;
  while (i > 0) {
    p = (i - 1) >> 1;
    ap = this.array[p];
    if (!this.compare(myval, ap)) {
      break;
    }
    this.array[i] = ap;
    i = p;
  }
  this.array[i] = myval;
};

// replace the content of the heap by provided array and "heapify it"
FastPriorityQueue.prototype.heapify = function(arr) {
  this.array = arr;
  this.size = arr.length;
  var i;
  for (i = this.size >> 1; i >= 0; i--) {
    this._percolateDown(i);
  }
};

// for internal use
FastPriorityQueue.prototype._percolateUp = function(i, force) {
  var myval = this.array[i];
  var p;
  var ap;
  while (i > 0) {
    p = (i - 1) >> 1;
    ap = this.array[p];
    // force will skip the compare
    if (!force && !this.compare(myval, ap)) {
      break;
    }
    this.array[i] = ap;
    i = p;
  }
  this.array[i] = myval;
};

// for internal use
FastPriorityQueue.prototype._percolateDown = function(i) {
  var size = this.size;
  var hsize = this.size >>> 1;
  var ai = this.array[i];
  var l;
  var r;
  var bestc;
  while (i < hsize) {
    l = (i << 1) + 1;
    r = l + 1;
    bestc = this.array[l];
    if (r < size) {
      if (this.compare(this.array[r], bestc)) {
        l = r;
        bestc = this.array[r];
      }
    }
    if (!this.compare(bestc, ai)) {
      break;
    }
    this.array[i] = bestc;
    i = l;
  }
  this.array[i] = ai;
};

// internal
// _removeAt(index) will remove the item at the given index from the queue,
// retaining balance. returns the removed item, or undefined if nothing is removed.
FastPriorityQueue.prototype._removeAt = function(index) {
  if (index > this.size - 1 || index < 0) return undefined;

  // impl1:
  //this.array.splice(index, 1);
  //this.heapify(this.array);
  // impl2:
  this._percolateUp(index, true);
  return this.poll();
};

// remove(myval) will remove an item matching the provided value from the
// queue, checked for equality by using the queue's comparator.
// return true if removed, false otherwise.
FastPriorityQueue.prototype.remove = function(myval) {
  for (var i = 0; i < this.size; i++) {
    if (!this.compare(this.array[i], myval) && !this.compare(myval, this.array[i])) {
      // items match, comparator returns false both ways, remove item
      this._removeAt(i);
      return true;
    }
  }
  return false;
};

// internal
// removes and returns items for which the callback returns true.
FastPriorityQueue.prototype._batchRemove = function(callback, limit) {
  // initialize return array with max size of the limit or current queue size
  var retArr = new Array(limit ? limit : this.size);
  var count = 0;

  if (typeof callback === 'function' && this.size) {
    var i = 0;
    while (i < this.size && count < retArr.length) {
      if (callback(this.array[i])) {
        retArr[count] = this._removeAt(i);
        count++;
        // move up a level in the heap if we remove an item
        i = i >> 1;
      } else {
        i++;
      }
    } 
  }
  retArr.length = count;
  return retArr;
}

// removeOne(callback) will execute the callback function for each item of the queue
// and will remove the first item for which the callback will return true.
// return the removed item, or undefined if nothing is removed.
FastPriorityQueue.prototype.removeOne = function(callback) {
  var arr = this._batchRemove(callback, 1);
  return arr.length > 0 ? arr[0] : undefined;
};

// remove(callback[, limit]) will execute the callback function for each item of
// the queue and will remove each item for which the callback returns true, up to
// a max limit of removed items if specified or no limit if unspecified.
// return an array containing the removed items.
FastPriorityQueue.prototype.removeMany = function(callback, limit) {
  return this._batchRemove(callback, limit);
};

// Look at the top of the queue (one of the smallest elements) without removing it
// executes in constant time
//
// Calling peek on an empty priority queue returns
// the "undefined" value.
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined
//
FastPriorityQueue.prototype.peek = function() {
  if (this.size == 0) return undefined;
  return this.array[0];
};

// remove the element on top of the heap (one of the smallest elements)
// runs in logarithmic time
//
// If the priority queue is empty, the function returns the
// "undefined" value.
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined
//
// For long-running and large priority queues, or priority queues
// storing large objects, you may  want to call the trim function
// at strategic times to recover allocated memory.
FastPriorityQueue.prototype.poll = function() {
  if (this.size == 0) return undefined;
  var ans = this.array[0];
  if (this.size > 1) {
    this.array[0] = this.array[--this.size];
    this._percolateDown(0);
  } else {
    this.size -= 1;
  }
  return ans;
};

// This function adds the provided value to the heap, while removing
// and returning one of the smallest elements (like poll). The size of the queue
// thus remains unchanged.
FastPriorityQueue.prototype.replaceTop = function(myval) {
  if (this.size == 0) return undefined;
  var ans = this.array[0];
  this.array[0] = myval;
  this._percolateDown(0);
  return ans;
};

// recover unused memory (for long-running priority queues)
FastPriorityQueue.prototype.trim = function() {
  this.array = this.array.slice(0, this.size);
};

// Check whether the heap is empty
FastPriorityQueue.prototype.isEmpty = function() {
  return this.size === 0;
};

// iterate over the items in order, pass a callback that receives (item, index) as args.
// TODO once we transpile, uncomment
// if (Symbol && Symbol.iterator) {
//   FastPriorityQueue.prototype[Symbol.iterator] = function*() {
//     if (this.isEmpty()) return;
//     var fpq = this.clone();
//     while (!fpq.isEmpty()) {
//       yield fpq.poll();
//     }
//   };
// }
FastPriorityQueue.prototype.forEach = function(callback) {
  if (this.isEmpty() || typeof callback != 'function') return;
  var i = 0;
  var fpq = this.clone();
  while (!fpq.isEmpty()) {
    callback(fpq.poll(), i++);
  }
};

// return the k 'smallest' elements of the queue
// runs in O(k log k) time
// this is the equivalent of repeatedly calling poll, but
// it has a better computational complexity, which can be
// important for large data sets.
FastPriorityQueue.prototype.kSmallest = function(k) {
  if (this.size == 0) return [];
  var comparator = this.compare;
  var arr = this.array
  var fpq = new FastPriorityQueue(function(a,b){
   return comparator(arr[a],arr[b]);
  });
  k = Math.min(this.size, k);
  var smallest = new Array(k);
  var j = 0;
  fpq.add(0);
  while (j < k) {
    var small = fpq.poll();
    smallest[j++] = this.array[small];
    var l = (small << 1) + 1;
    var r = l + 1;
    if (l < this.size) fpq.add(l);
    if (r < this.size) fpq.add(r);
  }
  return smallest;
}

// just for illustration purposes
var main = function() {
  // main code
  var x = new FastPriorityQueue(function(a, b) {
    return a < b;
  });
  x.add(1);
  x.add(0);
  x.add(5);
  x.add(4);
  x.add(3);
  while (!x.isEmpty()) {
    console.log(x.poll());
  }
};

if (require.main === module) {
  main();
}

module.exports = FastPriorityQueue;

},{}],28:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],29:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9mYXN0cHJpb3JpdHlxdWV1ZS9GYXN0UHJpb3JpdHlRdWV1ZS5qcyIsIm5vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7Ozs7QUFFQTtBQUNBLElBQU0sVUFBVSxRQUFRLG1CQUFSLENBQWhCOztBQUVBO0FBQ0EsSUFBTSxZQUFZLEVBQWxCOztBQUVBO0FBQ0EsVUFBVSxTQUFWLEdBQXNCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNFLE1BQUksaUJBRE47QUFFRSxTQUFPLENBQ0w7QUFDRSxVQUFNLFNBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLDBCQUhaO0FBSUUsaUJBQWE7QUFKZixHQURLLEVBT0w7QUFDRSxVQUFNLGlCQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSxpQkFIWjtBQUlFLGlCQUNFO0FBTEosR0FQSyxFQWNMO0FBQ0UsVUFBTSxrQkFEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUsa0JBSFo7QUFJRSxpQkFDRTtBQUxKLEdBZEssRUFxQkw7QUFDRSxVQUFNLHFCQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSxxQkFIWjtBQUlFLGlCQUFhO0FBSmYsR0FyQkssRUEyQkw7QUFDRSxVQUFNLGtCQURSO0FBRUUs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLyBJTVBPUlQgSEVBUCBNT0RVTEUgRlJPTSBOUE1cbmNvbnN0IE1pbkhlYXAgPSByZXF1aXJlKFwiZmFzdHByaW9yaXR5cXVldWVcIik7XG5cbi8vIENyZWF0ZSBhbiBvYmplY3QgcmVwcmVzZW50aW5nIG91ciB0cmF2ZWwgYXBwIChOQU1FU1BBQ0UpXG5jb25zdCB0cmF2ZWxBcHAgPSB7fTtcblxuLy8gQVJSQVkgV0lUSCBBTEwgUkVMRVZBTlQgU1RBVFMgRk9SIEVBQ0ggUFVSUE9TRVxudHJhdmVsQXBwLnN0YXRBcnJheSA9IFtcbiAgLy8gVkFDQVRJT04gQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXZhY2F0aW9uXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZW5zaXR5XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiUG9wdWxhdGlvbiBEZW5zaXR5IChsb3cpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwb3B1bGF0aW9uIGRlbnNpdHkgaXMgbWVhc3VyZWQgaW4gcGVyIGttwrIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGFwcGluZXNzX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGFwcGluZXNzIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFzZWQgb24gZmFjdG9ycyBzdWNoIGFzIEdEUCBwZXIgY2FwaXRhLCBzb2NpYWwgc3VwcG9ydCwgbGlmZSBleHBlY3RhbmN5LiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhhcHBpZXIgdGhlIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidG91cmlzdF9hcnJpdmFsc1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlRvdXJpc3QgQXJyaXZhbHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJSZXByZXNlbnRzIGZvcmVpZ24gY2l0aXplbnMgdGhhdCBzdGF5ZWQgYXQgbGVhc3Qgb25lIG5pZ2h0LiBJbmNsdWRlcyBob3RlbCBzdGF5cywgdHJhbnNmZXJzLCBjb25mZXJlbmNlIHZpc2l0cywgZXRjLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInRvdXJpc21fZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJUb3VyaXN0IEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhbW91bnQgb2YgZ292ZXJubWVudCBzcGVuZGluZyBkZWRpY2F0ZWQgZm9yIHRvdXJpc20gKGluICUgb2YgdGhlIEdEUCBmb3IgYSBjb3VudHJ5KS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ1cmJhbl9wb3B1bGF0aW9uXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVXJiYW4gUG9wdWxhdGlvbiAoaGlnaClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBlcmNlbnRhZ2Ugb2YgcGVvcGxlIHdobyBsaXZlIGluIGEgY2l0eS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJmb3Jlc3RfYXJlYV9wZXJjZW50XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiRm9yZXN0IEFyZWFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHRvdGFsIGFtb3VudCBvZiBmb3Jlc3QgYXJlYSBpbiBhIGNvdW50cnkgKGluIGttwrIpXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIEVEVUNBVElPTiBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLWVkdWNhdGlvblwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZWR1Y2F0aW9uX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiRWR1Y2F0aW9uIEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVkdWNhdGlvbiBleHBlbmRpdHVyZSByZXByZXNlbnRzIGdvdmVybm1lbnQgc3BlbmRpbmcgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiY28yX2VtaXNzaW9uc1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkNPMiBFbWlzc2lvbnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ08yIGVtaXNzaW9ucyBpbiBtZXRyaWMgdG9ucyBwZXIgcGVyc29uIHBlciB5ZWFyLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImNvcnJ1cHRpb25faW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJDb3JydXB0aW9uIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvcnJ1cHRpb24gUGVyY2VwdGlvbnMgSW5kZXggKENQSSkuIChTY2FsZTogMC0xMDA7IDAgPSBoaWdoIGNvcnJ1cHRpb24uIDEwMCA9IGxvdyBjb3JydXB0aW9uKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZGlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIdW1hbiBEZXZlbG9wbWVudCBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkluZGljYXRvciBvZiBsaWZlIGV4cGVjdGFuY3ksIGVkdWNhdGlvbiwgYW5kIHBlciBjYXBpdGEgaW5jb21lLiAoU2NhbGU6IDAtMTsgMCA9IGxvdyBzY29yZS4gMSA9IGhpZ2ggc2NvcmUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gVklTSVRPUiBWSVNBIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tdmlzaXQtdmlzYVwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGFwcGluZXNzX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGFwcGluZXNzIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFzZWQgb24gZmFjdG9ycyBzdWNoIGFzIEdEUCBwZXIgY2FwaXRhLCBzb2NpYWwgc3VwcG9ydCwgbGlmZSBleHBlY3RhbmN5LiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhhcHBpZXIgdGhlIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGVhbHRoX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGVhbHRoIEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlB1YmxpYyBzcGVuZGluZyBvbiBoZWFsdGgsIG1lYXN1cmVkIGluICUgb2YgR0RQLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInRvdXJpc3RfYXJyaXZhbHNcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJUb3VyaXN0IEFycml2YWxzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUmVwcmVzZW50cyBmb3JlaWduIGNpdGl6ZW5zIHRoYXQgc3RheWVkIGF0IGxlYXN0IG9uZSBuaWdodC4gSW5jbHVkZXMgaG90ZWwgc3RheXMsIHRyYW5zZmVycywgY29uZmVyZW5jZSB2aXNpdHMsIGV0Yy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZW5zaXR5XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiUG9wdWxhdGlvbiBEZW5zaXR5IChsb3cpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwb3B1bGF0aW9uIGRlbnNpdHkgaXMgbWVhc3VyZWQgaW4gcGVyIGttwrIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiY28yX2VtaXNzaW9uc1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkNPMiBFbWlzc2lvbnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ08yIGVtaXNzaW9ucyBpbiBtZXRyaWMgdG9ucyBwZXIgcGVyc29uIHBlciB5ZWFyLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImluZmxhdGlvblwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkluZmxhdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYW5udWFsIGNoYW5nZSBvZiBjb25zdW1lciBwcmljZXMgKHVuaXQ6ICUpLlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBXT1JLSU5HIEhPTElEQVkgQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi13b3JrLWhvbGlkYXlcIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlbnNpdHlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJQb3B1bGF0aW9uIERlbnNpdHkgKGxvdylcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBvcHVsYXRpb24gZGVuc2l0eSBpcyBtZWFzdXJlZCBpbiBwZXIga23Csi5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ0b3VyaXN0X2Fycml2YWxzXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVG91cmlzdCBBcnJpdmFsc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlJlcHJlc2VudHMgZm9yZWlnbiBjaXRpemVucyB0aGF0IHN0YXllZCBhdCBsZWFzdCBvbmUgbmlnaHQuIEluY2x1ZGVzIGhvdGVsIHN0YXlzLCB0cmFuc2ZlcnMsIGNvbmZlcmVuY2UgdmlzaXRzLCBldGMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcImJ1dHRvbi1wZXJtLXNvbG9cIixcbiAgICAgICAgc3RhdDogXCJnaW5pXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiR2luaSBDb2VmZmljaWVudFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlN0YXRlcyBob3cgdW5pZm9ybWx5IGFzc2V0cyBhcmUgZGlzdHJpYnV0ZWQuIChzY2FsZTogMC0xMDA7IDAgPSBlcXVhbCBkaXN0cmlidXRpb24uIDEwMCA9IHVuZXF1YWwgZGlzdHJpYnV0aW9uKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJqb2JsZXNzX3JhdGVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJKb2JsZXNzIFJhdGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIG51bWJlciBvZiB1bmVtcGxveWVkIHBlb3BsZSBpbiByZWxhdGlvbiB0byB0aGUgbGFib3IgZm9yY2UgZm9yIGEgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJtZWRpYW53YWdlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTWVkaWFuIFdhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJBIG1lYXN1cmUgb2YgdGhlIG1vbnRobHkgbWVkaWFuIHdhZ2UgYmVmb3JlIHRheGVzLCBpbmNsdWRpbmcgcHVibGljIGJlbmVmaXRzIChlLmcgY2hpbGQgYWxsb3dhbmNlKTsgdW5pdDogVVNELlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBQRVJNQU5FTlQtU09MTyBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXBlcm0tc29sb1wiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGRpXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSHVtYW4gRGV2ZWxvcG1lbnQgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJJbmRpY2F0b3Igb2YgbGlmZSBleHBlY3RhbmN5LCBlZHVjYXRpb24sIGFuZCBwZXIgY2FwaXRhIGluY29tZS4gKFNjYWxlOiAwLTE7IDAgPSBsb3cgc2NvcmUuIDEgPSBoaWdoIHNjb3JlKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJjb3JydXB0aW9uX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiQ29ycnVwdGlvbiBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDb3JydXB0aW9uIFBlcmNlcHRpb25zIEluZGV4IChDUEkpLiAoU2NhbGU6IDAtMTAwOyAwID0gaGlnaCBjb3JydXB0aW9uLiAxMDAgPSBsb3cgY29ycnVwdGlvbikuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwibWVkaWFud2FnZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIk1lZGlhbiBXYWdlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQSBtZWFzdXJlIG9mIHRoZSBtb250aGx5IG1lZGlhbiB3YWdlIGJlZm9yZSB0YXhlcywgaW5jbHVkaW5nIHB1YmxpYyBiZW5lZml0cyAoZS5nIGNoaWxkIGFsbG93YW5jZSk7IHVuaXQ6IFVTRC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJpbmZsYXRpb25cIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJJbmZsYXRpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGFubnVhbCBjaGFuZ2Ugb2YgY29uc3VtZXIgcHJpY2VzICh1bml0OiAlKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZWFsdGhfZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIZWFsdGggRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUHVibGljIHNwZW5kaW5nIG9uIGhlYWx0aCwgbWVhc3VyZWQgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidXJiYW5fcG9wdWxhdGlvblwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlVyYmFuIFBvcHVsYXRpb24gKGhpZ2gpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwZXJjZW50YWdlIG9mIHBlb3BsZSB3aG8gbGl2ZSBpbiBhIGNpdHkuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFBFUk1BTkVOVC1DT1VQTEUgQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi1wZXJtLWNvdXBsZVwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGRpXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSHVtYW4gRGV2ZWxvcG1lbnQgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJJbmRpY2F0b3Igb2YgbGlmZSBleHBlY3RhbmN5LCBlZHVjYXRpb24sIGFuZCBwZXIgY2FwaXRhIGluY29tZS4gKFNjYWxlOiAwLTE7IDAgPSBsb3cgc2NvcmUuIDEgPSBoaWdoIHNjb3JlKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJqb2JsZXNzX3JhdGVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJKb2JsZXNzIFJhdGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIG51bWJlciBvZiB1bmVtcGxveWVkIHBlb3BsZSBpbiByZWxhdGlvbiB0byB0aGUgbGFib3IgZm9yY2UgZm9yIGEgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiYnV0dG9uLXBlcm0tc29sb1wiLFxuICAgICAgICBzdGF0OiBcImdpbmlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJHaW5pIENvZWZmaWNpZW50XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiU3RhdGVzIGhvdyB1bmlmb3JtbHkgYXNzZXRzIGFyZSBkaXN0cmlidXRlZC4gKHNjYWxlOiAwLTEwMDsgMCA9IGVxdWFsIGRpc3RyaWJ1dGlvbi4gMTAwID0gdW5lcXVhbCBkaXN0cmlidXRpb24pLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlYXRoX3JhdGVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJSYXRlIG9mIERlYXRoc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYXZlcmFnZSBudW1iZXIgb2YgZGVhdGhzIHBlciB5ZWFyIHBlciAxLDAwMCBwZW9wbGUuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVidHNfcGVyY2VudFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkdvdmVybm1lbnQgRGVidFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcGVyY2VudGFnZSBvZiBnb3Zlcm5tZW50IGJvcnJvd2luZ3MgaW4gcmVsYXRpb24gdG8gdGhlIEdEUC5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gUEVSTUFORU5ULUZBTUlMWSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXBlcm0tZmFtaWx5XCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJlZHVjYXRpb25fZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJFZHVjYXRpb24gRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRWR1Y2F0aW9uIGV4cGVuZGl0dXJlIHJlcHJlc2VudHMgZ292ZXJubWVudCBzcGVuZGluZyBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZWFsdGhfZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIZWFsdGggRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUHVibGljIHNwZW5kaW5nIG9uIGhlYWx0aCwgbWVhc3VyZWQgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwibGl0ZXJhY3lfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkxpdGVyYWN5IFJhdGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBlcmNlbnRhZ2Ugb2YgcGVvcGxlIHRoYXQgaGF2ZSB0aGUgYWJpbGl0eSB0byByZWFkIGFuZCB3cml0ZSBieSBhZ2UgMTUuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwibGlmZV9leHBlY3RhbmN5XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTGlmZSBFeHBlY3RhbmN5XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhdmVyYWdlIG51bWJlciBvZiB5ZWFycyBhIHBlcnNvbiB3aWxsIGxpdmUgKGF0IGJpcnRoKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZWF0aF9yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiUmF0ZSBvZiBEZWF0aHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGF2ZXJhZ2UgbnVtYmVyIG9mIGRlYXRocyBwZXIgeWVhciBwZXIgMSwwMDAgcGVvcGxlLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcIm1lZGlhbndhZ2VcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJNZWRpYW4gV2FnZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkEgbWVhc3VyZSBvZiB0aGUgbW9udGhseSBtZWRpYW4gd2FnZSBiZWZvcmUgdGF4ZXMsIGluY2x1ZGluZyBwdWJsaWMgYmVuZWZpdHMgKGUuZyBjaGlsZCBhbGxvd2FuY2UpOyB1bml0OiBVU0QuXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cbi8qIDAuIEdFVCBTVEFSVEVEICovXG50cmF2ZWxBcHAuZ2V0U3RhcnRlZCA9ICgpID0+IHtcbiAgLy8gTGlzdGVucyBmb3IgY2xpY2sgb24gR0VUIFNUQVJURUQgQlVUVE9OXG4gICQoXCIud2VsY29tZV9fYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIFNtb290aCBzY3JvbGwgdG8gbmV4dCBzZWN0aW9uXG4gICAgJChcImh0bWwsIGJvZHlcIilcbiAgICAgIC5zdG9wKClcbiAgICAgIC5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKFwiLnB1cnBvc2Utc2VjdGlvblwiKS5vZmZzZXQoKS50b3AgfSwgOTAwLCBcInN3aW5nXCIpO1xuICB9KTtcbn07XG5cbi8qIDEuIEdFVCBVU0VSIElOUFVUICovXG50cmF2ZWxBcHAuZ2V0VXNlclB1cnBvc2UgPSAoKSA9PiB7XG4gICQoXCIudHJhdmVsLWZvcm1fX2J1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdG9yZSB1c2VyIGlucHV0IGluIHZhcmlhYmxlXG4gICAgY29uc3QgaW5wdXRJRCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xuICAgIHRyYXZlbEFwcC51c2VyUHVycG9zZSA9IGlucHV0SUQ7XG5cbiAgICAvLyBDYWxsIHRoZSBkaXNwbGF5IHN0YXRzIGZ1bmN0aW9uXG4gICAgdHJhdmVsQXBwLmRpc3BsYXlTdGF0cyh0cmF2ZWxBcHAudXNlclB1cnBvc2UpO1xuXG4gICAgLy8gRGlzcGxheSB0aGUgY3JpdGVyaWFzIHRvIGJlIGNob3NlblxuICAgICQoXCIuY3JpdGVyaWFzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xuXG4gICAgLy8gU21vb3RoIFNjcm9sbCB0byBjcml0ZXJpYSdzIHNlY3Rpb25cbiAgICAkKFwiaHRtbCwgYm9keVwiKVxuICAgICAgLnN0b3AoKVxuICAgICAgLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIuY3JpdGVyaWFzXCIpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LFxuICAgICAgICA5MDAsXG4gICAgICAgIFwic3dpbmdcIlxuICAgICAgKTtcbiAgfSk7XG59O1xuXG4vKiAyLiBESVNQTEFZIEFMTCBTVEFUUyBGT1IgVEhFIFNFTEVDVEVEIFBVUlBPU0UgT04gU0NSRUVOICovXG50cmF2ZWxBcHAuZGlzcGxheVN0YXRzID0gcHVycG9zZUlEID0+IHtcbiAgJChcIi5jaG9pY2VzXCIpLmVtcHR5KCk7XG4gIC8vIEhlYWRlciBmb3IgdGhlIGNob29zZSBDcml0ZXJpYSBzZWN0aW9uXG4gICQoXCIuY3JpdGVyaWEtaGVhZGVyXCIpLnRleHQoXG4gICAgXCJQbGVhc2UgcmFuayB0aGUgZm9sbG93aW5nIGNyaXRlcmlhIGluIG9yZGVyIG9mIGltcG9ydGFuY2UgZnJvbSB0b3AgdG8gYm90dG9tLiBVc2UgeW91ciBjdXJzb3IgdG8gZHJhZyBhbmQgZHJvcCB0aGUgaXRlbXMuXCJcbiAgKTtcbiAgLy8gQWRkIGNzcyBwb3NpdGlvbiB0byBjcml0ZXJpYSBjb250YWluZXJcbiAgJChcIi5jaG9pY2VzLWxpc3QtY29udGFpbmVyXCIpLmNzcyhcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XG5cbiAgLy8gR28gdGhyb3VnaCBlYWNoIHB1cnBvc2Ugb2JqZWN0IGluIHRoZSBTdGF0IEFycmF5XG4gIHRyYXZlbEFwcC5zdGF0QXJyYXkuZm9yRWFjaChwdXJwb3NlT2JqID0+IHtcbiAgICAvLyBJZiB0aGUgcHVycG9zZSBJRCBtYXRjaGVzIHRoZSBwdXJwb3NlIE9iamVjdCBpZFxuICAgIGlmIChwdXJwb3NlSUQgPT09IHB1cnBvc2VPYmouaWQpIHtcbiAgICAgIC8vIEdvIHRocm91Z2ggZXZlcnkgc3RhdCBmb3IgdGhpcyBwdXJwb3NlXG4gICAgICBwdXJwb3NlT2JqLnN0YXRzLmZvckVhY2goc3RhdCA9PiB7XG4gICAgICAgIC8vIEFwcGVuZCBlYWNoIG9mIHRoZSBzdGF0IG5hbWUgb24gc2NyZWVuIGZvciB0aGUgdXNlciB0byByYW5rXG4gICAgICAgIGxldCBtYXJrVXBJdGVtID0gJChcIjxsaT5cIilcbiAgICAgICAgICAuYXR0cihcImlkXCIsIHN0YXQuc3RhdClcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJjcml0ZXJpYVwiKVxuICAgICAgICAgIC50ZXh0KHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAkKFwiLmNob2ljZXNcIikuYXBwZW5kKG1hcmtVcEl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBhcHBlbmQgc3VibWl0IGJ1dHRvblxuICBsZXQgbWFya1VwQnV0dG9uID0gYDxsaT48YnV0dG9uIGNsYXNzPVwidXNlci1zdWJtaXQgYnRuXCI+U3VibWl0IFJhbmtpbmc8L2J1dHRvbj48L2xpPmA7XG4gICQoXCIuY2hvaWNlc1wiKS5hcHBlbmQobWFya1VwQnV0dG9uKTtcblxuICB0cmF2ZWxBcHAuZ2V0VXNlclJhbmtpbmdzKCk7XG59O1xuXG4vKiAzLiBPQlRBSU4gVEhFIFJBTktJTkcgT0YgVEhFIFNUQVRTIEZST00gVVNFUiAqL1xudHJhdmVsQXBwLmdldFVzZXJSYW5raW5ncyA9ICgpID0+IHtcbiAgJChcIi5jaG9pY2VzXCIpLm9uKFwiY2xpY2tcIiwgXCIudXNlci1zdWJtaXRcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIHJlbW92ZSBzdWJtaXQgYnV0dG9uIGFuZCBwdXQgYSBsb2FkZXIgdW50aWwgdGhlIHJlc3VsdHMgY29tZSBiYWNrXG4gICAgLy8gLmh0bWwoYDxpbWcgY2xhc3M9XCJsb2FkZXJcIiBzcmM9XCIuLi8uLi9hc3NldHMvc3Bpbm5lci0xcy0xMDBweC5zdmdcIj5gKTtcbiAgICAkKFwiLmNob2ljZXNcIikuZmluZChcbiAgICAgIFwibGk6bGFzdC1jaGlsZFwiXG4gICAgKS5odG1sKGA8c3ZnIGNsYXNzPVwibGRzLXNwaW5uZXIgbG9hZGVyXCIgd2lkdGg9XCIxMDBweFwiICBoZWlnaHQ9XCIxMDBweFwiICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiBub25lO1wiPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuOTE2NjY2NjY2NjY2NjY2NnNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC44MzMzMzMzMzMzMzMzMzM0c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSg2MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjc1c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjY2NjY2NjY2NjY2NjY2NjZzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDEyMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjU4MzMzMzMzMzMzMzMzMzRzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDE1MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjVzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDE4MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjQxNjY2NjY2NjY2NjY2NjdzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDIxMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjMzMzMzMzMzMzMzMzMzMzNzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDI0MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjI1c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgyNzAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC4xNjY2NjY2NjY2NjY2NjY2NnNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzAwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuMDgzMzMzMzMzMzMzMzMzMzNzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDMzMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIjBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PC9zdmc+YCk7XG5cbiAgICAvLyBnZXQgdGhlIHVzZXIgcmFua2luZ3MgZnJvbSBoaXMgb3JkZXJpbmcgb2Ygc3RhdHMgYW5kIHN0b3JlIGluIGEgdmFyaWFibGVcbiAgICBsZXQgdXNlclJhbmtpbmdzID0gJChcIi5jaG9pY2VzXCIpWzBdLmNoaWxkcmVuO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBhbiBlbXB0eSBhcnJheSB0byBzdG9yZSB0aGUgdG9wIDMgcmFua2luZ3NcbiAgICBsZXQgc3RhdHNGb3JBUElDYWxsID0gW107XG5cbiAgICAvLyBnZXQgZmlyc3QgdG9wIDMgcmFua2luZ3MgKHN0YXRzIGluIDFzdCwgMm5kIGFuZCAzcmQgcG9zaXRpb25zKVxuICAgIC8vIGFuZCBzdG9yZSB0aGVtIGluc2lkZSBhbiBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBzdGF0c0ZvckFQSUNhbGwucHVzaCh1c2VyUmFua2luZ3NbaV0uaWQpO1xuICAgIH1cblxuICAgIC8vIElOSVRJQUxJWkUgQUxMIEdMT0JBTCBWQVJJQUJMRVMgRk9SIERJU1BMQVkgQVQgVEhFIEVORFxuICAgIHRyYXZlbEFwcC53aWtpRXh0cmFjdCA9IFtdO1xuICAgIHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5zdGF0Q29kZUFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLndpa2lQcm9taXNlQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAucGl4YVByb21pc2VBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5pbWFnZUFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLmltYWdlVGV4dEFycmF5ID0gW107XG5cbiAgICAvLyBJZiBmbGlja2l0eSBpcyBub3QgZW5hYmxlZCB5ZXQsIGluaXRpYWxpemUgYSB2YXJpYWJsZSB0byBrZWVwIHRyYWNrIG9mIHdoZXRoZXIgaXQgaXMgZW5hYmxlZCBvciBub3RcbiAgICBpZiAoIXRyYXZlbEFwcC5mbGlja2l0eU9uKSB7XG4gICAgICB0cmF2ZWxBcHAuZmxpY2tpdHlPbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIGZsaWNraXR5IGlzIGVuYWJsZWQsIFwiZGVzdHJveVwiIGl0IHNvIHRoZSByZXN1bHRzIGNhbiBiZSByZS1yZW5kZXJlZCB3aXRob3V0IGZsaWNraXR5IGNvbmZsaWN0c1xuICAgIGlmICh0cmF2ZWxBcHAuZmxpY2tpdHlPbiA9PT0gdHJ1ZSkge1xuICAgICAgJChcIi5yZXN1bHRzXCIpLmZsaWNraXR5KFwiZGVzdHJveVwiKTtcbiAgICB9XG5cbiAgICAkKFwiLnJlc3VsdHNcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cbiAgICB0cmF2ZWxBcHAuZ2V0U3RhdCguLi5zdGF0c0ZvckFQSUNhbGwpO1xuICB9KTtcbn07XG5cbi8qIDQuIFNFTkQgQUpBWCBSRVFVRVNUIFRPIElOUVNUQVRTIEFQSSAqL1xuXG4vLyBTdG9yZSBpbXBvcnRhbnQgaW5mbyBmb3IgY2FsbHMgdG8gdGhlIElOUVN0YXRzIEFQSS5cbnRyYXZlbEFwcC5zdGF0S2V5ID0gXCI1ZDM2ODdjN2MxNzg4ZDVmXCI7XG50cmF2ZWxBcHAuc3RhdFVSTCA9IFwiaHR0cDovL2lucXN0YXRzYXBpLmlucXVidS5jb21cIjtcbnRyYXZlbEFwcC5nZXRTdGF0ID0gKHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpID0+IHtcbiAgYXhpb3Moe1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB1cmw6IHRyYXZlbEFwcC5zdGF0VVJMLFxuICAgIGRhdGFSZXNwb25zZTogXCJqc29ucFwiLFxuICAgIHBhcmFtczoge1xuICAgICAgYXBpX2tleTogdHJhdmVsQXBwLnN0YXRLZXksXG4gICAgICBkYXRhOiBgaGRpLCR7c3RhdFR5cGUxfSwke3N0YXRUeXBlMn0sJHtzdGF0VHlwZTN9YCxcbiAgICAgIGNtZDogXCJnZXRXb3JsZERhdGFcIlxuICAgIH1cbiAgfSkudGhlbihyZXMgPT4ge1xuICAgIC8vIGNhbGxpbmcgdGhlIGNhbGN1bGF0aW9uIGZ1bmN0aW9uIHRvIGdldCB0aGUgdG9wIG4gLyBib3R0b20gbiBjb3VudHJpZXNcbiAgICAvLyBmaW5hbFJlc3VsdHMgaG9sZHMgdGhlIGZpbmFsIDMgY291dHJpZXMgYW5kIGFsbCBvZiB0aGVpciBzdGF0c1xuICAgIGxldCBmaW5hbFJlc3VsdHMgPSB0cmF2ZWxBcHAuZ2V0UmVjb21tZW5kYXRpb25zKHJlcy5kYXRhLCBzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKTtcblxuICAgIC8vIEdldCB3aWtpIGFuZCBwaXhhIGV4dHJhY3RzIGZvciBlYWNoIGNvdW50cnlcbiAgICBmaW5hbFJlc3VsdHMuZm9yRWFjaChjb3VudHJ5T2JqID0+IHtcbiAgICAgIC8vIGdldCB3aWtpIGV4dHJhY3RzIGFuZCBwdXQgcHJvbWlzZXMgaW50byBhcnJheVxuICAgICAgdHJhdmVsQXBwLndpa2lQcm9taXNlQXJyYXkucHVzaCh0cmF2ZWxBcHAuZ2V0V2lraShjb3VudHJ5T2JqLmNvdW50cnlOYW1lKSk7XG5cbiAgICAgIC8vIGdldCBwaXhhIGV4dHJhY3RzIGFuZCBwdXQgcHJvbWlzZXMgaW50byBhcnJheVxuICAgICAgdHJhdmVsQXBwLnBpeGFQcm9taXNlQXJyYXkucHVzaCh0cmF2ZWxBcHAuZ2V0UGl4YShjb3VudHJ5T2JqLmNvdW50cnlOYW1lKSk7XG4gICAgfSk7XG5cbiAgICAvLyB3aGVuIGFsbCB3aWtpIGFuZCBwaXhhIHByb21pc2VzIGFyZSBmdWxmaWxsZWQsIHN0b3JlIHRoZSByZXN1bHRzXG4gICAgLy8gdG8gcHJlcGFyZSB0aGVtIGZvciBkaXNwbGF5XG4gICAgJC53aGVuKC4uLnRyYXZlbEFwcC53aWtpUHJvbWlzZUFycmF5LCAuLi50cmF2ZWxBcHAucGl4YVByb21pc2VBcnJheSkudGhlbigoLi4ud2lraVBpeGFSZXN1bHRzKSA9PiB7XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSB3aWtpUGl4YSByZXN1bHRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpa2lQaXhhUmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBmaXJzdCB0aHJlZSBhcmUgd2lraSwgcHVzaCAoc3RvcmUpIGludG8gYXJyYXlcbiAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0b3JlV2lraSh3aWtpUGl4YVJlc3VsdHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxhc3QgdGhyZWUgYXJlIHBpeGEsIHB1c2ggKHN0b3JlKSBpbnRvIGFycmF5XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRyYXZlbEFwcC5zdG9yZVBpeGEod2lraVBpeGFSZXN1bHRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPbmNlIHJlc3VsdHMgYWxsIHN0b3JlZCwgZGlzcGxheSBhbGwgaW5mbyBvbiBzY3JlZW4gKDMgY291bnRyaWVzLCB3aWtpIGFuZCBwaXhhKVxuICAgICAgdHJhdmVsQXBwLmRpc3BsYXlEZXN0aW5hdGlvbnMoZmluYWxSZXN1bHRzLCBbc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlM10pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qIDUuIFNUQVJUIENBTENVTEFUSU9OIEZPUiAzIFJFQ09NTUVOREVEIENPVU5UUklFUyAqL1xudHJhdmVsQXBwLmdldFJlY29tbWVuZGF0aW9ucyA9IChyZXMsIHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpID0+IHtcbiAgLy8gRmluZCBkaXJlY3Rpb24gb2YgZWFjaCBzdGF0IHR5cGUgYW5kIHJldHVybiBpdCBpbiBhbiBhcnJheVxuICBsZXQgYXJyRGlyZWN0aW9ucyA9IHRyYXZlbEFwcC5maW5kRGlyZWN0aW9ucyhzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKTtcblxuICAvLyBJbml0aWFsaXplIGFycmF5cyBhbmQgbnVtYmVycyBmb3IgZWFjaCByb3VuZCBvZiBpdGVyYXRpb24vZmlsdGVyaW5nXG4gIGxldCBpbml0aWFsQXJyID0gW107XG4gIGxldCBhcnIxID0gW107XG4gIGxldCBhcnIyID0gW107XG4gIGxldCBhcnIzID0gW107XG4gIGxldCBpbml0aWFsSXRlciA9IDYwO1xuICBsZXQgaXRlcmF0aW9uMSA9IDEwO1xuICBsZXQgaXRlcmF0aW9uMiA9IDU7XG4gIGxldCBpdGVyYXRpb24zID0gMztcblxuICAvL0luaXRpYWwgZmlsdGVyIHRvIGFjY291bnQgZm9yIHJlYWxpc3RpYyByZXN1bHRzIChiYXNlZCBvbiBIREkpXG4gIGluaXRpYWxBcnIgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyhyZXMsIFwiaGRpXCIsIFwibWF4XCIsIGluaXRpYWxJdGVyKTtcblxuICAvLyBJVEVSQVRJT04gMVxuICBhcnIxID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMoaW5pdGlhbEFyciwgc3RhdFR5cGUxLCBhcnJEaXJlY3Rpb25zWzBdLCBpdGVyYXRpb24xKTtcblxuICAvLyBJVEVSQVRJT04gMlxuICBhcnIyID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMoYXJyMSwgc3RhdFR5cGUyLCBhcnJEaXJlY3Rpb25zWzFdLCBpdGVyYXRpb24yKTtcblxuICAvLyBJVEVSQVRJT04gM1xuICBhcnIzID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMoYXJyMiwgc3RhdFR5cGUzLCBhcnJEaXJlY3Rpb25zWzJdLCBpdGVyYXRpb24zKTtcblxuICAvLyByZXR1cm4gdGhlIGFycmF5IHdpdGggdGhlIGZpbmFsIHJlc3VsdHNcbiAgcmV0dXJuIGFycjM7XG59O1xuXG4vKiA1LjEgRklORCBNSU4vTUFYIEZPUiBFQUNIIFNUQVQgVFlQRSAqL1xudHJhdmVsQXBwLmZpbmREaXJlY3Rpb25zID0gKHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpID0+IHtcbiAgLy8gRmluZCB3aGV0aGVyIGVhY2ggc3RhdHR5cGUgaXMgbWF4IG9yIG1pblxuICBsZXQgc3RhdDFEaXJlY3Rpb24gPSBcIlwiO1xuICBsZXQgc3RhdDJEaXJlY3Rpb24gPSBcIlwiO1xuICBsZXQgc3RhdDNEaXJlY3Rpb24gPSBcIlwiO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgU3RhdCBBcnJheSB0byBmaW5kIGRpcmVjdGlvbiBvZiBzdGF0dHlwZXNcbiAgdHJhdmVsQXBwLnN0YXRBcnJheS5mb3JFYWNoKHB1cnBvc2UgPT4ge1xuICAgIC8vIGlmIHRoZSBjdXJyZW50IHB1cnBvc2UgbWF0Y2hlcyB0aGUgdXNlciBwdXJwb3NlLFxuICAgIGlmIChwdXJwb3NlLmlkID09PSB0cmF2ZWxBcHAudXNlclB1cnBvc2UpIHtcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIHN0YXRzIGFycmF5IG9mIHRoYXQgcHVycG9zZSBvYmplY3RcbiAgICAgIHB1cnBvc2Uuc3RhdHMuZm9yRWFjaChzdGF0ID0+IHtcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RhdCBpbiB0aGUgc3RhdHMgYXJyYXkgaXMgc3RhdHR5cGUxLCBnZXQgdGhpcyBkaXJlY3Rpb25cbiAgICAgICAgaWYgKHN0YXQuc3RhdCA9PT0gc3RhdFR5cGUxKSB7XG4gICAgICAgICAgc3RhdDFEaXJlY3Rpb24gPSBzdGF0LmRpcmVjdGlvbjtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdENvZGVBcnJheS5wdXNoKHN0YXQuc3RhdCk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5LnB1c2goc3RhdC5zdGF0TmFtZSk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5LnB1c2goc3RhdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RhdCBpbiB0aGUgc3RhdHMgYXJyYXkgaXMgc3RhdHR5cGUyLCBnZXQgdGhpcyBkaXJlY3Rpb25cbiAgICAgICAgZWxzZSBpZiAoc3RhdC5zdGF0ID09PSBzdGF0VHlwZTIpIHtcbiAgICAgICAgICBzdGF0MkRpcmVjdGlvbiA9IHN0YXQuZGlyZWN0aW9uO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0Q29kZUFycmF5LnB1c2goc3RhdC5zdGF0KTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXkucHVzaChzdGF0LnN0YXROYW1lKTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXkucHVzaChzdGF0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGF0IGluIHRoZSBzdGF0cyBhcnJheSBpcyBzdGF0dHlwZTMsIGdldCB0aGlzIGRpcmVjdGlvblxuICAgICAgICBlbHNlIGlmIChzdGF0LnN0YXQgPT09IHN0YXRUeXBlMykge1xuICAgICAgICAgIHN0YXQzRGlyZWN0aW9uID0gc3RhdC5kaXJlY3Rpb247XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXRDb2RlQXJyYXkucHVzaChzdGF0LnN0YXQpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheS5wdXNoKHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheS5wdXNoKHN0YXQuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbc3RhdDFEaXJlY3Rpb24sIHN0YXQyRGlyZWN0aW9uLCBzdGF0M0RpcmVjdGlvbl07XG59O1xuXG4vKiA1LjIgRlVOQ1RJT04gVE8gREVURVJNSU5FIFdIRVRIRVIgVEhFIFRPUCBPUiBCT1RUT00gU0NPUkVTIFNIT1VMRCBCRSBGT1VORCAqL1xudHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMgPSAoYXJyYXksIHN0YXRUeXBlLCBkaXJlY3Rpb24sIGl0ZXJhdGlvbk51bWJlcikgPT4ge1xuICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcbiAgLy8gaWYgd2Ugd2FudCBUT1AgbnVtYmVyc1xuICBpZiAoZGlyZWN0aW9uID09PSBcIm1heFwiKSB7XG4gICAgcmVzdWx0QXJyYXkgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lTkNvdW50cmllcyhhcnJheSwgc3RhdFR5cGUsIGl0ZXJhdGlvbk51bWJlciwgMSk7XG4gIH1cbiAgLy8gaWYgd2Ugd2FudCBCT1QgbnVtYmVyc1xuICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwibWluXCIpIHtcbiAgICByZXN1bHRBcnJheSA9IHRyYXZlbEFwcC5kZXRlcm1pbmVOQ291bnRyaWVzKGFycmF5LCBzdGF0VHlwZSwgaXRlcmF0aW9uTnVtYmVyLCAtMSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdEFycmF5O1xufTtcblxuLyogNS4zIENBTENVTEFURSBUSEUgTiBDT1VOVFJJRVMgKi9cbnRyYXZlbEFwcC5kZXRlcm1pbmVOQ291bnRyaWVzID0gKHJlc3VsdCwgc3RhdFR5cGUsIG4sIGRpcmVjdGlvbikgPT4ge1xuICAvLyBpbml0aWFsaXplIGEgaGVhcCBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHRoZSBuIGxhcmdlc3Qvc21hbGxlc3Qgc3RhdCBzY29yZXNcbiAgbGV0IGhlYXAgPSBuZXcgTWluSGVhcCgpO1xuXG4gIC8vIGluaXRpYWxpemUgYSBzZWNvbmRhcnkgYXJyYXkgdG8ga2VlcCB0cmFjayBvZiB0aGUgbiBzY29yZXMgQU5EXG4gIC8vIHRoZSBhc3NvY2lhdGVkIGNvdW50cnkgdG8gZWFjaCBzY29yZVxuICBsZXQgbkNvdW50cmllcyA9IFtdO1xuXG4gIC8vIHN0b3JlIHRoZSBzdGF0IHR5cGUgaW50byBhIHByb3BlcnR5IHZhcmlhYmxlIGZvciBlYXNpZXIgdXNlXG4gIGxldCBwcm9wZXJ0eSA9IHN0YXRUeXBlO1xuXG4gIC8vIHN0YXJ0IGEgY291bnRyeSBjb3VudGVyIGF0IDAganVzdCBmb3IgdGhlIHNha2Ugb2YgYWRkaW5nIHRoZSBmaXJzdCBuIGNvdW50cmllcyBpbnRvIHRoZSBoZWFwXG4gIGxldCBjb3VudHJ5Q291bnRlciA9IDA7XG5cbiAgLy8gZ28gdGhyb3VnaCBlYWNoIGNvdW50cnkgZnJvbSB0aGUgcmVzdWx0cyBvZiB0aGUgQUpBWCBjYWxsIHRvIElOUVN0YXRzXG4gIHJlc3VsdC5tYXAoY291bnRyeSA9PiB7XG4gICAgLy8gc3RvcmUgdGhlIHN0YXQgc2NvcmUgYW5kIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IGNvdW50cnkgaW4gdmFyaWFibGVzLlxuICAgIC8vIElNUE9SVEFOVDogbXVsdGlwbHkgYnkgZGlyZWN0aW9uIHRvIGltcGxlbWVudCBtYXgvbWluIGhlYXBcbiAgICAvLyBhIGRpcmVjdGlvbiBvZiAxID0gd2Ugd2FudCBtYXhpbXVtIHNjb3Jlc1xuICAgIC8vIGEgZGlyZWN0aW9uIG9mIC0xID0gd2Ugd2FudCBtaW5pbXVtIHNjb3Jlc1xuICAgIGxldCBzdGF0ID0gTnVtYmVyKGNvdW50cnlbcHJvcGVydHldKSAqIGRpcmVjdGlvbjtcblxuICAgIC8vIGlmIGl0J3MgdGhlIGZpcnN0IG4gY291bnRyaWVzIGZyb20gdGhlIHJlc3VsdCwgbm8gd29yayByZXF1aXJlZC4gSnVzdCBhZGQgdGhlbSBkaXJlY3RseSBpbnRvIGJvdGggdGhlIGhlYXAgYW5kIG5Db3VudHJpZXMgdmFyaWFibGVzXG4gICAgaWYgKGNvdW50cnlDb3VudGVyIDwgbikge1xuICAgICAgaGVhcC5hZGQoc3RhdCk7XG4gICAgICBuQ291bnRyaWVzLnB1c2goY291bnRyeSk7XG5cbiAgICAgIC8vIGluY3JlbWVudCBjb3VudHJ5Q291bnRlciB0byBrbm93IHdoZW4gd2UncmUgcGFzdCB0aGUgZmlyc3QgbiBjb3VudHJpZXNcbiAgICAgIGNvdW50cnlDb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENPTkRJVElPTiBUTyBDSEVDSyBJRiB0aGUgY3VycmVudCBjb3VudHJ5IHN0YXQgaXMgZ3JlYXRlci9zbWFsbGVyIHRoYW4gYW55IG9mIHRoZSBjdXJyZW50IHN0YXRzIGluIHRoZSBjdXJyZW50IG4gY291bnRyaWVzXG4gICAgICBpZiAoc3RhdCA+IGhlYXAucGVlaygpKSB7XG4gICAgICAgIC8vIGlmIHNvLCBmaW5kIHRoZSBsb2NhdGlvbiBvZiB0aGUgc21hbGxlc3QvbGFyZ2VzdCBzdGF0IHNjb3JlIGluIHRoZSBjdXJyZW50IG5Db3VudHJpZXMgYXJyYXkgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgbmV3IHN0YXQgYW5kIGl0cyBhc3NvY2lhdGVkIGNvdW50cnlcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBuQ291bnRyaWVzLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgLy8gbXVsdGlwbHkgYnkgZGlyZWN0aW9uIGFnYWluIHRvIGNvbXBhcmUgcHJvcGVybHkgd2l0aCB0aGUgaGVhcFxuICAgICAgICAgIGxldCBjdXJyZW50U3RhdCA9IE51bWJlcihuQ291bnRyaWVzW21dW3Byb3BlcnR5XSkgKiBkaXJlY3Rpb247XG4gICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ID09PSBoZWFwLnBlZWsoKSkge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBjb3VudHJ5XG4gICAgICAgICAgICBuQ291bnRyaWVzLnNwbGljZShtLCAxLCBjb3VudHJ5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgc21hbGxlc3QvbGFyZ2VzdCBzdGF0IHNjb3JlIGZyb20gdGhlIGhlYXAgYXMgd2VsbFxuICAgICAgICBoZWFwLnBvbGwoKTtcblxuICAgICAgICAvLyBhZGQgdGhlIG5ldyBzbWFsbGVzdC9sYXJnZXN0IHNjb3JlIG9udG8gdGhlIGhlYXBcbiAgICAgICAgaGVhcC5hZGQoc3RhdCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLy8gcmV0dXJuIG4gY291bnRyaWVzXG4gIHJldHVybiBuQ291bnRyaWVzO1xufTtcblxuLyogNi4gU0VORCBBUEkgUkVRVUVTVFMgVE8gV0lLSSBBTkQgUElYQSAqL1xuXG4vLyA2LjEgV0lLSVBFRElBIEFQSTogR0VUIEFORCBTVE9SRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTdG9yZSBpbXBvcnRhbnQgaW5mbyBmb3IgY2FsbHMgdG8gdGhlIFdpa2kgQVBJLlxudHJhdmVsQXBwLndpa2lVUkwgPSBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHBcIjtcbi8vIEdldCBpbmZvIGZyb20gV2lraXBlZGlhIChBSkFYKVxudHJhdmVsQXBwLmdldFdpa2kgPSBjb3VudHJ5ID0+IHtcbiAgLy8gZ2V0IGV4dHJhY3RcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdXJsOiB0cmF2ZWxBcHAud2lraVVSTCxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICBkYXRhOiB7XG4gICAgICBhY3Rpb246IFwicXVlcnlcIixcbiAgICAgIHByb3A6IFwiZXh0cmFjdHNcIixcbiAgICAgIHRpdGxlczogY291bnRyeSxcbiAgICAgIGZvcm1hdDogXCJqc29uXCIsXG4gICAgICBleGxpbWl0OiAxLFxuICAgICAgZXhjaGFyczogNjAwLCAvLyBOdW1iZXIgb2YgdGV4dCBjaGFyYWN0ZXJzIGluIHdpa2kgZXh0cmFjdFxuICAgICAgZXhpbnRybzogdHJ1ZSxcbiAgICAgIGV4cGxhaW50ZXh0OiB0cnVlLFxuICAgICAgcmVkaXJlY3RzOiAxXG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFN0b3JlIFdpa2lwZWRpYSBjb3VudHJ5IGV4dHJhY3RcbnRyYXZlbEFwcC5zdG9yZVdpa2kgPSByZXN1bHQgPT4ge1xuICAvLyBUaGlzIHZhcmlhYmxlIHN0b3JlcyB0aGUgb2JqZWN0IHRoYXQgaG9sZHMgYSBrZXkgbmFtZSB1bmlxdWUgdG8gZXZlcnkgY291bnRyeS4gVGhlIHZhbHVlIG9mIHRoaXMga2V5IGlzIGFuIG9iamVjdCB0aGF0IGhvbGRzIHRoZSBleHRhY3QuXG4gIGNvbnN0IHdpa2lFeHRyYWN0T2JqZWN0ID0gcmVzdWx0WzBdLnF1ZXJ5LnBhZ2VzO1xuICAvLyBJZiB3ZSBjb252ZXJ0IHRoZSBhYm92ZSBvYmplY3QgaW50byBhbiBhcnJheSwgdGhlIGV4dHJhY3QgY2FuIGJlIGFjY2Vzc2VkIG9uIHRoZSBmaXJzdCB2YWx1ZSBvZiB0aGUgYXJyYXkuIFRoaXMgdmFyaWFibGUgaG9sZHMgdGhlIHdpa2kgZXh0cmFjdC5cbiAgdHJhdmVsQXBwLndpa2lFeHRyYWN0LnB1c2goT2JqZWN0LnZhbHVlcyh3aWtpRXh0cmFjdE9iamVjdClbMF0uZXh0cmFjdCk7XG59O1xuXG4vLyA2LjIgUElYQUJBWSBBUEk6IEdFVCBBTkQgU1RPUkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0b3JlIGltcG9ydGFudCBpbmZvIGZvciBjYWxscyB0byB0aGUgUGl4YWJheSBBUEkuXG50cmF2ZWxBcHAucGl4YUtleSA9IFwiOTg3OTU3MS1lNGNiYmVmM2U2OTJhYTE1YTI0YTcxMTliXCI7XG50cmF2ZWxBcHAucGl4YVVSTCA9IFwiaHR0cHM6Ly93d3cucGl4YWJheS5jb20vYXBpL1wiO1xuLy8gR2V0IGluZm8gZnJvbSBXaWtpcGVkaWEgKEFKQVgpXG50cmF2ZWxBcHAuZ2V0UGl4YSA9IGNvdW50cnkgPT4ge1xuICAvLyBHZXQgaW1hZ2UgVVJMXG4gIHJldHVybiAkLmFqYXgoe1xuICAgIHVybDogdHJhdmVsQXBwLnBpeGFVUkwsXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGRhdGFUeXBlOiBcImpzb25wXCIsXG4gICAgZGF0YToge1xuICAgICAga2V5OiB0cmF2ZWxBcHAucGl4YUtleSxcbiAgICAgIHE6IGNvdW50cnksXG4gICAgICBwZXJfcGFnZTogMTVcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gU3RvcmUgUGl4YWJheSBjb3VudHJ5IGltYWdlcyBvbiB0aGUgcGFnZVxudHJhdmVsQXBwLnN0b3JlUGl4YSA9IHJlc3VsdHMgPT4ge1xuICAvLyBTdG9yZSB0aGUgYXJyYXkgdGhhdCBob2xkcyB0aGUgaW1hZ2UgVVJMcyBpbiBhbiBhcnJheVxuICBjb25zdCByZXN1bHRzQXJyYXkgPSByZXN1bHRzWzBdLmhpdHM7XG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgcmVzdWx0cyBhcnJheSBhbmQgcHVzaCBhbGwgaW1hZ2VzIGludG8gdGhlIGltYWdlQXJyYXlcbiAgcmVzdWx0c0FycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gQXJyYXkgb2YgaW1hZ2VzIGZvciBlYWNoIGNvdW50cnlcbiAgICB0cmF2ZWxBcHAuaW1hZ2VBcnJheS5wdXNoKGl0ZW0ubGFyZ2VJbWFnZVVSTCk7XG4gICAgLy8gQXJyYXkgb2YgaW1hZ2UgaW5mb3JtYXRpb24gZnJvbSBlYWNoIGNvdW50cnkgdG8gYmUgdXNlZCBmb3IgQWx0IHRleHRcbiAgICB0cmF2ZWxBcHAuaW1hZ2VUZXh0QXJyYXkucHVzaChpdGVtLnRhZ3MpO1xuICB9KTtcbn07XG5cbi8qIDcuIERJU1BMQVkgREVTVElPTkFUSU9OUyBPTiBTQ1JFRU4gV0lUSCBXSUtJICsgUElYQSBSRVNVTFRTICovXG50cmF2ZWxBcHAuZGlzcGxheURlc3RpbmF0aW9ucyA9IChyZXN1bHRzLCBzdGF0Q2hvaWNlcykgPT4ge1xuICAvLyBHZXQgcmlkIG9mIHByZXZpb3VzIGNsaWNrZWQgcmVzdWx0c1xuICAkKFwiLnJlc3VsdHNcIikuZW1wdHkoKTtcbiAgLy8gR28gdGhyb3VnaCBlYWNoIGNvdW50cnkgcmVzdWx0IGFuZCBidWlsZCB0aGUgc3RyaW5nIGxpdGVyYWwgdG8gYXBwZW5kIHRvIHRoZSBwYWdlXG4gIGxldCBjb3VudHJ5Q291bnRlciA9IDA7XG4gIGxldCBpbWFnZUNvdW50ZXIgPSAwO1xuICByZXN1bHRzLmZvckVhY2goY291bnRyeSA9PiB7XG4gICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIGFsbCBlbGVtZW50cyBmb3Igb25lIGNvdW50cnkgcmVzdWx0XG4gICAgbGV0IGNvdW50cnlDb250YWluZXJFbGVtZW50ID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJyZXN1bHQtY29udGFpbmVyXCIpXG4gICAgICAvLyBhc3NpZ24gcmFuZG9tIHBpeGEgaW1hZ2Ugb2YgY291bnRyeSB0byB0aGUgcmVzdWx0IGJhY2tncm91bmRcbiAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGB1cmwoXCIke3RyYXZlbEFwcC5pbWFnZUFycmF5W3RyYXZlbEFwcC5yYW5kb21pemUoaW1hZ2VDb3VudGVyLCBpbWFnZUNvdW50ZXIgKyAxNSldfVwiKWApO1xuICAgIC8vIFRoaXMgZWxlbWVudCB3aWxsIGhvbGQgYWxsIHRleHQgYW5kIGltYWdlKHMpIHJlZmVycmluZyB0byB0aGUgY291bnRyeSByZXN1bHRcbiAgICBsZXQgY291bnRyeUNhcmRFbGVtZW50ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiY2FyZFwiKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIG5hbWUgb2YgdGhlIGNvdW50cnlcbiAgICBsZXQgY291bnRyeU5hbWVFbGVtZW50ID0gJChcIjxoMj5cIilcbiAgICAgIC5hZGRDbGFzcyhcImNvdW50cnktbmFtZVwiKVxuICAgICAgLnRleHQoYCR7Y291bnRyeS5jb3VudHJ5TmFtZX1gKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjb3VudHJ5LCB0YWtlbiBmcm9tIHRoZSB3aWtpIEFQSVxuICAgIGxldCBjb3VudHJ5RGVzY3JpcHRpb25FbGVtZW50ID0gJChcIjxwPlwiKVxuICAgICAgLmFkZENsYXNzKFwid2lraS10ZXh0XCIpXG4gICAgICAudGV4dCh0cmF2ZWxBcHAud2lraUV4dHJhY3RbY291bnRyeUNvdW50ZXJdKTtcbiAgICBjb3VudHJ5Q291bnRlcisrO1xuICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgdGV4dCBmb3IgZWFjaCBvZiB0aGUgdGhyZWUgc3RhdHMgd2UncmUgZGlzcGxheWluZ1xuICAgIGxldCBzdGF0TGlzdEVsZW1lbnQgPSAkKFwiPHVsPlwiKS5hZGRDbGFzcyhcInN0YXQtbGlzdFwiKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIGNvbnRhaW5lciB0aGF0IHdpbGwgaG9sZCB0aGUgc21hbGwgcGl4YSBjb3VudHJ5IGltYWdlXG4gICAgbGV0IHNtYWxsUGl4YUNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJjb3VudHJ5LWltYWdlLWNvbnRhaW5lclwiKTtcbiAgICAvLyBUaGlzIG5ldyBpbWFnZSBjb3VudGVyIGdldHMgdGhlIGltYWdlIGluIHRoZSBhcnJheSB0aGF0IGZvbGxvd3MgdGhlIGZpcnN0IGltYWdlIGJlaW5nIHVzZWQgYXMgYSBiYWNrZ3JvdW5kIGltYWdlIGZvciB0aGUgY2FyZFxuICAgIC8vIFRoaXMgaW1hZ2UgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBpbWFnZSBjb250YWluZXJcbiAgICBsZXQgc21hbGxQaXhhSW1hZ2UgPSAkKFwiPGltZz5cIilcbiAgICAgIC5hZGRDbGFzcyhcImNvdW50cnktaW1hZ2VcIilcbiAgICAgIC5hdHRyKHtcbiAgICAgICAgc3JjOiBgJHt0cmF2ZWxBcHAuaW1hZ2VBcnJheVt0cmF2ZWxBcHAucmFuZG9taXplKGltYWdlQ291bnRlciwgaW1hZ2VDb3VudGVyICsgMTUpXX1gLFxuICAgICAgICBhbHQ6IGBTY2VuaWMgaW1hZ2Ugb2YgJHtjb3VudHJ5LmNvdW50cnlOYW1lfS4gSW1hZ2UgdGFncyBpbmNsdWRlICR7dHJhdmVsQXBwLmltYWdlVGV4dEFycmF5fS5gXG4gICAgICB9KTtcbiAgICAvLyBBZGQgMTUgdG8gdGhlIGltYWdlIGNvdW50ZXIgZW5zdXJlcyB0aGF0IGV2ZXJ5IGl0ZXJhdGlvbiB0aHJvdWdoIHRoZSBmb3JFYWNoIHdpbGwgYWRkIGltYWdlcyB0byB0aGUgYXNzb2NpYXRlZCBjb3V0cmllc1xuICAgIGltYWdlQ291bnRlciArPSAxNTtcbiAgICAvL0FwcGVuZCB0aGUgY291bnRyeSBpbWFnZSB0byBpdHMgY29udGFpbmVyXG4gICAgLy8gc21hbGxQaXhhQ29udGFpbmVyRWxlbWVudC5hcHBlbmQoc21hbGxQaXhhSW1hZ2UpO1xuICAgIC8vIEFwcGVuZCB0aGUgY291bnRyeSBuYW1lIDxoMj4sIHdpa2kgdGV4dCA8cD4sIHN0YXQgbGlzdCA8dWw+IGFuZCBpbWFnZSBjb250YWluZXIgPGRpdj4gdG8gdGhlIGNhcmQgPGRpdj4uXG4gICAgY291bnRyeUNhcmRFbGVtZW50LmFwcGVuZChcbiAgICAgIGNvdW50cnlOYW1lRWxlbWVudCxcbiAgICAgIGNvdW50cnlEZXNjcmlwdGlvbkVsZW1lbnQsXG4gICAgICBzdGF0TGlzdEVsZW1lbnQsXG4gICAgICBzbWFsbFBpeGFDb250YWluZXJFbGVtZW50XG4gICAgKTtcbiAgICAvLyBBcHBlbmQgdGhlIGNhcmQgZGl2IHRvIHRoZSByZXN1bHQtY29udGFpbmVyXG4gICAgY291bnRyeUNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKGNvdW50cnlDYXJkRWxlbWVudCk7XG4gICAgLy9BcHBlbmQgdGhlIHJlc3VsdC1jb250YWluZXIgdG8gdGhlIHJlc3VsdHMgc2VjdGlvbiBlbGVtZW50IG9uIG91ciBwYWdlXG4gICAgJChcIi5yZXN1bHRzXCIpLmFwcGVuZChjb3VudHJ5Q29udGFpbmVyRWxlbWVudCk7XG5cbiAgICAvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSBcInN0YXRDaG9pY2VzXCIgYW5kIHNldCB1cCAzIGluZm9ybWF0aW9uOlxuICAgIC8vIDEuIHRpdGxlIG9mIHN0YXQgKHRha2VuIGZyb20gdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5KVxuICAgIC8vIDIuIHZhbHVlIG9mIHN0YXQgKHRha2VuIGZyb20gcmVzdWx0cyBvYmplY3QpXG4gICAgLy8gMy4gZGVzY3JpcHRpb24gb2Ygc3RhdCAodGFrZW4gZnJvbSB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXkpXG4gICAgbGV0IHN0YXRDb3VudGVyID0gMDtcbiAgICBzdGF0Q2hvaWNlcy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgbGV0IHN0YXRUaXRsZSA9IHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheVtzdGF0Q291bnRlcl07XG4gICAgICBsZXQgc3RhdFZhbHVlID0gY291bnRyeVt0cmF2ZWxBcHAuc3RhdENvZGVBcnJheVtzdGF0Q291bnRlcl1dO1xuICAgICAgbGV0IHN0YXREZXNjcmlwdGlvbiA9IHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheVtzdGF0Q291bnRlcl07XG4gICAgICBzdGF0Q291bnRlcisrO1xuICAgICAgLy8gVGhpcyBsaXN0IGl0ZW0gZWxlbWVudCB3aWxsIGhvbGQgc3RhdCBpbmZvcm1hdGlvblxuICAgICAgbGV0IHN0YXRMaXN0SXRlbUVsZW1lbnQgPSAkKFwiPGxpPlwiKS5hZGRDbGFzcyhcInN0YXQtbGlzdF9faXRlbVwiKTtcbiAgICAgIC8vIFRoaXMgZGl2IHdpbGwgaG9sZCB0aGUgc3RhdCB0aXRsZSBhbmQgcXVlc3Rpb24gbWFyayBpY29uXG4gICAgICBsZXQgc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1fX3RpdGxlLWljb24tY29udGFpbmVyXCIpO1xuICAgICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIHRoZSBzdGF0IHRpdGxlIGFuZCB2YWx1ZVxuICAgICAgbGV0IHN0YXRUaXRsZUVsZW1lbnQgPSAkKFwiPGg0PlwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1fX3RpdGxlLWljb24tY29udGFpbmVyX190aXRsZS1udW1iZXJcIilcbiAgICAgICAgLnRleHQoYCR7c3RhdFRpdGxlfTogJHt0cmF2ZWxBcHAubnVtYmVyV2l0aENvbW1hcyhzdGF0VmFsdWUpfWApO1xuICAgICAgLy8gVGhpcyBxdWVzdGlvbiBtYXJrIGljb24gd2lsbCBzaXQgbmV4dCB0byB0aGUgc3RhdFRpdGxlRWxlbWVudCBhbmQgd2hlbiBjbGlja2VkL2hvdmVyb3Zlciwgd2lsbCBkaXNwbGF5IHRoZSBzdGF0IGRlc2NyaXB0aW9uXG4gICAgICBsZXQgc3RhdEhvdmVySWNvbkVsZW1lbnQgPSBgPGkgY2xhc3M9XCJzdGF0LWxpc3RfX2l0ZW1fX3RpdGxlLWljb24tY29udGFpbmVyX19pY29uIGZhciBmYS1xdWVzdGlvbi1jaXJjbGVcIj48L2k+YDtcbiAgICAgIC8vIGFwcGVuZCB0aGUgc3RhdCB0aXRsZSBhbmQgaWNvbiB0byB0aGUgc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnRcbiAgICAgIHN0YXRUaXRsZUljb25Db250YWluZXJFbGVtZW50LmFwcGVuZChzdGF0VGl0bGVFbGVtZW50LCBzdGF0SG92ZXJJY29uRWxlbWVudCk7XG4gICAgICAvLyBUaGlzIGRpdiB3aWxsIGhvbGQgdGhlIHN0YXQgZGVzY3JpcHRpb24gYW5kIGlzIGEgc2libGluZyBvZiB0aGUgc3RhdFRpdGxlSWNvbkNvbnRhaW5lci5cbiAgICAgIGxldCBzdGF0RGVzY3JpcHRpb25Db250YWluZXJFbGVtZW50ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwic3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXIgZGlzcGxheS1ub25lXCIpO1xuICAgICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIHRoZSBzdGF0IGRlc2NyaXB0aW9uXG4gICAgICBsZXQgc3RhdERlc2NyaXB0aW9uRWxlbWVudCA9ICQoXCI8cD5cIilcbiAgICAgICAgLmFkZENsYXNzKFwic3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXJfX2Rlc2NyaXB0aW9uXCIpXG4gICAgICAgIC50ZXh0KHN0YXREZXNjcmlwdGlvbik7XG4gICAgICAvLyBBcHBlbmQgdGhlIHN0YXREZXNjcmlwdGlvbkVsZW1lbnQgdG8gdGhlIHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnRcbiAgICAgIHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKHN0YXREZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgLy8gQXBwZW5kIHRoZSB0d28gc3RhdCBkaXYgY29udGFpbmVycyB0byB0aGUgPGxpPlxuICAgICAgc3RhdExpc3RJdGVtRWxlbWVudC5hcHBlbmQoc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnQsIHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgLy8gQXBwZW5kIHRoZSA8bGk+cyB0byB0aGUgPHVsPlxuICAgICAgc3RhdExpc3RFbGVtZW50LmFwcGVuZChzdGF0TGlzdEl0ZW1FbGVtZW50KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdHJhdmVsQXBwLmZpbmFsRGlzcGxheSgpO1xufTtcblxuLyogIDcuMSBPbmNlIGFsbCBpbWFnZXMgYXJlIGxvYWRlZCBhcyBiYWNrZ3JvdW5kIGltYWdlcyBvciByZWd1bGFyIGltYWdlcywgZGlzcGxheSB0aGUgZmluYWwgcmVzdWx0cyB3aXRob3V0IFwibGFnXCIqL1xudHJhdmVsQXBwLmZpbmFsRGlzcGxheSA9ICgpID0+IHtcbiAgJChcIi5yZXN1bHRzXCIpLndhaXRGb3JJbWFnZXMoZnVuY3Rpb24gKCkge1xuICAgICQoXCIucmVzdWx0c1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG5cbiAgICAkKFwiaHRtbCwgYm9keVwiKVxuICAgICAgLnN0b3AoKVxuICAgICAgLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoXCIucmVzdWx0c1wiKS5vZmZzZXQoKS50b3AgfSwgOTAwLCBcInN3aW5nXCIpO1xuXG4gICAgLy8gcmVtb3ZlIGxvYWRlciBhbmQgZGlzcGxheSBzdWJtaXQgcmFua2luZyBidXR0b24gYWdhaW5cbiAgICBsZXQgbWFya1VwQnV0dG9uID0gYDxsaT48YnV0dG9uIGNsYXNzPVwidXNlci1zdWJtaXQgYnRuXCI+U3VibWl0IFJhbmtpbmc8L2J1dHRvbj48L2xpPmA7XG4gICAgJChcIi5jaG9pY2VzXCIpXG4gICAgICAuZmluZChcImxpOmxhc3QtY2hpbGRcIilcbiAgICAgIC5odG1sKG1hcmtVcEJ1dHRvbik7XG5cbiAgICAvKiBGTElDS0lUWSAqL1xuICAgICQoXCIucmVzdWx0c1wiKS5mbGlja2l0eSh7XG4gICAgICAvLyBvcHRpb25zXG4gICAgICBjZWxsQWxpZ246IFwibGVmdFwiLFxuICAgICAgY29udGFpbjogdHJ1ZSxcbiAgICAgIGF1dG9QbGF5OiA1MDAwLFxuICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgd2F0Y2hDU1M6IHRydWUsXG4gICAgICBsYXp5TG9hZDogdHJ1ZSxcbiAgICAgIC8vIHdyYXBBcm91bmQ6IHRydWVcbiAgICB9KTtcblxuICAgIHRyYXZlbEFwcC5mbGlja2l0eU9uID0gdHJ1ZTtcbiAgfSk7XG59O1xuXG4vLyA3LjIgT24gaG92ZXIgb3IgY2xpY2sgb3ZlciB0aGUgcXVlc3Rpb24gbWFyayBpY29uLCBkaXNwbGF5IHRoZSBzdGF0IGRlc2NyaXB0aW9uXG50cmF2ZWxBcHAuZGlzcGxheVN0YXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgJChcIi5yZXN1bHRzXCIpLm9uKFwiY2xpY2tcIiwgXCIuc3RhdC1saXN0X19pdGVtX190aXRsZS1pY29uLWNvbnRhaW5lcl9faWNvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKFxuICAgICAgJCh0aGlzKVxuICAgICAgICAucGFyZW50cyhcIi5zdGF0LWxpc3RfX2l0ZW1cIilcbiAgICAgICAgLmZpbmQoXCIuc3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXJcIilcbiAgICAgICAgLmhhc0NsYXNzKFwiZGlzcGxheS1ub25lXCIpID09PSBmYWxzZVxuICAgICkge1xuICAgICAgJChcIi5yZXN1bHRzXCIpXG4gICAgICAgIC5maW5kKFwiLnN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIucmVzdWx0c1wiKVxuICAgICAgICAuZmluZChcIi5zdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lclwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5wYXJlbnRzKFwiLnN0YXQtbGlzdF9faXRlbVwiKVxuICAgICAgICAuZmluZChcIi5zdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lclwiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gaG9sZHMgYWxsIG91ciBldmVudHMgZnVudGlvbnNcbnRyYXZlbEFwcC5ldmVudHNGdW5jdGlvbiA9ICgpID0+IHtcbiAgdHJhdmVsQXBwLmdldFVzZXJQdXJwb3NlKCk7XG4gIHRyYXZlbEFwcC5nZXRTdGFydGVkKCk7XG4gIHRyYXZlbEFwcC50cmFuc2Zvcm1TVkcoKTtcbiAgdHJhdmVsQXBwLmRpc3BsYXlTdGF0RGVzY3JpcHRpb24oKTtcbn07XG5cbi8vIEluaXQgZnVuY3Rpb24gdG8gaG9sZCBhbGwgb3VyIGZ1bmN0aW9ucyBpbiBvcmRlclxudHJhdmVsQXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRyYXZlbEFwcC5ldmVudHNGdW5jdGlvbigpO1xuICB0cmF2ZWxBcHAuc2xpZGVEcmFnKCk7XG59O1xuXG4vLyBEb2N1bWVudCBSZWFkeSB0byBjYWxsIG91ciBpbml0KCkgZnVuY3Rpb24gYW5kIHN0YXJ0IHRoZSBhcHBcbiQoZnVuY3Rpb24gKCkge1xuICB0cmF2ZWxBcHAuaW5pdCgpO1xufSk7XG5cbi8qIDguIEVYVFJBIEZVTkNUSU9OUyBVU0VEIFRIUk9VR0hPVVQgQVBQICovXG5cbi8vIDguMSBTb3J0YWJsZSBmdW5jdGlvbmFsaXR5IGZvciBjcml0ZXJpYXNcbnRyYXZlbEFwcC5zbGlkZURyYWcgPSAoKSA9PiB7XG4gICQoXCIuY2hvaWNlc1wiKVxuICAgIC5zb3J0YWJsZSh7XG4gICAgICBjb25uZWN0V2l0aDogXCIuc29ydGFibGVcIixcbiAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICByZXZlcnQ6IHRydWUsXG4gICAgICBoZWxwZXI6IFwiY2xvbmVcIixcbiAgICAgIGNvbnRhaW5tZW50OiBcIi5jcml0ZXJpYXMtY29udGFpbmVyXCJcbiAgICB9KVxuICAgIC5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICAkKFwidWwsIGxpXCIpLmRpc2FibGVTZWxlY3Rpb24oKTtcbn07XG5cbi8vIDguMiBSYW5kb21pemVyIGZ1bmN0aW9uIHRvIHNlbGVjdCByYW5kb20gaW1hZ2VzIHRvIGRpc3BsYXlcbnRyYXZlbEFwcC5yYW5kb21pemUgPSAoc3RhcnRpbmdOdW0sIGVuZGluZ051bSkgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZGluZ051bSAtIHN0YXJ0aW5nTnVtKSkgKyBzdGFydGluZ051bTtcbn07XG5cbi8vIDguMyBFdmVudCBsaXN0ZW5lciB0byB0cmFuc2Zvcm0gU1ZHcyBpbnRvIGlubGluZSBTVkdTIHRvIGJlIGFibGUgdG8gY2hhbmdlIHRoZWlyIGNvbG9ycyB3aXRoIGNzcyBmaWxsXG50cmF2ZWxBcHAudHJhbnNmb3JtU1ZHID0gKCkgPT4ge1xuICBqUXVlcnkoXCJpbWcuc3ZnXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciAkaW1nID0galF1ZXJ5KHRoaXMpO1xuICAgIHZhciBpbWdJRCA9ICRpbWcuYXR0cihcImlkXCIpO1xuICAgIHZhciBpbWdDbGFzcyA9ICRpbWcuYXR0cihcImNsYXNzXCIpO1xuICAgIHZhciBpbWdVUkwgPSAkaW1nLmF0dHIoXCJzcmNcIik7XG5cbiAgICBqUXVlcnkuZ2V0KFxuICAgICAgaW1nVVJMLFxuICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBTVkcgdGFnLCBpZ25vcmUgdGhlIHJlc3RcbiAgICAgICAgdmFyICRzdmcgPSBqUXVlcnkoZGF0YSkuZmluZChcInN2Z1wiKTtcblxuICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBJRCB0byB0aGUgbmV3IFNWR1xuICAgICAgICBpZiAodHlwZW9mIGltZ0lEICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cihcImlkXCIsIGltZ0lEKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBjbGFzc2VzIHRvIHRoZSBuZXcgU1ZHXG4gICAgICAgIGlmICh0eXBlb2YgaW1nQ2xhc3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAkc3ZnID0gJHN2Zy5hdHRyKFwiY2xhc3NcIiwgaW1nQ2xhc3MgKyBcIiByZXBsYWNlZC1zdmdcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYW55IGludmFsaWQgWE1MIHRhZ3MgYXMgcGVyIGh0dHA6Ly92YWxpZGF0b3IudzMub3JnXG4gICAgICAgICRzdmcgPSAkc3ZnLnJlbW92ZUF0dHIoXCJ4bWxuczphXCIpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSB2aWV3cG9ydCBpcyBzZXQsIGlmIHRoZSB2aWV3cG9ydCBpcyBub3Qgc2V0IHRoZSBTVkcgd29udCd0IHNjYWxlLlxuICAgICAgICBpZiAoISRzdmcuYXR0cihcInZpZXdCb3hcIikgJiYgJHN2Zy5hdHRyKFwiaGVpZ2h0XCIpICYmICRzdmcuYXR0cihcIndpZHRoXCIpKSB7XG4gICAgICAgICAgJHN2Zy5hdHRyKFwidmlld0JveFwiLCBcIjAgMCBcIiArICRzdmcuYXR0cihcImhlaWdodFwiKSArIFwiIFwiICsgJHN2Zy5hdHRyKFwid2lkdGhcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwbGFjZSBpbWFnZSB3aXRoIG5ldyBTVkdcbiAgICAgICAgJGltZy5yZXBsYWNlV2l0aCgkc3ZnKTtcbiAgICAgIH0sXG4gICAgICBcInhtbFwiXG4gICAgKTtcbiAgfSk7XG59O1xuXG4vKiA4LjQgVFJBTlNGT1JNIFNUUklORyBOVU1CRVJTIElOVE8gU0VQQVJBVEVEIFNUUklOR1MgV0lUSCBQUk9QRVIgQ09NTUFTIEZPUiBFQUNIIFRIT1VTQU5EIFVOSVQgKi9cbnRyYXZlbEFwcC5udW1iZXJXaXRoQ29tbWFzID0gc3RhdCA9PiB7XG4gIHJldHVybiBzdGF0LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB7bWV0aG9kOiAnZ2V0J30sIHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8qKlxuICogRmFzdFByaW9yaXR5UXVldWUuanMgOiBhIGZhc3QgaGVhcC1iYXNlZCBwcmlvcml0eSBxdWV1ZSAgaW4gSmF2YVNjcmlwdC5cbiAqIChjKSB0aGUgYXV0aG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqXG4gKiBTcGVlZC1vcHRpbWl6ZWQgaGVhcC1iYXNlZCBwcmlvcml0eSBxdWV1ZSBmb3IgbW9kZXJuIGJyb3dzZXJzIGFuZCBKYXZhU2NyaXB0IGVuZ2luZXMuXG4gKlxuICogVXNhZ2UgOlxuICAgICAgICAgSW5zdGFsbGF0aW9uIChpbiBzaGVsbCwgaWYgeW91IHVzZSBub2RlKTpcbiAgICAgICAgICQgbnBtIGluc3RhbGwgZmFzdHByaW9yaXR5cXVldWVcblxuICAgICAgICAgUnVubmluZyB0ZXN0IHByb2dyYW0gKGluIEphdmFTY3JpcHQpOlxuXG4gICAgICAgICAvLyB2YXIgRmFzdFByaW9yaXR5UXVldWUgPSByZXF1aXJlKFwiZmFzdHByaW9yaXR5cXVldWVcIik7Ly8gaW4gbm9kZVxuICAgICAgICAgdmFyIHggPSBuZXcgRmFzdFByaW9yaXR5UXVldWUoKTtcbiAgICAgICAgIHguYWRkKDEpO1xuICAgICAgICAgeC5hZGQoMCk7XG4gICAgICAgICB4LmFkZCg1KTtcbiAgICAgICAgIHguYWRkKDQpO1xuICAgICAgICAgeC5hZGQoMyk7XG4gICAgICAgICB4LnBlZWsoKTsgLy8gc2hvdWxkIHJldHVybiAwLCBsZWF2ZXMgeCB1bmNoYW5nZWRcbiAgICAgICAgIHguc2l6ZTsgLy8gc2hvdWxkIHJldHVybiA1LCBsZWF2ZXMgeCB1bmNoYW5nZWRcbiAgICAgICAgIHdoaWxlKCF4LmlzRW1wdHkoKSkge1xuICAgICAgICAgICBjb25zb2xlLmxvZyh4LnBvbGwoKSk7XG4gICAgICAgICB9IC8vIHdpbGwgcHJpbnQgMCAxIDMgNCA1XG4gICAgICAgICB4LnRyaW0oKTsgLy8gKG9wdGlvbmFsKSBvcHRpbWl6ZXMgbWVtb3J5IHVzYWdlXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRjb21wYXJhdG9yID0gZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA8IGI7XG59O1xuXG4vLyB0aGUgcHJvdmlkZWQgY29tcGFyYXRvciBmdW5jdGlvbiBzaG91bGQgdGFrZSBhLCBiIGFuZCByZXR1cm4gKnRydWUqIHdoZW4gYSA8IGJcbmZ1bmN0aW9uIEZhc3RQcmlvcml0eVF1ZXVlKGNvbXBhcmF0b3IpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEZhc3RQcmlvcml0eVF1ZXVlKSkgcmV0dXJuIG5ldyBGYXN0UHJpb3JpdHlRdWV1ZShjb21wYXJhdG9yKTtcbiAgdGhpcy5hcnJheSA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLmNvbXBhcmUgPSBjb21wYXJhdG9yIHx8IGRlZmF1bHRjb21wYXJhdG9yO1xufVxuXG4vLyBjb3B5IHRoZSBwcmlvcml0eSBxdWV1ZSBpbnRvIGFub3RoZXIsIGFuZCByZXR1cm4gaXQuIFF1ZXVlIGl0ZW1zIGFyZSBzaGFsbG93LWNvcGllZC5cbi8vIFJ1bnMgaW4gYE8obilgIHRpbWUuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGZwcSA9IG5ldyBGYXN0UHJpb3JpdHlRdWV1ZSh0aGlzLmNvbXBhcmUpO1xuICBmcHEuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xuICAgIGZwcS5hcnJheS5wdXNoKHRoaXMuYXJyYXlbaV0pO1xuICB9XG4gIHJldHVybiBmcHE7XG59O1xuXG4vLyBBZGQgYW4gZWxlbWVudCBpbnRvIHRoZSBxdWV1ZVxuLy8gcnVucyBpbiBPKGxvZyBuKSB0aW1lXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24obXl2YWwpIHtcbiAgdmFyIGkgPSB0aGlzLnNpemU7XG4gIHRoaXMuYXJyYXlbdGhpcy5zaXplXSA9IG15dmFsO1xuICB0aGlzLnNpemUgKz0gMTtcbiAgdmFyIHA7XG4gIHZhciBhcDtcbiAgd2hpbGUgKGkgPiAwKSB7XG4gICAgcCA9IChpIC0gMSkgPj4gMTtcbiAgICBhcCA9IHRoaXMuYXJyYXlbcF07XG4gICAgaWYgKCF0aGlzLmNvbXBhcmUobXl2YWwsIGFwKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBhcDtcbiAgICBpID0gcDtcbiAgfVxuICB0aGlzLmFycmF5W2ldID0gbXl2YWw7XG59O1xuXG4vLyByZXBsYWNlIHRoZSBjb250ZW50IG9mIHRoZSBoZWFwIGJ5IHByb3ZpZGVkIGFycmF5IGFuZCBcImhlYXBpZnkgaXRcIlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmhlYXBpZnkgPSBmdW5jdGlvbihhcnIpIHtcbiAgdGhpcy5hcnJheSA9IGFycjtcbiAgdGhpcy5zaXplID0gYXJyLmxlbmd0aDtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IHRoaXMuc2l6ZSA+PiAxOyBpID49IDA7IGktLSkge1xuICAgIHRoaXMuX3BlcmNvbGF0ZURvd24oaSk7XG4gIH1cbn07XG5cbi8vIGZvciBpbnRlcm5hbCB1c2VcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fcGVyY29sYXRlVXAgPSBmdW5jdGlvbihpLCBmb3JjZSkge1xuICB2YXIgbXl2YWwgPSB0aGlzLmFycmF5W2ldO1xuICB2YXIgcDtcbiAgdmFyIGFwO1xuICB3aGlsZSAoaSA+IDApIHtcbiAgICBwID0gKGkgLSAxKSA+PiAxO1xuICAgIGFwID0gdGhpcy5hcnJheVtwXTtcbiAgICAvLyBmb3JjZSB3aWxsIHNraXAgdGhlIGNvbXBhcmVcbiAgICBpZiAoIWZvcmNlICYmICF0aGlzLmNvbXBhcmUobXl2YWwsIGFwKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBhcDtcbiAgICBpID0gcDtcbiAgfVxuICB0aGlzLmFycmF5W2ldID0gbXl2YWw7XG59O1xuXG4vLyBmb3IgaW50ZXJuYWwgdXNlXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX3BlcmNvbGF0ZURvd24gPSBmdW5jdGlvbihpKSB7XG4gIHZhciBzaXplID0gdGhpcy5zaXplO1xuICB2YXIgaHNpemUgPSB0aGlzLnNpemUgPj4+IDE7XG4gIHZhciBhaSA9IHRoaXMuYXJyYXlbaV07XG4gIHZhciBsO1xuICB2YXIgcjtcbiAgdmFyIGJlc3RjO1xuICB3aGlsZSAoaSA8IGhzaXplKSB7XG4gICAgbCA9IChpIDw8IDEpICsgMTtcbiAgICByID0gbCArIDE7XG4gICAgYmVzdGMgPSB0aGlzLmFycmF5W2xdO1xuICAgIGlmIChyIDwgc2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY29tcGFyZSh0aGlzLmFycmF5W3JdLCBiZXN0YykpIHtcbiAgICAgICAgbCA9IHI7XG4gICAgICAgIGJlc3RjID0gdGhpcy5hcnJheVtyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbXBhcmUoYmVzdGMsIGFpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBiZXN0YztcbiAgICBpID0gbDtcbiAgfVxuICB0aGlzLmFycmF5W2ldID0gYWk7XG59O1xuXG4vLyBpbnRlcm5hbFxuLy8gX3JlbW92ZUF0KGluZGV4KSB3aWxsIHJlbW92ZSB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggZnJvbSB0aGUgcXVldWUsXG4vLyByZXRhaW5pbmcgYmFsYW5jZS4gcmV0dXJucyB0aGUgcmVtb3ZlZCBpdGVtLCBvciB1bmRlZmluZWQgaWYgbm90aGluZyBpcyByZW1vdmVkLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLl9yZW1vdmVBdCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGlmIChpbmRleCA+IHRoaXMuc2l6ZSAtIDEgfHwgaW5kZXggPCAwKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIC8vIGltcGwxOlxuICAvL3RoaXMuYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgLy90aGlzLmhlYXBpZnkodGhpcy5hcnJheSk7XG4gIC8vIGltcGwyOlxuICB0aGlzLl9wZXJjb2xhdGVVcChpbmRleCwgdHJ1ZSk7XG4gIHJldHVybiB0aGlzLnBvbGwoKTtcbn07XG5cbi8vIHJlbW92ZShteXZhbCkgd2lsbCByZW1vdmUgYW4gaXRlbSBtYXRjaGluZyB0aGUgcHJvdmlkZWQgdmFsdWUgZnJvbSB0aGVcbi8vIHF1ZXVlLCBjaGVja2VkIGZvciBlcXVhbGl0eSBieSB1c2luZyB0aGUgcXVldWUncyBjb21wYXJhdG9yLlxuLy8gcmV0dXJuIHRydWUgaWYgcmVtb3ZlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKG15dmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICBpZiAoIXRoaXMuY29tcGFyZSh0aGlzLmFycmF5W2ldLCBteXZhbCkgJiYgIXRoaXMuY29tcGFyZShteXZhbCwgdGhpcy5hcnJheVtpXSkpIHtcbiAgICAgIC8vIGl0ZW1zIG1hdGNoLCBjb21wYXJhdG9yIHJldHVybnMgZmFsc2UgYm90aCB3YXlzLCByZW1vdmUgaXRlbVxuICAgICAgdGhpcy5fcmVtb3ZlQXQoaSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gaW50ZXJuYWxcbi8vIHJlbW92ZXMgYW5kIHJldHVybnMgaXRlbXMgZm9yIHdoaWNoIHRoZSBjYWxsYmFjayByZXR1cm5zIHRydWUuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX2JhdGNoUmVtb3ZlID0gZnVuY3Rpb24oY2FsbGJhY2ssIGxpbWl0KSB7XG4gIC8vIGluaXRpYWxpemUgcmV0dXJuIGFycmF5IHdpdGggbWF4IHNpemUgb2YgdGhlIGxpbWl0IG9yIGN1cnJlbnQgcXVldWUgc2l6ZVxuICB2YXIgcmV0QXJyID0gbmV3IEFycmF5KGxpbWl0ID8gbGltaXQgOiB0aGlzLnNpemUpO1xuICB2YXIgY291bnQgPSAwO1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5zaXplKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdGhpcy5zaXplICYmIGNvdW50IDwgcmV0QXJyLmxlbmd0aCkge1xuICAgICAgaWYgKGNhbGxiYWNrKHRoaXMuYXJyYXlbaV0pKSB7XG4gICAgICAgIHJldEFycltjb3VudF0gPSB0aGlzLl9yZW1vdmVBdChpKTtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgLy8gbW92ZSB1cCBhIGxldmVsIGluIHRoZSBoZWFwIGlmIHdlIHJlbW92ZSBhbiBpdGVtXG4gICAgICAgIGkgPSBpID4+IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSBcbiAgfVxuICByZXRBcnIubGVuZ3RoID0gY291bnQ7XG4gIHJldHVybiByZXRBcnI7XG59XG5cbi8vIHJlbW92ZU9uZShjYWxsYmFjaykgd2lsbCBleGVjdXRlIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtIG9mIHRoZSBxdWV1ZVxuLy8gYW5kIHdpbGwgcmVtb3ZlIHRoZSBmaXJzdCBpdGVtIGZvciB3aGljaCB0aGUgY2FsbGJhY2sgd2lsbCByZXR1cm4gdHJ1ZS5cbi8vIHJldHVybiB0aGUgcmVtb3ZlZCBpdGVtLCBvciB1bmRlZmluZWQgaWYgbm90aGluZyBpcyByZW1vdmVkLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlbW92ZU9uZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIHZhciBhcnIgPSB0aGlzLl9iYXRjaFJlbW92ZShjYWxsYmFjaywgMSk7XG4gIHJldHVybiBhcnIubGVuZ3RoID4gMCA/IGFyclswXSA6IHVuZGVmaW5lZDtcbn07XG5cbi8vIHJlbW92ZShjYWxsYmFja1ssIGxpbWl0XSkgd2lsbCBleGVjdXRlIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtIG9mXG4vLyB0aGUgcXVldWUgYW5kIHdpbGwgcmVtb3ZlIGVhY2ggaXRlbSBmb3Igd2hpY2ggdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1ZSwgdXAgdG9cbi8vIGEgbWF4IGxpbWl0IG9mIHJlbW92ZWQgaXRlbXMgaWYgc3BlY2lmaWVkIG9yIG5vIGxpbWl0IGlmIHVuc3BlY2lmaWVkLlxuLy8gcmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHJlbW92ZWQgaXRlbXMuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucmVtb3ZlTWFueSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBsaW1pdCkge1xuICByZXR1cm4gdGhpcy5fYmF0Y2hSZW1vdmUoY2FsbGJhY2ssIGxpbWl0KTtcbn07XG5cbi8vIExvb2sgYXQgdGhlIHRvcCBvZiB0aGUgcXVldWUgKG9uZSBvZiB0aGUgc21hbGxlc3QgZWxlbWVudHMpIHdpdGhvdXQgcmVtb3ZpbmcgaXRcbi8vIGV4ZWN1dGVzIGluIGNvbnN0YW50IHRpbWVcbi8vXG4vLyBDYWxsaW5nIHBlZWsgb24gYW4gZW1wdHkgcHJpb3JpdHkgcXVldWUgcmV0dXJuc1xuLy8gdGhlIFwidW5kZWZpbmVkXCIgdmFsdWUuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy91bmRlZmluZWRcbi8vXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zaXplID09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gIHJldHVybiB0aGlzLmFycmF5WzBdO1xufTtcblxuLy8gcmVtb3ZlIHRoZSBlbGVtZW50IG9uIHRvcCBvZiB0aGUgaGVhcCAob25lIG9mIHRoZSBzbWFsbGVzdCBlbGVtZW50cylcbi8vIHJ1bnMgaW4gbG9nYXJpdGhtaWMgdGltZVxuLy9cbi8vIElmIHRoZSBwcmlvcml0eSBxdWV1ZSBpcyBlbXB0eSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlXG4vLyBcInVuZGVmaW5lZFwiIHZhbHVlLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvdW5kZWZpbmVkXG4vL1xuLy8gRm9yIGxvbmctcnVubmluZyBhbmQgbGFyZ2UgcHJpb3JpdHkgcXVldWVzLCBvciBwcmlvcml0eSBxdWV1ZXNcbi8vIHN0b3JpbmcgbGFyZ2Ugb2JqZWN0cywgeW91IG1heSAgd2FudCB0byBjYWxsIHRoZSB0cmltIGZ1bmN0aW9uXG4vLyBhdCBzdHJhdGVnaWMgdGltZXMgdG8gcmVjb3ZlciBhbGxvY2F0ZWQgbWVtb3J5LlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnBvbGwgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgYW5zID0gdGhpcy5hcnJheVswXTtcbiAgaWYgKHRoaXMuc2l6ZSA+IDEpIHtcbiAgICB0aGlzLmFycmF5WzBdID0gdGhpcy5hcnJheVstLXRoaXMuc2l6ZV07XG4gICAgdGhpcy5fcGVyY29sYXRlRG93bigwKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNpemUgLT0gMTtcbiAgfVxuICByZXR1cm4gYW5zO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBhZGRzIHRoZSBwcm92aWRlZCB2YWx1ZSB0byB0aGUgaGVhcCwgd2hpbGUgcmVtb3Zpbmdcbi8vIGFuZCByZXR1cm5pbmcgb25lIG9mIHRoZSBzbWFsbGVzdCBlbGVtZW50cyAobGlrZSBwb2xsKS4gVGhlIHNpemUgb2YgdGhlIHF1ZXVlXG4vLyB0aHVzIHJlbWFpbnMgdW5jaGFuZ2VkLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlcGxhY2VUb3AgPSBmdW5jdGlvbihteXZhbCkge1xuICBpZiAodGhpcy5zaXplID09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciBhbnMgPSB0aGlzLmFycmF5WzBdO1xuICB0aGlzLmFycmF5WzBdID0gbXl2YWw7XG4gIHRoaXMuX3BlcmNvbGF0ZURvd24oMCk7XG4gIHJldHVybiBhbnM7XG59O1xuXG4vLyByZWNvdmVyIHVudXNlZCBtZW1vcnkgKGZvciBsb25nLXJ1bm5pbmcgcHJpb3JpdHkgcXVldWVzKVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5hcnJheSA9IHRoaXMuYXJyYXkuc2xpY2UoMCwgdGhpcy5zaXplKTtcbn07XG5cbi8vIENoZWNrIHdoZXRoZXIgdGhlIGhlYXAgaXMgZW1wdHlcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNpemUgPT09IDA7XG59O1xuXG4vLyBpdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIGluIG9yZGVyLCBwYXNzIGEgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAoaXRlbSwgaW5kZXgpIGFzIGFyZ3MuXG4vLyBUT0RPIG9uY2Ugd2UgdHJhbnNwaWxlLCB1bmNvbW1lbnRcbi8vIGlmIChTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yKSB7XG4vLyAgIEZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24qKCkge1xuLy8gICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuLy8gICAgIHZhciBmcHEgPSB0aGlzLmNsb25lKCk7XG4vLyAgICAgd2hpbGUgKCFmcHEuaXNFbXB0eSgpKSB7XG4vLyAgICAgICB5aWVsZCBmcHEucG9sbCgpO1xuLy8gICAgIH1cbi8vICAgfTtcbi8vIH1cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgaWYgKHRoaXMuaXNFbXB0eSgpIHx8IHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSByZXR1cm47XG4gIHZhciBpID0gMDtcbiAgdmFyIGZwcSA9IHRoaXMuY2xvbmUoKTtcbiAgd2hpbGUgKCFmcHEuaXNFbXB0eSgpKSB7XG4gICAgY2FsbGJhY2soZnBxLnBvbGwoKSwgaSsrKTtcbiAgfVxufTtcblxuLy8gcmV0dXJuIHRoZSBrICdzbWFsbGVzdCcgZWxlbWVudHMgb2YgdGhlIHF1ZXVlXG4vLyBydW5zIGluIE8oayBsb2cgaykgdGltZVxuLy8gdGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiByZXBlYXRlZGx5IGNhbGxpbmcgcG9sbCwgYnV0XG4vLyBpdCBoYXMgYSBiZXR0ZXIgY29tcHV0YXRpb25hbCBjb21wbGV4aXR5LCB3aGljaCBjYW4gYmVcbi8vIGltcG9ydGFudCBmb3IgbGFyZ2UgZGF0YSBzZXRzLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmtTbWFsbGVzdCA9IGZ1bmN0aW9uKGspIHtcbiAgaWYgKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gW107XG4gIHZhciBjb21wYXJhdG9yID0gdGhpcy5jb21wYXJlO1xuICB2YXIgYXJyID0gdGhpcy5hcnJheVxuICB2YXIgZnBxID0gbmV3IEZhc3RQcmlvcml0eVF1ZXVlKGZ1bmN0aW9uKGEsYil7XG4gICByZXR1cm4gY29tcGFyYXRvcihhcnJbYV0sYXJyW2JdKTtcbiAgfSk7XG4gIGsgPSBNYXRoLm1pbih0aGlzLnNpemUsIGspO1xuICB2YXIgc21hbGxlc3QgPSBuZXcgQXJyYXkoayk7XG4gIHZhciBqID0gMDtcbiAgZnBxLmFkZCgwKTtcbiAgd2hpbGUgKGogPCBrKSB7XG4gICAgdmFyIHNtYWxsID0gZnBxLnBvbGwoKTtcbiAgICBzbWFsbGVzdFtqKytdID0gdGhpcy5hcnJheVtzbWFsbF07XG4gICAgdmFyIGwgPSAoc21hbGwgPDwgMSkgKyAxO1xuICAgIHZhciByID0gbCArIDE7XG4gICAgaWYgKGwgPCB0aGlzLnNpemUpIGZwcS5hZGQobCk7XG4gICAgaWYgKHIgPCB0aGlzLnNpemUpIGZwcS5hZGQocik7XG4gIH1cbiAgcmV0dXJuIHNtYWxsZXN0O1xufVxuXG4vLyBqdXN0IGZvciBpbGx1c3RyYXRpb24gcHVycG9zZXNcbnZhciBtYWluID0gZnVuY3Rpb24oKSB7XG4gIC8vIG1haW4gY29kZVxuICB2YXIgeCA9IG5ldyBGYXN0UHJpb3JpdHlRdWV1ZShmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEgPCBiO1xuICB9KTtcbiAgeC5hZGQoMSk7XG4gIHguYWRkKDApO1xuICB4LmFkZCg1KTtcbiAgeC5hZGQoNCk7XG4gIHguYWRkKDMpO1xuICB3aGlsZSAoIXguaXNFbXB0eSgpKSB7XG4gICAgY29uc29sZS5sb2coeC5wb2xsKCkpO1xuICB9XG59O1xuXG5pZiAocmVxdWlyZS5tYWluID09PSBtb2R1bGUpIHtcbiAgbWFpbigpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhc3RQcmlvcml0eVF1ZXVlO1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl19
