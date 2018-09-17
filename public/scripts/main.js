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

    // $(".results").flickity("destroy");

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
    $(".results").css("display", "flex");

    var flickityOrNot = "block";
    if (window.matchMedia("(max-width: 1920px)").matches) {
      /* the viewport is at most 1100 pixels wide */
      flickityOrNot = "block";
    }

    // $(".results").css("display", flickityOrNot);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2Zhc3Rwcmlvcml0eXF1ZXVlL0Zhc3RQcmlvcml0eVF1ZXVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBO0FBQ0EsSUFBTSxVQUFVLFFBQVEsbUJBQVIsQ0FBaEI7O0FBRUE7QUFDQSxJQUFNLFlBQVksRUFBbEI7O0FBRUE7QUFDQSxVQUFVLFNBQVYsR0FBc0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0UsTUFBSSxpQkFETjtBQUVFLFNBQU8sQ0FDTDtBQUNFLFVBQU0sU0FEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUsMEJBSFo7QUFJRSxpQkFBYTtBQUpmLEdBREssRUFPTDtBQUNFLFVBQU0saUJBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLGlCQUhaO0FBSUUsaUJBQ0U7QUFMSixHQVBLLEVBY0w7QUFDRSxVQUFNLGtCQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSxrQkFIWjtBQUlFLGlCQUNFO0FBTEosR0FkSyxFQXFCTDtBQUNFLFVBQU0scUJBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLHFCQUhaO0FBSUUsaUJBQ0U7QUFMSixHQXJCSyxFQTRCTDtBQUNFLFVBQU0sa0JBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLHlCQUhaO0FBSUUsaUJBQWE7QUFKZixHQTVCSyxFQWtDTDtBQUNFLFVBQU0scUJBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLGFBSFo7QUFJRSxpQkFBYTtBQUpmLEdBbENLO0FBRlQsQ0FIb0I7QUErQ3BCO0FBQ0E7QUFDQTtBQUNFLE1BQUksa0JBRE47QUFFRSxTQUFPLENBQ0w7QUFDRSxVQUFNLHVCQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSx1QkFIWjtBQUlFLGlCQUNFO0FBTEosR0FESyxFQVFMO0FBQ0UsVUFBTSxlQURSO0FBRUUs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSU1QT1JUIEhFQVAgTU9EVUxFIEZST00gTlBNXG5jb25zdCBNaW5IZWFwID0gcmVxdWlyZShcImZhc3Rwcmlvcml0eXF1ZXVlXCIpO1xuXG4vLyBDcmVhdGUgYW4gb2JqZWN0IHJlcHJlc2VudGluZyBvdXIgdHJhdmVsIGFwcCAoTkFNRVNQQUNFKVxuY29uc3QgdHJhdmVsQXBwID0ge307XG5cbi8vIEFSUkFZIFdJVEggQUxMIFJFTEVWQU5UIFNUQVRTIEZPUiBFQUNIIFBVUlBPU0VcbnRyYXZlbEFwcC5zdGF0QXJyYXkgPSBbXG4gIC8vIFZBQ0FUSU9OIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi12YWNhdGlvblwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVuc2l0eVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlBvcHVsYXRpb24gRGVuc2l0eSAobG93KVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcG9wdWxhdGlvbiBkZW5zaXR5IGlzIG1lYXN1cmVkIGluIHBlciBrbcKyLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInRvdXJpc3RfYXJyaXZhbHNcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJUb3VyaXN0IEFycml2YWxzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUmVwcmVzZW50cyBmb3JlaWduIGNpdGl6ZW5zIHRoYXQgc3RheWVkIGF0IGxlYXN0IG9uZSBuaWdodC4gSW5jbHVkZXMgaG90ZWwgc3RheXMsIHRyYW5zZmVycywgY29uZmVyZW5jZSB2aXNpdHMsIGV0Yy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ0b3VyaXNtX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVG91cmlzdCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBhbW91bnQgb2YgZ292ZXJubWVudCBzcGVuZGluZyBkZWRpY2F0ZWQgZm9yIHRvdXJpc20gKGluICUgb2YgdGhlIEdEUCBmb3IgYSBjb3VudHJ5KS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ1cmJhbl9wb3B1bGF0aW9uXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVXJiYW4gUG9wdWxhdGlvbiAoaGlnaClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBlcmNlbnRhZ2Ugb2YgcGVvcGxlIHdobyBsaXZlIGluIGEgY2l0eS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJmb3Jlc3RfYXJlYV9wZXJjZW50XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiRm9yZXN0IEFyZWFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHRvdGFsIGFtb3VudCBvZiBmb3Jlc3QgYXJlYSBpbiBhIGNvdW50cnkgKGluIGttwrIpXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIEVEVUNBVElPTiBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLWVkdWNhdGlvblwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZWR1Y2F0aW9uX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiRWR1Y2F0aW9uIEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiRWR1Y2F0aW9uIGV4cGVuZGl0dXJlIHJlcHJlc2VudHMgZ292ZXJubWVudCBzcGVuZGluZyBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJjbzJfZW1pc3Npb25zXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiQ08yIEVtaXNzaW9uc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDTzIgZW1pc3Npb25zIGluIG1ldHJpYyB0b25zIHBlciBwZXJzb24gcGVyIHllYXIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiY29ycnVwdGlvbl9pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkNvcnJ1cHRpb24gSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJDb3JydXB0aW9uIFBlcmNlcHRpb25zIEluZGV4IChDUEkpLiAoU2NhbGU6IDAtMTAwOyAwID0gaGlnaCBjb3JydXB0aW9uLiAxMDAgPSBsb3cgY29ycnVwdGlvbikuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGFwcGluZXNzX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGFwcGluZXNzIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFzZWQgb24gZmFjdG9ycyBzdWNoIGFzIEdEUCBwZXIgY2FwaXRhLCBzb2NpYWwgc3VwcG9ydCwgbGlmZSBleHBlY3RhbmN5LiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhhcHBpZXIgdGhlIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGRpXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSHVtYW4gRGV2ZWxvcG1lbnQgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJJbmRpY2F0b3Igb2YgbGlmZSBleHBlY3RhbmN5LCBlZHVjYXRpb24sIGFuZCBwZXIgY2FwaXRhIGluY29tZS4gKFNjYWxlOiAwLTE7IDAgPSBsb3cgc2NvcmUuIDEgPSBoaWdoIHNjb3JlKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZWFsdGhfZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIZWFsdGggRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUHVibGljIHNwZW5kaW5nIG9uIGhlYWx0aCwgbWVhc3VyZWQgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFZJU0lUT1IgVklTQSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXZpc2l0LXZpc2FcIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ0b3VyaXN0X2Fycml2YWxzXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVG91cmlzdCBBcnJpdmFsc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlJlcHJlc2VudHMgZm9yZWlnbiBjaXRpemVucyB0aGF0IHN0YXllZCBhdCBsZWFzdCBvbmUgbmlnaHQuIEluY2x1ZGVzIGhvdGVsIHN0YXlzLCB0cmFuc2ZlcnMsIGNvbmZlcmVuY2UgdmlzaXRzLCBldGMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVuc2l0eVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlBvcHVsYXRpb24gRGVuc2l0eSAobG93KVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcG9wdWxhdGlvbiBkZW5zaXR5IGlzIG1lYXN1cmVkIGluIHBlciBrbcKyLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImNvMl9lbWlzc2lvbnNcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJDTzIgRW1pc3Npb25zXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNPMiBlbWlzc2lvbnMgaW4gbWV0cmljIHRvbnMgcGVyIHBlcnNvbiBwZXIgeWVhci5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJpbmZsYXRpb25cIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJJbmZsYXRpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGFubnVhbCBjaGFuZ2Ugb2YgY29uc3VtZXIgcHJpY2VzICh1bml0OiAlKS5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gV09SS0lORyBIT0xJREFZIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24td29yay1ob2xpZGF5XCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZW5zaXR5XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiUG9wdWxhdGlvbiBEZW5zaXR5IChsb3cpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwb3B1bGF0aW9uIGRlbnNpdHkgaXMgbWVhc3VyZWQgaW4gcGVyIGttwrIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidG91cmlzdF9hcnJpdmFsc1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlRvdXJpc3QgQXJyaXZhbHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJSZXByZXNlbnRzIGZvcmVpZ24gY2l0aXplbnMgdGhhdCBzdGF5ZWQgYXQgbGVhc3Qgb25lIG5pZ2h0LiBJbmNsdWRlcyBob3RlbCBzdGF5cywgdHJhbnNmZXJzLCBjb25mZXJlbmNlIHZpc2l0cywgZXRjLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJidXR0b24tcGVybS1zb2xvXCIsXG4gICAgICAgIHN0YXQ6IFwiZ2luaVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkdpbmkgQ29lZmZpY2llbnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJTdGF0ZXMgaG93IHVuaWZvcm1seSBhc3NldHMgYXJlIGRpc3RyaWJ1dGVkLiAoc2NhbGU6IDAtMTAwOyAwID0gZXF1YWwgZGlzdHJpYnV0aW9uLiAxMDAgPSB1bmVxdWFsIGRpc3RyaWJ1dGlvbikuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGFwcGluZXNzX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGFwcGluZXNzIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFzZWQgb24gZmFjdG9ycyBzdWNoIGFzIEdEUCBwZXIgY2FwaXRhLCBzb2NpYWwgc3VwcG9ydCwgbGlmZSBleHBlY3RhbmN5LiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhhcHBpZXIgdGhlIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiam9ibGVzc19yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSm9ibGVzcyBSYXRlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiVGhlIG51bWJlciBvZiB1bmVtcGxveWVkIHBlb3BsZSBpbiByZWxhdGlvbiB0byB0aGUgbGFib3IgZm9yY2UgZm9yIGEgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJtZWRpYW53YWdlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTWVkaWFuIFdhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJBIG1lYXN1cmUgb2YgdGhlIG1vbnRobHkgbWVkaWFuIHdhZ2UgYmVmb3JlIHRheGVzLCBpbmNsdWRpbmcgcHVibGljIGJlbmVmaXRzIChlLmcgY2hpbGQgYWxsb3dhbmNlKTsgdW5pdDogVVNELlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBQRVJNQU5FTlQtU09MTyBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXBlcm0tc29sb1wiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGRpXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSHVtYW4gRGV2ZWxvcG1lbnQgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJJbmRpY2F0b3Igb2YgbGlmZSBleHBlY3RhbmN5LCBlZHVjYXRpb24sIGFuZCBwZXIgY2FwaXRhIGluY29tZS4gKFNjYWxlOiAwLTE7IDAgPSBsb3cgc2NvcmUuIDEgPSBoaWdoIHNjb3JlKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJjb3JydXB0aW9uX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiQ29ycnVwdGlvbiBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkNvcnJ1cHRpb24gUGVyY2VwdGlvbnMgSW5kZXggKENQSSkuIChTY2FsZTogMC0xMDA7IDAgPSBoaWdoIGNvcnJ1cHRpb24uIDEwMCA9IGxvdyBjb3JydXB0aW9uKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJtZWRpYW53YWdlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTWVkaWFuIFdhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJBIG1lYXN1cmUgb2YgdGhlIG1vbnRobHkgbWVkaWFuIHdhZ2UgYmVmb3JlIHRheGVzLCBpbmNsdWRpbmcgcHVibGljIGJlbmVmaXRzIChlLmcgY2hpbGQgYWxsb3dhbmNlKTsgdW5pdDogVVNELlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImluZmxhdGlvblwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkluZmxhdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYW5udWFsIGNoYW5nZSBvZiBjb25zdW1lciBwcmljZXMgKHVuaXQ6ICUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ1cmJhbl9wb3B1bGF0aW9uXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVXJiYW4gUG9wdWxhdGlvbiAoaGlnaClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBlcmNlbnRhZ2Ugb2YgcGVvcGxlIHdobyBsaXZlIGluIGEgY2l0eS5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gUEVSTUFORU5ULUNPVVBMRSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXBlcm0tY291cGxlXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZGlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIdW1hbiBEZXZlbG9wbWVudCBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkluZGljYXRvciBvZiBsaWZlIGV4cGVjdGFuY3ksIGVkdWNhdGlvbiwgYW5kIHBlciBjYXBpdGEgaW5jb21lLiAoU2NhbGU6IDAtMTsgMCA9IGxvdyBzY29yZS4gMSA9IGhpZ2ggc2NvcmUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImpvYmxlc3NfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkpvYmxlc3MgUmF0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBudW1iZXIgb2YgdW5lbXBsb3llZCBwZW9wbGUgaW4gcmVsYXRpb24gdG8gdGhlIGxhYm9yIGZvcmNlIGZvciBhIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcImJ1dHRvbi1wZXJtLXNvbG9cIixcbiAgICAgICAgc3RhdDogXCJnaW5pXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiR2luaSBDb2VmZmljaWVudFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlN0YXRlcyBob3cgdW5pZm9ybWx5IGFzc2V0cyBhcmUgZGlzdHJpYnV0ZWQuIChzY2FsZTogMC0xMDA7IDAgPSBlcXVhbCBkaXN0cmlidXRpb24uIDEwMCA9IHVuZXF1YWwgZGlzdHJpYnV0aW9uKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZWF0aF9yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiUmF0ZSBvZiBEZWF0aHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGF2ZXJhZ2UgbnVtYmVyIG9mIGRlYXRocyBwZXIgeWVhciBwZXIgMSwwMDAgcGVvcGxlLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlYnRzX3BlcmNlbnRcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJHb3Zlcm5tZW50IERlYnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJUaGUgcGVyY2VudGFnZSBvZiBnb3Zlcm5tZW50IGJvcnJvd2luZ3MgaW4gcmVsYXRpb24gdG8gdGhlIEdEUC5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gUEVSTUFORU5ULUZBTUlMWSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXBlcm0tZmFtaWx5XCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJlZHVjYXRpb25fZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJFZHVjYXRpb24gRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJFZHVjYXRpb24gZXhwZW5kaXR1cmUgcmVwcmVzZW50cyBnb3Zlcm5tZW50IHNwZW5kaW5nIGluICUgb2YgR0RQLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJsaXRlcmFjeV9yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTGl0ZXJhY3kgUmF0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBwZXJjZW50YWdlIG9mIHBlb3BsZSB0aGF0IGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVhZCBhbmQgd3JpdGUgYnkgYWdlIDE1LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImxpZmVfZXhwZWN0YW5jeVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkxpZmUgRXhwZWN0YW5jeVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBhdmVyYWdlIG51bWJlciBvZiB5ZWFycyBhIHBlcnNvbiB3aWxsIGxpdmUgKGF0IGJpcnRoKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZWF0aF9yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiUmF0ZSBvZiBEZWF0aHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGF2ZXJhZ2UgbnVtYmVyIG9mIGRlYXRocyBwZXIgeWVhciBwZXIgMSwwMDAgcGVvcGxlLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcIm1lZGlhbndhZ2VcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJNZWRpYW4gV2FnZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkEgbWVhc3VyZSBvZiB0aGUgbW9udGhseSBtZWRpYW4gd2FnZSBiZWZvcmUgdGF4ZXMsIGluY2x1ZGluZyBwdWJsaWMgYmVuZWZpdHMgKGUuZyBjaGlsZCBhbGxvd2FuY2UpOyB1bml0OiBVU0QuXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cbi8qIDAuIEdFVCBTVEFSVEVEICovXG50cmF2ZWxBcHAuZ2V0U3RhcnRlZCA9ICgpID0+IHtcbiAgLy8gTGlzdGVucyBmb3IgY2xpY2sgb24gR0VUIFNUQVJURUQgQlVUVE9OXG4gICQoXCIud2VsY29tZV9fYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIFNtb290aCBzY3JvbGwgdG8gbmV4dCBzZWN0aW9uXG4gICAgJChcImh0bWwsIGJvZHlcIilcbiAgICAgIC5zdG9wKClcbiAgICAgIC5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKFwiLnB1cnBvc2Utc2VjdGlvblwiKS5vZmZzZXQoKS50b3AgfSwgOTAwLCBcInN3aW5nXCIpO1xuICB9KTtcbn07XG5cbi8qIDEuIEdFVCBVU0VSIElOUFVUICovXG50cmF2ZWxBcHAuZ2V0VXNlclB1cnBvc2UgPSAoKSA9PiB7XG4gICQoXCIudHJhdmVsLWZvcm1fX2J1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdG9yZSB1c2VyIGlucHV0IGluIHZhcmlhYmxlXG4gICAgY29uc3QgaW5wdXRJRCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xuICAgIHRyYXZlbEFwcC51c2VyUHVycG9zZSA9IGlucHV0SUQ7XG5cbiAgICAvLyBDYWxsIHRoZSBkaXNwbGF5IHN0YXRzIGZ1bmN0aW9uXG4gICAgdHJhdmVsQXBwLmRpc3BsYXlTdGF0cyh0cmF2ZWxBcHAudXNlclB1cnBvc2UpO1xuXG4gICAgLy8gRGlzcGxheSB0aGUgY3JpdGVyaWFzIHRvIGJlIGNob3NlblxuICAgICQoXCIuY3JpdGVyaWFzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xuXG4gICAgLy8gU21vb3RoIFNjcm9sbCB0byBjcml0ZXJpYSdzIHNlY3Rpb25cbiAgICAkKFwiaHRtbCwgYm9keVwiKVxuICAgICAgLnN0b3AoKVxuICAgICAgLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIuY3JpdGVyaWFzXCIpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LFxuICAgICAgICA5MDAsXG4gICAgICAgIFwic3dpbmdcIlxuICAgICAgKTtcbiAgfSk7XG59O1xuXG4vKiAyLiBESVNQTEFZIEFMTCBTVEFUUyBGT1IgVEhFIFNFTEVDVEVEIFBVUlBPU0UgT04gU0NSRUVOICovXG50cmF2ZWxBcHAuZGlzcGxheVN0YXRzID0gcHVycG9zZUlEID0+IHtcbiAgJChcIi5jaG9pY2VzXCIpLmVtcHR5KCk7XG4gIC8vIEhlYWRlciBmb3IgdGhlIGNob29zZSBDcml0ZXJpYSBzZWN0aW9uXG4gICQoXCIuY3JpdGVyaWEtaGVhZGVyXCIpLnRleHQoXG4gICAgXCJQbGVhc2UgcmFuayB0aGUgZm9sbG93aW5nIGNyaXRlcmlhIGluIG9yZGVyIG9mIGltcG9ydGFuY2UgZnJvbSB0b3AgdG8gYm90dG9tLiBVc2UgeW91ciBjdXJzb3IgdG8gZHJhZyBhbmQgZHJvcCB0aGUgaXRlbXMuXCJcbiAgKTtcbiAgLy8gQWRkIGNzcyBwb3NpdGlvbiB0byBjcml0ZXJpYSBjb250YWluZXJcbiAgJChcIi5jaG9pY2VzLWxpc3QtY29udGFpbmVyXCIpLmNzcyhcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XG5cbiAgLy8gR28gdGhyb3VnaCBlYWNoIHB1cnBvc2Ugb2JqZWN0IGluIHRoZSBTdGF0IEFycmF5XG4gIHRyYXZlbEFwcC5zdGF0QXJyYXkuZm9yRWFjaChwdXJwb3NlT2JqID0+IHtcbiAgICAvLyBJZiB0aGUgcHVycG9zZSBJRCBtYXRjaGVzIHRoZSBwdXJwb3NlIE9iamVjdCBpZFxuICAgIGlmIChwdXJwb3NlSUQgPT09IHB1cnBvc2VPYmouaWQpIHtcbiAgICAgIC8vIEdvIHRocm91Z2ggZXZlcnkgc3RhdCBmb3IgdGhpcyBwdXJwb3NlXG4gICAgICBwdXJwb3NlT2JqLnN0YXRzLmZvckVhY2goc3RhdCA9PiB7XG4gICAgICAgIC8vIEFwcGVuZCBlYWNoIG9mIHRoZSBzdGF0IG5hbWUgb24gc2NyZWVuIGZvciB0aGUgdXNlciB0byByYW5rXG4gICAgICAgIGxldCBtYXJrVXBJdGVtID0gJChcIjxsaT5cIilcbiAgICAgICAgICAuYXR0cihcImlkXCIsIHN0YXQuc3RhdClcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJjcml0ZXJpYVwiKVxuICAgICAgICAgIC50ZXh0KHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAkKFwiLmNob2ljZXNcIikuYXBwZW5kKG1hcmtVcEl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBhcHBlbmQgc3VibWl0IGJ1dHRvblxuICBsZXQgbWFya1VwQnV0dG9uID0gYDxsaT48YnV0dG9uIGNsYXNzPVwidXNlci1zdWJtaXQgYnRuXCI+U3VibWl0IFJhbmtpbmc8L2J1dHRvbj48L2xpPmA7XG4gICQoXCIuY2hvaWNlc1wiKS5hcHBlbmQobWFya1VwQnV0dG9uKTtcblxuICB0cmF2ZWxBcHAuZ2V0VXNlclJhbmtpbmdzKCk7XG59O1xuXG4vKiAzLiBPQlRBSU4gVEhFIFJBTktJTkcgT0YgVEhFIFNUQVRTIEZST00gVVNFUiAqL1xudHJhdmVsQXBwLmdldFVzZXJSYW5raW5ncyA9ICgpID0+IHtcbiAgJChcIi5jaG9pY2VzXCIpLm9uKFwiY2xpY2tcIiwgXCIudXNlci1zdWJtaXRcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIHJlbW92ZSBzdWJtaXQgYnV0dG9uIGFuZCBwdXQgYSBsb2FkZXIgdW50aWwgdGhlIHJlc3VsdHMgY29tZSBiYWNrXG4gICAgLy8gLmh0bWwoYDxpbWcgY2xhc3M9XCJsb2FkZXJcIiBzcmM9XCIuLi8uLi9hc3NldHMvc3Bpbm5lci0xcy0xMDBweC5zdmdcIj5gKTtcbiAgICAkKFwiLmNob2ljZXNcIikuZmluZChcbiAgICAgIFwibGk6bGFzdC1jaGlsZFwiXG4gICAgKS5odG1sKGA8c3ZnIGNsYXNzPVwibGRzLXNwaW5uZXIgbG9hZGVyXCIgd2lkdGg9XCIxMDBweFwiICBoZWlnaHQ9XCIxMDBweFwiICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiBub25lO1wiPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuOTE2NjY2NjY2NjY2NjY2NnNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC44MzMzMzMzMzMzMzMzMzM0c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSg2MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjc1c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjY2NjY2NjY2NjY2NjY2NjZzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDEyMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjU4MzMzMzMzMzMzMzMzMzRzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDE1MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjVzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDE4MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjQxNjY2NjY2NjY2NjY2NjdzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDIxMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjMzMzMzMzMzMzMzMzMzMzNzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDI0MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjI1c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgyNzAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC4xNjY2NjY2NjY2NjY2NjY2NnNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzAwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuMDgzMzMzMzMzMzMzMzMzMzNzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDMzMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIjBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PC9zdmc+YCk7XG5cbiAgICAvLyBnZXQgdGhlIHVzZXIgcmFua2luZ3MgZnJvbSBoaXMgb3JkZXJpbmcgb2Ygc3RhdHMgYW5kIHN0b3JlIGluIGEgdmFyaWFibGVcbiAgICBsZXQgdXNlclJhbmtpbmdzID0gJChcIi5jaG9pY2VzXCIpWzBdLmNoaWxkcmVuO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBhbiBlbXB0eSBhcnJheSB0byBzdG9yZSB0aGUgdG9wIDMgcmFua2luZ3NcbiAgICBsZXQgc3RhdHNGb3JBUElDYWxsID0gW107XG5cbiAgICAvLyBnZXQgZmlyc3QgdG9wIDMgcmFua2luZ3MgKHN0YXRzIGluIDFzdCwgMm5kIGFuZCAzcmQgcG9zaXRpb25zKVxuICAgIC8vIGFuZCBzdG9yZSB0aGVtIGluc2lkZSBhbiBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBzdGF0c0ZvckFQSUNhbGwucHVzaCh1c2VyUmFua2luZ3NbaV0uaWQpO1xuICAgIH1cblxuICAgIC8vIElOSVRJQUxJWkUgQUxMIEdMT0JBTCBWQVJJQUJMRVMgRk9SIERJU1BMQVkgQVQgVEhFIEVORFxuICAgIHRyYXZlbEFwcC53aWtpRXh0cmFjdCA9IFtdO1xuICAgIHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5zdGF0Q29kZUFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLndpa2lQcm9taXNlQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAucGl4YVByb21pc2VBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5pbWFnZUFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLmltYWdlVGV4dEFycmF5ID0gW107XG5cbiAgICAvLyAkKFwiLnJlc3VsdHNcIikuZmxpY2tpdHkoXCJkZXN0cm95XCIpO1xuXG4gICAgdHJhdmVsQXBwLmdldFN0YXQoLi4uc3RhdHNGb3JBUElDYWxsKTtcbiAgfSk7XG59O1xuXG4vKiA0LiBTRU5EIEFKQVggUkVRVUVTVCBUTyBJTlFTVEFUUyBBUEkgKi9cblxuLy8gU3RvcmUgaW1wb3J0YW50IGluZm8gZm9yIGNhbGxzIHRvIHRoZSBJTlFTdGF0cyBBUEkuXG50cmF2ZWxBcHAuc3RhdEtleSA9IFwiNWQzNjg3YzdjMTc4OGQ1ZlwiO1xudHJhdmVsQXBwLnN0YXRVUkwgPSBcImh0dHA6Ly9pbnFzdGF0c2FwaS5pbnF1YnUuY29tXCI7XG50cmF2ZWxBcHAuZ2V0U3RhdCA9IChzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKSA9PiB7XG4gICQuYWpheCh7XG4gICAgdXJsOiB0cmF2ZWxBcHAuc3RhdFVSTCxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgIGRhdGE6IHtcbiAgICAgIGFwaV9rZXk6IHRyYXZlbEFwcC5zdGF0S2V5LFxuICAgICAgZGF0YTogYGhkaSwke3N0YXRUeXBlMX0sJHtzdGF0VHlwZTJ9LCR7c3RhdFR5cGUzfWAsXG4gICAgICBjbWQ6IFwiZ2V0V29ybGREYXRhXCJcbiAgICB9XG4gIH0pLnRoZW4ocmVzID0+IHtcbiAgICAvLyBjYWxsaW5nIHRoZSBjYWxjdWxhdGlvbiBmdW5jdGlvbiB0byBnZXQgdGhlIHRvcCBuIC8gYm90dG9tIG4gY291bnRyaWVzXG5cbiAgICAvL2ZpbmFsUmVzdWx0cyBob2xkcyB0aGUgZmluYWwgMyBjb3V0cmllcyBhbmQgYWxsIG9mIHRoZWlyIHN0YXRzXG4gICAgbGV0IGZpbmFsUmVzdWx0cyA9IHRyYXZlbEFwcC5nZXRSZWNvbW1lbmRhdGlvbnMoXG4gICAgICByZXMsXG4gICAgICBzdGF0VHlwZTEsXG4gICAgICBzdGF0VHlwZTIsXG4gICAgICBzdGF0VHlwZTNcbiAgICApO1xuXG4gICAgLy8gR2V0IHdpa2kgYW5kIHBpeGEgZXh0cmFjdHMgZm9yIGVhY2ggY291bnRyeVxuICAgIGZpbmFsUmVzdWx0cy5mb3JFYWNoKGNvdW50cnlPYmogPT4ge1xuICAgICAgLy8gZ2V0IHdpa2kgZXh0cmFjdHMgYW5kIHB1dCBwcm9taXNlcyBpbnRvIGFycmF5XG4gICAgICB0cmF2ZWxBcHAud2lraVByb21pc2VBcnJheS5wdXNoKFxuICAgICAgICB0cmF2ZWxBcHAuZ2V0V2lraShjb3VudHJ5T2JqLmNvdW50cnlOYW1lKVxuICAgICAgKTtcblxuICAgICAgLy8gZ2V0IHBpeGEgZXh0cmFjdHMgYW5kIHB1dCBwcm9taXNlcyBpbnRvIGFycmF5XG4gICAgICB0cmF2ZWxBcHAucGl4YVByb21pc2VBcnJheS5wdXNoKFxuICAgICAgICB0cmF2ZWxBcHAuZ2V0UGl4YShjb3VudHJ5T2JqLmNvdW50cnlOYW1lKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIHdoZW4gYWxsIHdpa2kgYW5kIHBpeGEgcHJvbWlzZXMgYXJlIGZ1bGZpbGxlZCwgc3RvcmUgdGhlIHJlc3VsdHNcbiAgICAvLyB0byBwcmVwYXJlIHRoZW0gZm9yIGRpc3BsYXlcbiAgICAkLndoZW4oLi4udHJhdmVsQXBwLndpa2lQcm9taXNlQXJyYXksIC4uLnRyYXZlbEFwcC5waXhhUHJvbWlzZUFycmF5KS50aGVuKFxuICAgICAgKC4uLndpa2lQaXhhUmVzdWx0cykgPT4ge1xuICAgICAgICAvLyBnbyB0aHJvdWdoIHRoZSB3aWtpUGl4YSByZXN1bHRzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lraVBpeGFSZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gZmlyc3QgdGhyZWUgYXJlIHdpa2ksIHB1c2ggKHN0b3JlKSBpbnRvIGFycmF5XG4gICAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgICB0cmF2ZWxBcHAuc3RvcmVXaWtpKHdpa2lQaXhhUmVzdWx0c1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGxhc3QgdGhyZWUgYXJlIHBpeGEsIHB1c2ggKHN0b3JlKSBpbnRvIGFycmF5XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cmF2ZWxBcHAuc3RvcmVQaXhhKHdpa2lQaXhhUmVzdWx0c1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25jZSByZXN1bHRzIGFsbCBzdG9yZWQsIGRpc3BsYXkgYWxsIGluZm8gb24gc2NyZWVuICgzIGNvdW50cmllcywgd2lraSBhbmQgcGl4YSlcbiAgICAgICAgdHJhdmVsQXBwLmRpc3BsYXlEZXN0aW5hdGlvbnMoZmluYWxSZXN1bHRzLCBbXG4gICAgICAgICAgc3RhdFR5cGUxLFxuICAgICAgICAgIHN0YXRUeXBlMixcbiAgICAgICAgICBzdGF0VHlwZTNcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG59O1xuXG4vKiA1LiBTVEFSVCBDQUxDVUxBVElPTiBGT1IgMyBSRUNPTU1FTkRFRCBDT1VOVFJJRVMgKi9cbnRyYXZlbEFwcC5nZXRSZWNvbW1lbmRhdGlvbnMgPSAocmVzLCBzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKSA9PiB7XG4gIC8vIEZpbmQgZGlyZWN0aW9uIG9mIGVhY2ggc3RhdCB0eXBlIGFuZCByZXR1cm4gaXQgaW4gYW4gYXJyYXlcbiAgbGV0IGFyckRpcmVjdGlvbnMgPSB0cmF2ZWxBcHAuZmluZERpcmVjdGlvbnMoc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlMyk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBhcnJheXMgYW5kIG51bWJlcnMgZm9yIGVhY2ggcm91bmQgb2YgaXRlcmF0aW9uL2ZpbHRlcmluZ1xuICBsZXQgaW5pdGlhbEFyciA9IFtdO1xuICBsZXQgYXJyMSA9IFtdO1xuICBsZXQgYXJyMiA9IFtdO1xuICBsZXQgYXJyMyA9IFtdO1xuICBsZXQgaW5pdGlhbEl0ZXIgPSA2MDtcbiAgbGV0IGl0ZXJhdGlvbjEgPSAxMDtcbiAgbGV0IGl0ZXJhdGlvbjIgPSA1O1xuICBsZXQgaXRlcmF0aW9uMyA9IDM7XG5cbiAgLy9Jbml0aWFsIGZpbHRlciB0byBhY2NvdW50IGZvciByZWFsaXN0aWMgcmVzdWx0cyAoYmFzZWQgb24gSERJKVxuICBpbml0aWFsQXJyID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMocmVzLCBcImhkaVwiLCBcIm1heFwiLCBpbml0aWFsSXRlcik7XG5cbiAgLy8gSVRFUkFUSU9OIDFcbiAgYXJyMSA9IHRyYXZlbEFwcC5kZXRlcm1pbmVSZXN1bHRzKFxuICAgIGluaXRpYWxBcnIsXG4gICAgc3RhdFR5cGUxLFxuICAgIGFyckRpcmVjdGlvbnNbMF0sXG4gICAgaXRlcmF0aW9uMVxuICApO1xuXG4gIC8vIElURVJBVElPTiAyXG4gIGFycjIgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyhcbiAgICBhcnIxLFxuICAgIHN0YXRUeXBlMixcbiAgICBhcnJEaXJlY3Rpb25zWzFdLFxuICAgIGl0ZXJhdGlvbjJcbiAgKTtcblxuICAvLyBJVEVSQVRJT04gM1xuICBhcnIzID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMoXG4gICAgYXJyMixcbiAgICBzdGF0VHlwZTMsXG4gICAgYXJyRGlyZWN0aW9uc1syXSxcbiAgICBpdGVyYXRpb24zXG4gICk7XG5cbiAgLy8gcmV0dXJuIHRoZSBhcnJheSB3aXRoIHRoZSBmaW5hbCByZXN1bHRzXG4gIHJldHVybiBhcnIzO1xufTtcblxuLyogNS4xIEZJTkQgTUlOL01BWCBGT1IgRUFDSCBTVEFUIFRZUEUgKi9cbnRyYXZlbEFwcC5maW5kRGlyZWN0aW9ucyA9IChzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKSA9PiB7XG4gIC8vIEZpbmQgd2hldGhlciBlYWNoIHN0YXR0eXBlIGlzIG1heCBvciBtaW5cbiAgbGV0IHN0YXQxRGlyZWN0aW9uID0gXCJcIjtcbiAgbGV0IHN0YXQyRGlyZWN0aW9uID0gXCJcIjtcbiAgbGV0IHN0YXQzRGlyZWN0aW9uID0gXCJcIjtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIFN0YXQgQXJyYXkgdG8gZmluZCBkaXJlY3Rpb24gb2Ygc3RhdHR5cGVzXG4gIHRyYXZlbEFwcC5zdGF0QXJyYXkuZm9yRWFjaChwdXJwb3NlID0+IHtcbiAgICAvLyBpZiB0aGUgY3VycmVudCBwdXJwb3NlIG1hdGNoZXMgdGhlIHVzZXIgcHVycG9zZSxcbiAgICBpZiAocHVycG9zZS5pZCA9PT0gdHJhdmVsQXBwLnVzZXJQdXJwb3NlKSB7XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBzdGF0cyBhcnJheSBvZiB0aGF0IHB1cnBvc2Ugb2JqZWN0XG4gICAgICBwdXJwb3NlLnN0YXRzLmZvckVhY2goc3RhdCA9PiB7XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0YXQgaW4gdGhlIHN0YXRzIGFycmF5IGlzIHN0YXR0eXBlMSwgZ2V0IHRoaXMgZGlyZWN0aW9uXG4gICAgICAgIGlmIChzdGF0LnN0YXQgPT09IHN0YXRUeXBlMSkge1xuICAgICAgICAgIHN0YXQxRGlyZWN0aW9uID0gc3RhdC5kaXJlY3Rpb247XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXRDb2RlQXJyYXkucHVzaChzdGF0LnN0YXQpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheS5wdXNoKHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheS5wdXNoKHN0YXQuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0YXQgaW4gdGhlIHN0YXRzIGFycmF5IGlzIHN0YXR0eXBlMiwgZ2V0IHRoaXMgZGlyZWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHN0YXQuc3RhdCA9PT0gc3RhdFR5cGUyKSB7XG4gICAgICAgICAgc3RhdDJEaXJlY3Rpb24gPSBzdGF0LmRpcmVjdGlvbjtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdENvZGVBcnJheS5wdXNoKHN0YXQuc3RhdCk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5LnB1c2goc3RhdC5zdGF0TmFtZSk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5LnB1c2goc3RhdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RhdCBpbiB0aGUgc3RhdHMgYXJyYXkgaXMgc3RhdHR5cGUzLCBnZXQgdGhpcyBkaXJlY3Rpb25cbiAgICAgICAgZWxzZSBpZiAoc3RhdC5zdGF0ID09PSBzdGF0VHlwZTMpIHtcbiAgICAgICAgICBzdGF0M0RpcmVjdGlvbiA9IHN0YXQuZGlyZWN0aW9uO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0Q29kZUFycmF5LnB1c2goc3RhdC5zdGF0KTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXkucHVzaChzdGF0LnN0YXROYW1lKTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXkucHVzaChzdGF0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gW3N0YXQxRGlyZWN0aW9uLCBzdGF0MkRpcmVjdGlvbiwgc3RhdDNEaXJlY3Rpb25dO1xufTtcblxuLyogNS4yIEZVTkNUSU9OIFRPIERFVEVSTUlORSBXSEVUSEVSIFRIRSBUT1AgT1IgQk9UVE9NIFNDT1JFUyBTSE9VTEQgQkUgRk9VTkQgKi9cbnRyYXZlbEFwcC5kZXRlcm1pbmVSZXN1bHRzID0gKGFycmF5LCBzdGF0VHlwZSwgZGlyZWN0aW9uLCBpdGVyYXRpb25OdW1iZXIpID0+IHtcbiAgbGV0IHJlc3VsdEFycmF5ID0gW107XG4gIC8vIGlmIHdlIHdhbnQgVE9QIG51bWJlcnNcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJtYXhcIikge1xuICAgIHJlc3VsdEFycmF5ID0gdHJhdmVsQXBwLmRldGVybWluZU5Db3VudHJpZXMoXG4gICAgICBhcnJheSxcbiAgICAgIHN0YXRUeXBlLFxuICAgICAgaXRlcmF0aW9uTnVtYmVyLFxuICAgICAgMVxuICAgICk7XG4gIH1cbiAgLy8gaWYgd2Ugd2FudCBCT1QgbnVtYmVyc1xuICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwibWluXCIpIHtcbiAgICByZXN1bHRBcnJheSA9IHRyYXZlbEFwcC5kZXRlcm1pbmVOQ291bnRyaWVzKFxuICAgICAgYXJyYXksXG4gICAgICBzdGF0VHlwZSxcbiAgICAgIGl0ZXJhdGlvbk51bWJlcixcbiAgICAgIC0xXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0QXJyYXk7XG59O1xuXG4vKiA1LjMgQ0FMQ1VMQVRFIFRIRSBOIENPVU5UUklFUyAqL1xudHJhdmVsQXBwLmRldGVybWluZU5Db3VudHJpZXMgPSAocmVzdWx0LCBzdGF0VHlwZSwgbiwgZGlyZWN0aW9uKSA9PiB7XG4gIC8vIGluaXRpYWxpemUgYSBoZWFwIGFycmF5IHRvIGtlZXAgdHJhY2sgb2YgdGhlIG4gbGFyZ2VzdC9zbWFsbGVzdCBzdGF0IHNjb3Jlc1xuICBsZXQgaGVhcCA9IG5ldyBNaW5IZWFwKCk7XG5cbiAgLy8gaW5pdGlhbGl6ZSBhIHNlY29uZGFyeSBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHRoZSBuIHNjb3JlcyBBTkRcbiAgLy8gdGhlIGFzc29jaWF0ZWQgY291bnRyeSB0byBlYWNoIHNjb3JlXG4gIGxldCBuQ291bnRyaWVzID0gW107XG5cbiAgLy8gc3RvcmUgdGhlIHN0YXQgdHlwZSBpbnRvIGEgcHJvcGVydHkgdmFyaWFibGUgZm9yIGVhc2llciB1c2VcbiAgbGV0IHByb3BlcnR5ID0gc3RhdFR5cGU7XG5cbiAgLy8gc3RhcnQgYSBjb3VudHJ5IGNvdW50ZXIgYXQgMCBqdXN0IGZvciB0aGUgc2FrZSBvZiBhZGRpbmcgdGhlIGZpcnN0IG4gY291bnRyaWVzIGludG8gdGhlIGhlYXBcbiAgbGV0IGNvdW50cnlDb3VudGVyID0gMDtcblxuICAvLyBnbyB0aHJvdWdoIGVhY2ggY291bnRyeSBmcm9tIHRoZSByZXN1bHRzIG9mIHRoZSBBSkFYIGNhbGwgdG8gSU5RU3RhdHNcbiAgcmVzdWx0Lm1hcChjb3VudHJ5ID0+IHtcbiAgICAvLyBzdG9yZSB0aGUgc3RhdCBzY29yZSBhbmQgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgY291bnRyeSBpbiB2YXJpYWJsZXMuXG4gICAgLy8gSU1QT1JUQU5UOiBtdWx0aXBseSBieSBkaXJlY3Rpb24gdG8gaW1wbGVtZW50IG1heC9taW4gaGVhcFxuICAgIC8vIGEgZGlyZWN0aW9uIG9mIDEgPSB3ZSB3YW50IG1heGltdW0gc2NvcmVzXG4gICAgLy8gYSBkaXJlY3Rpb24gb2YgLTEgPSB3ZSB3YW50IG1pbmltdW0gc2NvcmVzXG4gICAgbGV0IHN0YXQgPSBOdW1iZXIoY291bnRyeVtwcm9wZXJ0eV0pICogZGlyZWN0aW9uO1xuXG4gICAgLy8gaWYgaXQncyB0aGUgZmlyc3QgbiBjb3VudHJpZXMgZnJvbSB0aGUgcmVzdWx0LCBubyB3b3JrIHJlcXVpcmVkLiBKdXN0IGFkZCB0aGVtIGRpcmVjdGx5IGludG8gYm90aCB0aGUgaGVhcCBhbmQgbkNvdW50cmllcyB2YXJpYWJsZXNcbiAgICBpZiAoY291bnRyeUNvdW50ZXIgPCBuKSB7XG4gICAgICBoZWFwLmFkZChzdGF0KTtcbiAgICAgIG5Db3VudHJpZXMucHVzaChjb3VudHJ5KTtcblxuICAgICAgLy8gaW5jcmVtZW50IGNvdW50cnlDb3VudGVyIHRvIGtub3cgd2hlbiB3ZSdyZSBwYXN0IHRoZSBmaXJzdCBuIGNvdW50cmllc1xuICAgICAgY291bnRyeUNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ09ORElUSU9OIFRPIENIRUNLIElGIHRoZSBjdXJyZW50IGNvdW50cnkgc3RhdCBpcyBncmVhdGVyL3NtYWxsZXIgdGhhbiBhbnkgb2YgdGhlIGN1cnJlbnQgc3RhdHMgaW4gdGhlIGN1cnJlbnQgbiBjb3VudHJpZXNcbiAgICAgIGlmIChzdGF0ID4gaGVhcC5wZWVrKCkpIHtcbiAgICAgICAgLy8gaWYgc28sIGZpbmQgdGhlIGxvY2F0aW9uIG9mIHRoZSBzbWFsbGVzdC9sYXJnZXN0IHN0YXQgc2NvcmUgaW4gdGhlIGN1cnJlbnQgbkNvdW50cmllcyBhcnJheSBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgc3RhdCBhbmQgaXRzIGFzc29jaWF0ZWQgY291bnRyeVxuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IG5Db3VudHJpZXMubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICAvLyBtdWx0aXBseSBieSBkaXJlY3Rpb24gYWdhaW4gdG8gY29tcGFyZSBwcm9wZXJseSB3aXRoIHRoZSBoZWFwXG4gICAgICAgICAgbGV0IGN1cnJlbnRTdGF0ID0gTnVtYmVyKG5Db3VudHJpZXNbbV1bcHJvcGVydHldKSAqIGRpcmVjdGlvbjtcbiAgICAgICAgICBpZiAoY3VycmVudFN0YXQgPT09IGhlYXAucGVlaygpKSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGNvdW50cnlcbiAgICAgICAgICAgIG5Db3VudHJpZXMuc3BsaWNlKG0sIDEsIGNvdW50cnkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBzbWFsbGVzdC9sYXJnZXN0IHN0YXQgc2NvcmUgZnJvbSB0aGUgaGVhcCBhcyB3ZWxsXG4gICAgICAgIGhlYXAucG9sbCgpO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgbmV3IHNtYWxsZXN0L2xhcmdlc3Qgc2NvcmUgb250byB0aGUgaGVhcFxuICAgICAgICBoZWFwLmFkZChzdGF0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAvLyByZXR1cm4gbiBjb3VudHJpZXNcbiAgcmV0dXJuIG5Db3VudHJpZXM7XG59O1xuXG4vKiA2LiBTRU5EIEFQSSBSRVFVRVNUUyBUTyBXSUtJIEFORCBQSVhBICovXG5cbi8vIDYuMSBXSUtJUEVESUEgQVBJOiBHRVQgQU5EIFNUT1JFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0b3JlIGltcG9ydGFudCBpbmZvIGZvciBjYWxscyB0byB0aGUgV2lraSBBUEkuXG50cmF2ZWxBcHAud2lraVVSTCA9IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocFwiO1xuLy8gR2V0IGluZm8gZnJvbSBXaWtpcGVkaWEgKEFKQVgpXG50cmF2ZWxBcHAuZ2V0V2lraSA9IGNvdW50cnkgPT4ge1xuICAvLyBnZXQgZXh0cmFjdFxuICByZXR1cm4gJC5hamF4KHtcbiAgICB1cmw6IHRyYXZlbEFwcC53aWtpVVJMLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJqc29ucFwiLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjdGlvbjogXCJxdWVyeVwiLFxuICAgICAgcHJvcDogXCJleHRyYWN0c1wiLFxuICAgICAgdGl0bGVzOiBjb3VudHJ5LFxuICAgICAgZm9ybWF0OiBcImpzb25cIixcbiAgICAgIGV4bGltaXQ6IDEsXG4gICAgICBleGNoYXJzOiAyODAsXG4gICAgICBleGludHJvOiB0cnVlLFxuICAgICAgZXhwbGFpbnRleHQ6IHRydWUsXG4gICAgICByZWRpcmVjdHM6IDFcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gU3RvcmUgV2lraXBlZGlhIGNvdW50cnkgZXh0cmFjdFxudHJhdmVsQXBwLnN0b3JlV2lraSA9IHJlc3VsdCA9PiB7XG4gIC8vIFRoaXMgdmFyaWFibGUgc3RvcmVzIHRoZSBvYmplY3QgdGhhdCBob2xkcyBhIGtleSBuYW1lIHVuaXF1ZSB0byBldmVyeSBjb3VudHJ5LiBUaGUgdmFsdWUgb2YgdGhpcyBrZXkgaXMgYW4gb2JqZWN0IHRoYXQgaG9sZHMgdGhlIGV4dGFjdC5cbiAgY29uc3Qgd2lraUV4dHJhY3RPYmplY3QgPSByZXN1bHRbMF0ucXVlcnkucGFnZXM7XG4gIC8vIElmIHdlIGNvbnZlcnQgdGhlIGFib3ZlIG9iamVjdCBpbnRvIGFuIGFycmF5LCB0aGUgZXh0cmFjdCBjYW4gYmUgYWNjZXNzZWQgb24gdGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBhcnJheS4gVGhpcyB2YXJpYWJsZSBob2xkcyB0aGUgd2lraSBleHRyYWN0LlxuICB0cmF2ZWxBcHAud2lraUV4dHJhY3QucHVzaChPYmplY3QudmFsdWVzKHdpa2lFeHRyYWN0T2JqZWN0KVswXS5leHRyYWN0KTtcbn07XG5cbi8vIDYuMiBQSVhBQkFZIEFQSTogR0VUIEFORCBTVE9SRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3RvcmUgaW1wb3J0YW50IGluZm8gZm9yIGNhbGxzIHRvIHRoZSBQaXhhYmF5IEFQSS5cbnRyYXZlbEFwcC5waXhhS2V5ID0gXCI5ODc5NTcxLWU0Y2JiZWYzZTY5MmFhMTVhMjRhNzExOWJcIjtcbnRyYXZlbEFwcC5waXhhVVJMID0gXCJodHRwczovL3d3dy5waXhhYmF5LmNvbS9hcGkvXCI7XG4vLyBHZXQgaW5mbyBmcm9tIFdpa2lwZWRpYSAoQUpBWClcbnRyYXZlbEFwcC5nZXRQaXhhID0gY291bnRyeSA9PiB7XG4gIC8vIEdldCBpbWFnZSBVUkxcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdXJsOiB0cmF2ZWxBcHAucGl4YVVSTCxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICBkYXRhOiB7XG4gICAgICBrZXk6IHRyYXZlbEFwcC5waXhhS2V5LFxuICAgICAgcTogY291bnRyeSxcbiAgICAgIHBlcl9wYWdlOiAxNVxuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBTdG9yZSBQaXhhYmF5IGNvdW50cnkgaW1hZ2VzIG9uIHRoZSBwYWdlXG50cmF2ZWxBcHAuc3RvcmVQaXhhID0gcmVzdWx0cyA9PiB7XG4gIC8vIFN0b3JlIHRoZSBhcnJheSB0aGF0IGhvbGRzIHRoZSBpbWFnZSBVUkxzIGluIGFuIGFycmF5XG4gIGNvbnN0IHJlc3VsdHNBcnJheSA9IHJlc3VsdHNbMF0uaGl0cztcbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSByZXN1bHRzIGFycmF5IGFuZCBwdXNoIGFsbCBpbWFnZXMgaW50byB0aGUgaW1hZ2VBcnJheVxuICByZXN1bHRzQXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAvLyBBcnJheSBvZiBpbWFnZXMgZm9yIGVhY2ggY291bnRyeVxuICAgIHRyYXZlbEFwcC5pbWFnZUFycmF5LnB1c2goaXRlbS5sYXJnZUltYWdlVVJMKTtcbiAgICAvLyBBcnJheSBvZiBpbWFnZSBpbmZvcm1hdGlvbiBmcm9tIGVhY2ggY291bnRyeSB0byBiZSB1c2VkIGZvciBBbHQgdGV4dFxuICAgIHRyYXZlbEFwcC5pbWFnZVRleHRBcnJheS5wdXNoKGl0ZW0udGFncyk7XG4gIH0pO1xufTtcblxuLyogNy4gRElTUExBWSBERVNUSU9OQVRJT05TIE9OIFNDUkVFTiBXSVRIIFdJS0kgKyBQSVhBIFJFU1VMVFMgKi9cbnRyYXZlbEFwcC5kaXNwbGF5RGVzdGluYXRpb25zID0gKHJlc3VsdHMsIHN0YXRDaG9pY2VzKSA9PiB7XG4gIC8vIEdldCByaWQgb2YgcHJldmlvdXMgY2xpY2tlZCByZXN1bHRzXG4gICQoXCIucmVzdWx0c1wiKS5lbXB0eSgpO1xuICAvLyBHbyB0aHJvdWdoIGVhY2ggY291bnRyeSByZXN1bHQgYW5kIGJ1aWxkIHRoZSBzdHJpbmcgbGl0ZXJhbCB0byBhcHBlbmQgdG8gdGhlIHBhZ2VcbiAgbGV0IGNvdW50cnlDb3VudGVyID0gMDtcbiAgbGV0IGltYWdlQ291bnRlciA9IDA7XG4gIHJlc3VsdHMuZm9yRWFjaChjb3VudHJ5ID0+IHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgYWxsIGVsZW1lbnRzIGZvciBvbmUgY291bnRyeSByZXN1bHRcbiAgICBsZXQgY291bnRyeUNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIilcbiAgICAgIC5hZGRDbGFzcyhcInJlc3VsdC1jb250YWluZXJcIilcbiAgICAgIC8vIGFzc2lnbiByYW5kb20gcGl4YSBpbWFnZSBvZiBjb3VudHJ5IHRvIHRoZSByZXN1bHQgYmFja2dyb3VuZFxuICAgICAgLmNzcyhcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCIsXG4gICAgICAgIGB1cmwoXCIke1xuICAgICAgICB0cmF2ZWxBcHAuaW1hZ2VBcnJheVtcbiAgICAgICAgdHJhdmVsQXBwLnJhbmRvbWl6ZShpbWFnZUNvdW50ZXIsIGltYWdlQ291bnRlciArIDE1KVxuICAgICAgICBdXG4gICAgICAgIH1cIilgXG4gICAgICApO1xuICAgIC8vIFRoaXMgZWxlbWVudCB3aWxsIGhvbGQgYWxsIHRleHQgYW5kIGltYWdlKHMpIHJlZmVycmluZyB0byB0aGUgY291bnRyeSByZXN1bHRcbiAgICBsZXQgY291bnRyeUNhcmRFbGVtZW50ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiY2FyZFwiKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIG5hbWUgb2YgdGhlIGNvdW50cnlcbiAgICBsZXQgY291bnRyeU5hbWVFbGVtZW50ID0gJChcIjxoMj5cIilcbiAgICAgIC5hZGRDbGFzcyhcImNvdW50cnktbmFtZVwiKVxuICAgICAgLnRleHQoYCR7Y291bnRyeS5jb3VudHJ5TmFtZX1gKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjb3VudHJ5LCB0YWtlbiBmcm9tIHRoZSB3aWtpIEFQSVxuICAgIGxldCBjb3VudHJ5RGVzY3JpcHRpb25FbGVtZW50ID0gJChcIjxwPlwiKVxuICAgICAgLmFkZENsYXNzKFwid2lraS10ZXh0XCIpXG4gICAgICAudGV4dCh0cmF2ZWxBcHAud2lraUV4dHJhY3RbY291bnRyeUNvdW50ZXJdKTtcbiAgICBjb3VudHJ5Q291bnRlcisrO1xuICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgdGV4dCBmb3IgZWFjaCBvZiB0aGUgdGhyZWUgc3RhdHMgd2UncmUgZGlzcGxheWluZ1xuICAgIGxldCBzdGF0TGlzdEVsZW1lbnQgPSAkKFwiPHVsPlwiKS5hZGRDbGFzcyhcInN0YXQtbGlzdFwiKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIGNvbnRhaW5lciB0aGF0IHdpbGwgaG9sZCB0aGUgc21hbGwgcGl4YSBjb3VudHJ5IGltYWdlXG4gICAgbGV0IHNtYWxsUGl4YUNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXG4gICAgICBcImNvdW50cnktaW1hZ2UtY29udGFpbmVyXCJcbiAgICApO1xuICAgIC8vIFRoaXMgbmV3IGltYWdlIGNvdW50ZXIgZ2V0cyB0aGUgaW1hZ2UgaW4gdGhlIGFycmF5IHRoYXQgZm9sbG93cyB0aGUgZmlyc3QgaW1hZ2UgYmVpbmcgdXNlZCBhcyBhIGJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSBjYXJkXG4gICAgLy8gVGhpcyBpbWFnZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGltYWdlIGNvbnRhaW5lclxuICAgIGxldCBzbWFsbFBpeGFJbWFnZSA9ICQoXCI8aW1nPlwiKVxuICAgICAgLmFkZENsYXNzKFwiY291bnRyeS1pbWFnZVwiKVxuICAgICAgLmF0dHIoe1xuICAgICAgICBzcmM6IGAke1xuICAgICAgICAgIHRyYXZlbEFwcC5pbWFnZUFycmF5W1xuICAgICAgICAgIHRyYXZlbEFwcC5yYW5kb21pemUoaW1hZ2VDb3VudGVyLCBpbWFnZUNvdW50ZXIgKyAxNSlcbiAgICAgICAgICBdXG4gICAgICAgICAgfWAsXG4gICAgICAgIGFsdDogYFNjZW5pYyBpbWFnZSBvZiAke2NvdW50cnkuY291bnRyeU5hbWV9LiBJbWFnZSB0YWdzIGluY2x1ZGUgJHtcbiAgICAgICAgICB0cmF2ZWxBcHAuaW1hZ2VUZXh0QXJyYXlcbiAgICAgICAgICB9LmBcbiAgICAgIH0pO1xuICAgIC8vIEFkZCAxNSB0byB0aGUgaW1hZ2UgY291bnRlciBlbnN1cmVzIHRoYXQgZXZlcnkgaXRlcmF0aW9uIHRocm91Z2ggdGhlIGZvckVhY2ggd2lsbCBhZGQgaW1hZ2VzIHRvIHRoZSBhc3NvY2lhdGVkIGNvdXRyaWVzXG4gICAgaW1hZ2VDb3VudGVyICs9IDE1O1xuICAgIC8vQXBwZW5kIHRoZSBjb3VudHJ5IGltYWdlIHRvIGl0cyBjb250YWluZXJcbiAgICBzbWFsbFBpeGFDb250YWluZXJFbGVtZW50LmFwcGVuZChzbWFsbFBpeGFJbWFnZSk7XG4gICAgLy8gQXBwZW5kIHRoZSBjb3VudHJ5IG5hbWUgPGgyPiwgd2lraSB0ZXh0IDxwPiwgc3RhdCBsaXN0IDx1bD4gYW5kIGltYWdlIGNvbnRhaW5lciA8ZGl2PiB0byB0aGUgY2FyZCA8ZGl2Pi5cbiAgICBjb3VudHJ5Q2FyZEVsZW1lbnQuYXBwZW5kKFxuICAgICAgY291bnRyeU5hbWVFbGVtZW50LFxuICAgICAgY291bnRyeURlc2NyaXB0aW9uRWxlbWVudCxcbiAgICAgIHN0YXRMaXN0RWxlbWVudCxcbiAgICAgIHNtYWxsUGl4YUNvbnRhaW5lckVsZW1lbnRcbiAgICApO1xuICAgIC8vIEFwcGVuZCB0aGUgY2FyZCBkaXYgdG8gdGhlIHJlc3VsdC1jb250YWluZXJcbiAgICBjb3VudHJ5Q29udGFpbmVyRWxlbWVudC5hcHBlbmQoY291bnRyeUNhcmRFbGVtZW50KTtcbiAgICAvL0FwcGVuZCB0aGUgcmVzdWx0LWNvbnRhaW5lciB0byB0aGUgcmVzdWx0cyBzZWN0aW9uIGVsZW1lbnQgb24gb3VyIHBhZ2VcbiAgICAkKFwiLnJlc3VsdHNcIikuYXBwZW5kKGNvdW50cnlDb250YWluZXJFbGVtZW50KTtcblxuICAgIC8vIEdvIHRocm91Z2ggdGhlIGFycmF5IFwic3RhdENob2ljZXNcIiBhbmQgc2V0IHVwIDMgaW5mb3JtYXRpb246XG4gICAgLy8gMS4gdGl0bGUgb2Ygc3RhdCAodGFrZW4gZnJvbSB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXkpXG4gICAgLy8gMi4gdmFsdWUgb2Ygc3RhdCAodGFrZW4gZnJvbSByZXN1bHRzIG9iamVjdClcbiAgICAvLyAzLiBkZXNjcmlwdGlvbiBvZiBzdGF0ICh0YWtlbiBmcm9tIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheSlcbiAgICBsZXQgc3RhdENvdW50ZXIgPSAwO1xuICAgIHN0YXRDaG9pY2VzLmZvckVhY2goc3RhdCA9PiB7XG4gICAgICBsZXQgc3RhdFRpdGxlID0gdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5W3N0YXRDb3VudGVyXTtcbiAgICAgIGxldCBzdGF0VmFsdWUgPSBjb3VudHJ5W3RyYXZlbEFwcC5zdGF0Q29kZUFycmF5W3N0YXRDb3VudGVyXV07XG4gICAgICBsZXQgc3RhdERlc2NyaXB0aW9uID0gdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5W3N0YXRDb3VudGVyXTtcbiAgICAgIHN0YXRDb3VudGVyKys7XG4gICAgICAvLyBUaGlzIGxpc3QgaXRlbSBlbGVtZW50IHdpbGwgaG9sZCBzdGF0IGluZm9ybWF0aW9uXG4gICAgICBsZXQgc3RhdExpc3RJdGVtRWxlbWVudCA9ICQoXCI8bGk+XCIpLmFkZENsYXNzKFwic3RhdC1saXN0X19pdGVtXCIpO1xuICAgICAgLy8gVGhpcyBkaXYgd2lsbCBob2xkIHRoZSBzdGF0IHRpdGxlIGFuZCBxdWVzdGlvbiBtYXJrIGljb25cbiAgICAgIGxldCBzdGF0VGl0bGVJY29uQ29udGFpbmVyRWxlbWVudCA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcbiAgICAgICAgXCJzdGF0LWxpc3RfX2l0ZW1fX3RpdGxlLWljb24tY29udGFpbmVyXCJcbiAgICAgICk7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIHN0YXQgdGl0bGUgYW5kIHZhbHVlXG4gICAgICBsZXQgc3RhdFRpdGxlRWxlbWVudCA9ICQoXCI8aDQ+XCIpXG4gICAgICAgIC5hZGRDbGFzcyhcInN0YXQtbGlzdF9faXRlbV9fdGl0bGUtaWNvbi1jb250YWluZXJfX3RpdGxlLW51bWJlclwiKVxuICAgICAgICAudGV4dChgJHtzdGF0VGl0bGV9OiAke3RyYXZlbEFwcC5udW1iZXJXaXRoQ29tbWFzKHN0YXRWYWx1ZSl9YCk7XG4gICAgICAvLyBUaGlzIHF1ZXN0aW9uIG1hcmsgaWNvbiB3aWxsIHNpdCBuZXh0IHRvIHRoZSBzdGF0VGl0bGVFbGVtZW50IGFuZCB3aGVuIGNsaWNrZWQvaG92ZXJvdmVyLCB3aWxsIGRpc3BsYXkgdGhlIHN0YXQgZGVzY3JpcHRpb25cbiAgICAgIGxldCBzdGF0SG92ZXJJY29uRWxlbWVudCA9IGA8aSBjbGFzcz1cInN0YXQtbGlzdF9faXRlbV9fdGl0bGUtaWNvbi1jb250YWluZXJfX2ljb24gZmFyIGZhLXF1ZXN0aW9uLWNpcmNsZVwiPjwvaT5gO1xuICAgICAgLy8gYXBwZW5kIHRoZSBzdGF0IHRpdGxlIGFuZCBpY29uIHRvIHRoZSBzdGF0VGl0bGVJY29uQ29udGFpbmVyRWxlbWVudFxuICAgICAgc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKFxuICAgICAgICBzdGF0VGl0bGVFbGVtZW50LFxuICAgICAgICBzdGF0SG92ZXJJY29uRWxlbWVudFxuICAgICAgKTtcbiAgICAgIC8vIFRoaXMgZGl2IHdpbGwgaG9sZCB0aGUgc3RhdCBkZXNjcmlwdGlvbiBhbmQgaXMgYSBzaWJsaW5nIG9mIHRoZSBzdGF0VGl0bGVJY29uQ29udGFpbmVyLlxuICAgICAgbGV0IHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXG4gICAgICAgIFwic3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXIgZGlzcGxheS1ub25lXCJcbiAgICAgICk7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIHN0YXQgZGVzY3JpcHRpb25cbiAgICAgIGxldCBzdGF0RGVzY3JpcHRpb25FbGVtZW50ID0gJChcIjxwPlwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lcl9fZGVzY3JpcHRpb25cIilcbiAgICAgICAgLnRleHQoc3RhdERlc2NyaXB0aW9uKTtcbiAgICAgIC8vIEFwcGVuZCB0aGUgc3RhdERlc2NyaXB0aW9uRWxlbWVudCB0byB0aGUgc3RhdERlc2NyaXB0aW9uQ29udGFpbmVyRWxlbWVudFxuICAgICAgc3RhdERlc2NyaXB0aW9uQ29udGFpbmVyRWxlbWVudC5hcHBlbmQoc3RhdERlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgICAvLyBBcHBlbmQgdGhlIHR3byBzdGF0IGRpdiBjb250YWluZXJzIHRvIHRoZSA8bGk+XG4gICAgICBzdGF0TGlzdEl0ZW1FbGVtZW50LmFwcGVuZChcbiAgICAgICAgc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnQsXG4gICAgICAgIHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnRcbiAgICAgICk7XG4gICAgICAvLyBBcHBlbmQgdGhlIDxsaT5zIHRvIHRoZSA8dWw+XG4gICAgICBzdGF0TGlzdEVsZW1lbnQuYXBwZW5kKHN0YXRMaXN0SXRlbUVsZW1lbnQpO1xuICAgIH0pO1xuICB9KTtcblxuICB0cmF2ZWxBcHAuZmluYWxEaXNwbGF5KCk7XG59O1xuXG4vKiAgNy4xIE9uY2UgYWxsIGltYWdlcyBhcmUgbG9hZGVkIGFzIGJhY2tncm91bmQgaW1hZ2VzIG9yIHJlZ3VsYXIgaW1hZ2VzLCBkaXNwbGF5IHRoZSBmaW5hbCByZXN1bHRzIHdpdGhvdXQgXCJsYWdcIiovXG50cmF2ZWxBcHAuZmluYWxEaXNwbGF5ID0gKCkgPT4ge1xuICAkKFwiLnJlc3VsdHNcIikud2FpdEZvckltYWdlcyhmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5yZXN1bHRzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xuXG4gICAgbGV0IGZsaWNraXR5T3JOb3QgPSBcImZsZXhcIjtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxOTIwcHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgIC8qIHRoZSB2aWV3cG9ydCBpcyBhdCBtb3N0IDExMDAgcGl4ZWxzIHdpZGUgKi9cbiAgICAgIGZsaWNraXR5T3JOb3QgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgLy8gJChcIi5yZXN1bHRzXCIpLmNzcyhcImRpc3BsYXlcIiwgZmxpY2tpdHlPck5vdCk7XG4gICAgJChcImh0bWwsIGJvZHlcIilcbiAgICAgIC5zdG9wKClcbiAgICAgIC5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKFwiLnJlc3VsdHNcIikub2Zmc2V0KCkudG9wIH0sIDkwMCwgXCJzd2luZ1wiKTtcblxuICAgIC8vIHJlbW92ZSBsb2FkZXIgYW5kIGRpc3BsYXkgc3VibWl0IHJhbmtpbmcgYnV0dG9uIGFnYWluXG4gICAgbGV0IG1hcmtVcEJ1dHRvbiA9IGA8bGk+PGJ1dHRvbiBjbGFzcz1cInVzZXItc3VibWl0IGJ0blwiPlN1Ym1pdCBSYW5raW5nPC9idXR0b24+PC9saT5gO1xuICAgICQoXCIuY2hvaWNlc1wiKVxuICAgICAgLmZpbmQoXCJsaTpsYXN0LWNoaWxkXCIpXG4gICAgICAuaHRtbChtYXJrVXBCdXR0b24pO1xuXG4gICAgLyogRkxJQ0tJVFkgKi9cbiAgICAkKFwiLnJlc3VsdHNcIikuZmxpY2tpdHkoe1xuICAgICAgLy8gb3B0aW9uc1xuICAgICAgY2VsbEFsaWduOiBcImxlZnRcIixcbiAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICBhdXRvUGxheTogNTAwMCxcbiAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgIHdhdGNoQ1NTOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gNy4yIE9uIGhvdmVyIG9yIGNsaWNrIG92ZXIgdGhlIHF1ZXN0aW9uIG1hcmsgaWNvbiwgZGlzcGxheSB0aGUgc3RhdCBkZXNjcmlwdGlvblxudHJhdmVsQXBwLmRpc3BsYXlTdGF0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICQoXCIucmVzdWx0c1wiKS5vbihcbiAgICBcImNsaWNrXCIsXG4gICAgXCIuc3RhdC1saXN0X19pdGVtX190aXRsZS1pY29uLWNvbnRhaW5lcl9faWNvblwiLFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5wYXJlbnRzKFwiLnN0YXQtbGlzdF9faXRlbVwiKVxuICAgICAgICAgIC5maW5kKFwiLnN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyXCIpXG4gICAgICAgICAgLmhhc0NsYXNzKFwiZGlzcGxheS1ub25lXCIpID09PSBmYWxzZVxuICAgICAgKSB7XG4gICAgICAgICQoXCIucmVzdWx0c1wiKVxuICAgICAgICAgIC5maW5kKFwiLnN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyXCIpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgICAgLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcIi5yZXN1bHRzXCIpXG4gICAgICAgICAgLmZpbmQoXCIuc3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXJcIilcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAgICQodGhpcylcbiAgICAgICAgICAucGFyZW50cyhcIi5zdGF0LWxpc3RfX2l0ZW1cIilcbiAgICAgICAgICAuZmluZChcIi5zdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lclwiKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGhvbGRzIGFsbCBvdXIgZXZlbnRzIGZ1bnRpb25zXG50cmF2ZWxBcHAuZXZlbnRzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHRyYXZlbEFwcC5nZXRVc2VyUHVycG9zZSgpO1xuICB0cmF2ZWxBcHAuZ2V0U3RhcnRlZCgpO1xuICB0cmF2ZWxBcHAudHJhbnNmb3JtU1ZHKCk7XG4gIHRyYXZlbEFwcC5kaXNwbGF5U3RhdERlc2NyaXB0aW9uKCk7XG59O1xuXG4vLyBJbml0IGZ1bmN0aW9uIHRvIGhvbGQgYWxsIG91ciBmdW5jdGlvbnMgaW4gb3JkZXJcbnRyYXZlbEFwcC5pbml0ID0gZnVuY3Rpb24gKCkge1xuICB0cmF2ZWxBcHAuZXZlbnRzRnVuY3Rpb24oKTtcbiAgdHJhdmVsQXBwLnNsaWRlRHJhZygpO1xufTtcblxuLy8gRG9jdW1lbnQgUmVhZHkgdG8gY2FsbCBvdXIgaW5pdCgpIGZ1bmN0aW9uIGFuZCBzdGFydCB0aGUgYXBwXG4kKGZ1bmN0aW9uICgpIHtcbiAgdHJhdmVsQXBwLmluaXQoKTtcbn0pO1xuXG4vKiA4LiBFWFRSQSBGVU5DVElPTlMgVVNFRCBUSFJPVUdIT1VUIEFQUCAqL1xuXG4vLyA4LjEgU29ydGFibGUgZnVuY3Rpb25hbGl0eSBmb3IgY3JpdGVyaWFzXG50cmF2ZWxBcHAuc2xpZGVEcmFnID0gKCkgPT4ge1xuICAkKFwiLmNob2ljZXNcIilcbiAgICAuc29ydGFibGUoe1xuICAgICAgY29ubmVjdFdpdGg6IFwiLnNvcnRhYmxlXCIsXG4gICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgcmV2ZXJ0OiB0cnVlLFxuICAgICAgaGVscGVyOiBcImNsb25lXCIsXG4gICAgICBjb250YWlubWVudDogXCIuY3JpdGVyaWFzLWNvbnRhaW5lclwiXG4gICAgfSlcbiAgICAuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcbiAgJChcInVsLCBsaVwiKS5kaXNhYmxlU2VsZWN0aW9uKCk7XG59O1xuXG4vLyA4LjIgUmFuZG9taXplciBmdW5jdGlvbiB0byBzZWxlY3QgcmFuZG9tIGltYWdlcyB0byBkaXNwbGF5XG50cmF2ZWxBcHAucmFuZG9taXplID0gKHN0YXJ0aW5nTnVtLCBlbmRpbmdOdW0pID0+IHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbmRpbmdOdW0gLSBzdGFydGluZ051bSkpICsgc3RhcnRpbmdOdW07XG59O1xuXG4vLyA4LjMgRXZlbnQgbGlzdGVuZXIgdG8gdHJhbnNmb3JtIFNWR3MgaW50byBpbmxpbmUgU1ZHUyB0byBiZSBhYmxlIHRvIGNoYW5nZSB0aGVpciBjb2xvcnMgd2l0aCBjc3MgZmlsbFxudHJhdmVsQXBwLnRyYW5zZm9ybVNWRyA9ICgpID0+IHtcbiAgalF1ZXJ5KFwiaW1nLnN2Z1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGltZyA9IGpRdWVyeSh0aGlzKTtcbiAgICB2YXIgaW1nSUQgPSAkaW1nLmF0dHIoXCJpZFwiKTtcbiAgICB2YXIgaW1nQ2xhc3MgPSAkaW1nLmF0dHIoXCJjbGFzc1wiKTtcbiAgICB2YXIgaW1nVVJMID0gJGltZy5hdHRyKFwic3JjXCIpO1xuXG4gICAgalF1ZXJ5LmdldChcbiAgICAgIGltZ1VSTCxcbiAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIEdldCB0aGUgU1ZHIHRhZywgaWdub3JlIHRoZSByZXN0XG4gICAgICAgIHZhciAkc3ZnID0galF1ZXJ5KGRhdGEpLmZpbmQoXCJzdmdcIik7XG5cbiAgICAgICAgLy8gQWRkIHJlcGxhY2VkIGltYWdlJ3MgSUQgdG8gdGhlIG5ldyBTVkdcbiAgICAgICAgaWYgKHR5cGVvZiBpbWdJRCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICRzdmcgPSAkc3ZnLmF0dHIoXCJpZFwiLCBpbWdJRCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHJlcGxhY2VkIGltYWdlJ3MgY2xhc3NlcyB0byB0aGUgbmV3IFNWR1xuICAgICAgICBpZiAodHlwZW9mIGltZ0NsYXNzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cihcImNsYXNzXCIsIGltZ0NsYXNzICsgXCIgcmVwbGFjZWQtc3ZnXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBpbnZhbGlkIFhNTCB0YWdzIGFzIHBlciBodHRwOi8vdmFsaWRhdG9yLnczLm9yZ1xuICAgICAgICAkc3ZnID0gJHN2Zy5yZW1vdmVBdHRyKFwieG1sbnM6YVwiKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdmlld3BvcnQgaXMgc2V0LCBpZiB0aGUgdmlld3BvcnQgaXMgbm90IHNldCB0aGUgU1ZHIHdvbnQndCBzY2FsZS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICEkc3ZnLmF0dHIoXCJ2aWV3Qm94XCIpICYmXG4gICAgICAgICAgJHN2Zy5hdHRyKFwiaGVpZ2h0XCIpICYmXG4gICAgICAgICAgJHN2Zy5hdHRyKFwid2lkdGhcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgJHN2Zy5hdHRyKFxuICAgICAgICAgICAgXCJ2aWV3Qm94XCIsXG4gICAgICAgICAgICBcIjAgMCBcIiArICRzdmcuYXR0cihcImhlaWdodFwiKSArIFwiIFwiICsgJHN2Zy5hdHRyKFwid2lkdGhcIilcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwbGFjZSBpbWFnZSB3aXRoIG5ldyBTVkdcbiAgICAgICAgJGltZy5yZXBsYWNlV2l0aCgkc3ZnKTtcbiAgICAgIH0sXG4gICAgICBcInhtbFwiXG4gICAgKTtcbiAgfSk7XG59O1xuXG4vKiA4LjQgVFJBTlNGT1JNIFNUUklORyBOVU1CRVJTIElOVE8gU0VQQVJBVEVEIFNUUklOR1MgV0lUSCBQUk9QRVIgQ09NTUFTIEZPUiBFQUNIIFRIT1VTQU5EIFVOSVQgKi9cbnRyYXZlbEFwcC5udW1iZXJXaXRoQ29tbWFzID0gc3RhdCA9PiB7XG4gIHJldHVybiBzdGF0LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xufTtcbiIsIi8qKlxuICogRmFzdFByaW9yaXR5UXVldWUuanMgOiBhIGZhc3QgaGVhcC1iYXNlZCBwcmlvcml0eSBxdWV1ZSAgaW4gSmF2YVNjcmlwdC5cbiAqIChjKSB0aGUgYXV0aG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqXG4gKiBTcGVlZC1vcHRpbWl6ZWQgaGVhcC1iYXNlZCBwcmlvcml0eSBxdWV1ZSBmb3IgbW9kZXJuIGJyb3dzZXJzIGFuZCBKYXZhU2NyaXB0IGVuZ2luZXMuXG4gKlxuICogVXNhZ2UgOlxuICAgICAgICAgSW5zdGFsbGF0aW9uIChpbiBzaGVsbCwgaWYgeW91IHVzZSBub2RlKTpcbiAgICAgICAgICQgbnBtIGluc3RhbGwgZmFzdHByaW9yaXR5cXVldWVcblxuICAgICAgICAgUnVubmluZyB0ZXN0IHByb2dyYW0gKGluIEphdmFTY3JpcHQpOlxuXG4gICAgICAgICAvLyB2YXIgRmFzdFByaW9yaXR5UXVldWUgPSByZXF1aXJlKFwiZmFzdHByaW9yaXR5cXVldWVcIik7Ly8gaW4gbm9kZVxuICAgICAgICAgdmFyIHggPSBuZXcgRmFzdFByaW9yaXR5UXVldWUoKTtcbiAgICAgICAgIHguYWRkKDEpO1xuICAgICAgICAgeC5hZGQoMCk7XG4gICAgICAgICB4LmFkZCg1KTtcbiAgICAgICAgIHguYWRkKDQpO1xuICAgICAgICAgeC5hZGQoMyk7XG4gICAgICAgICB4LnBlZWsoKTsgLy8gc2hvdWxkIHJldHVybiAwLCBsZWF2ZXMgeCB1bmNoYW5nZWRcbiAgICAgICAgIHguc2l6ZTsgLy8gc2hvdWxkIHJldHVybiA1LCBsZWF2ZXMgeCB1bmNoYW5nZWRcbiAgICAgICAgIHdoaWxlKCF4LmlzRW1wdHkoKSkge1xuICAgICAgICAgICBjb25zb2xlLmxvZyh4LnBvbGwoKSk7XG4gICAgICAgICB9IC8vIHdpbGwgcHJpbnQgMCAxIDMgNCA1XG4gICAgICAgICB4LnRyaW0oKTsgLy8gKG9wdGlvbmFsKSBvcHRpbWl6ZXMgbWVtb3J5IHVzYWdlXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRjb21wYXJhdG9yID0gZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA8IGI7XG59O1xuXG4vLyB0aGUgcHJvdmlkZWQgY29tcGFyYXRvciBmdW5jdGlvbiBzaG91bGQgdGFrZSBhLCBiIGFuZCByZXR1cm4gKnRydWUqIHdoZW4gYSA8IGJcbmZ1bmN0aW9uIEZhc3RQcmlvcml0eVF1ZXVlKGNvbXBhcmF0b3IpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEZhc3RQcmlvcml0eVF1ZXVlKSkgcmV0dXJuIG5ldyBGYXN0UHJpb3JpdHlRdWV1ZShjb21wYXJhdG9yKTtcbiAgdGhpcy5hcnJheSA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLmNvbXBhcmUgPSBjb21wYXJhdG9yIHx8IGRlZmF1bHRjb21wYXJhdG9yO1xufVxuXG4vLyBjb3B5IHRoZSBwcmlvcml0eSBxdWV1ZSBpbnRvIGFub3RoZXIsIGFuZCByZXR1cm4gaXQuIFF1ZXVlIGl0ZW1zIGFyZSBzaGFsbG93LWNvcGllZC5cbi8vIFJ1bnMgaW4gYE8obilgIHRpbWUuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGZwcSA9IG5ldyBGYXN0UHJpb3JpdHlRdWV1ZSh0aGlzLmNvbXBhcmUpO1xuICBmcHEuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xuICAgIGZwcS5hcnJheS5wdXNoKHRoaXMuYXJyYXlbaV0pO1xuICB9XG4gIHJldHVybiBmcHE7XG59O1xuXG4vLyBBZGQgYW4gZWxlbWVudCBpbnRvIHRoZSBxdWV1ZVxuLy8gcnVucyBpbiBPKGxvZyBuKSB0aW1lXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24obXl2YWwpIHtcbiAgdmFyIGkgPSB0aGlzLnNpemU7XG4gIHRoaXMuYXJyYXlbdGhpcy5zaXplXSA9IG15dmFsO1xuICB0aGlzLnNpemUgKz0gMTtcbiAgdmFyIHA7XG4gIHZhciBhcDtcbiAgd2hpbGUgKGkgPiAwKSB7XG4gICAgcCA9IChpIC0gMSkgPj4gMTtcbiAgICBhcCA9IHRoaXMuYXJyYXlbcF07XG4gICAgaWYgKCF0aGlzLmNvbXBhcmUobXl2YWwsIGFwKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBhcDtcbiAgICBpID0gcDtcbiAgfVxuICB0aGlzLmFycmF5W2ldID0gbXl2YWw7XG59O1xuXG4vLyByZXBsYWNlIHRoZSBjb250ZW50IG9mIHRoZSBoZWFwIGJ5IHByb3ZpZGVkIGFycmF5IGFuZCBcImhlYXBpZnkgaXRcIlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmhlYXBpZnkgPSBmdW5jdGlvbihhcnIpIHtcbiAgdGhpcy5hcnJheSA9IGFycjtcbiAgdGhpcy5zaXplID0gYXJyLmxlbmd0aDtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IHRoaXMuc2l6ZSA+PiAxOyBpID49IDA7IGktLSkge1xuICAgIHRoaXMuX3BlcmNvbGF0ZURvd24oaSk7XG4gIH1cbn07XG5cbi8vIGZvciBpbnRlcm5hbCB1c2VcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fcGVyY29sYXRlVXAgPSBmdW5jdGlvbihpLCBmb3JjZSkge1xuICB2YXIgbXl2YWwgPSB0aGlzLmFycmF5W2ldO1xuICB2YXIgcDtcbiAgdmFyIGFwO1xuICB3aGlsZSAoaSA+IDApIHtcbiAgICBwID0gKGkgLSAxKSA+PiAxO1xuICAgIGFwID0gdGhpcy5hcnJheVtwXTtcbiAgICAvLyBmb3JjZSB3aWxsIHNraXAgdGhlIGNvbXBhcmVcbiAgICBpZiAoIWZvcmNlICYmICF0aGlzLmNvbXBhcmUobXl2YWwsIGFwKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBhcDtcbiAgICBpID0gcDtcbiAgfVxuICB0aGlzLmFycmF5W2ldID0gbXl2YWw7XG59O1xuXG4vLyBmb3IgaW50ZXJuYWwgdXNlXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX3BlcmNvbGF0ZURvd24gPSBmdW5jdGlvbihpKSB7XG4gIHZhciBzaXplID0gdGhpcy5zaXplO1xuICB2YXIgaHNpemUgPSB0aGlzLnNpemUgPj4+IDE7XG4gIHZhciBhaSA9IHRoaXMuYXJyYXlbaV07XG4gIHZhciBsO1xuICB2YXIgcjtcbiAgdmFyIGJlc3RjO1xuICB3aGlsZSAoaSA8IGhzaXplKSB7XG4gICAgbCA9IChpIDw8IDEpICsgMTtcbiAgICByID0gbCArIDE7XG4gICAgYmVzdGMgPSB0aGlzLmFycmF5W2xdO1xuICAgIGlmIChyIDwgc2l6ZSkge1xuICAgICAgaWYgKHRoaXMuY29tcGFyZSh0aGlzLmFycmF5W3JdLCBiZXN0YykpIHtcbiAgICAgICAgbCA9IHI7XG4gICAgICAgIGJlc3RjID0gdGhpcy5hcnJheVtyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbXBhcmUoYmVzdGMsIGFpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlbaV0gPSBiZXN0YztcbiAgICBpID0gbDtcbiAgfVxuICB0aGlzLmFycmF5W2ldID0gYWk7XG59O1xuXG4vLyBpbnRlcm5hbFxuLy8gX3JlbW92ZUF0KGluZGV4KSB3aWxsIHJlbW92ZSB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggZnJvbSB0aGUgcXVldWUsXG4vLyByZXRhaW5pbmcgYmFsYW5jZS4gcmV0dXJucyB0aGUgcmVtb3ZlZCBpdGVtLCBvciB1bmRlZmluZWQgaWYgbm90aGluZyBpcyByZW1vdmVkLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLl9yZW1vdmVBdCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGlmIChpbmRleCA+IHRoaXMuc2l6ZSAtIDEgfHwgaW5kZXggPCAwKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIC8vIGltcGwxOlxuICAvL3RoaXMuYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgLy90aGlzLmhlYXBpZnkodGhpcy5hcnJheSk7XG4gIC8vIGltcGwyOlxuICB0aGlzLl9wZXJjb2xhdGVVcChpbmRleCwgdHJ1ZSk7XG4gIHJldHVybiB0aGlzLnBvbGwoKTtcbn07XG5cbi8vIHJlbW92ZShteXZhbCkgd2lsbCByZW1vdmUgYW4gaXRlbSBtYXRjaGluZyB0aGUgcHJvdmlkZWQgdmFsdWUgZnJvbSB0aGVcbi8vIHF1ZXVlLCBjaGVja2VkIGZvciBlcXVhbGl0eSBieSB1c2luZyB0aGUgcXVldWUncyBjb21wYXJhdG9yLlxuLy8gcmV0dXJuIHRydWUgaWYgcmVtb3ZlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKG15dmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICBpZiAoIXRoaXMuY29tcGFyZSh0aGlzLmFycmF5W2ldLCBteXZhbCkgJiYgIXRoaXMuY29tcGFyZShteXZhbCwgdGhpcy5hcnJheVtpXSkpIHtcbiAgICAgIC8vIGl0ZW1zIG1hdGNoLCBjb21wYXJhdG9yIHJldHVybnMgZmFsc2UgYm90aCB3YXlzLCByZW1vdmUgaXRlbVxuICAgICAgdGhpcy5fcmVtb3ZlQXQoaSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gaW50ZXJuYWxcbi8vIHJlbW92ZXMgYW5kIHJldHVybnMgaXRlbXMgZm9yIHdoaWNoIHRoZSBjYWxsYmFjayByZXR1cm5zIHRydWUuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX2JhdGNoUmVtb3ZlID0gZnVuY3Rpb24oY2FsbGJhY2ssIGxpbWl0KSB7XG4gIC8vIGluaXRpYWxpemUgcmV0dXJuIGFycmF5IHdpdGggbWF4IHNpemUgb2YgdGhlIGxpbWl0IG9yIGN1cnJlbnQgcXVldWUgc2l6ZVxuICB2YXIgcmV0QXJyID0gbmV3IEFycmF5KGxpbWl0ID8gbGltaXQgOiB0aGlzLnNpemUpO1xuICB2YXIgY291bnQgPSAwO1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5zaXplKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgdGhpcy5zaXplICYmIGNvdW50IDwgcmV0QXJyLmxlbmd0aCkge1xuICAgICAgaWYgKGNhbGxiYWNrKHRoaXMuYXJyYXlbaV0pKSB7XG4gICAgICAgIHJldEFycltjb3VudF0gPSB0aGlzLl9yZW1vdmVBdChpKTtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgLy8gbW92ZSB1cCBhIGxldmVsIGluIHRoZSBoZWFwIGlmIHdlIHJlbW92ZSBhbiBpdGVtXG4gICAgICAgIGkgPSBpID4+IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSBcbiAgfVxuICByZXRBcnIubGVuZ3RoID0gY291bnQ7XG4gIHJldHVybiByZXRBcnI7XG59XG5cbi8vIHJlbW92ZU9uZShjYWxsYmFjaykgd2lsbCBleGVjdXRlIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtIG9mIHRoZSBxdWV1ZVxuLy8gYW5kIHdpbGwgcmVtb3ZlIHRoZSBmaXJzdCBpdGVtIGZvciB3aGljaCB0aGUgY2FsbGJhY2sgd2lsbCByZXR1cm4gdHJ1ZS5cbi8vIHJldHVybiB0aGUgcmVtb3ZlZCBpdGVtLCBvciB1bmRlZmluZWQgaWYgbm90aGluZyBpcyByZW1vdmVkLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlbW92ZU9uZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIHZhciBhcnIgPSB0aGlzLl9iYXRjaFJlbW92ZShjYWxsYmFjaywgMSk7XG4gIHJldHVybiBhcnIubGVuZ3RoID4gMCA/IGFyclswXSA6IHVuZGVmaW5lZDtcbn07XG5cbi8vIHJlbW92ZShjYWxsYmFja1ssIGxpbWl0XSkgd2lsbCBleGVjdXRlIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtIG9mXG4vLyB0aGUgcXVldWUgYW5kIHdpbGwgcmVtb3ZlIGVhY2ggaXRlbSBmb3Igd2hpY2ggdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1ZSwgdXAgdG9cbi8vIGEgbWF4IGxpbWl0IG9mIHJlbW92ZWQgaXRlbXMgaWYgc3BlY2lmaWVkIG9yIG5vIGxpbWl0IGlmIHVuc3BlY2lmaWVkLlxuLy8gcmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHJlbW92ZWQgaXRlbXMuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucmVtb3ZlTWFueSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBsaW1pdCkge1xuICByZXR1cm4gdGhpcy5fYmF0Y2hSZW1vdmUoY2FsbGJhY2ssIGxpbWl0KTtcbn07XG5cbi8vIExvb2sgYXQgdGhlIHRvcCBvZiB0aGUgcXVldWUgKG9uZSBvZiB0aGUgc21hbGxlc3QgZWxlbWVudHMpIHdpdGhvdXQgcmVtb3ZpbmcgaXRcbi8vIGV4ZWN1dGVzIGluIGNvbnN0YW50IHRpbWVcbi8vXG4vLyBDYWxsaW5nIHBlZWsgb24gYW4gZW1wdHkgcHJpb3JpdHkgcXVldWUgcmV0dXJuc1xuLy8gdGhlIFwidW5kZWZpbmVkXCIgdmFsdWUuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy91bmRlZmluZWRcbi8vXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zaXplID09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gIHJldHVybiB0aGlzLmFycmF5WzBdO1xufTtcblxuLy8gcmVtb3ZlIHRoZSBlbGVtZW50IG9uIHRvcCBvZiB0aGUgaGVhcCAob25lIG9mIHRoZSBzbWFsbGVzdCBlbGVtZW50cylcbi8vIHJ1bnMgaW4gbG9nYXJpdGhtaWMgdGltZVxuLy9cbi8vIElmIHRoZSBwcmlvcml0eSBxdWV1ZSBpcyBlbXB0eSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlXG4vLyBcInVuZGVmaW5lZFwiIHZhbHVlLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvdW5kZWZpbmVkXG4vL1xuLy8gRm9yIGxvbmctcnVubmluZyBhbmQgbGFyZ2UgcHJpb3JpdHkgcXVldWVzLCBvciBwcmlvcml0eSBxdWV1ZXNcbi8vIHN0b3JpbmcgbGFyZ2Ugb2JqZWN0cywgeW91IG1heSAgd2FudCB0byBjYWxsIHRoZSB0cmltIGZ1bmN0aW9uXG4vLyBhdCBzdHJhdGVnaWMgdGltZXMgdG8gcmVjb3ZlciBhbGxvY2F0ZWQgbWVtb3J5LlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnBvbGwgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgYW5zID0gdGhpcy5hcnJheVswXTtcbiAgaWYgKHRoaXMuc2l6ZSA+IDEpIHtcbiAgICB0aGlzLmFycmF5WzBdID0gdGhpcy5hcnJheVstLXRoaXMuc2l6ZV07XG4gICAgdGhpcy5fcGVyY29sYXRlRG93bigwKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNpemUgLT0gMTtcbiAgfVxuICByZXR1cm4gYW5zO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBhZGRzIHRoZSBwcm92aWRlZCB2YWx1ZSB0byB0aGUgaGVhcCwgd2hpbGUgcmVtb3Zpbmdcbi8vIGFuZCByZXR1cm5pbmcgb25lIG9mIHRoZSBzbWFsbGVzdCBlbGVtZW50cyAobGlrZSBwb2xsKS4gVGhlIHNpemUgb2YgdGhlIHF1ZXVlXG4vLyB0aHVzIHJlbWFpbnMgdW5jaGFuZ2VkLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlcGxhY2VUb3AgPSBmdW5jdGlvbihteXZhbCkge1xuICBpZiAodGhpcy5zaXplID09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciBhbnMgPSB0aGlzLmFycmF5WzBdO1xuICB0aGlzLmFycmF5WzBdID0gbXl2YWw7XG4gIHRoaXMuX3BlcmNvbGF0ZURvd24oMCk7XG4gIHJldHVybiBhbnM7XG59O1xuXG4vLyByZWNvdmVyIHVudXNlZCBtZW1vcnkgKGZvciBsb25nLXJ1bm5pbmcgcHJpb3JpdHkgcXVldWVzKVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5hcnJheSA9IHRoaXMuYXJyYXkuc2xpY2UoMCwgdGhpcy5zaXplKTtcbn07XG5cbi8vIENoZWNrIHdoZXRoZXIgdGhlIGhlYXAgaXMgZW1wdHlcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNpemUgPT09IDA7XG59O1xuXG4vLyBpdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIGluIG9yZGVyLCBwYXNzIGEgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAoaXRlbSwgaW5kZXgpIGFzIGFyZ3MuXG4vLyBUT0RPIG9uY2Ugd2UgdHJhbnNwaWxlLCB1bmNvbW1lbnRcbi8vIGlmIChTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yKSB7XG4vLyAgIEZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24qKCkge1xuLy8gICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuLy8gICAgIHZhciBmcHEgPSB0aGlzLmNsb25lKCk7XG4vLyAgICAgd2hpbGUgKCFmcHEuaXNFbXB0eSgpKSB7XG4vLyAgICAgICB5aWVsZCBmcHEucG9sbCgpO1xuLy8gICAgIH1cbi8vICAgfTtcbi8vIH1cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgaWYgKHRoaXMuaXNFbXB0eSgpIHx8IHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSByZXR1cm47XG4gIHZhciBpID0gMDtcbiAgdmFyIGZwcSA9IHRoaXMuY2xvbmUoKTtcbiAgd2hpbGUgKCFmcHEuaXNFbXB0eSgpKSB7XG4gICAgY2FsbGJhY2soZnBxLnBvbGwoKSwgaSsrKTtcbiAgfVxufTtcblxuLy8gcmV0dXJuIHRoZSBrICdzbWFsbGVzdCcgZWxlbWVudHMgb2YgdGhlIHF1ZXVlXG4vLyBydW5zIGluIE8oayBsb2cgaykgdGltZVxuLy8gdGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiByZXBlYXRlZGx5IGNhbGxpbmcgcG9sbCwgYnV0XG4vLyBpdCBoYXMgYSBiZXR0ZXIgY29tcHV0YXRpb25hbCBjb21wbGV4aXR5LCB3aGljaCBjYW4gYmVcbi8vIGltcG9ydGFudCBmb3IgbGFyZ2UgZGF0YSBzZXRzLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmtTbWFsbGVzdCA9IGZ1bmN0aW9uKGspIHtcbiAgaWYgKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gW107XG4gIHZhciBjb21wYXJhdG9yID0gdGhpcy5jb21wYXJlO1xuICB2YXIgYXJyID0gdGhpcy5hcnJheVxuICB2YXIgZnBxID0gbmV3IEZhc3RQcmlvcml0eVF1ZXVlKGZ1bmN0aW9uKGEsYil7XG4gICByZXR1cm4gY29tcGFyYXRvcihhcnJbYV0sYXJyW2JdKTtcbiAgfSk7XG4gIGsgPSBNYXRoLm1pbih0aGlzLnNpemUsIGspO1xuICB2YXIgc21hbGxlc3QgPSBuZXcgQXJyYXkoayk7XG4gIHZhciBqID0gMDtcbiAgZnBxLmFkZCgwKTtcbiAgd2hpbGUgKGogPCBrKSB7XG4gICAgdmFyIHNtYWxsID0gZnBxLnBvbGwoKTtcbiAgICBzbWFsbGVzdFtqKytdID0gdGhpcy5hcnJheVtzbWFsbF07XG4gICAgdmFyIGwgPSAoc21hbGwgPDwgMSkgKyAxO1xuICAgIHZhciByID0gbCArIDE7XG4gICAgaWYgKGwgPCB0aGlzLnNpemUpIGZwcS5hZGQobCk7XG4gICAgaWYgKHIgPCB0aGlzLnNpemUpIGZwcS5hZGQocik7XG4gIH1cbiAgcmV0dXJuIHNtYWxsZXN0O1xufVxuXG4vLyBqdXN0IGZvciBpbGx1c3RyYXRpb24gcHVycG9zZXNcbnZhciBtYWluID0gZnVuY3Rpb24oKSB7XG4gIC8vIG1haW4gY29kZVxuICB2YXIgeCA9IG5ldyBGYXN0UHJpb3JpdHlRdWV1ZShmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEgPCBiO1xuICB9KTtcbiAgeC5hZGQoMSk7XG4gIHguYWRkKDApO1xuICB4LmFkZCg1KTtcbiAgeC5hZGQoNCk7XG4gIHguYWRkKDMpO1xuICB3aGlsZSAoIXguaXNFbXB0eSgpKSB7XG4gICAgY29uc29sZS5sb2coeC5wb2xsKCkpO1xuICB9XG59O1xuXG5pZiAocmVxdWlyZS5tYWluID09PSBtb2R1bGUpIHtcbiAgbWFpbigpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhc3RQcmlvcml0eVF1ZXVlO1xuIl19
