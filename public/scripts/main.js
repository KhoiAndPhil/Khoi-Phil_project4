(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

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

    $(".results").flickity("destroy");
    $(".results").css("display", "none");

    travelApp.getStat.apply(travelApp, statsForAPICall);
  });
};

/* 4. SEND AJAX REQUEST TO INQSTATS API */

// Store important info for calls to the INQStats API.
travelApp.statKey = "5d3687c7c1788d5f";
travelApp.statURL = "http://inqstatsapi.inqubu.com";
travelApp.getStat = function (statType1, statType2, statType3) {
  $.ajax({
    url: travelApp.statURL,
    method: "GET",
    dataType: "json",
    data: {
      api_key: travelApp.statKey,
      data: "hdi," + statType1 + "," + statType2 + "," + statType3,
      cmd: "getWorldData"
    }
  }).then(function (res) {
    var _$;

    // calling the calculation function to get the top n / bottom n countries

    //finalResults holds the final 3 coutries and all of their stats
    var finalResults = travelApp.getRecommendations(res, statType1, statType2, statType3);

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

},{"fastpriorityqueue":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2Zhc3Rwcmlvcml0eXF1ZXVlL0Zhc3RQcmlvcml0eVF1ZXVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBO0FBQ0EsSUFBTSxVQUFVLFFBQVEsbUJBQVIsQ0FBaEI7O0FBRUE7QUFDQSxJQUFNLFlBQVksRUFBbEI7O0FBRUE7QUFDQSxVQUFVLFNBQVYsR0FBc0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0UsTUFBSSxpQkFETjtBQUVFLFNBQU8sQ0FDTDtBQUNFLFVBQU0sU0FEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUsMEJBSFo7QUFJRSxpQkFBYTtBQUpmLEdBREssRUFPTDtBQUNFLFVBQU0saUJBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLGlCQUhaO0FBSUUsaUJBQ0U7QUFMSixHQVBLLEVBY0w7QUFDRSxVQUFNLGtCQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSxrQkFIWjtBQUlFLGlCQUNFO0FBTEosR0FkSyxFQXFCTDtBQUNFLFVBQU0scUJBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLHFCQUhaO0FBSUUsaUJBQWE7QUFKZixHQXJCSyxFQTJCTDtBQUNFLFVBQU0sa0JBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLHlCQUhaO0FBSUUsaUJBQWE7QUFKZixHQTNCSyxFQWlDTDtBQUNFLFVBQU0scUJBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLGFBSFo7QUFJRSxpQkFBYTtBQUpmLEdBakNLO0FBRlQsQ0FIb0I7QUE4Q3BCO0FBQ0E7QUFDQTtBQUNFLE1BQUksa0JBRE47QUFFRSxTQUFPLENBQ0w7QUFDRSxVQUFNLHVCQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSx1QkFIWjtBQUlFLGlCQUFhO0FBSmYsR0FESyxFQU9MO0FBQ0UsVUFBTSxlQURSO0FBRUUs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIElNUE9SVCBIRUFQIE1PRFVMRSBGUk9NIE5QTVxuY29uc3QgTWluSGVhcCA9IHJlcXVpcmUoXCJmYXN0cHJpb3JpdHlxdWV1ZVwiKTtcblxuLy8gQ3JlYXRlIGFuIG9iamVjdCByZXByZXNlbnRpbmcgb3VyIHRyYXZlbCBhcHAgKE5BTUVTUEFDRSlcbmNvbnN0IHRyYXZlbEFwcCA9IHt9O1xuXG4vLyBBUlJBWSBXSVRIIEFMTCBSRUxFVkFOVCBTVEFUUyBGT1IgRUFDSCBQVVJQT1NFXG50cmF2ZWxBcHAuc3RhdEFycmF5ID0gW1xuICAvLyBWQUNBVElPTiBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tdmFjYXRpb25cIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlbnNpdHlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJQb3B1bGF0aW9uIERlbnNpdHkgKGxvdylcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBvcHVsYXRpb24gZGVuc2l0eSBpcyBtZWFzdXJlZCBpbiBwZXIga23Csi5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ0b3VyaXN0X2Fycml2YWxzXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVG91cmlzdCBBcnJpdmFsc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlJlcHJlc2VudHMgZm9yZWlnbiBjaXRpemVucyB0aGF0IHN0YXllZCBhdCBsZWFzdCBvbmUgbmlnaHQuIEluY2x1ZGVzIGhvdGVsIHN0YXlzLCB0cmFuc2ZlcnMsIGNvbmZlcmVuY2UgdmlzaXRzLCBldGMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidG91cmlzbV9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlRvdXJpc3QgRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGFtb3VudCBvZiBnb3Zlcm5tZW50IHNwZW5kaW5nIGRlZGljYXRlZCBmb3IgdG91cmlzbSAoaW4gJSBvZiB0aGUgR0RQIGZvciBhIGNvdW50cnkpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInVyYmFuX3BvcHVsYXRpb25cIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJVcmJhbiBQb3B1bGF0aW9uIChoaWdoKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcGVyY2VudGFnZSBvZiBwZW9wbGUgd2hvIGxpdmUgaW4gYSBjaXR5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImZvcmVzdF9hcmVhX3BlcmNlbnRcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJGb3Jlc3QgQXJlYVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdG90YWwgYW1vdW50IG9mIGZvcmVzdCBhcmVhIGluIGEgY291bnRyeSAoaW4ga23CsilcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gRURVQ0FUSU9OIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tZWR1Y2F0aW9uXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJlZHVjYXRpb25fZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJFZHVjYXRpb24gRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRWR1Y2F0aW9uIGV4cGVuZGl0dXJlIHJlcHJlc2VudHMgZ292ZXJubWVudCBzcGVuZGluZyBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJjbzJfZW1pc3Npb25zXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiQ08yIEVtaXNzaW9uc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDTzIgZW1pc3Npb25zIGluIG1ldHJpYyB0b25zIHBlciBwZXJzb24gcGVyIHllYXIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiY29ycnVwdGlvbl9pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkNvcnJ1cHRpb24gSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ29ycnVwdGlvbiBQZXJjZXB0aW9ucyBJbmRleCAoQ1BJKS4gKFNjYWxlOiAwLTEwMDsgMCA9IGhpZ2ggY29ycnVwdGlvbi4gMTAwID0gbG93IGNvcnJ1cHRpb24pLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhkaVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkh1bWFuIERldmVsb3BtZW50IEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiSW5kaWNhdG9yIG9mIGxpZmUgZXhwZWN0YW5jeSwgZWR1Y2F0aW9uLCBhbmQgcGVyIGNhcGl0YSBpbmNvbWUuIChTY2FsZTogMC0xOyAwID0gbG93IHNjb3JlLiAxID0gaGlnaCBzY29yZSkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGVhbHRoX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGVhbHRoIEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlB1YmxpYyBzcGVuZGluZyBvbiBoZWFsdGgsIG1lYXN1cmVkIGluICUgb2YgR0RQLlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBWSVNJVE9SIFZJU0EgQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi12aXNpdC12aXNhXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZWFsdGhfZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIZWFsdGggRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUHVibGljIHNwZW5kaW5nIG9uIGhlYWx0aCwgbWVhc3VyZWQgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidG91cmlzdF9hcnJpdmFsc1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlRvdXJpc3QgQXJyaXZhbHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJSZXByZXNlbnRzIGZvcmVpZ24gY2l0aXplbnMgdGhhdCBzdGF5ZWQgYXQgbGVhc3Qgb25lIG5pZ2h0LiBJbmNsdWRlcyBob3RlbCBzdGF5cywgdHJhbnNmZXJzLCBjb25mZXJlbmNlIHZpc2l0cywgZXRjLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlbnNpdHlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJQb3B1bGF0aW9uIERlbnNpdHkgKGxvdylcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBvcHVsYXRpb24gZGVuc2l0eSBpcyBtZWFzdXJlZCBpbiBwZXIga23Csi5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJjbzJfZW1pc3Npb25zXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiQ08yIEVtaXNzaW9uc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDTzIgZW1pc3Npb25zIGluIG1ldHJpYyB0b25zIHBlciBwZXJzb24gcGVyIHllYXIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaW5mbGF0aW9uXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSW5mbGF0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhbm51YWwgY2hhbmdlIG9mIGNvbnN1bWVyIHByaWNlcyAodW5pdDogJSkuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFdPUktJTkcgSE9MSURBWSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXdvcmstaG9saWRheVwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVuc2l0eVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlBvcHVsYXRpb24gRGVuc2l0eSAobG93KVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcG9wdWxhdGlvbiBkZW5zaXR5IGlzIG1lYXN1cmVkIGluIHBlciBrbcKyLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInRvdXJpc3RfYXJyaXZhbHNcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJUb3VyaXN0IEFycml2YWxzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUmVwcmVzZW50cyBmb3JlaWduIGNpdGl6ZW5zIHRoYXQgc3RheWVkIGF0IGxlYXN0IG9uZSBuaWdodC4gSW5jbHVkZXMgaG90ZWwgc3RheXMsIHRyYW5zZmVycywgY29uZmVyZW5jZSB2aXNpdHMsIGV0Yy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiYnV0dG9uLXBlcm0tc29sb1wiLFxuICAgICAgICBzdGF0OiBcImdpbmlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJHaW5pIENvZWZmaWNpZW50XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiU3RhdGVzIGhvdyB1bmlmb3JtbHkgYXNzZXRzIGFyZSBkaXN0cmlidXRlZC4gKHNjYWxlOiAwLTEwMDsgMCA9IGVxdWFsIGRpc3RyaWJ1dGlvbi4gMTAwID0gdW5lcXVhbCBkaXN0cmlidXRpb24pLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImpvYmxlc3NfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkpvYmxlc3MgUmF0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbnVtYmVyIG9mIHVuZW1wbG95ZWQgcGVvcGxlIGluIHJlbGF0aW9uIHRvIHRoZSBsYWJvciBmb3JjZSBmb3IgYSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcIm1lZGlhbndhZ2VcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJNZWRpYW4gV2FnZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkEgbWVhc3VyZSBvZiB0aGUgbW9udGhseSBtZWRpYW4gd2FnZSBiZWZvcmUgdGF4ZXMsIGluY2x1ZGluZyBwdWJsaWMgYmVuZWZpdHMgKGUuZyBjaGlsZCBhbGxvd2FuY2UpOyB1bml0OiBVU0QuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFBFUk1BTkVOVC1TT0xPIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tcGVybS1zb2xvXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZGlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIdW1hbiBEZXZlbG9wbWVudCBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkluZGljYXRvciBvZiBsaWZlIGV4cGVjdGFuY3ksIGVkdWNhdGlvbiwgYW5kIHBlciBjYXBpdGEgaW5jb21lLiAoU2NhbGU6IDAtMTsgMCA9IGxvdyBzY29yZS4gMSA9IGhpZ2ggc2NvcmUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImNvcnJ1cHRpb25faW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJDb3JydXB0aW9uIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvcnJ1cHRpb24gUGVyY2VwdGlvbnMgSW5kZXggKENQSSkuIChTY2FsZTogMC0xMDA7IDAgPSBoaWdoIGNvcnJ1cHRpb24uIDEwMCA9IGxvdyBjb3JydXB0aW9uKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJtZWRpYW53YWdlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTWVkaWFuIFdhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJBIG1lYXN1cmUgb2YgdGhlIG1vbnRobHkgbWVkaWFuIHdhZ2UgYmVmb3JlIHRheGVzLCBpbmNsdWRpbmcgcHVibGljIGJlbmVmaXRzIChlLmcgY2hpbGQgYWxsb3dhbmNlKTsgdW5pdDogVVNELlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImluZmxhdGlvblwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkluZmxhdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYW5udWFsIGNoYW5nZSBvZiBjb25zdW1lciBwcmljZXMgKHVuaXQ6ICUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ1cmJhbl9wb3B1bGF0aW9uXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVXJiYW4gUG9wdWxhdGlvbiAoaGlnaClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBlcmNlbnRhZ2Ugb2YgcGVvcGxlIHdobyBsaXZlIGluIGEgY2l0eS5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gUEVSTUFORU5ULUNPVVBMRSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXBlcm0tY291cGxlXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZGlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIdW1hbiBEZXZlbG9wbWVudCBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkluZGljYXRvciBvZiBsaWZlIGV4cGVjdGFuY3ksIGVkdWNhdGlvbiwgYW5kIHBlciBjYXBpdGEgaW5jb21lLiAoU2NhbGU6IDAtMTsgMCA9IGxvdyBzY29yZS4gMSA9IGhpZ2ggc2NvcmUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImpvYmxlc3NfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkpvYmxlc3MgUmF0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbnVtYmVyIG9mIHVuZW1wbG95ZWQgcGVvcGxlIGluIHJlbGF0aW9uIHRvIHRoZSBsYWJvciBmb3JjZSBmb3IgYSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJidXR0b24tcGVybS1zb2xvXCIsXG4gICAgICAgIHN0YXQ6IFwiZ2luaVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkdpbmkgQ29lZmZpY2llbnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJTdGF0ZXMgaG93IHVuaWZvcm1seSBhc3NldHMgYXJlIGRpc3RyaWJ1dGVkLiAoc2NhbGU6IDAtMTAwOyAwID0gZXF1YWwgZGlzdHJpYnV0aW9uLiAxMDAgPSB1bmVxdWFsIGRpc3RyaWJ1dGlvbikuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGFwcGluZXNzX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGFwcGluZXNzIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFzZWQgb24gZmFjdG9ycyBzdWNoIGFzIEdEUCBwZXIgY2FwaXRhLCBzb2NpYWwgc3VwcG9ydCwgbGlmZSBleHBlY3RhbmN5LiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhhcHBpZXIgdGhlIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVhdGhfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlJhdGUgb2YgRGVhdGhzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhdmVyYWdlIG51bWJlciBvZiBkZWF0aHMgcGVyIHllYXIgcGVyIDEsMDAwIHBlb3BsZS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZWJ0c19wZXJjZW50XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiR292ZXJubWVudCBEZWJ0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwZXJjZW50YWdlIG9mIGdvdmVybm1lbnQgYm9ycm93aW5ncyBpbiByZWxhdGlvbiB0byB0aGUgR0RQLlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBQRVJNQU5FTlQtRkFNSUxZIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tcGVybS1mYW1pbHlcIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImVkdWNhdGlvbl9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkVkdWNhdGlvbiBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFZHVjYXRpb24gZXhwZW5kaXR1cmUgcmVwcmVzZW50cyBnb3Zlcm5tZW50IHNwZW5kaW5nIGluICUgb2YgR0RQLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJsaXRlcmFjeV9yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTGl0ZXJhY3kgUmF0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcGVyY2VudGFnZSBvZiBwZW9wbGUgdGhhdCBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlYWQgYW5kIHdyaXRlIGJ5IGFnZSAxNS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJsaWZlX2V4cGVjdGFuY3lcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJMaWZlIEV4cGVjdGFuY3lcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGF2ZXJhZ2UgbnVtYmVyIG9mIHllYXJzIGEgcGVyc29uIHdpbGwgbGl2ZSAoYXQgYmlydGgpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlYXRoX3JhdGVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJSYXRlIG9mIERlYXRoc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYXZlcmFnZSBudW1iZXIgb2YgZGVhdGhzIHBlciB5ZWFyIHBlciAxLDAwMCBwZW9wbGUuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwibWVkaWFud2FnZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIk1lZGlhbiBXYWdlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQSBtZWFzdXJlIG9mIHRoZSBtb250aGx5IG1lZGlhbiB3YWdlIGJlZm9yZSB0YXhlcywgaW5jbHVkaW5nIHB1YmxpYyBiZW5lZml0cyAoZS5nIGNoaWxkIGFsbG93YW5jZSk7IHVuaXQ6IFVTRC5cIlxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuLyogMC4gR0VUIFNUQVJURUQgKi9cbnRyYXZlbEFwcC5nZXRTdGFydGVkID0gKCkgPT4ge1xuICAvLyBMaXN0ZW5zIGZvciBjbGljayBvbiBHRVQgU1RBUlRFRCBCVVRUT05cbiAgJChcIi53ZWxjb21lX19idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBTbW9vdGggc2Nyb2xsIHRvIG5leHQgc2VjdGlvblxuICAgICQoXCJodG1sLCBib2R5XCIpXG4gICAgICAuc3RvcCgpXG4gICAgICAuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChcIi5wdXJwb3NlLXNlY3Rpb25cIikub2Zmc2V0KCkudG9wIH0sIDkwMCwgXCJzd2luZ1wiKTtcbiAgfSk7XG59O1xuXG4vKiAxLiBHRVQgVVNFUiBJTlBVVCAqL1xudHJhdmVsQXBwLmdldFVzZXJQdXJwb3NlID0gKCkgPT4ge1xuICAkKFwiLnRyYXZlbC1mb3JtX19idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBTdG9yZSB1c2VyIGlucHV0IGluIHZhcmlhYmxlXG4gICAgY29uc3QgaW5wdXRJRCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xuICAgIHRyYXZlbEFwcC51c2VyUHVycG9zZSA9IGlucHV0SUQ7XG5cbiAgICAvLyBDYWxsIHRoZSBkaXNwbGF5IHN0YXRzIGZ1bmN0aW9uXG4gICAgdHJhdmVsQXBwLmRpc3BsYXlTdGF0cyh0cmF2ZWxBcHAudXNlclB1cnBvc2UpO1xuXG4gICAgLy8gRGlzcGxheSB0aGUgY3JpdGVyaWFzIHRvIGJlIGNob3NlblxuICAgICQoXCIuY3JpdGVyaWFzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xuXG4gICAgLy8gU21vb3RoIFNjcm9sbCB0byBjcml0ZXJpYSdzIHNlY3Rpb25cbiAgICAkKFwiaHRtbCwgYm9keVwiKVxuICAgICAgLnN0b3AoKVxuICAgICAgLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIuY3JpdGVyaWFzXCIpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LFxuICAgICAgICA5MDAsXG4gICAgICAgIFwic3dpbmdcIlxuICAgICAgKTtcbiAgfSk7XG59O1xuXG4vKiAyLiBESVNQTEFZIEFMTCBTVEFUUyBGT1IgVEhFIFNFTEVDVEVEIFBVUlBPU0UgT04gU0NSRUVOICovXG50cmF2ZWxBcHAuZGlzcGxheVN0YXRzID0gcHVycG9zZUlEID0+IHtcbiAgJChcIi5jaG9pY2VzXCIpLmVtcHR5KCk7XG4gIC8vIEhlYWRlciBmb3IgdGhlIGNob29zZSBDcml0ZXJpYSBzZWN0aW9uXG4gICQoXCIuY3JpdGVyaWEtaGVhZGVyXCIpLnRleHQoXG4gICAgXCJQbGVhc2UgcmFuayB0aGUgZm9sbG93aW5nIGNyaXRlcmlhIGluIG9yZGVyIG9mIGltcG9ydGFuY2UgZnJvbSB0b3AgdG8gYm90dG9tLiBVc2UgeW91ciBjdXJzb3IgdG8gZHJhZyBhbmQgZHJvcCB0aGUgaXRlbXMuXCJcbiAgKTtcbiAgLy8gQWRkIGNzcyBwb3NpdGlvbiB0byBjcml0ZXJpYSBjb250YWluZXJcbiAgJChcIi5jaG9pY2VzLWxpc3QtY29udGFpbmVyXCIpLmNzcyhcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XG5cbiAgLy8gR28gdGhyb3VnaCBlYWNoIHB1cnBvc2Ugb2JqZWN0IGluIHRoZSBTdGF0IEFycmF5XG4gIHRyYXZlbEFwcC5zdGF0QXJyYXkuZm9yRWFjaChwdXJwb3NlT2JqID0+IHtcbiAgICAvLyBJZiB0aGUgcHVycG9zZSBJRCBtYXRjaGVzIHRoZSBwdXJwb3NlIE9iamVjdCBpZFxuICAgIGlmIChwdXJwb3NlSUQgPT09IHB1cnBvc2VPYmouaWQpIHtcbiAgICAgIC8vIEdvIHRocm91Z2ggZXZlcnkgc3RhdCBmb3IgdGhpcyBwdXJwb3NlXG4gICAgICBwdXJwb3NlT2JqLnN0YXRzLmZvckVhY2goc3RhdCA9PiB7XG4gICAgICAgIC8vIEFwcGVuZCBlYWNoIG9mIHRoZSBzdGF0IG5hbWUgb24gc2NyZWVuIGZvciB0aGUgdXNlciB0byByYW5rXG4gICAgICAgIGxldCBtYXJrVXBJdGVtID0gJChcIjxsaT5cIilcbiAgICAgICAgICAuYXR0cihcImlkXCIsIHN0YXQuc3RhdClcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJjcml0ZXJpYVwiKVxuICAgICAgICAgIC50ZXh0KHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAkKFwiLmNob2ljZXNcIikuYXBwZW5kKG1hcmtVcEl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBhcHBlbmQgc3VibWl0IGJ1dHRvblxuICBsZXQgbWFya1VwQnV0dG9uID0gYDxsaT48YnV0dG9uIGNsYXNzPVwidXNlci1zdWJtaXQgYnRuXCI+U3VibWl0IFJhbmtpbmc8L2J1dHRvbj48L2xpPmA7XG4gICQoXCIuY2hvaWNlc1wiKS5hcHBlbmQobWFya1VwQnV0dG9uKTtcblxuICB0cmF2ZWxBcHAuZ2V0VXNlclJhbmtpbmdzKCk7XG59O1xuXG4vKiAzLiBPQlRBSU4gVEhFIFJBTktJTkcgT0YgVEhFIFNUQVRTIEZST00gVVNFUiAqL1xudHJhdmVsQXBwLmdldFVzZXJSYW5raW5ncyA9ICgpID0+IHtcbiAgJChcIi5jaG9pY2VzXCIpLm9uKFwiY2xpY2tcIiwgXCIudXNlci1zdWJtaXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gcmVtb3ZlIHN1Ym1pdCBidXR0b24gYW5kIHB1dCBhIGxvYWRlciB1bnRpbCB0aGUgcmVzdWx0cyBjb21lIGJhY2tcbiAgICAvLyAuaHRtbChgPGltZyBjbGFzcz1cImxvYWRlclwiIHNyYz1cIi4uLy4uL2Fzc2V0cy9zcGlubmVyLTFzLTEwMHB4LnN2Z1wiPmApO1xuICAgICQoXCIuY2hvaWNlc1wiKS5maW5kKFxuICAgICAgXCJsaTpsYXN0LWNoaWxkXCJcbiAgICApLmh0bWwoYDxzdmcgY2xhc3M9XCJsZHMtc3Bpbm5lciBsb2FkZXJcIiB3aWR0aD1cIjEwMHB4XCIgIGhlaWdodD1cIjEwMHB4XCIgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIiBzdHlsZT1cImJhY2tncm91bmQ6IG5vbmU7XCI+PGcgdHJhbnNmb3JtPVwicm90YXRlKDAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC45MTY2NjY2NjY2NjY2NjY2c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgzMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjgzMzMzMzMzMzMzMzMzMzRzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDYwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNzVzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDkwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNjY2NjY2NjY2NjY2NjY2NnNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMTIwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNTgzMzMzMzMzMzMzMzMzNHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMTUwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMTgwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNDE2NjY2NjY2NjY2NjY2N3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMjEwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuMzMzMzMzMzMzMzMzMzMzM3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMjQwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuMjVzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDI3MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjE2NjY2NjY2NjY2NjY2NjY2c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgzMDAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC4wODMzMzMzMzMzMzMzMzMzM3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzMwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48L3N2Zz5gKTtcblxuICAgIC8vIGdldCB0aGUgdXNlciByYW5raW5ncyBmcm9tIGhpcyBvcmRlcmluZyBvZiBzdGF0cyBhbmQgc3RvcmUgaW4gYSB2YXJpYWJsZVxuICAgIGxldCB1c2VyUmFua2luZ3MgPSAkKFwiLmNob2ljZXNcIilbMF0uY2hpbGRyZW47XG5cbiAgICAvLyBpbml0aWFsaXplIGFuIGVtcHR5IGFycmF5IHRvIHN0b3JlIHRoZSB0b3AgMyByYW5raW5nc1xuICAgIGxldCBzdGF0c0ZvckFQSUNhbGwgPSBbXTtcblxuICAgIC8vIGdldCBmaXJzdCB0b3AgMyByYW5raW5ncyAoc3RhdHMgaW4gMXN0LCAybmQgYW5kIDNyZCBwb3NpdGlvbnMpXG4gICAgLy8gYW5kIHN0b3JlIHRoZW0gaW5zaWRlIGFuIGFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIHN0YXRzRm9yQVBJQ2FsbC5wdXNoKHVzZXJSYW5raW5nc1tpXS5pZCk7XG4gICAgfVxuXG4gICAgLy8gSU5JVElBTElaRSBBTEwgR0xPQkFMIFZBUklBQkxFUyBGT1IgRElTUExBWSBBVCBUSEUgRU5EXG4gICAgdHJhdmVsQXBwLndpa2lFeHRyYWN0ID0gW107XG4gICAgdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLnN0YXRDb2RlQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAud2lraVByb21pc2VBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5waXhhUHJvbWlzZUFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLmltYWdlQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAuaW1hZ2VUZXh0QXJyYXkgPSBbXTtcblxuICAgICQoXCIucmVzdWx0c1wiKS5mbGlja2l0eShcImRlc3Ryb3lcIik7XG4gICAgJChcIi5yZXN1bHRzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXG4gICAgdHJhdmVsQXBwLmdldFN0YXQoLi4uc3RhdHNGb3JBUElDYWxsKTtcbiAgfSk7XG59O1xuXG4vKiA0LiBTRU5EIEFKQVggUkVRVUVTVCBUTyBJTlFTVEFUUyBBUEkgKi9cblxuLy8gU3RvcmUgaW1wb3J0YW50IGluZm8gZm9yIGNhbGxzIHRvIHRoZSBJTlFTdGF0cyBBUEkuXG50cmF2ZWxBcHAuc3RhdEtleSA9IFwiNWQzNjg3YzdjMTc4OGQ1ZlwiO1xudHJhdmVsQXBwLnN0YXRVUkwgPSBcImh0dHA6Ly9pbnFzdGF0c2FwaS5pbnF1YnUuY29tXCI7XG50cmF2ZWxBcHAuZ2V0U3RhdCA9IChzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKSA9PiB7XG4gICQuYWpheCh7XG4gICAgdXJsOiB0cmF2ZWxBcHAuc3RhdFVSTCxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgIGRhdGE6IHtcbiAgICAgIGFwaV9rZXk6IHRyYXZlbEFwcC5zdGF0S2V5LFxuICAgICAgZGF0YTogYGhkaSwke3N0YXRUeXBlMX0sJHtzdGF0VHlwZTJ9LCR7c3RhdFR5cGUzfWAsXG4gICAgICBjbWQ6IFwiZ2V0V29ybGREYXRhXCJcbiAgICB9XG4gIH0pLnRoZW4ocmVzID0+IHtcbiAgICAvLyBjYWxsaW5nIHRoZSBjYWxjdWxhdGlvbiBmdW5jdGlvbiB0byBnZXQgdGhlIHRvcCBuIC8gYm90dG9tIG4gY291bnRyaWVzXG5cbiAgICAvL2ZpbmFsUmVzdWx0cyBob2xkcyB0aGUgZmluYWwgMyBjb3V0cmllcyBhbmQgYWxsIG9mIHRoZWlyIHN0YXRzXG4gICAgbGV0IGZpbmFsUmVzdWx0cyA9IHRyYXZlbEFwcC5nZXRSZWNvbW1lbmRhdGlvbnMocmVzLCBzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKTtcblxuICAgIC8vIEdldCB3aWtpIGFuZCBwaXhhIGV4dHJhY3RzIGZvciBlYWNoIGNvdW50cnlcbiAgICBmaW5hbFJlc3VsdHMuZm9yRWFjaChjb3VudHJ5T2JqID0+IHtcbiAgICAgIC8vIGdldCB3aWtpIGV4dHJhY3RzIGFuZCBwdXQgcHJvbWlzZXMgaW50byBhcnJheVxuICAgICAgdHJhdmVsQXBwLndpa2lQcm9taXNlQXJyYXkucHVzaCh0cmF2ZWxBcHAuZ2V0V2lraShjb3VudHJ5T2JqLmNvdW50cnlOYW1lKSk7XG5cbiAgICAgIC8vIGdldCBwaXhhIGV4dHJhY3RzIGFuZCBwdXQgcHJvbWlzZXMgaW50byBhcnJheVxuICAgICAgdHJhdmVsQXBwLnBpeGFQcm9taXNlQXJyYXkucHVzaCh0cmF2ZWxBcHAuZ2V0UGl4YShjb3VudHJ5T2JqLmNvdW50cnlOYW1lKSk7XG4gICAgfSk7XG5cbiAgICAvLyB3aGVuIGFsbCB3aWtpIGFuZCBwaXhhIHByb21pc2VzIGFyZSBmdWxmaWxsZWQsIHN0b3JlIHRoZSByZXN1bHRzXG4gICAgLy8gdG8gcHJlcGFyZSB0aGVtIGZvciBkaXNwbGF5XG4gICAgJC53aGVuKC4uLnRyYXZlbEFwcC53aWtpUHJvbWlzZUFycmF5LCAuLi50cmF2ZWxBcHAucGl4YVByb21pc2VBcnJheSkudGhlbigoLi4ud2lraVBpeGFSZXN1bHRzKSA9PiB7XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSB3aWtpUGl4YSByZXN1bHRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpa2lQaXhhUmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBmaXJzdCB0aHJlZSBhcmUgd2lraSwgcHVzaCAoc3RvcmUpIGludG8gYXJyYXlcbiAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0b3JlV2lraSh3aWtpUGl4YVJlc3VsdHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxhc3QgdGhyZWUgYXJlIHBpeGEsIHB1c2ggKHN0b3JlKSBpbnRvIGFycmF5XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRyYXZlbEFwcC5zdG9yZVBpeGEod2lraVBpeGFSZXN1bHRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPbmNlIHJlc3VsdHMgYWxsIHN0b3JlZCwgZGlzcGxheSBhbGwgaW5mbyBvbiBzY3JlZW4gKDMgY291bnRyaWVzLCB3aWtpIGFuZCBwaXhhKVxuICAgICAgdHJhdmVsQXBwLmRpc3BsYXlEZXN0aW5hdGlvbnMoZmluYWxSZXN1bHRzLCBbc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlM10pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qIDUuIFNUQVJUIENBTENVTEFUSU9OIEZPUiAzIFJFQ09NTUVOREVEIENPVU5UUklFUyAqL1xudHJhdmVsQXBwLmdldFJlY29tbWVuZGF0aW9ucyA9IChyZXMsIHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpID0+IHtcbiAgLy8gRmluZCBkaXJlY3Rpb24gb2YgZWFjaCBzdGF0IHR5cGUgYW5kIHJldHVybiBpdCBpbiBhbiBhcnJheVxuICBsZXQgYXJyRGlyZWN0aW9ucyA9IHRyYXZlbEFwcC5maW5kRGlyZWN0aW9ucyhzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKTtcblxuICAvLyBJbml0aWFsaXplIGFycmF5cyBhbmQgbnVtYmVycyBmb3IgZWFjaCByb3VuZCBvZiBpdGVyYXRpb24vZmlsdGVyaW5nXG4gIGxldCBpbml0aWFsQXJyID0gW107XG4gIGxldCBhcnIxID0gW107XG4gIGxldCBhcnIyID0gW107XG4gIGxldCBhcnIzID0gW107XG4gIGxldCBpbml0aWFsSXRlciA9IDYwO1xuICBsZXQgaXRlcmF0aW9uMSA9IDEwO1xuICBsZXQgaXRlcmF0aW9uMiA9IDU7XG4gIGxldCBpdGVyYXRpb24zID0gMztcblxuICAvL0luaXRpYWwgZmlsdGVyIHRvIGFjY291bnQgZm9yIHJlYWxpc3RpYyByZXN1bHRzIChiYXNlZCBvbiBIREkpXG4gIGluaXRpYWxBcnIgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyhyZXMsIFwiaGRpXCIsIFwibWF4XCIsIGluaXRpYWxJdGVyKTtcblxuICAvLyBJVEVSQVRJT04gMVxuICBhcnIxID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMoaW5pdGlhbEFyciwgc3RhdFR5cGUxLCBhcnJEaXJlY3Rpb25zWzBdLCBpdGVyYXRpb24xKTtcblxuICAvLyBJVEVSQVRJT04gMlxuICBhcnIyID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMoYXJyMSwgc3RhdFR5cGUyLCBhcnJEaXJlY3Rpb25zWzFdLCBpdGVyYXRpb24yKTtcblxuICAvLyBJVEVSQVRJT04gM1xuICBhcnIzID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMoYXJyMiwgc3RhdFR5cGUzLCBhcnJEaXJlY3Rpb25zWzJdLCBpdGVyYXRpb24zKTtcblxuICAvLyByZXR1cm4gdGhlIGFycmF5IHdpdGggdGhlIGZpbmFsIHJlc3VsdHNcbiAgcmV0dXJuIGFycjM7XG59O1xuXG4vKiA1LjEgRklORCBNSU4vTUFYIEZPUiBFQUNIIFNUQVQgVFlQRSAqL1xudHJhdmVsQXBwLmZpbmREaXJlY3Rpb25zID0gKHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpID0+IHtcbiAgLy8gRmluZCB3aGV0aGVyIGVhY2ggc3RhdHR5cGUgaXMgbWF4IG9yIG1pblxuICBsZXQgc3RhdDFEaXJlY3Rpb24gPSBcIlwiO1xuICBsZXQgc3RhdDJEaXJlY3Rpb24gPSBcIlwiO1xuICBsZXQgc3RhdDNEaXJlY3Rpb24gPSBcIlwiO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgU3RhdCBBcnJheSB0byBmaW5kIGRpcmVjdGlvbiBvZiBzdGF0dHlwZXNcbiAgdHJhdmVsQXBwLnN0YXRBcnJheS5mb3JFYWNoKHB1cnBvc2UgPT4ge1xuICAgIC8vIGlmIHRoZSBjdXJyZW50IHB1cnBvc2UgbWF0Y2hlcyB0aGUgdXNlciBwdXJwb3NlLFxuICAgIGlmIChwdXJwb3NlLmlkID09PSB0cmF2ZWxBcHAudXNlclB1cnBvc2UpIHtcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIHN0YXRzIGFycmF5IG9mIHRoYXQgcHVycG9zZSBvYmplY3RcbiAgICAgIHB1cnBvc2Uuc3RhdHMuZm9yRWFjaChzdGF0ID0+IHtcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RhdCBpbiB0aGUgc3RhdHMgYXJyYXkgaXMgc3RhdHR5cGUxLCBnZXQgdGhpcyBkaXJlY3Rpb25cbiAgICAgICAgaWYgKHN0YXQuc3RhdCA9PT0gc3RhdFR5cGUxKSB7XG4gICAgICAgICAgc3RhdDFEaXJlY3Rpb24gPSBzdGF0LmRpcmVjdGlvbjtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdENvZGVBcnJheS5wdXNoKHN0YXQuc3RhdCk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5LnB1c2goc3RhdC5zdGF0TmFtZSk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5LnB1c2goc3RhdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RhdCBpbiB0aGUgc3RhdHMgYXJyYXkgaXMgc3RhdHR5cGUyLCBnZXQgdGhpcyBkaXJlY3Rpb25cbiAgICAgICAgZWxzZSBpZiAoc3RhdC5zdGF0ID09PSBzdGF0VHlwZTIpIHtcbiAgICAgICAgICBzdGF0MkRpcmVjdGlvbiA9IHN0YXQuZGlyZWN0aW9uO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0Q29kZUFycmF5LnB1c2goc3RhdC5zdGF0KTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXkucHVzaChzdGF0LnN0YXROYW1lKTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXkucHVzaChzdGF0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGF0IGluIHRoZSBzdGF0cyBhcnJheSBpcyBzdGF0dHlwZTMsIGdldCB0aGlzIGRpcmVjdGlvblxuICAgICAgICBlbHNlIGlmIChzdGF0LnN0YXQgPT09IHN0YXRUeXBlMykge1xuICAgICAgICAgIHN0YXQzRGlyZWN0aW9uID0gc3RhdC5kaXJlY3Rpb247XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXRDb2RlQXJyYXkucHVzaChzdGF0LnN0YXQpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheS5wdXNoKHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheS5wdXNoKHN0YXQuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbc3RhdDFEaXJlY3Rpb24sIHN0YXQyRGlyZWN0aW9uLCBzdGF0M0RpcmVjdGlvbl07XG59O1xuXG4vKiA1LjIgRlVOQ1RJT04gVE8gREVURVJNSU5FIFdIRVRIRVIgVEhFIFRPUCBPUiBCT1RUT00gU0NPUkVTIFNIT1VMRCBCRSBGT1VORCAqL1xudHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMgPSAoYXJyYXksIHN0YXRUeXBlLCBkaXJlY3Rpb24sIGl0ZXJhdGlvbk51bWJlcikgPT4ge1xuICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcbiAgLy8gaWYgd2Ugd2FudCBUT1AgbnVtYmVyc1xuICBpZiAoZGlyZWN0aW9uID09PSBcIm1heFwiKSB7XG4gICAgcmVzdWx0QXJyYXkgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lTkNvdW50cmllcyhhcnJheSwgc3RhdFR5cGUsIGl0ZXJhdGlvbk51bWJlciwgMSk7XG4gIH1cbiAgLy8gaWYgd2Ugd2FudCBCT1QgbnVtYmVyc1xuICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwibWluXCIpIHtcbiAgICByZXN1bHRBcnJheSA9IHRyYXZlbEFwcC5kZXRlcm1pbmVOQ291bnRyaWVzKGFycmF5LCBzdGF0VHlwZSwgaXRlcmF0aW9uTnVtYmVyLCAtMSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdEFycmF5O1xufTtcblxuLyogNS4zIENBTENVTEFURSBUSEUgTiBDT1VOVFJJRVMgKi9cbnRyYXZlbEFwcC5kZXRlcm1pbmVOQ291bnRyaWVzID0gKHJlc3VsdCwgc3RhdFR5cGUsIG4sIGRpcmVjdGlvbikgPT4ge1xuICAvLyBpbml0aWFsaXplIGEgaGVhcCBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHRoZSBuIGxhcmdlc3Qvc21hbGxlc3Qgc3RhdCBzY29yZXNcbiAgbGV0IGhlYXAgPSBuZXcgTWluSGVhcCgpO1xuXG4gIC8vIGluaXRpYWxpemUgYSBzZWNvbmRhcnkgYXJyYXkgdG8ga2VlcCB0cmFjayBvZiB0aGUgbiBzY29yZXMgQU5EXG4gIC8vIHRoZSBhc3NvY2lhdGVkIGNvdW50cnkgdG8gZWFjaCBzY29yZVxuICBsZXQgbkNvdW50cmllcyA9IFtdO1xuXG4gIC8vIHN0b3JlIHRoZSBzdGF0IHR5cGUgaW50byBhIHByb3BlcnR5IHZhcmlhYmxlIGZvciBlYXNpZXIgdXNlXG4gIGxldCBwcm9wZXJ0eSA9IHN0YXRUeXBlO1xuXG4gIC8vIHN0YXJ0IGEgY291bnRyeSBjb3VudGVyIGF0IDAganVzdCBmb3IgdGhlIHNha2Ugb2YgYWRkaW5nIHRoZSBmaXJzdCBuIGNvdW50cmllcyBpbnRvIHRoZSBoZWFwXG4gIGxldCBjb3VudHJ5Q291bnRlciA9IDA7XG5cbiAgLy8gZ28gdGhyb3VnaCBlYWNoIGNvdW50cnkgZnJvbSB0aGUgcmVzdWx0cyBvZiB0aGUgQUpBWCBjYWxsIHRvIElOUVN0YXRzXG4gIHJlc3VsdC5tYXAoY291bnRyeSA9PiB7XG4gICAgLy8gc3RvcmUgdGhlIHN0YXQgc2NvcmUgYW5kIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IGNvdW50cnkgaW4gdmFyaWFibGVzLlxuICAgIC8vIElNUE9SVEFOVDogbXVsdGlwbHkgYnkgZGlyZWN0aW9uIHRvIGltcGxlbWVudCBtYXgvbWluIGhlYXBcbiAgICAvLyBhIGRpcmVjdGlvbiBvZiAxID0gd2Ugd2FudCBtYXhpbXVtIHNjb3Jlc1xuICAgIC8vIGEgZGlyZWN0aW9uIG9mIC0xID0gd2Ugd2FudCBtaW5pbXVtIHNjb3Jlc1xuICAgIGxldCBzdGF0ID0gTnVtYmVyKGNvdW50cnlbcHJvcGVydHldKSAqIGRpcmVjdGlvbjtcblxuICAgIC8vIGlmIGl0J3MgdGhlIGZpcnN0IG4gY291bnRyaWVzIGZyb20gdGhlIHJlc3VsdCwgbm8gd29yayByZXF1aXJlZC4gSnVzdCBhZGQgdGhlbSBkaXJlY3RseSBpbnRvIGJvdGggdGhlIGhlYXAgYW5kIG5Db3VudHJpZXMgdmFyaWFibGVzXG4gICAgaWYgKGNvdW50cnlDb3VudGVyIDwgbikge1xuICAgICAgaGVhcC5hZGQoc3RhdCk7XG4gICAgICBuQ291bnRyaWVzLnB1c2goY291bnRyeSk7XG5cbiAgICAgIC8vIGluY3JlbWVudCBjb3VudHJ5Q291bnRlciB0byBrbm93IHdoZW4gd2UncmUgcGFzdCB0aGUgZmlyc3QgbiBjb3VudHJpZXNcbiAgICAgIGNvdW50cnlDb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENPTkRJVElPTiBUTyBDSEVDSyBJRiB0aGUgY3VycmVudCBjb3VudHJ5IHN0YXQgaXMgZ3JlYXRlci9zbWFsbGVyIHRoYW4gYW55IG9mIHRoZSBjdXJyZW50IHN0YXRzIGluIHRoZSBjdXJyZW50IG4gY291bnRyaWVzXG4gICAgICBpZiAoc3RhdCA+IGhlYXAucGVlaygpKSB7XG4gICAgICAgIC8vIGlmIHNvLCBmaW5kIHRoZSBsb2NhdGlvbiBvZiB0aGUgc21hbGxlc3QvbGFyZ2VzdCBzdGF0IHNjb3JlIGluIHRoZSBjdXJyZW50IG5Db3VudHJpZXMgYXJyYXkgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgbmV3IHN0YXQgYW5kIGl0cyBhc3NvY2lhdGVkIGNvdW50cnlcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBuQ291bnRyaWVzLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgLy8gbXVsdGlwbHkgYnkgZGlyZWN0aW9uIGFnYWluIHRvIGNvbXBhcmUgcHJvcGVybHkgd2l0aCB0aGUgaGVhcFxuICAgICAgICAgIGxldCBjdXJyZW50U3RhdCA9IE51bWJlcihuQ291bnRyaWVzW21dW3Byb3BlcnR5XSkgKiBkaXJlY3Rpb247XG4gICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ID09PSBoZWFwLnBlZWsoKSkge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBjb3VudHJ5XG4gICAgICAgICAgICBuQ291bnRyaWVzLnNwbGljZShtLCAxLCBjb3VudHJ5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgc21hbGxlc3QvbGFyZ2VzdCBzdGF0IHNjb3JlIGZyb20gdGhlIGhlYXAgYXMgd2VsbFxuICAgICAgICBoZWFwLnBvbGwoKTtcblxuICAgICAgICAvLyBhZGQgdGhlIG5ldyBzbWFsbGVzdC9sYXJnZXN0IHNjb3JlIG9udG8gdGhlIGhlYXBcbiAgICAgICAgaGVhcC5hZGQoc3RhdCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLy8gcmV0dXJuIG4gY291bnRyaWVzXG4gIHJldHVybiBuQ291bnRyaWVzO1xufTtcblxuLyogNi4gU0VORCBBUEkgUkVRVUVTVFMgVE8gV0lLSSBBTkQgUElYQSAqL1xuXG4vLyA2LjEgV0lLSVBFRElBIEFQSTogR0VUIEFORCBTVE9SRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTdG9yZSBpbXBvcnRhbnQgaW5mbyBmb3IgY2FsbHMgdG8gdGhlIFdpa2kgQVBJLlxudHJhdmVsQXBwLndpa2lVUkwgPSBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHBcIjtcbi8vIEdldCBpbmZvIGZyb20gV2lraXBlZGlhIChBSkFYKVxudHJhdmVsQXBwLmdldFdpa2kgPSBjb3VudHJ5ID0+IHtcbiAgLy8gZ2V0IGV4dHJhY3RcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdXJsOiB0cmF2ZWxBcHAud2lraVVSTCxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICBkYXRhOiB7XG4gICAgICBhY3Rpb246IFwicXVlcnlcIixcbiAgICAgIHByb3A6IFwiZXh0cmFjdHNcIixcbiAgICAgIHRpdGxlczogY291bnRyeSxcbiAgICAgIGZvcm1hdDogXCJqc29uXCIsXG4gICAgICBleGxpbWl0OiAxLFxuICAgICAgZXhjaGFyczogMjgwLFxuICAgICAgZXhpbnRybzogdHJ1ZSxcbiAgICAgIGV4cGxhaW50ZXh0OiB0cnVlLFxuICAgICAgcmVkaXJlY3RzOiAxXG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFN0b3JlIFdpa2lwZWRpYSBjb3VudHJ5IGV4dHJhY3RcbnRyYXZlbEFwcC5zdG9yZVdpa2kgPSByZXN1bHQgPT4ge1xuICAvLyBUaGlzIHZhcmlhYmxlIHN0b3JlcyB0aGUgb2JqZWN0IHRoYXQgaG9sZHMgYSBrZXkgbmFtZSB1bmlxdWUgdG8gZXZlcnkgY291bnRyeS4gVGhlIHZhbHVlIG9mIHRoaXMga2V5IGlzIGFuIG9iamVjdCB0aGF0IGhvbGRzIHRoZSBleHRhY3QuXG4gIGNvbnN0IHdpa2lFeHRyYWN0T2JqZWN0ID0gcmVzdWx0WzBdLnF1ZXJ5LnBhZ2VzO1xuICAvLyBJZiB3ZSBjb252ZXJ0IHRoZSBhYm92ZSBvYmplY3QgaW50byBhbiBhcnJheSwgdGhlIGV4dHJhY3QgY2FuIGJlIGFjY2Vzc2VkIG9uIHRoZSBmaXJzdCB2YWx1ZSBvZiB0aGUgYXJyYXkuIFRoaXMgdmFyaWFibGUgaG9sZHMgdGhlIHdpa2kgZXh0cmFjdC5cbiAgdHJhdmVsQXBwLndpa2lFeHRyYWN0LnB1c2goT2JqZWN0LnZhbHVlcyh3aWtpRXh0cmFjdE9iamVjdClbMF0uZXh0cmFjdCk7XG59O1xuXG4vLyA2LjIgUElYQUJBWSBBUEk6IEdFVCBBTkQgU1RPUkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0b3JlIGltcG9ydGFudCBpbmZvIGZvciBjYWxscyB0byB0aGUgUGl4YWJheSBBUEkuXG50cmF2ZWxBcHAucGl4YUtleSA9IFwiOTg3OTU3MS1lNGNiYmVmM2U2OTJhYTE1YTI0YTcxMTliXCI7XG50cmF2ZWxBcHAucGl4YVVSTCA9IFwiaHR0cHM6Ly93d3cucGl4YWJheS5jb20vYXBpL1wiO1xuLy8gR2V0IGluZm8gZnJvbSBXaWtpcGVkaWEgKEFKQVgpXG50cmF2ZWxBcHAuZ2V0UGl4YSA9IGNvdW50cnkgPT4ge1xuICAvLyBHZXQgaW1hZ2UgVVJMXG4gIHJldHVybiAkLmFqYXgoe1xuICAgIHVybDogdHJhdmVsQXBwLnBpeGFVUkwsXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGRhdGFUeXBlOiBcImpzb25wXCIsXG4gICAgZGF0YToge1xuICAgICAga2V5OiB0cmF2ZWxBcHAucGl4YUtleSxcbiAgICAgIHE6IGNvdW50cnksXG4gICAgICBwZXJfcGFnZTogMTVcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gU3RvcmUgUGl4YWJheSBjb3VudHJ5IGltYWdlcyBvbiB0aGUgcGFnZVxudHJhdmVsQXBwLnN0b3JlUGl4YSA9IHJlc3VsdHMgPT4ge1xuICAvLyBTdG9yZSB0aGUgYXJyYXkgdGhhdCBob2xkcyB0aGUgaW1hZ2UgVVJMcyBpbiBhbiBhcnJheVxuICBjb25zdCByZXN1bHRzQXJyYXkgPSByZXN1bHRzWzBdLmhpdHM7XG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgcmVzdWx0cyBhcnJheSBhbmQgcHVzaCBhbGwgaW1hZ2VzIGludG8gdGhlIGltYWdlQXJyYXlcbiAgcmVzdWx0c0FycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gQXJyYXkgb2YgaW1hZ2VzIGZvciBlYWNoIGNvdW50cnlcbiAgICB0cmF2ZWxBcHAuaW1hZ2VBcnJheS5wdXNoKGl0ZW0ubGFyZ2VJbWFnZVVSTCk7XG4gICAgLy8gQXJyYXkgb2YgaW1hZ2UgaW5mb3JtYXRpb24gZnJvbSBlYWNoIGNvdW50cnkgdG8gYmUgdXNlZCBmb3IgQWx0IHRleHRcbiAgICB0cmF2ZWxBcHAuaW1hZ2VUZXh0QXJyYXkucHVzaChpdGVtLnRhZ3MpO1xuICB9KTtcbn07XG5cbi8qIDcuIERJU1BMQVkgREVTVElPTkFUSU9OUyBPTiBTQ1JFRU4gV0lUSCBXSUtJICsgUElYQSBSRVNVTFRTICovXG50cmF2ZWxBcHAuZGlzcGxheURlc3RpbmF0aW9ucyA9IChyZXN1bHRzLCBzdGF0Q2hvaWNlcykgPT4ge1xuICAvLyBHZXQgcmlkIG9mIHByZXZpb3VzIGNsaWNrZWQgcmVzdWx0c1xuICAkKFwiLnJlc3VsdHNcIikuZW1wdHkoKTtcbiAgLy8gR28gdGhyb3VnaCBlYWNoIGNvdW50cnkgcmVzdWx0IGFuZCBidWlsZCB0aGUgc3RyaW5nIGxpdGVyYWwgdG8gYXBwZW5kIHRvIHRoZSBwYWdlXG4gIGxldCBjb3VudHJ5Q291bnRlciA9IDA7XG4gIGxldCBpbWFnZUNvdW50ZXIgPSAwO1xuICByZXN1bHRzLmZvckVhY2goY291bnRyeSA9PiB7XG4gICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIGFsbCBlbGVtZW50cyBmb3Igb25lIGNvdW50cnkgcmVzdWx0XG4gICAgbGV0IGNvdW50cnlDb250YWluZXJFbGVtZW50ID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJyZXN1bHQtY29udGFpbmVyXCIpXG4gICAgICAvLyBhc3NpZ24gcmFuZG9tIHBpeGEgaW1hZ2Ugb2YgY291bnRyeSB0byB0aGUgcmVzdWx0IGJhY2tncm91bmRcbiAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGB1cmwoXCIke3RyYXZlbEFwcC5pbWFnZUFycmF5W3RyYXZlbEFwcC5yYW5kb21pemUoaW1hZ2VDb3VudGVyLCBpbWFnZUNvdW50ZXIgKyAxNSldfVwiKWApO1xuICAgIC8vIFRoaXMgZWxlbWVudCB3aWxsIGhvbGQgYWxsIHRleHQgYW5kIGltYWdlKHMpIHJlZmVycmluZyB0byB0aGUgY291bnRyeSByZXN1bHRcbiAgICBsZXQgY291bnRyeUNhcmRFbGVtZW50ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiY2FyZFwiKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIG5hbWUgb2YgdGhlIGNvdW50cnlcbiAgICBsZXQgY291bnRyeU5hbWVFbGVtZW50ID0gJChcIjxoMj5cIilcbiAgICAgIC5hZGRDbGFzcyhcImNvdW50cnktbmFtZVwiKVxuICAgICAgLnRleHQoYCR7Y291bnRyeS5jb3VudHJ5TmFtZX1gKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjb3VudHJ5LCB0YWtlbiBmcm9tIHRoZSB3aWtpIEFQSVxuICAgIGxldCBjb3VudHJ5RGVzY3JpcHRpb25FbGVtZW50ID0gJChcIjxwPlwiKVxuICAgICAgLmFkZENsYXNzKFwid2lraS10ZXh0XCIpXG4gICAgICAudGV4dCh0cmF2ZWxBcHAud2lraUV4dHJhY3RbY291bnRyeUNvdW50ZXJdKTtcbiAgICBjb3VudHJ5Q291bnRlcisrO1xuICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgdGV4dCBmb3IgZWFjaCBvZiB0aGUgdGhyZWUgc3RhdHMgd2UncmUgZGlzcGxheWluZ1xuICAgIGxldCBzdGF0TGlzdEVsZW1lbnQgPSAkKFwiPHVsPlwiKS5hZGRDbGFzcyhcInN0YXQtbGlzdFwiKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIGNvbnRhaW5lciB0aGF0IHdpbGwgaG9sZCB0aGUgc21hbGwgcGl4YSBjb3VudHJ5IGltYWdlXG4gICAgbGV0IHNtYWxsUGl4YUNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJjb3VudHJ5LWltYWdlLWNvbnRhaW5lclwiKTtcbiAgICAvLyBUaGlzIG5ldyBpbWFnZSBjb3VudGVyIGdldHMgdGhlIGltYWdlIGluIHRoZSBhcnJheSB0aGF0IGZvbGxvd3MgdGhlIGZpcnN0IGltYWdlIGJlaW5nIHVzZWQgYXMgYSBiYWNrZ3JvdW5kIGltYWdlIGZvciB0aGUgY2FyZFxuICAgIC8vIFRoaXMgaW1hZ2UgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBpbWFnZSBjb250YWluZXJcbiAgICBsZXQgc21hbGxQaXhhSW1hZ2UgPSAkKFwiPGltZz5cIilcbiAgICAgIC5hZGRDbGFzcyhcImNvdW50cnktaW1hZ2VcIilcbiAgICAgIC5hdHRyKHtcbiAgICAgICAgc3JjOiBgJHt0cmF2ZWxBcHAuaW1hZ2VBcnJheVt0cmF2ZWxBcHAucmFuZG9taXplKGltYWdlQ291bnRlciwgaW1hZ2VDb3VudGVyICsgMTUpXX1gLFxuICAgICAgICBhbHQ6IGBTY2VuaWMgaW1hZ2Ugb2YgJHtjb3VudHJ5LmNvdW50cnlOYW1lfS4gSW1hZ2UgdGFncyBpbmNsdWRlICR7dHJhdmVsQXBwLmltYWdlVGV4dEFycmF5fS5gXG4gICAgICB9KTtcbiAgICAvLyBBZGQgMTUgdG8gdGhlIGltYWdlIGNvdW50ZXIgZW5zdXJlcyB0aGF0IGV2ZXJ5IGl0ZXJhdGlvbiB0aHJvdWdoIHRoZSBmb3JFYWNoIHdpbGwgYWRkIGltYWdlcyB0byB0aGUgYXNzb2NpYXRlZCBjb3V0cmllc1xuICAgIGltYWdlQ291bnRlciArPSAxNTtcbiAgICAvL0FwcGVuZCB0aGUgY291bnRyeSBpbWFnZSB0byBpdHMgY29udGFpbmVyXG4gICAgc21hbGxQaXhhQ29udGFpbmVyRWxlbWVudC5hcHBlbmQoc21hbGxQaXhhSW1hZ2UpO1xuICAgIC8vIEFwcGVuZCB0aGUgY291bnRyeSBuYW1lIDxoMj4sIHdpa2kgdGV4dCA8cD4sIHN0YXQgbGlzdCA8dWw+IGFuZCBpbWFnZSBjb250YWluZXIgPGRpdj4gdG8gdGhlIGNhcmQgPGRpdj4uXG4gICAgY291bnRyeUNhcmRFbGVtZW50LmFwcGVuZChcbiAgICAgIGNvdW50cnlOYW1lRWxlbWVudCxcbiAgICAgIGNvdW50cnlEZXNjcmlwdGlvbkVsZW1lbnQsXG4gICAgICBzdGF0TGlzdEVsZW1lbnQsXG4gICAgICBzbWFsbFBpeGFDb250YWluZXJFbGVtZW50XG4gICAgKTtcbiAgICAvLyBBcHBlbmQgdGhlIGNhcmQgZGl2IHRvIHRoZSByZXN1bHQtY29udGFpbmVyXG4gICAgY291bnRyeUNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKGNvdW50cnlDYXJkRWxlbWVudCk7XG4gICAgLy9BcHBlbmQgdGhlIHJlc3VsdC1jb250YWluZXIgdG8gdGhlIHJlc3VsdHMgc2VjdGlvbiBlbGVtZW50IG9uIG91ciBwYWdlXG4gICAgJChcIi5yZXN1bHRzXCIpLmFwcGVuZChjb3VudHJ5Q29udGFpbmVyRWxlbWVudCk7XG5cbiAgICAvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSBcInN0YXRDaG9pY2VzXCIgYW5kIHNldCB1cCAzIGluZm9ybWF0aW9uOlxuICAgIC8vIDEuIHRpdGxlIG9mIHN0YXQgKHRha2VuIGZyb20gdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5KVxuICAgIC8vIDIuIHZhbHVlIG9mIHN0YXQgKHRha2VuIGZyb20gcmVzdWx0cyBvYmplY3QpXG4gICAgLy8gMy4gZGVzY3JpcHRpb24gb2Ygc3RhdCAodGFrZW4gZnJvbSB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXkpXG4gICAgbGV0IHN0YXRDb3VudGVyID0gMDtcbiAgICBzdGF0Q2hvaWNlcy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgbGV0IHN0YXRUaXRsZSA9IHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheVtzdGF0Q291bnRlcl07XG4gICAgICBsZXQgc3RhdFZhbHVlID0gY291bnRyeVt0cmF2ZWxBcHAuc3RhdENvZGVBcnJheVtzdGF0Q291bnRlcl1dO1xuICAgICAgbGV0IHN0YXREZXNjcmlwdGlvbiA9IHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheVtzdGF0Q291bnRlcl07XG4gICAgICBzdGF0Q291bnRlcisrO1xuICAgICAgLy8gVGhpcyBsaXN0IGl0ZW0gZWxlbWVudCB3aWxsIGhvbGQgc3RhdCBpbmZvcm1hdGlvblxuICAgICAgbGV0IHN0YXRMaXN0SXRlbUVsZW1lbnQgPSAkKFwiPGxpPlwiKS5hZGRDbGFzcyhcInN0YXQtbGlzdF9faXRlbVwiKTtcbiAgICAgIC8vIFRoaXMgZGl2IHdpbGwgaG9sZCB0aGUgc3RhdCB0aXRsZSBhbmQgcXVlc3Rpb24gbWFyayBpY29uXG4gICAgICBsZXQgc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1fX3RpdGxlLWljb24tY29udGFpbmVyXCIpO1xuICAgICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIHRoZSBzdGF0IHRpdGxlIGFuZCB2YWx1ZVxuICAgICAgbGV0IHN0YXRUaXRsZUVsZW1lbnQgPSAkKFwiPGg0PlwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1fX3RpdGxlLWljb24tY29udGFpbmVyX190aXRsZS1udW1iZXJcIilcbiAgICAgICAgLnRleHQoYCR7c3RhdFRpdGxlfTogJHt0cmF2ZWxBcHAubnVtYmVyV2l0aENvbW1hcyhzdGF0VmFsdWUpfWApO1xuICAgICAgLy8gVGhpcyBxdWVzdGlvbiBtYXJrIGljb24gd2lsbCBzaXQgbmV4dCB0byB0aGUgc3RhdFRpdGxlRWxlbWVudCBhbmQgd2hlbiBjbGlja2VkL2hvdmVyb3Zlciwgd2lsbCBkaXNwbGF5IHRoZSBzdGF0IGRlc2NyaXB0aW9uXG4gICAgICBsZXQgc3RhdEhvdmVySWNvbkVsZW1lbnQgPSBgPGkgY2xhc3M9XCJzdGF0LWxpc3RfX2l0ZW1fX3RpdGxlLWljb24tY29udGFpbmVyX19pY29uIGZhciBmYS1xdWVzdGlvbi1jaXJjbGVcIj48L2k+YDtcbiAgICAgIC8vIGFwcGVuZCB0aGUgc3RhdCB0aXRsZSBhbmQgaWNvbiB0byB0aGUgc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnRcbiAgICAgIHN0YXRUaXRsZUljb25Db250YWluZXJFbGVtZW50LmFwcGVuZChzdGF0VGl0bGVFbGVtZW50LCBzdGF0SG92ZXJJY29uRWxlbWVudCk7XG4gICAgICAvLyBUaGlzIGRpdiB3aWxsIGhvbGQgdGhlIHN0YXQgZGVzY3JpcHRpb24gYW5kIGlzIGEgc2libGluZyBvZiB0aGUgc3RhdFRpdGxlSWNvbkNvbnRhaW5lci5cbiAgICAgIGxldCBzdGF0RGVzY3JpcHRpb25Db250YWluZXJFbGVtZW50ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwic3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXIgZGlzcGxheS1ub25lXCIpO1xuICAgICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIHRoZSBzdGF0IGRlc2NyaXB0aW9uXG4gICAgICBsZXQgc3RhdERlc2NyaXB0aW9uRWxlbWVudCA9ICQoXCI8cD5cIilcbiAgICAgICAgLmFkZENsYXNzKFwic3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXJfX2Rlc2NyaXB0aW9uXCIpXG4gICAgICAgIC50ZXh0KHN0YXREZXNjcmlwdGlvbik7XG4gICAgICAvLyBBcHBlbmQgdGhlIHN0YXREZXNjcmlwdGlvbkVsZW1lbnQgdG8gdGhlIHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnRcbiAgICAgIHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKHN0YXREZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgLy8gQXBwZW5kIHRoZSB0d28gc3RhdCBkaXYgY29udGFpbmVycyB0byB0aGUgPGxpPlxuICAgICAgc3RhdExpc3RJdGVtRWxlbWVudC5hcHBlbmQoc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnQsIHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgLy8gQXBwZW5kIHRoZSA8bGk+cyB0byB0aGUgPHVsPlxuICAgICAgc3RhdExpc3RFbGVtZW50LmFwcGVuZChzdGF0TGlzdEl0ZW1FbGVtZW50KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdHJhdmVsQXBwLmZpbmFsRGlzcGxheSgpO1xufTtcblxuLyogIDcuMSBPbmNlIGFsbCBpbWFnZXMgYXJlIGxvYWRlZCBhcyBiYWNrZ3JvdW5kIGltYWdlcyBvciByZWd1bGFyIGltYWdlcywgZGlzcGxheSB0aGUgZmluYWwgcmVzdWx0cyB3aXRob3V0IFwibGFnXCIqL1xudHJhdmVsQXBwLmZpbmFsRGlzcGxheSA9ICgpID0+IHtcbiAgJChcIi5yZXN1bHRzXCIpLndhaXRGb3JJbWFnZXMoZnVuY3Rpb24oKSB7XG4gICAgJChcIi5yZXN1bHRzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblxuICAgICQoXCJodG1sLCBib2R5XCIpXG4gICAgICAuc3RvcCgpXG4gICAgICAuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChcIi5yZXN1bHRzXCIpLm9mZnNldCgpLnRvcCB9LCA5MDAsIFwic3dpbmdcIik7XG5cbiAgICAvLyByZW1vdmUgbG9hZGVyIGFuZCBkaXNwbGF5IHN1Ym1pdCByYW5raW5nIGJ1dHRvbiBhZ2FpblxuICAgIGxldCBtYXJrVXBCdXR0b24gPSBgPGxpPjxidXR0b24gY2xhc3M9XCJ1c2VyLXN1Ym1pdCBidG5cIj5TdWJtaXQgUmFua2luZzwvYnV0dG9uPjwvbGk+YDtcbiAgICAkKFwiLmNob2ljZXNcIilcbiAgICAgIC5maW5kKFwibGk6bGFzdC1jaGlsZFwiKVxuICAgICAgLmh0bWwobWFya1VwQnV0dG9uKTtcblxuICAgIC8qIEZMSUNLSVRZICovXG4gICAgJChcIi5yZXN1bHRzXCIpLmZsaWNraXR5KHtcbiAgICAgIC8vIG9wdGlvbnNcbiAgICAgIGNlbGxBbGlnbjogXCJsZWZ0XCIsXG4gICAgICBjb250YWluOiB0cnVlLFxuICAgICAgYXV0b1BsYXk6IDUwMDAsXG4gICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICB3YXRjaENTUzogdHJ1ZVxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vIDcuMiBPbiBob3ZlciBvciBjbGljayBvdmVyIHRoZSBxdWVzdGlvbiBtYXJrIGljb24sIGRpc3BsYXkgdGhlIHN0YXQgZGVzY3JpcHRpb25cbnRyYXZlbEFwcC5kaXNwbGF5U3RhdERlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICQoXCIucmVzdWx0c1wiKS5vbihcImNsaWNrXCIsIFwiLnN0YXQtbGlzdF9faXRlbV9fdGl0bGUtaWNvbi1jb250YWluZXJfX2ljb25cIiwgZnVuY3Rpb24oKSB7XG4gICAgaWYgKFxuICAgICAgJCh0aGlzKVxuICAgICAgICAucGFyZW50cyhcIi5zdGF0LWxpc3RfX2l0ZW1cIilcbiAgICAgICAgLmZpbmQoXCIuc3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXJcIilcbiAgICAgICAgLmhhc0NsYXNzKFwiZGlzcGxheS1ub25lXCIpID09PSBmYWxzZVxuICAgICkge1xuICAgICAgJChcIi5yZXN1bHRzXCIpXG4gICAgICAgIC5maW5kKFwiLnN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIucmVzdWx0c1wiKVxuICAgICAgICAuZmluZChcIi5zdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lclwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5wYXJlbnRzKFwiLnN0YXQtbGlzdF9faXRlbVwiKVxuICAgICAgICAuZmluZChcIi5zdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lclwiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gaG9sZHMgYWxsIG91ciBldmVudHMgZnVudGlvbnNcbnRyYXZlbEFwcC5ldmVudHNGdW5jdGlvbiA9ICgpID0+IHtcbiAgdHJhdmVsQXBwLmdldFVzZXJQdXJwb3NlKCk7XG4gIHRyYXZlbEFwcC5nZXRTdGFydGVkKCk7XG4gIHRyYXZlbEFwcC50cmFuc2Zvcm1TVkcoKTtcbiAgdHJhdmVsQXBwLmRpc3BsYXlTdGF0RGVzY3JpcHRpb24oKTtcbn07XG5cbi8vIEluaXQgZnVuY3Rpb24gdG8gaG9sZCBhbGwgb3VyIGZ1bmN0aW9ucyBpbiBvcmRlclxudHJhdmVsQXBwLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgdHJhdmVsQXBwLmV2ZW50c0Z1bmN0aW9uKCk7XG4gIHRyYXZlbEFwcC5zbGlkZURyYWcoKTtcbn07XG5cbi8vIERvY3VtZW50IFJlYWR5IHRvIGNhbGwgb3VyIGluaXQoKSBmdW5jdGlvbiBhbmQgc3RhcnQgdGhlIGFwcFxuJChmdW5jdGlvbigpIHtcbiAgdHJhdmVsQXBwLmluaXQoKTtcbn0pO1xuXG4vKiA4LiBFWFRSQSBGVU5DVElPTlMgVVNFRCBUSFJPVUdIT1VUIEFQUCAqL1xuXG4vLyA4LjEgU29ydGFibGUgZnVuY3Rpb25hbGl0eSBmb3IgY3JpdGVyaWFzXG50cmF2ZWxBcHAuc2xpZGVEcmFnID0gKCkgPT4ge1xuICAkKFwiLmNob2ljZXNcIilcbiAgICAuc29ydGFibGUoe1xuICAgICAgY29ubmVjdFdpdGg6IFwiLnNvcnRhYmxlXCIsXG4gICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgcmV2ZXJ0OiB0cnVlLFxuICAgICAgaGVscGVyOiBcImNsb25lXCIsXG4gICAgICBjb250YWlubWVudDogXCIuY3JpdGVyaWFzLWNvbnRhaW5lclwiXG4gICAgfSlcbiAgICAuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcbiAgJChcInVsLCBsaVwiKS5kaXNhYmxlU2VsZWN0aW9uKCk7XG59O1xuXG4vLyA4LjIgUmFuZG9taXplciBmdW5jdGlvbiB0byBzZWxlY3QgcmFuZG9tIGltYWdlcyB0byBkaXNwbGF5XG50cmF2ZWxBcHAucmFuZG9taXplID0gKHN0YXJ0aW5nTnVtLCBlbmRpbmdOdW0pID0+IHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbmRpbmdOdW0gLSBzdGFydGluZ051bSkpICsgc3RhcnRpbmdOdW07XG59O1xuXG4vLyA4LjMgRXZlbnQgbGlzdGVuZXIgdG8gdHJhbnNmb3JtIFNWR3MgaW50byBpbmxpbmUgU1ZHUyB0byBiZSBhYmxlIHRvIGNoYW5nZSB0aGVpciBjb2xvcnMgd2l0aCBjc3MgZmlsbFxudHJhdmVsQXBwLnRyYW5zZm9ybVNWRyA9ICgpID0+IHtcbiAgalF1ZXJ5KFwiaW1nLnN2Z1wiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciAkaW1nID0galF1ZXJ5KHRoaXMpO1xuICAgIHZhciBpbWdJRCA9ICRpbWcuYXR0cihcImlkXCIpO1xuICAgIHZhciBpbWdDbGFzcyA9ICRpbWcuYXR0cihcImNsYXNzXCIpO1xuICAgIHZhciBpbWdVUkwgPSAkaW1nLmF0dHIoXCJzcmNcIik7XG5cbiAgICBqUXVlcnkuZ2V0KFxuICAgICAgaW1nVVJMLFxuICAgICAgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAvLyBHZXQgdGhlIFNWRyB0YWcsIGlnbm9yZSB0aGUgcmVzdFxuICAgICAgICB2YXIgJHN2ZyA9IGpRdWVyeShkYXRhKS5maW5kKFwic3ZnXCIpO1xuXG4gICAgICAgIC8vIEFkZCByZXBsYWNlZCBpbWFnZSdzIElEIHRvIHRoZSBuZXcgU1ZHXG4gICAgICAgIGlmICh0eXBlb2YgaW1nSUQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAkc3ZnID0gJHN2Zy5hdHRyKFwiaWRcIiwgaW1nSUQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCByZXBsYWNlZCBpbWFnZSdzIGNsYXNzZXMgdG8gdGhlIG5ldyBTVkdcbiAgICAgICAgaWYgKHR5cGVvZiBpbWdDbGFzcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICRzdmcgPSAkc3ZnLmF0dHIoXCJjbGFzc1wiLCBpbWdDbGFzcyArIFwiIHJlcGxhY2VkLXN2Z1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbnkgaW52YWxpZCBYTUwgdGFncyBhcyBwZXIgaHR0cDovL3ZhbGlkYXRvci53My5vcmdcbiAgICAgICAgJHN2ZyA9ICRzdmcucmVtb3ZlQXR0cihcInhtbG5zOmFcIik7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHZpZXdwb3J0IGlzIHNldCwgaWYgdGhlIHZpZXdwb3J0IGlzIG5vdCBzZXQgdGhlIFNWRyB3b250J3Qgc2NhbGUuXG4gICAgICAgIGlmICghJHN2Zy5hdHRyKFwidmlld0JveFwiKSAmJiAkc3ZnLmF0dHIoXCJoZWlnaHRcIikgJiYgJHN2Zy5hdHRyKFwid2lkdGhcIikpIHtcbiAgICAgICAgICAkc3ZnLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgJHN2Zy5hdHRyKFwiaGVpZ2h0XCIpICsgXCIgXCIgKyAkc3ZnLmF0dHIoXCJ3aWR0aFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXBsYWNlIGltYWdlIHdpdGggbmV3IFNWR1xuICAgICAgICAkaW1nLnJlcGxhY2VXaXRoKCRzdmcpO1xuICAgICAgfSxcbiAgICAgIFwieG1sXCJcbiAgICApO1xuICB9KTtcbn07XG5cbi8qIDguNCBUUkFOU0ZPUk0gU1RSSU5HIE5VTUJFUlMgSU5UTyBTRVBBUkFURUQgU1RSSU5HUyBXSVRIIFBST1BFUiBDT01NQVMgRk9SIEVBQ0ggVEhPVVNBTkQgVU5JVCAqL1xudHJhdmVsQXBwLm51bWJlcldpdGhDb21tYXMgPSBzdGF0ID0+IHtcbiAgcmV0dXJuIHN0YXQudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG59O1xuIiwiLyoqXG4gKiBGYXN0UHJpb3JpdHlRdWV1ZS5qcyA6IGEgZmFzdCBoZWFwLWJhc2VkIHByaW9yaXR5IHF1ZXVlICBpbiBKYXZhU2NyaXB0LlxuICogKGMpIHRoZSBhdXRob3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICpcbiAqIFNwZWVkLW9wdGltaXplZCBoZWFwLWJhc2VkIHByaW9yaXR5IHF1ZXVlIGZvciBtb2Rlcm4gYnJvd3NlcnMgYW5kIEphdmFTY3JpcHQgZW5naW5lcy5cbiAqXG4gKiBVc2FnZSA6XG4gICAgICAgICBJbnN0YWxsYXRpb24gKGluIHNoZWxsLCBpZiB5b3UgdXNlIG5vZGUpOlxuICAgICAgICAgJCBucG0gaW5zdGFsbCBmYXN0cHJpb3JpdHlxdWV1ZVxuXG4gICAgICAgICBSdW5uaW5nIHRlc3QgcHJvZ3JhbSAoaW4gSmF2YVNjcmlwdCk6XG5cbiAgICAgICAgIC8vIHZhciBGYXN0UHJpb3JpdHlRdWV1ZSA9IHJlcXVpcmUoXCJmYXN0cHJpb3JpdHlxdWV1ZVwiKTsvLyBpbiBub2RlXG4gICAgICAgICB2YXIgeCA9IG5ldyBGYXN0UHJpb3JpdHlRdWV1ZSgpO1xuICAgICAgICAgeC5hZGQoMSk7XG4gICAgICAgICB4LmFkZCgwKTtcbiAgICAgICAgIHguYWRkKDUpO1xuICAgICAgICAgeC5hZGQoNCk7XG4gICAgICAgICB4LmFkZCgzKTtcbiAgICAgICAgIHgucGVlaygpOyAvLyBzaG91bGQgcmV0dXJuIDAsIGxlYXZlcyB4IHVuY2hhbmdlZFxuICAgICAgICAgeC5zaXplOyAvLyBzaG91bGQgcmV0dXJuIDUsIGxlYXZlcyB4IHVuY2hhbmdlZFxuICAgICAgICAgd2hpbGUoIXguaXNFbXB0eSgpKSB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKHgucG9sbCgpKTtcbiAgICAgICAgIH0gLy8gd2lsbCBwcmludCAwIDEgMyA0IDVcbiAgICAgICAgIHgudHJpbSgpOyAvLyAob3B0aW9uYWwpIG9wdGltaXplcyBtZW1vcnkgdXNhZ2VcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdGNvbXBhcmF0b3IgPSBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhIDwgYjtcbn07XG5cbi8vIHRoZSBwcm92aWRlZCBjb21wYXJhdG9yIGZ1bmN0aW9uIHNob3VsZCB0YWtlIGEsIGIgYW5kIHJldHVybiAqdHJ1ZSogd2hlbiBhIDwgYlxuZnVuY3Rpb24gRmFzdFByaW9yaXR5UXVldWUoY29tcGFyYXRvcikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRmFzdFByaW9yaXR5UXVldWUpKSByZXR1cm4gbmV3IEZhc3RQcmlvcml0eVF1ZXVlKGNvbXBhcmF0b3IpO1xuICB0aGlzLmFycmF5ID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuY29tcGFyZSA9IGNvbXBhcmF0b3IgfHwgZGVmYXVsdGNvbXBhcmF0b3I7XG59XG5cbi8vIGNvcHkgdGhlIHByaW9yaXR5IHF1ZXVlIGludG8gYW5vdGhlciwgYW5kIHJldHVybiBpdC4gUXVldWUgaXRlbXMgYXJlIHNoYWxsb3ctY29waWVkLlxuLy8gUnVucyBpbiBgTyhuKWAgdGltZS5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZnBxID0gbmV3IEZhc3RQcmlvcml0eVF1ZXVlKHRoaXMuY29tcGFyZSk7XG4gIGZwcS5zaXplID0gdGhpcy5zaXplO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgZnBxLmFycmF5LnB1c2godGhpcy5hcnJheVtpXSk7XG4gIH1cbiAgcmV0dXJuIGZwcTtcbn07XG5cbi8vIEFkZCBhbiBlbGVtZW50IGludG8gdGhlIHF1ZXVlXG4vLyBydW5zIGluIE8obG9nIG4pIHRpbWVcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihteXZhbCkge1xuICB2YXIgaSA9IHRoaXMuc2l6ZTtcbiAgdGhpcy5hcnJheVt0aGlzLnNpemVdID0gbXl2YWw7XG4gIHRoaXMuc2l6ZSArPSAxO1xuICB2YXIgcDtcbiAgdmFyIGFwO1xuICB3aGlsZSAoaSA+IDApIHtcbiAgICBwID0gKGkgLSAxKSA+PiAxO1xuICAgIGFwID0gdGhpcy5hcnJheVtwXTtcbiAgICBpZiAoIXRoaXMuY29tcGFyZShteXZhbCwgYXApKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5hcnJheVtpXSA9IGFwO1xuICAgIGkgPSBwO1xuICB9XG4gIHRoaXMuYXJyYXlbaV0gPSBteXZhbDtcbn07XG5cbi8vIHJlcGxhY2UgdGhlIGNvbnRlbnQgb2YgdGhlIGhlYXAgYnkgcHJvdmlkZWQgYXJyYXkgYW5kIFwiaGVhcGlmeSBpdFwiXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuaGVhcGlmeSA9IGZ1bmN0aW9uKGFycikge1xuICB0aGlzLmFycmF5ID0gYXJyO1xuICB0aGlzLnNpemUgPSBhcnIubGVuZ3RoO1xuICB2YXIgaTtcbiAgZm9yIChpID0gdGhpcy5zaXplID4+IDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdGhpcy5fcGVyY29sYXRlRG93bihpKTtcbiAgfVxufTtcblxuLy8gZm9yIGludGVybmFsIHVzZVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLl9wZXJjb2xhdGVVcCA9IGZ1bmN0aW9uKGksIGZvcmNlKSB7XG4gIHZhciBteXZhbCA9IHRoaXMuYXJyYXlbaV07XG4gIHZhciBwO1xuICB2YXIgYXA7XG4gIHdoaWxlIChpID4gMCkge1xuICAgIHAgPSAoaSAtIDEpID4+IDE7XG4gICAgYXAgPSB0aGlzLmFycmF5W3BdO1xuICAgIC8vIGZvcmNlIHdpbGwgc2tpcCB0aGUgY29tcGFyZVxuICAgIGlmICghZm9yY2UgJiYgIXRoaXMuY29tcGFyZShteXZhbCwgYXApKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5hcnJheVtpXSA9IGFwO1xuICAgIGkgPSBwO1xuICB9XG4gIHRoaXMuYXJyYXlbaV0gPSBteXZhbDtcbn07XG5cbi8vIGZvciBpbnRlcm5hbCB1c2VcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fcGVyY29sYXRlRG93biA9IGZ1bmN0aW9uKGkpIHtcbiAgdmFyIHNpemUgPSB0aGlzLnNpemU7XG4gIHZhciBoc2l6ZSA9IHRoaXMuc2l6ZSA+Pj4gMTtcbiAgdmFyIGFpID0gdGhpcy5hcnJheVtpXTtcbiAgdmFyIGw7XG4gIHZhciByO1xuICB2YXIgYmVzdGM7XG4gIHdoaWxlIChpIDwgaHNpemUpIHtcbiAgICBsID0gKGkgPDwgMSkgKyAxO1xuICAgIHIgPSBsICsgMTtcbiAgICBiZXN0YyA9IHRoaXMuYXJyYXlbbF07XG4gICAgaWYgKHIgPCBzaXplKSB7XG4gICAgICBpZiAodGhpcy5jb21wYXJlKHRoaXMuYXJyYXlbcl0sIGJlc3RjKSkge1xuICAgICAgICBsID0gcjtcbiAgICAgICAgYmVzdGMgPSB0aGlzLmFycmF5W3JdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuY29tcGFyZShiZXN0YywgYWkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5hcnJheVtpXSA9IGJlc3RjO1xuICAgIGkgPSBsO1xuICB9XG4gIHRoaXMuYXJyYXlbaV0gPSBhaTtcbn07XG5cbi8vIGludGVybmFsXG4vLyBfcmVtb3ZlQXQoaW5kZXgpIHdpbGwgcmVtb3ZlIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBmcm9tIHRoZSBxdWV1ZSxcbi8vIHJldGFpbmluZyBiYWxhbmNlLiByZXR1cm5zIHRoZSByZW1vdmVkIGl0ZW0sIG9yIHVuZGVmaW5lZCBpZiBub3RoaW5nIGlzIHJlbW92ZWQuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX3JlbW92ZUF0ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgaWYgKGluZGV4ID4gdGhpcy5zaXplIC0gMSB8fCBpbmRleCA8IDApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgLy8gaW1wbDE6XG4gIC8vdGhpcy5hcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAvL3RoaXMuaGVhcGlmeSh0aGlzLmFycmF5KTtcbiAgLy8gaW1wbDI6XG4gIHRoaXMuX3BlcmNvbGF0ZVVwKGluZGV4LCB0cnVlKTtcbiAgcmV0dXJuIHRoaXMucG9sbCgpO1xufTtcblxuLy8gcmVtb3ZlKG15dmFsKSB3aWxsIHJlbW92ZSBhbiBpdGVtIG1hdGNoaW5nIHRoZSBwcm92aWRlZCB2YWx1ZSBmcm9tIHRoZVxuLy8gcXVldWUsIGNoZWNrZWQgZm9yIGVxdWFsaXR5IGJ5IHVzaW5nIHRoZSBxdWV1ZSdzIGNvbXBhcmF0b3IuXG4vLyByZXR1cm4gdHJ1ZSBpZiByZW1vdmVkLCBmYWxzZSBvdGhlcndpc2UuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24obXl2YWwpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xuICAgIGlmICghdGhpcy5jb21wYXJlKHRoaXMuYXJyYXlbaV0sIG15dmFsKSAmJiAhdGhpcy5jb21wYXJlKG15dmFsLCB0aGlzLmFycmF5W2ldKSkge1xuICAgICAgLy8gaXRlbXMgbWF0Y2gsIGNvbXBhcmF0b3IgcmV0dXJucyBmYWxzZSBib3RoIHdheXMsIHJlbW92ZSBpdGVtXG4gICAgICB0aGlzLl9yZW1vdmVBdChpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBpbnRlcm5hbFxuLy8gcmVtb3ZlcyBhbmQgcmV0dXJucyBpdGVtcyBmb3Igd2hpY2ggdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1ZS5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fYmF0Y2hSZW1vdmUgPSBmdW5jdGlvbihjYWxsYmFjaywgbGltaXQpIHtcbiAgLy8gaW5pdGlhbGl6ZSByZXR1cm4gYXJyYXkgd2l0aCBtYXggc2l6ZSBvZiB0aGUgbGltaXQgb3IgY3VycmVudCBxdWV1ZSBzaXplXG4gIHZhciByZXRBcnIgPSBuZXcgQXJyYXkobGltaXQgPyBsaW1pdCA6IHRoaXMuc2l6ZSk7XG4gIHZhciBjb3VudCA9IDA7XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLnNpemUpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCB0aGlzLnNpemUgJiYgY291bnQgPCByZXRBcnIubGVuZ3RoKSB7XG4gICAgICBpZiAoY2FsbGJhY2sodGhpcy5hcnJheVtpXSkpIHtcbiAgICAgICAgcmV0QXJyW2NvdW50XSA9IHRoaXMuX3JlbW92ZUF0KGkpO1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICAvLyBtb3ZlIHVwIGEgbGV2ZWwgaW4gdGhlIGhlYXAgaWYgd2UgcmVtb3ZlIGFuIGl0ZW1cbiAgICAgICAgaSA9IGkgPj4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9IFxuICB9XG4gIHJldEFyci5sZW5ndGggPSBjb3VudDtcbiAgcmV0dXJuIHJldEFycjtcbn1cblxuLy8gcmVtb3ZlT25lKGNhbGxiYWNrKSB3aWxsIGV4ZWN1dGUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0gb2YgdGhlIHF1ZXVlXG4vLyBhbmQgd2lsbCByZW1vdmUgdGhlIGZpcnN0IGl0ZW0gZm9yIHdoaWNoIHRoZSBjYWxsYmFjayB3aWxsIHJldHVybiB0cnVlLlxuLy8gcmV0dXJuIHRoZSByZW1vdmVkIGl0ZW0sIG9yIHVuZGVmaW5lZCBpZiBub3RoaW5nIGlzIHJlbW92ZWQuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucmVtb3ZlT25lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgdmFyIGFyciA9IHRoaXMuX2JhdGNoUmVtb3ZlKGNhbGxiYWNrLCAxKTtcbiAgcmV0dXJuIGFyci5sZW5ndGggPiAwID8gYXJyWzBdIDogdW5kZWZpbmVkO1xufTtcblxuLy8gcmVtb3ZlKGNhbGxiYWNrWywgbGltaXRdKSB3aWxsIGV4ZWN1dGUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0gb2Zcbi8vIHRoZSBxdWV1ZSBhbmQgd2lsbCByZW1vdmUgZWFjaCBpdGVtIGZvciB3aGljaCB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnVlLCB1cCB0b1xuLy8gYSBtYXggbGltaXQgb2YgcmVtb3ZlZCBpdGVtcyBpZiBzcGVjaWZpZWQgb3Igbm8gbGltaXQgaWYgdW5zcGVjaWZpZWQuXG4vLyByZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyB0aGUgcmVtb3ZlZCBpdGVtcy5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5yZW1vdmVNYW55ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGxpbWl0KSB7XG4gIHJldHVybiB0aGlzLl9iYXRjaFJlbW92ZShjYWxsYmFjaywgbGltaXQpO1xufTtcblxuLy8gTG9vayBhdCB0aGUgdG9wIG9mIHRoZSBxdWV1ZSAob25lIG9mIHRoZSBzbWFsbGVzdCBlbGVtZW50cykgd2l0aG91dCByZW1vdmluZyBpdFxuLy8gZXhlY3V0ZXMgaW4gY29uc3RhbnQgdGltZVxuLy9cbi8vIENhbGxpbmcgcGVlayBvbiBhbiBlbXB0eSBwcmlvcml0eSBxdWV1ZSByZXR1cm5zXG4vLyB0aGUgXCJ1bmRlZmluZWRcIiB2YWx1ZS5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL3VuZGVmaW5lZFxuLy9cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnNpemUgPT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgcmV0dXJuIHRoaXMuYXJyYXlbMF07XG59O1xuXG4vLyByZW1vdmUgdGhlIGVsZW1lbnQgb24gdG9wIG9mIHRoZSBoZWFwIChvbmUgb2YgdGhlIHNtYWxsZXN0IGVsZW1lbnRzKVxuLy8gcnVucyBpbiBsb2dhcml0aG1pYyB0aW1lXG4vL1xuLy8gSWYgdGhlIHByaW9yaXR5IHF1ZXVlIGlzIGVtcHR5LCB0aGUgZnVuY3Rpb24gcmV0dXJucyB0aGVcbi8vIFwidW5kZWZpbmVkXCIgdmFsdWUuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy91bmRlZmluZWRcbi8vXG4vLyBGb3IgbG9uZy1ydW5uaW5nIGFuZCBsYXJnZSBwcmlvcml0eSBxdWV1ZXMsIG9yIHByaW9yaXR5IHF1ZXVlc1xuLy8gc3RvcmluZyBsYXJnZSBvYmplY3RzLCB5b3UgbWF5ICB3YW50IHRvIGNhbGwgdGhlIHRyaW0gZnVuY3Rpb25cbi8vIGF0IHN0cmF0ZWdpYyB0aW1lcyB0byByZWNvdmVyIGFsbG9jYXRlZCBtZW1vcnkuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucG9sbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zaXplID09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciBhbnMgPSB0aGlzLmFycmF5WzBdO1xuICBpZiAodGhpcy5zaXplID4gMSkge1xuICAgIHRoaXMuYXJyYXlbMF0gPSB0aGlzLmFycmF5Wy0tdGhpcy5zaXplXTtcbiAgICB0aGlzLl9wZXJjb2xhdGVEb3duKDApO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2l6ZSAtPSAxO1xuICB9XG4gIHJldHVybiBhbnM7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGFkZHMgdGhlIHByb3ZpZGVkIHZhbHVlIHRvIHRoZSBoZWFwLCB3aGlsZSByZW1vdmluZ1xuLy8gYW5kIHJldHVybmluZyBvbmUgb2YgdGhlIHNtYWxsZXN0IGVsZW1lbnRzIChsaWtlIHBvbGwpLiBUaGUgc2l6ZSBvZiB0aGUgcXVldWVcbi8vIHRodXMgcmVtYWlucyB1bmNoYW5nZWQuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucmVwbGFjZVRvcCA9IGZ1bmN0aW9uKG15dmFsKSB7XG4gIGlmICh0aGlzLnNpemUgPT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIGFucyA9IHRoaXMuYXJyYXlbMF07XG4gIHRoaXMuYXJyYXlbMF0gPSBteXZhbDtcbiAgdGhpcy5fcGVyY29sYXRlRG93bigwKTtcbiAgcmV0dXJuIGFucztcbn07XG5cbi8vIHJlY292ZXIgdW51c2VkIG1lbW9yeSAoZm9yIGxvbmctcnVubmluZyBwcmlvcml0eSBxdWV1ZXMpXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmFycmF5ID0gdGhpcy5hcnJheS5zbGljZSgwLCB0aGlzLnNpemUpO1xufTtcblxuLy8gQ2hlY2sgd2hldGhlciB0aGUgaGVhcCBpcyBlbXB0eVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gMDtcbn07XG5cbi8vIGl0ZXJhdGUgb3ZlciB0aGUgaXRlbXMgaW4gb3JkZXIsIHBhc3MgYSBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIChpdGVtLCBpbmRleCkgYXMgYXJncy5cbi8vIFRPRE8gb25jZSB3ZSB0cmFuc3BpbGUsIHVuY29tbWVudFxuLy8gaWYgKFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3IpIHtcbi8vICAgRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiooKSB7XG4vLyAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm47XG4vLyAgICAgdmFyIGZwcSA9IHRoaXMuY2xvbmUoKTtcbi8vICAgICB3aGlsZSAoIWZwcS5pc0VtcHR5KCkpIHtcbi8vICAgICAgIHlpZWxkIGZwcS5wb2xsKCk7XG4vLyAgICAgfVxuLy8gICB9O1xuLy8gfVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICBpZiAodGhpcy5pc0VtcHR5KCkgfHwgdHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHJldHVybjtcbiAgdmFyIGkgPSAwO1xuICB2YXIgZnBxID0gdGhpcy5jbG9uZSgpO1xuICB3aGlsZSAoIWZwcS5pc0VtcHR5KCkpIHtcbiAgICBjYWxsYmFjayhmcHEucG9sbCgpLCBpKyspO1xuICB9XG59O1xuXG4vLyByZXR1cm4gdGhlIGsgJ3NtYWxsZXN0JyBlbGVtZW50cyBvZiB0aGUgcXVldWVcbi8vIHJ1bnMgaW4gTyhrIGxvZyBrKSB0aW1lXG4vLyB0aGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIHJlcGVhdGVkbHkgY2FsbGluZyBwb2xsLCBidXRcbi8vIGl0IGhhcyBhIGJldHRlciBjb21wdXRhdGlvbmFsIGNvbXBsZXhpdHksIHdoaWNoIGNhbiBiZVxuLy8gaW1wb3J0YW50IGZvciBsYXJnZSBkYXRhIHNldHMuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUua1NtYWxsZXN0ID0gZnVuY3Rpb24oaykge1xuICBpZiAodGhpcy5zaXplID09IDApIHJldHVybiBbXTtcbiAgdmFyIGNvbXBhcmF0b3IgPSB0aGlzLmNvbXBhcmU7XG4gIHZhciBhcnIgPSB0aGlzLmFycmF5XG4gIHZhciBmcHEgPSBuZXcgRmFzdFByaW9yaXR5UXVldWUoZnVuY3Rpb24oYSxiKXtcbiAgIHJldHVybiBjb21wYXJhdG9yKGFyclthXSxhcnJbYl0pO1xuICB9KTtcbiAgayA9IE1hdGgubWluKHRoaXMuc2l6ZSwgayk7XG4gIHZhciBzbWFsbGVzdCA9IG5ldyBBcnJheShrKTtcbiAgdmFyIGogPSAwO1xuICBmcHEuYWRkKDApO1xuICB3aGlsZSAoaiA8IGspIHtcbiAgICB2YXIgc21hbGwgPSBmcHEucG9sbCgpO1xuICAgIHNtYWxsZXN0W2orK10gPSB0aGlzLmFycmF5W3NtYWxsXTtcbiAgICB2YXIgbCA9IChzbWFsbCA8PCAxKSArIDE7XG4gICAgdmFyIHIgPSBsICsgMTtcbiAgICBpZiAobCA8IHRoaXMuc2l6ZSkgZnBxLmFkZChsKTtcbiAgICBpZiAociA8IHRoaXMuc2l6ZSkgZnBxLmFkZChyKTtcbiAgfVxuICByZXR1cm4gc21hbGxlc3Q7XG59XG5cbi8vIGp1c3QgZm9yIGlsbHVzdHJhdGlvbiBwdXJwb3Nlc1xudmFyIG1haW4gPSBmdW5jdGlvbigpIHtcbiAgLy8gbWFpbiBjb2RlXG4gIHZhciB4ID0gbmV3IEZhc3RQcmlvcml0eVF1ZXVlKGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYSA8IGI7XG4gIH0pO1xuICB4LmFkZCgxKTtcbiAgeC5hZGQoMCk7XG4gIHguYWRkKDUpO1xuICB4LmFkZCg0KTtcbiAgeC5hZGQoMyk7XG4gIHdoaWxlICgheC5pc0VtcHR5KCkpIHtcbiAgICBjb25zb2xlLmxvZyh4LnBvbGwoKSk7XG4gIH1cbn07XG5cbmlmIChyZXF1aXJlLm1haW4gPT09IG1vZHVsZSkge1xuICBtYWluKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmFzdFByaW9yaXR5UXVldWU7XG4iXX0=
