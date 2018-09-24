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
      exchars: 280,
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
    smallPixaContainerElement.append(smallPixaImage);
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
      watchCSS: true
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
<<<<<<< HEAD
  (0, _sweetalert2.default)({
    type: "warning",
    title: "API Unavailable",
    text: "As of September 19th 2018, the INQstats API (which is used to calculate the travel recommendations) is temporarily down. The results functionality is therefore not available until further notice. We sincerely apologize for this inconvenience and ask you to come back to our application in the near future."
  });
=======
>>>>>>> 5c99da831cb667d763122f4abb11a7a3318126b8
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2Zhc3Rwcmlvcml0eXF1ZXVlL0Zhc3RQcmlvcml0eVF1ZXVlLmpzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTs7Ozs7Ozs7QUFGQTtBQUNBLElBQU0sVUFBVSxRQUFRLG1CQUFSLENBQWhCOzs7QUFHQTtBQUNBLElBQU0sWUFBWSxFQUFsQjs7QUFFQTtBQUNBLFVBQVUsU0FBVixHQUFzQjtBQUNwQjtBQUNBO0FBQ0E7QUFDRSxNQUFJLGlCQUROO0FBRUUsU0FBTyxDQUNMO0FBQ0UsVUFBTSxTQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSwwQkFIWjtBQUlFLGlCQUFhO0FBSmYsR0FESyxFQU9MO0FBQ0UsVUFBTSxpQkFEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUsaUJBSFo7QUFJRSxpQkFDRTtBQUxKLEdBUEssRUFjTDtBQUNFLFVBQU0sa0JBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLGtCQUhaO0FBSUUsaUJBQ0U7QUFMSixHQWRLLEVBcUJMO0FBQ0UsVUFBTSxxQkFEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUscUJBSFo7QUFJRSxpQkFBYTtBQUpmLEdBckJLLEVBMkJMO0FBQ0UsVUFBTSxrQkFEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUseUJBSFo7QUFJRSxpQkFBYTtBQUpmLEdBM0JLLEVBaUNMO0FBQ0UsVUFBTSxxQkFEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUsYUFIWjtBQUlFLGlCQUFhO0FBSmYsR0FqQ0s7QUFGVCxDQUhvQjtBQThDcEI7QUFDQTtBQUNBO0FBQ0UsTUFBSSxrQkFETjtBQUVFLFNBQU8sQ0FDTDtBQUNFLFVBQU0sdUJBRFI7QUFFRSxlQUFXLEtBRmI7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QUF4QixFQUFpRCxHQUFqRCxDQUFQO0FBQ0QsQ0FGRDs7O0FDaitCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIElNUE9SVCBIRUFQIE1PRFVMRSBGUk9NIE5QTVxuY29uc3QgTWluSGVhcCA9IHJlcXVpcmUoXCJmYXN0cHJpb3JpdHlxdWV1ZVwiKTtcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xuXG4vLyBDcmVhdGUgYW4gb2JqZWN0IHJlcHJlc2VudGluZyBvdXIgdHJhdmVsIGFwcCAoTkFNRVNQQUNFKVxuY29uc3QgdHJhdmVsQXBwID0ge307XG5cbi8vIEFSUkFZIFdJVEggQUxMIFJFTEVWQU5UIFNUQVRTIEZPUiBFQUNIIFBVUlBPU0VcbnRyYXZlbEFwcC5zdGF0QXJyYXkgPSBbXG4gIC8vIFZBQ0FUSU9OIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi12YWNhdGlvblwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVuc2l0eVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlBvcHVsYXRpb24gRGVuc2l0eSAobG93KVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcG9wdWxhdGlvbiBkZW5zaXR5IGlzIG1lYXN1cmVkIGluIHBlciBrbcKyLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInRvdXJpc3RfYXJyaXZhbHNcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJUb3VyaXN0IEFycml2YWxzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUmVwcmVzZW50cyBmb3JlaWduIGNpdGl6ZW5zIHRoYXQgc3RheWVkIGF0IGxlYXN0IG9uZSBuaWdodC4gSW5jbHVkZXMgaG90ZWwgc3RheXMsIHRyYW5zZmVycywgY29uZmVyZW5jZSB2aXNpdHMsIGV0Yy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ0b3VyaXNtX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVG91cmlzdCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYW1vdW50IG9mIGdvdmVybm1lbnQgc3BlbmRpbmcgZGVkaWNhdGVkIGZvciB0b3VyaXNtIChpbiAlIG9mIHRoZSBHRFAgZm9yIGEgY291bnRyeSkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidXJiYW5fcG9wdWxhdGlvblwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlVyYmFuIFBvcHVsYXRpb24gKGhpZ2gpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwZXJjZW50YWdlIG9mIHBlb3BsZSB3aG8gbGl2ZSBpbiBhIGNpdHkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZm9yZXN0X2FyZWFfcGVyY2VudFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkZvcmVzdCBBcmVhXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB0b3RhbCBhbW91bnQgb2YgZm9yZXN0IGFyZWEgaW4gYSBjb3VudHJ5IChpbiBrbcKyKVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBFRFVDQVRJT04gQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi1lZHVjYXRpb25cIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImVkdWNhdGlvbl9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkVkdWNhdGlvbiBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFZHVjYXRpb24gZXhwZW5kaXR1cmUgcmVwcmVzZW50cyBnb3Zlcm5tZW50IHNwZW5kaW5nIGluICUgb2YgR0RQLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImNvMl9lbWlzc2lvbnNcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJDTzIgRW1pc3Npb25zXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNPMiBlbWlzc2lvbnMgaW4gbWV0cmljIHRvbnMgcGVyIHBlcnNvbiBwZXIgeWVhci5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJjb3JydXB0aW9uX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiQ29ycnVwdGlvbiBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDb3JydXB0aW9uIFBlcmNlcHRpb25zIEluZGV4IChDUEkpLiAoU2NhbGU6IDAtMTAwOyAwID0gaGlnaCBjb3JydXB0aW9uLiAxMDAgPSBsb3cgY29ycnVwdGlvbikuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGFwcGluZXNzX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGFwcGluZXNzIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFzZWQgb24gZmFjdG9ycyBzdWNoIGFzIEdEUCBwZXIgY2FwaXRhLCBzb2NpYWwgc3VwcG9ydCwgbGlmZSBleHBlY3RhbmN5LiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhhcHBpZXIgdGhlIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGRpXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSHVtYW4gRGV2ZWxvcG1lbnQgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJJbmRpY2F0b3Igb2YgbGlmZSBleHBlY3RhbmN5LCBlZHVjYXRpb24sIGFuZCBwZXIgY2FwaXRhIGluY29tZS4gKFNjYWxlOiAwLTE7IDAgPSBsb3cgc2NvcmUuIDEgPSBoaWdoIHNjb3JlKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZWFsdGhfZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIZWFsdGggRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUHVibGljIHNwZW5kaW5nIG9uIGhlYWx0aCwgbWVhc3VyZWQgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFZJU0lUT1IgVklTQSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXZpc2l0LXZpc2FcIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ0b3VyaXN0X2Fycml2YWxzXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVG91cmlzdCBBcnJpdmFsc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlJlcHJlc2VudHMgZm9yZWlnbiBjaXRpemVucyB0aGF0IHN0YXllZCBhdCBsZWFzdCBvbmUgbmlnaHQuIEluY2x1ZGVzIGhvdGVsIHN0YXlzLCB0cmFuc2ZlcnMsIGNvbmZlcmVuY2UgdmlzaXRzLCBldGMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVuc2l0eVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlBvcHVsYXRpb24gRGVuc2l0eSAobG93KVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcG9wdWxhdGlvbiBkZW5zaXR5IGlzIG1lYXN1cmVkIGluIHBlciBrbcKyLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImNvMl9lbWlzc2lvbnNcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJDTzIgRW1pc3Npb25zXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNPMiBlbWlzc2lvbnMgaW4gbWV0cmljIHRvbnMgcGVyIHBlcnNvbiBwZXIgeWVhci5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJpbmZsYXRpb25cIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJJbmZsYXRpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGFubnVhbCBjaGFuZ2Ugb2YgY29uc3VtZXIgcHJpY2VzICh1bml0OiAlKS5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gV09SS0lORyBIT0xJREFZIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24td29yay1ob2xpZGF5XCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZW5zaXR5XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiUG9wdWxhdGlvbiBEZW5zaXR5IChsb3cpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwb3B1bGF0aW9uIGRlbnNpdHkgaXMgbWVhc3VyZWQgaW4gcGVyIGttwrIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidG91cmlzdF9hcnJpdmFsc1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlRvdXJpc3QgQXJyaXZhbHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJSZXByZXNlbnRzIGZvcmVpZ24gY2l0aXplbnMgdGhhdCBzdGF5ZWQgYXQgbGVhc3Qgb25lIG5pZ2h0LiBJbmNsdWRlcyBob3RlbCBzdGF5cywgdHJhbnNmZXJzLCBjb25mZXJlbmNlIHZpc2l0cywgZXRjLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJidXR0b24tcGVybS1zb2xvXCIsXG4gICAgICAgIHN0YXQ6IFwiZ2luaVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkdpbmkgQ29lZmZpY2llbnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJTdGF0ZXMgaG93IHVuaWZvcm1seSBhc3NldHMgYXJlIGRpc3RyaWJ1dGVkLiAoc2NhbGU6IDAtMTAwOyAwID0gZXF1YWwgZGlzdHJpYnV0aW9uLiAxMDAgPSB1bmVxdWFsIGRpc3RyaWJ1dGlvbikuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGFwcGluZXNzX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGFwcGluZXNzIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFzZWQgb24gZmFjdG9ycyBzdWNoIGFzIEdEUCBwZXIgY2FwaXRhLCBzb2NpYWwgc3VwcG9ydCwgbGlmZSBleHBlY3RhbmN5LiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhhcHBpZXIgdGhlIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiam9ibGVzc19yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSm9ibGVzcyBSYXRlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBudW1iZXIgb2YgdW5lbXBsb3llZCBwZW9wbGUgaW4gcmVsYXRpb24gdG8gdGhlIGxhYm9yIGZvcmNlIGZvciBhIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwibWVkaWFud2FnZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIk1lZGlhbiBXYWdlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQSBtZWFzdXJlIG9mIHRoZSBtb250aGx5IG1lZGlhbiB3YWdlIGJlZm9yZSB0YXhlcywgaW5jbHVkaW5nIHB1YmxpYyBiZW5lZml0cyAoZS5nIGNoaWxkIGFsbG93YW5jZSk7IHVuaXQ6IFVTRC5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gUEVSTUFORU5ULVNPTE8gQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi1wZXJtLXNvbG9cIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImhkaVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkh1bWFuIERldmVsb3BtZW50IEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiSW5kaWNhdG9yIG9mIGxpZmUgZXhwZWN0YW5jeSwgZWR1Y2F0aW9uLCBhbmQgcGVyIGNhcGl0YSBpbmNvbWUuIChTY2FsZTogMC0xOyAwID0gbG93IHNjb3JlLiAxID0gaGlnaCBzY29yZSkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiY29ycnVwdGlvbl9pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkNvcnJ1cHRpb24gSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ29ycnVwdGlvbiBQZXJjZXB0aW9ucyBJbmRleCAoQ1BJKS4gKFNjYWxlOiAwLTEwMDsgMCA9IGhpZ2ggY29ycnVwdGlvbi4gMTAwID0gbG93IGNvcnJ1cHRpb24pLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcIm1lZGlhbndhZ2VcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJNZWRpYW4gV2FnZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkEgbWVhc3VyZSBvZiB0aGUgbW9udGhseSBtZWRpYW4gd2FnZSBiZWZvcmUgdGF4ZXMsIGluY2x1ZGluZyBwdWJsaWMgYmVuZWZpdHMgKGUuZyBjaGlsZCBhbGxvd2FuY2UpOyB1bml0OiBVU0QuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaW5mbGF0aW9uXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSW5mbGF0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhbm51YWwgY2hhbmdlIG9mIGNvbnN1bWVyIHByaWNlcyAodW5pdDogJSkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGVhbHRoX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGVhbHRoIEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlB1YmxpYyBzcGVuZGluZyBvbiBoZWFsdGgsIG1lYXN1cmVkIGluICUgb2YgR0RQLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInVyYmFuX3BvcHVsYXRpb25cIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJVcmJhbiBQb3B1bGF0aW9uIChoaWdoKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcGVyY2VudGFnZSBvZiBwZW9wbGUgd2hvIGxpdmUgaW4gYSBjaXR5LlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBQRVJNQU5FTlQtQ09VUExFIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tcGVybS1jb3VwbGVcIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImhkaVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkh1bWFuIERldmVsb3BtZW50IEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiSW5kaWNhdG9yIG9mIGxpZmUgZXhwZWN0YW5jeSwgZWR1Y2F0aW9uLCBhbmQgcGVyIGNhcGl0YSBpbmNvbWUuIChTY2FsZTogMC0xOyAwID0gbG93IHNjb3JlLiAxID0gaGlnaCBzY29yZSkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiam9ibGVzc19yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSm9ibGVzcyBSYXRlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBudW1iZXIgb2YgdW5lbXBsb3llZCBwZW9wbGUgaW4gcmVsYXRpb24gdG8gdGhlIGxhYm9yIGZvcmNlIGZvciBhIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcImJ1dHRvbi1wZXJtLXNvbG9cIixcbiAgICAgICAgc3RhdDogXCJnaW5pXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiR2luaSBDb2VmZmljaWVudFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlN0YXRlcyBob3cgdW5pZm9ybWx5IGFzc2V0cyBhcmUgZGlzdHJpYnV0ZWQuIChzY2FsZTogMC0xMDA7IDAgPSBlcXVhbCBkaXN0cmlidXRpb24uIDEwMCA9IHVuZXF1YWwgZGlzdHJpYnV0aW9uKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZWF0aF9yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiUmF0ZSBvZiBEZWF0aHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGF2ZXJhZ2UgbnVtYmVyIG9mIGRlYXRocyBwZXIgeWVhciBwZXIgMSwwMDAgcGVvcGxlLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlYnRzX3BlcmNlbnRcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJHb3Zlcm5tZW50IERlYnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBlcmNlbnRhZ2Ugb2YgZ292ZXJubWVudCBib3Jyb3dpbmdzIGluIHJlbGF0aW9uIHRvIHRoZSBHRFAuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFBFUk1BTkVOVC1GQU1JTFkgQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi1wZXJtLWZhbWlseVwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZWR1Y2F0aW9uX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiRWR1Y2F0aW9uIEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVkdWNhdGlvbiBleHBlbmRpdHVyZSByZXByZXNlbnRzIGdvdmVybm1lbnQgc3BlbmRpbmcgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGVhbHRoX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGVhbHRoIEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlB1YmxpYyBzcGVuZGluZyBvbiBoZWFsdGgsIG1lYXN1cmVkIGluICUgb2YgR0RQLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImxpdGVyYWN5X3JhdGVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJMaXRlcmFjeSBSYXRlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwZXJjZW50YWdlIG9mIHBlb3BsZSB0aGF0IGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVhZCBhbmQgd3JpdGUgYnkgYWdlIDE1LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImxpZmVfZXhwZWN0YW5jeVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkxpZmUgRXhwZWN0YW5jeVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYXZlcmFnZSBudW1iZXIgb2YgeWVhcnMgYSBwZXJzb24gd2lsbCBsaXZlIChhdCBiaXJ0aCkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVhdGhfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlJhdGUgb2YgRGVhdGhzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhdmVyYWdlIG51bWJlciBvZiBkZWF0aHMgcGVyIHllYXIgcGVyIDEsMDAwIHBlb3BsZS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJtZWRpYW53YWdlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTWVkaWFuIFdhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJBIG1lYXN1cmUgb2YgdGhlIG1vbnRobHkgbWVkaWFuIHdhZ2UgYmVmb3JlIHRheGVzLCBpbmNsdWRpbmcgcHVibGljIGJlbmVmaXRzIChlLmcgY2hpbGQgYWxsb3dhbmNlKTsgdW5pdDogVVNELlwiXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG4vKiAwLiBHRVQgU1RBUlRFRCAqL1xudHJhdmVsQXBwLmdldFN0YXJ0ZWQgPSAoKSA9PiB7XG4gIC8vIExpc3RlbnMgZm9yIGNsaWNrIG9uIEdFVCBTVEFSVEVEIEJVVFRPTlxuICAkKFwiLndlbGNvbWVfX2J1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTbW9vdGggc2Nyb2xsIHRvIG5leHQgc2VjdGlvblxuICAgICQoXCJodG1sLCBib2R5XCIpXG4gICAgICAuc3RvcCgpXG4gICAgICAuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChcIi5wdXJwb3NlLXNlY3Rpb25cIikub2Zmc2V0KCkudG9wIH0sIDkwMCwgXCJzd2luZ1wiKTtcbiAgfSk7XG59O1xuXG4vKiAxLiBHRVQgVVNFUiBJTlBVVCAqL1xudHJhdmVsQXBwLmdldFVzZXJQdXJwb3NlID0gKCkgPT4ge1xuICAkKFwiLnRyYXZlbC1mb3JtX19idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RvcmUgdXNlciBpbnB1dCBpbiB2YXJpYWJsZVxuICAgIGNvbnN0IGlucHV0SUQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcbiAgICB0cmF2ZWxBcHAudXNlclB1cnBvc2UgPSBpbnB1dElEO1xuXG4gICAgLy8gQ2FsbCB0aGUgZGlzcGxheSBzdGF0cyBmdW5jdGlvblxuICAgIHRyYXZlbEFwcC5kaXNwbGF5U3RhdHModHJhdmVsQXBwLnVzZXJQdXJwb3NlKTtcblxuICAgIC8vIERpc3BsYXkgdGhlIGNyaXRlcmlhcyB0byBiZSBjaG9zZW5cbiAgICAkKFwiLmNyaXRlcmlhc1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZmxleFwiKTtcblxuICAgIC8vIFNtb290aCBTY3JvbGwgdG8gY3JpdGVyaWEncyBzZWN0aW9uXG4gICAgJChcImh0bWwsIGJvZHlcIilcbiAgICAgIC5zdG9wKClcbiAgICAgIC5hbmltYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiLmNyaXRlcmlhc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSxcbiAgICAgICAgOTAwLFxuICAgICAgICBcInN3aW5nXCJcbiAgICAgICk7XG4gIH0pO1xufTtcblxuLyogMi4gRElTUExBWSBBTEwgU1RBVFMgRk9SIFRIRSBTRUxFQ1RFRCBQVVJQT1NFIE9OIFNDUkVFTiAqL1xudHJhdmVsQXBwLmRpc3BsYXlTdGF0cyA9IHB1cnBvc2VJRCA9PiB7XG4gICQoXCIuY2hvaWNlc1wiKS5lbXB0eSgpO1xuICAvLyBIZWFkZXIgZm9yIHRoZSBjaG9vc2UgQ3JpdGVyaWEgc2VjdGlvblxuICAkKFwiLmNyaXRlcmlhLWhlYWRlclwiKS50ZXh0KFxuICAgIFwiUGxlYXNlIHJhbmsgdGhlIGZvbGxvd2luZyBjcml0ZXJpYSBpbiBvcmRlciBvZiBpbXBvcnRhbmNlIGZyb20gdG9wIHRvIGJvdHRvbS4gVXNlIHlvdXIgY3Vyc29yIHRvIGRyYWcgYW5kIGRyb3AgdGhlIGl0ZW1zLlwiXG4gICk7XG4gIC8vIEFkZCBjc3MgcG9zaXRpb24gdG8gY3JpdGVyaWEgY29udGFpbmVyXG4gICQoXCIuY2hvaWNlcy1saXN0LWNvbnRhaW5lclwiKS5jc3MoXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlXCIpO1xuXG4gIC8vIEdvIHRocm91Z2ggZWFjaCBwdXJwb3NlIG9iamVjdCBpbiB0aGUgU3RhdCBBcnJheVxuICB0cmF2ZWxBcHAuc3RhdEFycmF5LmZvckVhY2gocHVycG9zZU9iaiA9PiB7XG4gICAgLy8gSWYgdGhlIHB1cnBvc2UgSUQgbWF0Y2hlcyB0aGUgcHVycG9zZSBPYmplY3QgaWRcbiAgICBpZiAocHVycG9zZUlEID09PSBwdXJwb3NlT2JqLmlkKSB7XG4gICAgICAvLyBHbyB0aHJvdWdoIGV2ZXJ5IHN0YXQgZm9yIHRoaXMgcHVycG9zZVxuICAgICAgcHVycG9zZU9iai5zdGF0cy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgICAvLyBBcHBlbmQgZWFjaCBvZiB0aGUgc3RhdCBuYW1lIG9uIHNjcmVlbiBmb3IgdGhlIHVzZXIgdG8gcmFua1xuICAgICAgICBsZXQgbWFya1VwSXRlbSA9ICQoXCI8bGk+XCIpXG4gICAgICAgICAgLmF0dHIoXCJpZFwiLCBzdGF0LnN0YXQpXG4gICAgICAgICAgLmFkZENsYXNzKFwiY3JpdGVyaWFcIilcbiAgICAgICAgICAudGV4dChzdGF0LnN0YXROYW1lKTtcbiAgICAgICAgJChcIi5jaG9pY2VzXCIpLmFwcGVuZChtYXJrVXBJdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gYXBwZW5kIHN1Ym1pdCBidXR0b25cbiAgbGV0IG1hcmtVcEJ1dHRvbiA9IGA8bGk+PGJ1dHRvbiBjbGFzcz1cInVzZXItc3VibWl0IGJ0blwiPlN1Ym1pdCBSYW5raW5nPC9idXR0b24+PC9saT5gO1xuICAkKFwiLmNob2ljZXNcIikuYXBwZW5kKG1hcmtVcEJ1dHRvbik7XG5cbiAgdHJhdmVsQXBwLmdldFVzZXJSYW5raW5ncygpO1xufTtcblxuLyogMy4gT0JUQUlOIFRIRSBSQU5LSU5HIE9GIFRIRSBTVEFUUyBGUk9NIFVTRVIgKi9cbnRyYXZlbEFwcC5nZXRVc2VyUmFua2luZ3MgPSAoKSA9PiB7XG4gICQoXCIuY2hvaWNlc1wiKS5vbihcImNsaWNrXCIsIFwiLnVzZXItc3VibWl0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyByZW1vdmUgc3VibWl0IGJ1dHRvbiBhbmQgcHV0IGEgbG9hZGVyIHVudGlsIHRoZSByZXN1bHRzIGNvbWUgYmFja1xuICAgIC8vIC5odG1sKGA8aW1nIGNsYXNzPVwibG9hZGVyXCIgc3JjPVwiLi4vLi4vYXNzZXRzL3NwaW5uZXItMXMtMTAwcHguc3ZnXCI+YCk7XG4gICAgJChcIi5jaG9pY2VzXCIpLmZpbmQoXG4gICAgICBcImxpOmxhc3QtY2hpbGRcIlxuICAgICkuaHRtbChgPHN2ZyBjbGFzcz1cImxkcy1zcGlubmVyIGxvYWRlclwiIHdpZHRoPVwiMTAwcHhcIiAgaGVpZ2h0PVwiMTAwcHhcIiAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiIHN0eWxlPVwiYmFja2dyb3VuZDogbm9uZTtcIj48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjkxNjY2NjY2NjY2NjY2NjZzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDMwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuODMzMzMzMzMzMzMzMzMzNHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoNjAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC43NXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoOTAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC42NjY2NjY2NjY2NjY2NjY2c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgxMjAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC41ODMzMzMzMzMzMzMzMzM0c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgxNTAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC41c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgxODAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC40MTY2NjY2NjY2NjY2NjY3c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgyMTAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC4zMzMzMzMzMzMzMzMzMzMzc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgyNDAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC4yNXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMjcwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuMTY2NjY2NjY2NjY2NjY2NjZzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDMwMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjA4MzMzMzMzMzMzMzMzMzMzc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgzMzAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCIwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjwvc3ZnPmApO1xuXG4gICAgLy8gZ2V0IHRoZSB1c2VyIHJhbmtpbmdzIGZyb20gaGlzIG9yZGVyaW5nIG9mIHN0YXRzIGFuZCBzdG9yZSBpbiBhIHZhcmlhYmxlXG4gICAgbGV0IHVzZXJSYW5raW5ncyA9ICQoXCIuY2hvaWNlc1wiKVswXS5jaGlsZHJlbjtcblxuICAgIC8vIGluaXRpYWxpemUgYW4gZW1wdHkgYXJyYXkgdG8gc3RvcmUgdGhlIHRvcCAzIHJhbmtpbmdzXG4gICAgbGV0IHN0YXRzRm9yQVBJQ2FsbCA9IFtdO1xuXG4gICAgLy8gZ2V0IGZpcnN0IHRvcCAzIHJhbmtpbmdzIChzdGF0cyBpbiAxc3QsIDJuZCBhbmQgM3JkIHBvc2l0aW9ucylcbiAgICAvLyBhbmQgc3RvcmUgdGhlbSBpbnNpZGUgYW4gYXJyYXlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgc3RhdHNGb3JBUElDYWxsLnB1c2godXNlclJhbmtpbmdzW2ldLmlkKTtcbiAgICB9XG5cbiAgICAvLyBJTklUSUFMSVpFIEFMTCBHTE9CQUwgVkFSSUFCTEVTIEZPUiBESVNQTEFZIEFUIFRIRSBFTkRcbiAgICB0cmF2ZWxBcHAud2lraUV4dHJhY3QgPSBbXTtcbiAgICB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAuc3RhdENvZGVBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC53aWtpUHJvbWlzZUFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLnBpeGFQcm9taXNlQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAuaW1hZ2VBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5pbWFnZVRleHRBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5mbGlja2l0eU9uID0gZmFsc2U7XG5cbiAgICBpZiAodHJhdmVsQXBwLmZsaWNraXR5T24gPT09IHRydWUpIHtcbiAgICAgICQoXCIucmVzdWx0c1wiKS5mbGlja2l0eShcImRlc3Ryb3lcIik7XG4gICAgfVxuICAgICQoXCIucmVzdWx0c1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblxuICAgIHRyYXZlbEFwcC5nZXRTdGF0KC4uLnN0YXRzRm9yQVBJQ2FsbCk7XG4gIH0pO1xufTtcblxuLyogNC4gU0VORCBBSkFYIFJFUVVFU1QgVE8gSU5RU1RBVFMgQVBJICovXG5cbi8vIFN0b3JlIGltcG9ydGFudCBpbmZvIGZvciBjYWxscyB0byB0aGUgSU5RU3RhdHMgQVBJLlxudHJhdmVsQXBwLnN0YXRLZXkgPSBcIjVkMzY4N2M3YzE3ODhkNWZcIjtcbnRyYXZlbEFwcC5zdGF0VVJMID0gXCJodHRwOi8vaW5xc3RhdHNhcGkuaW5xdWJ1LmNvbVwiO1xudHJhdmVsQXBwLmdldFN0YXQgPSAoc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlMykgPT4ge1xuICAvLyBheGlvcyh7XG4gIC8vICAgbWV0aG9kOiBcIkdFVFwiLFxuICAvLyAgIHVybDogXCJodHRwczovL3Byb3h5LmhhY2tlcnlvdS5jb21cIixcbiAgLy8gICBkYXRhUmVzcG9uc2U6IFwianNvbnBcIixcbiAgLy8gICBwYXJhbXM6IHtcbiAgLy8gICAgIHJlcVVybDogdHJhdmVsQXBwLnN0YXRVUkwsXG4gIC8vICAgICBhcGlfa2V5OiB0cmF2ZWxBcHAuc3RhdEtleSxcbiAgLy8gICAgIGRhdGE6IGBoZGksJHtzdGF0VHlwZTF9LCR7c3RhdFR5cGUyfSwke3N0YXRUeXBlM31gLFxuICAvLyAgICAgY21kOiBcImdldFdvcmxkRGF0YVwiXG4gIC8vICAgfVxuICAvLyB9KVxuICAkLmFqYXgoe1xuICAgIHVybDogdHJhdmVsQXBwLnN0YXRVUkwsXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICBkYXRhOiB7XG4gICAgICBhcGlfa2V5OiB0cmF2ZWxBcHAuc3RhdEtleSxcbiAgICAgIGRhdGE6IGBoZGksJHtzdGF0VHlwZTF9LCR7c3RhdFR5cGUyfSwke3N0YXRUeXBlM31gLFxuICAgICAgY21kOiBcImdldFdvcmxkRGF0YVwiXG4gICAgfVxuICB9KS50aGVuKHJlcyA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgIC8vIGNhbGxpbmcgdGhlIGNhbGN1bGF0aW9uIGZ1bmN0aW9uIHRvIGdldCB0aGUgdG9wIG4gLyBib3R0b20gbiBjb3VudHJpZXNcbiAgICAvLyBmaW5hbFJlc3VsdHMgaG9sZHMgdGhlIGZpbmFsIDMgY291dHJpZXMgYW5kIGFsbCBvZiB0aGVpciBzdGF0c1xuICAgIGxldCBmaW5hbFJlc3VsdHMgPSB0cmF2ZWxBcHAuZ2V0UmVjb21tZW5kYXRpb25zKHJlcywgc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlMyk7XG5cbiAgICAvLyBHZXQgd2lraSBhbmQgcGl4YSBleHRyYWN0cyBmb3IgZWFjaCBjb3VudHJ5XG4gICAgZmluYWxSZXN1bHRzLmZvckVhY2goY291bnRyeU9iaiA9PiB7XG4gICAgICAvLyBnZXQgd2lraSBleHRyYWN0cyBhbmQgcHV0IHByb21pc2VzIGludG8gYXJyYXlcbiAgICAgIHRyYXZlbEFwcC53aWtpUHJvbWlzZUFycmF5LnB1c2godHJhdmVsQXBwLmdldFdpa2koY291bnRyeU9iai5jb3VudHJ5TmFtZSkpO1xuXG4gICAgICAvLyBnZXQgcGl4YSBleHRyYWN0cyBhbmQgcHV0IHByb21pc2VzIGludG8gYXJyYXlcbiAgICAgIHRyYXZlbEFwcC5waXhhUHJvbWlzZUFycmF5LnB1c2godHJhdmVsQXBwLmdldFBpeGEoY291bnRyeU9iai5jb3VudHJ5TmFtZSkpO1xuICAgIH0pO1xuXG4gICAgLy8gd2hlbiBhbGwgd2lraSBhbmQgcGl4YSBwcm9taXNlcyBhcmUgZnVsZmlsbGVkLCBzdG9yZSB0aGUgcmVzdWx0c1xuICAgIC8vIHRvIHByZXBhcmUgdGhlbSBmb3IgZGlzcGxheVxuICAgICQud2hlbiguLi50cmF2ZWxBcHAud2lraVByb21pc2VBcnJheSwgLi4udHJhdmVsQXBwLnBpeGFQcm9taXNlQXJyYXkpLnRoZW4oKC4uLndpa2lQaXhhUmVzdWx0cykgPT4ge1xuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgd2lraVBpeGEgcmVzdWx0c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWtpUGl4YVJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZmlyc3QgdGhyZWUgYXJlIHdpa2ksIHB1c2ggKHN0b3JlKSBpbnRvIGFycmF5XG4gICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgIHRyYXZlbEFwcC5zdG9yZVdpa2kod2lraVBpeGFSZXN1bHRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsYXN0IHRocmVlIGFyZSBwaXhhLCBwdXNoIChzdG9yZSkgaW50byBhcnJheVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RvcmVQaXhhKHdpa2lQaXhhUmVzdWx0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT25jZSByZXN1bHRzIGFsbCBzdG9yZWQsIGRpc3BsYXkgYWxsIGluZm8gb24gc2NyZWVuICgzIGNvdW50cmllcywgd2lraSBhbmQgcGl4YSlcbiAgICAgIHRyYXZlbEFwcC5kaXNwbGF5RGVzdGluYXRpb25zKGZpbmFsUmVzdWx0cywgW3N0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTNdKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKiA1LiBTVEFSVCBDQUxDVUxBVElPTiBGT1IgMyBSRUNPTU1FTkRFRCBDT1VOVFJJRVMgKi9cbnRyYXZlbEFwcC5nZXRSZWNvbW1lbmRhdGlvbnMgPSAocmVzLCBzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKSA9PiB7XG4gIC8vIEZpbmQgZGlyZWN0aW9uIG9mIGVhY2ggc3RhdCB0eXBlIGFuZCByZXR1cm4gaXQgaW4gYW4gYXJyYXlcbiAgbGV0IGFyckRpcmVjdGlvbnMgPSB0cmF2ZWxBcHAuZmluZERpcmVjdGlvbnMoc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlMyk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBhcnJheXMgYW5kIG51bWJlcnMgZm9yIGVhY2ggcm91bmQgb2YgaXRlcmF0aW9uL2ZpbHRlcmluZ1xuICBsZXQgaW5pdGlhbEFyciA9IFtdO1xuICBsZXQgYXJyMSA9IFtdO1xuICBsZXQgYXJyMiA9IFtdO1xuICBsZXQgYXJyMyA9IFtdO1xuICBsZXQgaW5pdGlhbEl0ZXIgPSA2MDtcbiAgbGV0IGl0ZXJhdGlvbjEgPSAxMDtcbiAgbGV0IGl0ZXJhdGlvbjIgPSA1O1xuICBsZXQgaXRlcmF0aW9uMyA9IDM7XG5cbiAgLy9Jbml0aWFsIGZpbHRlciB0byBhY2NvdW50IGZvciByZWFsaXN0aWMgcmVzdWx0cyAoYmFzZWQgb24gSERJKVxuICBpbml0aWFsQXJyID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMocmVzLCBcImhkaVwiLCBcIm1heFwiLCBpbml0aWFsSXRlcik7XG5cbiAgLy8gSVRFUkFUSU9OIDFcbiAgYXJyMSA9IHRyYXZlbEFwcC5kZXRlcm1pbmVSZXN1bHRzKGluaXRpYWxBcnIsIHN0YXRUeXBlMSwgYXJyRGlyZWN0aW9uc1swXSwgaXRlcmF0aW9uMSk7XG5cbiAgLy8gSVRFUkFUSU9OIDJcbiAgYXJyMiA9IHRyYXZlbEFwcC5kZXRlcm1pbmVSZXN1bHRzKGFycjEsIHN0YXRUeXBlMiwgYXJyRGlyZWN0aW9uc1sxXSwgaXRlcmF0aW9uMik7XG5cbiAgLy8gSVRFUkFUSU9OIDNcbiAgYXJyMyA9IHRyYXZlbEFwcC5kZXRlcm1pbmVSZXN1bHRzKGFycjIsIHN0YXRUeXBlMywgYXJyRGlyZWN0aW9uc1syXSwgaXRlcmF0aW9uMyk7XG5cbiAgLy8gcmV0dXJuIHRoZSBhcnJheSB3aXRoIHRoZSBmaW5hbCByZXN1bHRzXG4gIHJldHVybiBhcnIzO1xufTtcblxuLyogNS4xIEZJTkQgTUlOL01BWCBGT1IgRUFDSCBTVEFUIFRZUEUgKi9cbnRyYXZlbEFwcC5maW5kRGlyZWN0aW9ucyA9IChzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKSA9PiB7XG4gIC8vIEZpbmQgd2hldGhlciBlYWNoIHN0YXR0eXBlIGlzIG1heCBvciBtaW5cbiAgbGV0IHN0YXQxRGlyZWN0aW9uID0gXCJcIjtcbiAgbGV0IHN0YXQyRGlyZWN0aW9uID0gXCJcIjtcbiAgbGV0IHN0YXQzRGlyZWN0aW9uID0gXCJcIjtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIFN0YXQgQXJyYXkgdG8gZmluZCBkaXJlY3Rpb24gb2Ygc3RhdHR5cGVzXG4gIHRyYXZlbEFwcC5zdGF0QXJyYXkuZm9yRWFjaChwdXJwb3NlID0+IHtcbiAgICAvLyBpZiB0aGUgY3VycmVudCBwdXJwb3NlIG1hdGNoZXMgdGhlIHVzZXIgcHVycG9zZSxcbiAgICBpZiAocHVycG9zZS5pZCA9PT0gdHJhdmVsQXBwLnVzZXJQdXJwb3NlKSB7XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBzdGF0cyBhcnJheSBvZiB0aGF0IHB1cnBvc2Ugb2JqZWN0XG4gICAgICBwdXJwb3NlLnN0YXRzLmZvckVhY2goc3RhdCA9PiB7XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0YXQgaW4gdGhlIHN0YXRzIGFycmF5IGlzIHN0YXR0eXBlMSwgZ2V0IHRoaXMgZGlyZWN0aW9uXG4gICAgICAgIGlmIChzdGF0LnN0YXQgPT09IHN0YXRUeXBlMSkge1xuICAgICAgICAgIHN0YXQxRGlyZWN0aW9uID0gc3RhdC5kaXJlY3Rpb247XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXRDb2RlQXJyYXkucHVzaChzdGF0LnN0YXQpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheS5wdXNoKHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheS5wdXNoKHN0YXQuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0YXQgaW4gdGhlIHN0YXRzIGFycmF5IGlzIHN0YXR0eXBlMiwgZ2V0IHRoaXMgZGlyZWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHN0YXQuc3RhdCA9PT0gc3RhdFR5cGUyKSB7XG4gICAgICAgICAgc3RhdDJEaXJlY3Rpb24gPSBzdGF0LmRpcmVjdGlvbjtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdENvZGVBcnJheS5wdXNoKHN0YXQuc3RhdCk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5LnB1c2goc3RhdC5zdGF0TmFtZSk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5LnB1c2goc3RhdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RhdCBpbiB0aGUgc3RhdHMgYXJyYXkgaXMgc3RhdHR5cGUzLCBnZXQgdGhpcyBkaXJlY3Rpb25cbiAgICAgICAgZWxzZSBpZiAoc3RhdC5zdGF0ID09PSBzdGF0VHlwZTMpIHtcbiAgICAgICAgICBzdGF0M0RpcmVjdGlvbiA9IHN0YXQuZGlyZWN0aW9uO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0Q29kZUFycmF5LnB1c2goc3RhdC5zdGF0KTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXkucHVzaChzdGF0LnN0YXROYW1lKTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXkucHVzaChzdGF0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gW3N0YXQxRGlyZWN0aW9uLCBzdGF0MkRpcmVjdGlvbiwgc3RhdDNEaXJlY3Rpb25dO1xufTtcblxuLyogNS4yIEZVTkNUSU9OIFRPIERFVEVSTUlORSBXSEVUSEVSIFRIRSBUT1AgT1IgQk9UVE9NIFNDT1JFUyBTSE9VTEQgQkUgRk9VTkQgKi9cbnRyYXZlbEFwcC5kZXRlcm1pbmVSZXN1bHRzID0gKGFycmF5LCBzdGF0VHlwZSwgZGlyZWN0aW9uLCBpdGVyYXRpb25OdW1iZXIpID0+IHtcbiAgbGV0IHJlc3VsdEFycmF5ID0gW107XG4gIC8vIGlmIHdlIHdhbnQgVE9QIG51bWJlcnNcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJtYXhcIikge1xuICAgIHJlc3VsdEFycmF5ID0gdHJhdmVsQXBwLmRldGVybWluZU5Db3VudHJpZXMoYXJyYXksIHN0YXRUeXBlLCBpdGVyYXRpb25OdW1iZXIsIDEpO1xuICB9XG4gIC8vIGlmIHdlIHdhbnQgQk9UIG51bWJlcnNcbiAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcIm1pblwiKSB7XG4gICAgcmVzdWx0QXJyYXkgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lTkNvdW50cmllcyhhcnJheSwgc3RhdFR5cGUsIGl0ZXJhdGlvbk51bWJlciwgLTEpO1xuICB9XG4gIHJldHVybiByZXN1bHRBcnJheTtcbn07XG5cbi8qIDUuMyBDQUxDVUxBVEUgVEhFIE4gQ09VTlRSSUVTICovXG50cmF2ZWxBcHAuZGV0ZXJtaW5lTkNvdW50cmllcyA9IChyZXN1bHQsIHN0YXRUeXBlLCBuLCBkaXJlY3Rpb24pID0+IHtcbiAgLy8gaW5pdGlhbGl6ZSBhIGhlYXAgYXJyYXkgdG8ga2VlcCB0cmFjayBvZiB0aGUgbiBsYXJnZXN0L3NtYWxsZXN0IHN0YXQgc2NvcmVzXG4gIGxldCBoZWFwID0gbmV3IE1pbkhlYXAoKTtcblxuICAvLyBpbml0aWFsaXplIGEgc2Vjb25kYXJ5IGFycmF5IHRvIGtlZXAgdHJhY2sgb2YgdGhlIG4gc2NvcmVzIEFORFxuICAvLyB0aGUgYXNzb2NpYXRlZCBjb3VudHJ5IHRvIGVhY2ggc2NvcmVcbiAgbGV0IG5Db3VudHJpZXMgPSBbXTtcblxuICAvLyBzdG9yZSB0aGUgc3RhdCB0eXBlIGludG8gYSBwcm9wZXJ0eSB2YXJpYWJsZSBmb3IgZWFzaWVyIHVzZVxuICBsZXQgcHJvcGVydHkgPSBzdGF0VHlwZTtcblxuICAvLyBzdGFydCBhIGNvdW50cnkgY291bnRlciBhdCAwIGp1c3QgZm9yIHRoZSBzYWtlIG9mIGFkZGluZyB0aGUgZmlyc3QgbiBjb3VudHJpZXMgaW50byB0aGUgaGVhcFxuICBsZXQgY291bnRyeUNvdW50ZXIgPSAwO1xuXG4gIC8vIGdvIHRocm91Z2ggZWFjaCBjb3VudHJ5IGZyb20gdGhlIHJlc3VsdHMgb2YgdGhlIEFKQVggY2FsbCB0byBJTlFTdGF0c1xuICByZXN1bHQubWFwKGNvdW50cnkgPT4ge1xuICAgIC8vIHN0b3JlIHRoZSBzdGF0IHNjb3JlIGFuZCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBjb3VudHJ5IGluIHZhcmlhYmxlcy5cbiAgICAvLyBJTVBPUlRBTlQ6IG11bHRpcGx5IGJ5IGRpcmVjdGlvbiB0byBpbXBsZW1lbnQgbWF4L21pbiBoZWFwXG4gICAgLy8gYSBkaXJlY3Rpb24gb2YgMSA9IHdlIHdhbnQgbWF4aW11bSBzY29yZXNcbiAgICAvLyBhIGRpcmVjdGlvbiBvZiAtMSA9IHdlIHdhbnQgbWluaW11bSBzY29yZXNcbiAgICBsZXQgc3RhdCA9IE51bWJlcihjb3VudHJ5W3Byb3BlcnR5XSkgKiBkaXJlY3Rpb247XG5cbiAgICAvLyBpZiBpdCdzIHRoZSBmaXJzdCBuIGNvdW50cmllcyBmcm9tIHRoZSByZXN1bHQsIG5vIHdvcmsgcmVxdWlyZWQuIEp1c3QgYWRkIHRoZW0gZGlyZWN0bHkgaW50byBib3RoIHRoZSBoZWFwIGFuZCBuQ291bnRyaWVzIHZhcmlhYmxlc1xuICAgIGlmIChjb3VudHJ5Q291bnRlciA8IG4pIHtcbiAgICAgIGhlYXAuYWRkKHN0YXQpO1xuICAgICAgbkNvdW50cmllcy5wdXNoKGNvdW50cnkpO1xuXG4gICAgICAvLyBpbmNyZW1lbnQgY291bnRyeUNvdW50ZXIgdG8ga25vdyB3aGVuIHdlJ3JlIHBhc3QgdGhlIGZpcnN0IG4gY291bnRyaWVzXG4gICAgICBjb3VudHJ5Q291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDT05ESVRJT04gVE8gQ0hFQ0sgSUYgdGhlIGN1cnJlbnQgY291bnRyeSBzdGF0IGlzIGdyZWF0ZXIvc21hbGxlciB0aGFuIGFueSBvZiB0aGUgY3VycmVudCBzdGF0cyBpbiB0aGUgY3VycmVudCBuIGNvdW50cmllc1xuICAgICAgaWYgKHN0YXQgPiBoZWFwLnBlZWsoKSkge1xuICAgICAgICAvLyBpZiBzbywgZmluZCB0aGUgbG9jYXRpb24gb2YgdGhlIHNtYWxsZXN0L2xhcmdlc3Qgc3RhdCBzY29yZSBpbiB0aGUgY3VycmVudCBuQ291bnRyaWVzIGFycmF5IGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIG5ldyBzdGF0IGFuZCBpdHMgYXNzb2NpYXRlZCBjb3VudHJ5XG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgbkNvdW50cmllcy5sZW5ndGg7IG0rKykge1xuICAgICAgICAgIC8vIG11bHRpcGx5IGJ5IGRpcmVjdGlvbiBhZ2FpbiB0byBjb21wYXJlIHByb3Blcmx5IHdpdGggdGhlIGhlYXBcbiAgICAgICAgICBsZXQgY3VycmVudFN0YXQgPSBOdW1iZXIobkNvdW50cmllc1ttXVtwcm9wZXJ0eV0pICogZGlyZWN0aW9uO1xuICAgICAgICAgIGlmIChjdXJyZW50U3RhdCA9PT0gaGVhcC5wZWVrKCkpIHtcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgY291bnRyeVxuICAgICAgICAgICAgbkNvdW50cmllcy5zcGxpY2UobSwgMSwgY291bnRyeSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgdGhlIHNtYWxsZXN0L2xhcmdlc3Qgc3RhdCBzY29yZSBmcm9tIHRoZSBoZWFwIGFzIHdlbGxcbiAgICAgICAgaGVhcC5wb2xsKCk7XG5cbiAgICAgICAgLy8gYWRkIHRoZSBuZXcgc21hbGxlc3QvbGFyZ2VzdCBzY29yZSBvbnRvIHRoZSBoZWFwXG4gICAgICAgIGhlYXAuYWRkKHN0YXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIC8vIHJldHVybiBuIGNvdW50cmllc1xuICByZXR1cm4gbkNvdW50cmllcztcbn07XG5cbi8qIDYuIFNFTkQgQVBJIFJFUVVFU1RTIFRPIFdJS0kgQU5EIFBJWEEgKi9cblxuLy8gNi4xIFdJS0lQRURJQSBBUEk6IEdFVCBBTkQgU1RPUkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3RvcmUgaW1wb3J0YW50IGluZm8gZm9yIGNhbGxzIHRvIHRoZSBXaWtpIEFQSS5cbnRyYXZlbEFwcC53aWtpVVJMID0gXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvdy9hcGkucGhwXCI7XG4vLyBHZXQgaW5mbyBmcm9tIFdpa2lwZWRpYSAoQUpBWClcbnRyYXZlbEFwcC5nZXRXaWtpID0gY291bnRyeSA9PiB7XG4gIC8vIGdldCBleHRyYWN0XG4gIHJldHVybiAkLmFqYXgoe1xuICAgIHVybDogdHJhdmVsQXBwLndpa2lVUkwsXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGRhdGFUeXBlOiBcImpzb25wXCIsXG4gICAgZGF0YToge1xuICAgICAgYWN0aW9uOiBcInF1ZXJ5XCIsXG4gICAgICBwcm9wOiBcImV4dHJhY3RzXCIsXG4gICAgICB0aXRsZXM6IGNvdW50cnksXG4gICAgICBmb3JtYXQ6IFwianNvblwiLFxuICAgICAgZXhsaW1pdDogMSxcbiAgICAgIGV4Y2hhcnM6IDI4MCxcbiAgICAgIGV4aW50cm86IHRydWUsXG4gICAgICBleHBsYWludGV4dDogdHJ1ZSxcbiAgICAgIHJlZGlyZWN0czogMVxuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBTdG9yZSBXaWtpcGVkaWEgY291bnRyeSBleHRyYWN0XG50cmF2ZWxBcHAuc3RvcmVXaWtpID0gcmVzdWx0ID0+IHtcbiAgLy8gVGhpcyB2YXJpYWJsZSBzdG9yZXMgdGhlIG9iamVjdCB0aGF0IGhvbGRzIGEga2V5IG5hbWUgdW5pcXVlIHRvIGV2ZXJ5IGNvdW50cnkuIFRoZSB2YWx1ZSBvZiB0aGlzIGtleSBpcyBhbiBvYmplY3QgdGhhdCBob2xkcyB0aGUgZXh0YWN0LlxuICBjb25zdCB3aWtpRXh0cmFjdE9iamVjdCA9IHJlc3VsdFswXS5xdWVyeS5wYWdlcztcbiAgLy8gSWYgd2UgY29udmVydCB0aGUgYWJvdmUgb2JqZWN0IGludG8gYW4gYXJyYXksIHRoZSBleHRyYWN0IGNhbiBiZSBhY2Nlc3NlZCBvbiB0aGUgZmlyc3QgdmFsdWUgb2YgdGhlIGFycmF5LiBUaGlzIHZhcmlhYmxlIGhvbGRzIHRoZSB3aWtpIGV4dHJhY3QuXG4gIHRyYXZlbEFwcC53aWtpRXh0cmFjdC5wdXNoKE9iamVjdC52YWx1ZXMod2lraUV4dHJhY3RPYmplY3QpWzBdLmV4dHJhY3QpO1xufTtcblxuLy8gNi4yIFBJWEFCQVkgQVBJOiBHRVQgQU5EIFNUT1JFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTdG9yZSBpbXBvcnRhbnQgaW5mbyBmb3IgY2FsbHMgdG8gdGhlIFBpeGFiYXkgQVBJLlxudHJhdmVsQXBwLnBpeGFLZXkgPSBcIjk4Nzk1NzEtZTRjYmJlZjNlNjkyYWExNWEyNGE3MTE5YlwiO1xudHJhdmVsQXBwLnBpeGFVUkwgPSBcImh0dHBzOi8vd3d3LnBpeGFiYXkuY29tL2FwaS9cIjtcbi8vIEdldCBpbmZvIGZyb20gV2lraXBlZGlhIChBSkFYKVxudHJhdmVsQXBwLmdldFBpeGEgPSBjb3VudHJ5ID0+IHtcbiAgLy8gR2V0IGltYWdlIFVSTFxuICByZXR1cm4gJC5hamF4KHtcbiAgICB1cmw6IHRyYXZlbEFwcC5waXhhVVJMLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJqc29ucFwiLFxuICAgIGRhdGE6IHtcbiAgICAgIGtleTogdHJhdmVsQXBwLnBpeGFLZXksXG4gICAgICBxOiBjb3VudHJ5LFxuICAgICAgcGVyX3BhZ2U6IDE1XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFN0b3JlIFBpeGFiYXkgY291bnRyeSBpbWFnZXMgb24gdGhlIHBhZ2VcbnRyYXZlbEFwcC5zdG9yZVBpeGEgPSByZXN1bHRzID0+IHtcbiAgLy8gU3RvcmUgdGhlIGFycmF5IHRoYXQgaG9sZHMgdGhlIGltYWdlIFVSTHMgaW4gYW4gYXJyYXlcbiAgY29uc3QgcmVzdWx0c0FycmF5ID0gcmVzdWx0c1swXS5oaXRzO1xuICAvLyBMb29wIHRocm91Z2ggdGhlIHJlc3VsdHMgYXJyYXkgYW5kIHB1c2ggYWxsIGltYWdlcyBpbnRvIHRoZSBpbWFnZUFycmF5XG4gIHJlc3VsdHNBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIC8vIEFycmF5IG9mIGltYWdlcyBmb3IgZWFjaCBjb3VudHJ5XG4gICAgdHJhdmVsQXBwLmltYWdlQXJyYXkucHVzaChpdGVtLmxhcmdlSW1hZ2VVUkwpO1xuICAgIC8vIEFycmF5IG9mIGltYWdlIGluZm9ybWF0aW9uIGZyb20gZWFjaCBjb3VudHJ5IHRvIGJlIHVzZWQgZm9yIEFsdCB0ZXh0XG4gICAgdHJhdmVsQXBwLmltYWdlVGV4dEFycmF5LnB1c2goaXRlbS50YWdzKTtcbiAgfSk7XG59O1xuXG4vKiA3LiBESVNQTEFZIERFU1RJT05BVElPTlMgT04gU0NSRUVOIFdJVEggV0lLSSArIFBJWEEgUkVTVUxUUyAqL1xudHJhdmVsQXBwLmRpc3BsYXlEZXN0aW5hdGlvbnMgPSAocmVzdWx0cywgc3RhdENob2ljZXMpID0+IHtcbiAgLy8gR2V0IHJpZCBvZiBwcmV2aW91cyBjbGlja2VkIHJlc3VsdHNcbiAgJChcIi5yZXN1bHRzXCIpLmVtcHR5KCk7XG4gIC8vIEdvIHRocm91Z2ggZWFjaCBjb3VudHJ5IHJlc3VsdCBhbmQgYnVpbGQgdGhlIHN0cmluZyBsaXRlcmFsIHRvIGFwcGVuZCB0byB0aGUgcGFnZVxuICBsZXQgY291bnRyeUNvdW50ZXIgPSAwO1xuICBsZXQgaW1hZ2VDb3VudGVyID0gMDtcbiAgcmVzdWx0cy5mb3JFYWNoKGNvdW50cnkgPT4ge1xuICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyBhbGwgZWxlbWVudHMgZm9yIG9uZSBjb3VudHJ5IHJlc3VsdFxuICAgIGxldCBjb3VudHJ5Q29udGFpbmVyRWxlbWVudCA9ICQoXCI8ZGl2PlwiKVxuICAgICAgLmFkZENsYXNzKFwicmVzdWx0LWNvbnRhaW5lclwiKVxuICAgICAgLy8gYXNzaWduIHJhbmRvbSBwaXhhIGltYWdlIG9mIGNvdW50cnkgdG8gdGhlIHJlc3VsdCBiYWNrZ3JvdW5kXG4gICAgICAuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBgdXJsKFwiJHt0cmF2ZWxBcHAuaW1hZ2VBcnJheVt0cmF2ZWxBcHAucmFuZG9taXplKGltYWdlQ291bnRlciwgaW1hZ2VDb3VudGVyICsgMTUpXX1cIilgKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2lsbCBob2xkIGFsbCB0ZXh0IGFuZCBpbWFnZShzKSByZWZlcnJpbmcgdG8gdGhlIGNvdW50cnkgcmVzdWx0XG4gICAgbGV0IGNvdW50cnlDYXJkRWxlbWVudCA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImNhcmRcIik7XG4gICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIHRoZSBuYW1lIG9mIHRoZSBjb3VudHJ5XG4gICAgbGV0IGNvdW50cnlOYW1lRWxlbWVudCA9ICQoXCI8aDI+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJjb3VudHJ5LW5hbWVcIilcbiAgICAgIC50ZXh0KGAke2NvdW50cnkuY291bnRyeU5hbWV9YCk7XG4gICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgY291bnRyeSwgdGFrZW4gZnJvbSB0aGUgd2lraSBBUElcbiAgICBsZXQgY291bnRyeURlc2NyaXB0aW9uRWxlbWVudCA9ICQoXCI8cD5cIilcbiAgICAgIC5hZGRDbGFzcyhcIndpa2ktdGV4dFwiKVxuICAgICAgLnRleHQodHJhdmVsQXBwLndpa2lFeHRyYWN0W2NvdW50cnlDb3VudGVyXSk7XG4gICAgY291bnRyeUNvdW50ZXIrKztcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIHRleHQgZm9yIGVhY2ggb2YgdGhlIHRocmVlIHN0YXRzIHdlJ3JlIGRpc3BsYXlpbmdcbiAgICBsZXQgc3RhdExpc3RFbGVtZW50ID0gJChcIjx1bD5cIikuYWRkQ2xhc3MoXCJzdGF0LWxpc3RcIik7XG4gICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIHRoZSBjb250YWluZXIgdGhhdCB3aWxsIGhvbGQgdGhlIHNtYWxsIHBpeGEgY291bnRyeSBpbWFnZVxuICAgIGxldCBzbWFsbFBpeGFDb250YWluZXJFbGVtZW50ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiY291bnRyeS1pbWFnZS1jb250YWluZXJcIik7XG4gICAgLy8gVGhpcyBuZXcgaW1hZ2UgY291bnRlciBnZXRzIHRoZSBpbWFnZSBpbiB0aGUgYXJyYXkgdGhhdCBmb2xsb3dzIHRoZSBmaXJzdCBpbWFnZSBiZWluZyB1c2VkIGFzIGEgYmFja2dyb3VuZCBpbWFnZSBmb3IgdGhlIGNhcmRcbiAgICAvLyBUaGlzIGltYWdlIGVsZW1lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgaW1hZ2UgY29udGFpbmVyXG4gICAgbGV0IHNtYWxsUGl4YUltYWdlID0gJChcIjxpbWc+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJjb3VudHJ5LWltYWdlXCIpXG4gICAgICAuYXR0cih7XG4gICAgICAgIHNyYzogYCR7dHJhdmVsQXBwLmltYWdlQXJyYXlbdHJhdmVsQXBwLnJhbmRvbWl6ZShpbWFnZUNvdW50ZXIsIGltYWdlQ291bnRlciArIDE1KV19YCxcbiAgICAgICAgYWx0OiBgU2NlbmljIGltYWdlIG9mICR7Y291bnRyeS5jb3VudHJ5TmFtZX0uIEltYWdlIHRhZ3MgaW5jbHVkZSAke3RyYXZlbEFwcC5pbWFnZVRleHRBcnJheX0uYFxuICAgICAgfSk7XG4gICAgLy8gQWRkIDE1IHRvIHRoZSBpbWFnZSBjb3VudGVyIGVuc3VyZXMgdGhhdCBldmVyeSBpdGVyYXRpb24gdGhyb3VnaCB0aGUgZm9yRWFjaCB3aWxsIGFkZCBpbWFnZXMgdG8gdGhlIGFzc29jaWF0ZWQgY291dHJpZXNcbiAgICBpbWFnZUNvdW50ZXIgKz0gMTU7XG4gICAgLy9BcHBlbmQgdGhlIGNvdW50cnkgaW1hZ2UgdG8gaXRzIGNvbnRhaW5lclxuICAgIHNtYWxsUGl4YUNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKHNtYWxsUGl4YUltYWdlKTtcbiAgICAvLyBBcHBlbmQgdGhlIGNvdW50cnkgbmFtZSA8aDI+LCB3aWtpIHRleHQgPHA+LCBzdGF0IGxpc3QgPHVsPiBhbmQgaW1hZ2UgY29udGFpbmVyIDxkaXY+IHRvIHRoZSBjYXJkIDxkaXY+LlxuICAgIGNvdW50cnlDYXJkRWxlbWVudC5hcHBlbmQoXG4gICAgICBjb3VudHJ5TmFtZUVsZW1lbnQsXG4gICAgICBjb3VudHJ5RGVzY3JpcHRpb25FbGVtZW50LFxuICAgICAgc3RhdExpc3RFbGVtZW50LFxuICAgICAgc21hbGxQaXhhQ29udGFpbmVyRWxlbWVudFxuICAgICk7XG4gICAgLy8gQXBwZW5kIHRoZSBjYXJkIGRpdiB0byB0aGUgcmVzdWx0LWNvbnRhaW5lclxuICAgIGNvdW50cnlDb250YWluZXJFbGVtZW50LmFwcGVuZChjb3VudHJ5Q2FyZEVsZW1lbnQpO1xuICAgIC8vQXBwZW5kIHRoZSByZXN1bHQtY29udGFpbmVyIHRvIHRoZSByZXN1bHRzIHNlY3Rpb24gZWxlbWVudCBvbiBvdXIgcGFnZVxuICAgICQoXCIucmVzdWx0c1wiKS5hcHBlbmQoY291bnRyeUNvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgLy8gR28gdGhyb3VnaCB0aGUgYXJyYXkgXCJzdGF0Q2hvaWNlc1wiIGFuZCBzZXQgdXAgMyBpbmZvcm1hdGlvbjpcbiAgICAvLyAxLiB0aXRsZSBvZiBzdGF0ICh0YWtlbiBmcm9tIHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheSlcbiAgICAvLyAyLiB2YWx1ZSBvZiBzdGF0ICh0YWtlbiBmcm9tIHJlc3VsdHMgb2JqZWN0KVxuICAgIC8vIDMuIGRlc2NyaXB0aW9uIG9mIHN0YXQgKHRha2VuIGZyb20gdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5KVxuICAgIGxldCBzdGF0Q291bnRlciA9IDA7XG4gICAgc3RhdENob2ljZXMuZm9yRWFjaChzdGF0ID0+IHtcbiAgICAgIGxldCBzdGF0VGl0bGUgPSB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXlbc3RhdENvdW50ZXJdO1xuICAgICAgbGV0IHN0YXRWYWx1ZSA9IGNvdW50cnlbdHJhdmVsQXBwLnN0YXRDb2RlQXJyYXlbc3RhdENvdW50ZXJdXTtcbiAgICAgIGxldCBzdGF0RGVzY3JpcHRpb24gPSB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXlbc3RhdENvdW50ZXJdO1xuICAgICAgc3RhdENvdW50ZXIrKztcbiAgICAgIC8vIFRoaXMgbGlzdCBpdGVtIGVsZW1lbnQgd2lsbCBob2xkIHN0YXQgaW5mb3JtYXRpb25cbiAgICAgIGxldCBzdGF0TGlzdEl0ZW1FbGVtZW50ID0gJChcIjxsaT5cIikuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1cIik7XG4gICAgICAvLyBUaGlzIGRpdiB3aWxsIGhvbGQgdGhlIHN0YXQgdGl0bGUgYW5kIHF1ZXN0aW9uIG1hcmsgaWNvblxuICAgICAgbGV0IHN0YXRUaXRsZUljb25Db250YWluZXJFbGVtZW50ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwic3RhdC1saXN0X19pdGVtX190aXRsZS1pY29uLWNvbnRhaW5lclwiKTtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgc3RhdCB0aXRsZSBhbmQgdmFsdWVcbiAgICAgIGxldCBzdGF0VGl0bGVFbGVtZW50ID0gJChcIjxoND5cIilcbiAgICAgICAgLmFkZENsYXNzKFwic3RhdC1saXN0X19pdGVtX190aXRsZS1pY29uLWNvbnRhaW5lcl9fdGl0bGUtbnVtYmVyXCIpXG4gICAgICAgIC50ZXh0KGAke3N0YXRUaXRsZX06ICR7dHJhdmVsQXBwLm51bWJlcldpdGhDb21tYXMoc3RhdFZhbHVlKX1gKTtcbiAgICAgIC8vIFRoaXMgcXVlc3Rpb24gbWFyayBpY29uIHdpbGwgc2l0IG5leHQgdG8gdGhlIHN0YXRUaXRsZUVsZW1lbnQgYW5kIHdoZW4gY2xpY2tlZC9ob3Zlcm92ZXIsIHdpbGwgZGlzcGxheSB0aGUgc3RhdCBkZXNjcmlwdGlvblxuICAgICAgbGV0IHN0YXRIb3Zlckljb25FbGVtZW50ID0gYDxpIGNsYXNzPVwic3RhdC1saXN0X19pdGVtX190aXRsZS1pY29uLWNvbnRhaW5lcl9faWNvbiBmYXIgZmEtcXVlc3Rpb24tY2lyY2xlXCI+PC9pPmA7XG4gICAgICAvLyBhcHBlbmQgdGhlIHN0YXQgdGl0bGUgYW5kIGljb24gdG8gdGhlIHN0YXRUaXRsZUljb25Db250YWluZXJFbGVtZW50XG4gICAgICBzdGF0VGl0bGVJY29uQ29udGFpbmVyRWxlbWVudC5hcHBlbmQoc3RhdFRpdGxlRWxlbWVudCwgc3RhdEhvdmVySWNvbkVsZW1lbnQpO1xuICAgICAgLy8gVGhpcyBkaXYgd2lsbCBob2xkIHRoZSBzdGF0IGRlc2NyaXB0aW9uIGFuZCBpcyBhIHNpYmxpbmcgb2YgdGhlIHN0YXRUaXRsZUljb25Db250YWluZXIuXG4gICAgICBsZXQgc3RhdERlc2NyaXB0aW9uQ29udGFpbmVyRWxlbWVudCA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcInN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyIGRpc3BsYXktbm9uZVwiKTtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgc3RhdCBkZXNjcmlwdGlvblxuICAgICAgbGV0IHN0YXREZXNjcmlwdGlvbkVsZW1lbnQgPSAkKFwiPHA+XCIpXG4gICAgICAgIC5hZGRDbGFzcyhcInN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyX19kZXNjcmlwdGlvblwiKVxuICAgICAgICAudGV4dChzdGF0RGVzY3JpcHRpb24pO1xuICAgICAgLy8gQXBwZW5kIHRoZSBzdGF0RGVzY3JpcHRpb25FbGVtZW50IHRvIHRoZSBzdGF0RGVzY3JpcHRpb25Db250YWluZXJFbGVtZW50XG4gICAgICBzdGF0RGVzY3JpcHRpb25Db250YWluZXJFbGVtZW50LmFwcGVuZChzdGF0RGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICAgIC8vIEFwcGVuZCB0aGUgdHdvIHN0YXQgZGl2IGNvbnRhaW5lcnMgdG8gdGhlIDxsaT5cbiAgICAgIHN0YXRMaXN0SXRlbUVsZW1lbnQuYXBwZW5kKHN0YXRUaXRsZUljb25Db250YWluZXJFbGVtZW50LCBzdGF0RGVzY3JpcHRpb25Db250YWluZXJFbGVtZW50KTtcbiAgICAgIC8vIEFwcGVuZCB0aGUgPGxpPnMgdG8gdGhlIDx1bD5cbiAgICAgIHN0YXRMaXN0RWxlbWVudC5hcHBlbmQoc3RhdExpc3RJdGVtRWxlbWVudCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHRyYXZlbEFwcC5maW5hbERpc3BsYXkoKTtcbn07XG5cbi8qICA3LjEgT25jZSBhbGwgaW1hZ2VzIGFyZSBsb2FkZWQgYXMgYmFja2dyb3VuZCBpbWFnZXMgb3IgcmVndWxhciBpbWFnZXMsIGRpc3BsYXkgdGhlIGZpbmFsIHJlc3VsdHMgd2l0aG91dCBcImxhZ1wiKi9cbnRyYXZlbEFwcC5maW5hbERpc3BsYXkgPSAoKSA9PiB7XG4gICQoXCIucmVzdWx0c1wiKS53YWl0Rm9ySW1hZ2VzKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLnJlc3VsdHNcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG4gICAgJChcImh0bWwsIGJvZHlcIilcbiAgICAgIC5zdG9wKClcbiAgICAgIC5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKFwiLnJlc3VsdHNcIikub2Zmc2V0KCkudG9wIH0sIDkwMCwgXCJzd2luZ1wiKTtcblxuICAgIC8vIHJlbW92ZSBsb2FkZXIgYW5kIGRpc3BsYXkgc3VibWl0IHJhbmtpbmcgYnV0dG9uIGFnYWluXG4gICAgbGV0IG1hcmtVcEJ1dHRvbiA9IGA8bGk+PGJ1dHRvbiBjbGFzcz1cInVzZXItc3VibWl0IGJ0blwiPlN1Ym1pdCBSYW5raW5nPC9idXR0b24+PC9saT5gO1xuICAgICQoXCIuY2hvaWNlc1wiKVxuICAgICAgLmZpbmQoXCJsaTpsYXN0LWNoaWxkXCIpXG4gICAgICAuaHRtbChtYXJrVXBCdXR0b24pO1xuXG4gICAgLyogRkxJQ0tJVFkgKi9cbiAgICAkKFwiLnJlc3VsdHNcIikuZmxpY2tpdHkoe1xuICAgICAgLy8gb3B0aW9uc1xuICAgICAgY2VsbEFsaWduOiBcImxlZnRcIixcbiAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICBhdXRvUGxheTogNTAwMCxcbiAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgIHdhdGNoQ1NTOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0cmF2ZWxBcHAuZmxpY2tpdHlPbiA9PT0gdHJ1ZTtcbiAgfSk7XG59O1xuXG4vLyA3LjIgT24gaG92ZXIgb3IgY2xpY2sgb3ZlciB0aGUgcXVlc3Rpb24gbWFyayBpY29uLCBkaXNwbGF5IHRoZSBzdGF0IGRlc2NyaXB0aW9uXG50cmF2ZWxBcHAuZGlzcGxheVN0YXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgJChcIi5yZXN1bHRzXCIpLm9uKFwiY2xpY2tcIiwgXCIuc3RhdC1saXN0X19pdGVtX190aXRsZS1pY29uLWNvbnRhaW5lcl9faWNvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKFxuICAgICAgJCh0aGlzKVxuICAgICAgICAucGFyZW50cyhcIi5zdGF0LWxpc3RfX2l0ZW1cIilcbiAgICAgICAgLmZpbmQoXCIuc3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXJcIilcbiAgICAgICAgLmhhc0NsYXNzKFwiZGlzcGxheS1ub25lXCIpID09PSBmYWxzZVxuICAgICkge1xuICAgICAgJChcIi5yZXN1bHRzXCIpXG4gICAgICAgIC5maW5kKFwiLnN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIucmVzdWx0c1wiKVxuICAgICAgICAuZmluZChcIi5zdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lclwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5wYXJlbnRzKFwiLnN0YXQtbGlzdF9faXRlbVwiKVxuICAgICAgICAuZmluZChcIi5zdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lclwiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gaG9sZHMgYWxsIG91ciBldmVudHMgZnVudGlvbnNcbnRyYXZlbEFwcC5ldmVudHNGdW5jdGlvbiA9ICgpID0+IHtcbiAgdHJhdmVsQXBwLmdldFVzZXJQdXJwb3NlKCk7XG4gIHRyYXZlbEFwcC5nZXRTdGFydGVkKCk7XG4gIHRyYXZlbEFwcC50cmFuc2Zvcm1TVkcoKTtcbiAgdHJhdmVsQXBwLmRpc3BsYXlTdGF0RGVzY3JpcHRpb24oKTtcbn07XG5cbi8vIEluaXQgZnVuY3Rpb24gdG8gaG9sZCBhbGwgb3VyIGZ1bmN0aW9ucyBpbiBvcmRlclxudHJhdmVsQXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHN3YWwoe1xuICAgIHR5cGU6IFwid2FybmluZ1wiLFxuICAgIHRpdGxlOiBcIkFQSSBVbmF2YWlsYWJsZVwiLFxuICAgIHRleHQ6XG4gICAgICBcIkFzIG9mIFNlcHRlbWJlciAxOXRoIDIwMTgsIHRoZSBJTlFzdGF0cyBBUEkgKHdoaWNoIGlzIHVzZWQgdG8gY2FsY3VsYXRlIHRoZSB0cmF2ZWwgcmVjb21tZW5kYXRpb25zKSBpcyB0ZW1wb3JhcmlseSBkb3duLiBUaGUgcmVzdWx0cyBmdW5jdGlvbmFsaXR5IGlzIHRoZXJlZm9yZSBub3QgYXZhaWxhYmxlIHVudGlsIGZ1cnRoZXIgbm90aWNlLiBXZSBzaW5jZXJlbHkgYXBvbG9naXplIGZvciB0aGlzIGluY29udmVuaWVuY2UgYW5kIGFzayB5b3UgdG8gY29tZSBiYWNrIHRvIG91ciBhcHBsaWNhdGlvbiBpbiB0aGUgbmVhciBmdXR1cmUuXCJcbiAgfSk7XG4gIHRyYXZlbEFwcC5ldmVudHNGdW5jdGlvbigpO1xuICB0cmF2ZWxBcHAuc2xpZGVEcmFnKCk7XG59O1xuXG4vLyBEb2N1bWVudCBSZWFkeSB0byBjYWxsIG91ciBpbml0KCkgZnVuY3Rpb24gYW5kIHN0YXJ0IHRoZSBhcHBcbiQoZnVuY3Rpb24gKCkge1xuICB0cmF2ZWxBcHAuaW5pdCgpO1xufSk7XG5cbi8qIDguIEVYVFJBIEZVTkNUSU9OUyBVU0VEIFRIUk9VR0hPVVQgQVBQICovXG5cbi8vIDguMSBTb3J0YWJsZSBmdW5jdGlvbmFsaXR5IGZvciBjcml0ZXJpYXNcbnRyYXZlbEFwcC5zbGlkZURyYWcgPSAoKSA9PiB7XG4gICQoXCIuY2hvaWNlc1wiKVxuICAgIC5zb3J0YWJsZSh7XG4gICAgICBjb25uZWN0V2l0aDogXCIuc29ydGFibGVcIixcbiAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICByZXZlcnQ6IHRydWUsXG4gICAgICBoZWxwZXI6IFwiY2xvbmVcIixcbiAgICAgIGNvbnRhaW5tZW50OiBcIi5jcml0ZXJpYXMtY29udGFpbmVyXCJcbiAgICB9KVxuICAgIC5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICAkKFwidWwsIGxpXCIpLmRpc2FibGVTZWxlY3Rpb24oKTtcbn07XG5cbi8vIDguMiBSYW5kb21pemVyIGZ1bmN0aW9uIHRvIHNlbGVjdCByYW5kb20gaW1hZ2VzIHRvIGRpc3BsYXlcbnRyYXZlbEFwcC5yYW5kb21pemUgPSAoc3RhcnRpbmdOdW0sIGVuZGluZ051bSkgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZGluZ051bSAtIHN0YXJ0aW5nTnVtKSkgKyBzdGFydGluZ051bTtcbn07XG5cbi8vIDguMyBFdmVudCBsaXN0ZW5lciB0byB0cmFuc2Zvcm0gU1ZHcyBpbnRvIGlubGluZSBTVkdTIHRvIGJlIGFibGUgdG8gY2hhbmdlIHRoZWlyIGNvbG9ycyB3aXRoIGNzcyBmaWxsXG50cmF2ZWxBcHAudHJhbnNmb3JtU1ZHID0gKCkgPT4ge1xuICBqUXVlcnkoXCJpbWcuc3ZnXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciAkaW1nID0galF1ZXJ5KHRoaXMpO1xuICAgIHZhciBpbWdJRCA9ICRpbWcuYXR0cihcImlkXCIpO1xuICAgIHZhciBpbWdDbGFzcyA9ICRpbWcuYXR0cihcImNsYXNzXCIpO1xuICAgIHZhciBpbWdVUkwgPSAkaW1nLmF0dHIoXCJzcmNcIik7XG5cbiAgICBqUXVlcnkuZ2V0KFxuICAgICAgaW1nVVJMLFxuICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBTVkcgdGFnLCBpZ25vcmUgdGhlIHJlc3RcbiAgICAgICAgdmFyICRzdmcgPSBqUXVlcnkoZGF0YSkuZmluZChcInN2Z1wiKTtcblxuICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBJRCB0byB0aGUgbmV3IFNWR1xuICAgICAgICBpZiAodHlwZW9mIGltZ0lEICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cihcImlkXCIsIGltZ0lEKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBjbGFzc2VzIHRvIHRoZSBuZXcgU1ZHXG4gICAgICAgIGlmICh0eXBlb2YgaW1nQ2xhc3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAkc3ZnID0gJHN2Zy5hdHRyKFwiY2xhc3NcIiwgaW1nQ2xhc3MgKyBcIiByZXBsYWNlZC1zdmdcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYW55IGludmFsaWQgWE1MIHRhZ3MgYXMgcGVyIGh0dHA6Ly92YWxpZGF0b3IudzMub3JnXG4gICAgICAgICRzdmcgPSAkc3ZnLnJlbW92ZUF0dHIoXCJ4bWxuczphXCIpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSB2aWV3cG9ydCBpcyBzZXQsIGlmIHRoZSB2aWV3cG9ydCBpcyBub3Qgc2V0IHRoZSBTVkcgd29udCd0IHNjYWxlLlxuICAgICAgICBpZiAoISRzdmcuYXR0cihcInZpZXdCb3hcIikgJiYgJHN2Zy5hdHRyKFwiaGVpZ2h0XCIpICYmICRzdmcuYXR0cihcIndpZHRoXCIpKSB7XG4gICAgICAgICAgJHN2Zy5hdHRyKFwidmlld0JveFwiLCBcIjAgMCBcIiArICRzdmcuYXR0cihcImhlaWdodFwiKSArIFwiIFwiICsgJHN2Zy5hdHRyKFwid2lkdGhcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwbGFjZSBpbWFnZSB3aXRoIG5ldyBTVkdcbiAgICAgICAgJGltZy5yZXBsYWNlV2l0aCgkc3ZnKTtcbiAgICAgIH0sXG4gICAgICBcInhtbFwiXG4gICAgKTtcbiAgfSk7XG59O1xuXG4vKiA4LjQgVFJBTlNGT1JNIFNUUklORyBOVU1CRVJTIElOVE8gU0VQQVJBVEVEIFNUUklOR1MgV0lUSCBQUk9QRVIgQ09NTUFTIEZPUiBFQUNIIFRIT1VTQU5EIFVOSVQgKi9cbnRyYXZlbEFwcC5udW1iZXJXaXRoQ29tbWFzID0gc3RhdCA9PiB7XG4gIHJldHVybiBzdGF0LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xufTtcbiIsIi8qKlxuICogRmFzdFByaW9yaXR5UXVldWUuanMgOiBhIGZhc3QgaGVhcC1iYXNlZCBwcmlvcml0eSBxdWV1ZSAgaW4gSmF2YVNjcmlwdC5cbiAqIChjKSB0aGUgYXV0aG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqXG4gKiBTcGVlZC1vcHRpbWl6ZWQgaGVhcC1iYXNlZCBwcmlvcml0eSBxdWV1ZSBmb3IgbW9kZXJuIGJyb3dzZXJzIGFuZCBKYXZhU2NyaXB0IGVuZ2luZXMuXG4gKlxuICogVXNhZ2UgOlxuICAgICAgICAgSW5zdGFsbGF0aW9uIChpbiBzaGVsbCwgaWYgeW91IHVzZSBub2RlKTpcbiAgICAgICAgICQgbnBtIGluc3RhbGwgZmFzdHByaW9yaXR5cXVldWVcblxuICAgICAgICAgUnVubmluZyB0ZXN0IHByb2dyYW0gKGluIEphdmFTY3JpcHQpOlxuXG4gICAgICAgICAvLyB2YXIgRmFzdFByaW9yaXR5UXVldWUgPSByZXF1aXJlKFwiZmFzdHByaW9yaXR5cXVldWVcIik7Ly8gaW4gbm9kZVxuICAgICAgICAgdmFyIHggPSBuZXcgRmFzdFByaW9yaXR5UXVldWUoKTtcbiAgICAgICAgIHguYWRkKDEpO1xuICAgICAgICAgeC5hZGQoMCk7XG4gICAgICAgICB4LmFkZCg1KTtcbiAgICAgICAgIHguYWRkKDQpO1xuICAgICAgICAgeC5hZGQoMyk7XG4gICAgICAgICB4LnBlZWsoKTsgLy8gc2hvdWxkIHJldHVybiAwLCBsZWF2ZXMgeCB1bmNoYW5nZWRcbiAgICAgICAgIHguc2l6ZTsgLy8gc2hvdWxkIHJldHVybiA1LCBsZWF2ZXMgeCB1bmNoYW5nZWRcbiAgICAgICAgIHdoaWxlKCF4LmlzRW1wdHkoKSkge1xuICAgICAgICAgICBjb25zb2xlLmxvZyh4LnBvbGwoKSk7XG4gICAgICAgICB9IC8vIHdpbGwgcHJpbnQgMCAxIDMgNCA1XG4gICAgICAgICB4LnRyaW0oKTsgLy8gKG9wdGlvbmFsKSBvcHRpbWl6ZXMgbWVtb3J5IHVzYWdlXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRjb21wYXJhdG9yID0gZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA8IGI7XG59O1xuXG4vLyB0aGUgcHJvdmlkZWQgY29tcGFyYXRvciBmdW5jdGlvbiBzaG91bGQgdGFrZSBhLCBiIGFuZCByZXR1cm4gKnRydWUqIHdoZW4gYSA8IGJcbmZ1bmN0aW9uIEZhc3RQcmlvcml0eVF1ZXVlKGNvbXBhcmF0b3IpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEZhc3RQcmlvcml0eVF1ZXVlKSkgcmV0dXJuIG5ldyBGYXN0UHJpb3JpdHlRdWV1ZShjb21wYXJhdG9yKTtcbiAgdGhpcy5hcnJheSA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLmNvbXBhcmUgPSBjb21wYXJhdG9yIHx8IGRlZmF1bHRjb21wYXJhdG9yO1xufVxuXG4vLyBjb3B5IHRoZSBwcmlvcml0eSBxdWV1ZSBpbnRvIGFub3RoZXIsIGFuZCByZXR1cm4gaXQuIFF1ZXVlIGl0ZW1zIGFyZSBzaGFsbG93LWNvcGllZC5cbi8vIFJ1bnMgaW4gYE8obilgIHRpbWUuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGZwcSA9IG5ldyBGYXN0UHJpb3JpdHlRdWV1ZSh0aGlzLmNvbXBhcmUpO1xuICBmcHEuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xuICAgIGZwcS5hcnJheS5wdXNoKHRoaXMuYXJyYXlbaV0pO1xuICB9XG4gIHJldHVybiBmcHE7XG59O1xuXG4vLyBBZGQgYW4gZWxlbWVudCBpbnRvIHRoZSBxdWV1ZVxuLy8gcnVucyBpbiBPKGxvZyBuKSB0aW1lXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24obXl2YWwpIHtcbiAgdmFyIGkgPSB0aGlzLnNpemU7XG4gIHRoaXMuYXJyYXlbdGhpcy5zaXplXSA9IG15dmFsO1xuICB0aGlzLnNpemUgKz0gMTtcbiAgdmFyIHA7XG4gIHZhciBhcDtcbiAgd2hpbGUgKGkgPiAwKSB7XG4gICAgcCA9IChpIC0gMSkgPj4gMTtcbiAgICBhcCA9IHRoaXMuYXJyYXlbcF07XG4gICAgaWYgKCF0aGlzLmNvbXBhcmUobXl2YWwsIGFwKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBhcDtcbiAgICBpID0gcDtcbiAgfVxuICB0aGlzLmFycmF5W2ldID0gbXl2YWw7XG59O1xuXG4vLyByZXBsYWNlIHRoZSBjb250ZW50IG9mIHRoZSBoZWFwIGJ5IHByb3ZpZGVkIGFycmF5IGFuZCBcImhlYXBpZnkgaXRcIlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmhlYXBpZnkgPSBmdW5jdGlvbihhcnIpIHtcbiAgdGhpcy5hcnJheSA9IGFycjtcbiAgdGhpcy5zaXplID0gYXJyLmxlbmd0aDtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IHRoaXMuc2l6ZSA+PiAxOyBpID49IDA7IGktLSkge1xuICAgIHRoaXMuX3BlcmNvbGF0ZURvd24oaSk7XG4gIH1cbn07XG5cbi8vIGZvciBpbnRlcm5hbCB1c2VcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fcGVyY29sYXRlVXAgPSBmdW5jdGlvbihpLCBmb3JjZSkge1xuICB2YXIgbXl2YWwgPSB0aGlzLmFycmF5W2ldO1xuICB2YXIgcDtcbiAgdmFyIGFwO1xuICB3aGlsZSAoaSA+IDApIHtcbiAgICBwID0gKGkgLSAxKSA+PiAxO1xuICAgIGFwID0gdGhpcy5hcnJheVtwXTtcbiAgICAvLyBmb3JjZSB3aWxsIHNraXAgdGhlIGNvbXBhcmVcbiAgICBpZiAoIWZvcmNlICYmICF0aGlzLmNvbXBhcmUobXl2YWwsIGFwKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBhcDtcbiAgICBpID0gcDtcbiAgfVxuICB0aGlzLmFycmF5W2ldID0gbXl2YWw7XG59O1xuXG4vLyBmb3IgaW50ZXJuYWwgdXNlXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX3BlcmNvbGF0ZURvd24gPSBmdW5jdGlvbihpKSB7XG4gIHZhciBzaXplID0gdGhpcy5zaXplO1xuICB2YXIgaHNpemUgPSB0aGlzLnNpemUgPj4+IDE7XG4gIHZhciBhaSA9IHRoaXMuYXJyYXlbaV07XG4gIHZhciBsO1xuICB2YXIgcjtcbiAgdmFyIGJlc3RjO1xuICB3aGlsZSAoaSA8IGhzaXplKSB7XG4gICAgbCA9IChpIDw8IDEpICsgMTtcbiAgICByID0gbCArIDE7XG4gICAgYmVzdGMgPSB0aGlzLmFycmF5W2xdO1xuICAgIGlmIChyIDwgc2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY29tcGFyZSh0aGlzLmFycmF5W3JdLCBiZXN0YykpIHtcbiAgICAgICAgbCA9IHI7XG4gICAgICAgIGJlc3RjID0gdGhpcy5hcnJheVtyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbXBhcmUoYmVzdGMsIGFpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBiZXN0YztcbiAgICBpID0gbDtcbiAgfVxuICB0aGlzLmFycmF5W2ldID0gYWk7XG59O1xuXG4vLyBpbnRlcm5hbFxuLy8gX3JlbW92ZUF0KGluZGV4KSB3aWxsIHJlbW92ZSB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggZnJvbSB0aGUgcXVldWUsXG4vLyByZXRhaW5pbmcgYmFsYW5jZS4gcmV0dXJucyB0aGUgcmVtb3ZlZCBpdGVtLCBvciB1bmRlZmluZWQgaWYgbm90aGluZyBpcyByZW1vdmVkLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLl9yZW1vdmVBdCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGlmIChpbmRleCA+IHRoaXMuc2l6ZSAtIDEgfHwgaW5kZXggPCAwKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIC8vIGltcGwxOlxuICAvL3RoaXMuYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgLy90aGlzLmhlYXBpZnkodGhpcy5hcnJheSk7XG4gIC8vIGltcGwyOlxuICB0aGlzLl9wZXJjb2xhdGVVcChpbmRleCwgdHJ1ZSk7XG4gIHJldHVybiB0aGlzLnBvbGwoKTtcbn07XG5cbi8vIHJlbW92ZShteXZhbCkgd2lsbCByZW1vdmUgYW4gaXRlbSBtYXRjaGluZyB0aGUgcHJvdmlkZWQgdmFsdWUgZnJvbSB0aGVcbi8vIHF1ZXVlLCBjaGVja2VkIGZvciBlcXVhbGl0eSBieSB1c2luZyB0aGUgcXVldWUncyBjb21wYXJhdG9yLlxuLy8gcmV0dXJuIHRydWUgaWYgcmVtb3ZlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKG15dmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICBpZiAoIXRoaXMuY29tcGFyZSh0aGlzLmFycmF5W2ldLCBteXZhbCkgJiYgIXRoaXMuY29tcGFyZShteXZhbCwgdGhpcy5hcnJheVtpXSkpIHtcbiAgICAgIC8vIGl0ZW1zIG1hdGNoLCBjb21wYXJhdG9yIHJldHVybnMgZmFsc2UgYm90aCB3YXlzLCByZW1vdmUgaXRlbVxuICAgICAgdGhpcy5fcmVtb3ZlQXQoaSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gaW50ZXJuYWxcbi8vIHJlbW92ZXMgYW5kIHJldHVybnMgaXRlbXMgZm9yIHdoaWNoIHRoZSBjYWxsYmFjayByZXR1cm5zIHRydWUuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX2JhdGNoUmVtb3ZlID0gZnVuY3Rpb24oY2FsbGJhY2ssIGxpbWl0KSB7XG4gIC8vIGluaXRpYWxpemUgcmV0dXJuIGFycmF5IHdpdGggbWF4IHNpemUgb2YgdGhlIGxpbWl0IG9yIGN1cnJlbnQgcXVldWUgc2l6ZVxuICB2YXIgcmV0QXJyID0gbmV3IEFycmF5KGxpbWl0ID8gbGltaXQgOiB0aGlzLnNpemUpO1xuICB2YXIgY291bnQgPSAwO1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5zaXplKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdGhpcy5zaXplICYmIGNvdW50IDwgcmV0QXJyLmxlbmd0aCkge1xuICAgICAgaWYgKGNhbGxiYWNrKHRoaXMuYXJyYXlbaV0pKSB7XG4gICAgICAgIHJldEFycltjb3VudF0gPSB0aGlzLl9yZW1vdmVBdChpKTtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgLy8gbW92ZSB1cCBhIGxldmVsIGluIHRoZSBoZWFwIGlmIHdlIHJlbW92ZSBhbiBpdGVtXG4gICAgICAgIGkgPSBpID4+IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSBcbiAgfVxuICByZXRBcnIubGVuZ3RoID0gY291bnQ7XG4gIHJldHVybiByZXRBcnI7XG59XG5cbi8vIHJlbW92ZU9uZShjYWxsYmFjaykgd2lsbCBleGVjdXRlIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtIG9mIHRoZSBxdWV1ZVxuLy8gYW5kIHdpbGwgcmVtb3ZlIHRoZSBmaXJzdCBpdGVtIGZvciB3aGljaCB0aGUgY2FsbGJhY2sgd2lsbCByZXR1cm4gdHJ1ZS5cbi8vIHJldHVybiB0aGUgcmVtb3ZlZCBpdGVtLCBvciB1bmRlZmluZWQgaWYgbm90aGluZyBpcyByZW1vdmVkLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlbW92ZU9uZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIHZhciBhcnIgPSB0aGlzLl9iYXRjaFJlbW92ZShjYWxsYmFjaywgMSk7XG4gIHJldHVybiBhcnIubGVuZ3RoID4gMCA/IGFyclswXSA6IHVuZGVmaW5lZDtcbn07XG5cbi8vIHJlbW92ZShjYWxsYmFja1ssIGxpbWl0XSkgd2lsbCBleGVjdXRlIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtIG9mXG4vLyB0aGUgcXVldWUgYW5kIHdpbGwgcmVtb3ZlIGVhY2ggaXRlbSBmb3Igd2hpY2ggdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1ZSwgdXAgdG9cbi8vIGEgbWF4IGxpbWl0IG9mIHJlbW92ZWQgaXRlbXMgaWYgc3BlY2lmaWVkIG9yIG5vIGxpbWl0IGlmIHVuc3BlY2lmaWVkLlxuLy8gcmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHJlbW92ZWQgaXRlbXMuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucmVtb3ZlTWFueSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBsaW1pdCkge1xuICByZXR1cm4gdGhpcy5fYmF0Y2hSZW1vdmUoY2FsbGJhY2ssIGxpbWl0KTtcbn07XG5cbi8vIExvb2sgYXQgdGhlIHRvcCBvZiB0aGUgcXVldWUgKG9uZSBvZiB0aGUgc21hbGxlc3QgZWxlbWVudHMpIHdpdGhvdXQgcmVtb3ZpbmcgaXRcbi8vIGV4ZWN1dGVzIGluIGNvbnN0YW50IHRpbWVcbi8vXG4vLyBDYWxsaW5nIHBlZWsgb24gYW4gZW1wdHkgcHJpb3JpdHkgcXVldWUgcmV0dXJuc1xuLy8gdGhlIFwidW5kZWZpbmVkXCIgdmFsdWUuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy91bmRlZmluZWRcbi8vXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zaXplID09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gIHJldHVybiB0aGlzLmFycmF5WzBdO1xufTtcblxuLy8gcmVtb3ZlIHRoZSBlbGVtZW50IG9uIHRvcCBvZiB0aGUgaGVhcCAob25lIG9mIHRoZSBzbWFsbGVzdCBlbGVtZW50cylcbi8vIHJ1bnMgaW4gbG9nYXJpdGhtaWMgdGltZVxuLy9cbi8vIElmIHRoZSBwcmlvcml0eSBxdWV1ZSBpcyBlbXB0eSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlXG4vLyBcInVuZGVmaW5lZFwiIHZhbHVlLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvdW5kZWZpbmVkXG4vL1xuLy8gRm9yIGxvbmctcnVubmluZyBhbmQgbGFyZ2UgcHJpb3JpdHkgcXVldWVzLCBvciBwcmlvcml0eSBxdWV1ZXNcbi8vIHN0b3JpbmcgbGFyZ2Ugb2JqZWN0cywgeW91IG1heSAgd2FudCB0byBjYWxsIHRoZSB0cmltIGZ1bmN0aW9uXG4vLyBhdCBzdHJhdGVnaWMgdGltZXMgdG8gcmVjb3ZlciBhbGxvY2F0ZWQgbWVtb3J5LlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnBvbGwgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgYW5zID0gdGhpcy5hcnJheVswXTtcbiAgaWYgKHRoaXMuc2l6ZSA+IDEpIHtcbiAgICB0aGlzLmFycmF5WzBdID0gdGhpcy5hcnJheVstLXRoaXMuc2l6ZV07XG4gICAgdGhpcy5fcGVyY29sYXRlRG93bigwKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNpemUgLT0gMTtcbiAgfVxuICByZXR1cm4gYW5zO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBhZGRzIHRoZSBwcm92aWRlZCB2YWx1ZSB0byB0aGUgaGVhcCwgd2hpbGUgcmVtb3Zpbmdcbi8vIGFuZCByZXR1cm5pbmcgb25lIG9mIHRoZSBzbWFsbGVzdCBlbGVtZW50cyAobGlrZSBwb2xsKS4gVGhlIHNpemUgb2YgdGhlIHF1ZXVlXG4vLyB0aHVzIHJlbWFpbnMgdW5jaGFuZ2VkLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlcGxhY2VUb3AgPSBmdW5jdGlvbihteXZhbCkge1xuICBpZiAodGhpcy5zaXplID09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciBhbnMgPSB0aGlzLmFycmF5WzBdO1xuICB0aGlzLmFycmF5WzBdID0gbXl2YWw7XG4gIHRoaXMuX3BlcmNvbGF0ZURvd24oMCk7XG4gIHJldHVybiBhbnM7XG59O1xuXG4vLyByZWNvdmVyIHVudXNlZCBtZW1vcnkgKGZvciBsb25nLXJ1bm5pbmcgcHJpb3JpdHkgcXVldWVzKVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5hcnJheSA9IHRoaXMuYXJyYXkuc2xpY2UoMCwgdGhpcy5zaXplKTtcbn07XG5cbi8vIENoZWNrIHdoZXRoZXIgdGhlIGhlYXAgaXMgZW1wdHlcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNpemUgPT09IDA7XG59O1xuXG4vLyBpdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIGluIG9yZGVyLCBwYXNzIGEgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAoaXRlbSwgaW5kZXgpIGFzIGFyZ3MuXG4vLyBUT0RPIG9uY2Ugd2UgdHJhbnNwaWxlLCB1bmNvbW1lbnRcbi8vIGlmIChTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yKSB7XG4vLyAgIEZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24qKCkge1xuLy8gICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuLy8gICAgIHZhciBmcHEgPSB0aGlzLmNsb25lKCk7XG4vLyAgICAgd2hpbGUgKCFmcHEuaXNFbXB0eSgpKSB7XG4vLyAgICAgICB5aWVsZCBmcHEucG9sbCgpO1xuLy8gICAgIH1cbi8vICAgfTtcbi8vIH1cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgaWYgKHRoaXMuaXNFbXB0eSgpIHx8IHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSByZXR1cm47XG4gIHZhciBpID0gMDtcbiAgdmFyIGZwcSA9IHRoaXMuY2xvbmUoKTtcbiAgd2hpbGUgKCFmcHEuaXNFbXB0eSgpKSB7XG4gICAgY2FsbGJhY2soZnBxLnBvbGwoKSwgaSsrKTtcbiAgfVxufTtcblxuLy8gcmV0dXJuIHRoZSBrICdzbWFsbGVzdCcgZWxlbWVudHMgb2YgdGhlIHF1ZXVlXG4vLyBydW5zIGluIE8oayBsb2cgaykgdGltZVxuLy8gdGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiByZXBlYXRlZGx5IGNhbGxpbmcgcG9sbCwgYnV0XG4vLyBpdCBoYXMgYSBiZXR0ZXIgY29tcHV0YXRpb25hbCBjb21wbGV4aXR5LCB3aGljaCBjYW4gYmVcbi8vIGltcG9ydGFudCBmb3IgbGFyZ2UgZGF0YSBzZXRzLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmtTbWFsbGVzdCA9IGZ1bmN0aW9uKGspIHtcbiAgaWYgKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gW107XG4gIHZhciBjb21wYXJhdG9yID0gdGhpcy5jb21wYXJlO1xuICB2YXIgYXJyID0gdGhpcy5hcnJheVxuICB2YXIgZnBxID0gbmV3IEZhc3RQcmlvcml0eVF1ZXVlKGZ1bmN0aW9uKGEsYil7XG4gICByZXR1cm4gY29tcGFyYXRvcihhcnJbYV0sYXJyW2JdKTtcbiAgfSk7XG4gIGsgPSBNYXRoLm1pbih0aGlzLnNpemUsIGspO1xuICB2YXIgc21hbGxlc3QgPSBuZXcgQXJyYXkoayk7XG4gIHZhciBqID0gMDtcbiAgZnBxLmFkZCgwKTtcbiAgd2hpbGUgKGogPCBrKSB7XG4gICAgdmFyIHNtYWxsID0gZnBxLnBvbGwoKTtcbiAgICBzbWFsbGVzdFtqKytdID0gdGhpcy5hcnJheVtzbWFsbF07XG4gICAgdmFyIGwgPSAoc21hbGwgPDwgMSkgKyAxO1xuICAgIHZhciByID0gbCArIDE7XG4gICAgaWYgKGwgPCB0aGlzLnNpemUpIGZwcS5hZGQobCk7XG4gICAgaWYgKHIgPCB0aGlzLnNpemUpIGZwcS5hZGQocik7XG4gIH1cbiAgcmV0dXJuIHNtYWxsZXN0O1xufVxuXG4vLyBqdXN0IGZvciBpbGx1c3RyYXRpb24gcHVycG9zZXNcbnZhciBtYWluID0gZnVuY3Rpb24oKSB7XG4gIC8vIG1haW4gY29kZVxuICB2YXIgeCA9IG5ldyBGYXN0UHJpb3JpdHlRdWV1ZShmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEgPCBiO1xuICB9KTtcbiAgeC5hZGQoMSk7XG4gIHguYWRkKDApO1xuICB4LmFkZCg1KTtcbiAgeC5hZGQoNCk7XG4gIHguYWRkKDMpO1xuICB3aGlsZSAoIXguaXNFbXB0eSgpKSB7XG4gICAgY29uc29sZS5sb2coeC5wb2xsKCkpO1xuICB9XG59O1xuXG5pZiAocmVxdWlyZS5tYWluID09PSBtb2R1bGUpIHtcbiAgbWFpbigpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhc3RQcmlvcml0eVF1ZXVlO1xuIiwiLyohXG4qIHN3ZWV0YWxlcnQyIHY3LjI2LjI4XG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuU3dlZXRhbGVydDIgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbnZhciBjb25zb2xlUHJlZml4ID0gJ1N3ZWV0QWxlcnQyOic7XG4vKipcbiAqIEZpbHRlciB0aGUgdW5pcXVlIHZhbHVlcyBpbnRvIGEgbmV3IGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKi9cblxudmFyIHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXkoYXJyKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZXN1bHQuaW5kZXhPZihhcnJbaV0pID09PSAtMSkge1xuICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogQ29udmVydCBOb2RlTGlzdCB0byBBcnJheVxuICogQHBhcmFtIG5vZGVMaXN0XG4gKi9cblxudmFyIHRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KG5vZGVMaXN0KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XG59O1xuLyoqXG4qIENvbnZlcnRzIGBpbnB1dE9wdGlvbnNgIGludG8gYW4gYXJyYXkgb2YgYFt2YWx1ZSwgbGFiZWxdYHNcbiogQHBhcmFtIGlucHV0T3B0aW9uc1xuKi9cblxudmFyIGZvcm1hdElucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJyAmJiBpbnB1dE9wdGlvbnMgaW5zdGFuY2VvZiBNYXApIHtcbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dE9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmVzdWx0LnB1c2goW2tleSwgaW5wdXRPcHRpb25zW2tleV1dKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBTdGFuZGFyZGlzZSBjb25zb2xlIHdhcm5pbmdzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciB3YXJuID0gZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgZXJyb3JzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG4vKipcbiAqIFByaXZhdGUgZ2xvYmFsIHN0YXRlIGZvciBgd2Fybk9uY2VgXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMgPSBbXTtcbi8qKlxuICogU2hvdyBhIGNvbnNvbGUgd2FybmluZywgYnV0IG9ubHkgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiBzaG93blxuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xuXG52YXIgd2Fybk9uY2UgPSBmdW5jdGlvbiB3YXJuT25jZShtZXNzYWdlKSB7XG4gIGlmICghKHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpICE9PSAtMSkpIHtcbiAgICBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICB3YXJuKG1lc3NhZ2UpO1xuICB9XG59O1xuLyoqXG4gKiBJZiBgYXJnYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0ICh3aXRoIG5vIGFyZ3VtZW50cyBvciBjb250ZXh0KSBhbmQgcmV0dXJuIHRoZSByZXN1bHQuXG4gKiBPdGhlcndpc2UsIGp1c3QgcGFzcyB0aGUgdmFsdWUgdGhyb3VnaFxuICogQHBhcmFtIGFyZ1xuICovXG5cbnZhciBjYWxsSWZGdW5jdGlvbiA9IGZ1bmN0aW9uIGNhbGxJZkZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZygpIDogYXJnO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gaXNUaGVuYWJsZShhcmcpIHtcbiAgcmV0dXJuIF90eXBlb2YoYXJnKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGFyZy50aGVuID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIERpc21pc3NSZWFzb24gPSBPYmplY3QuZnJlZXplKHtcbiAgY2FuY2VsOiAnY2FuY2VsJyxcbiAgYmFja2Ryb3A6ICdvdmVybGF5JyxcbiAgY2xvc2U6ICdjbG9zZScsXG4gIGVzYzogJ2VzYycsXG4gIHRpbWVyOiAndGltZXInXG59KTtcblxudmFyIHZlcnNpb24gPSBcIjcuMjYuMjhcIjtcblxudmFyIGFyZ3NUb1BhcmFtcyA9IGZ1bmN0aW9uIGFyZ3NUb1BhcmFtcyhhcmdzKSB7XG4gIHZhciBwYXJhbXMgPSB7fTtcblxuICBzd2l0Y2ggKF90eXBlb2YoYXJnc1swXSkpIHtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgX2V4dGVuZHMocGFyYW1zLCBhcmdzWzBdKTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgWyd0aXRsZScsICdodG1sJywgJ3R5cGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgICAgICBzd2l0Y2ggKF90eXBlb2YoYXJnc1tpbmRleF0pKSB7XG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHBhcmFtc1tuYW1lXSA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgXCIuY29uY2F0KG5hbWUsIFwiISBFeHBlY3RlZCBcXFwic3RyaW5nXFxcIiwgZ290IFwiKS5jb25jYXQoX3R5cGVvZihhcmdzW2luZGV4XSkpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zO1xufTtcblxuLyoqXG4gKiBBZGFwdCBhIGxlZ2FjeSBpbnB1dFZhbGlkYXRvciBmb3IgdXNlIHdpdGggZXhwZWN0UmVqZWN0aW9ucz1mYWxzZVxuICovXG52YXIgYWRhcHRJbnB1dFZhbGlkYXRvciA9IGZ1bmN0aW9uIGFkYXB0SW5wdXRWYWxpZGF0b3IobGVnYWN5VmFsaWRhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiBhZGFwdGVkSW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgZXh0cmFQYXJhbXMpIHtcbiAgICByZXR1cm4gbGVnYWN5VmFsaWRhdG9yLmNhbGwodGhpcywgaW5wdXRWYWx1ZSwgZXh0cmFQYXJhbXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCBmdW5jdGlvbiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGlvbkVycm9yO1xuICAgIH0pO1xuICB9O1xufTtcblxudmFyIHN3YWxQcmVmaXggPSAnc3dhbDItJztcbnZhciBwcmVmaXggPSBmdW5jdGlvbiBwcmVmaXgoaXRlbXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gaXRlbXMpIHtcbiAgICByZXN1bHRbaXRlbXNbaV1dID0gc3dhbFByZWZpeCArIGl0ZW1zW2ldO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgc3dhbENsYXNzZXMgPSBwcmVmaXgoWydjb250YWluZXInLCAnc2hvd24nLCAnaGVpZ2h0LWF1dG8nLCAnaW9zZml4JywgJ3BvcHVwJywgJ21vZGFsJywgJ25vLWJhY2tkcm9wJywgJ3RvYXN0JywgJ3RvYXN0LXNob3duJywgJ3RvYXN0LWNvbHVtbicsICdmYWRlJywgJ3Nob3cnLCAnaGlkZScsICdub2FuaW1hdGlvbicsICdjbG9zZScsICd0aXRsZScsICdoZWFkZXInLCAnY29udGVudCcsICdhY3Rpb25zJywgJ2NvbmZpcm0nLCAnY2FuY2VsJywgJ2Zvb3RlcicsICdpY29uJywgJ2ljb24tdGV4dCcsICdpbWFnZScsICdpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICdsYWJlbCcsICd0ZXh0YXJlYScsICdpbnB1dGVycm9yJywgJ3ZhbGlkYXRpb25lcnJvcicsICdwcm9ncmVzc3N0ZXBzJywgJ2FjdGl2ZXByb2dyZXNzc3RlcCcsICdwcm9ncmVzc2NpcmNsZScsICdwcm9ncmVzc2xpbmUnLCAnbG9hZGluZycsICdzdHlsZWQnLCAndG9wJywgJ3RvcC1zdGFydCcsICd0b3AtZW5kJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsICdjZW50ZXInLCAnY2VudGVyLXN0YXJ0JywgJ2NlbnRlci1lbmQnLCAnY2VudGVyLWxlZnQnLCAnY2VudGVyLXJpZ2h0JywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnYm90dG9tLWVuZCcsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAnZ3Jvdy1yb3cnLCAnZ3Jvdy1jb2x1bW4nLCAnZ3Jvdy1mdWxsc2NyZWVuJ10pO1xudmFyIGljb25UeXBlcyA9IHByZWZpeChbJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdpbmZvJywgJ3F1ZXN0aW9uJywgJ2Vycm9yJ10pO1xuXG52YXIgc3RhdGVzID0ge1xuICBwcmV2aW91c0JvZHlQYWRkaW5nOiBudWxsXG59O1xudmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufTtcbnZhciBmb2N1c0lucHV0ID0gZnVuY3Rpb24gZm9jdXNJbnB1dChpbnB1dCkge1xuICBpbnB1dC5mb2N1cygpOyAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuXG4gIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzQ1OTE1LzEzMzE0MjVcbiAgICB2YXIgdmFsID0gaW5wdXQudmFsdWU7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICBpbnB1dC52YWx1ZSA9IHZhbDtcbiAgfVxufTtcblxudmFyIGFkZE9yUmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiBhZGRPclJlbW92ZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCBhZGQpIHtcbiAgaWYgKCF0YXJnZXQgfHwgIWNsYXNzTGlzdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnc3RyaW5nJykge1xuICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgfVxuXG4gIGNsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAodGFyZ2V0LmZvckVhY2gpIHtcbiAgICAgIHRhcmdldC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGFkZCA/IGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkID8gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gIGFkZE9yUmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIHRydWUpO1xufTtcbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gIGFkZE9yUmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGZhbHNlKTtcbn07XG52YXIgZ2V0Q2hpbGRCeUNsYXNzID0gZnVuY3Rpb24gZ2V0Q2hpbGRCeUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChoYXNDbGFzcyhlbGVtLmNoaWxkTm9kZXNbaV0sIGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiBlbGVtLmNoaWxkTm9kZXNbaV07XG4gICAgfVxuICB9XG59O1xudmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IGVsZW0uaWQgPT09IHN3YWxDbGFzc2VzLmNvbnRlbnQgPyAnYmxvY2snIDogJ2ZsZXgnO1xufTtcbnZhciBoaWRlID0gZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59OyAvLyBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG5cbnZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoZWxlbSkge1xuICByZXR1cm4gZWxlbSAmJiAoZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbn07XG52YXIgcmVtb3ZlU3R5bGVQcm9wZXJ0eSA9IGZ1bmN0aW9uIHJlbW92ZVN0eWxlUHJvcGVydHkoZWxlbSwgcHJvcGVydHkpIHtcbiAgaWYgKGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcbiAgICBlbGVtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZShwcm9wZXJ0eSk7XG4gIH1cbn07XG5cbnZhciBnZXRDb250YWluZXIgPSBmdW5jdGlvbiBnZXRDb250YWluZXIoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuY29udGFpbmVyKTtcbn07XG5cbnZhciBlbGVtZW50QnlDbGFzcyA9IGZ1bmN0aW9uIGVsZW1lbnRCeUNsYXNzKGNsYXNzTmFtZSkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHJldHVybiBjb250YWluZXIgPyBjb250YWluZXIucXVlcnlTZWxlY3RvcignLicgKyBjbGFzc05hbWUpIDogbnVsbDtcbn07XG5cbnZhciBnZXRQb3B1cCA9IGZ1bmN0aW9uIGdldFBvcHVwKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucG9wdXApO1xufTtcbnZhciBnZXRJY29ucyA9IGZ1bmN0aW9uIGdldEljb25zKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICByZXR1cm4gdG9BcnJheShwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHN3YWxDbGFzc2VzLmljb24pKTtcbn07XG52YXIgZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnRpdGxlKTtcbn07XG52YXIgZ2V0Q29udGVudCA9IGZ1bmN0aW9uIGdldENvbnRlbnQoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb250ZW50KTtcbn07XG52YXIgZ2V0SW1hZ2UgPSBmdW5jdGlvbiBnZXRJbWFnZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmltYWdlKTtcbn07XG52YXIgZ2V0UHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIGdldFByb2dyZXNzU3RlcHMoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wcm9ncmVzc3N0ZXBzKTtcbn07XG52YXIgZ2V0VmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbkVycm9yKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yKTtcbn07XG52YXIgZ2V0Q29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENvbmZpcm1CdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb25maXJtKTtcbn07XG52YXIgZ2V0Q2FuY2VsQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q2FuY2VsQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2FuY2VsKTtcbn07XG4vKiBAZGVwcmVjYXRlZCAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG52YXIgZ2V0QnV0dG9uc1dyYXBwZXIgPSBmdW5jdGlvbiBnZXRCdXR0b25zV3JhcHBlcigpIHtcbiAgd2Fybk9uY2UoXCJzd2FsLmdldEJ1dHRvbnNXcmFwcGVyKCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UsIHVzZSBzd2FsLmdldEFjdGlvbnMoKSBpbnN0ZWFkXCIpO1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuYWN0aW9ucyk7XG59O1xudmFyIGdldEFjdGlvbnMgPSBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuYWN0aW9ucyk7XG59O1xudmFyIGdldEZvb3RlciA9IGZ1bmN0aW9uIGdldEZvb3RlcigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmZvb3Rlcik7XG59O1xudmFyIGdldENsb3NlQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q2xvc2VCdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jbG9zZSk7XG59O1xudmFyIGdldEZvY3VzYWJsZUVsZW1lbnRzID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKSB7XG4gIHZhciBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleCA9IHRvQXJyYXkoZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJykpIC8vIHNvcnQgYWNjb3JkaW5nIHRvIHRhYmluZGV4XG4gIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgYSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICBiID0gcGFyc2VJbnQoYi5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpO1xuXG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH0pOyAvLyBodHRwczovL2dpdGh1Yi5jb20vamt1cC9mb2N1c2FibGUvYmxvYi9tYXN0ZXIvaW5kZXguanNcblxuICB2YXIgb3RoZXJGb2N1c2FibGVFbGVtZW50cyA9IHRvQXJyYXkoZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZdLCBhcmVhW2hyZWZdLCBpbnB1dDpub3QoW2Rpc2FibGVkXSksIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgaWZyYW1lLCBvYmplY3QsIGVtYmVkLCBbdGFiaW5kZXg9XCIwXCJdLCBbY29udGVudGVkaXRhYmxlXSwgYXVkaW9bY29udHJvbHNdLCB2aWRlb1tjb250cm9sc10nKSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgIT09ICctMSc7XG4gIH0pO1xuICByZXR1cm4gdW5pcXVlQXJyYXkoZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXguY29uY2F0KG90aGVyRm9jdXNhYmxlRWxlbWVudHMpKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGlzVmlzaWJsZShlbCk7XG4gIH0pO1xufTtcbnZhciBpc01vZGFsID0gZnVuY3Rpb24gaXNNb2RhbCgpIHtcbiAgcmV0dXJuICFpc1RvYXN0KCkgJiYgIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbn07XG52YXIgaXNUb2FzdCA9IGZ1bmN0aW9uIGlzVG9hc3QoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSk7XG59O1xudmFyIGlzTG9hZGluZyA9IGZ1bmN0aW9uIGlzTG9hZGluZygpIHtcbiAgcmV0dXJuIGdldFBvcHVwKCkuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbn07XG5cbi8vIERldGVjdCBOb2RlIGVudlxudmFyIGlzTm9kZUVudiA9IGZ1bmN0aW9uIGlzTm9kZUVudigpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCc7XG59O1xuXG52YXIgc3dlZXRIVE1MID0gXCJcXG4gPGRpdiBhcmlhLWxhYmVsbGVkYnk9XFxcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiIGFyaWEtZGVzY3JpYmVkYnk9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIlxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmhlYWRlciwgXCJcXFwiPlxcbiAgICAgPHVsIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnByb2dyZXNzc3RlcHMsIFwiXFxcIj48L3VsPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5lcnJvciwgXCJcXFwiPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrXFxcIj48c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrLWxpbmUtbGVmdFxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmstbGluZS1yaWdodFxcXCI+PC9zcGFuPjwvc3Bhbj5cXG4gICAgIDwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5xdWVzdGlvbiwgXCJcXFwiPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1snaWNvbi10ZXh0J10sIFwiXFxcIj4/PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy53YXJuaW5nLCBcIlxcXCI+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydpY29uLXRleHQnXSwgXCJcXFwiPiE8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLmluZm8sIFwiXFxcIj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2ljb24tdGV4dCddLCBcIlxcXCI+aTwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMuc3VjY2VzcywgXCJcXFwiPlxcbiAgICAgICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFxcXCI+PC9kaXY+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ1xcXCI+PC9zcGFuPlxcbiAgICAgICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLXJpbmdcXFwiPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWZpeFxcXCI+PC9kaXY+XFxuICAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodFxcXCI+PC9kaXY+XFxuICAgICA8L2Rpdj5cXG4gICAgIDxpbWcgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaW1hZ2UsIFwiXFxcIiAvPlxcbiAgICAgPGgyIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIj48L2gyPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNsb3NlLCBcIlxcXCI+XFx4RDc8L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRlbnQsIFwiXFxcIj5cXG4gICAgIDxkaXYgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGlucHV0IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmlucHV0LCBcIlxcXCIgLz5cXG4gICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5maWxlLCBcIlxcXCIgLz5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiXFxcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XFxcInJhbmdlXFxcIiAvPlxcbiAgICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxcbiAgICAgPC9kaXY+XFxuICAgICA8c2VsZWN0IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnNlbGVjdCwgXCJcXFwiPjwvc2VsZWN0PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGxhYmVsIGZvcj1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCJcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIlxcXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMubGFiZWwsIFwiXFxcIj48L3NwYW4+XFxuICAgICA8L2xhYmVsPlxcbiAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRleHRhcmVhLCBcIlxcXCI+PC90ZXh0YXJlYT5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yLCBcIlxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yLCBcIlxcXCI+PC9kaXY+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5hY3Rpb25zLCBcIlxcXCI+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29uZmlybSwgXCJcXFwiPk9LPC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2FuY2VsLCBcIlxcXCI+Q2FuY2VsPC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5mb290ZXIsIFwiXFxcIj5cXG4gICA8L2Rpdj5cXG4gPC9kaXY+XFxuXCIpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKTtcbi8qXG4gKiBBZGQgbW9kYWwgKyBiYWNrZHJvcCB0byBET01cbiAqL1xuXG52YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQocGFyYW1zKSB7XG4gIC8vIENsZWFuIHVwIHRoZSBvbGQgcG9wdXAgaWYgaXQgZXhpc3RzXG4gIHZhciBjID0gZ2V0Q29udGFpbmVyKCk7XG5cbiAgaWYgKGMpIHtcbiAgICBjLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYyk7XG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWydoYXMtY29sdW1uJ11dKTtcbiAgfVxuXG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIGVycm9yKCdTd2VldEFsZXJ0MiByZXF1aXJlcyBkb2N1bWVudCB0byBpbml0aWFsaXplJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29udGFpbmVyO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gc3dlZXRIVE1MO1xuICB2YXIgdGFyZ2V0RWxlbWVudCA9IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgOiBwYXJhbXMudGFyZ2V0O1xuICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuICB2YXIgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICB2YXIgZmlsZSA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5maWxlKTtcbiAgdmFyIHJhbmdlID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgaW5wdXRcIikpO1xuICB2YXIgcmFuZ2VPdXRwdXQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBvdXRwdXRcIikpO1xuICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gIHZhciBjaGVja2JveCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiIGlucHV0XCIpKTtcbiAgdmFyIHRleHRhcmVhID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTsgLy8gYTExeVxuXG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgncm9sZScsIHBhcmFtcy50b2FzdCA/ICdhbGVydCcgOiAnZGlhbG9nJyk7XG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcGFyYW1zLnRvYXN0ID8gJ3BvbGl0ZScgOiAnYXNzZXJ0aXZlJyk7XG5cbiAgaWYgKCFwYXJhbXMudG9hc3QpIHtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpO1xuICB9XG5cbiAgdmFyIG9sZElucHV0VmFsOyAvLyBJRTExIHdvcmthcm91bmQsIHNlZSAjMTEwOSBmb3IgZGV0YWlsc1xuXG4gIHZhciByZXNldFZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbkVycm9yKGUpIHtcbiAgICBpZiAoU3dhbC5pc1Zpc2libGUoKSAmJiBvbGRJbnB1dFZhbCAhPT0gZS50YXJnZXQudmFsdWUpIHtcbiAgICAgIFN3YWwucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICB9XG5cbiAgICBvbGRJbnB1dFZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICB9O1xuXG4gIGlucHV0Lm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25FcnJvcjtcbiAgZmlsZS5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbkVycm9yO1xuICBzZWxlY3Qub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25FcnJvcjtcbiAgY2hlY2tib3gub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25FcnJvcjtcbiAgdGV4dGFyZWEub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbkVycm9yO1xuXG4gIHJhbmdlLm9uaW5wdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJlc2V0VmFsaWRhdGlvbkVycm9yKGUpO1xuICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG5cbiAgcmFuZ2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJlc2V0VmFsaWRhdGlvbkVycm9yKGUpO1xuICAgIHJhbmdlLm5leHRTaWJsaW5nLnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIHBvcHVwO1xufTtcblxudmFyIHBhcnNlSHRtbFRvQ29udGFpbmVyID0gZnVuY3Rpb24gcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW0sIHRhcmdldCkge1xuICBpZiAoIXBhcmFtKSB7XG4gICAgcmV0dXJuIGhpZGUodGFyZ2V0KTtcbiAgfVxuXG4gIGlmIChfdHlwZW9mKHBhcmFtKSA9PT0gJ29iamVjdCcpIHtcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAoMCBpbiBwYXJhbSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgaW4gcGFyYW07IGkrKykge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyYW1baV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmFtLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHBhcmFtKSB7XG4gICAgdGFyZ2V0LmlubmVySFRNTCA9IHBhcmFtO1xuICB9XG5cbiAgc2hvdyh0YXJnZXQpO1xufTtcblxudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgJ1dlYmtpdEFuaW1hdGlvbic6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnXG4gIH07XG5cbiAgZm9yICh2YXIgaSBpbiB0cmFuc0VuZEV2ZW50TmFtZXMpIHtcbiAgICBpZiAodHJhbnNFbmRFdmVudE5hbWVzLmhhc093blByb3BlcnR5KGkpICYmIHR5cGVvZiB0ZXN0RWwuc3R5bGVbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHJhbnNFbmRFdmVudE5hbWVzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0oKTtcblxuLy8gTWVhc3VyZSB3aWR0aCBvZiBzY3JvbGxiYXJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9qcy9tb2RhbC5qcyNMMjc5LUwyODZcbnZhciBtZWFzdXJlU2Nyb2xsYmFyID0gZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgdmFyIHN1cHBvcnRzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHM7XG5cbiAgaWYgKHN1cHBvcnRzVG91Y2gpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2Nyb2xsRGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xufTtcblxudmFyIHJlbmRlckFjdGlvbnMgPSBmdW5jdGlvbiByZW5kZXJBY3Rpb25zKHBhcmFtcykge1xuICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTsgLy8gQWN0aW9ucyAoYnV0dG9ucykgd3JhcHBlclxuXG4gIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uICYmICFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGhpZGUoYWN0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgc2hvdyhhY3Rpb25zKTtcbiAgfSAvLyBDYW5jZWwgYnV0dG9uXG5cblxuICBpZiAocGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY2FuY2VsQnV0dG9uKTtcbiAgfSAvLyBDb25maXJtIGJ1dHRvblxuXG5cbiAgaWYgKHBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbikge1xuICAgIHJlbW92ZVN0eWxlUHJvcGVydHkoY29uZmlybUJ1dHRvbiwgJ2Rpc3BsYXknKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNvbmZpcm1CdXR0b24pO1xuICB9IC8vIEVkaXQgdGV4dCBvbiBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuXG5cbiAgY29uZmlybUJ1dHRvbi5pbm5lckhUTUwgPSBwYXJhbXMuY29uZmlybUJ1dHRvblRleHQ7XG4gIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSBwYXJhbXMuY2FuY2VsQnV0dG9uVGV4dDsgLy8gQVJJQSBsYWJlbHMgZm9yIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG5cbiAgY29uZmlybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXMuY29uZmlybUJ1dHRvbkFyaWFMYWJlbCk7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXMuY2FuY2VsQnV0dG9uQXJpYUxhYmVsKTsgLy8gQWRkIGJ1dHRvbnMgY3VzdG9tIGNsYXNzZXNcblxuICBjb25maXJtQnV0dG9uLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNvbmZpcm07XG4gIGFkZENsYXNzKGNvbmZpcm1CdXR0b24sIHBhcmFtcy5jb25maXJtQnV0dG9uQ2xhc3MpO1xuICBjYW5jZWxCdXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY2FuY2VsO1xuICBhZGRDbGFzcyhjYW5jZWxCdXR0b24sIHBhcmFtcy5jYW5jZWxCdXR0b25DbGFzcyk7IC8vIEJ1dHRvbnMgc3R5bGluZ1xuXG4gIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICBhZGRDbGFzcyhbY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTsgLy8gQnV0dG9ucyBiYWNrZ3JvdW5kIGNvbG9yc1xuXG4gICAgaWYgKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yKSB7XG4gICAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yO1xuICAgIH0gLy8gTG9hZGluZyBzdGF0ZVxuXG5cbiAgICB2YXIgY29uZmlybUJ1dHRvbkJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbmZpcm1CdXR0b24pLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbmZpcm1CdXR0b25CYWNrZ3JvdW5kQ29sb3I7XG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gY29uZmlybUJ1dHRvbkJhY2tncm91bmRDb2xvcjtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhbY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gJyc7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICB9XG59O1xuXG52YXIgcmVuZGVyQ29udGVudCA9IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQocGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpLnF1ZXJ5U2VsZWN0b3IoJyMnICsgc3dhbENsYXNzZXMuY29udGVudCk7IC8vIENvbnRlbnQgYXMgSFRNTFxuXG4gIGlmIChwYXJhbXMuaHRtbCkge1xuICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy5odG1sLCBjb250ZW50KTsgLy8gQ29udGVudCBhcyBwbGFpbiB0ZXh0XG4gIH0gZWxzZSBpZiAocGFyYW1zLnRleHQpIHtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gcGFyYW1zLnRleHQ7XG4gICAgc2hvdyhjb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNvbnRlbnQpO1xuICB9XG59O1xuXG52YXIgcmVuZGVySWNvbiA9IGZ1bmN0aW9uIHJlbmRlckljb24ocGFyYW1zKSB7XG4gIHZhciBpY29ucyA9IGdldEljb25zKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpY29ucy5sZW5ndGg7IGkrKykge1xuICAgIGhpZGUoaWNvbnNbaV0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy50eXBlKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGljb25UeXBlcykuaW5kZXhPZihwYXJhbXMudHlwZSkgIT09IC0xKSB7XG4gICAgICB2YXIgaWNvbiA9IFN3YWwuZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIi5cIikuY29uY2F0KGljb25UeXBlc1twYXJhbXMudHlwZV0pKTtcbiAgICAgIHNob3coaWNvbik7IC8vIEFuaW1hdGUgaWNvblxuXG4gICAgICBpZiAocGFyYW1zLmFuaW1hdGlvbikge1xuICAgICAgICBhZGRDbGFzcyhpY29uLCBcInN3YWwyLWFuaW1hdGUtXCIuY29uY2F0KHBhcmFtcy50eXBlLCBcIi1pY29uXCIpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IoXCJVbmtub3duIHR5cGUhIEV4cGVjdGVkIFxcXCJzdWNjZXNzXFxcIiwgXFxcImVycm9yXFxcIiwgXFxcIndhcm5pbmdcXFwiLCBcXFwiaW5mb1xcXCIgb3IgXFxcInF1ZXN0aW9uXFxcIiwgZ290IFxcXCJcIi5jb25jYXQocGFyYW1zLnR5cGUsIFwiXFxcIlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgcmVuZGVySW1hZ2UgPSBmdW5jdGlvbiByZW5kZXJJbWFnZShwYXJhbXMpIHtcbiAgdmFyIGltYWdlID0gZ2V0SW1hZ2UoKTtcblxuICBpZiAocGFyYW1zLmltYWdlVXJsKSB7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXJhbXMuaW1hZ2VVcmwpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcGFyYW1zLmltYWdlQWx0KTtcbiAgICBzaG93KGltYWdlKTtcblxuICAgIGlmIChwYXJhbXMuaW1hZ2VXaWR0aCkge1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHBhcmFtcy5pbWFnZVdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaW1hZ2VIZWlnaHQpIHtcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcGFyYW1zLmltYWdlSGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICB9XG5cbiAgICBpbWFnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5pbWFnZTtcblxuICAgIGlmIChwYXJhbXMuaW1hZ2VDbGFzcykge1xuICAgICAgYWRkQ2xhc3MoaW1hZ2UsIHBhcmFtcy5pbWFnZUNsYXNzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGlkZShpbWFnZSk7XG4gIH1cbn07XG5cbnZhciByZW5kZXJQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gcmVuZGVyUHJvZ3Jlc3NTdGVwcyhwYXJhbXMpIHtcbiAgdmFyIHByb2dyZXNzU3RlcHNDb250YWluZXIgPSBnZXRQcm9ncmVzc1N0ZXBzKCk7XG4gIHZhciBjdXJyZW50UHJvZ3Jlc3NTdGVwID0gcGFyc2VJbnQocGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAgPT09IG51bGwgPyBTd2FsLmdldFF1ZXVlU3RlcCgpIDogcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAsIDEwKTtcblxuICBpZiAocGFyYW1zLnByb2dyZXNzU3RlcHMgJiYgcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgc2hvdyhwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKGN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoICcgKyAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknKTtcbiAgICB9XG5cbiAgICBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgICAgdmFyIGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBhZGRDbGFzcyhjaXJjbGUsIHN3YWxDbGFzc2VzLnByb2dyZXNzY2lyY2xlKTtcbiAgICAgIGNpcmNsZS5pbm5lckhUTUwgPSBzdGVwO1xuXG4gICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgICAgYWRkQ2xhc3MoY2lyY2xlLCBzd2FsQ2xhc3Nlcy5hY3RpdmVwcm9ncmVzc3N0ZXApO1xuICAgICAgfVxuXG4gICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGFkZENsYXNzKGxpbmUsIHN3YWxDbGFzc2VzLnByb2dyZXNzbGluZSk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpIHtcbiAgICAgICAgICBsaW5lLnN0eWxlLndpZHRoID0gcGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgfVxufTtcblxudmFyIHJlbmRlclRpdGxlID0gZnVuY3Rpb24gcmVuZGVyVGl0bGUocGFyYW1zKSB7XG4gIHZhciB0aXRsZSA9IGdldFRpdGxlKCk7XG5cbiAgaWYgKHBhcmFtcy50aXRsZVRleHQpIHtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBwYXJhbXMudGl0bGVUZXh0O1xuICB9IGVsc2UgaWYgKHBhcmFtcy50aXRsZSkge1xuICAgIGlmICh0eXBlb2YgcGFyYW1zLnRpdGxlID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyYW1zLnRpdGxlID0gcGFyYW1zLnRpdGxlLnNwbGl0KCdcXG4nKS5qb2luKCc8YnIgLz4nKTtcbiAgICB9XG5cbiAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMudGl0bGUsIHRpdGxlKTtcbiAgfVxufTtcblxudmFyIGZpeFNjcm9sbGJhciA9IGZ1bmN0aW9uIGZpeFNjcm9sbGJhcigpIHtcbiAgLy8gZm9yIHF1ZXVlcywgZG8gbm90IGRvIHRoaXMgbW9yZSB0aGFuIG9uY2VcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIHRoZSBib2R5IGhhcyBvdmVyZmxvd1xuXG5cbiAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgLy8gYWRkIHBhZGRpbmcgc28gdGhlIGNvbnRlbnQgZG9lc24ndCBzaGlmdCBhZnRlciByZW1vdmFsIG9mIHNjcm9sbGJhclxuICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICsgbWVhc3VyZVNjcm9sbGJhcigpICsgJ3B4JztcbiAgfVxufTtcbnZhciB1bmRvU2Nyb2xsYmFyID0gZnVuY3Rpb24gdW5kb1Njcm9sbGJhcigpIHtcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZztcbiAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG4gIH1cbn07XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbnZhciBpT1NmaXggPSBmdW5jdGlvbiBpT1NmaXgoKSB7XG4gIHZhciBpT1MgPSAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtO1xuXG4gIGlmIChpT1MgJiYgIWhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICB2YXIgb2Zmc2V0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBvZmZzZXQgKiAtMSArICdweCc7XG4gICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgfVxufTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbnZhciB1bmRvSU9TZml4ID0gZnVuY3Rpb24gdW5kb0lPU2ZpeCgpIHtcbiAgaWYgKGhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKTtcbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBvZmZzZXQgKiAtMTtcbiAgfVxufTtcblxuLy8gQWRkaW5nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRvIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgZW5zdXJlcyB0aGF0XG4vLyBlbGVtZW50cyBub3Qgd2l0aGluIHRoZSBhY3RpdmUgbW9kYWwgZGlhbG9nIHdpbGwgbm90IGJlIHN1cmZhY2VkIGlmIGEgdXNlciBvcGVucyBhIHNjcmVlblxuLy8gcmVhZGVy4oCZcyBsaXN0IG9mIGVsZW1lbnRzIChoZWFkaW5ncywgZm9ybSBjb250cm9scywgbGFuZG1hcmtzLCBldGMuKSBpbiB0aGUgZG9jdW1lbnQuXG5cbnZhciBzZXRBcmlhSGlkZGVuID0gZnVuY3Rpb24gc2V0QXJpYUhpZGRlbigpIHtcbiAgdmFyIGJvZHlDaGlsZHJlbiA9IHRvQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbCA9PT0gZ2V0Q29udGFpbmVyKCkgfHwgZWwuY29udGFpbnMoZ2V0Q29udGFpbmVyKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKTtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgfSk7XG59O1xudmFyIHVuc2V0QXJpYUhpZGRlbiA9IGZ1bmN0aW9uIHVuc2V0QXJpYUhpZGRlbigpIHtcbiAgdmFyIGJvZHlDaGlsZHJlbiA9IHRvQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKTtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQgPSAxMDA7XG5cbnZhciBnbG9iYWxTdGF0ZSA9IHt9O1xudmFyIHJlc3RvcmVBY3RpdmVFbGVtZW50ID0gZnVuY3Rpb24gcmVzdG9yZUFjdGl2ZUVsZW1lbnQoKSB7XG4gIHZhciB4ID0gd2luZG93LnNjcm9sbFg7XG4gIHZhciB5ID0gd2luZG93LnNjcm9sbFk7XG4gIGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ICYmIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIH1cbiAgfSwgUkVTVE9SRV9GT0NVU19USU1FT1VUKTsgLy8gaXNzdWVzLzkwMFxuXG4gIGlmICh0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gSUUgZG9lc24ndCBoYXZlIHNjcm9sbFgvc2Nyb2xsWSBzdXBwb3J0XG4gICAgd2luZG93LnNjcm9sbFRvKHgsIHkpO1xuICB9XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsb3NlIHN3ZWV0QWxlcnRcbiAqL1xuXG52YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZShvbkNsb3NlLCBvbkFmdGVyQ2xvc2UpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIGlmICghcG9wdXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAob25DbG9zZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9uQ2xvc2UocG9wdXApO1xuICB9XG5cbiAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNob3cpO1xuICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSk7XG5cbiAgdmFyIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSA9IGZ1bmN0aW9uIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSgpIHtcbiAgICBpZiAoIWlzVG9hc3QoKSkge1xuICAgICAgcmVzdG9yZUFjdGl2ZUVsZW1lbnQoKTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChjb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzLnNob3duLCBzd2FsQ2xhc3Nlc1snaGVpZ2h0LWF1dG8nXSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddLCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ11dKTtcblxuICAgIGlmIChpc01vZGFsKCkpIHtcbiAgICAgIHVuZG9TY3JvbGxiYXIoKTtcbiAgICAgIHVuZG9JT1NmaXgoKTtcbiAgICAgIHVuc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cblxuICAgIGlmIChvbkFmdGVyQ2xvc2UgIT09IG51bGwgJiYgdHlwZW9mIG9uQWZ0ZXJDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uQWZ0ZXJDbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9OyAvLyBJZiBhbmltYXRpb24gaXMgc3VwcG9ydGVkLCBhbmltYXRlXG5cblxuICBpZiAoYW5pbWF0aW9uRW5kRXZlbnQgJiYgIWhhc0NsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbikpIHtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBmdW5jdGlvbiBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKCkge1xuICAgICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbENsb3NlRXZlbnRGaW5pc2hlZCk7XG5cbiAgICAgIGlmIChoYXNDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSkpIHtcbiAgICAgICAgcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoKTtcbiAgfVxufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgc3dhbDIgcG9wdXAgaXMgc2hvd25cbiAqL1xuXG52YXIgaXNWaXNpYmxlJDEgPSBmdW5jdGlvbiBpc1Zpc2libGUoKSB7XG4gIHJldHVybiAhIWdldFBvcHVwKCk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ29uZmlybScgYnV0dG9uXG4gKi9cblxudmFyIGNsaWNrQ29uZmlybSA9IGZ1bmN0aW9uIGNsaWNrQ29uZmlybSgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1CdXR0b24oKS5jbGljaygpO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NhbmNlbCcgYnV0dG9uXG4gKi9cblxudmFyIGNsaWNrQ2FuY2VsID0gZnVuY3Rpb24gY2xpY2tDYW5jZWwoKSB7XG4gIHJldHVybiBnZXRDYW5jZWxCdXR0b24oKS5jbGljaygpO1xufTtcblxuZnVuY3Rpb24gZmlyZSgpIHtcbiAgdmFyIFN3YWwgPSB0aGlzO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdChTd2FsLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIGEgU3dhbCBjbGFzcyBtYWtpbmcgaXQgYWJsZSB0byBiZSBpbnN0YW50aWF0ZWQgd2l0aG91dCB0aGUgYG5ld2Aga2V5d29yZCAoYW5kIHRodXMgd2l0aG91dCBgU3dhbC5maXJlYClcbiAqIEBwYXJhbSBQYXJlbnRTd2FsXG4gKiBAcmV0dXJucyB7Tm9OZXdLZXl3b3JkU3dhbH1cbiAqL1xuZnVuY3Rpb24gd2l0aE5vTmV3S2V5d29yZChQYXJlbnRTd2FsKSB7XG4gIHZhciBOb05ld0tleXdvcmRTd2FsID0gZnVuY3Rpb24gTm9OZXdLZXl3b3JkU3dhbCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5vTmV3S2V5d29yZFN3YWwpKSB7XG4gICAgICByZXR1cm4gX2NvbnN0cnVjdChOb05ld0tleXdvcmRTd2FsLCBhcmdzKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTm9OZXdLZXl3b3JkU3dhbCkuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgTm9OZXdLZXl3b3JkU3dhbC5wcm90b3R5cGUgPSBfZXh0ZW5kcyhPYmplY3QuY3JlYXRlKFBhcmVudFN3YWwucHJvdG90eXBlKSwge1xuICAgIGNvbnN0cnVjdG9yOiBOb05ld0tleXdvcmRTd2FsXG4gIH0pO1xuXG4gIGlmICh0eXBlb2YgT2JqZWN0LnNldFByb3RvdHlwZU9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKE5vTmV3S2V5d29yZFN3YWwsIFBhcmVudFN3YWwpO1xuICB9IGVsc2Uge1xuICAgIC8vIEFuZHJvaWQgNC40XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgTm9OZXdLZXl3b3JkU3dhbC5fX3Byb3RvX18gPSBQYXJlbnRTd2FsO1xuICB9XG5cbiAgcmV0dXJuIE5vTmV3S2V5d29yZFN3YWw7XG59XG5cbnZhciBkZWZhdWx0UGFyYW1zID0ge1xuICB0aXRsZTogJycsXG4gIHRpdGxlVGV4dDogJycsXG4gIHRleHQ6ICcnLFxuICBodG1sOiAnJyxcbiAgZm9vdGVyOiAnJyxcbiAgdHlwZTogbnVsbCxcbiAgdG9hc3Q6IGZhbHNlLFxuICBjdXN0b21DbGFzczogJycsXG4gIHRhcmdldDogJ2JvZHknLFxuICBiYWNrZHJvcDogdHJ1ZSxcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBoZWlnaHRBdXRvOiB0cnVlLFxuICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gIGFsbG93RW50ZXJLZXk6IHRydWUsXG4gIHN0b3BLZXlkb3duUHJvcGFnYXRpb246IHRydWUsXG4gIGtleWRvd25MaXN0ZW5lckNhcHR1cmU6IGZhbHNlLFxuICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gIHByZUNvbmZpcm06IG51bGwsXG4gIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgY29uZmlybUJ1dHRvbkNvbG9yOiBudWxsLFxuICBjb25maXJtQnV0dG9uQ2xhc3M6IG51bGwsXG4gIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICcnLFxuICBjYW5jZWxCdXR0b25Db2xvcjogbnVsbCxcbiAgY2FuY2VsQnV0dG9uQ2xhc3M6IG51bGwsXG4gIGJ1dHRvbnNTdHlsaW5nOiB0cnVlLFxuICByZXZlcnNlQnV0dG9uczogZmFsc2UsXG4gIGZvY3VzQ29uZmlybTogdHJ1ZSxcbiAgZm9jdXNDYW5jZWw6IGZhbHNlLFxuICBzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuICBjbG9zZUJ1dHRvbkFyaWFMYWJlbDogJ0Nsb3NlIHRoaXMgZGlhbG9nJyxcbiAgc2hvd0xvYWRlck9uQ29uZmlybTogZmFsc2UsXG4gIGltYWdlVXJsOiBudWxsLFxuICBpbWFnZVdpZHRoOiBudWxsLFxuICBpbWFnZUhlaWdodDogbnVsbCxcbiAgaW1hZ2VBbHQ6ICcnLFxuICBpbWFnZUNsYXNzOiBudWxsLFxuICB0aW1lcjogbnVsbCxcbiAgd2lkdGg6IG51bGwsXG4gIHBhZGRpbmc6IG51bGwsXG4gIGJhY2tncm91bmQ6IG51bGwsXG4gIGlucHV0OiBudWxsLFxuICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgaW5wdXRWYWx1ZTogJycsXG4gIGlucHV0T3B0aW9uczoge30sXG4gIGlucHV0QXV0b1RyaW06IHRydWUsXG4gIGlucHV0Q2xhc3M6IG51bGwsXG4gIGlucHV0QXR0cmlidXRlczoge30sXG4gIGlucHV0VmFsaWRhdG9yOiBudWxsLFxuICBncm93OiBmYWxzZSxcbiAgcG9zaXRpb246ICdjZW50ZXInLFxuICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgY3VycmVudFByb2dyZXNzU3RlcDogbnVsbCxcbiAgcHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOiBudWxsLFxuICBvbkJlZm9yZU9wZW46IG51bGwsXG4gIG9uQWZ0ZXJDbG9zZTogbnVsbCxcbiAgb25PcGVuOiBudWxsLFxuICBvbkNsb3NlOiBudWxsLFxuICB1c2VSZWplY3Rpb25zOiBmYWxzZSxcbiAgZXhwZWN0UmVqZWN0aW9uczogZmFsc2Vcbn07XG52YXIgZGVwcmVjYXRlZFBhcmFtcyA9IFsndXNlUmVqZWN0aW9ucycsICdleHBlY3RSZWplY3Rpb25zJ107XG52YXIgdG9hc3RJbmNvbXBhdGlibGVQYXJhbXMgPSBbJ2FsbG93T3V0c2lkZUNsaWNrJywgJ2FsbG93RW50ZXJLZXknLCAnYmFja2Ryb3AnLCAnZm9jdXNDb25maXJtJywgJ2ZvY3VzQ2FuY2VsJywgJ2hlaWdodEF1dG8nLCAna2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSddO1xuLyoqXG4gKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNWYWxpZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVmFsaWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gIHJldHVybiBkZWZhdWx0UGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtTmFtZSkgfHwgcGFyYW1OYW1lID09PSAnZXh0cmFQYXJhbXMnO1xufTtcbi8qKlxuICogSXMgZGVwcmVjYXRlZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNEZXByZWNhdGVkUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICByZXR1cm4gZGVwcmVjYXRlZFBhcmFtcy5pbmRleE9mKHBhcmFtTmFtZSkgIT09IC0xO1xufTtcbi8qKlxuICogU2hvdyByZWxldmFudCB3YXJuaW5ncyBmb3IgZ2l2ZW4gcGFyYW1zXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICovXG5cbnZhciBzaG93V2FybmluZ3NGb3JQYXJhbXMgPSBmdW5jdGlvbiBzaG93V2FybmluZ3NGb3JQYXJhbXMocGFyYW1zKSB7XG4gIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oXCJVbmtub3duIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudG9hc3QgJiYgdG9hc3RJbmNvbXBhdGlibGVQYXJhbXMuaW5kZXhPZihwYXJhbSkgIT09IC0xKSB7XG4gICAgICB3YXJuKFwiVGhlIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCIgaXMgaW5jb21wYXRpYmxlIHdpdGggdG9hc3RzXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2Fybk9uY2UoXCJUaGUgcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cIikpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGRlcHJlY2F0aW9uV2FybmluZyA9IFwiXFxcInNldERlZmF1bHRzXFxcIiAmIFxcXCJyZXNldERlZmF1bHRzXFxcIiBtZXRob2RzIGFyZSBkZXByZWNhdGVkIGluIGZhdm9yIG9mIFxcXCJtaXhpblxcXCIgbWV0aG9kIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gRm9yIG5ldyBwcm9qZWN0cywgdXNlIFxcXCJtaXhpblxcXCIuIEZvciBwYXN0IHByb2plY3RzIGFscmVhZHkgdXNpbmcgXFxcInNldERlZmF1bHRzXFxcIiwgc3VwcG9ydCB3aWxsIGJlIHByb3ZpZGVkIHRocm91Z2ggYW4gYWRkaXRpb25hbCBwYWNrYWdlLlwiO1xudmFyIGRlZmF1bHRzID0ge307XG5mdW5jdGlvbiB3aXRoR2xvYmFsRGVmYXVsdHMoUGFyZW50U3dhbCkge1xuICB2YXIgU3dhbFdpdGhHbG9iYWxEZWZhdWx0cyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9QYXJlbnRTd2FsKSB7XG4gICAgX2luaGVyaXRzKFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMsIF9QYXJlbnRTd2FsKTtcblxuICAgIGZ1bmN0aW9uIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dhbFdpdGhHbG9iYWxEZWZhdWx0cyk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU3dhbFdpdGhHbG9iYWxEZWZhdWx0cykuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMsIFt7XG4gICAgICBrZXk6IFwiX21haW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMucHJvdG90eXBlKSwgXCJfbWFpblwiLCB0aGlzKS5jYWxsKHRoaXMsIF9leHRlbmRzKHt9LCBkZWZhdWx0cywgcGFyYW1zKSk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwic2V0RGVmYXVsdHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWZhdWx0cyhwYXJhbXMpIHtcbiAgICAgICAgd2Fybk9uY2UoZGVwcmVjYXRpb25XYXJuaW5nKTtcblxuICAgICAgICBpZiAoIXBhcmFtcyB8fCBfdHlwZW9mKHBhcmFtcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU3dlZXRBbGVydDI6IFRoZSBhcmd1bWVudCBmb3Igc2V0RGVmYXVsdHMoKSBpcyByZXF1aXJlZCBhbmQgaGFzIHRvIGJlIGEgb2JqZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzaG93V2FybmluZ3NGb3JQYXJhbXMocGFyYW1zKTsgLy8gYXNzaWduIHZhbGlkIHBhcmFtcyBmcm9tIGBwYXJhbXNgIHRvIGBkZWZhdWx0c2BcblxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgaWYgKFBhcmVudFN3YWwuaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgICAgICAgIGRlZmF1bHRzW3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVzZXREZWZhdWx0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIHdhcm5PbmNlKGRlcHJlY2F0aW9uV2FybmluZyk7XG4gICAgICAgIGRlZmF1bHRzID0ge307XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHM7XG4gIH0oUGFyZW50U3dhbCk7IC8vIFNldCBkZWZhdWx0IHBhcmFtcyBpZiBgd2luZG93Ll9zd2FsRGVmYXVsdHNgIGlzIGFuIG9iamVjdFxuXG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIF90eXBlb2Yod2luZG93Ll9zd2FsRGVmYXVsdHMpID09PSAnb2JqZWN0Jykge1xuICAgIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHMuc2V0RGVmYXVsdHMod2luZG93Ll9zd2FsRGVmYXVsdHMpO1xuICB9XG5cbiAgcmV0dXJuIFN3YWxXaXRoR2xvYmFsRGVmYXVsdHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBleHRlbmRlZCB2ZXJzaW9uIG9mIGBTd2FsYCBjb250YWluaW5nIGBwYXJhbXNgIGFzIGRlZmF1bHRzLlxuICogVXNlZnVsIGZvciByZXVzaW5nIFN3YWwgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBCZWZvcmU6XG4gKiBjb25zdCB0ZXh0UHJvbXB0T3B0aW9ucyA9IHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9XG4gKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBTd2FsKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JyB9KVxuICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBTd2FsKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nIH0pXG4gKlxuICogQWZ0ZXI6XG4gKiBjb25zdCBUZXh0UHJvbXB0ID0gU3dhbC5taXhpbih7IGlucHV0OiAndGV4dCcsIHNob3dDYW5jZWxCdXR0b246IHRydWUgfSlcbiAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycpXG4gKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JylcbiAqXG4gKiBAcGFyYW0gbWl4aW5QYXJhbXNcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihtaXhpblBhcmFtcykge1xuICByZXR1cm4gd2l0aE5vTmV3S2V5d29yZChcbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX3RoaXMpIHtcbiAgICBfaW5oZXJpdHMoTWl4aW5Td2FsLCBfdGhpcyk7XG5cbiAgICBmdW5jdGlvbiBNaXhpblN3YWwoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWl4aW5Td2FsKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNaXhpblN3YWwpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNaXhpblN3YWwsIFt7XG4gICAgICBrZXk6IFwiX21haW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1peGluU3dhbC5wcm90b3R5cGUpLCBcIl9tYWluXCIsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIG1peGluUGFyYW1zLCBwYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWl4aW5Td2FsO1xuICB9KHRoaXMpKTtcbn1cblxuLy8gcHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIHRoZSBxdWV1ZSBmZWF0dXJlXG52YXIgY3VycmVudFN0ZXBzID0gW107XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBjaGFpbmluZyBzd2VldEFsZXJ0IHBvcHVwc1xuICovXG5cbnZhciBxdWV1ZSA9IGZ1bmN0aW9uIHF1ZXVlKHN0ZXBzKSB7XG4gIHZhciBzd2FsID0gdGhpcztcbiAgY3VycmVudFN0ZXBzID0gc3RlcHM7XG5cbiAgdmFyIHJlc2V0UXVldWUgPSBmdW5jdGlvbiByZXNldFF1ZXVlKCkge1xuICAgIGN1cnJlbnRTdGVwcyA9IFtdO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbiAgfTtcblxuICB2YXIgcXVldWVSZXN1bHQgPSBbXTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgKGZ1bmN0aW9uIHN0ZXAoaSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChpIDwgY3VycmVudFN0ZXBzLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJywgaSk7XG4gICAgICAgIHN3YWwoY3VycmVudFN0ZXBzW2ldKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHF1ZXVlUmVzdWx0LnB1c2gocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIHN0ZXAoaSArIDEsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIGRpc21pc3M6IHJlc3VsdC5kaXNtaXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogcXVldWVSZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkoMCk7XG4gIH0pO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGdldHRpbmcgdGhlIGluZGV4IG9mIGN1cnJlbnQgcG9wdXAgaW4gcXVldWVcbiAqL1xuXG52YXIgZ2V0UXVldWVTdGVwID0gZnVuY3Rpb24gZ2V0UXVldWVTdGVwKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGluc2VydGluZyBhIHBvcHVwIHRvIHRoZSBxdWV1ZVxuICovXG5cbnZhciBpbnNlcnRRdWV1ZVN0ZXAgPSBmdW5jdGlvbiBpbnNlcnRRdWV1ZVN0ZXAoc3RlcCwgaW5kZXgpIHtcbiAgaWYgKGluZGV4ICYmIGluZGV4IDwgY3VycmVudFN0ZXBzLmxlbmd0aCkge1xuICAgIHJldHVybiBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAwLCBzdGVwKTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50U3RlcHMucHVzaChzdGVwKTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBkZWxldGluZyBhIHBvcHVwIGZyb20gdGhlIHF1ZXVlXG4gKi9cblxudmFyIGRlbGV0ZVF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGRlbGV0ZVF1ZXVlU3RlcChpbmRleCkge1xuICBpZiAodHlwZW9mIGN1cnJlbnRTdGVwc1tpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3VycmVudFN0ZXBzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbi8qKlxuICogU2hvdyBzcGlubmVyIGluc3RlYWQgb2YgQ29uZmlybSBidXR0b24gYW5kIGRpc2FibGUgQ2FuY2VsIGJ1dHRvblxuICovXG5cbnZhciBzaG93TG9hZGluZyA9IGZ1bmN0aW9uIHNob3dMb2FkaW5nKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIGlmICghcG9wdXApIHtcbiAgICBTd2FsKCcnKTtcbiAgfVxuXG4gIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gIHNob3coYWN0aW9ucyk7XG4gIHNob3coY29uZmlybUJ1dHRvbik7XG4gIGFkZENsYXNzKFtwb3B1cCwgYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCB0cnVlKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWJ1c3knLCB0cnVlKTtcbiAgcG9wdXAuZm9jdXMoKTtcbn07XG5cbi8qKlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXMgc2V0LCByZXR1cm5zIG51bWJlciBvcyBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gKiBPdGhlcndpc2UsIHJldHVybnMgbnVsbC5cbiAqL1xuXG52YXIgZ2V0VGltZXJMZWZ0ID0gZnVuY3Rpb24gZ2V0VGltZXJMZWZ0KCkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmdldFRpbWVyTGVmdCgpO1xufTtcblxuXG5cbnZhciBzdGF0aWNNZXRob2RzID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGlzVmFsaWRQYXJhbWV0ZXI6IGlzVmFsaWRQYXJhbWV0ZXIsXG5cdGlzRGVwcmVjYXRlZFBhcmFtZXRlcjogaXNEZXByZWNhdGVkUGFyYW1ldGVyLFxuXHRhcmdzVG9QYXJhbXM6IGFyZ3NUb1BhcmFtcyxcblx0YWRhcHRJbnB1dFZhbGlkYXRvcjogYWRhcHRJbnB1dFZhbGlkYXRvcixcblx0Y2xvc2U6IGNsb3NlLFxuXHRjbG9zZVBvcHVwOiBjbG9zZSxcblx0Y2xvc2VNb2RhbDogY2xvc2UsXG5cdGNsb3NlVG9hc3Q6IGNsb3NlLFxuXHRpc1Zpc2libGU6IGlzVmlzaWJsZSQxLFxuXHRjbGlja0NvbmZpcm06IGNsaWNrQ29uZmlybSxcblx0Y2xpY2tDYW5jZWw6IGNsaWNrQ2FuY2VsLFxuXHRnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcblx0Z2V0UG9wdXA6IGdldFBvcHVwLFxuXHRnZXRUaXRsZTogZ2V0VGl0bGUsXG5cdGdldENvbnRlbnQ6IGdldENvbnRlbnQsXG5cdGdldEltYWdlOiBnZXRJbWFnZSxcblx0Z2V0SWNvbnM6IGdldEljb25zLFxuXHRnZXRDbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24sXG5cdGdldEJ1dHRvbnNXcmFwcGVyOiBnZXRCdXR0b25zV3JhcHBlcixcblx0Z2V0QWN0aW9uczogZ2V0QWN0aW9ucyxcblx0Z2V0Q29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbixcblx0Z2V0Q2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24sXG5cdGdldEZvb3RlcjogZ2V0Rm9vdGVyLFxuXHRnZXRGb2N1c2FibGVFbGVtZW50czogZ2V0Rm9jdXNhYmxlRWxlbWVudHMsXG5cdGlzTG9hZGluZzogaXNMb2FkaW5nLFxuXHRmaXJlOiBmaXJlLFxuXHRtaXhpbjogbWl4aW4sXG5cdHF1ZXVlOiBxdWV1ZSxcblx0Z2V0UXVldWVTdGVwOiBnZXRRdWV1ZVN0ZXAsXG5cdGluc2VydFF1ZXVlU3RlcDogaW5zZXJ0UXVldWVTdGVwLFxuXHRkZWxldGVRdWV1ZVN0ZXA6IGRlbGV0ZVF1ZXVlU3RlcCxcblx0c2hvd0xvYWRpbmc6IHNob3dMb2FkaW5nLFxuXHRlbmFibGVMb2FkaW5nOiBzaG93TG9hZGluZyxcblx0Z2V0VGltZXJMZWZ0OiBnZXRUaW1lckxlZnRcbn0pO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vUmlpbS9zeW1ib2wtcG9seWZpbGwvYmxvYi9tYXN0ZXIvaW5kZXguanNcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbnZhciBfU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/IFN5bWJvbCA6IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkQ291bnRlciA9IDA7XG5cbiAgZnVuY3Rpb24gX1N5bWJvbChrZXkpIHtcbiAgICByZXR1cm4gJ19fJyArIGtleSArICdfJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlOSkgKyAnXycgKyArK2lkQ291bnRlciArICdfXyc7XG4gIH1cblxuICBfU3ltYm9sLml0ZXJhdG9yID0gX1N5bWJvbCgnU3ltYm9sLml0ZXJhdG9yJyk7XG4gIHJldHVybiBfU3ltYm9sO1xufSgpO1xuXG4vLyBXZWFrTWFwIHBvbHlmaWxsLCBuZWVkZWQgZm9yIEFuZHJvaWQgNC40XG4vLyBSZWxhdGVkIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzEwNzFcbi8vIGh0dHA6Ly93ZWJyZWZsZWN0aW9uLmJsb2dzcG90LmZpLzIwMTUvMDQvYS13ZWFrbWFwLXBvbHlmaWxsLWluLTIwLWxpbmVzLW9mLWNvZGUuaHRtbFxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxudmFyIFdlYWtNYXAkMSA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IGZ1bmN0aW9uIChzLCBkUCwgaE9QKSB7XG4gIGZ1bmN0aW9uIFdlYWtNYXAoKSB7XG4gICAgZFAodGhpcywgcywge1xuICAgICAgdmFsdWU6IF9TeW1ib2woJ1dlYWtNYXAnKVxuICAgIH0pO1xuICB9XG5cbiAgV2Vha01hcC5wcm90b3R5cGUgPSB7XG4gICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIGRlbChvKSB7XG4gICAgICBkZWxldGUgb1t0aGlzW3NdXTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KG8pIHtcbiAgICAgIHJldHVybiBvW3RoaXNbc11dO1xuICAgIH0sXG4gICAgaGFzOiBmdW5jdGlvbiBoYXMobykge1xuICAgICAgcmV0dXJuIGhPUC5jYWxsKG8sIHRoaXNbc10pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobywgdikge1xuICAgICAgZFAobywgdGhpc1tzXSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBXZWFrTWFwO1xufShfU3ltYm9sKCdXZWFrTWFwJyksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwge30uaGFzT3duUHJvcGVydHkpO1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW50cyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYHN3YWxgIGhhcy5cbiAqIEZvciBleGFtcGxlLCB0byBzZXQgdGhlIHByaXZhdGUgcHJvcGVydHkgXCJmb29cIiBvZiBgdGhpc2AgdG8gXCJiYXJcIiwgeW91IGNhbiBgcHJpdmF0ZVByb3BzLmZvby5zZXQodGhpcywgJ2JhcicpYFxuICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9wdWxsLzc1NTVcbiAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gKi9cbnZhciBwcml2YXRlUHJvcHMgPSB7XG4gIHByb21pc2U6IG5ldyBXZWFrTWFwJDEoKSxcbiAgaW5uZXJQYXJhbXM6IG5ldyBXZWFrTWFwJDEoKSxcbiAgZG9tQ2FjaGU6IG5ldyBXZWFrTWFwJDEoKVxufTtcblxuLyoqXG4gKiBFbmFibGVzIGJ1dHRvbnMgYW5kIGhpZGUgbG9hZGVyLlxuICovXG5cbmZ1bmN0aW9uIGhpZGVMb2FkaW5nKCkge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuXG4gIGlmICghaW5uZXJQYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICBoaWRlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pO1xuXG4gICAgaWYgKCFpbm5lclBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgICBoaWRlKGRvbUNhY2hlLmFjdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNsYXNzKFtkb21DYWNoZS5wb3B1cCwgZG9tQ2FjaGUuYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpO1xuICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dChpbnB1dFR5cGUpIHtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgaW5wdXRUeXBlID0gaW5wdXRUeXBlIHx8IGlubmVyUGFyYW1zLmlucHV0O1xuXG4gIGlmICghaW5wdXRUeXBlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgY2FzZSAndGV4dGFyZWEnOlxuICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdKTtcblxuICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgIHJldHVybiBkb21DYWNoZS5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuXG4gICAgY2FzZSAncmFkaW8nOlxuICAgICAgcmV0dXJuIGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIiBpbnB1dDpjaGVja2VkXCIpKSB8fCBkb21DYWNoZS5wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Zmlyc3QtY2hpbGRcIikpO1xuXG4gICAgY2FzZSAncmFuZ2UnOlxuICAgICAgcmV0dXJuIGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGRpc2FibGVCdXR0b25zKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuYWJsZUNvbmZpcm1CdXR0b24oKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGRpc2FibGVDb25maXJtQnV0dG9uKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuYWJsZUlucHV0KCkge1xuICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB2YXIgcmFkaW9zID0gcmFkaW9zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmFkaW9zW2ldLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIGRpc2FibGVJbnB1dCgpIHtcbiAgdmFyIGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xuXG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaW5wdXQgJiYgaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgIHZhciByYWRpb3NDb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgdmFyIHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJhZGlvc1tpXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93VmFsaWRhdGlvbkVycm9yKGVycm9yKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLnZhbGlkYXRpb25FcnJvci5pbm5lckhUTUwgPSBlcnJvcjtcbiAgdmFyIHBvcHVwQ29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvbUNhY2hlLnBvcHVwKTtcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbkVycm9yLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi1cIi5jb25jYXQocG9wdXBDb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpKTtcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbkVycm9yLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCItXCIuY29uY2F0KHBvcHVwQ29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICBzaG93KGRvbUNhY2hlLnZhbGlkYXRpb25FcnJvcik7XG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRydWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScsIHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvcik7XG4gICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgYWRkQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICB9XG59IC8vIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIGVycm9yXG5cbmZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbkVycm9yKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuXG4gIGlmIChkb21DYWNoZS52YWxpZGF0aW9uRXJyb3IpIHtcbiAgICBoaWRlKGRvbUNhY2hlLnZhbGlkYXRpb25FcnJvcik7XG4gIH1cblxuICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgaWYgKGlucHV0KSB7XG4gICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknKTtcbiAgICByZW1vdmVDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcyQxKCkge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICByZXR1cm4gaW5uZXJQYXJhbXMucHJvZ3Jlc3NTdGVwcztcbn1cbmZ1bmN0aW9uIHNldFByb2dyZXNzU3RlcHMocHJvZ3Jlc3NTdGVwcykge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuXG4gIHZhciB1cGRhdGVkUGFyYW1zID0gX2V4dGVuZHMoe30sIGlubmVyUGFyYW1zLCB7XG4gICAgcHJvZ3Jlc3NTdGVwczogcHJvZ3Jlc3NTdGVwc1xuICB9KTtcblxuICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xuICByZW5kZXJQcm9ncmVzc1N0ZXBzKHVwZGF0ZWRQYXJhbXMpO1xufVxuZnVuY3Rpb24gc2hvd1Byb2dyZXNzU3RlcHMoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIHNob3coZG9tQ2FjaGUucHJvZ3Jlc3NTdGVwcyk7XG59XG5mdW5jdGlvbiBoaWRlUHJvZ3Jlc3NTdGVwcygpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgaGlkZShkb21DYWNoZS5wcm9ncmVzc1N0ZXBzKTtcbn1cblxudmFyIFRpbWVyID0gZnVuY3Rpb24gVGltZXIoY2FsbGJhY2ssIGRlbGF5KSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lcik7XG5cbiAgdmFyIGlkLCBzdGFydGVkLCBydW5uaW5nO1xuICB2YXIgcmVtYWluaW5nID0gZGVsYXk7XG5cbiAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICBzdGFydGVkID0gbmV3IERhdGUoKTtcbiAgICBpZCA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIHJlbWFpbmluZyk7XG4gIH07XG5cbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIHJlbWFpbmluZyAtPSBuZXcgRGF0ZSgpIC0gc3RhcnRlZDtcbiAgfTtcblxuICB0aGlzLmdldFRpbWVyTGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocnVubmluZykge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbWFpbmluZztcbiAgfTtcblxuICB0aGlzLnN0YXJ0KCk7XG59O1xuXG52YXIgZGVmYXVsdElucHV0VmFsaWRhdG9ycyA9IHtcbiAgZW1haWw6IGZ1bmN0aW9uIGVtYWlsKHN0cmluZywgZXh0cmFQYXJhbXMpIHtcbiAgICByZXR1cm4gL15bYS16QS1aMC05LitfLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWjAtOS1dezIsMjR9JC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlamVjdChleHRyYVBhcmFtcyAmJiBleHRyYVBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSA/IGV4dHJhUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlIDogJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpO1xuICB9LFxuICB1cmw6IGZ1bmN0aW9uIHVybChzdHJpbmcsIGV4dHJhUGFyYW1zKSB7XG4gICAgLy8gdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzgwOTQzNS8xMzMxNDI1XG4gICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji8vPV0qKSQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoZXh0cmFQYXJhbXMgJiYgZXh0cmFQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UgPyBleHRyYVBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSA6ICdJbnZhbGlkIFVSTCcpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIHBvcHVwXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gc2V0UGFyYW1ldGVycyhwYXJhbXMpIHtcbiAgLy8gVXNlIGRlZmF1bHQgYGlucHV0VmFsaWRhdG9yYCBmb3Igc3VwcG9ydGVkIGlucHV0IHR5cGVzIGlmIG5vdCBwcm92aWRlZFxuICBpZiAoIXBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgIE9iamVjdC5rZXlzKGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0ga2V5KSB7XG4gICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IHBhcmFtcy5leHBlY3RSZWplY3Rpb25zID8gZGVmYXVsdElucHV0VmFsaWRhdG9yc1trZXldIDogU3dhbC5hZGFwdElucHV0VmFsaWRhdG9yKGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gLy8gRGV0ZXJtaW5lIGlmIHRoZSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgaXMgdmFsaWRcblxuXG4gIGlmICghcGFyYW1zLnRhcmdldCB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgfHwgdHlwZW9mIHBhcmFtcy50YXJnZXQgIT09ICdzdHJpbmcnICYmICFwYXJhbXMudGFyZ2V0LmFwcGVuZENoaWxkKSB7XG4gICAgd2FybignVGFyZ2V0IHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJib2R5XCInKTtcbiAgICBwYXJhbXMudGFyZ2V0ID0gJ2JvZHknO1xuICB9XG5cbiAgdmFyIHBvcHVwO1xuICB2YXIgb2xkUG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgdGFyZ2V0RWxlbWVudCA9IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgOiBwYXJhbXMudGFyZ2V0OyAvLyBJZiB0aGUgbW9kZWwgdGFyZ2V0IGhhcyBjaGFuZ2VkLCByZWZyZXNoIHRoZSBwb3B1cFxuXG4gIGlmIChvbGRQb3B1cCAmJiB0YXJnZXRFbGVtZW50ICYmIG9sZFBvcHVwLnBhcmVudE5vZGUgIT09IHRhcmdldEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHBvcHVwID0gaW5pdChwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIHBvcHVwID0gb2xkUG9wdXAgfHwgaW5pdChwYXJhbXMpO1xuICB9IC8vIFNldCBwb3B1cCB3aWR0aFxuXG5cbiAgaWYgKHBhcmFtcy53aWR0aCkge1xuICAgIHBvcHVwLnN0eWxlLndpZHRoID0gdHlwZW9mIHBhcmFtcy53aWR0aCA9PT0gJ251bWJlcicgPyBwYXJhbXMud2lkdGggKyAncHgnIDogcGFyYW1zLndpZHRoO1xuICB9IC8vIFNldCBwb3B1cCBwYWRkaW5nXG5cblxuICBpZiAocGFyYW1zLnBhZGRpbmcpIHtcbiAgICBwb3B1cC5zdHlsZS5wYWRkaW5nID0gdHlwZW9mIHBhcmFtcy5wYWRkaW5nID09PSAnbnVtYmVyJyA/IHBhcmFtcy5wYWRkaW5nICsgJ3B4JyA6IHBhcmFtcy5wYWRkaW5nO1xuICB9IC8vIFNldCBwb3B1cCBiYWNrZ3JvdW5kXG5cblxuICBpZiAocGFyYW1zLmJhY2tncm91bmQpIHtcbiAgICBwb3B1cC5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gIH1cblxuICB2YXIgcG9wdXBCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwb3B1cCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICB2YXIgc3VjY2Vzc0ljb25QYXJ0cyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwb3B1cEJhY2tncm91bmRDb2xvcjtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIGNsb3NlQnV0dG9uID0gZ2V0Q2xvc2VCdXR0b24oKTtcbiAgdmFyIGZvb3RlciA9IGdldEZvb3RlcigpOyAvLyBUaXRsZVxuXG4gIHJlbmRlclRpdGxlKHBhcmFtcyk7IC8vIENvbnRlbnRcblxuICByZW5kZXJDb250ZW50KHBhcmFtcyk7IC8vIEJhY2tkcm9wXG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMuYmFja2Ryb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgZ2V0Q29udGFpbmVyKCkuc3R5bGUuYmFja2dyb3VuZCA9IHBhcmFtcy5iYWNrZHJvcDtcbiAgfSBlbHNlIGlmICghcGFyYW1zLmJhY2tkcm9wKSB7XG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgfVxuXG4gIGlmICghcGFyYW1zLmJhY2tkcm9wICYmIHBhcmFtcy5hbGxvd091dHNpZGVDbGljaykge1xuICAgIHdhcm4oJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpO1xuICB9IC8vIFBvc2l0aW9uXG5cblxuICBpZiAocGFyYW1zLnBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twYXJhbXMucG9zaXRpb25dKTtcbiAgfSBlbHNlIHtcbiAgICB3YXJuKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuY2VudGVyKTtcbiAgfSAvLyBHcm93XG5cblxuICBpZiAocGFyYW1zLmdyb3cgJiYgdHlwZW9mIHBhcmFtcy5ncm93ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBncm93Q2xhc3MgPSAnZ3Jvdy0nICsgcGFyYW1zLmdyb3c7XG5cbiAgICBpZiAoZ3Jvd0NsYXNzIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW2dyb3dDbGFzc10pO1xuICAgIH1cbiAgfSAvLyBBbmltYXRpb25cblxuXG4gIGlmICh0eXBlb2YgcGFyYW1zLmFuaW1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBhcmFtcy5hbmltYXRpb24gPSBwYXJhbXMuYW5pbWF0aW9uLmNhbGwoKTtcbiAgfSAvLyBDbG9zZSBidXR0b25cblxuXG4gIGlmIChwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSB7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNsb3NlQnV0dG9uQXJpYUxhYmVsKTtcbiAgICBzaG93KGNsb3NlQnV0dG9uKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNsb3NlQnV0dG9uKTtcbiAgfSAvLyBEZWZhdWx0IENsYXNzXG5cblxuICBwb3B1cC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5wb3B1cDtcblxuICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudG9hc3QpO1xuICB9IGVsc2Uge1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbCk7XG4gIH0gLy8gQ3VzdG9tIENsYXNzXG5cblxuICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzKSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5jdXN0b21DbGFzcyk7XG4gIH0gLy8gUHJvZ3Jlc3Mgc3RlcHNcblxuXG4gIHJlbmRlclByb2dyZXNzU3RlcHMocGFyYW1zKTsgLy8gSWNvblxuXG4gIHJlbmRlckljb24ocGFyYW1zKTsgLy8gSW1hZ2VcblxuICByZW5kZXJJbWFnZShwYXJhbXMpOyAvLyBBY3Rpb25zIChidXR0b25zKVxuXG4gIHJlbmRlckFjdGlvbnMocGFyYW1zKTsgLy8gRm9vdGVyXG5cbiAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmZvb3RlciwgZm9vdGVyKTsgLy8gQ1NTIGFuaW1hdGlvblxuXG4gIGlmIChwYXJhbXMuYW5pbWF0aW9uID09PSB0cnVlKSB7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pO1xuICB9IC8vIHNob3dMb2FkZXJPbkNvbmZpcm0gJiYgcHJlQ29uZmlybVxuXG5cbiAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgIHdhcm4oJ3Nob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbicgKyAnc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbicgKyAnaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vI2FqYXgtcmVxdWVzdCcpO1xuICB9XG59XG5cbi8qKlxuICogT3BlbiBwb3B1cCwgYWRkIG5lY2Vzc2FyeSBjbGFzc2VzIGFuZCBzdHlsZXMsIGZpeCBzY3JvbGxiYXJcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXNcbiAqL1xuXG52YXIgb3BlblBvcHVwID0gZnVuY3Rpb24gb3BlblBvcHVwKHBhcmFtcykge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgaWYgKHBhcmFtcy5vbkJlZm9yZU9wZW4gIT09IG51bGwgJiYgdHlwZW9mIHBhcmFtcy5vbkJlZm9yZU9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXJhbXMub25CZWZvcmVPcGVuKHBvcHVwKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNob3cpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuZmFkZSk7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmhpZGUpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgfVxuXG4gIHNob3cocG9wdXApOyAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG5cbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiAhaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKSkge1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQoKSB7XG4gICAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgfVxuXG4gIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHksIGNvbnRhaW5lcl0sIHN3YWxDbGFzc2VzLnNob3duKTtcblxuICBpZiAocGFyYW1zLmhlaWdodEF1dG8gJiYgcGFyYW1zLmJhY2tkcm9wICYmICFwYXJhbXMudG9hc3QpIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10pO1xuICB9XG5cbiAgaWYgKGlzTW9kYWwoKSkge1xuICAgIGZpeFNjcm9sbGJhcigpO1xuICAgIGlPU2ZpeCgpO1xuICAgIHNldEFyaWFIaWRkZW4oKTtcbiAgfVxuXG4gIGlmICghaXNUb2FzdCgpICYmICFnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgaWYgKHBhcmFtcy5vbk9wZW4gIT09IG51bGwgJiYgdHlwZW9mIHBhcmFtcy5vbk9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhcmFtcy5vbk9wZW4ocG9wdXApO1xuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfbWFpbih1c2VyUGFyYW1zKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgc2hvd1dhcm5pbmdzRm9yUGFyYW1zKHVzZXJQYXJhbXMpO1xuXG4gIHZhciBpbm5lclBhcmFtcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UGFyYW1zLCB1c2VyUGFyYW1zKTtcblxuICBzZXRQYXJhbWV0ZXJzKGlubmVyUGFyYW1zKTtcbiAgT2JqZWN0LmZyZWV6ZShpbm5lclBhcmFtcyk7XG4gIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgaW5uZXJQYXJhbXMpOyAvLyBjbGVhciB0aGUgcHJldmlvdXMgdGltZXJcblxuICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICB9IC8vIGNsZWFyIHRoZSByZXN0b3JlIGZvY3VzIHRpbWVvdXRcblxuXG4gIGNsZWFyVGltZW91dChnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0KTtcbiAgdmFyIGRvbUNhY2hlID0ge1xuICAgIHBvcHVwOiBnZXRQb3B1cCgpLFxuICAgIGNvbnRhaW5lcjogZ2V0Q29udGFpbmVyKCksXG4gICAgY29udGVudDogZ2V0Q29udGVudCgpLFxuICAgIGFjdGlvbnM6IGdldEFjdGlvbnMoKSxcbiAgICBjb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uKCksXG4gICAgY2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24oKSxcbiAgICBjbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24oKSxcbiAgICB2YWxpZGF0aW9uRXJyb3I6IGdldFZhbGlkYXRpb25FcnJvcigpLFxuICAgIHByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMoKVxuICB9O1xuICBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuc2V0KHRoaXMsIGRvbUNhY2hlKTtcbiAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBmdW5jdGlvbnMgdG8gaGFuZGxlIGFsbCByZXNvbHZpbmcvcmVqZWN0aW5nL3NldHRsaW5nXG4gICAgdmFyIHN1Y2NlZWRXaXRoID0gZnVuY3Rpb24gc3VjY2VlZFdpdGgodmFsdWUpIHtcbiAgICAgIGNvbnN0cnVjdG9yLmNsb3NlUG9wdXAoaW5uZXJQYXJhbXMub25DbG9zZSwgaW5uZXJQYXJhbXMub25BZnRlckNsb3NlKTsgLy8gVE9ETzogbWFrZSBjbG9zZVBvcHVwIGFuICppbnN0YW5jZSogbWV0aG9kXG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGlzbWlzc1dpdGggPSBmdW5jdGlvbiBkaXNtaXNzV2l0aChkaXNtaXNzKSB7XG4gICAgICBjb25zdHJ1Y3Rvci5jbG9zZVBvcHVwKGlubmVyUGFyYW1zLm9uQ2xvc2UsIGlubmVyUGFyYW1zLm9uQWZ0ZXJDbG9zZSk7XG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy51c2VSZWplY3Rpb25zKSB7XG4gICAgICAgIHJlamVjdChkaXNtaXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGRpc21pc3M6IGRpc21pc3NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBlcnJvcldpdGggPSBmdW5jdGlvbiBlcnJvcldpdGgoZXJyb3IkJDEpIHtcbiAgICAgIGNvbnN0cnVjdG9yLmNsb3NlUG9wdXAoaW5uZXJQYXJhbXMub25DbG9zZSwgaW5uZXJQYXJhbXMub25BZnRlckNsb3NlKTtcbiAgICAgIHJlamVjdChlcnJvciQkMSk7XG4gICAgfTsgLy8gQ2xvc2Ugb24gdGltZXJcblxuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRpbWVyKSB7XG4gICAgICBnbG9iYWxTdGF0ZS50aW1lb3V0ID0gbmV3IFRpbWVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoJ3RpbWVyJyk7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICAgICAgfSwgaW5uZXJQYXJhbXMudGltZXIpO1xuICAgIH0gLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgcG9wdXAgaW5wdXRcblxuXG4gICAgdmFyIGdldElucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXQoKTtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyAxIDogMDtcblxuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmZpbGVzLmxlbmd0aCA/IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5pbnB1dEF1dG9UcmltID8gaW5wdXQudmFsdWUudHJpbSgpIDogaW5wdXQudmFsdWU7XG4gICAgICB9XG4gICAgfTsgLy8gaW5wdXQgYXV0b2ZvY3VzXG5cblxuICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IF90aGlzLmdldElucHV0KCk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHZhciBjb25maXJtID0gZnVuY3Rpb24gY29uZmlybSh2YWx1ZSkge1xuICAgICAgaWYgKGlubmVyUGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0pIHtcbiAgICAgICAgY29uc3RydWN0b3Iuc2hvd0xvYWRpbmcoKTsgLy8gVE9ETzogbWFrZSBzaG93TG9hZGluZyBhbiAqaW5zdGFuY2UqIG1ldGhvZFxuICAgICAgfVxuXG4gICAgICBpZiAoaW5uZXJQYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgICBfdGhpcy5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuXG4gICAgICAgIHZhciBwcmVDb25maXJtUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5wcmVDb25maXJtKHZhbHVlLCBpbm5lclBhcmFtcy5leHRyYVBhcmFtcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpbm5lclBhcmFtcy5leHBlY3RSZWplY3Rpb25zKSB7XG4gICAgICAgICAgcHJlQ29uZmlybVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlQ29uZmlybVZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VjY2VlZFdpdGgocHJlQ29uZmlybVZhbHVlIHx8IHZhbHVlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgIF90aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IodmFsaWRhdGlvbkVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcmVDb25maXJtVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChpc1Zpc2libGUoZG9tQ2FjaGUudmFsaWRhdGlvbkVycm9yKSB8fCBwcmVDb25maXJtVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWNjZWVkV2l0aChwcmVDb25maXJtVmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvciQkMSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yV2l0aChlcnJvciQkMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Y2NlZWRXaXRoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9OyAvLyBNb3VzZSBpbnRlcmFjdGlvbnNcblxuXG4gICAgdmFyIG9uQnV0dG9uRXZlbnQgPSBmdW5jdGlvbiBvbkJ1dHRvbkV2ZW50KGUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgIHZhciBjb25maXJtQnV0dG9uID0gZG9tQ2FjaGUuY29uZmlybUJ1dHRvbixcbiAgICAgICAgICBjYW5jZWxCdXR0b24gPSBkb21DYWNoZS5jYW5jZWxCdXR0b247XG4gICAgICB2YXIgdGFyZ2V0ZWRDb25maXJtID0gY29uZmlybUJ1dHRvbiAmJiAoY29uZmlybUJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNvbmZpcm1CdXR0b24uY29udGFpbnModGFyZ2V0KSk7XG4gICAgICB2YXIgdGFyZ2V0ZWRDYW5jZWwgPSBjYW5jZWxCdXR0b24gJiYgKGNhbmNlbEJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNhbmNlbEJ1dHRvbi5jb250YWlucyh0YXJnZXQpKTtcblxuICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgIC8vIENsaWNrZWQgJ2NvbmZpcm0nXG4gICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSAmJiBjb25zdHJ1Y3Rvci5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgX3RoaXMuZGlzYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gZ2V0SW5wdXRWYWx1ZSgpO1xuXG4gICAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmRpc2FibGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgaW5uZXJQYXJhbXMuZXh0cmFQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmV4cGVjdFJlamVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25maXJtKGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHZhbGlkYXRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcih2YWxpZGF0aW9uRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yJCQxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcldpdGgoZXJyb3IkJDEpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbmZpcm0odHJ1ZSk7XG4gICAgICAgICAgICB9IC8vIENsaWNrZWQgJ2NhbmNlbCdcblxuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwgJiYgY29uc3RydWN0b3IuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIF90aGlzLmRpc2FibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uY2FuY2VsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYnV0dG9ucyA9IGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBidXR0b25zW2ldLm9uY2xpY2sgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlb3ZlciA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdXQgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlZG93biA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgfSAvLyBDbG9zaW5nIHBvcHVwIGJ5IGNsb3NlIGJ1dHRvblxuXG5cbiAgICBkb21DYWNoZS5jbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgfTtcblxuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgLy8gQ2xvc2luZyBwb3B1cCBieSBpbnRlcm5hbCBjbGlja1xuICAgICAgZG9tQ2FjaGUucG9wdXAub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uIHx8IGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7IC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBwb3B1cCBidXQgbW91c2V1cCBvbiB0aGUgY29udGFpbmVyXG4gICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgdXNlciBkcmFncyBhIHNsaWRlclxuXG4gICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IHVuZGVmaW5lZDsgLy8gV2Ugb25seSBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBiZWNhdXNlIHVzdWFsbHkgaXQgZG9lc24ndFxuICAgICAgICAgIC8vIGhhdmUgYW55IG90aGVyIGRpcmVjdCBjaGlsZHJlbiBhc2lkZSBvZiB0aGUgcG9wdXBcblxuICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07IC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBjb250YWluZXIgYnV0IG1vdXNldXAgb24gdGhlIHBvcHVwXG5cblxuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IHVuZGVmaW5lZDsgLy8gV2UgYWxzbyBuZWVkIHRvIGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyBhIGNoaWxkIG9mIHRoZSBwb3B1cFxuXG4gICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5wb3B1cCB8fCBkb21DYWNoZS5wb3B1cC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoaWdub3JlT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBkb21DYWNoZS5jb250YWluZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spKSB7XG4gICAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5iYWNrZHJvcCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSAvLyBSZXZlcnNlIGJ1dHRvbnMgKENvbmZpcm0gb24gdGhlIHJpZ2h0IHNpZGUpXG5cblxuICAgIGlmIChpbm5lclBhcmFtcy5yZXZlcnNlQnV0dG9ucykge1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb21DYWNoZS5jYW5jZWxCdXR0b24sIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24sIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbik7XG4gICAgfSAvLyBGb2N1cyBoYW5kbGluZ1xuXG5cbiAgICB2YXIgc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cyhpbmRleCwgaW5jcmVtZW50KSB7XG4gICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cyhpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCk7IC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCArIGluY3JlbWVudDsgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgaW5kZXggPSAwOyAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9jdXNhYmxlRWxlbWVudHNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICB9IC8vIG5vIHZpc2libGUgZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgcG9wdXBcblxuXG4gICAgICBkb21DYWNoZS5wb3B1cC5mb2N1cygpO1xuICAgIH07XG5cbiAgICB2YXIga2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihlLCBpbm5lclBhcmFtcykge1xuICAgICAgaWYgKGlubmVyUGFyYW1zLnN0b3BLZXlkb3duUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFycm93S2V5cyA9IFsnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnLCAnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnTGVmdCcsICdSaWdodCcsICdVcCcsICdEb3duJyAvLyBJRTExXG4gICAgICBdO1xuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgIWUuaXNDb21wb3NpbmcpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICYmIF90aGlzLmdldElucHV0KCkgJiYgZS50YXJnZXQub3V0ZXJIVE1MID09PSBfdGhpcy5nZXRJbnB1dCgpLm91dGVySFRNTCkge1xuICAgICAgICAgIGlmIChbJ3RleHRhcmVhJywgJ2ZpbGUnXS5pbmRleE9mKGlubmVyUGFyYW1zLmlucHV0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0cnVjdG9yLmNsaWNrQ29uZmlybSgpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSAvLyBUQUJcblxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoaW5uZXJQYXJhbXMuZm9jdXNDYW5jZWwpO1xuICAgICAgICB2YXIgYnRuSW5kZXggPSAtMTtcblxuICAgICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW19pMl0pIHtcbiAgICAgICAgICAgIGJ0bkluZGV4ID0gX2kyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgICAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAtMSk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIEFSUk9XUyAtIHN3aXRjaCBmb2N1cyBiZXR3ZWVuIGJ1dHRvbnNcbiAgICAgIH0gZWxzZSBpZiAoYXJyb3dLZXlzLmluZGV4T2YoZS5rZXkpICE9PSAtMSkge1xuICAgICAgICAvLyBmb2N1cyBDYW5jZWwgYnV0dG9uIGlmIENvbmZpcm0gYnV0dG9uIGlzIGN1cnJlbnRseSBmb2N1c2VkXG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb21DYWNoZS5jb25maXJtQnV0dG9uICYmIGlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgICAgICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmZvY3VzKCk7IC8vIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9tQ2FjaGUuY2FuY2VsQnV0dG9uICYmIGlzVmlzaWJsZShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICAgICAgfSAvLyBFU0NcblxuICAgICAgfSBlbHNlIGlmICgoZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJykgJiYgY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFc2NhcGVLZXkpID09PSB0cnVlKSB7XG4gICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uZXNjKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGtleWRvd25IYW5kbGVyKGUsIGlubmVyUGFyYW1zKTtcbiAgICAgIH07XG5cbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlID8gd2luZG93IDogZG9tQ2FjaGUucG9wdXA7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlID0gaW5uZXJQYXJhbXMua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgX3RoaXMuZW5hYmxlQnV0dG9ucygpO1xuXG4gICAgX3RoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIF90aGlzLnJlc2V0VmFsaWRhdGlvbkVycm9yKCk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QgJiYgKGlubmVyUGFyYW1zLmlucHV0IHx8IGlubmVyUGFyYW1zLmZvb3RlciB8fCBpbm5lclBhcmFtcy5zaG93Q2xvc2VCdXR0b24pKSB7XG4gICAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ10pO1xuICAgIH0gLy8gaW5wdXRzXG5cblxuICAgIHZhciBpbnB1dFR5cGVzID0gWydpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICd0ZXh0YXJlYSddO1xuICAgIHZhciBpbnB1dDtcblxuICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IGlucHV0VHlwZXMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgdmFyIGlucHV0Q2xhc3MgPSBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVzW19pM11dO1xuICAgICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIGlucHV0Q2xhc3MpO1xuICAgICAgaW5wdXQgPSBfdGhpcy5nZXRJbnB1dChpbnB1dFR5cGVzW19pM10pOyAvLyBzZXQgYXR0cmlidXRlc1xuXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgZm9yICh2YXIgaiBpbiBpbnB1dC5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKGlucHV0LmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgIHZhciBhdHRyTmFtZSA9IGlucHV0LmF0dHJpYnV0ZXNbal0ubmFtZTtcblxuICAgICAgICAgICAgaWYgKGF0dHJOYW1lICE9PSAndHlwZScgJiYgYXR0ck5hbWUgIT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBhdHRyIGluIGlubmVyUGFyYW1zLmlucHV0QXR0cmlidXRlcykge1xuICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShhdHRyLCBpbm5lclBhcmFtcy5pbnB1dEF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgICB9XG4gICAgICB9IC8vIHNldCBjbGFzc1xuXG5cbiAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9IGlucHV0Q2xhc3M7XG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dENsYXNzKSB7XG4gICAgICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBpbm5lclBhcmFtcy5pbnB1dENsYXNzKTtcbiAgICAgIH1cblxuICAgICAgaGlkZShpbnB1dENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgdmFyIHBvcHVsYXRlSW5wdXRPcHRpb25zO1xuXG4gICAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAndGVsJzpcbiAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gaW5uZXJQYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgICBpbnB1dC50eXBlID0gaW5uZXJQYXJhbXMuaW5wdXQ7XG4gICAgICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIHtcbiAgICAgICAgICBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5maWxlKTtcbiAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGlubmVyUGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgICAgaW5wdXQudHlwZSA9IGlubmVyUGFyYW1zLmlucHV0O1xuICAgICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciByYW5nZSA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5yYW5nZSk7XG4gICAgICAgICAgdmFyIHJhbmdlSW5wdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgIHZhciByYW5nZU91dHB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpO1xuICAgICAgICAgIHJhbmdlSW5wdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICAgIHJhbmdlSW5wdXQudHlwZSA9IGlubmVyUGFyYW1zLmlucHV0O1xuICAgICAgICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgICBzaG93KHJhbmdlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICAgICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IGlubmVyUGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICAgICAgICAgIHZhciBvcHRpb25WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgICAgICAgICB2YXIgb3B0aW9uTGFiZWwgPSBpbnB1dE9wdGlvblsxXTtcbiAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgICAgb3B0aW9uLmlubmVySFRNTCA9IG9wdGlvbkxhYmVsO1xuXG4gICAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNob3coc2VsZWN0KTtcbiAgICAgICAgICAgIHNlbGVjdC5mb2N1cygpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgcmFkaW8gPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXMucmFkaW8pO1xuICAgICAgICAgIHJhZGlvLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBwb3B1bGF0ZUlucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE9wdGlvbikge1xuICAgICAgICAgICAgICB2YXIgcmFkaW9WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgICAgICAgICB2YXIgcmFkaW9MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgICAgICAgICB2YXIgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgIHZhciByYWRpb0xhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgICAgICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IHN3YWxDbGFzc2VzLnJhZGlvO1xuICAgICAgICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gcmFkaW9WYWx1ZTtcblxuICAgICAgICAgICAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSByYWRpb1ZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSByYWRpb0xhYmVsO1xuICAgICAgICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5sYWJlbDtcbiAgICAgICAgICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XG4gICAgICAgICAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbEVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzaG93KHJhZGlvKTtcbiAgICAgICAgICAgIHZhciByYWRpb3MgPSByYWRpby5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG4gICAgICAgICAgICBpZiAocmFkaW9zLmxlbmd0aCkge1xuICAgICAgICAgICAgICByYWRpb3NbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGNoZWNrYm94ID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLmNoZWNrYm94KTtcblxuICAgICAgICAgIHZhciBjaGVja2JveElucHV0ID0gX3RoaXMuZ2V0SW5wdXQoJ2NoZWNrYm94Jyk7XG5cbiAgICAgICAgICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgIGNoZWNrYm94SW5wdXQudmFsdWUgPSAxO1xuICAgICAgICAgIGNoZWNrYm94SW5wdXQuaWQgPSBzd2FsQ2xhc3Nlcy5jaGVja2JveDtcbiAgICAgICAgICBjaGVja2JveElucHV0LmNoZWNrZWQgPSBCb29sZWFuKGlubmVyUGFyYW1zLmlucHV0VmFsdWUpO1xuICAgICAgICAgIHZhciBsYWJlbCA9IGNoZWNrYm94LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBpbm5lclBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICAgIHNob3coY2hlY2tib3gpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0ZXh0YXJlYSA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG4gICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gaW5uZXJQYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgICBzaG93KHRleHRhcmVhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXFxcInRleHRcXFwiLCBcXFwiZW1haWxcXFwiLCBcXFwicGFzc3dvcmRcXFwiLCBcXFwibnVtYmVyXFxcIiwgXFxcInRlbFxcXCIsIFxcXCJzZWxlY3RcXFwiLCBcXFwicmFkaW9cXFwiLCBcXFwiY2hlY2tib3hcXFwiLCBcXFwidGV4dGFyZWFcXFwiLCBcXFwiZmlsZVxcXCIgb3IgXFxcInVybFxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KGlubmVyUGFyYW1zLmlucHV0LCBcIlxcXCJcIikpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXQgPT09ICdzZWxlY3QnIHx8IGlubmVyUGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgICB2YXIgcHJvY2Vzc0lucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBwb3B1bGF0ZUlucHV0T3B0aW9ucyhmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoaXNUaGVuYWJsZShpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMpKSB7XG4gICAgICAgIGNvbnN0cnVjdG9yLnNob3dMb2FkaW5nKCk7XG4gICAgICAgIGlubmVyUGFyYW1zLmlucHV0T3B0aW9ucy50aGVuKGZ1bmN0aW9uIChpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlubmVyUGFyYW1zLmlucHV0T3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCBcIi5jb25jYXQoX3R5cGVvZihpbm5lclBhcmFtcy5pbnB1dE9wdGlvbnMpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChbJ3RleHQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICd0ZXh0YXJlYSddLmluZGV4T2YoaW5uZXJQYXJhbXMuaW5wdXQpICE9PSAtMSAmJiBpc1RoZW5hYmxlKGlubmVyUGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICBjb25zdHJ1Y3Rvci5zaG93TG9hZGluZygpO1xuICAgICAgaGlkZShpbnB1dCk7XG4gICAgICBpbm5lclBhcmFtcy5pbnB1dFZhbHVlLnRoZW4oZnVuY3Rpb24gKGlucHV0VmFsdWUpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dCA9PT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KGlucHV0VmFsdWUpIHx8IDAgOiBpbnB1dFZhbHVlICsgJyc7XG4gICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGVycm9yKCdFcnJvciBpbiBpbnB1dFZhbHVlIHByb21pc2U6ICcgKyBlcnIpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlblBvcHVwKGlubmVyUGFyYW1zKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGlmICghY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFbnRlcktleSkpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKSkge1xuICAgICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDb25maXJtICYmIGlzVmlzaWJsZShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGb2N1cygtMSwgMSk7XG4gICAgICB9XG4gICAgfSAvLyBmaXggc2Nyb2xsXG5cblxuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICB9KTtcbn1cblxuXG5cbnZhciBpbnN0YW5jZU1ldGhvZHMgPSBPYmplY3QuZnJlZXplKHtcblx0aGlkZUxvYWRpbmc6IGhpZGVMb2FkaW5nLFxuXHRkaXNhYmxlTG9hZGluZzogaGlkZUxvYWRpbmcsXG5cdGdldElucHV0OiBnZXRJbnB1dCxcblx0ZW5hYmxlQnV0dG9uczogZW5hYmxlQnV0dG9ucyxcblx0ZGlzYWJsZUJ1dHRvbnM6IGRpc2FibGVCdXR0b25zLFxuXHRlbmFibGVDb25maXJtQnV0dG9uOiBlbmFibGVDb25maXJtQnV0dG9uLFxuXHRkaXNhYmxlQ29uZmlybUJ1dHRvbjogZGlzYWJsZUNvbmZpcm1CdXR0b24sXG5cdGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcblx0ZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG5cdHNob3dWYWxpZGF0aW9uRXJyb3I6IHNob3dWYWxpZGF0aW9uRXJyb3IsXG5cdHJlc2V0VmFsaWRhdGlvbkVycm9yOiByZXNldFZhbGlkYXRpb25FcnJvcixcblx0Z2V0UHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcyQxLFxuXHRzZXRQcm9ncmVzc1N0ZXBzOiBzZXRQcm9ncmVzc1N0ZXBzLFxuXHRzaG93UHJvZ3Jlc3NTdGVwczogc2hvd1Byb2dyZXNzU3RlcHMsXG5cdGhpZGVQcm9ncmVzc1N0ZXBzOiBoaWRlUHJvZ3Jlc3NTdGVwcyxcblx0X21haW46IF9tYWluXG59KTtcblxudmFyIGN1cnJlbnRJbnN0YW5jZTsgLy8gU3dlZXRBbGVydCBjb25zdHJ1Y3RvclxuXG5mdW5jdGlvbiBTd2VldEFsZXJ0KCkge1xuICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ2hlY2sgZm9yIHRoZSBleGlzdGVuY2Ugb2YgUHJvbWlzZVxuXG5cbiAgaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgIGVycm9yKCdUaGlzIHBhY2thZ2UgcmVxdWlyZXMgYSBQcm9taXNlIGxpYnJhcnksIHBsZWFzZSBpbmNsdWRlIGEgc2hpbSB0byBlbmFibGUgaXQgaW4gdGhpcyBicm93c2VyIChTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi93aWtpL01pZ3JhdGlvbi1mcm9tLVN3ZWV0QWxlcnQtdG8tU3dlZXRBbGVydDIjMS1pZS1zdXBwb3J0KScpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgIGVycm9yKCdBdCBsZWFzdCAxIGFyZ3VtZW50IGlzIGV4cGVjdGVkIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGN1cnJlbnRJbnN0YW5jZSA9IHRoaXM7XG4gIHZhciBvdXRlclBhcmFtcyA9IE9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoYXJncykpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICB2YWx1ZTogb3V0ZXJQYXJhbXMsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICB2YXIgcHJvbWlzZSA9IHRoaXMuX21haW4odGhpcy5wYXJhbXMpO1xuXG4gIHByaXZhdGVQcm9wcy5wcm9taXNlLnNldCh0aGlzLCBwcm9taXNlKTtcbn0gLy8gYGNhdGNoYCBjYW5ub3QgYmUgdGhlIG5hbWUgb2YgYSBtb2R1bGUgZXhwb3J0LCBzbyB3ZSBkZWZpbmUgb3VyIHRoZW5hYmxlIG1ldGhvZHMgaGVyZSBpbnN0ZWFkXG5cblxuU3dlZXRBbGVydC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICB2YXIgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgcmV0dXJuIHByb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG59O1xuXG5Td2VldEFsZXJ0LnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gIHZhciBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpO1xuICByZXR1cm4gcHJvbWlzZS5jYXRjaChvblJlamVjdGVkKTtcbn07XG5cblN3ZWV0QWxlcnQucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpO1xuICByZXR1cm4gcHJvbWlzZS5maW5hbGx5KG9uRmluYWxseSk7XG59OyAvLyBBc3NpZ24gaW5zdGFuY2UgbWV0aG9kcyBmcm9tIHNyYy9pbnN0YW5jZU1ldGhvZHMvKi5qcyB0byBwcm90b3R5cGVcblxuXG5fZXh0ZW5kcyhTd2VldEFsZXJ0LnByb3RvdHlwZSwgaW5zdGFuY2VNZXRob2RzKTsgLy8gQXNzaWduIHN0YXRpYyBtZXRob2RzIGZyb20gc3JjL3N0YXRpY01ldGhvZHMvKi5qcyB0byBjb25zdHJ1Y3RvclxuXG5cbl9leHRlbmRzKFN3ZWV0QWxlcnQsIHN0YXRpY01ldGhvZHMpOyAvLyBQcm94eSB0byBpbnN0YW5jZSBtZXRob2RzIHRvIGNvbnN0cnVjdG9yLCBmb3Igbm93LCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuXG5PYmplY3Qua2V5cyhpbnN0YW5jZU1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBTd2VldEFsZXJ0W2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRJbnN0YW5jZSkge1xuICAgICAgdmFyIF9jdXJyZW50SW5zdGFuY2U7XG5cbiAgICAgIHJldHVybiAoX2N1cnJlbnRJbnN0YW5jZSA9IGN1cnJlbnRJbnN0YW5jZSlba2V5XS5hcHBseShfY3VycmVudEluc3RhbmNlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn0pO1xuU3dlZXRBbGVydC5EaXNtaXNzUmVhc29uID0gRGlzbWlzc1JlYXNvbjtcblxuU3dlZXRBbGVydC5ub29wID0gZnVuY3Rpb24gKCkge307XG5cblN3ZWV0QWxlcnQudmVyc2lvbiA9IHZlcnNpb247XG5cbnZhciBTd2FsID0gd2l0aE5vTmV3S2V5d29yZCh3aXRoR2xvYmFsRGVmYXVsdHMoU3dlZXRBbGVydCkpO1xuU3dhbC5kZWZhdWx0ID0gU3dhbDtcblxucmV0dXJuIFN3YWw7XG5cbn0pKSk7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlN3ZWV0YWxlcnQyKXsgIHdpbmRvdy5zd2FsID0gd2luZG93LnN3ZWV0QWxlcnQgPSB3aW5kb3cuU3dhbCA9IHdpbmRvdy5Td2VldEFsZXJ0ID0gd2luZG93LlN3ZWV0YWxlcnQyfVxuXG5cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aWYoZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQobiksbi5zdHlsZVNoZWV0KW4uc3R5bGVTaGVldC5kaXNhYmxlZHx8KG4uc3R5bGVTaGVldC5jc3NUZXh0PXQpO2Vsc2UgdHJ5e24uaW5uZXJIVE1MPXR9Y2F0Y2goZSl7bi5pbm5lclRleHQ9dH19KGRvY3VtZW50LFwiQC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXNob3cge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7IH1cXG5cIiArXG5cIiAgNDUlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XFxuXCIgK1xuXCIgIDgwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQGtleWZyYW1lcyBzd2FsMi1zaG93IHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOyB9XFxuXCIgK1xuXCIgIDQ1JSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxcblwiICtcblwiICA4MCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1oaWRlIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQGtleWZyYW1lcyBzd2FsMi1oaWRlIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMTg3NWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4wNjI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNTQlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMDYyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4xMjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA3MCUge1xcblwiICtcblwiICAgIHRvcDogMi4xODc1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLS4zNzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMy4xMjVlbTsgfVxcblwiICtcblwiICA4NCUge1xcblwiICtcblwiICAgIHRvcDogM2VtO1xcblwiICtcblwiICAgIGxlZnQ6IDEuMzEyNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjA2MjVlbTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDIuODEyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC44NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMS41NjI1ZW07IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMTg3NWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4wNjI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNTQlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMDYyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4xMjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA3MCUge1xcblwiICtcblwiICAgIHRvcDogMi4xODc1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLS4zNzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMy4xMjVlbTsgfVxcblwiICtcblwiICA4NCUge1xcblwiICtcblwiICAgIHRvcDogM2VtO1xcblwiICtcblwiICAgIGxlZnQ6IDEuMzEyNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjA2MjVlbTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDIuODEyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC44NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMS41NjI1ZW07IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDMuMzc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDIuODc1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNjUlIHtcXG5cIiArXG5cIiAgICB0b3A6IDMuMzc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDIuODc1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgODQlIHtcXG5cIiArXG5cIiAgICB0b3A6IDIuMTg3NWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIHdpZHRoOiAzLjQzNzVlbTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDIuMzc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IC41ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDIuOTM3NWVtOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIHRvcDogMy4zNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMi44NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA2NSUge1xcblwiICtcblwiICAgIHRvcDogMy4zNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMi44NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA4NCUge1xcblwiICtcblwiICAgIHRvcDogMi4xODc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDA7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDMuNDM3NWVtOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIHRvcDogMi4zNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogLjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMi45Mzc1ZW07IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXCIgK1xuXCIgIDUlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXCIgK1xuXCIgIDEyJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXCIgK1xuXCIgIDUlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXCIgK1xuXCIgIDEyJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH1cXG5cIiArXG5cIiAgNTAlIHtcXG5cIiArXG5cIiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH1cXG5cIiArXG5cIiAgODAlIHtcXG5cIiArXG5cIiAgICBtYXJnaW4tdG9wOiAtLjM3NWVtO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgbWFyZ2luLXRvcDogMDtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDE7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfVxcblwiICtcblwiICA1MCUge1xcblwiICtcblwiICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfVxcblwiICtcblwiICA4MCUge1xcblwiICtcblwiICAgIG1hcmdpbi10b3A6IC0uMzc1ZW07XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICBtYXJnaW4tdG9wOiAwO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb24ge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMDBkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDEwMGRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDE7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIge1xcblwiICtcblwiICBwb3NpdGlvbjogZml4ZWQ7XFxuXCIgK1xuXCIgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93biB7XFxuXCIgK1xuXCIgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XFxuXCIgK1xuXCIgICAgdG9wOiAwO1xcblwiICtcblwiICAgIHJpZ2h0OiBhdXRvO1xcblwiICtcblwiICAgIGJvdHRvbTogYXV0bztcXG5cIiArXG5cIiAgICBsZWZ0OiA1MCU7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xcblwiICtcblwiICAgIHRvcDogMDtcXG5cIiArXG5cIiAgICByaWdodDogMDtcXG5cIiArXG5cIiAgICBib3R0b206IGF1dG87XFxuXCIgK1xuXCIgICAgbGVmdDogYXV0bzsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQge1xcblwiICtcblwiICAgIHRvcDogMDtcXG5cIiArXG5cIiAgICByaWdodDogYXV0bztcXG5cIiArXG5cIiAgICBib3R0b206IGF1dG87XFxuXCIgK1xuXCIgICAgbGVmdDogMDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQge1xcblwiICtcblwiICAgIHRvcDogNTAlO1xcblwiICtcblwiICAgIHJpZ2h0OiBhdXRvO1xcblwiICtcblwiICAgIGJvdHRvbTogYXV0bztcXG5cIiArXG5cIiAgICBsZWZ0OiAwO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXIge1xcblwiICtcblwiICAgIHRvcDogNTAlO1xcblwiICtcblwiICAgIHJpZ2h0OiBhdXRvO1xcblwiICtcblwiICAgIGJvdHRvbTogYXV0bztcXG5cIiArXG5cIiAgICBsZWZ0OiA1MCU7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcXG5cIiArXG5cIiAgICB0b3A6IDUwJTtcXG5cIiArXG5cIiAgICByaWdodDogMDtcXG5cIiArXG5cIiAgICBib3R0b206IGF1dG87XFxuXCIgK1xuXCIgICAgbGVmdDogYXV0bztcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xcblwiICtcblwiICAgIHRvcDogYXV0bztcXG5cIiArXG5cIiAgICByaWdodDogYXV0bztcXG5cIiArXG5cIiAgICBib3R0b206IDA7XFxuXCIgK1xuXCIgICAgbGVmdDogMDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcXG5cIiArXG5cIiAgICB0b3A6IGF1dG87XFxuXCIgK1xuXCIgICAgcmlnaHQ6IGF1dG87XFxuXCIgK1xuXCIgICAgYm90dG9tOiAwO1xcblwiICtcblwiICAgIGxlZnQ6IDUwJTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodCB7XFxuXCIgK1xuXCIgICAgdG9wOiBhdXRvO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIGJvdHRvbTogMDtcXG5cIiArXG5cIiAgICBsZWZ0OiBhdXRvOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cImJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCB7XFxuXCIgK1xuXCIgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXCIgK1xuXCIgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9ucyB7XFxuXCIgK1xuXCIgICAgZmxleDogMTtcXG5cIiArXG5cIiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcblwiICtcblwiICAgIGhlaWdodDogMi4yZW07XFxuXCIgK1xuXCIgICAgbWFyZ2luLXRvcDogLjMxMjVlbTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRpbmcge1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXQge1xcblwiICtcblwiICAgIGhlaWdodDogMmVtO1xcblwiICtcblwiICAgIG1hcmdpbjogLjMxMjVlbSBhdXRvO1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMWVtOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItdmFsaWRhdGlvbmVycm9yIHtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDFlbTsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItcG9wdXAuc3dhbDItdG9hc3Qge1xcblwiICtcblwiICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblwiICtcblwiICBhbGlnbi1pdGVtczogY2VudGVyO1xcblwiICtcblwiICB3aWR0aDogYXV0bztcXG5cIiArXG5cIiAgcGFkZGluZzogMC42MjVlbTtcXG5cIiArXG5cIiAgYm94LXNoYWRvdzogMCAwIDAuNjI1ZW0gI2Q5ZDlkOTtcXG5cIiArXG5cIiAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaGVhZGVyIHtcXG5cIiArXG5cIiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdGl0bGUge1xcblwiICtcblwiICAgIGZsZXgtZ3JvdzogMTtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAwIC42ZW07XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxZW07IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1mb290ZXIge1xcblwiICtcblwiICAgIG1hcmdpbjogMC41ZW0gMCAwO1xcblwiICtcblwiICAgIHBhZGRpbmc6IDAuNWVtIDAgMDtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDAuOGVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY2xvc2Uge1xcblwiICtcblwiICAgIHBvc2l0aW9uOiBpbml0aWFsO1xcblwiICtcblwiICAgIHdpZHRoOiAwLjhlbTtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDAuOGVtO1xcblwiICtcblwiICAgIGxpbmUtaGVpZ2h0OiAwLjg7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1jb250ZW50IHtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxZW07IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIHtcXG5cIiArXG5cIiAgICB3aWR0aDogMmVtO1xcblwiICtcblwiICAgIG1pbi13aWR0aDogMmVtO1xcblwiICtcblwiICAgIGhlaWdodDogMmVtO1xcblwiICtcblwiICAgIG1hcmdpbjogMDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi10ZXh0IHtcXG5cIiArXG5cIiAgICAgIGZvbnQtc2l6ZTogMmVtO1xcblwiICtcblwiICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXCIgK1xuXCIgICAgICBsaW5lLWhlaWdodDogMWVtOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMmVtO1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAyZW07IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XFxuXCIgK1xuXCIgICAgICB0b3A6IC44NzVlbTtcXG5cIiArXG5cIiAgICAgIHdpZHRoOiAxLjM3NWVtOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XFxuXCIgK1xuXCIgICAgICAgIGxlZnQ6IC4zMTI1ZW07IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XFxuXCIgK1xuXCIgICAgICAgIHJpZ2h0OiAuMzEyNWVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9ucyB7XFxuXCIgK1xuXCIgICAgaGVpZ2h0OiBhdXRvO1xcblwiICtcblwiICAgIG1hcmdpbjogMCAuMzEyNWVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkIHtcXG5cIiArXG5cIiAgICBtYXJnaW46IDAgLjMxMjVlbTtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAuMzEyNWVtIC42MjVlbTtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDFlbTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkOmZvY3VzIHtcXG5cIiArXG5cIiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMDYyNWVtICNmZmYsIDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIHtcXG5cIiArXG5cIiAgICBib3JkZXItY29sb3I6ICNhNWRjODY7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ10ge1xcblwiICtcblwiICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcblwiICtcblwiICAgICAgd2lkdGg6IDJlbTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogMi44MTI1ZW07XFxuXCIgK1xuXCIgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ11bY2xhc3MkPSdsZWZ0J10ge1xcblwiICtcblwiICAgICAgICB0b3A6IC0uMjVlbTtcXG5cIiArXG5cIiAgICAgICAgbGVmdDogLS45Mzc1ZW07XFxuXCIgK1xuXCIgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDJlbSAyZW07XFxuXCIgK1xuXCIgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcXG5cIiArXG5cIiAgICAgICAgYm9yZGVyLXJhZGl1czogNGVtIDAgMCA0ZW07IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J3JpZ2h0J10ge1xcblwiICtcblwiICAgICAgICB0b3A6IC0uMjVlbTtcXG5cIiArXG5cIiAgICAgICAgbGVmdDogLjkzNzVlbTtcXG5cIiArXG5cIiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDJlbTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDJlbTtcXG5cIiArXG5cIiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0ZW0gNGVtIDA7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMmVtO1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAyZW07IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcXG5cIiArXG5cIiAgICAgIHRvcDogMDtcXG5cIiArXG5cIiAgICAgIGxlZnQ6IC40Mzc1ZW07XFxuXCIgK1xuXCIgICAgICB3aWR0aDogLjQzNzVlbTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogMi42ODc1ZW07IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ10ge1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAuMzEyNWVtOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSd0aXAnXSB7XFxuXCIgK1xuXCIgICAgICAgIHRvcDogMS4xMjVlbTtcXG5cIiArXG5cIiAgICAgICAgbGVmdDogLjE4NzVlbTtcXG5cIiArXG5cIiAgICAgICAgd2lkdGg6IC43NWVtOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSdsb25nJ10ge1xcblwiICtcblwiICAgICAgICB0b3A6IC45Mzc1ZW07XFxuXCIgK1xuXCIgICAgICAgIHJpZ2h0OiAuMTg3NWVtO1xcblwiICtcblwiICAgICAgICB3aWR0aDogMS4zNzVlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvdyB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC1hbmltYXRpb246IHNob3dTd2VldFRvYXN0IC41cztcXG5cIiArXG5cIiAgICAgICAgICAgIGFuaW1hdGlvbjogc2hvd1N3ZWV0VG9hc3QgLjVzOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdC5zd2FsMi1oaWRlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LWFuaW1hdGlvbjogaGlkZVN3ZWV0VG9hc3QgLjJzIGZvcndhcmRzO1xcblwiICtcblwiICAgICAgICAgICAgYW5pbWF0aW9uOiBoaWRlU3dlZXRUb2FzdCAuMnMgZm9yd2FyZHM7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy10aXAgLjc1cztcXG5cIiArXG5cIiAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcCAuNzVzOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLWxvbmcgLjc1cztcXG5cIiArXG5cIiAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLWxvbmcgLjc1czsgfVxcblwiICtcblwiXFxuXCIgK1xuXCJALXdlYmtpdC1rZXlmcmFtZXMgc2hvd1N3ZWV0VG9hc3Qge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNjI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNjI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfVxcblwiICtcblwiICAzMyUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IC41OyB9XFxuXCIgK1xuXCIgIDY2JSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogLjc7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDE7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIHNob3dTd2VldFRvYXN0IHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjYyNWVtKSByb3RhdGVaKDJkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjYyNWVtKSByb3RhdGVaKDJkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH1cXG5cIiArXG5cIiAgMzMlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAuNTsgfVxcblwiICtcblwiICA2NiUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMzEyNWVtKSByb3RhdGVaKDJkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMzEyNWVtKSByb3RhdGVaKDJkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IC43OyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQC13ZWJraXQta2V5ZnJhbWVzIGhpZGVTd2VldFRvYXN0IHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIG9wYWNpdHk6IDE7IH1cXG5cIiArXG5cIiAgMzMlIHtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAuNTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQGtleWZyYW1lcyBoaWRlU3dlZXRUb2FzdCB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAxOyB9XFxuXCIgK1xuXCIgIDMzJSB7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogLjU7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMWRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtdGlwIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIHRvcDogLjU2MjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAuMDYyNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDU0JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAuMTI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjEyNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDcwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAuNjI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLS4yNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjYyNWVtOyB9XFxuXCIgK1xuXCIgIDg0JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAxLjA2MjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAuNzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogLjVlbTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMTI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjE4NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogLjc1ZW07IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy10aXAge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAuNTYyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4wNjI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNTQlIHtcXG5cIiArXG5cIiAgICB0b3A6IC4xMjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAuMTI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNzAlIHtcXG5cIiArXG5cIiAgICB0b3A6IC42MjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAtLjI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEuNjI1ZW07IH1cXG5cIiArXG5cIiAgODQlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMDYyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC43NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAuNWVtOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIHRvcDogMS4xMjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAuMTg3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAuNzVlbTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuNjI1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDEuMzc1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNjUlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMjVlbTtcXG5cIiArXG5cIiAgICByaWdodDogLjkzNzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA4NCUge1xcblwiICtcblwiICAgIHRvcDogLjkzNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMDtcXG5cIiArXG5cIiAgICB3aWR0aDogMS4xMjVlbTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IC45Mzc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IC4xODc1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEuMzc1ZW07IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy1sb25nIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIHRvcDogMS42MjVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMS4zNzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA2NSUge1xcblwiICtcblwiICAgIHRvcDogMS4yNWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAuOTM3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDg0JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAuOTM3NWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjEyNWVtOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIHRvcDogLjkzNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogLjE4NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMS4zNzVlbTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cImJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xcblwiICtcblwiICBvdmVyZmxvdy15OiBoaWRkZW47IH1cXG5cIiArXG5cIlxcblwiICtcblwiYm9keS5zd2FsMi1oZWlnaHQtYXV0byB7XFxuXCIgK1xuXCIgIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cImJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duIHtcXG5cIiArXG5cIiAgdG9wOiBhdXRvO1xcblwiICtcblwiICByaWdodDogYXV0bztcXG5cIiArXG5cIiAgYm90dG9tOiBhdXRvO1xcblwiICtcblwiICBsZWZ0OiBhdXRvO1xcblwiICtcblwiICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93biA+IC5zd2FsMi1tb2RhbCB7XFxuXCIgK1xuXCIgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcCB7XFxuXCIgK1xuXCIgICAgdG9wOiAwO1xcblwiICtcblwiICAgIGxlZnQ6IDUwJTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3Atc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1sZWZ0IHtcXG5cIiArXG5cIiAgICB0b3A6IDA7XFxuXCIgK1xuXCIgICAgbGVmdDogMDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3AtZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3AtcmlnaHQge1xcblwiICtcblwiICAgIHRvcDogMDtcXG5cIiArXG5cIiAgICByaWdodDogMDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXIge1xcblwiICtcblwiICAgIHRvcDogNTAlO1xcblwiICtcblwiICAgIGxlZnQ6IDUwJTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLXN0YXJ0LCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItbGVmdCB7XFxuXCIgK1xuXCIgICAgdG9wOiA1MCU7XFxuXCIgK1xuXCIgICAgbGVmdDogMDtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItcmlnaHQge1xcblwiICtcblwiICAgIHRvcDogNTAlO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbSB7XFxuXCIgK1xuXCIgICAgYm90dG9tOiAwO1xcblwiICtcblwiICAgIGxlZnQ6IDUwJTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1sZWZ0IHtcXG5cIiArXG5cIiAgICBib3R0b206IDA7XFxuXCIgK1xuXCIgICAgbGVmdDogMDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tcmlnaHQge1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIGJvdHRvbTogMDsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItY29udGFpbmVyIHtcXG5cIiArXG5cIiAgZGlzcGxheTogZmxleDtcXG5cIiArXG5cIiAgcG9zaXRpb246IGZpeGVkO1xcblwiICtcblwiICB0b3A6IDA7XFxuXCIgK1xuXCIgIHJpZ2h0OiAwO1xcblwiICtcblwiICBib3R0b206IDA7XFxuXCIgK1xuXCIgIGxlZnQ6IDA7XFxuXCIgK1xuXCIgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXCIgK1xuXCIgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXCIgK1xuXCIgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblwiICtcblwiICBwYWRkaW5nOiAxMHB4O1xcblwiICtcblwiICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cIiArXG5cIiAgei1pbmRleDogMTA2MDtcXG5cIiArXG5cIiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblwiICtcblwiICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xcblwiICtcblwiICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xcblwiICtcblwiICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodCB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4gPiAuc3dhbDItbW9kYWwge1xcblwiICtcblwiICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG5cIiArXG5cIiAgICBmbGV4OiAxO1xcblwiICtcblwiICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LXJvdyA+IC5zd2FsMi1tb2RhbCB7XFxuXCIgK1xuXCIgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcblwiICtcblwiICAgIGZsZXg6IDE7XFxuXCIgK1xuXCIgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4ge1xcblwiICtcblwiICAgIGZsZXg6IDE7XFxuXCIgK1xuXCIgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblwiICtcblwiICAgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlciwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20ge1xcblwiICtcblwiICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblwiICtcblwiICAgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLWxlZnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWxlZnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWxlZnQge1xcblwiICtcblwiICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1yaWdodCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItcmlnaHQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXJpZ2h0IHtcXG5cIiArXG5cIiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4gPiAuc3dhbDItbW9kYWwge1xcblwiICtcblwiICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcblwiICtcblwiICAgICAgZmxleDogMTtcXG5cIiArXG5cIiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cIiArXG5cIiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1jb250YWluZXI6bm90KC5zd2FsMi10b3ApOm5vdCguc3dhbDItdG9wLXN0YXJ0KTpub3QoLnN3YWwyLXRvcC1lbmQpOm5vdCguc3dhbDItdG9wLWxlZnQpOm5vdCguc3dhbDItdG9wLXJpZ2h0KTpub3QoLnN3YWwyLWNlbnRlci1zdGFydCk6bm90KC5zd2FsMi1jZW50ZXItZW5kKTpub3QoLnN3YWwyLWNlbnRlci1sZWZ0KTpub3QoLnN3YWwyLWNlbnRlci1yaWdodCk6bm90KC5zd2FsMi1ib3R0b20pOm5vdCguc3dhbDItYm90dG9tLXN0YXJ0KTpub3QoLnN3YWwyLWJvdHRvbS1lbmQpOm5vdCguc3dhbDItYm90dG9tLWxlZnQpOm5vdCguc3dhbDItYm90dG9tLXJpZ2h0KTpub3QoLnN3YWwyLWdyb3ctZnVsbHNjcmVlbikgPiAuc3dhbDItbW9kYWwge1xcblwiICtcblwiICAgIG1hcmdpbjogYXV0bzsgfVxcblwiICtcblwiICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xcblwiICtcblwiICAgIC5zd2FsMi1jb250YWluZXIgLnN3YWwyLW1vZGFsIHtcXG5cIiArXG5cIiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50OyB9IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1mYWRlIHtcXG5cIiArXG5cIiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xczsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLXNob3duIHtcXG5cIiArXG5cIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cXG5cIiArXG5cIlxcblwiICtcblwiLnN3YWwyLXBvcHVwIHtcXG5cIiArXG5cIiAgZGlzcGxheTogbm9uZTtcXG5cIiArXG5cIiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblwiICtcblwiICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblwiICtcblwiICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cIiArXG5cIiAgd2lkdGg6IDMyZW07XFxuXCIgK1xuXCIgIG1heC13aWR0aDogMTAwJTtcXG5cIiArXG5cIiAgcGFkZGluZzogMS4yNWVtO1xcblwiICtcblwiICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTtcXG5cIiArXG5cIiAgYmFja2dyb3VuZDogI2ZmZjtcXG5cIiArXG5cIiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuXCIgK1xuXCIgIGZvbnQtc2l6ZTogMXJlbTtcXG5cIiArXG5cIiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXA6Zm9jdXMge1xcblwiICtcblwiICAgIG91dGxpbmU6IG5vbmU7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLWxvYWRpbmcge1xcblwiICtcblwiICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWhlYWRlciB7XFxuXCIgK1xuXCIgICAgZGlzcGxheTogZmxleDtcXG5cIiArXG5cIiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblwiICtcblwiICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi10aXRsZSB7XFxuXCIgK1xuXCIgICAgZGlzcGxheTogYmxvY2s7XFxuXCIgK1xuXCIgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblwiICtcblwiICAgIG1heC13aWR0aDogMTAwJTtcXG5cIiArXG5cIiAgICBtYXJnaW46IDAgMCAwLjRlbTtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAwO1xcblwiICtcblwiICAgIGNvbG9yOiAjNTk1OTU5O1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMS44NzVlbTtcXG5cIiArXG5cIiAgICBmb250LXdlaWdodDogNjAwO1xcblwiICtcblwiICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cIiArXG5cIiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG5cIiArXG5cIiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zIHtcXG5cIiArXG5cIiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBtYXJnaW46IDEuMjVlbSBhdXRvIDA7XFxuXCIgK1xuXCIgICAgei1pbmRleDogMTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWRbZGlzYWJsZWRdIHtcXG5cIiArXG5cIiAgICAgIG9wYWNpdHk6IC40OyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDpob3ZlciB7XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDphY3RpdmUge1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybSB7XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMi41ZW07XFxuXCIgK1xuXCIgICAgICBoZWlnaHQ6IDIuNWVtO1xcblwiICtcblwiICAgICAgbWFyZ2luOiAuNDY4NzVlbTtcXG5cIiArXG5cIiAgICAgIHBhZGRpbmc6IDA7XFxuXCIgK1xuXCIgICAgICBib3JkZXI6IC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG5cIiArXG5cIiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcblwiICtcblwiICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcblwiICtcblwiICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcblwiICtcblwiICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cIiArXG5cIiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XFxuXCIgK1xuXCIgICAgICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xcblwiICtcblwiICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cIiArXG5cIiAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuXCIgK1xuXCIgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcblwiICtcblwiICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2VsIHtcXG5cIiArXG5cIiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG5cIiArXG5cIiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4OyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgOm5vdCguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJtOjphZnRlciB7XFxuXCIgK1xuXCIgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMTVweDtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogMTVweDtcXG5cIiArXG5cIiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuXCIgK1xuXCIgICAgICBib3JkZXI6IDNweCBzb2xpZCAjOTk5OTk5O1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblwiICtcblwiICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cIiArXG5cIiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICNmZmY7XFxuXCIgK1xuXCIgICAgICBjb250ZW50OiAnJztcXG5cIiArXG5cIiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XFxuXCIgK1xuXCIgICAgICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkIHtcXG5cIiArXG5cIiAgICBtYXJnaW46IC4zMTI1ZW07XFxuXCIgK1xuXCIgICAgcGFkZGluZzogLjYyNWVtIDJlbTtcXG5cIiArXG5cIiAgICBmb250LXdlaWdodDogNTAwO1xcblwiICtcblwiICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZDpub3QoW2Rpc2FibGVkXSkge1xcblwiICtcblwiICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybSB7XFxuXCIgK1xuXCIgICAgICBib3JkZXI6IDA7XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwODVkNjtcXG5cIiArXG5cIiAgICAgIGNvbG9yOiAjZmZmO1xcblwiICtcblwiICAgICAgZm9udC1zaXplOiAxLjA2MjVlbTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbCB7XFxuXCIgK1xuXCIgICAgICBib3JkZXI6IDA7XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcXG5cIiArXG5cIiAgICAgIGNvbG9yOiAjZmZmO1xcblwiICtcblwiICAgICAgZm9udC1zaXplOiAxLjA2MjVlbTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkOmZvY3VzIHtcXG5cIiArXG5cIiAgICAgIG91dGxpbmU6IG5vbmU7XFxuXCIgK1xuXCIgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZiwgMCAwIDAgNHB4IHJnYmEoNTAsIDEwMCwgMTUwLCAwLjQpOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcblwiICtcblwiICAgICAgYm9yZGVyOiAwOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItZm9vdGVyIHtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBtYXJnaW46IDEuMjVlbSAwIDA7XFxuXCIgK1xuXCIgICAgcGFkZGluZzogMWVtIDAgMDtcXG5cIiArXG5cIiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcXG5cIiArXG5cIiAgICBjb2xvcjogIzU0NTQ1NDtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDFlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWltYWdlIHtcXG5cIiArXG5cIiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAxLjI1ZW0gYXV0bzsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWNsb3NlIHtcXG5cIiArXG5cIiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXCIgK1xuXCIgICAgdG9wOiAwO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjJlbTtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDEuMmVtO1xcblwiICtcblwiICAgIHBhZGRpbmc6IDA7XFxuXCIgK1xuXCIgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcXG5cIiArXG5cIiAgICBib3JkZXI6IG5vbmU7XFxuXCIgK1xuXCIgICAgYm9yZGVyLXJhZGl1czogMDtcXG5cIiArXG5cIiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cIiArXG5cIiAgICBjb2xvcjogI2NjY2NjYztcXG5cIiArXG5cIiAgICBmb250LWZhbWlseTogc2VyaWY7XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAyLjVlbTtcXG5cIiArXG5cIiAgICBsaW5lLWhlaWdodDogMS4yO1xcblwiICtcblwiICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cIiArXG5cIiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1jbG9zZTpob3ZlciB7XFxuXCIgK1xuXCIgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcblwiICtcblwiICAgICAgY29sb3I6ICNmMjc0NzQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwID4gLnN3YWwyLWlucHV0LFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgPiAuc3dhbDItZmlsZSxcXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwID4gLnN3YWwyLXRleHRhcmVhLFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgPiAuc3dhbDItc2VsZWN0LFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgPiAuc3dhbDItcmFkaW8sXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCA+IC5zd2FsMi1jaGVja2JveCB7XFxuXCIgK1xuXCIgICAgZGlzcGxheTogbm9uZTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWNvbnRlbnQge1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblwiICtcblwiICAgIG1hcmdpbjogMDtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAwO1xcblwiICtcblwiICAgIGNvbG9yOiAjNTQ1NDU0O1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcXG5cIiArXG5cIiAgICBmb250LXdlaWdodDogMzAwO1xcblwiICtcblwiICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXCIgK1xuXCIgICAgei1pbmRleDogMTtcXG5cIiArXG5cIiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwICNzd2FsMi1jb250ZW50IHtcXG5cIiArXG5cIiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dCxcXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlLFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhLFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXNlbGVjdCxcXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyxcXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1jaGVja2JveCB7XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAxZW0gYXV0bzsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUsXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWEge1xcblwiICtcblwiICAgIHdpZHRoOiAxMDAlO1xcblwiICtcblwiICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MsIGJveC1zaGFkb3cgLjNzO1xcblwiICtcblwiICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuXCIgK1xuXCIgICAgYm9yZGVyLXJhZGl1czogMC4xODc1ZW07XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxLjEyNWVtO1xcblwiICtcblwiICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcblwiICtcblwiICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LnN3YWwyLWlucHV0ZXJyb3IsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlLnN3YWwyLWlucHV0ZXJyb3IsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9yIHtcXG5cIiArXG5cIiAgICAgIGJvcmRlci1jb2xvcjogI2YyNzQ3NCAhaW1wb3J0YW50O1xcblwiICtcblwiICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAjZjI3NDc0ICFpbXBvcnRhbnQ7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0OmZvY3VzLFxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTpmb2N1cyxcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOmZvY3VzIHtcXG5cIiArXG5cIiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNGRiZWQ7XFxuXCIgK1xuXCIgICAgICBvdXRsaW5lOiBub25lO1xcblwiICtcblwiICAgICAgYm94LXNoYWRvdzogMCAwIDNweCAjYzRlNmY1OyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXCIgK1xuXCIgICAgICBjb2xvcjogI2NjY2NjYzsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcblwiICtcblwiICAgICAgY29sb3I6ICNjY2NjY2M7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG5cIiArXG5cIiAgICAgIGNvbG9yOiAjY2NjY2NjOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6cGxhY2Vob2xkZXIsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOjpwbGFjZWhvbGRlcixcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuXCIgK1xuXCIgICAgICBjb2xvcjogI2NjY2NjYzsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhbmdlIGlucHV0IHtcXG5cIiArXG5cIiAgICB3aWR0aDogODAlOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcXG5cIiArXG5cIiAgICB3aWR0aDogMjAlO1xcblwiICtcblwiICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXCIgK1xuXCIgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2UgaW5wdXQsXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDIuNjI1ZW07XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAxZW0gYXV0bztcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAwO1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcXG5cIiArXG5cIiAgICBsaW5lLWhlaWdodDogMi42MjVlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0IHtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDIuNjI1ZW07XFxuXCIgK1xuXCIgICAgcGFkZGluZzogMCAwLjc1ZW07IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0W3R5cGU9J251bWJlciddIHtcXG5cIiArXG5cIiAgICAgIG1heC13aWR0aDogMTBlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUge1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMS4xMjVlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhIHtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDYuNzVlbTtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAwLjc1ZW07IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zZWxlY3Qge1xcblwiICtcblwiICAgIG1pbi13aWR0aDogNTAlO1xcblwiICtcblwiICAgIG1heC13aWR0aDogMTAwJTtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAuMzc1ZW0gLjYyNWVtO1xcblwiICtcblwiICAgIGNvbG9yOiAjNTQ1NDU0O1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMS4xMjVlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvLFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IHtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyBsYWJlbCxcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IGxhYmVsIHtcXG5cIiArXG5cIiAgICAgIG1hcmdpbjogMCAuNmVtO1xcblwiICtcblwiICAgICAgZm9udC1zaXplOiAxLjEyNWVtOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyBpbnB1dCxcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IGlucHV0IHtcXG5cIiArXG5cIiAgICAgIG1hcmdpbjogMCAuNGVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItdmFsaWRhdGlvbmVycm9yIHtcXG5cIiArXG5cIiAgICBkaXNwbGF5OiBub25lO1xcblwiICtcblwiICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXCIgK1xuXCIgICAgcGFkZGluZzogMC42MjVlbTtcXG5cIiArXG5cIiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcblwiICtcblwiICAgIGNvbG9yOiAjNjY2NjY2O1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMWVtO1xcblwiICtcblwiICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuXCIgK1xuXCIgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItdmFsaWRhdGlvbmVycm9yOjpiZWZvcmUge1xcblwiICtcblwiICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblwiICtcblwiICAgICAgd2lkdGg6IDEuNWVtO1xcblwiICtcblwiICAgICAgbWluLXdpZHRoOiAxLjVlbTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogMS41ZW07XFxuXCIgK1xuXCIgICAgICBtYXJnaW46IDAgLjYyNWVtO1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzQ3NDtcXG5cIiArXG5cIiAgICAgIGNvbG9yOiAjZmZmO1xcblwiICtcblwiICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cIiArXG5cIiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG5cIiArXG5cIiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cIiArXG5cIiAgICAgIGNvbnRlbnQ6ICchJztcXG5cIiArXG5cIiAgICAgIHpvb206IG5vcm1hbDsgfVxcblwiICtcblwiXFxuXCIgK1xuXCJAc3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjogdHJ1ZSkge1xcblwiICtcblwiICAuc3dhbDItcmFuZ2UgaW5wdXQge1xcblwiICtcblwiICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXJhbmdlIG91dHB1dCB7XFxuXCIgK1xuXCIgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XFxuXCIgK1xuXCIgIC5zd2FsMi1yYW5nZSBpbnB1dCB7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxcblwiICtcblwiICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcXG5cIiArXG5cIiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcXG5cIiArXG5cIiAgLnN3YWwyLWNsb3NlOmZvY3VzIHtcXG5cIiArXG5cIiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItaWNvbiB7XFxuXCIgK1xuXCIgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cIiArXG5cIiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXCIgK1xuXCIgIHdpZHRoOiA1ZW07XFxuXCIgK1xuXCIgIGhlaWdodDogNWVtO1xcblwiICtcblwiICBtYXJnaW46IDEuMjVlbSBhdXRvIDEuODc1ZW07XFxuXCIgK1xuXCIgIGJvcmRlcjogLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuXCIgK1xuXCIgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cIiArXG5cIiAgbGluZS1oZWlnaHQ6IDVlbTtcXG5cIiArXG5cIiAgY3Vyc29yOiBkZWZhdWx0O1xcblwiICtcblwiICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG5cIiArXG5cIiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cIiArXG5cIiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cIiArXG5cIiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG5cIiArXG5cIiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cIiArXG5cIiAgem9vbTogbm9ybWFsOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1pY29uLXRleHQge1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMy43NWVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIHtcXG5cIiArXG5cIiAgICBib3JkZXItY29sb3I6ICNmMjc0NzQ7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciAuc3dhbDIteC1tYXJrIHtcXG5cIiArXG5cIiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cIiArXG5cIiAgICAgIGZsZXgtZ3JvdzogMTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ10ge1xcblwiICtcblwiICAgICAgZGlzcGxheTogYmxvY2s7XFxuXCIgK1xuXCIgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXCIgK1xuXCIgICAgICB0b3A6IDIuMzEyNWVtO1xcblwiICtcblwiICAgICAgd2lkdGg6IDIuOTM3NWVtO1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAuMzEyNWVtO1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogLjEyNWVtO1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzQ3NDsgfVxcblwiICtcblwiICAgICAgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XFxuXCIgK1xuXCIgICAgICAgIGxlZnQ6IDEuMDYyNWVtO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ11bY2xhc3MkPSdyaWdodCddIHtcXG5cIiArXG5cIiAgICAgICAgcmlnaHQ6IDFlbTtcXG5cIiArXG5cIiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWljb24uc3dhbDItd2FybmluZyB7XFxuXCIgK1xuXCIgICAgYm9yZGVyLWNvbG9yOiAjZmFjZWE4O1xcblwiICtcblwiICAgIGNvbG9yOiAjZjhiYjg2OyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1pY29uLnN3YWwyLWluZm8ge1xcblwiICtcblwiICAgIGJvcmRlci1jb2xvcjogIzlkZTBmNjtcXG5cIiArXG5cIiAgICBjb2xvcjogIzNmYzNlZTsgfVxcblwiICtcblwiICAuc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbiB7XFxuXCIgK1xuXCIgICAgYm9yZGVyLWNvbG9yOiAjYzlkYWUxO1xcblwiICtcblwiICAgIGNvbG9yOiAjODdhZGJkOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Mge1xcblwiICtcblwiICAgIGJvcmRlci1jb2xvcjogI2E1ZGM4NjsgfVxcblwiICtcblwiICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ10ge1xcblwiICtcblwiICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcblwiICtcblwiICAgICAgd2lkdGg6IDMuNzVlbTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogNy41ZW07XFxuXCIgK1xuXCIgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddW2NsYXNzJD0nbGVmdCddIHtcXG5cIiArXG5cIiAgICAgICAgdG9wOiAtLjQzNzVlbTtcXG5cIiArXG5cIiAgICAgICAgbGVmdDogLTIuMDYzNWVtO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAzLjc1ZW0gMy43NWVtO1xcblwiICtcblwiICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDMuNzVlbSAzLjc1ZW07XFxuXCIgK1xuXCIgICAgICAgIGJvcmRlci1yYWRpdXM6IDcuNWVtIDAgMCA3LjVlbTsgfVxcblwiICtcblwiICAgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J3JpZ2h0J10ge1xcblwiICtcblwiICAgICAgICB0b3A6IC0uNjg3NWVtO1xcblwiICtcblwiICAgICAgICBsZWZ0OiAxLjg3NWVtO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDMuNzVlbTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDMuNzVlbTtcXG5cIiArXG5cIiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA3LjVlbSA3LjVlbSAwOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcXG5cIiArXG5cIiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cIiArXG5cIiAgICAgIHRvcDogLS4yNWVtO1xcblwiICtcblwiICAgICAgbGVmdDogLS4yNWVtO1xcblwiICtcblwiICAgICAgd2lkdGg6IDEwMCU7XFxuXCIgK1xuXCIgICAgICBoZWlnaHQ6IDEwMCU7XFxuXCIgK1xuXCIgICAgICBib3JkZXI6IDAuMjVlbSBzb2xpZCByZ2JhKDE2NSwgMjIwLCAxMzQsIDAuMyk7XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXCIgK1xuXCIgICAgICB6LWluZGV4OiAyO1xcblwiICtcblwiICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeCB7XFxuXCIgK1xuXCIgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXCIgK1xuXCIgICAgICB0b3A6IC41ZW07XFxuXCIgK1xuXCIgICAgICBsZWZ0OiAxLjYyNWVtO1xcblwiICtcblwiICAgICAgd2lkdGg6IC40Mzc1ZW07XFxuXCIgK1xuXCIgICAgICBoZWlnaHQ6IDUuNjI1ZW07XFxuXCIgK1xuXCIgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICB6LWluZGV4OiAxOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XFxuXCIgK1xuXCIgICAgICBkaXNwbGF5OiBibG9jaztcXG5cIiArXG5cIiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogLjMxMjVlbTtcXG5cIiArXG5cIiAgICAgIGJvcmRlci1yYWRpdXM6IC4xMjVlbTtcXG5cIiArXG5cIiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNWRjODY7XFxuXCIgK1xuXCIgICAgICB6LWluZGV4OiAyOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddW2NsYXNzJD0ndGlwJ10ge1xcblwiICtcblwiICAgICAgICB0b3A6IDIuODc1ZW07XFxuXCIgK1xuXCIgICAgICAgIGxlZnQ6IC44NzVlbTtcXG5cIiArXG5cIiAgICAgICAgd2lkdGg6IDEuNTYyNWVtO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSdsb25nJ10ge1xcblwiICtcblwiICAgICAgICB0b3A6IDIuMzc1ZW07XFxuXCIgK1xuXCIgICAgICAgIHJpZ2h0OiAuNWVtO1xcblwiICtcblwiICAgICAgICB3aWR0aDogMi45Mzc1ZW07XFxuXCIgK1xuXCIgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIi5zd2FsMi1wcm9ncmVzc3N0ZXBzIHtcXG5cIiArXG5cIiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cIiArXG5cIiAgbWFyZ2luOiAwIDAgMS4yNWVtO1xcblwiICtcblwiICBwYWRkaW5nOiAwO1xcblwiICtcblwiICBmb250LXdlaWdodDogNjAwOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIGxpIHtcXG5cIiArXG5cIiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXCIgK1xuXCIgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZSB7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDJlbTtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IDJlbTtcXG5cIiArXG5cIiAgICBib3JkZXItcmFkaXVzOiAyZW07XFxuXCIgK1xuXCIgICAgYmFja2dyb3VuZDogIzMwODVkNjtcXG5cIiArXG5cIiAgICBjb2xvcjogI2ZmZjtcXG5cIiArXG5cIiAgICBsaW5lLWhlaWdodDogMmVtO1xcblwiICtcblwiICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cIiArXG5cIiAgICB6LWluZGV4OiAyMDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZTpmaXJzdC1jaGlsZCB7XFxuXCIgK1xuXCIgICAgICBtYXJnaW4tbGVmdDogMDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZTpsYXN0LWNoaWxkIHtcXG5cIiArXG5cIiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZS5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXAge1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZDogIzMwODVkNjsgfVxcblwiICtcblwiICAgICAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcCB+IC5zd2FsMi1wcm9ncmVzc2NpcmNsZSB7XFxuXCIgK1xuXCIgICAgICAgIGJhY2tncm91bmQ6ICNhZGQ4ZTY7IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZS5zd2FsMi1hY3RpdmVwcm9ncmVzc3N0ZXAgfiAuc3dhbDItcHJvZ3Jlc3NsaW5lIHtcXG5cIiArXG5cIiAgICAgICAgYmFja2dyb3VuZDogI2FkZDhlNjsgfVxcblwiICtcblwiICAuc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NsaW5lIHtcXG5cIiArXG5cIiAgICB3aWR0aDogMi41ZW07XFxuXCIgK1xuXCIgICAgaGVpZ2h0OiAuNGVtO1xcblwiICtcblwiICAgIG1hcmdpbjogMCAtMXB4O1xcblwiICtcblwiICAgIGJhY2tncm91bmQ6ICMzMDg1ZDY7XFxuXCIgK1xuXCIgICAgei1pbmRleDogMTA7IH1cXG5cIiArXG5cIlxcblwiICtcblwiW2NsYXNzXj0nc3dhbDInXSB7XFxuXCIgK1xuXCIgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cIiArXG5cIlxcblwiICtcblwiLnN3YWwyLXNob3cge1xcblwiICtcblwiICAtd2Via2l0LWFuaW1hdGlvbjogc3dhbDItc2hvdyAwLjNzO1xcblwiICtcblwiICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItc2hvdyAwLjNzOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1zaG93LnN3YWwyLW5vYW5pbWF0aW9uIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcXG5cIiArXG5cIiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItaGlkZSB7XFxuXCIgK1xuXCIgIC13ZWJraXQtYW5pbWF0aW9uOiBzd2FsMi1oaWRlIDAuMTVzIGZvcndhcmRzO1xcblwiICtcblwiICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItaGlkZSAwLjE1cyBmb3J3YXJkczsgfVxcblwiICtcblwiICAuc3dhbDItaGlkZS5zd2FsMi1ub2FuaW1hdGlvbiB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxuXCIgK1xuXCIgICAgICAgICAgICBhbmltYXRpb246IG5vbmU7IH1cXG5cIiArXG5cIlxcblwiICtcblwiW2Rpcj0ncnRsJ10gLnN3YWwyLWNsb3NlIHtcXG5cIiArXG5cIiAgcmlnaHQ6IGF1dG87XFxuXCIgK1xuXCIgIGxlZnQ6IDA7IH1cXG5cIiArXG5cIlxcblwiICtcblwiLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwIHtcXG5cIiArXG5cIiAgLXdlYmtpdC1hbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAwLjc1cztcXG5cIiArXG5cIiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAwLjc1czsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcXG5cIiArXG5cIiAgLXdlYmtpdC1hbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgMC43NXM7XFxuXCIgK1xuXCIgICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIDAuNzVzOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIi5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0IHtcXG5cIiArXG5cIiAgLXdlYmtpdC1hbmltYXRpb246IHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbjtcXG5cIiArXG5cIiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbjsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIHtcXG5cIiArXG5cIiAgLXdlYmtpdC1hbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAwLjVzO1xcblwiICtcblwiICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIDAuNXM7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuc3dhbDIteC1tYXJrIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgMC41cztcXG5cIiArXG5cIiAgICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgMC41czsgfVxcblwiICtcblwiXFxuXCIgK1xuXCJALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmcge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cIik7Il19
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9mYXN0cHJpb3JpdHlxdWV1ZS9GYXN0UHJpb3JpdHlRdWV1ZS5qcyIsIm5vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7Ozs7QUFFQTtBQUNBLElBQU0sVUFBVSxRQUFRLG1CQUFSLENBQWhCOztBQUVBO0FBQ0EsSUFBTSxZQUFZLEVBQWxCOztBQUVBO0FBQ0EsVUFBVSxTQUFWLEdBQXNCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNFLE1BQUksaUJBRE47QUFFRSxTQUFPLENBQ0w7QUFDRSxVQUFNLFNBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLDBCQUhaO0FBSUUsaUJBQWE7QUFKZixHQURLLEVBT0w7QUFDRSxVQUFNLGlCQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSxpQkFIWjtBQUlFLGlCQUNFO0FBTEosR0FQSyxFQWNMO0FBQ0UsVUFBTSxrQkFEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUsa0JBSFo7QUFJRSxpQkFDRTtBQUxKLEdBZEssRUFxQkw7QUFDRSxVQUFNLHFCQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSxxQkFIWjtBQUlFLGlCQUFhO0FBSmYsR0FyQkssRUEyQkw7QUFDRSxVQUFNLGtCQURSO0FBRUUs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MEJFLEtBMUJGO0FBNEJELEdBbENEO0FBbUNELENBcENEOztBQXNDQTtBQUNBLFVBQVUsZ0JBQVYsR0FBNkIsZ0JBQVE7QUFDbkMsU0FBTyxLQUFLLFFBQUwsR0FBZ0IsT0FBaEIsQ0FBd0IsdUJBQXhCLEVBQWlELEdBQWpELENBQVA7QUFDRCxDQUZEOzs7QUN0OUJBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9TQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIElNUE9SVCBIRUFQIE1PRFVMRSBGUk9NIE5QTVxuY29uc3QgTWluSGVhcCA9IHJlcXVpcmUoXCJmYXN0cHJpb3JpdHlxdWV1ZVwiKTtcblxuLy8gQ3JlYXRlIGFuIG9iamVjdCByZXByZXNlbnRpbmcgb3VyIHRyYXZlbCBhcHAgKE5BTUVTUEFDRSlcbmNvbnN0IHRyYXZlbEFwcCA9IHt9O1xuXG4vLyBBUlJBWSBXSVRIIEFMTCBSRUxFVkFOVCBTVEFUUyBGT1IgRUFDSCBQVVJQT1NFXG50cmF2ZWxBcHAuc3RhdEFycmF5ID0gW1xuICAvLyBWQUNBVElPTiBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tdmFjYXRpb25cIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlbnNpdHlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJQb3B1bGF0aW9uIERlbnNpdHkgKGxvdylcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBvcHVsYXRpb24gZGVuc2l0eSBpcyBtZWFzdXJlZCBpbiBwZXIga23Csi5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ0b3VyaXN0X2Fycml2YWxzXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVG91cmlzdCBBcnJpdmFsc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlJlcHJlc2VudHMgZm9yZWlnbiBjaXRpemVucyB0aGF0IHN0YXllZCBhdCBsZWFzdCBvbmUgbmlnaHQuIEluY2x1ZGVzIGhvdGVsIHN0YXlzLCB0cmFuc2ZlcnMsIGNvbmZlcmVuY2UgdmlzaXRzLCBldGMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidG91cmlzbV9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlRvdXJpc3QgRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGFtb3VudCBvZiBnb3Zlcm5tZW50IHNwZW5kaW5nIGRlZGljYXRlZCBmb3IgdG91cmlzbSAoaW4gJSBvZiB0aGUgR0RQIGZvciBhIGNvdW50cnkpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInVyYmFuX3BvcHVsYXRpb25cIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJVcmJhbiBQb3B1bGF0aW9uIChoaWdoKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcGVyY2VudGFnZSBvZiBwZW9wbGUgd2hvIGxpdmUgaW4gYSBjaXR5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImZvcmVzdF9hcmVhX3BlcmNlbnRcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJGb3Jlc3QgQXJlYVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdG90YWwgYW1vdW50IG9mIGZvcmVzdCBhcmVhIGluIGEgY291bnRyeSAoaW4ga23CsilcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gRURVQ0FUSU9OIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tZWR1Y2F0aW9uXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJlZHVjYXRpb25fZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJFZHVjYXRpb24gRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRWR1Y2F0aW9uIGV4cGVuZGl0dXJlIHJlcHJlc2VudHMgZ292ZXJubWVudCBzcGVuZGluZyBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJjbzJfZW1pc3Npb25zXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiQ08yIEVtaXNzaW9uc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDTzIgZW1pc3Npb25zIGluIG1ldHJpYyB0b25zIHBlciBwZXJzb24gcGVyIHllYXIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiY29ycnVwdGlvbl9pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkNvcnJ1cHRpb24gSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ29ycnVwdGlvbiBQZXJjZXB0aW9ucyBJbmRleCAoQ1BJKS4gKFNjYWxlOiAwLTEwMDsgMCA9IGhpZ2ggY29ycnVwdGlvbi4gMTAwID0gbG93IGNvcnJ1cHRpb24pLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhkaVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkh1bWFuIERldmVsb3BtZW50IEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiSW5kaWNhdG9yIG9mIGxpZmUgZXhwZWN0YW5jeSwgZWR1Y2F0aW9uLCBhbmQgcGVyIGNhcGl0YSBpbmNvbWUuIChTY2FsZTogMC0xOyAwID0gbG93IHNjb3JlLiAxID0gaGlnaCBzY29yZSkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGVhbHRoX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGVhbHRoIEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlB1YmxpYyBzcGVuZGluZyBvbiBoZWFsdGgsIG1lYXN1cmVkIGluICUgb2YgR0RQLlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBWSVNJVE9SIFZJU0EgQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi12aXNpdC12aXNhXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZWFsdGhfZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIZWFsdGggRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUHVibGljIHNwZW5kaW5nIG9uIGhlYWx0aCwgbWVhc3VyZWQgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidG91cmlzdF9hcnJpdmFsc1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlRvdXJpc3QgQXJyaXZhbHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJSZXByZXNlbnRzIGZvcmVpZ24gY2l0aXplbnMgdGhhdCBzdGF5ZWQgYXQgbGVhc3Qgb25lIG5pZ2h0LiBJbmNsdWRlcyBob3RlbCBzdGF5cywgdHJhbnNmZXJzLCBjb25mZXJlbmNlIHZpc2l0cywgZXRjLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlbnNpdHlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJQb3B1bGF0aW9uIERlbnNpdHkgKGxvdylcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBvcHVsYXRpb24gZGVuc2l0eSBpcyBtZWFzdXJlZCBpbiBwZXIga23Csi5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJjbzJfZW1pc3Npb25zXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiQ08yIEVtaXNzaW9uc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDTzIgZW1pc3Npb25zIGluIG1ldHJpYyB0b25zIHBlciBwZXJzb24gcGVyIHllYXIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaW5mbGF0aW9uXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSW5mbGF0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhbm51YWwgY2hhbmdlIG9mIGNvbnN1bWVyIHByaWNlcyAodW5pdDogJSkuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFdPUktJTkcgSE9MSURBWSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXdvcmstaG9saWRheVwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVuc2l0eVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlBvcHVsYXRpb24gRGVuc2l0eSAobG93KVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcG9wdWxhdGlvbiBkZW5zaXR5IGlzIG1lYXN1cmVkIGluIHBlciBrbcKyLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInRvdXJpc3RfYXJyaXZhbHNcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJUb3VyaXN0IEFycml2YWxzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUmVwcmVzZW50cyBmb3JlaWduIGNpdGl6ZW5zIHRoYXQgc3RheWVkIGF0IGxlYXN0IG9uZSBuaWdodC4gSW5jbHVkZXMgaG90ZWwgc3RheXMsIHRyYW5zZmVycywgY29uZmVyZW5jZSB2aXNpdHMsIGV0Yy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiYnV0dG9uLXBlcm0tc29sb1wiLFxuICAgICAgICBzdGF0OiBcImdpbmlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJHaW5pIENvZWZmaWNpZW50XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiU3RhdGVzIGhvdyB1bmlmb3JtbHkgYXNzZXRzIGFyZSBkaXN0cmlidXRlZC4gKHNjYWxlOiAwLTEwMDsgMCA9IGVxdWFsIGRpc3RyaWJ1dGlvbi4gMTAwID0gdW5lcXVhbCBkaXN0cmlidXRpb24pLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImpvYmxlc3NfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkpvYmxlc3MgUmF0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbnVtYmVyIG9mIHVuZW1wbG95ZWQgcGVvcGxlIGluIHJlbGF0aW9uIHRvIHRoZSBsYWJvciBmb3JjZSBmb3IgYSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcIm1lZGlhbndhZ2VcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJNZWRpYW4gV2FnZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkEgbWVhc3VyZSBvZiB0aGUgbW9udGhseSBtZWRpYW4gd2FnZSBiZWZvcmUgdGF4ZXMsIGluY2x1ZGluZyBwdWJsaWMgYmVuZWZpdHMgKGUuZyBjaGlsZCBhbGxvd2FuY2UpOyB1bml0OiBVU0QuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFBFUk1BTkVOVC1TT0xPIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tcGVybS1zb2xvXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZGlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIdW1hbiBEZXZlbG9wbWVudCBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkluZGljYXRvciBvZiBsaWZlIGV4cGVjdGFuY3ksIGVkdWNhdGlvbiwgYW5kIHBlciBjYXBpdGEgaW5jb21lLiAoU2NhbGU6IDAtMTsgMCA9IGxvdyBzY29yZS4gMSA9IGhpZ2ggc2NvcmUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImNvcnJ1cHRpb25faW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJDb3JydXB0aW9uIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvcnJ1cHRpb24gUGVyY2VwdGlvbnMgSW5kZXggKENQSSkuIChTY2FsZTogMC0xMDA7IDAgPSBoaWdoIGNvcnJ1cHRpb24uIDEwMCA9IGxvdyBjb3JydXB0aW9uKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJtZWRpYW53YWdlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTWVkaWFuIFdhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJBIG1lYXN1cmUgb2YgdGhlIG1vbnRobHkgbWVkaWFuIHdhZ2UgYmVmb3JlIHRheGVzLCBpbmNsdWRpbmcgcHVibGljIGJlbmVmaXRzIChlLmcgY2hpbGQgYWxsb3dhbmNlKTsgdW5pdDogVVNELlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImluZmxhdGlvblwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkluZmxhdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYW5udWFsIGNoYW5nZSBvZiBjb25zdW1lciBwcmljZXMgKHVuaXQ6ICUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ1cmJhbl9wb3B1bGF0aW9uXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVXJiYW4gUG9wdWxhdGlvbiAoaGlnaClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBlcmNlbnRhZ2Ugb2YgcGVvcGxlIHdobyBsaXZlIGluIGEgY2l0eS5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gUEVSTUFORU5ULUNPVVBMRSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXBlcm0tY291cGxlXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZGlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIdW1hbiBEZXZlbG9wbWVudCBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkluZGljYXRvciBvZiBsaWZlIGV4cGVjdGFuY3ksIGVkdWNhdGlvbiwgYW5kIHBlciBjYXBpdGEgaW5jb21lLiAoU2NhbGU6IDAtMTsgMCA9IGxvdyBzY29yZS4gMSA9IGhpZ2ggc2NvcmUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImpvYmxlc3NfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkpvYmxlc3MgUmF0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbnVtYmVyIG9mIHVuZW1wbG95ZWQgcGVvcGxlIGluIHJlbGF0aW9uIHRvIHRoZSBsYWJvciBmb3JjZSBmb3IgYSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJidXR0b24tcGVybS1zb2xvXCIsXG4gICAgICAgIHN0YXQ6IFwiZ2luaVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkdpbmkgQ29lZmZpY2llbnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJTdGF0ZXMgaG93IHVuaWZvcm1seSBhc3NldHMgYXJlIGRpc3RyaWJ1dGVkLiAoc2NhbGU6IDAtMTAwOyAwID0gZXF1YWwgZGlzdHJpYnV0aW9uLiAxMDAgPSB1bmVxdWFsIGRpc3RyaWJ1dGlvbikuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGFwcGluZXNzX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGFwcGluZXNzIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFzZWQgb24gZmFjdG9ycyBzdWNoIGFzIEdEUCBwZXIgY2FwaXRhLCBzb2NpYWwgc3VwcG9ydCwgbGlmZSBleHBlY3RhbmN5LiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhhcHBpZXIgdGhlIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVhdGhfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlJhdGUgb2YgRGVhdGhzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhdmVyYWdlIG51bWJlciBvZiBkZWF0aHMgcGVyIHllYXIgcGVyIDEsMDAwIHBlb3BsZS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZWJ0c19wZXJjZW50XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiR292ZXJubWVudCBEZWJ0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwZXJjZW50YWdlIG9mIGdvdmVybm1lbnQgYm9ycm93aW5ncyBpbiByZWxhdGlvbiB0byB0aGUgR0RQLlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBQRVJNQU5FTlQtRkFNSUxZIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tcGVybS1mYW1pbHlcIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImVkdWNhdGlvbl9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkVkdWNhdGlvbiBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFZHVjYXRpb24gZXhwZW5kaXR1cmUgcmVwcmVzZW50cyBnb3Zlcm5tZW50IHNwZW5kaW5nIGluICUgb2YgR0RQLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJsaXRlcmFjeV9yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTGl0ZXJhY3kgUmF0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcGVyY2VudGFnZSBvZiBwZW9wbGUgdGhhdCBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlYWQgYW5kIHdyaXRlIGJ5IGFnZSAxNS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJsaWZlX2V4cGVjdGFuY3lcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJMaWZlIEV4cGVjdGFuY3lcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGF2ZXJhZ2UgbnVtYmVyIG9mIHllYXJzIGEgcGVyc29uIHdpbGwgbGl2ZSAoYXQgYmlydGgpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlYXRoX3JhdGVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJSYXRlIG9mIERlYXRoc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYXZlcmFnZSBudW1iZXIgb2YgZGVhdGhzIHBlciB5ZWFyIHBlciAxLDAwMCBwZW9wbGUuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwibWVkaWFud2FnZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIk1lZGlhbiBXYWdlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQSBtZWFzdXJlIG9mIHRoZSBtb250aGx5IG1lZGlhbiB3YWdlIGJlZm9yZSB0YXhlcywgaW5jbHVkaW5nIHB1YmxpYyBiZW5lZml0cyAoZS5nIGNoaWxkIGFsbG93YW5jZSk7IHVuaXQ6IFVTRC5cIlxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuLyogMC4gR0VUIFNUQVJURUQgKi9cbnRyYXZlbEFwcC5nZXRTdGFydGVkID0gKCkgPT4ge1xuICAvLyBMaXN0ZW5zIGZvciBjbGljayBvbiBHRVQgU1RBUlRFRCBCVVRUT05cbiAgJChcIi53ZWxjb21lX19idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBTbW9vdGggc2Nyb2xsIHRvIG5leHQgc2VjdGlvblxuICAgICQoXCJodG1sLCBib2R5XCIpXG4gICAgICAuc3RvcCgpXG4gICAgICAuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChcIi5wdXJwb3NlLXNlY3Rpb25cIikub2Zmc2V0KCkudG9wIH0sIDkwMCwgXCJzd2luZ1wiKTtcbiAgfSk7XG59O1xuXG4vKiAxLiBHRVQgVVNFUiBJTlBVVCAqL1xudHJhdmVsQXBwLmdldFVzZXJQdXJwb3NlID0gKCkgPT4ge1xuICAkKFwiLnRyYXZlbC1mb3JtX19idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBTdG9yZSB1c2VyIGlucHV0IGluIHZhcmlhYmxlXG4gICAgY29uc3QgaW5wdXRJRCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xuICAgIHRyYXZlbEFwcC51c2VyUHVycG9zZSA9IGlucHV0SUQ7XG5cbiAgICAvLyBDYWxsIHRoZSBkaXNwbGF5IHN0YXRzIGZ1bmN0aW9uXG4gICAgdHJhdmVsQXBwLmRpc3BsYXlTdGF0cyh0cmF2ZWxBcHAudXNlclB1cnBvc2UpO1xuXG4gICAgLy8gRGlzcGxheSB0aGUgY3JpdGVyaWFzIHRvIGJlIGNob3NlblxuICAgICQoXCIuY3JpdGVyaWFzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xuXG4gICAgLy8gU21vb3RoIFNjcm9sbCB0byBjcml0ZXJpYSdzIHNlY3Rpb25cbiAgICAkKFwiaHRtbCwgYm9keVwiKVxuICAgICAgLnN0b3AoKVxuICAgICAgLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIuY3JpdGVyaWFzXCIpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LFxuICAgICAgICA5MDAsXG4gICAgICAgIFwic3dpbmdcIlxuICAgICAgKTtcbiAgfSk7XG59O1xuXG4vKiAyLiBESVNQTEFZIEFMTCBTVEFUUyBGT1IgVEhFIFNFTEVDVEVEIFBVUlBPU0UgT04gU0NSRUVOICovXG50cmF2ZWxBcHAuZGlzcGxheVN0YXRzID0gcHVycG9zZUlEID0+IHtcbiAgJChcIi5jaG9pY2VzXCIpLmVtcHR5KCk7XG4gIC8vIEhlYWRlciBmb3IgdGhlIGNob29zZSBDcml0ZXJpYSBzZWN0aW9uXG4gICQoXCIuY3JpdGVyaWEtaGVhZGVyXCIpLnRleHQoXG4gICAgXCJQbGVhc2UgcmFuayB0aGUgZm9sbG93aW5nIGNyaXRlcmlhIGluIG9yZGVyIG9mIGltcG9ydGFuY2UgZnJvbSB0b3AgdG8gYm90dG9tLiBVc2UgeW91ciBjdXJzb3IgdG8gZHJhZyBhbmQgZHJvcCB0aGUgaXRlbXMuXCJcbiAgKTtcbiAgLy8gQWRkIGNzcyBwb3NpdGlvbiB0byBjcml0ZXJpYSBjb250YWluZXJcbiAgJChcIi5jaG9pY2VzLWxpc3QtY29udGFpbmVyXCIpLmNzcyhcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XG5cbiAgLy8gR28gdGhyb3VnaCBlYWNoIHB1cnBvc2Ugb2JqZWN0IGluIHRoZSBTdGF0IEFycmF5XG4gIHRyYXZlbEFwcC5zdGF0QXJyYXkuZm9yRWFjaChwdXJwb3NlT2JqID0+IHtcbiAgICAvLyBJZiB0aGUgcHVycG9zZSBJRCBtYXRjaGVzIHRoZSBwdXJwb3NlIE9iamVjdCBpZFxuICAgIGlmIChwdXJwb3NlSUQgPT09IHB1cnBvc2VPYmouaWQpIHtcbiAgICAgIC8vIEdvIHRocm91Z2ggZXZlcnkgc3RhdCBmb3IgdGhpcyBwdXJwb3NlXG4gICAgICBwdXJwb3NlT2JqLnN0YXRzLmZvckVhY2goc3RhdCA9PiB7XG4gICAgICAgIC8vIEFwcGVuZCBlYWNoIG9mIHRoZSBzdGF0IG5hbWUgb24gc2NyZWVuIGZvciB0aGUgdXNlciB0byByYW5rXG4gICAgICAgIGxldCBtYXJrVXBJdGVtID0gJChcIjxsaT5cIilcbiAgICAgICAgICAuYXR0cihcImlkXCIsIHN0YXQuc3RhdClcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJjcml0ZXJpYVwiKVxuICAgICAgICAgIC50ZXh0KHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAkKFwiLmNob2ljZXNcIikuYXBwZW5kKG1hcmtVcEl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBhcHBlbmQgc3VibWl0IGJ1dHRvblxuICBsZXQgbWFya1VwQnV0dG9uID0gYDxsaT48YnV0dG9uIGNsYXNzPVwidXNlci1zdWJtaXQgYnRuXCI+U3VibWl0IFJhbmtpbmc8L2J1dHRvbj48L2xpPmA7XG4gICQoXCIuY2hvaWNlc1wiKS5hcHBlbmQobWFya1VwQnV0dG9uKTtcblxuICB0cmF2ZWxBcHAuZ2V0VXNlclJhbmtpbmdzKCk7XG59O1xuXG4vKiAzLiBPQlRBSU4gVEhFIFJBTktJTkcgT0YgVEhFIFNUQVRTIEZST00gVVNFUiAqL1xudHJhdmVsQXBwLmdldFVzZXJSYW5raW5ncyA9ICgpID0+IHtcbiAgJChcIi5jaG9pY2VzXCIpLm9uKFwiY2xpY2tcIiwgXCIudXNlci1zdWJtaXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gcmVtb3ZlIHN1Ym1pdCBidXR0b24gYW5kIHB1dCBhIGxvYWRlciB1bnRpbCB0aGUgcmVzdWx0cyBjb21lIGJhY2tcbiAgICAvLyAuaHRtbChgPGltZyBjbGFzcz1cImxvYWRlclwiIHNyYz1cIi4uLy4uL2Fzc2V0cy9zcGlubmVyLTFzLTEwMHB4LnN2Z1wiPmApO1xuICAgICQoXCIuY2hvaWNlc1wiKS5maW5kKFxuICAgICAgXCJsaTpsYXN0LWNoaWxkXCJcbiAgICApLmh0bWwoYDxzdmcgY2xhc3M9XCJsZHMtc3Bpbm5lciBsb2FkZXJcIiB3aWR0aD1cIjEwMHB4XCIgIGhlaWdodD1cIjEwMHB4XCIgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIiBzdHlsZT1cImJhY2tncm91bmQ6IG5vbmU7XCI+PGcgdHJhbnNmb3JtPVwicm90YXRlKDAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC45MTY2NjY2NjY2NjY2NjY2c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgzMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjgzMzMzMzMzMzMzMzMzMzRzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDYwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNzVzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDkwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNjY2NjY2NjY2NjY2NjY2NnNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMTIwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNTgzMzMzMzMzMzMzMzMzNHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMTUwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMTgwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNDE2NjY2NjY2NjY2NjY2N3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMjEwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuMzMzMzMzMzMzMzMzMzMzM3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMjQwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuMjVzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDI3MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjE2NjY2NjY2NjY2NjY2NjY2c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgzMDAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC4wODMzMzMzMzMzMzMzMzMzM3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzMwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48L3N2Zz5gKTtcblxuICAgIC8vIGdldCB0aGUgdXNlciByYW5raW5ncyBmcm9tIGhpcyBvcmRlcmluZyBvZiBzdGF0cyBhbmQgc3RvcmUgaW4gYSB2YXJpYWJsZVxuICAgIGxldCB1c2VyUmFua2luZ3MgPSAkKFwiLmNob2ljZXNcIilbMF0uY2hpbGRyZW47XG5cbiAgICAvLyBpbml0aWFsaXplIGFuIGVtcHR5IGFycmF5IHRvIHN0b3JlIHRoZSB0b3AgMyByYW5raW5nc1xuICAgIGxldCBzdGF0c0ZvckFQSUNhbGwgPSBbXTtcblxuICAgIC8vIGdldCBmaXJzdCB0b3AgMyByYW5raW5ncyAoc3RhdHMgaW4gMXN0LCAybmQgYW5kIDNyZCBwb3NpdGlvbnMpXG4gICAgLy8gYW5kIHN0b3JlIHRoZW0gaW5zaWRlIGFuIGFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIHN0YXRzRm9yQVBJQ2FsbC5wdXNoKHVzZXJSYW5raW5nc1tpXS5pZCk7XG4gICAgfVxuXG4gICAgLy8gSU5JVElBTElaRSBBTEwgR0xPQkFMIFZBUklBQkxFUyBGT1IgRElTUExBWSBBVCBUSEUgRU5EXG4gICAgdHJhdmVsQXBwLndpa2lFeHRyYWN0ID0gW107XG4gICAgdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLnN0YXRDb2RlQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAud2lraVByb21pc2VBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5waXhhUHJvbWlzZUFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLmltYWdlQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAuaW1hZ2VUZXh0QXJyYXkgPSBbXTtcblxuICAgIC8vIElmIGZsaWNraXR5IGlzIG5vdCBlbmFibGVkIHlldCwgaW5pdGlhbGl6ZSBhIHZhcmlhYmxlIHRvIGtlZXAgdHJhY2sgb2Ygd2hldGhlciBpdCBpcyBlbmFibGVkIG9yIG5vdFxuICAgIGlmICghdHJhdmVsQXBwLmZsaWNraXR5T24pIHtcbiAgICAgIHRyYXZlbEFwcC5mbGlja2l0eU9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgZmxpY2tpdHkgaXMgZW5hYmxlZCwgXCJkZXN0cm95XCIgaXQgc28gdGhlIHJlc3VsdHMgY2FuIGJlIHJlLXJlbmRlcmVkIHdpdGhvdXQgZmxpY2tpdHkgY29uZmxpY3RzXG4gICAgaWYgKHRyYXZlbEFwcC5mbGlja2l0eU9uID09PSB0cnVlKSB7XG4gICAgICAkKFwiLnJlc3VsdHNcIikuZmxpY2tpdHkoXCJkZXN0cm95XCIpO1xuICAgIH1cblxuICAgICQoXCIucmVzdWx0c1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblxuICAgIHRyYXZlbEFwcC5nZXRTdGF0KC4uLnN0YXRzRm9yQVBJQ2FsbCk7XG4gIH0pO1xufTtcblxuLyogNC4gU0VORCBBSkFYIFJFUVVFU1QgVE8gSU5RU1RBVFMgQVBJICovXG5cbi8vIFN0b3JlIGltcG9ydGFudCBpbmZvIGZvciBjYWxscyB0byB0aGUgSU5RU3RhdHMgQVBJLlxudHJhdmVsQXBwLnN0YXRLZXkgPSBcIjVkMzY4N2M3YzE3ODhkNWZcIjtcbnRyYXZlbEFwcC5zdGF0VVJMID0gXCJodHRwOi8vaW5xc3RhdHNhcGkuaW5xdWJ1LmNvbVwiO1xudHJhdmVsQXBwLmdldFN0YXQgPSAoc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlMykgPT4ge1xuICBheGlvcyh7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIHVybDogdHJhdmVsQXBwLnN0YXRVUkwsXG4gICAgZGF0YVJlc3BvbnNlOiBcImpzb25wXCIsXG4gICAgcGFyYW1zOiB7XG4gICAgICBhcGlfa2V5OiB0cmF2ZWxBcHAuc3RhdEtleSxcbiAgICAgIGRhdGE6IGBoZGksJHtzdGF0VHlwZTF9LCR7c3RhdFR5cGUyfSwke3N0YXRUeXBlM31gLFxuICAgICAgY21kOiBcImdldFdvcmxkRGF0YVwiXG4gICAgfVxuICB9KS50aGVuKHJlcyA9PiB7XG4gICAgLy8gY2FsbGluZyB0aGUgY2FsY3VsYXRpb24gZnVuY3Rpb24gdG8gZ2V0IHRoZSB0b3AgbiAvIGJvdHRvbSBuIGNvdW50cmllc1xuICAgIC8vIGZpbmFsUmVzdWx0cyBob2xkcyB0aGUgZmluYWwgMyBjb3V0cmllcyBhbmQgYWxsIG9mIHRoZWlyIHN0YXRzXG4gICAgbGV0IGZpbmFsUmVzdWx0cyA9IHRyYXZlbEFwcC5nZXRSZWNvbW1lbmRhdGlvbnMocmVzLmRhdGEsIHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpO1xuXG4gICAgLy8gR2V0IHdpa2kgYW5kIHBpeGEgZXh0cmFjdHMgZm9yIGVhY2ggY291bnRyeVxuICAgIGZpbmFsUmVzdWx0cy5mb3JFYWNoKGNvdW50cnlPYmogPT4ge1xuICAgICAgLy8gZ2V0IHdpa2kgZXh0cmFjdHMgYW5kIHB1dCBwcm9taXNlcyBpbnRvIGFycmF5XG4gICAgICB0cmF2ZWxBcHAud2lraVByb21pc2VBcnJheS5wdXNoKHRyYXZlbEFwcC5nZXRXaWtpKGNvdW50cnlPYmouY291bnRyeU5hbWUpKTtcblxuICAgICAgLy8gZ2V0IHBpeGEgZXh0cmFjdHMgYW5kIHB1dCBwcm9taXNlcyBpbnRvIGFycmF5XG4gICAgICB0cmF2ZWxBcHAucGl4YVByb21pc2VBcnJheS5wdXNoKHRyYXZlbEFwcC5nZXRQaXhhKGNvdW50cnlPYmouY291bnRyeU5hbWUpKTtcbiAgICB9KTtcblxuICAgIC8vIHdoZW4gYWxsIHdpa2kgYW5kIHBpeGEgcHJvbWlzZXMgYXJlIGZ1bGZpbGxlZCwgc3RvcmUgdGhlIHJlc3VsdHNcbiAgICAvLyB0byBwcmVwYXJlIHRoZW0gZm9yIGRpc3BsYXlcbiAgICAkLndoZW4oLi4udHJhdmVsQXBwLndpa2lQcm9taXNlQXJyYXksIC4uLnRyYXZlbEFwcC5waXhhUHJvbWlzZUFycmF5KS50aGVuKCguLi53aWtpUGl4YVJlc3VsdHMpID0+IHtcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIHdpa2lQaXhhIHJlc3VsdHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lraVBpeGFSZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGZpcnN0IHRocmVlIGFyZSB3aWtpLCBwdXNoIChzdG9yZSkgaW50byBhcnJheVxuICAgICAgICBpZiAoaSA8IDMpIHtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RvcmVXaWtpKHdpa2lQaXhhUmVzdWx0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGFzdCB0aHJlZSBhcmUgcGl4YSwgcHVzaCAoc3RvcmUpIGludG8gYXJyYXlcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0b3JlUGl4YSh3aWtpUGl4YVJlc3VsdHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9uY2UgcmVzdWx0cyBhbGwgc3RvcmVkLCBkaXNwbGF5IGFsbCBpbmZvIG9uIHNjcmVlbiAoMyBjb3VudHJpZXMsIHdpa2kgYW5kIHBpeGEpXG4gICAgICB0cmF2ZWxBcHAuZGlzcGxheURlc3RpbmF0aW9ucyhmaW5hbFJlc3VsdHMsIFtzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzXSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyogNS4gU1RBUlQgQ0FMQ1VMQVRJT04gRk9SIDMgUkVDT01NRU5ERUQgQ09VTlRSSUVTICovXG50cmF2ZWxBcHAuZ2V0UmVjb21tZW5kYXRpb25zID0gKHJlcywgc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlMykgPT4ge1xuICAvLyBGaW5kIGRpcmVjdGlvbiBvZiBlYWNoIHN0YXQgdHlwZSBhbmQgcmV0dXJuIGl0IGluIGFuIGFycmF5XG4gIGxldCBhcnJEaXJlY3Rpb25zID0gdHJhdmVsQXBwLmZpbmREaXJlY3Rpb25zKHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpO1xuXG4gIC8vIEluaXRpYWxpemUgYXJyYXlzIGFuZCBudW1iZXJzIGZvciBlYWNoIHJvdW5kIG9mIGl0ZXJhdGlvbi9maWx0ZXJpbmdcbiAgbGV0IGluaXRpYWxBcnIgPSBbXTtcbiAgbGV0IGFycjEgPSBbXTtcbiAgbGV0IGFycjIgPSBbXTtcbiAgbGV0IGFycjMgPSBbXTtcbiAgbGV0IGluaXRpYWxJdGVyID0gNjA7XG4gIGxldCBpdGVyYXRpb24xID0gMTA7XG4gIGxldCBpdGVyYXRpb24yID0gNTtcbiAgbGV0IGl0ZXJhdGlvbjMgPSAzO1xuXG4gIC8vSW5pdGlhbCBmaWx0ZXIgdG8gYWNjb3VudCBmb3IgcmVhbGlzdGljIHJlc3VsdHMgKGJhc2VkIG9uIEhESSlcbiAgaW5pdGlhbEFyciA9IHRyYXZlbEFwcC5kZXRlcm1pbmVSZXN1bHRzKHJlcywgXCJoZGlcIiwgXCJtYXhcIiwgaW5pdGlhbEl0ZXIpO1xuXG4gIC8vIElURVJBVElPTiAxXG4gIGFycjEgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyhpbml0aWFsQXJyLCBzdGF0VHlwZTEsIGFyckRpcmVjdGlvbnNbMF0sIGl0ZXJhdGlvbjEpO1xuXG4gIC8vIElURVJBVElPTiAyXG4gIGFycjIgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyhhcnIxLCBzdGF0VHlwZTIsIGFyckRpcmVjdGlvbnNbMV0sIGl0ZXJhdGlvbjIpO1xuXG4gIC8vIElURVJBVElPTiAzXG4gIGFycjMgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyhhcnIyLCBzdGF0VHlwZTMsIGFyckRpcmVjdGlvbnNbMl0sIGl0ZXJhdGlvbjMpO1xuXG4gIC8vIHJldHVybiB0aGUgYXJyYXkgd2l0aCB0aGUgZmluYWwgcmVzdWx0c1xuICByZXR1cm4gYXJyMztcbn07XG5cbi8qIDUuMSBGSU5EIE1JTi9NQVggRk9SIEVBQ0ggU1RBVCBUWVBFICovXG50cmF2ZWxBcHAuZmluZERpcmVjdGlvbnMgPSAoc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlMykgPT4ge1xuICAvLyBGaW5kIHdoZXRoZXIgZWFjaCBzdGF0dHlwZSBpcyBtYXggb3IgbWluXG4gIGxldCBzdGF0MURpcmVjdGlvbiA9IFwiXCI7XG4gIGxldCBzdGF0MkRpcmVjdGlvbiA9IFwiXCI7XG4gIGxldCBzdGF0M0RpcmVjdGlvbiA9IFwiXCI7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBTdGF0IEFycmF5IHRvIGZpbmQgZGlyZWN0aW9uIG9mIHN0YXR0eXBlc1xuICB0cmF2ZWxBcHAuc3RhdEFycmF5LmZvckVhY2gocHVycG9zZSA9PiB7XG4gICAgLy8gaWYgdGhlIGN1cnJlbnQgcHVycG9zZSBtYXRjaGVzIHRoZSB1c2VyIHB1cnBvc2UsXG4gICAgaWYgKHB1cnBvc2UuaWQgPT09IHRyYXZlbEFwcC51c2VyUHVycG9zZSkge1xuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgc3RhdHMgYXJyYXkgb2YgdGhhdCBwdXJwb3NlIG9iamVjdFxuICAgICAgcHVycG9zZS5zdGF0cy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGF0IGluIHRoZSBzdGF0cyBhcnJheSBpcyBzdGF0dHlwZTEsIGdldCB0aGlzIGRpcmVjdGlvblxuICAgICAgICBpZiAoc3RhdC5zdGF0ID09PSBzdGF0VHlwZTEpIHtcbiAgICAgICAgICBzdGF0MURpcmVjdGlvbiA9IHN0YXQuZGlyZWN0aW9uO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0Q29kZUFycmF5LnB1c2goc3RhdC5zdGF0KTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXkucHVzaChzdGF0LnN0YXROYW1lKTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXkucHVzaChzdGF0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGF0IGluIHRoZSBzdGF0cyBhcnJheSBpcyBzdGF0dHlwZTIsIGdldCB0aGlzIGRpcmVjdGlvblxuICAgICAgICBlbHNlIGlmIChzdGF0LnN0YXQgPT09IHN0YXRUeXBlMikge1xuICAgICAgICAgIHN0YXQyRGlyZWN0aW9uID0gc3RhdC5kaXJlY3Rpb247XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXRDb2RlQXJyYXkucHVzaChzdGF0LnN0YXQpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheS5wdXNoKHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheS5wdXNoKHN0YXQuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0YXQgaW4gdGhlIHN0YXRzIGFycmF5IGlzIHN0YXR0eXBlMywgZ2V0IHRoaXMgZGlyZWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHN0YXQuc3RhdCA9PT0gc3RhdFR5cGUzKSB7XG4gICAgICAgICAgc3RhdDNEaXJlY3Rpb24gPSBzdGF0LmRpcmVjdGlvbjtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdENvZGVBcnJheS5wdXNoKHN0YXQuc3RhdCk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5LnB1c2goc3RhdC5zdGF0TmFtZSk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5LnB1c2goc3RhdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtzdGF0MURpcmVjdGlvbiwgc3RhdDJEaXJlY3Rpb24sIHN0YXQzRGlyZWN0aW9uXTtcbn07XG5cbi8qIDUuMiBGVU5DVElPTiBUTyBERVRFUk1JTkUgV0hFVEhFUiBUSEUgVE9QIE9SIEJPVFRPTSBTQ09SRVMgU0hPVUxEIEJFIEZPVU5EICovXG50cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyA9IChhcnJheSwgc3RhdFR5cGUsIGRpcmVjdGlvbiwgaXRlcmF0aW9uTnVtYmVyKSA9PiB7XG4gIGxldCByZXN1bHRBcnJheSA9IFtdO1xuICAvLyBpZiB3ZSB3YW50IFRPUCBudW1iZXJzXG4gIGlmIChkaXJlY3Rpb24gPT09IFwibWF4XCIpIHtcbiAgICByZXN1bHRBcnJheSA9IHRyYXZlbEFwcC5kZXRlcm1pbmVOQ291bnRyaWVzKGFycmF5LCBzdGF0VHlwZSwgaXRlcmF0aW9uTnVtYmVyLCAxKTtcbiAgfVxuICAvLyBpZiB3ZSB3YW50IEJPVCBudW1iZXJzXG4gIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJtaW5cIikge1xuICAgIHJlc3VsdEFycmF5ID0gdHJhdmVsQXBwLmRldGVybWluZU5Db3VudHJpZXMoYXJyYXksIHN0YXRUeXBlLCBpdGVyYXRpb25OdW1iZXIsIC0xKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0QXJyYXk7XG59O1xuXG4vKiA1LjMgQ0FMQ1VMQVRFIFRIRSBOIENPVU5UUklFUyAqL1xudHJhdmVsQXBwLmRldGVybWluZU5Db3VudHJpZXMgPSAocmVzdWx0LCBzdGF0VHlwZSwgbiwgZGlyZWN0aW9uKSA9PiB7XG4gIC8vIGluaXRpYWxpemUgYSBoZWFwIGFycmF5IHRvIGtlZXAgdHJhY2sgb2YgdGhlIG4gbGFyZ2VzdC9zbWFsbGVzdCBzdGF0IHNjb3Jlc1xuICBsZXQgaGVhcCA9IG5ldyBNaW5IZWFwKCk7XG5cbiAgLy8gaW5pdGlhbGl6ZSBhIHNlY29uZGFyeSBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHRoZSBuIHNjb3JlcyBBTkRcbiAgLy8gdGhlIGFzc29jaWF0ZWQgY291bnRyeSB0byBlYWNoIHNjb3JlXG4gIGxldCBuQ291bnRyaWVzID0gW107XG5cbiAgLy8gc3RvcmUgdGhlIHN0YXQgdHlwZSBpbnRvIGEgcHJvcGVydHkgdmFyaWFibGUgZm9yIGVhc2llciB1c2VcbiAgbGV0IHByb3BlcnR5ID0gc3RhdFR5cGU7XG5cbiAgLy8gc3RhcnQgYSBjb3VudHJ5IGNvdW50ZXIgYXQgMCBqdXN0IGZvciB0aGUgc2FrZSBvZiBhZGRpbmcgdGhlIGZpcnN0IG4gY291bnRyaWVzIGludG8gdGhlIGhlYXBcbiAgbGV0IGNvdW50cnlDb3VudGVyID0gMDtcblxuICAvLyBnbyB0aHJvdWdoIGVhY2ggY291bnRyeSBmcm9tIHRoZSByZXN1bHRzIG9mIHRoZSBBSkFYIGNhbGwgdG8gSU5RU3RhdHNcbiAgcmVzdWx0Lm1hcChjb3VudHJ5ID0+IHtcbiAgICAvLyBzdG9yZSB0aGUgc3RhdCBzY29yZSBhbmQgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgY291bnRyeSBpbiB2YXJpYWJsZXMuXG4gICAgLy8gSU1QT1JUQU5UOiBtdWx0aXBseSBieSBkaXJlY3Rpb24gdG8gaW1wbGVtZW50IG1heC9taW4gaGVhcFxuICAgIC8vIGEgZGlyZWN0aW9uIG9mIDEgPSB3ZSB3YW50IG1heGltdW0gc2NvcmVzXG4gICAgLy8gYSBkaXJlY3Rpb24gb2YgLTEgPSB3ZSB3YW50IG1pbmltdW0gc2NvcmVzXG4gICAgbGV0IHN0YXQgPSBOdW1iZXIoY291bnRyeVtwcm9wZXJ0eV0pICogZGlyZWN0aW9uO1xuXG4gICAgLy8gaWYgaXQncyB0aGUgZmlyc3QgbiBjb3VudHJpZXMgZnJvbSB0aGUgcmVzdWx0LCBubyB3b3JrIHJlcXVpcmVkLiBKdXN0IGFkZCB0aGVtIGRpcmVjdGx5IGludG8gYm90aCB0aGUgaGVhcCBhbmQgbkNvdW50cmllcyB2YXJpYWJsZXNcbiAgICBpZiAoY291bnRyeUNvdW50ZXIgPCBuKSB7XG4gICAgICBoZWFwLmFkZChzdGF0KTtcbiAgICAgIG5Db3VudHJpZXMucHVzaChjb3VudHJ5KTtcblxuICAgICAgLy8gaW5jcmVtZW50IGNvdW50cnlDb3VudGVyIHRvIGtub3cgd2hlbiB3ZSdyZSBwYXN0IHRoZSBmaXJzdCBuIGNvdW50cmllc1xuICAgICAgY291bnRyeUNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ09ORElUSU9OIFRPIENIRUNLIElGIHRoZSBjdXJyZW50IGNvdW50cnkgc3RhdCBpcyBncmVhdGVyL3NtYWxsZXIgdGhhbiBhbnkgb2YgdGhlIGN1cnJlbnQgc3RhdHMgaW4gdGhlIGN1cnJlbnQgbiBjb3VudHJpZXNcbiAgICAgIGlmIChzdGF0ID4gaGVhcC5wZWVrKCkpIHtcbiAgICAgICAgLy8gaWYgc28sIGZpbmQgdGhlIGxvY2F0aW9uIG9mIHRoZSBzbWFsbGVzdC9sYXJnZXN0IHN0YXQgc2NvcmUgaW4gdGhlIGN1cnJlbnQgbkNvdW50cmllcyBhcnJheSBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgc3RhdCBhbmQgaXRzIGFzc29jaWF0ZWQgY291bnRyeVxuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IG5Db3VudHJpZXMubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICAvLyBtdWx0aXBseSBieSBkaXJlY3Rpb24gYWdhaW4gdG8gY29tcGFyZSBwcm9wZXJseSB3aXRoIHRoZSBoZWFwXG4gICAgICAgICAgbGV0IGN1cnJlbnRTdGF0ID0gTnVtYmVyKG5Db3VudHJpZXNbbV1bcHJvcGVydHldKSAqIGRpcmVjdGlvbjtcbiAgICAgICAgICBpZiAoY3VycmVudFN0YXQgPT09IGhlYXAucGVlaygpKSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGNvdW50cnlcbiAgICAgICAgICAgIG5Db3VudHJpZXMuc3BsaWNlKG0sIDEsIGNvdW50cnkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBzbWFsbGVzdC9sYXJnZXN0IHN0YXQgc2NvcmUgZnJvbSB0aGUgaGVhcCBhcyB3ZWxsXG4gICAgICAgIGhlYXAucG9sbCgpO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgbmV3IHNtYWxsZXN0L2xhcmdlc3Qgc2NvcmUgb250byB0aGUgaGVhcFxuICAgICAgICBoZWFwLmFkZChzdGF0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAvLyByZXR1cm4gbiBjb3VudHJpZXNcbiAgcmV0dXJuIG5Db3VudHJpZXM7XG59O1xuXG4vKiA2LiBTRU5EIEFQSSBSRVFVRVNUUyBUTyBXSUtJIEFORCBQSVhBICovXG5cbi8vIDYuMSBXSUtJUEVESUEgQVBJOiBHRVQgQU5EIFNUT1JFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0b3JlIGltcG9ydGFudCBpbmZvIGZvciBjYWxscyB0byB0aGUgV2lraSBBUEkuXG50cmF2ZWxBcHAud2lraVVSTCA9IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocFwiO1xuLy8gR2V0IGluZm8gZnJvbSBXaWtpcGVkaWEgKEFKQVgpXG50cmF2ZWxBcHAuZ2V0V2lraSA9IGNvdW50cnkgPT4ge1xuICAvLyBnZXQgZXh0cmFjdFxuICByZXR1cm4gJC5hamF4KHtcbiAgICB1cmw6IHRyYXZlbEFwcC53aWtpVVJMLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJqc29ucFwiLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjdGlvbjogXCJxdWVyeVwiLFxuICAgICAgcHJvcDogXCJleHRyYWN0c1wiLFxuICAgICAgdGl0bGVzOiBjb3VudHJ5LFxuICAgICAgZm9ybWF0OiBcImpzb25cIixcbiAgICAgIGV4bGltaXQ6IDEsXG4gICAgICBleGNoYXJzOiAyODAsXG4gICAgICBleGludHJvOiB0cnVlLFxuICAgICAgZXhwbGFpbnRleHQ6IHRydWUsXG4gICAgICByZWRpcmVjdHM6IDFcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gU3RvcmUgV2lraXBlZGlhIGNvdW50cnkgZXh0cmFjdFxudHJhdmVsQXBwLnN0b3JlV2lraSA9IHJlc3VsdCA9PiB7XG4gIC8vIFRoaXMgdmFyaWFibGUgc3RvcmVzIHRoZSBvYmplY3QgdGhhdCBob2xkcyBhIGtleSBuYW1lIHVuaXF1ZSB0byBldmVyeSBjb3VudHJ5LiBUaGUgdmFsdWUgb2YgdGhpcyBrZXkgaXMgYW4gb2JqZWN0IHRoYXQgaG9sZHMgdGhlIGV4dGFjdC5cbiAgY29uc3Qgd2lraUV4dHJhY3RPYmplY3QgPSByZXN1bHRbMF0ucXVlcnkucGFnZXM7XG4gIC8vIElmIHdlIGNvbnZlcnQgdGhlIGFib3ZlIG9iamVjdCBpbnRvIGFuIGFycmF5LCB0aGUgZXh0cmFjdCBjYW4gYmUgYWNjZXNzZWQgb24gdGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBhcnJheS4gVGhpcyB2YXJpYWJsZSBob2xkcyB0aGUgd2lraSBleHRyYWN0LlxuICB0cmF2ZWxBcHAud2lraUV4dHJhY3QucHVzaChPYmplY3QudmFsdWVzKHdpa2lFeHRyYWN0T2JqZWN0KVswXS5leHRyYWN0KTtcbn07XG5cbi8vIDYuMiBQSVhBQkFZIEFQSTogR0VUIEFORCBTVE9SRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3RvcmUgaW1wb3J0YW50IGluZm8gZm9yIGNhbGxzIHRvIHRoZSBQaXhhYmF5IEFQSS5cbnRyYXZlbEFwcC5waXhhS2V5ID0gXCI5ODc5NTcxLWU0Y2JiZWYzZTY5MmFhMTVhMjRhNzExOWJcIjtcbnRyYXZlbEFwcC5waXhhVVJMID0gXCJodHRwczovL3d3dy5waXhhYmF5LmNvbS9hcGkvXCI7XG4vLyBHZXQgaW5mbyBmcm9tIFdpa2lwZWRpYSAoQUpBWClcbnRyYXZlbEFwcC5nZXRQaXhhID0gY291bnRyeSA9PiB7XG4gIC8vIEdldCBpbWFnZSBVUkxcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdXJsOiB0cmF2ZWxBcHAucGl4YVVSTCxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICBkYXRhOiB7XG4gICAgICBrZXk6IHRyYXZlbEFwcC5waXhhS2V5LFxuICAgICAgcTogY291bnRyeSxcbiAgICAgIHBlcl9wYWdlOiAxNVxuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBTdG9yZSBQaXhhYmF5IGNvdW50cnkgaW1hZ2VzIG9uIHRoZSBwYWdlXG50cmF2ZWxBcHAuc3RvcmVQaXhhID0gcmVzdWx0cyA9PiB7XG4gIC8vIFN0b3JlIHRoZSBhcnJheSB0aGF0IGhvbGRzIHRoZSBpbWFnZSBVUkxzIGluIGFuIGFycmF5XG4gIGNvbnN0IHJlc3VsdHNBcnJheSA9IHJlc3VsdHNbMF0uaGl0cztcbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSByZXN1bHRzIGFycmF5IGFuZCBwdXNoIGFsbCBpbWFnZXMgaW50byB0aGUgaW1hZ2VBcnJheVxuICByZXN1bHRzQXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAvLyBBcnJheSBvZiBpbWFnZXMgZm9yIGVhY2ggY291bnRyeVxuICAgIHRyYXZlbEFwcC5pbWFnZUFycmF5LnB1c2goaXRlbS5sYXJnZUltYWdlVVJMKTtcbiAgICAvLyBBcnJheSBvZiBpbWFnZSBpbmZvcm1hdGlvbiBmcm9tIGVhY2ggY291bnRyeSB0byBiZSB1c2VkIGZvciBBbHQgdGV4dFxuICAgIHRyYXZlbEFwcC5pbWFnZVRleHRBcnJheS5wdXNoKGl0ZW0udGFncyk7XG4gIH0pO1xufTtcblxuLyogNy4gRElTUExBWSBERVNUSU9OQVRJT05TIE9OIFNDUkVFTiBXSVRIIFdJS0kgKyBQSVhBIFJFU1VMVFMgKi9cbnRyYXZlbEFwcC5kaXNwbGF5RGVzdGluYXRpb25zID0gKHJlc3VsdHMsIHN0YXRDaG9pY2VzKSA9PiB7XG4gIC8vIEdldCByaWQgb2YgcHJldmlvdXMgY2xpY2tlZCByZXN1bHRzXG4gICQoXCIucmVzdWx0c1wiKS5lbXB0eSgpO1xuICAvLyBHbyB0aHJvdWdoIGVhY2ggY291bnRyeSByZXN1bHQgYW5kIGJ1aWxkIHRoZSBzdHJpbmcgbGl0ZXJhbCB0byBhcHBlbmQgdG8gdGhlIHBhZ2VcbiAgbGV0IGNvdW50cnlDb3VudGVyID0gMDtcbiAgbGV0IGltYWdlQ291bnRlciA9IDA7XG4gIHJlc3VsdHMuZm9yRWFjaChjb3VudHJ5ID0+IHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgYWxsIGVsZW1lbnRzIGZvciBvbmUgY291bnRyeSByZXN1bHRcbiAgICBsZXQgY291bnRyeUNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIilcbiAgICAgIC5hZGRDbGFzcyhcInJlc3VsdC1jb250YWluZXJcIilcbiAgICAgIC8vIGFzc2lnbiByYW5kb20gcGl4YSBpbWFnZSBvZiBjb3VudHJ5IHRvIHRoZSByZXN1bHQgYmFja2dyb3VuZFxuICAgICAgLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgYHVybChcIiR7dHJhdmVsQXBwLmltYWdlQXJyYXlbdHJhdmVsQXBwLnJhbmRvbWl6ZShpbWFnZUNvdW50ZXIsIGltYWdlQ291bnRlciArIDE1KV19XCIpYCk7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdpbGwgaG9sZCBhbGwgdGV4dCBhbmQgaW1hZ2UocykgcmVmZXJyaW5nIHRvIHRoZSBjb3VudHJ5IHJlc3VsdFxuICAgIGxldCBjb3VudHJ5Q2FyZEVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJjYXJkXCIpO1xuICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgbmFtZSBvZiB0aGUgY291bnRyeVxuICAgIGxldCBjb3VudHJ5TmFtZUVsZW1lbnQgPSAkKFwiPGgyPlwiKVxuICAgICAgLmFkZENsYXNzKFwiY291bnRyeS1uYW1lXCIpXG4gICAgICAudGV4dChgJHtjb3VudHJ5LmNvdW50cnlOYW1lfWApO1xuICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGNvdW50cnksIHRha2VuIGZyb20gdGhlIHdpa2kgQVBJXG4gICAgbGV0IGNvdW50cnlEZXNjcmlwdGlvbkVsZW1lbnQgPSAkKFwiPHA+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJ3aWtpLXRleHRcIilcbiAgICAgIC50ZXh0KHRyYXZlbEFwcC53aWtpRXh0cmFjdFtjb3VudHJ5Q291bnRlcl0pO1xuICAgIGNvdW50cnlDb3VudGVyKys7XG4gICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIHRoZSB0ZXh0IGZvciBlYWNoIG9mIHRoZSB0aHJlZSBzdGF0cyB3ZSdyZSBkaXNwbGF5aW5nXG4gICAgbGV0IHN0YXRMaXN0RWxlbWVudCA9ICQoXCI8dWw+XCIpLmFkZENsYXNzKFwic3RhdC1saXN0XCIpO1xuICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgY29udGFpbmVyIHRoYXQgd2lsbCBob2xkIHRoZSBzbWFsbCBwaXhhIGNvdW50cnkgaW1hZ2VcbiAgICBsZXQgc21hbGxQaXhhQ29udGFpbmVyRWxlbWVudCA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImNvdW50cnktaW1hZ2UtY29udGFpbmVyXCIpO1xuICAgIC8vIFRoaXMgbmV3IGltYWdlIGNvdW50ZXIgZ2V0cyB0aGUgaW1hZ2UgaW4gdGhlIGFycmF5IHRoYXQgZm9sbG93cyB0aGUgZmlyc3QgaW1hZ2UgYmVpbmcgdXNlZCBhcyBhIGJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSBjYXJkXG4gICAgLy8gVGhpcyBpbWFnZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGltYWdlIGNvbnRhaW5lclxuICAgIGxldCBzbWFsbFBpeGFJbWFnZSA9ICQoXCI8aW1nPlwiKVxuICAgICAgLmFkZENsYXNzKFwiY291bnRyeS1pbWFnZVwiKVxuICAgICAgLmF0dHIoe1xuICAgICAgICBzcmM6IGAke3RyYXZlbEFwcC5pbWFnZUFycmF5W3RyYXZlbEFwcC5yYW5kb21pemUoaW1hZ2VDb3VudGVyLCBpbWFnZUNvdW50ZXIgKyAxNSldfWAsXG4gICAgICAgIGFsdDogYFNjZW5pYyBpbWFnZSBvZiAke2NvdW50cnkuY291bnRyeU5hbWV9LiBJbWFnZSB0YWdzIGluY2x1ZGUgJHt0cmF2ZWxBcHAuaW1hZ2VUZXh0QXJyYXl9LmBcbiAgICAgIH0pO1xuICAgIC8vIEFkZCAxNSB0byB0aGUgaW1hZ2UgY291bnRlciBlbnN1cmVzIHRoYXQgZXZlcnkgaXRlcmF0aW9uIHRocm91Z2ggdGhlIGZvckVhY2ggd2lsbCBhZGQgaW1hZ2VzIHRvIHRoZSBhc3NvY2lhdGVkIGNvdXRyaWVzXG4gICAgaW1hZ2VDb3VudGVyICs9IDE1O1xuICAgIC8vQXBwZW5kIHRoZSBjb3VudHJ5IGltYWdlIHRvIGl0cyBjb250YWluZXJcbiAgICBzbWFsbFBpeGFDb250YWluZXJFbGVtZW50LmFwcGVuZChzbWFsbFBpeGFJbWFnZSk7XG4gICAgLy8gQXBwZW5kIHRoZSBjb3VudHJ5IG5hbWUgPGgyPiwgd2lraSB0ZXh0IDxwPiwgc3RhdCBsaXN0IDx1bD4gYW5kIGltYWdlIGNvbnRhaW5lciA8ZGl2PiB0byB0aGUgY2FyZCA8ZGl2Pi5cbiAgICBjb3VudHJ5Q2FyZEVsZW1lbnQuYXBwZW5kKFxuICAgICAgY291bnRyeU5hbWVFbGVtZW50LFxuICAgICAgY291bnRyeURlc2NyaXB0aW9uRWxlbWVudCxcbiAgICAgIHN0YXRMaXN0RWxlbWVudCxcbiAgICAgIHNtYWxsUGl4YUNvbnRhaW5lckVsZW1lbnRcbiAgICApO1xuICAgIC8vIEFwcGVuZCB0aGUgY2FyZCBkaXYgdG8gdGhlIHJlc3VsdC1jb250YWluZXJcbiAgICBjb3VudHJ5Q29udGFpbmVyRWxlbWVudC5hcHBlbmQoY291bnRyeUNhcmRFbGVtZW50KTtcbiAgICAvL0FwcGVuZCB0aGUgcmVzdWx0LWNvbnRhaW5lciB0byB0aGUgcmVzdWx0cyBzZWN0aW9uIGVsZW1lbnQgb24gb3VyIHBhZ2VcbiAgICAkKFwiLnJlc3VsdHNcIikuYXBwZW5kKGNvdW50cnlDb250YWluZXJFbGVtZW50KTtcblxuICAgIC8vIEdvIHRocm91Z2ggdGhlIGFycmF5IFwic3RhdENob2ljZXNcIiBhbmQgc2V0IHVwIDMgaW5mb3JtYXRpb246XG4gICAgLy8gMS4gdGl0bGUgb2Ygc3RhdCAodGFrZW4gZnJvbSB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXkpXG4gICAgLy8gMi4gdmFsdWUgb2Ygc3RhdCAodGFrZW4gZnJvbSByZXN1bHRzIG9iamVjdClcbiAgICAvLyAzLiBkZXNjcmlwdGlvbiBvZiBzdGF0ICh0YWtlbiBmcm9tIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheSlcbiAgICBsZXQgc3RhdENvdW50ZXIgPSAwO1xuICAgIHN0YXRDaG9pY2VzLmZvckVhY2goc3RhdCA9PiB7XG4gICAgICBsZXQgc3RhdFRpdGxlID0gdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5W3N0YXRDb3VudGVyXTtcbiAgICAgIGxldCBzdGF0VmFsdWUgPSBjb3VudHJ5W3RyYXZlbEFwcC5zdGF0Q29kZUFycmF5W3N0YXRDb3VudGVyXV07XG4gICAgICBsZXQgc3RhdERlc2NyaXB0aW9uID0gdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5W3N0YXRDb3VudGVyXTtcbiAgICAgIHN0YXRDb3VudGVyKys7XG4gICAgICAvLyBUaGlzIGxpc3QgaXRlbSBlbGVtZW50IHdpbGwgaG9sZCBzdGF0IGluZm9ybWF0aW9uXG4gICAgICBsZXQgc3RhdExpc3RJdGVtRWxlbWVudCA9ICQoXCI8bGk+XCIpLmFkZENsYXNzKFwic3RhdC1saXN0X19pdGVtXCIpO1xuICAgICAgLy8gVGhpcyBkaXYgd2lsbCBob2xkIHRoZSBzdGF0IHRpdGxlIGFuZCBxdWVzdGlvbiBtYXJrIGljb25cbiAgICAgIGxldCBzdGF0VGl0bGVJY29uQ29udGFpbmVyRWxlbWVudCA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcInN0YXQtbGlzdF9faXRlbV9fdGl0bGUtaWNvbi1jb250YWluZXJcIik7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIHN0YXQgdGl0bGUgYW5kIHZhbHVlXG4gICAgICBsZXQgc3RhdFRpdGxlRWxlbWVudCA9ICQoXCI8aDQ+XCIpXG4gICAgICAgIC5hZGRDbGFzcyhcInN0YXQtbGlzdF9faXRlbV9fdGl0bGUtaWNvbi1jb250YWluZXJfX3RpdGxlLW51bWJlclwiKVxuICAgICAgICAudGV4dChgJHtzdGF0VGl0bGV9OiAke3RyYXZlbEFwcC5udW1iZXJXaXRoQ29tbWFzKHN0YXRWYWx1ZSl9YCk7XG4gICAgICAvLyBUaGlzIHF1ZXN0aW9uIG1hcmsgaWNvbiB3aWxsIHNpdCBuZXh0IHRvIHRoZSBzdGF0VGl0bGVFbGVtZW50IGFuZCB3aGVuIGNsaWNrZWQvaG92ZXJvdmVyLCB3aWxsIGRpc3BsYXkgdGhlIHN0YXQgZGVzY3JpcHRpb25cbiAgICAgIGxldCBzdGF0SG92ZXJJY29uRWxlbWVudCA9IGA8aSBjbGFzcz1cInN0YXQtbGlzdF9faXRlbV9fdGl0bGUtaWNvbi1jb250YWluZXJfX2ljb24gZmFyIGZhLXF1ZXN0aW9uLWNpcmNsZVwiPjwvaT5gO1xuICAgICAgLy8gYXBwZW5kIHRoZSBzdGF0IHRpdGxlIGFuZCBpY29uIHRvIHRoZSBzdGF0VGl0bGVJY29uQ29udGFpbmVyRWxlbWVudFxuICAgICAgc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKHN0YXRUaXRsZUVsZW1lbnQsIHN0YXRIb3Zlckljb25FbGVtZW50KTtcbiAgICAgIC8vIFRoaXMgZGl2IHdpbGwgaG9sZCB0aGUgc3RhdCBkZXNjcmlwdGlvbiBhbmQgaXMgYSBzaWJsaW5nIG9mIHRoZSBzdGF0VGl0bGVJY29uQ29udGFpbmVyLlxuICAgICAgbGV0IHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lciBkaXNwbGF5LW5vbmVcIik7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIHN0YXQgZGVzY3JpcHRpb25cbiAgICAgIGxldCBzdGF0RGVzY3JpcHRpb25FbGVtZW50ID0gJChcIjxwPlwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lcl9fZGVzY3JpcHRpb25cIilcbiAgICAgICAgLnRleHQoc3RhdERlc2NyaXB0aW9uKTtcbiAgICAgIC8vIEFwcGVuZCB0aGUgc3RhdERlc2NyaXB0aW9uRWxlbWVudCB0byB0aGUgc3RhdERlc2NyaXB0aW9uQ29udGFpbmVyRWxlbWVudFxuICAgICAgc3RhdERlc2NyaXB0aW9uQ29udGFpbmVyRWxlbWVudC5hcHBlbmQoc3RhdERlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgICAvLyBBcHBlbmQgdGhlIHR3byBzdGF0IGRpdiBjb250YWluZXJzIHRvIHRoZSA8bGk+XG4gICAgICBzdGF0TGlzdEl0ZW1FbGVtZW50LmFwcGVuZChzdGF0VGl0bGVJY29uQ29udGFpbmVyRWxlbWVudCwgc3RhdERlc2NyaXB0aW9uQ29udGFpbmVyRWxlbWVudCk7XG4gICAgICAvLyBBcHBlbmQgdGhlIDxsaT5zIHRvIHRoZSA8dWw+XG4gICAgICBzdGF0TGlzdEVsZW1lbnQuYXBwZW5kKHN0YXRMaXN0SXRlbUVsZW1lbnQpO1xuICAgIH0pO1xuICB9KTtcblxuICB0cmF2ZWxBcHAuZmluYWxEaXNwbGF5KCk7XG59O1xuXG4vKiAgNy4xIE9uY2UgYWxsIGltYWdlcyBhcmUgbG9hZGVkIGFzIGJhY2tncm91bmQgaW1hZ2VzIG9yIHJlZ3VsYXIgaW1hZ2VzLCBkaXNwbGF5IHRoZSBmaW5hbCByZXN1bHRzIHdpdGhvdXQgXCJsYWdcIiovXG50cmF2ZWxBcHAuZmluYWxEaXNwbGF5ID0gKCkgPT4ge1xuICAkKFwiLnJlc3VsdHNcIikud2FpdEZvckltYWdlcyhmdW5jdGlvbigpIHtcbiAgICAkKFwiLnJlc3VsdHNcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG4gICAgJChcImh0bWwsIGJvZHlcIilcbiAgICAgIC5zdG9wKClcbiAgICAgIC5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKFwiLnJlc3VsdHNcIikub2Zmc2V0KCkudG9wIH0sIDkwMCwgXCJzd2luZ1wiKTtcblxuICAgIC8vIHJlbW92ZSBsb2FkZXIgYW5kIGRpc3BsYXkgc3VibWl0IHJhbmtpbmcgYnV0dG9uIGFnYWluXG4gICAgbGV0IG1hcmtVcEJ1dHRvbiA9IGA8bGk+PGJ1dHRvbiBjbGFzcz1cInVzZXItc3VibWl0IGJ0blwiPlN1Ym1pdCBSYW5raW5nPC9idXR0b24+PC9saT5gO1xuICAgICQoXCIuY2hvaWNlc1wiKVxuICAgICAgLmZpbmQoXCJsaTpsYXN0LWNoaWxkXCIpXG4gICAgICAuaHRtbChtYXJrVXBCdXR0b24pO1xuXG4gICAgLyogRkxJQ0tJVFkgKi9cbiAgICAkKFwiLnJlc3VsdHNcIikuZmxpY2tpdHkoe1xuICAgICAgLy8gb3B0aW9uc1xuICAgICAgY2VsbEFsaWduOiBcImxlZnRcIixcbiAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICBhdXRvUGxheTogNTAwMCxcbiAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgIHdhdGNoQ1NTOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0cmF2ZWxBcHAuZmxpY2tpdHlPbiA9IHRydWU7XG4gIH0pO1xufTtcblxuLy8gNy4yIE9uIGhvdmVyIG9yIGNsaWNrIG92ZXIgdGhlIHF1ZXN0aW9uIG1hcmsgaWNvbiwgZGlzcGxheSB0aGUgc3RhdCBkZXNjcmlwdGlvblxudHJhdmVsQXBwLmRpc3BsYXlTdGF0RGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgJChcIi5yZXN1bHRzXCIpLm9uKFwiY2xpY2tcIiwgXCIuc3RhdC1saXN0X19pdGVtX190aXRsZS1pY29uLWNvbnRhaW5lcl9faWNvblwiLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5wYXJlbnRzKFwiLnN0YXQtbGlzdF9faXRlbVwiKVxuICAgICAgICAuZmluZChcIi5zdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lclwiKVxuICAgICAgICAuaGFzQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIikgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICAkKFwiLnJlc3VsdHNcIilcbiAgICAgICAgLmZpbmQoXCIuc3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXJcIilcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5yZXN1bHRzXCIpXG4gICAgICAgIC5maW5kKFwiLnN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbiAgICAgICQodGhpcylcbiAgICAgICAgLnBhcmVudHMoXCIuc3RhdC1saXN0X19pdGVtXCIpXG4gICAgICAgIC5maW5kKFwiLnN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBob2xkcyBhbGwgb3VyIGV2ZW50cyBmdW50aW9uc1xudHJhdmVsQXBwLmV2ZW50c0Z1bmN0aW9uID0gKCkgPT4ge1xuICB0cmF2ZWxBcHAuZ2V0VXNlclB1cnBvc2UoKTtcbiAgdHJhdmVsQXBwLmdldFN0YXJ0ZWQoKTtcbiAgdHJhdmVsQXBwLnRyYW5zZm9ybVNWRygpO1xuICB0cmF2ZWxBcHAuZGlzcGxheVN0YXREZXNjcmlwdGlvbigpO1xufTtcblxuLy8gSW5pdCBmdW5jdGlvbiB0byBob2xkIGFsbCBvdXIgZnVuY3Rpb25zIGluIG9yZGVyXG50cmF2ZWxBcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0cmF2ZWxBcHAuZXZlbnRzRnVuY3Rpb24oKTtcbiAgdHJhdmVsQXBwLnNsaWRlRHJhZygpO1xufTtcblxuLy8gRG9jdW1lbnQgUmVhZHkgdG8gY2FsbCBvdXIgaW5pdCgpIGZ1bmN0aW9uIGFuZCBzdGFydCB0aGUgYXBwXG4kKGZ1bmN0aW9uKCkge1xuICB0cmF2ZWxBcHAuaW5pdCgpO1xufSk7XG5cbi8qIDguIEVYVFJBIEZVTkNUSU9OUyBVU0VEIFRIUk9VR0hPVVQgQVBQICovXG5cbi8vIDguMSBTb3J0YWJsZSBmdW5jdGlvbmFsaXR5IGZvciBjcml0ZXJpYXNcbnRyYXZlbEFwcC5zbGlkZURyYWcgPSAoKSA9PiB7XG4gICQoXCIuY2hvaWNlc1wiKVxuICAgIC5zb3J0YWJsZSh7XG4gICAgICBjb25uZWN0V2l0aDogXCIuc29ydGFibGVcIixcbiAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICByZXZlcnQ6IHRydWUsXG4gICAgICBoZWxwZXI6IFwiY2xvbmVcIixcbiAgICAgIGNvbnRhaW5tZW50OiBcIi5jcml0ZXJpYXMtY29udGFpbmVyXCJcbiAgICB9KVxuICAgIC5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICAkKFwidWwsIGxpXCIpLmRpc2FibGVTZWxlY3Rpb24oKTtcbn07XG5cbi8vIDguMiBSYW5kb21pemVyIGZ1bmN0aW9uIHRvIHNlbGVjdCByYW5kb20gaW1hZ2VzIHRvIGRpc3BsYXlcbnRyYXZlbEFwcC5yYW5kb21pemUgPSAoc3RhcnRpbmdOdW0sIGVuZGluZ051bSkgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZGluZ051bSAtIHN0YXJ0aW5nTnVtKSkgKyBzdGFydGluZ051bTtcbn07XG5cbi8vIDguMyBFdmVudCBsaXN0ZW5lciB0byB0cmFuc2Zvcm0gU1ZHcyBpbnRvIGlubGluZSBTVkdTIHRvIGJlIGFibGUgdG8gY2hhbmdlIHRoZWlyIGNvbG9ycyB3aXRoIGNzcyBmaWxsXG50cmF2ZWxBcHAudHJhbnNmb3JtU1ZHID0gKCkgPT4ge1xuICBqUXVlcnkoXCJpbWcuc3ZnXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyICRpbWcgPSBqUXVlcnkodGhpcyk7XG4gICAgdmFyIGltZ0lEID0gJGltZy5hdHRyKFwiaWRcIik7XG4gICAgdmFyIGltZ0NsYXNzID0gJGltZy5hdHRyKFwiY2xhc3NcIik7XG4gICAgdmFyIGltZ1VSTCA9ICRpbWcuYXR0cihcInNyY1wiKTtcblxuICAgIGpRdWVyeS5nZXQoXG4gICAgICBpbWdVUkwsXG4gICAgICBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIC8vIEdldCB0aGUgU1ZHIHRhZywgaWdub3JlIHRoZSByZXN0XG4gICAgICAgIHZhciAkc3ZnID0galF1ZXJ5KGRhdGEpLmZpbmQoXCJzdmdcIik7XG5cbiAgICAgICAgLy8gQWRkIHJlcGxhY2VkIGltYWdlJ3MgSUQgdG8gdGhlIG5ldyBTVkdcbiAgICAgICAgaWYgKHR5cGVvZiBpbWdJRCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICRzdmcgPSAkc3ZnLmF0dHIoXCJpZFwiLCBpbWdJRCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHJlcGxhY2VkIGltYWdlJ3MgY2xhc3NlcyB0byB0aGUgbmV3IFNWR1xuICAgICAgICBpZiAodHlwZW9mIGltZ0NsYXNzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cihcImNsYXNzXCIsIGltZ0NsYXNzICsgXCIgcmVwbGFjZWQtc3ZnXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBpbnZhbGlkIFhNTCB0YWdzIGFzIHBlciBodHRwOi8vdmFsaWRhdG9yLnczLm9yZ1xuICAgICAgICAkc3ZnID0gJHN2Zy5yZW1vdmVBdHRyKFwieG1sbnM6YVwiKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdmlld3BvcnQgaXMgc2V0LCBpZiB0aGUgdmlld3BvcnQgaXMgbm90IHNldCB0aGUgU1ZHIHdvbnQndCBzY2FsZS5cbiAgICAgICAgaWYgKCEkc3ZnLmF0dHIoXCJ2aWV3Qm94XCIpICYmICRzdmcuYXR0cihcImhlaWdodFwiKSAmJiAkc3ZnLmF0dHIoXCJ3aWR0aFwiKSkge1xuICAgICAgICAgICRzdmcuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyAkc3ZnLmF0dHIoXCJoZWlnaHRcIikgKyBcIiBcIiArICRzdmcuYXR0cihcIndpZHRoXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcGxhY2UgaW1hZ2Ugd2l0aCBuZXcgU1ZHXG4gICAgICAgICRpbWcucmVwbGFjZVdpdGgoJHN2Zyk7XG4gICAgICB9LFxuICAgICAgXCJ4bWxcIlxuICAgICk7XG4gIH0pO1xufTtcblxuLyogOC40IFRSQU5TRk9STSBTVFJJTkcgTlVNQkVSUyBJTlRPIFNFUEFSQVRFRCBTVFJJTkdTIFdJVEggUFJPUEVSIENPTU1BUyBGT1IgRUFDSCBUSE9VU0FORCBVTklUICovXG50cmF2ZWxBcHAubnVtYmVyV2l0aENvbW1hcyA9IHN0YXQgPT4ge1xuICByZXR1cm4gc3RhdC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywge21ldGhvZDogJ2dldCd9LCB0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKipcbiAqIEZhc3RQcmlvcml0eVF1ZXVlLmpzIDogYSBmYXN0IGhlYXAtYmFzZWQgcHJpb3JpdHkgcXVldWUgIGluIEphdmFTY3JpcHQuXG4gKiAoYykgdGhlIGF1dGhvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKlxuICogU3BlZWQtb3B0aW1pemVkIGhlYXAtYmFzZWQgcHJpb3JpdHkgcXVldWUgZm9yIG1vZGVybiBicm93c2VycyBhbmQgSmF2YVNjcmlwdCBlbmdpbmVzLlxuICpcbiAqIFVzYWdlIDpcbiAgICAgICAgIEluc3RhbGxhdGlvbiAoaW4gc2hlbGwsIGlmIHlvdSB1c2Ugbm9kZSk6XG4gICAgICAgICAkIG5wbSBpbnN0YWxsIGZhc3Rwcmlvcml0eXF1ZXVlXG5cbiAgICAgICAgIFJ1bm5pbmcgdGVzdCBwcm9ncmFtIChpbiBKYXZhU2NyaXB0KTpcblxuICAgICAgICAgLy8gdmFyIEZhc3RQcmlvcml0eVF1ZXVlID0gcmVxdWlyZShcImZhc3Rwcmlvcml0eXF1ZXVlXCIpOy8vIGluIG5vZGVcbiAgICAgICAgIHZhciB4ID0gbmV3IEZhc3RQcmlvcml0eVF1ZXVlKCk7XG4gICAgICAgICB4LmFkZCgxKTtcbiAgICAgICAgIHguYWRkKDApO1xuICAgICAgICAgeC5hZGQoNSk7XG4gICAgICAgICB4LmFkZCg0KTtcbiAgICAgICAgIHguYWRkKDMpO1xuICAgICAgICAgeC5wZWVrKCk7IC8vIHNob3VsZCByZXR1cm4gMCwgbGVhdmVzIHggdW5jaGFuZ2VkXG4gICAgICAgICB4LnNpemU7IC8vIHNob3VsZCByZXR1cm4gNSwgbGVhdmVzIHggdW5jaGFuZ2VkXG4gICAgICAgICB3aGlsZSgheC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgY29uc29sZS5sb2coeC5wb2xsKCkpO1xuICAgICAgICAgfSAvLyB3aWxsIHByaW50IDAgMSAzIDQgNVxuICAgICAgICAgeC50cmltKCk7IC8vIChvcHRpb25hbCkgb3B0aW1pemVzIG1lbW9yeSB1c2FnZVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0Y29tcGFyYXRvciA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiO1xufTtcblxuLy8gdGhlIHByb3ZpZGVkIGNvbXBhcmF0b3IgZnVuY3Rpb24gc2hvdWxkIHRha2UgYSwgYiBhbmQgcmV0dXJuICp0cnVlKiB3aGVuIGEgPCBiXG5mdW5jdGlvbiBGYXN0UHJpb3JpdHlRdWV1ZShjb21wYXJhdG9yKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBGYXN0UHJpb3JpdHlRdWV1ZSkpIHJldHVybiBuZXcgRmFzdFByaW9yaXR5UXVldWUoY29tcGFyYXRvcik7XG4gIHRoaXMuYXJyYXkgPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5jb21wYXJlID0gY29tcGFyYXRvciB8fCBkZWZhdWx0Y29tcGFyYXRvcjtcbn1cblxuLy8gY29weSB0aGUgcHJpb3JpdHkgcXVldWUgaW50byBhbm90aGVyLCBhbmQgcmV0dXJuIGl0LiBRdWV1ZSBpdGVtcyBhcmUgc2hhbGxvdy1jb3BpZWQuXG4vLyBSdW5zIGluIGBPKG4pYCB0aW1lLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHZhciBmcHEgPSBuZXcgRmFzdFByaW9yaXR5UXVldWUodGhpcy5jb21wYXJlKTtcbiAgZnBxLnNpemUgPSB0aGlzLnNpemU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICBmcHEuYXJyYXkucHVzaCh0aGlzLmFycmF5W2ldKTtcbiAgfVxuICByZXR1cm4gZnBxO1xufTtcblxuLy8gQWRkIGFuIGVsZW1lbnQgaW50byB0aGUgcXVldWVcbi8vIHJ1bnMgaW4gTyhsb2cgbikgdGltZVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG15dmFsKSB7XG4gIHZhciBpID0gdGhpcy5zaXplO1xuICB0aGlzLmFycmF5W3RoaXMuc2l6ZV0gPSBteXZhbDtcbiAgdGhpcy5zaXplICs9IDE7XG4gIHZhciBwO1xuICB2YXIgYXA7XG4gIHdoaWxlIChpID4gMCkge1xuICAgIHAgPSAoaSAtIDEpID4+IDE7XG4gICAgYXAgPSB0aGlzLmFycmF5W3BdO1xuICAgIGlmICghdGhpcy5jb21wYXJlKG15dmFsLCBhcCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmFycmF5W2ldID0gYXA7XG4gICAgaSA9IHA7XG4gIH1cbiAgdGhpcy5hcnJheVtpXSA9IG15dmFsO1xufTtcblxuLy8gcmVwbGFjZSB0aGUgY29udGVudCBvZiB0aGUgaGVhcCBieSBwcm92aWRlZCBhcnJheSBhbmQgXCJoZWFwaWZ5IGl0XCJcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5oZWFwaWZ5ID0gZnVuY3Rpb24oYXJyKSB7XG4gIHRoaXMuYXJyYXkgPSBhcnI7XG4gIHRoaXMuc2l6ZSA9IGFyci5sZW5ndGg7XG4gIHZhciBpO1xuICBmb3IgKGkgPSB0aGlzLnNpemUgPj4gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB0aGlzLl9wZXJjb2xhdGVEb3duKGkpO1xuICB9XG59O1xuXG4vLyBmb3IgaW50ZXJuYWwgdXNlXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX3BlcmNvbGF0ZVVwID0gZnVuY3Rpb24oaSwgZm9yY2UpIHtcbiAgdmFyIG15dmFsID0gdGhpcy5hcnJheVtpXTtcbiAgdmFyIHA7XG4gIHZhciBhcDtcbiAgd2hpbGUgKGkgPiAwKSB7XG4gICAgcCA9IChpIC0gMSkgPj4gMTtcbiAgICBhcCA9IHRoaXMuYXJyYXlbcF07XG4gICAgLy8gZm9yY2Ugd2lsbCBza2lwIHRoZSBjb21wYXJlXG4gICAgaWYgKCFmb3JjZSAmJiAhdGhpcy5jb21wYXJlKG15dmFsLCBhcCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmFycmF5W2ldID0gYXA7XG4gICAgaSA9IHA7XG4gIH1cbiAgdGhpcy5hcnJheVtpXSA9IG15dmFsO1xufTtcblxuLy8gZm9yIGludGVybmFsIHVzZVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLl9wZXJjb2xhdGVEb3duID0gZnVuY3Rpb24oaSkge1xuICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgdmFyIGhzaXplID0gdGhpcy5zaXplID4+PiAxO1xuICB2YXIgYWkgPSB0aGlzLmFycmF5W2ldO1xuICB2YXIgbDtcbiAgdmFyIHI7XG4gIHZhciBiZXN0YztcbiAgd2hpbGUgKGkgPCBoc2l6ZSkge1xuICAgIGwgPSAoaSA8PCAxKSArIDE7XG4gICAgciA9IGwgKyAxO1xuICAgIGJlc3RjID0gdGhpcy5hcnJheVtsXTtcbiAgICBpZiAociA8IHNpemUpIHtcbiAgICAgIGlmICh0aGlzLmNvbXBhcmUodGhpcy5hcnJheVtyXSwgYmVzdGMpKSB7XG4gICAgICAgIGwgPSByO1xuICAgICAgICBiZXN0YyA9IHRoaXMuYXJyYXlbcl07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5jb21wYXJlKGJlc3RjLCBhaSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmFycmF5W2ldID0gYmVzdGM7XG4gICAgaSA9IGw7XG4gIH1cbiAgdGhpcy5hcnJheVtpXSA9IGFpO1xufTtcblxuLy8gaW50ZXJuYWxcbi8vIF9yZW1vdmVBdChpbmRleCkgd2lsbCByZW1vdmUgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGZyb20gdGhlIHF1ZXVlLFxuLy8gcmV0YWluaW5nIGJhbGFuY2UuIHJldHVybnMgdGhlIHJlbW92ZWQgaXRlbSwgb3IgdW5kZWZpbmVkIGlmIG5vdGhpbmcgaXMgcmVtb3ZlZC5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fcmVtb3ZlQXQgPSBmdW5jdGlvbihpbmRleCkge1xuICBpZiAoaW5kZXggPiB0aGlzLnNpemUgLSAxIHx8IGluZGV4IDwgMCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAvLyBpbXBsMTpcbiAgLy90aGlzLmFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gIC8vdGhpcy5oZWFwaWZ5KHRoaXMuYXJyYXkpO1xuICAvLyBpbXBsMjpcbiAgdGhpcy5fcGVyY29sYXRlVXAoaW5kZXgsIHRydWUpO1xuICByZXR1cm4gdGhpcy5wb2xsKCk7XG59O1xuXG4vLyByZW1vdmUobXl2YWwpIHdpbGwgcmVtb3ZlIGFuIGl0ZW0gbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHZhbHVlIGZyb20gdGhlXG4vLyBxdWV1ZSwgY2hlY2tlZCBmb3IgZXF1YWxpdHkgYnkgdXNpbmcgdGhlIHF1ZXVlJ3MgY29tcGFyYXRvci5cbi8vIHJldHVybiB0cnVlIGlmIHJlbW92ZWQsIGZhbHNlIG90aGVyd2lzZS5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihteXZhbCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgaWYgKCF0aGlzLmNvbXBhcmUodGhpcy5hcnJheVtpXSwgbXl2YWwpICYmICF0aGlzLmNvbXBhcmUobXl2YWwsIHRoaXMuYXJyYXlbaV0pKSB7XG4gICAgICAvLyBpdGVtcyBtYXRjaCwgY29tcGFyYXRvciByZXR1cm5zIGZhbHNlIGJvdGggd2F5cywgcmVtb3ZlIGl0ZW1cbiAgICAgIHRoaXMuX3JlbW92ZUF0KGkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIGludGVybmFsXG4vLyByZW1vdmVzIGFuZCByZXR1cm5zIGl0ZW1zIGZvciB3aGljaCB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnVlLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLl9iYXRjaFJlbW92ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBsaW1pdCkge1xuICAvLyBpbml0aWFsaXplIHJldHVybiBhcnJheSB3aXRoIG1heCBzaXplIG9mIHRoZSBsaW1pdCBvciBjdXJyZW50IHF1ZXVlIHNpemVcbiAgdmFyIHJldEFyciA9IG5ldyBBcnJheShsaW1pdCA/IGxpbWl0IDogdGhpcy5zaXplKTtcbiAgdmFyIGNvdW50ID0gMDtcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmIHRoaXMuc2l6ZSkge1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHRoaXMuc2l6ZSAmJiBjb3VudCA8IHJldEFyci5sZW5ndGgpIHtcbiAgICAgIGlmIChjYWxsYmFjayh0aGlzLmFycmF5W2ldKSkge1xuICAgICAgICByZXRBcnJbY291bnRdID0gdGhpcy5fcmVtb3ZlQXQoaSk7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIC8vIG1vdmUgdXAgYSBsZXZlbCBpbiB0aGUgaGVhcCBpZiB3ZSByZW1vdmUgYW4gaXRlbVxuICAgICAgICBpID0gaSA+PiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0gXG4gIH1cbiAgcmV0QXJyLmxlbmd0aCA9IGNvdW50O1xuICByZXR1cm4gcmV0QXJyO1xufVxuXG4vLyByZW1vdmVPbmUoY2FsbGJhY2spIHdpbGwgZXhlY3V0ZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbSBvZiB0aGUgcXVldWVcbi8vIGFuZCB3aWxsIHJlbW92ZSB0aGUgZmlyc3QgaXRlbSBmb3Igd2hpY2ggdGhlIGNhbGxiYWNrIHdpbGwgcmV0dXJuIHRydWUuXG4vLyByZXR1cm4gdGhlIHJlbW92ZWQgaXRlbSwgb3IgdW5kZWZpbmVkIGlmIG5vdGhpbmcgaXMgcmVtb3ZlZC5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5yZW1vdmVPbmUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICB2YXIgYXJyID0gdGhpcy5fYmF0Y2hSZW1vdmUoY2FsbGJhY2ssIDEpO1xuICByZXR1cm4gYXJyLmxlbmd0aCA+IDAgPyBhcnJbMF0gOiB1bmRlZmluZWQ7XG59O1xuXG4vLyByZW1vdmUoY2FsbGJhY2tbLCBsaW1pdF0pIHdpbGwgZXhlY3V0ZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbSBvZlxuLy8gdGhlIHF1ZXVlIGFuZCB3aWxsIHJlbW92ZSBlYWNoIGl0ZW0gZm9yIHdoaWNoIHRoZSBjYWxsYmFjayByZXR1cm5zIHRydWUsIHVwIHRvXG4vLyBhIG1heCBsaW1pdCBvZiByZW1vdmVkIGl0ZW1zIGlmIHNwZWNpZmllZCBvciBubyBsaW1pdCBpZiB1bnNwZWNpZmllZC5cbi8vIHJldHVybiBhbiBhcnJheSBjb250YWluaW5nIHRoZSByZW1vdmVkIGl0ZW1zLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlbW92ZU1hbnkgPSBmdW5jdGlvbihjYWxsYmFjaywgbGltaXQpIHtcbiAgcmV0dXJuIHRoaXMuX2JhdGNoUmVtb3ZlKGNhbGxiYWNrLCBsaW1pdCk7XG59O1xuXG4vLyBMb29rIGF0IHRoZSB0b3Agb2YgdGhlIHF1ZXVlIChvbmUgb2YgdGhlIHNtYWxsZXN0IGVsZW1lbnRzKSB3aXRob3V0IHJlbW92aW5nIGl0XG4vLyBleGVjdXRlcyBpbiBjb25zdGFudCB0aW1lXG4vL1xuLy8gQ2FsbGluZyBwZWVrIG9uIGFuIGVtcHR5IHByaW9yaXR5IHF1ZXVlIHJldHVybnNcbi8vIHRoZSBcInVuZGVmaW5lZFwiIHZhbHVlLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvdW5kZWZpbmVkXG4vL1xuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICByZXR1cm4gdGhpcy5hcnJheVswXTtcbn07XG5cbi8vIHJlbW92ZSB0aGUgZWxlbWVudCBvbiB0b3Agb2YgdGhlIGhlYXAgKG9uZSBvZiB0aGUgc21hbGxlc3QgZWxlbWVudHMpXG4vLyBydW5zIGluIGxvZ2FyaXRobWljIHRpbWVcbi8vXG4vLyBJZiB0aGUgcHJpb3JpdHkgcXVldWUgaXMgZW1wdHksIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRoZVxuLy8gXCJ1bmRlZmluZWRcIiB2YWx1ZS5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL3VuZGVmaW5lZFxuLy9cbi8vIEZvciBsb25nLXJ1bm5pbmcgYW5kIGxhcmdlIHByaW9yaXR5IHF1ZXVlcywgb3IgcHJpb3JpdHkgcXVldWVzXG4vLyBzdG9yaW5nIGxhcmdlIG9iamVjdHMsIHlvdSBtYXkgIHdhbnQgdG8gY2FsbCB0aGUgdHJpbSBmdW5jdGlvblxuLy8gYXQgc3RyYXRlZ2ljIHRpbWVzIHRvIHJlY292ZXIgYWxsb2NhdGVkIG1lbW9yeS5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5wb2xsID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnNpemUgPT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIGFucyA9IHRoaXMuYXJyYXlbMF07XG4gIGlmICh0aGlzLnNpemUgPiAxKSB7XG4gICAgdGhpcy5hcnJheVswXSA9IHRoaXMuYXJyYXlbLS10aGlzLnNpemVdO1xuICAgIHRoaXMuX3BlcmNvbGF0ZURvd24oMCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zaXplIC09IDE7XG4gIH1cbiAgcmV0dXJuIGFucztcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWRkcyB0aGUgcHJvdmlkZWQgdmFsdWUgdG8gdGhlIGhlYXAsIHdoaWxlIHJlbW92aW5nXG4vLyBhbmQgcmV0dXJuaW5nIG9uZSBvZiB0aGUgc21hbGxlc3QgZWxlbWVudHMgKGxpa2UgcG9sbCkuIFRoZSBzaXplIG9mIHRoZSBxdWV1ZVxuLy8gdGh1cyByZW1haW5zIHVuY2hhbmdlZC5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5yZXBsYWNlVG9wID0gZnVuY3Rpb24obXl2YWwpIHtcbiAgaWYgKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgYW5zID0gdGhpcy5hcnJheVswXTtcbiAgdGhpcy5hcnJheVswXSA9IG15dmFsO1xuICB0aGlzLl9wZXJjb2xhdGVEb3duKDApO1xuICByZXR1cm4gYW5zO1xufTtcblxuLy8gcmVjb3ZlciB1bnVzZWQgbWVtb3J5IChmb3IgbG9uZy1ydW5uaW5nIHByaW9yaXR5IHF1ZXVlcylcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYXJyYXkgPSB0aGlzLmFycmF5LnNsaWNlKDAsIHRoaXMuc2l6ZSk7XG59O1xuXG4vLyBDaGVjayB3aGV0aGVyIHRoZSBoZWFwIGlzIGVtcHR5XG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zaXplID09PSAwO1xufTtcblxuLy8gaXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBpbiBvcmRlciwgcGFzcyBhIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgKGl0ZW0sIGluZGV4KSBhcyBhcmdzLlxuLy8gVE9ETyBvbmNlIHdlIHRyYW5zcGlsZSwgdW5jb21tZW50XG4vLyBpZiAoU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcikge1xuLy8gICBGYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKigpIHtcbi8vICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbi8vICAgICB2YXIgZnBxID0gdGhpcy5jbG9uZSgpO1xuLy8gICAgIHdoaWxlICghZnBxLmlzRW1wdHkoKSkge1xuLy8gICAgICAgeWllbGQgZnBxLnBvbGwoKTtcbi8vICAgICB9XG4vLyAgIH07XG4vLyB9XG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIGlmICh0aGlzLmlzRW1wdHkoKSB8fCB0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuICB2YXIgaSA9IDA7XG4gIHZhciBmcHEgPSB0aGlzLmNsb25lKCk7XG4gIHdoaWxlICghZnBxLmlzRW1wdHkoKSkge1xuICAgIGNhbGxiYWNrKGZwcS5wb2xsKCksIGkrKyk7XG4gIH1cbn07XG5cbi8vIHJldHVybiB0aGUgayAnc21hbGxlc3QnIGVsZW1lbnRzIG9mIHRoZSBxdWV1ZVxuLy8gcnVucyBpbiBPKGsgbG9nIGspIHRpbWVcbi8vIHRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgcmVwZWF0ZWRseSBjYWxsaW5nIHBvbGwsIGJ1dFxuLy8gaXQgaGFzIGEgYmV0dGVyIGNvbXB1dGF0aW9uYWwgY29tcGxleGl0eSwgd2hpY2ggY2FuIGJlXG4vLyBpbXBvcnRhbnQgZm9yIGxhcmdlIGRhdGEgc2V0cy5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5rU21hbGxlc3QgPSBmdW5jdGlvbihrKSB7XG4gIGlmICh0aGlzLnNpemUgPT0gMCkgcmV0dXJuIFtdO1xuICB2YXIgY29tcGFyYXRvciA9IHRoaXMuY29tcGFyZTtcbiAgdmFyIGFyciA9IHRoaXMuYXJyYXlcbiAgdmFyIGZwcSA9IG5ldyBGYXN0UHJpb3JpdHlRdWV1ZShmdW5jdGlvbihhLGIpe1xuICAgcmV0dXJuIGNvbXBhcmF0b3IoYXJyW2FdLGFycltiXSk7XG4gIH0pO1xuICBrID0gTWF0aC5taW4odGhpcy5zaXplLCBrKTtcbiAgdmFyIHNtYWxsZXN0ID0gbmV3IEFycmF5KGspO1xuICB2YXIgaiA9IDA7XG4gIGZwcS5hZGQoMCk7XG4gIHdoaWxlIChqIDwgaykge1xuICAgIHZhciBzbWFsbCA9IGZwcS5wb2xsKCk7XG4gICAgc21hbGxlc3RbaisrXSA9IHRoaXMuYXJyYXlbc21hbGxdO1xuICAgIHZhciBsID0gKHNtYWxsIDw8IDEpICsgMTtcbiAgICB2YXIgciA9IGwgKyAxO1xuICAgIGlmIChsIDwgdGhpcy5zaXplKSBmcHEuYWRkKGwpO1xuICAgIGlmIChyIDwgdGhpcy5zaXplKSBmcHEuYWRkKHIpO1xuICB9XG4gIHJldHVybiBzbWFsbGVzdDtcbn1cblxuLy8ganVzdCBmb3IgaWxsdXN0cmF0aW9uIHB1cnBvc2VzXG52YXIgbWFpbiA9IGZ1bmN0aW9uKCkge1xuICAvLyBtYWluIGNvZGVcbiAgdmFyIHggPSBuZXcgRmFzdFByaW9yaXR5UXVldWUoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhIDwgYjtcbiAgfSk7XG4gIHguYWRkKDEpO1xuICB4LmFkZCgwKTtcbiAgeC5hZGQoNSk7XG4gIHguYWRkKDQpO1xuICB4LmFkZCgzKTtcbiAgd2hpbGUgKCF4LmlzRW1wdHkoKSkge1xuICAgIGNvbnNvbGUubG9nKHgucG9sbCgpKTtcbiAgfVxufTtcblxuaWYgKHJlcXVpcmUubWFpbiA9PT0gbW9kdWxlKSB7XG4gIG1haW4oKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYXN0UHJpb3JpdHlRdWV1ZTtcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdfQ==
>>>>>>> 5c99da831cb667d763122f4abb11a7a3318126b8
