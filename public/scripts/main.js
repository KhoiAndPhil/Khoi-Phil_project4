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
    $(".results").css("display", "block");

<<<<<<< HEAD
    var flickityOrNot = "block";
    if (window.matchMedia("(max-width: 1920px)").matches) {
      /* the viewport is at most 1100 pixels wide */
      flickityOrNot = "block";
    }

    // $(".results").css("display", flickityOrNot);
=======
>>>>>>> 6e5aed8fd06dc558c9a3e4d355f20824c153c10f
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2Zhc3Rwcmlvcml0eXF1ZXVlL0Zhc3RQcmlvcml0eVF1ZXVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBO0FBQ0EsSUFBTSxVQUFVLFFBQVEsbUJBQVIsQ0FBaEI7O0FBRUE7QUFDQSxJQUFNLFlBQVksRUFBbEI7O0FBRUE7QUFDQSxVQUFVLFNBQVYsR0FBc0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0UsTUFBSSxpQkFETjtBQUVFLFNBQU8sQ0FDTDtBQUNFLFVBQU0sU0FEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUsMEJBSFo7QUFJRSxpQkFBYTtBQUpmLEdBREssRUFPTDtBQUNFLFVBQU0saUJBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLGlCQUhaO0FBSUUsaUJBQ0U7QUFMSixHQVBLLEVBY0w7QUFDRSxVQUFNLGtCQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSxrQkFIWjtBQUlFLGlCQUNFO0FBTEosR0FkSyxFQXFCTDtBQUNFLFVBQU0scUJBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLHFCQUhaO0FBSUUsaUJBQWE7QUFKZixHQXJCSyxFQTJCTDtBQUNFLFVBQU0sa0JBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLHlCQUhaO0FBSUUsaUJBQWE7QUFKZixHQTNCSyxFQWlDTDtBQUNFLFVBQU0scUJBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLGFBSFo7QUFJRSxpQkFBYTtBQUpmLEdBakNLO0FBRlQsQ0FIb0I7QUE4Q3BCO0FBQ0E7QUFDQTtBQUNFLE1BQUksa0JBRE47QUFFRSxTQUFPLENBQ0w7QUFDRSxVQUFNLHVCQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSx1QkFIWjtBQUlFLGlCQUFhO0FBSmYsR0FESyxFQU9MO0FBQ0UsVUFBTSxlQURSO0FBRUUs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIElNUE9SVCBIRUFQIE1PRFVMRSBGUk9NIE5QTVxuY29uc3QgTWluSGVhcCA9IHJlcXVpcmUoXCJmYXN0cHJpb3JpdHlxdWV1ZVwiKTtcblxuLy8gQ3JlYXRlIGFuIG9iamVjdCByZXByZXNlbnRpbmcgb3VyIHRyYXZlbCBhcHAgKE5BTUVTUEFDRSlcbmNvbnN0IHRyYXZlbEFwcCA9IHt9O1xuXG4vLyBBUlJBWSBXSVRIIEFMTCBSRUxFVkFOVCBTVEFUUyBGT1IgRUFDSCBQVVJQT1NFXG50cmF2ZWxBcHAuc3RhdEFycmF5ID0gW1xuICAvLyBWQUNBVElPTiBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tdmFjYXRpb25cIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlbnNpdHlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJQb3B1bGF0aW9uIERlbnNpdHkgKGxvdylcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBvcHVsYXRpb24gZGVuc2l0eSBpcyBtZWFzdXJlZCBpbiBwZXIga23Csi5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ0b3VyaXN0X2Fycml2YWxzXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVG91cmlzdCBBcnJpdmFsc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlJlcHJlc2VudHMgZm9yZWlnbiBjaXRpemVucyB0aGF0IHN0YXllZCBhdCBsZWFzdCBvbmUgbmlnaHQuIEluY2x1ZGVzIGhvdGVsIHN0YXlzLCB0cmFuc2ZlcnMsIGNvbmZlcmVuY2UgdmlzaXRzLCBldGMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidG91cmlzbV9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlRvdXJpc3QgRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGFtb3VudCBvZiBnb3Zlcm5tZW50IHNwZW5kaW5nIGRlZGljYXRlZCBmb3IgdG91cmlzbSAoaW4gJSBvZiB0aGUgR0RQIGZvciBhIGNvdW50cnkpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInVyYmFuX3BvcHVsYXRpb25cIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJVcmJhbiBQb3B1bGF0aW9uIChoaWdoKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcGVyY2VudGFnZSBvZiBwZW9wbGUgd2hvIGxpdmUgaW4gYSBjaXR5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImZvcmVzdF9hcmVhX3BlcmNlbnRcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJGb3Jlc3QgQXJlYVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdG90YWwgYW1vdW50IG9mIGZvcmVzdCBhcmVhIGluIGEgY291bnRyeSAoaW4ga23CsilcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gRURVQ0FUSU9OIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tZWR1Y2F0aW9uXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJlZHVjYXRpb25fZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJFZHVjYXRpb24gRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRWR1Y2F0aW9uIGV4cGVuZGl0dXJlIHJlcHJlc2VudHMgZ292ZXJubWVudCBzcGVuZGluZyBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJjbzJfZW1pc3Npb25zXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiQ08yIEVtaXNzaW9uc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDTzIgZW1pc3Npb25zIGluIG1ldHJpYyB0b25zIHBlciBwZXJzb24gcGVyIHllYXIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiY29ycnVwdGlvbl9pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkNvcnJ1cHRpb24gSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ29ycnVwdGlvbiBQZXJjZXB0aW9ucyBJbmRleCAoQ1BJKS4gKFNjYWxlOiAwLTEwMDsgMCA9IGhpZ2ggY29ycnVwdGlvbi4gMTAwID0gbG93IGNvcnJ1cHRpb24pLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhkaVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkh1bWFuIERldmVsb3BtZW50IEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiSW5kaWNhdG9yIG9mIGxpZmUgZXhwZWN0YW5jeSwgZWR1Y2F0aW9uLCBhbmQgcGVyIGNhcGl0YSBpbmNvbWUuIChTY2FsZTogMC0xOyAwID0gbG93IHNjb3JlLiAxID0gaGlnaCBzY29yZSkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGVhbHRoX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGVhbHRoIEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlB1YmxpYyBzcGVuZGluZyBvbiBoZWFsdGgsIG1lYXN1cmVkIGluICUgb2YgR0RQLlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBWSVNJVE9SIFZJU0EgQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi12aXNpdC12aXNhXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZWFsdGhfZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIZWFsdGggRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUHVibGljIHNwZW5kaW5nIG9uIGhlYWx0aCwgbWVhc3VyZWQgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidG91cmlzdF9hcnJpdmFsc1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlRvdXJpc3QgQXJyaXZhbHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJSZXByZXNlbnRzIGZvcmVpZ24gY2l0aXplbnMgdGhhdCBzdGF5ZWQgYXQgbGVhc3Qgb25lIG5pZ2h0LiBJbmNsdWRlcyBob3RlbCBzdGF5cywgdHJhbnNmZXJzLCBjb25mZXJlbmNlIHZpc2l0cywgZXRjLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlbnNpdHlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJQb3B1bGF0aW9uIERlbnNpdHkgKGxvdylcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBvcHVsYXRpb24gZGVuc2l0eSBpcyBtZWFzdXJlZCBpbiBwZXIga23Csi5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJjbzJfZW1pc3Npb25zXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiQ08yIEVtaXNzaW9uc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDTzIgZW1pc3Npb25zIGluIG1ldHJpYyB0b25zIHBlciBwZXJzb24gcGVyIHllYXIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaW5mbGF0aW9uXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSW5mbGF0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhbm51YWwgY2hhbmdlIG9mIGNvbnN1bWVyIHByaWNlcyAodW5pdDogJSkuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFdPUktJTkcgSE9MSURBWSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXdvcmstaG9saWRheVwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVuc2l0eVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlBvcHVsYXRpb24gRGVuc2l0eSAobG93KVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcG9wdWxhdGlvbiBkZW5zaXR5IGlzIG1lYXN1cmVkIGluIHBlciBrbcKyLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInRvdXJpc3RfYXJyaXZhbHNcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJUb3VyaXN0IEFycml2YWxzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUmVwcmVzZW50cyBmb3JlaWduIGNpdGl6ZW5zIHRoYXQgc3RheWVkIGF0IGxlYXN0IG9uZSBuaWdodC4gSW5jbHVkZXMgaG90ZWwgc3RheXMsIHRyYW5zZmVycywgY29uZmVyZW5jZSB2aXNpdHMsIGV0Yy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiYnV0dG9uLXBlcm0tc29sb1wiLFxuICAgICAgICBzdGF0OiBcImdpbmlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJHaW5pIENvZWZmaWNpZW50XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiU3RhdGVzIGhvdyB1bmlmb3JtbHkgYXNzZXRzIGFyZSBkaXN0cmlidXRlZC4gKHNjYWxlOiAwLTEwMDsgMCA9IGVxdWFsIGRpc3RyaWJ1dGlvbi4gMTAwID0gdW5lcXVhbCBkaXN0cmlidXRpb24pLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImpvYmxlc3NfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkpvYmxlc3MgUmF0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbnVtYmVyIG9mIHVuZW1wbG95ZWQgcGVvcGxlIGluIHJlbGF0aW9uIHRvIHRoZSBsYWJvciBmb3JjZSBmb3IgYSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcIm1lZGlhbndhZ2VcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJNZWRpYW4gV2FnZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkEgbWVhc3VyZSBvZiB0aGUgbW9udGhseSBtZWRpYW4gd2FnZSBiZWZvcmUgdGF4ZXMsIGluY2x1ZGluZyBwdWJsaWMgYmVuZWZpdHMgKGUuZyBjaGlsZCBhbGxvd2FuY2UpOyB1bml0OiBVU0QuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFBFUk1BTkVOVC1TT0xPIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tcGVybS1zb2xvXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZGlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIdW1hbiBEZXZlbG9wbWVudCBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkluZGljYXRvciBvZiBsaWZlIGV4cGVjdGFuY3ksIGVkdWNhdGlvbiwgYW5kIHBlciBjYXBpdGEgaW5jb21lLiAoU2NhbGU6IDAtMTsgMCA9IGxvdyBzY29yZS4gMSA9IGhpZ2ggc2NvcmUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImNvcnJ1cHRpb25faW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJDb3JydXB0aW9uIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvcnJ1cHRpb24gUGVyY2VwdGlvbnMgSW5kZXggKENQSSkuIChTY2FsZTogMC0xMDA7IDAgPSBoaWdoIGNvcnJ1cHRpb24uIDEwMCA9IGxvdyBjb3JydXB0aW9uKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJtZWRpYW53YWdlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTWVkaWFuIFdhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJBIG1lYXN1cmUgb2YgdGhlIG1vbnRobHkgbWVkaWFuIHdhZ2UgYmVmb3JlIHRheGVzLCBpbmNsdWRpbmcgcHVibGljIGJlbmVmaXRzIChlLmcgY2hpbGQgYWxsb3dhbmNlKTsgdW5pdDogVVNELlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImluZmxhdGlvblwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkluZmxhdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYW5udWFsIGNoYW5nZSBvZiBjb25zdW1lciBwcmljZXMgKHVuaXQ6ICUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ1cmJhbl9wb3B1bGF0aW9uXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVXJiYW4gUG9wdWxhdGlvbiAoaGlnaClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBlcmNlbnRhZ2Ugb2YgcGVvcGxlIHdobyBsaXZlIGluIGEgY2l0eS5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gUEVSTUFORU5ULUNPVVBMRSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXBlcm0tY291cGxlXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZGlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIdW1hbiBEZXZlbG9wbWVudCBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkluZGljYXRvciBvZiBsaWZlIGV4cGVjdGFuY3ksIGVkdWNhdGlvbiwgYW5kIHBlciBjYXBpdGEgaW5jb21lLiAoU2NhbGU6IDAtMTsgMCA9IGxvdyBzY29yZS4gMSA9IGhpZ2ggc2NvcmUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImpvYmxlc3NfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkpvYmxlc3MgUmF0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbnVtYmVyIG9mIHVuZW1wbG95ZWQgcGVvcGxlIGluIHJlbGF0aW9uIHRvIHRoZSBsYWJvciBmb3JjZSBmb3IgYSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJidXR0b24tcGVybS1zb2xvXCIsXG4gICAgICAgIHN0YXQ6IFwiZ2luaVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkdpbmkgQ29lZmZpY2llbnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJTdGF0ZXMgaG93IHVuaWZvcm1seSBhc3NldHMgYXJlIGRpc3RyaWJ1dGVkLiAoc2NhbGU6IDAtMTAwOyAwID0gZXF1YWwgZGlzdHJpYnV0aW9uLiAxMDAgPSB1bmVxdWFsIGRpc3RyaWJ1dGlvbikuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGFwcGluZXNzX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGFwcGluZXNzIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFzZWQgb24gZmFjdG9ycyBzdWNoIGFzIEdEUCBwZXIgY2FwaXRhLCBzb2NpYWwgc3VwcG9ydCwgbGlmZSBleHBlY3RhbmN5LiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhhcHBpZXIgdGhlIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVhdGhfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlJhdGUgb2YgRGVhdGhzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhdmVyYWdlIG51bWJlciBvZiBkZWF0aHMgcGVyIHllYXIgcGVyIDEsMDAwIHBlb3BsZS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZWJ0c19wZXJjZW50XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiR292ZXJubWVudCBEZWJ0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwZXJjZW50YWdlIG9mIGdvdmVybm1lbnQgYm9ycm93aW5ncyBpbiByZWxhdGlvbiB0byB0aGUgR0RQLlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBQRVJNQU5FTlQtRkFNSUxZIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tcGVybS1mYW1pbHlcIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImVkdWNhdGlvbl9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkVkdWNhdGlvbiBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFZHVjYXRpb24gZXhwZW5kaXR1cmUgcmVwcmVzZW50cyBnb3Zlcm5tZW50IHNwZW5kaW5nIGluICUgb2YgR0RQLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJsaXRlcmFjeV9yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTGl0ZXJhY3kgUmF0ZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcGVyY2VudGFnZSBvZiBwZW9wbGUgdGhhdCBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlYWQgYW5kIHdyaXRlIGJ5IGFnZSAxNS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJsaWZlX2V4cGVjdGFuY3lcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJMaWZlIEV4cGVjdGFuY3lcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGF2ZXJhZ2UgbnVtYmVyIG9mIHllYXJzIGEgcGVyc29uIHdpbGwgbGl2ZSAoYXQgYmlydGgpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlYXRoX3JhdGVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJSYXRlIG9mIERlYXRoc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYXZlcmFnZSBudW1iZXIgb2YgZGVhdGhzIHBlciB5ZWFyIHBlciAxLDAwMCBwZW9wbGUuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwibWVkaWFud2FnZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIk1lZGlhbiBXYWdlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQSBtZWFzdXJlIG9mIHRoZSBtb250aGx5IG1lZGlhbiB3YWdlIGJlZm9yZSB0YXhlcywgaW5jbHVkaW5nIHB1YmxpYyBiZW5lZml0cyAoZS5nIGNoaWxkIGFsbG93YW5jZSk7IHVuaXQ6IFVTRC5cIlxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuLyogMC4gR0VUIFNUQVJURUQgKi9cbnRyYXZlbEFwcC5nZXRTdGFydGVkID0gKCkgPT4ge1xuICAvLyBMaXN0ZW5zIGZvciBjbGljayBvbiBHRVQgU1RBUlRFRCBCVVRUT05cbiAgJChcIi53ZWxjb21lX19idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBTbW9vdGggc2Nyb2xsIHRvIG5leHQgc2VjdGlvblxuICAgICQoXCJodG1sLCBib2R5XCIpXG4gICAgICAuc3RvcCgpXG4gICAgICAuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChcIi5wdXJwb3NlLXNlY3Rpb25cIikub2Zmc2V0KCkudG9wIH0sIDkwMCwgXCJzd2luZ1wiKTtcbiAgfSk7XG59O1xuXG4vKiAxLiBHRVQgVVNFUiBJTlBVVCAqL1xudHJhdmVsQXBwLmdldFVzZXJQdXJwb3NlID0gKCkgPT4ge1xuICAkKFwiLnRyYXZlbC1mb3JtX19idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAvLyBTdG9yZSB1c2VyIGlucHV0IGluIHZhcmlhYmxlXG4gICAgY29uc3QgaW5wdXRJRCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xuICAgIHRyYXZlbEFwcC51c2VyUHVycG9zZSA9IGlucHV0SUQ7XG5cbiAgICAvLyBDYWxsIHRoZSBkaXNwbGF5IHN0YXRzIGZ1bmN0aW9uXG4gICAgdHJhdmVsQXBwLmRpc3BsYXlTdGF0cyh0cmF2ZWxBcHAudXNlclB1cnBvc2UpO1xuXG4gICAgLy8gRGlzcGxheSB0aGUgY3JpdGVyaWFzIHRvIGJlIGNob3NlblxuICAgICQoXCIuY3JpdGVyaWFzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xuXG4gICAgLy8gU21vb3RoIFNjcm9sbCB0byBjcml0ZXJpYSdzIHNlY3Rpb25cbiAgICAkKFwiaHRtbCwgYm9keVwiKVxuICAgICAgLnN0b3AoKVxuICAgICAgLmFuaW1hdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIuY3JpdGVyaWFzXCIpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LFxuICAgICAgICA5MDAsXG4gICAgICAgIFwic3dpbmdcIlxuICAgICAgKTtcbiAgfSk7XG59O1xuXG4vKiAyLiBESVNQTEFZIEFMTCBTVEFUUyBGT1IgVEhFIFNFTEVDVEVEIFBVUlBPU0UgT04gU0NSRUVOICovXG50cmF2ZWxBcHAuZGlzcGxheVN0YXRzID0gcHVycG9zZUlEID0+IHtcbiAgJChcIi5jaG9pY2VzXCIpLmVtcHR5KCk7XG4gIC8vIEhlYWRlciBmb3IgdGhlIGNob29zZSBDcml0ZXJpYSBzZWN0aW9uXG4gICQoXCIuY3JpdGVyaWEtaGVhZGVyXCIpLnRleHQoXG4gICAgXCJQbGVhc2UgcmFuayB0aGUgZm9sbG93aW5nIGNyaXRlcmlhIGluIG9yZGVyIG9mIGltcG9ydGFuY2UgZnJvbSB0b3AgdG8gYm90dG9tLiBVc2UgeW91ciBjdXJzb3IgdG8gZHJhZyBhbmQgZHJvcCB0aGUgaXRlbXMuXCJcbiAgKTtcbiAgLy8gQWRkIGNzcyBwb3NpdGlvbiB0byBjcml0ZXJpYSBjb250YWluZXJcbiAgJChcIi5jaG9pY2VzLWxpc3QtY29udGFpbmVyXCIpLmNzcyhcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XG5cbiAgLy8gR28gdGhyb3VnaCBlYWNoIHB1cnBvc2Ugb2JqZWN0IGluIHRoZSBTdGF0IEFycmF5XG4gIHRyYXZlbEFwcC5zdGF0QXJyYXkuZm9yRWFjaChwdXJwb3NlT2JqID0+IHtcbiAgICAvLyBJZiB0aGUgcHVycG9zZSBJRCBtYXRjaGVzIHRoZSBwdXJwb3NlIE9iamVjdCBpZFxuICAgIGlmIChwdXJwb3NlSUQgPT09IHB1cnBvc2VPYmouaWQpIHtcbiAgICAgIC8vIEdvIHRocm91Z2ggZXZlcnkgc3RhdCBmb3IgdGhpcyBwdXJwb3NlXG4gICAgICBwdXJwb3NlT2JqLnN0YXRzLmZvckVhY2goc3RhdCA9PiB7XG4gICAgICAgIC8vIEFwcGVuZCBlYWNoIG9mIHRoZSBzdGF0IG5hbWUgb24gc2NyZWVuIGZvciB0aGUgdXNlciB0byByYW5rXG4gICAgICAgIGxldCBtYXJrVXBJdGVtID0gJChcIjxsaT5cIilcbiAgICAgICAgICAuYXR0cihcImlkXCIsIHN0YXQuc3RhdClcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJjcml0ZXJpYVwiKVxuICAgICAgICAgIC50ZXh0KHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAkKFwiLmNob2ljZXNcIikuYXBwZW5kKG1hcmtVcEl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBhcHBlbmQgc3VibWl0IGJ1dHRvblxuICBsZXQgbWFya1VwQnV0dG9uID0gYDxsaT48YnV0dG9uIGNsYXNzPVwidXNlci1zdWJtaXQgYnRuXCI+U3VibWl0IFJhbmtpbmc8L2J1dHRvbj48L2xpPmA7XG4gICQoXCIuY2hvaWNlc1wiKS5hcHBlbmQobWFya1VwQnV0dG9uKTtcblxuICB0cmF2ZWxBcHAuZ2V0VXNlclJhbmtpbmdzKCk7XG59O1xuXG4vKiAzLiBPQlRBSU4gVEhFIFJBTktJTkcgT0YgVEhFIFNUQVRTIEZST00gVVNFUiAqL1xudHJhdmVsQXBwLmdldFVzZXJSYW5raW5ncyA9ICgpID0+IHtcbiAgJChcIi5jaG9pY2VzXCIpLm9uKFwiY2xpY2tcIiwgXCIudXNlci1zdWJtaXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gcmVtb3ZlIHN1Ym1pdCBidXR0b24gYW5kIHB1dCBhIGxvYWRlciB1bnRpbCB0aGUgcmVzdWx0cyBjb21lIGJhY2tcbiAgICAvLyAuaHRtbChgPGltZyBjbGFzcz1cImxvYWRlclwiIHNyYz1cIi4uLy4uL2Fzc2V0cy9zcGlubmVyLTFzLTEwMHB4LnN2Z1wiPmApO1xuICAgICQoXCIuY2hvaWNlc1wiKS5maW5kKFxuICAgICAgXCJsaTpsYXN0LWNoaWxkXCJcbiAgICApLmh0bWwoYDxzdmcgY2xhc3M9XCJsZHMtc3Bpbm5lciBsb2FkZXJcIiB3aWR0aD1cIjEwMHB4XCIgIGhlaWdodD1cIjEwMHB4XCIgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIiBzdHlsZT1cImJhY2tncm91bmQ6IG5vbmU7XCI+PGcgdHJhbnNmb3JtPVwicm90YXRlKDAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC45MTY2NjY2NjY2NjY2NjY2c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgzMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjgzMzMzMzMzMzMzMzMzMzRzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDYwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNzVzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDkwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNjY2NjY2NjY2NjY2NjY2NnNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMTIwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNTgzMzMzMzMzMzMzMzMzNHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMTUwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMTgwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuNDE2NjY2NjY2NjY2NjY2N3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMjEwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuMzMzMzMzMzMzMzMzMzMzM3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMjQwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuMjVzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDI3MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjE2NjY2NjY2NjY2NjY2NjY2c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgzMDAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC4wODMzMzMzMzMzMzMzMzMzM3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzMwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48L3N2Zz5gKTtcblxuICAgIC8vIGdldCB0aGUgdXNlciByYW5raW5ncyBmcm9tIGhpcyBvcmRlcmluZyBvZiBzdGF0cyBhbmQgc3RvcmUgaW4gYSB2YXJpYWJsZVxuICAgIGxldCB1c2VyUmFua2luZ3MgPSAkKFwiLmNob2ljZXNcIilbMF0uY2hpbGRyZW47XG5cbiAgICAvLyBpbml0aWFsaXplIGFuIGVtcHR5IGFycmF5IHRvIHN0b3JlIHRoZSB0b3AgMyByYW5raW5nc1xuICAgIGxldCBzdGF0c0ZvckFQSUNhbGwgPSBbXTtcblxuICAgIC8vIGdldCBmaXJzdCB0b3AgMyByYW5raW5ncyAoc3RhdHMgaW4gMXN0LCAybmQgYW5kIDNyZCBwb3NpdGlvbnMpXG4gICAgLy8gYW5kIHN0b3JlIHRoZW0gaW5zaWRlIGFuIGFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIHN0YXRzRm9yQVBJQ2FsbC5wdXNoKHVzZXJSYW5raW5nc1tpXS5pZCk7XG4gICAgfVxuXG4gICAgLy8gSU5JVElBTElaRSBBTEwgR0xPQkFMIFZBUklBQkxFUyBGT1IgRElTUExBWSBBVCBUSEUgRU5EXG4gICAgdHJhdmVsQXBwLndpa2lFeHRyYWN0ID0gW107XG4gICAgdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLnN0YXRDb2RlQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAud2lraVByb21pc2VBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5waXhhUHJvbWlzZUFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLmltYWdlQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAuaW1hZ2VUZXh0QXJyYXkgPSBbXTtcblxuICAgIC8vICQoXCIucmVzdWx0c1wiKS5mbGlja2l0eShcImRlc3Ryb3lcIik7XG5cbiAgICB0cmF2ZWxBcHAuZ2V0U3RhdCguLi5zdGF0c0ZvckFQSUNhbGwpO1xuICB9KTtcbn07XG5cbi8qIDQuIFNFTkQgQUpBWCBSRVFVRVNUIFRPIElOUVNUQVRTIEFQSSAqL1xuXG4vLyBTdG9yZSBpbXBvcnRhbnQgaW5mbyBmb3IgY2FsbHMgdG8gdGhlIElOUVN0YXRzIEFQSS5cbnRyYXZlbEFwcC5zdGF0S2V5ID0gXCI1ZDM2ODdjN2MxNzg4ZDVmXCI7XG50cmF2ZWxBcHAuc3RhdFVSTCA9IFwiaHR0cDovL2lucXN0YXRzYXBpLmlucXVidS5jb21cIjtcbnRyYXZlbEFwcC5nZXRTdGF0ID0gKHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpID0+IHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IHRyYXZlbEFwcC5zdGF0VVJMLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgZGF0YToge1xuICAgICAgYXBpX2tleTogdHJhdmVsQXBwLnN0YXRLZXksXG4gICAgICBkYXRhOiBgaGRpLCR7c3RhdFR5cGUxfSwke3N0YXRUeXBlMn0sJHtzdGF0VHlwZTN9YCxcbiAgICAgIGNtZDogXCJnZXRXb3JsZERhdGFcIlxuICAgIH1cbiAgfSkudGhlbihyZXMgPT4ge1xuICAgIC8vIGNhbGxpbmcgdGhlIGNhbGN1bGF0aW9uIGZ1bmN0aW9uIHRvIGdldCB0aGUgdG9wIG4gLyBib3R0b20gbiBjb3VudHJpZXNcblxuICAgIC8vZmluYWxSZXN1bHRzIGhvbGRzIHRoZSBmaW5hbCAzIGNvdXRyaWVzIGFuZCBhbGwgb2YgdGhlaXIgc3RhdHNcbiAgICBsZXQgZmluYWxSZXN1bHRzID0gdHJhdmVsQXBwLmdldFJlY29tbWVuZGF0aW9ucyhyZXMsIHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpO1xuXG4gICAgLy8gR2V0IHdpa2kgYW5kIHBpeGEgZXh0cmFjdHMgZm9yIGVhY2ggY291bnRyeVxuICAgIGZpbmFsUmVzdWx0cy5mb3JFYWNoKGNvdW50cnlPYmogPT4ge1xuICAgICAgLy8gZ2V0IHdpa2kgZXh0cmFjdHMgYW5kIHB1dCBwcm9taXNlcyBpbnRvIGFycmF5XG4gICAgICB0cmF2ZWxBcHAud2lraVByb21pc2VBcnJheS5wdXNoKHRyYXZlbEFwcC5nZXRXaWtpKGNvdW50cnlPYmouY291bnRyeU5hbWUpKTtcblxuICAgICAgLy8gZ2V0IHBpeGEgZXh0cmFjdHMgYW5kIHB1dCBwcm9taXNlcyBpbnRvIGFycmF5XG4gICAgICB0cmF2ZWxBcHAucGl4YVByb21pc2VBcnJheS5wdXNoKHRyYXZlbEFwcC5nZXRQaXhhKGNvdW50cnlPYmouY291bnRyeU5hbWUpKTtcbiAgICB9KTtcblxuICAgIC8vIHdoZW4gYWxsIHdpa2kgYW5kIHBpeGEgcHJvbWlzZXMgYXJlIGZ1bGZpbGxlZCwgc3RvcmUgdGhlIHJlc3VsdHNcbiAgICAvLyB0byBwcmVwYXJlIHRoZW0gZm9yIGRpc3BsYXlcbiAgICAkLndoZW4oLi4udHJhdmVsQXBwLndpa2lQcm9taXNlQXJyYXksIC4uLnRyYXZlbEFwcC5waXhhUHJvbWlzZUFycmF5KS50aGVuKCguLi53aWtpUGl4YVJlc3VsdHMpID0+IHtcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIHdpa2lQaXhhIHJlc3VsdHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lraVBpeGFSZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGZpcnN0IHRocmVlIGFyZSB3aWtpLCBwdXNoIChzdG9yZSkgaW50byBhcnJheVxuICAgICAgICBpZiAoaSA8IDMpIHtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RvcmVXaWtpKHdpa2lQaXhhUmVzdWx0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGFzdCB0aHJlZSBhcmUgcGl4YSwgcHVzaCAoc3RvcmUpIGludG8gYXJyYXlcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0b3JlUGl4YSh3aWtpUGl4YVJlc3VsdHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9uY2UgcmVzdWx0cyBhbGwgc3RvcmVkLCBkaXNwbGF5IGFsbCBpbmZvIG9uIHNjcmVlbiAoMyBjb3VudHJpZXMsIHdpa2kgYW5kIHBpeGEpXG4gICAgICB0cmF2ZWxBcHAuZGlzcGxheURlc3RpbmF0aW9ucyhmaW5hbFJlc3VsdHMsIFtzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzXSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyogNS4gU1RBUlQgQ0FMQ1VMQVRJT04gRk9SIDMgUkVDT01NRU5ERUQgQ09VTlRSSUVTICovXG50cmF2ZWxBcHAuZ2V0UmVjb21tZW5kYXRpb25zID0gKHJlcywgc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlMykgPT4ge1xuICAvLyBGaW5kIGRpcmVjdGlvbiBvZiBlYWNoIHN0YXQgdHlwZSBhbmQgcmV0dXJuIGl0IGluIGFuIGFycmF5XG4gIGxldCBhcnJEaXJlY3Rpb25zID0gdHJhdmVsQXBwLmZpbmREaXJlY3Rpb25zKHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpO1xuXG4gIC8vIEluaXRpYWxpemUgYXJyYXlzIGFuZCBudW1iZXJzIGZvciBlYWNoIHJvdW5kIG9mIGl0ZXJhdGlvbi9maWx0ZXJpbmdcbiAgbGV0IGluaXRpYWxBcnIgPSBbXTtcbiAgbGV0IGFycjEgPSBbXTtcbiAgbGV0IGFycjIgPSBbXTtcbiAgbGV0IGFycjMgPSBbXTtcbiAgbGV0IGluaXRpYWxJdGVyID0gNjA7XG4gIGxldCBpdGVyYXRpb24xID0gMTA7XG4gIGxldCBpdGVyYXRpb24yID0gNTtcbiAgbGV0IGl0ZXJhdGlvbjMgPSAzO1xuXG4gIC8vSW5pdGlhbCBmaWx0ZXIgdG8gYWNjb3VudCBmb3IgcmVhbGlzdGljIHJlc3VsdHMgKGJhc2VkIG9uIEhESSlcbiAgaW5pdGlhbEFyciA9IHRyYXZlbEFwcC5kZXRlcm1pbmVSZXN1bHRzKHJlcywgXCJoZGlcIiwgXCJtYXhcIiwgaW5pdGlhbEl0ZXIpO1xuXG4gIC8vIElURVJBVElPTiAxXG4gIGFycjEgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyhpbml0aWFsQXJyLCBzdGF0VHlwZTEsIGFyckRpcmVjdGlvbnNbMF0sIGl0ZXJhdGlvbjEpO1xuXG4gIC8vIElURVJBVElPTiAyXG4gIGFycjIgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyhhcnIxLCBzdGF0VHlwZTIsIGFyckRpcmVjdGlvbnNbMV0sIGl0ZXJhdGlvbjIpO1xuXG4gIC8vIElURVJBVElPTiAzXG4gIGFycjMgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyhhcnIyLCBzdGF0VHlwZTMsIGFyckRpcmVjdGlvbnNbMl0sIGl0ZXJhdGlvbjMpO1xuXG4gIC8vIHJldHVybiB0aGUgYXJyYXkgd2l0aCB0aGUgZmluYWwgcmVzdWx0c1xuICByZXR1cm4gYXJyMztcbn07XG5cbi8qIDUuMSBGSU5EIE1JTi9NQVggRk9SIEVBQ0ggU1RBVCBUWVBFICovXG50cmF2ZWxBcHAuZmluZERpcmVjdGlvbnMgPSAoc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlMykgPT4ge1xuICAvLyBGaW5kIHdoZXRoZXIgZWFjaCBzdGF0dHlwZSBpcyBtYXggb3IgbWluXG4gIGxldCBzdGF0MURpcmVjdGlvbiA9IFwiXCI7XG4gIGxldCBzdGF0MkRpcmVjdGlvbiA9IFwiXCI7XG4gIGxldCBzdGF0M0RpcmVjdGlvbiA9IFwiXCI7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBTdGF0IEFycmF5IHRvIGZpbmQgZGlyZWN0aW9uIG9mIHN0YXR0eXBlc1xuICB0cmF2ZWxBcHAuc3RhdEFycmF5LmZvckVhY2gocHVycG9zZSA9PiB7XG4gICAgLy8gaWYgdGhlIGN1cnJlbnQgcHVycG9zZSBtYXRjaGVzIHRoZSB1c2VyIHB1cnBvc2UsXG4gICAgaWYgKHB1cnBvc2UuaWQgPT09IHRyYXZlbEFwcC51c2VyUHVycG9zZSkge1xuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgc3RhdHMgYXJyYXkgb2YgdGhhdCBwdXJwb3NlIG9iamVjdFxuICAgICAgcHVycG9zZS5zdGF0cy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGF0IGluIHRoZSBzdGF0cyBhcnJheSBpcyBzdGF0dHlwZTEsIGdldCB0aGlzIGRpcmVjdGlvblxuICAgICAgICBpZiAoc3RhdC5zdGF0ID09PSBzdGF0VHlwZTEpIHtcbiAgICAgICAgICBzdGF0MURpcmVjdGlvbiA9IHN0YXQuZGlyZWN0aW9uO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0Q29kZUFycmF5LnB1c2goc3RhdC5zdGF0KTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXkucHVzaChzdGF0LnN0YXROYW1lKTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXkucHVzaChzdGF0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGF0IGluIHRoZSBzdGF0cyBhcnJheSBpcyBzdGF0dHlwZTIsIGdldCB0aGlzIGRpcmVjdGlvblxuICAgICAgICBlbHNlIGlmIChzdGF0LnN0YXQgPT09IHN0YXRUeXBlMikge1xuICAgICAgICAgIHN0YXQyRGlyZWN0aW9uID0gc3RhdC5kaXJlY3Rpb247XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXRDb2RlQXJyYXkucHVzaChzdGF0LnN0YXQpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheS5wdXNoKHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheS5wdXNoKHN0YXQuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0YXQgaW4gdGhlIHN0YXRzIGFycmF5IGlzIHN0YXR0eXBlMywgZ2V0IHRoaXMgZGlyZWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHN0YXQuc3RhdCA9PT0gc3RhdFR5cGUzKSB7XG4gICAgICAgICAgc3RhdDNEaXJlY3Rpb24gPSBzdGF0LmRpcmVjdGlvbjtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdENvZGVBcnJheS5wdXNoKHN0YXQuc3RhdCk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5LnB1c2goc3RhdC5zdGF0TmFtZSk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5LnB1c2goc3RhdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtzdGF0MURpcmVjdGlvbiwgc3RhdDJEaXJlY3Rpb24sIHN0YXQzRGlyZWN0aW9uXTtcbn07XG5cbi8qIDUuMiBGVU5DVElPTiBUTyBERVRFUk1JTkUgV0hFVEhFUiBUSEUgVE9QIE9SIEJPVFRPTSBTQ09SRVMgU0hPVUxEIEJFIEZPVU5EICovXG50cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyA9IChhcnJheSwgc3RhdFR5cGUsIGRpcmVjdGlvbiwgaXRlcmF0aW9uTnVtYmVyKSA9PiB7XG4gIGxldCByZXN1bHRBcnJheSA9IFtdO1xuICAvLyBpZiB3ZSB3YW50IFRPUCBudW1iZXJzXG4gIGlmIChkaXJlY3Rpb24gPT09IFwibWF4XCIpIHtcbiAgICByZXN1bHRBcnJheSA9IHRyYXZlbEFwcC5kZXRlcm1pbmVOQ291bnRyaWVzKGFycmF5LCBzdGF0VHlwZSwgaXRlcmF0aW9uTnVtYmVyLCAxKTtcbiAgfVxuICAvLyBpZiB3ZSB3YW50IEJPVCBudW1iZXJzXG4gIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJtaW5cIikge1xuICAgIHJlc3VsdEFycmF5ID0gdHJhdmVsQXBwLmRldGVybWluZU5Db3VudHJpZXMoYXJyYXksIHN0YXRUeXBlLCBpdGVyYXRpb25OdW1iZXIsIC0xKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0QXJyYXk7XG59O1xuXG4vKiA1LjMgQ0FMQ1VMQVRFIFRIRSBOIENPVU5UUklFUyAqL1xudHJhdmVsQXBwLmRldGVybWluZU5Db3VudHJpZXMgPSAocmVzdWx0LCBzdGF0VHlwZSwgbiwgZGlyZWN0aW9uKSA9PiB7XG4gIC8vIGluaXRpYWxpemUgYSBoZWFwIGFycmF5IHRvIGtlZXAgdHJhY2sgb2YgdGhlIG4gbGFyZ2VzdC9zbWFsbGVzdCBzdGF0IHNjb3Jlc1xuICBsZXQgaGVhcCA9IG5ldyBNaW5IZWFwKCk7XG5cbiAgLy8gaW5pdGlhbGl6ZSBhIHNlY29uZGFyeSBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHRoZSBuIHNjb3JlcyBBTkRcbiAgLy8gdGhlIGFzc29jaWF0ZWQgY291bnRyeSB0byBlYWNoIHNjb3JlXG4gIGxldCBuQ291bnRyaWVzID0gW107XG5cbiAgLy8gc3RvcmUgdGhlIHN0YXQgdHlwZSBpbnRvIGEgcHJvcGVydHkgdmFyaWFibGUgZm9yIGVhc2llciB1c2VcbiAgbGV0IHByb3BlcnR5ID0gc3RhdFR5cGU7XG5cbiAgLy8gc3RhcnQgYSBjb3VudHJ5IGNvdW50ZXIgYXQgMCBqdXN0IGZvciB0aGUgc2FrZSBvZiBhZGRpbmcgdGhlIGZpcnN0IG4gY291bnRyaWVzIGludG8gdGhlIGhlYXBcbiAgbGV0IGNvdW50cnlDb3VudGVyID0gMDtcblxuICAvLyBnbyB0aHJvdWdoIGVhY2ggY291bnRyeSBmcm9tIHRoZSByZXN1bHRzIG9mIHRoZSBBSkFYIGNhbGwgdG8gSU5RU3RhdHNcbiAgcmVzdWx0Lm1hcChjb3VudHJ5ID0+IHtcbiAgICAvLyBzdG9yZSB0aGUgc3RhdCBzY29yZSBhbmQgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgY291bnRyeSBpbiB2YXJpYWJsZXMuXG4gICAgLy8gSU1QT1JUQU5UOiBtdWx0aXBseSBieSBkaXJlY3Rpb24gdG8gaW1wbGVtZW50IG1heC9taW4gaGVhcFxuICAgIC8vIGEgZGlyZWN0aW9uIG9mIDEgPSB3ZSB3YW50IG1heGltdW0gc2NvcmVzXG4gICAgLy8gYSBkaXJlY3Rpb24gb2YgLTEgPSB3ZSB3YW50IG1pbmltdW0gc2NvcmVzXG4gICAgbGV0IHN0YXQgPSBOdW1iZXIoY291bnRyeVtwcm9wZXJ0eV0pICogZGlyZWN0aW9uO1xuXG4gICAgLy8gaWYgaXQncyB0aGUgZmlyc3QgbiBjb3VudHJpZXMgZnJvbSB0aGUgcmVzdWx0LCBubyB3b3JrIHJlcXVpcmVkLiBKdXN0IGFkZCB0aGVtIGRpcmVjdGx5IGludG8gYm90aCB0aGUgaGVhcCBhbmQgbkNvdW50cmllcyB2YXJpYWJsZXNcbiAgICBpZiAoY291bnRyeUNvdW50ZXIgPCBuKSB7XG4gICAgICBoZWFwLmFkZChzdGF0KTtcbiAgICAgIG5Db3VudHJpZXMucHVzaChjb3VudHJ5KTtcblxuICAgICAgLy8gaW5jcmVtZW50IGNvdW50cnlDb3VudGVyIHRvIGtub3cgd2hlbiB3ZSdyZSBwYXN0IHRoZSBmaXJzdCBuIGNvdW50cmllc1xuICAgICAgY291bnRyeUNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ09ORElUSU9OIFRPIENIRUNLIElGIHRoZSBjdXJyZW50IGNvdW50cnkgc3RhdCBpcyBncmVhdGVyL3NtYWxsZXIgdGhhbiBhbnkgb2YgdGhlIGN1cnJlbnQgc3RhdHMgaW4gdGhlIGN1cnJlbnQgbiBjb3VudHJpZXNcbiAgICAgIGlmIChzdGF0ID4gaGVhcC5wZWVrKCkpIHtcbiAgICAgICAgLy8gaWYgc28sIGZpbmQgdGhlIGxvY2F0aW9uIG9mIHRoZSBzbWFsbGVzdC9sYXJnZXN0IHN0YXQgc2NvcmUgaW4gdGhlIGN1cnJlbnQgbkNvdW50cmllcyBhcnJheSBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgc3RhdCBhbmQgaXRzIGFzc29jaWF0ZWQgY291bnRyeVxuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IG5Db3VudHJpZXMubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICAvLyBtdWx0aXBseSBieSBkaXJlY3Rpb24gYWdhaW4gdG8gY29tcGFyZSBwcm9wZXJseSB3aXRoIHRoZSBoZWFwXG4gICAgICAgICAgbGV0IGN1cnJlbnRTdGF0ID0gTnVtYmVyKG5Db3VudHJpZXNbbV1bcHJvcGVydHldKSAqIGRpcmVjdGlvbjtcbiAgICAgICAgICBpZiAoY3VycmVudFN0YXQgPT09IGhlYXAucGVlaygpKSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGNvdW50cnlcbiAgICAgICAgICAgIG5Db3VudHJpZXMuc3BsaWNlKG0sIDEsIGNvdW50cnkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBzbWFsbGVzdC9sYXJnZXN0IHN0YXQgc2NvcmUgZnJvbSB0aGUgaGVhcCBhcyB3ZWxsXG4gICAgICAgIGhlYXAucG9sbCgpO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgbmV3IHNtYWxsZXN0L2xhcmdlc3Qgc2NvcmUgb250byB0aGUgaGVhcFxuICAgICAgICBoZWFwLmFkZChzdGF0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAvLyByZXR1cm4gbiBjb3VudHJpZXNcbiAgcmV0dXJuIG5Db3VudHJpZXM7XG59O1xuXG4vKiA2LiBTRU5EIEFQSSBSRVFVRVNUUyBUTyBXSUtJIEFORCBQSVhBICovXG5cbi8vIDYuMSBXSUtJUEVESUEgQVBJOiBHRVQgQU5EIFNUT1JFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0b3JlIGltcG9ydGFudCBpbmZvIGZvciBjYWxscyB0byB0aGUgV2lraSBBUEkuXG50cmF2ZWxBcHAud2lraVVSTCA9IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocFwiO1xuLy8gR2V0IGluZm8gZnJvbSBXaWtpcGVkaWEgKEFKQVgpXG50cmF2ZWxBcHAuZ2V0V2lraSA9IGNvdW50cnkgPT4ge1xuICAvLyBnZXQgZXh0cmFjdFxuICByZXR1cm4gJC5hamF4KHtcbiAgICB1cmw6IHRyYXZlbEFwcC53aWtpVVJMLFxuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBkYXRhVHlwZTogXCJqc29ucFwiLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjdGlvbjogXCJxdWVyeVwiLFxuICAgICAgcHJvcDogXCJleHRyYWN0c1wiLFxuICAgICAgdGl0bGVzOiBjb3VudHJ5LFxuICAgICAgZm9ybWF0OiBcImpzb25cIixcbiAgICAgIGV4bGltaXQ6IDEsXG4gICAgICBleGNoYXJzOiAyODAsXG4gICAgICBleGludHJvOiB0cnVlLFxuICAgICAgZXhwbGFpbnRleHQ6IHRydWUsXG4gICAgICByZWRpcmVjdHM6IDFcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gU3RvcmUgV2lraXBlZGlhIGNvdW50cnkgZXh0cmFjdFxudHJhdmVsQXBwLnN0b3JlV2lraSA9IHJlc3VsdCA9PiB7XG4gIC8vIFRoaXMgdmFyaWFibGUgc3RvcmVzIHRoZSBvYmplY3QgdGhhdCBob2xkcyBhIGtleSBuYW1lIHVuaXF1ZSB0byBldmVyeSBjb3VudHJ5LiBUaGUgdmFsdWUgb2YgdGhpcyBrZXkgaXMgYW4gb2JqZWN0IHRoYXQgaG9sZHMgdGhlIGV4dGFjdC5cbiAgY29uc3Qgd2lraUV4dHJhY3RPYmplY3QgPSByZXN1bHRbMF0ucXVlcnkucGFnZXM7XG4gIC8vIElmIHdlIGNvbnZlcnQgdGhlIGFib3ZlIG9iamVjdCBpbnRvIGFuIGFycmF5LCB0aGUgZXh0cmFjdCBjYW4gYmUgYWNjZXNzZWQgb24gdGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBhcnJheS4gVGhpcyB2YXJpYWJsZSBob2xkcyB0aGUgd2lraSBleHRyYWN0LlxuICB0cmF2ZWxBcHAud2lraUV4dHJhY3QucHVzaChPYmplY3QudmFsdWVzKHdpa2lFeHRyYWN0T2JqZWN0KVswXS5leHRyYWN0KTtcbn07XG5cbi8vIDYuMiBQSVhBQkFZIEFQSTogR0VUIEFORCBTVE9SRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3RvcmUgaW1wb3J0YW50IGluZm8gZm9yIGNhbGxzIHRvIHRoZSBQaXhhYmF5IEFQSS5cbnRyYXZlbEFwcC5waXhhS2V5ID0gXCI5ODc5NTcxLWU0Y2JiZWYzZTY5MmFhMTVhMjRhNzExOWJcIjtcbnRyYXZlbEFwcC5waXhhVVJMID0gXCJodHRwczovL3d3dy5waXhhYmF5LmNvbS9hcGkvXCI7XG4vLyBHZXQgaW5mbyBmcm9tIFdpa2lwZWRpYSAoQUpBWClcbnRyYXZlbEFwcC5nZXRQaXhhID0gY291bnRyeSA9PiB7XG4gIC8vIEdldCBpbWFnZSBVUkxcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdXJsOiB0cmF2ZWxBcHAucGl4YVVSTCxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICBkYXRhOiB7XG4gICAgICBrZXk6IHRyYXZlbEFwcC5waXhhS2V5LFxuICAgICAgcTogY291bnRyeSxcbiAgICAgIHBlcl9wYWdlOiAxNVxuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBTdG9yZSBQaXhhYmF5IGNvdW50cnkgaW1hZ2VzIG9uIHRoZSBwYWdlXG50cmF2ZWxBcHAuc3RvcmVQaXhhID0gcmVzdWx0cyA9PiB7XG4gIC8vIFN0b3JlIHRoZSBhcnJheSB0aGF0IGhvbGRzIHRoZSBpbWFnZSBVUkxzIGluIGFuIGFycmF5XG4gIGNvbnN0IHJlc3VsdHNBcnJheSA9IHJlc3VsdHNbMF0uaGl0cztcbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSByZXN1bHRzIGFycmF5IGFuZCBwdXNoIGFsbCBpbWFnZXMgaW50byB0aGUgaW1hZ2VBcnJheVxuICByZXN1bHRzQXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAvLyBBcnJheSBvZiBpbWFnZXMgZm9yIGVhY2ggY291bnRyeVxuICAgIHRyYXZlbEFwcC5pbWFnZUFycmF5LnB1c2goaXRlbS5sYXJnZUltYWdlVVJMKTtcbiAgICAvLyBBcnJheSBvZiBpbWFnZSBpbmZvcm1hdGlvbiBmcm9tIGVhY2ggY291bnRyeSB0byBiZSB1c2VkIGZvciBBbHQgdGV4dFxuICAgIHRyYXZlbEFwcC5pbWFnZVRleHRBcnJheS5wdXNoKGl0ZW0udGFncyk7XG4gIH0pO1xufTtcblxuLyogNy4gRElTUExBWSBERVNUSU9OQVRJT05TIE9OIFNDUkVFTiBXSVRIIFdJS0kgKyBQSVhBIFJFU1VMVFMgKi9cbnRyYXZlbEFwcC5kaXNwbGF5RGVzdGluYXRpb25zID0gKHJlc3VsdHMsIHN0YXRDaG9pY2VzKSA9PiB7XG4gIC8vIEdldCByaWQgb2YgcHJldmlvdXMgY2xpY2tlZCByZXN1bHRzXG4gICQoXCIucmVzdWx0c1wiKS5lbXB0eSgpO1xuICAvLyBHbyB0aHJvdWdoIGVhY2ggY291bnRyeSByZXN1bHQgYW5kIGJ1aWxkIHRoZSBzdHJpbmcgbGl0ZXJhbCB0byBhcHBlbmQgdG8gdGhlIHBhZ2VcbiAgbGV0IGNvdW50cnlDb3VudGVyID0gMDtcbiAgbGV0IGltYWdlQ291bnRlciA9IDA7XG4gIHJlc3VsdHMuZm9yRWFjaChjb3VudHJ5ID0+IHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgYWxsIGVsZW1lbnRzIGZvciBvbmUgY291bnRyeSByZXN1bHRcbiAgICBsZXQgY291bnRyeUNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIilcbiAgICAgIC5hZGRDbGFzcyhcInJlc3VsdC1jb250YWluZXJcIilcbiAgICAgIC8vIGFzc2lnbiByYW5kb20gcGl4YSBpbWFnZSBvZiBjb3VudHJ5IHRvIHRoZSByZXN1bHQgYmFja2dyb3VuZFxuICAgICAgLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgYHVybChcIiR7dHJhdmVsQXBwLmltYWdlQXJyYXlbdHJhdmVsQXBwLnJhbmRvbWl6ZShpbWFnZUNvdW50ZXIsIGltYWdlQ291bnRlciArIDE1KV19XCIpYCk7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdpbGwgaG9sZCBhbGwgdGV4dCBhbmQgaW1hZ2UocykgcmVmZXJyaW5nIHRvIHRoZSBjb3VudHJ5IHJlc3VsdFxuICAgIGxldCBjb3VudHJ5Q2FyZEVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJjYXJkXCIpO1xuICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgbmFtZSBvZiB0aGUgY291bnRyeVxuICAgIGxldCBjb3VudHJ5TmFtZUVsZW1lbnQgPSAkKFwiPGgyPlwiKVxuICAgICAgLmFkZENsYXNzKFwiY291bnRyeS1uYW1lXCIpXG4gICAgICAudGV4dChgJHtjb3VudHJ5LmNvdW50cnlOYW1lfWApO1xuICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGNvdW50cnksIHRha2VuIGZyb20gdGhlIHdpa2kgQVBJXG4gICAgbGV0IGNvdW50cnlEZXNjcmlwdGlvbkVsZW1lbnQgPSAkKFwiPHA+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJ3aWtpLXRleHRcIilcbiAgICAgIC50ZXh0KHRyYXZlbEFwcC53aWtpRXh0cmFjdFtjb3VudHJ5Q291bnRlcl0pO1xuICAgIGNvdW50cnlDb3VudGVyKys7XG4gICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIHRoZSB0ZXh0IGZvciBlYWNoIG9mIHRoZSB0aHJlZSBzdGF0cyB3ZSdyZSBkaXNwbGF5aW5nXG4gICAgbGV0IHN0YXRMaXN0RWxlbWVudCA9ICQoXCI8dWw+XCIpLmFkZENsYXNzKFwic3RhdC1saXN0XCIpO1xuICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgY29udGFpbmVyIHRoYXQgd2lsbCBob2xkIHRoZSBzbWFsbCBwaXhhIGNvdW50cnkgaW1hZ2VcbiAgICBsZXQgc21hbGxQaXhhQ29udGFpbmVyRWxlbWVudCA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImNvdW50cnktaW1hZ2UtY29udGFpbmVyXCIpO1xuICAgIC8vIFRoaXMgbmV3IGltYWdlIGNvdW50ZXIgZ2V0cyB0aGUgaW1hZ2UgaW4gdGhlIGFycmF5IHRoYXQgZm9sbG93cyB0aGUgZmlyc3QgaW1hZ2UgYmVpbmcgdXNlZCBhcyBhIGJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSBjYXJkXG4gICAgLy8gVGhpcyBpbWFnZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGltYWdlIGNvbnRhaW5lclxuICAgIGxldCBzbWFsbFBpeGFJbWFnZSA9ICQoXCI8aW1nPlwiKVxuICAgICAgLmFkZENsYXNzKFwiY291bnRyeS1pbWFnZVwiKVxuICAgICAgLmF0dHIoe1xuICAgICAgICBzcmM6IGAke3RyYXZlbEFwcC5pbWFnZUFycmF5W3RyYXZlbEFwcC5yYW5kb21pemUoaW1hZ2VDb3VudGVyLCBpbWFnZUNvdW50ZXIgKyAxNSldfWAsXG4gICAgICAgIGFsdDogYFNjZW5pYyBpbWFnZSBvZiAke2NvdW50cnkuY291bnRyeU5hbWV9LiBJbWFnZSB0YWdzIGluY2x1ZGUgJHt0cmF2ZWxBcHAuaW1hZ2VUZXh0QXJyYXl9LmBcbiAgICAgIH0pO1xuICAgIC8vIEFkZCAxNSB0byB0aGUgaW1hZ2UgY291bnRlciBlbnN1cmVzIHRoYXQgZXZlcnkgaXRlcmF0aW9uIHRocm91Z2ggdGhlIGZvckVhY2ggd2lsbCBhZGQgaW1hZ2VzIHRvIHRoZSBhc3NvY2lhdGVkIGNvdXRyaWVzXG4gICAgaW1hZ2VDb3VudGVyICs9IDE1O1xuICAgIC8vQXBwZW5kIHRoZSBjb3VudHJ5IGltYWdlIHRvIGl0cyBjb250YWluZXJcbiAgICBzbWFsbFBpeGFDb250YWluZXJFbGVtZW50LmFwcGVuZChzbWFsbFBpeGFJbWFnZSk7XG4gICAgLy8gQXBwZW5kIHRoZSBjb3VudHJ5IG5hbWUgPGgyPiwgd2lraSB0ZXh0IDxwPiwgc3RhdCBsaXN0IDx1bD4gYW5kIGltYWdlIGNvbnRhaW5lciA8ZGl2PiB0byB0aGUgY2FyZCA8ZGl2Pi5cbiAgICBjb3VudHJ5Q2FyZEVsZW1lbnQuYXBwZW5kKFxuICAgICAgY291bnRyeU5hbWVFbGVtZW50LFxuICAgICAgY291bnRyeURlc2NyaXB0aW9uRWxlbWVudCxcbiAgICAgIHN0YXRMaXN0RWxlbWVudCxcbiAgICAgIHNtYWxsUGl4YUNvbnRhaW5lckVsZW1lbnRcbiAgICApO1xuICAgIC8vIEFwcGVuZCB0aGUgY2FyZCBkaXYgdG8gdGhlIHJlc3VsdC1jb250YWluZXJcbiAgICBjb3VudHJ5Q29udGFpbmVyRWxlbWVudC5hcHBlbmQoY291bnRyeUNhcmRFbGVtZW50KTtcbiAgICAvL0FwcGVuZCB0aGUgcmVzdWx0LWNvbnRhaW5lciB0byB0aGUgcmVzdWx0cyBzZWN0aW9uIGVsZW1lbnQgb24gb3VyIHBhZ2VcbiAgICAkKFwiLnJlc3VsdHNcIikuYXBwZW5kKGNvdW50cnlDb250YWluZXJFbGVtZW50KTtcblxuICAgIC8vIEdvIHRocm91Z2ggdGhlIGFycmF5IFwic3RhdENob2ljZXNcIiBhbmQgc2V0IHVwIDMgaW5mb3JtYXRpb246XG4gICAgLy8gMS4gdGl0bGUgb2Ygc3RhdCAodGFrZW4gZnJvbSB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXkpXG4gICAgLy8gMi4gdmFsdWUgb2Ygc3RhdCAodGFrZW4gZnJvbSByZXN1bHRzIG9iamVjdClcbiAgICAvLyAzLiBkZXNjcmlwdGlvbiBvZiBzdGF0ICh0YWtlbiBmcm9tIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheSlcbiAgICBsZXQgc3RhdENvdW50ZXIgPSAwO1xuICAgIHN0YXRDaG9pY2VzLmZvckVhY2goc3RhdCA9PiB7XG4gICAgICBsZXQgc3RhdFRpdGxlID0gdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5W3N0YXRDb3VudGVyXTtcbiAgICAgIGxldCBzdGF0VmFsdWUgPSBjb3VudHJ5W3RyYXZlbEFwcC5zdGF0Q29kZUFycmF5W3N0YXRDb3VudGVyXV07XG4gICAgICBsZXQgc3RhdERlc2NyaXB0aW9uID0gdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5W3N0YXRDb3VudGVyXTtcbiAgICAgIHN0YXRDb3VudGVyKys7XG4gICAgICAvLyBUaGlzIGxpc3QgaXRlbSBlbGVtZW50IHdpbGwgaG9sZCBzdGF0IGluZm9ybWF0aW9uXG4gICAgICBsZXQgc3RhdExpc3RJdGVtRWxlbWVudCA9ICQoXCI8bGk+XCIpLmFkZENsYXNzKFwic3RhdC1saXN0X19pdGVtXCIpO1xuICAgICAgLy8gVGhpcyBkaXYgd2lsbCBob2xkIHRoZSBzdGF0IHRpdGxlIGFuZCBxdWVzdGlvbiBtYXJrIGljb25cbiAgICAgIGxldCBzdGF0VGl0bGVJY29uQ29udGFpbmVyRWxlbWVudCA9ICQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcInN0YXQtbGlzdF9faXRlbV9fdGl0bGUtaWNvbi1jb250YWluZXJcIik7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIHN0YXQgdGl0bGUgYW5kIHZhbHVlXG4gICAgICBsZXQgc3RhdFRpdGxlRWxlbWVudCA9ICQoXCI8aDQ+XCIpXG4gICAgICAgIC5hZGRDbGFzcyhcInN0YXQtbGlzdF9faXRlbV9fdGl0bGUtaWNvbi1jb250YWluZXJfX3RpdGxlLW51bWJlclwiKVxuICAgICAgICAudGV4dChgJHtzdGF0VGl0bGV9OiAke3RyYXZlbEFwcC5udW1iZXJXaXRoQ29tbWFzKHN0YXRWYWx1ZSl9YCk7XG4gICAgICAvLyBUaGlzIHF1ZXN0aW9uIG1hcmsgaWNvbiB3aWxsIHNpdCBuZXh0IHRvIHRoZSBzdGF0VGl0bGVFbGVtZW50IGFuZCB3aGVuIGNsaWNrZWQvaG92ZXJvdmVyLCB3aWxsIGRpc3BsYXkgdGhlIHN0YXQgZGVzY3JpcHRpb25cbiAgICAgIGxldCBzdGF0SG92ZXJJY29uRWxlbWVudCA9IGA8aSBjbGFzcz1cInN0YXQtbGlzdF9faXRlbV9fdGl0bGUtaWNvbi1jb250YWluZXJfX2ljb24gZmFyIGZhLXF1ZXN0aW9uLWNpcmNsZVwiPjwvaT5gO1xuICAgICAgLy8gYXBwZW5kIHRoZSBzdGF0IHRpdGxlIGFuZCBpY29uIHRvIHRoZSBzdGF0VGl0bGVJY29uQ29udGFpbmVyRWxlbWVudFxuICAgICAgc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKHN0YXRUaXRsZUVsZW1lbnQsIHN0YXRIb3Zlckljb25FbGVtZW50KTtcbiAgICAgIC8vIFRoaXMgZGl2IHdpbGwgaG9sZCB0aGUgc3RhdCBkZXNjcmlwdGlvbiBhbmQgaXMgYSBzaWJsaW5nIG9mIHRoZSBzdGF0VGl0bGVJY29uQ29udGFpbmVyLlxuICAgICAgbGV0IHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lciBkaXNwbGF5LW5vbmVcIik7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIHN0YXQgZGVzY3JpcHRpb25cbiAgICAgIGxldCBzdGF0RGVzY3JpcHRpb25FbGVtZW50ID0gJChcIjxwPlwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lcl9fZGVzY3JpcHRpb25cIilcbiAgICAgICAgLnRleHQoc3RhdERlc2NyaXB0aW9uKTtcbiAgICAgIC8vIEFwcGVuZCB0aGUgc3RhdERlc2NyaXB0aW9uRWxlbWVudCB0byB0aGUgc3RhdERlc2NyaXB0aW9uQ29udGFpbmVyRWxlbWVudFxuICAgICAgc3RhdERlc2NyaXB0aW9uQ29udGFpbmVyRWxlbWVudC5hcHBlbmQoc3RhdERlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgICAvLyBBcHBlbmQgdGhlIHR3byBzdGF0IGRpdiBjb250YWluZXJzIHRvIHRoZSA8bGk+XG4gICAgICBzdGF0TGlzdEl0ZW1FbGVtZW50LmFwcGVuZChzdGF0VGl0bGVJY29uQ29udGFpbmVyRWxlbWVudCwgc3RhdERlc2NyaXB0aW9uQ29udGFpbmVyRWxlbWVudCk7XG4gICAgICAvLyBBcHBlbmQgdGhlIDxsaT5zIHRvIHRoZSA8dWw+XG4gICAgICBzdGF0TGlzdEVsZW1lbnQuYXBwZW5kKHN0YXRMaXN0SXRlbUVsZW1lbnQpO1xuICAgIH0pO1xuICB9KTtcblxuICB0cmF2ZWxBcHAuZmluYWxEaXNwbGF5KCk7XG59O1xuXG4vKiAgNy4xIE9uY2UgYWxsIGltYWdlcyBhcmUgbG9hZGVkIGFzIGJhY2tncm91bmQgaW1hZ2VzIG9yIHJlZ3VsYXIgaW1hZ2VzLCBkaXNwbGF5IHRoZSBmaW5hbCByZXN1bHRzIHdpdGhvdXQgXCJsYWdcIiovXG50cmF2ZWxBcHAuZmluYWxEaXNwbGF5ID0gKCkgPT4ge1xuICAkKFwiLnJlc3VsdHNcIikud2FpdEZvckltYWdlcyhmdW5jdGlvbigpIHtcbiAgICAkKFwiLnJlc3VsdHNcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG4gICAgJChcImh0bWwsIGJvZHlcIilcbiAgICAgIC5zdG9wKClcbiAgICAgIC5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKFwiLnJlc3VsdHNcIikub2Zmc2V0KCkudG9wIH0sIDkwMCwgXCJzd2luZ1wiKTtcblxuICAgIC8vIHJlbW92ZSBsb2FkZXIgYW5kIGRpc3BsYXkgc3VibWl0IHJhbmtpbmcgYnV0dG9uIGFnYWluXG4gICAgbGV0IG1hcmtVcEJ1dHRvbiA9IGA8bGk+PGJ1dHRvbiBjbGFzcz1cInVzZXItc3VibWl0IGJ0blwiPlN1Ym1pdCBSYW5raW5nPC9idXR0b24+PC9saT5gO1xuICAgICQoXCIuY2hvaWNlc1wiKVxuICAgICAgLmZpbmQoXCJsaTpsYXN0LWNoaWxkXCIpXG4gICAgICAuaHRtbChtYXJrVXBCdXR0b24pO1xuXG4gICAgLyogRkxJQ0tJVFkgKi9cbiAgICAkKFwiLnJlc3VsdHNcIikuZmxpY2tpdHkoe1xuICAgICAgLy8gb3B0aW9uc1xuICAgICAgY2VsbEFsaWduOiBcImxlZnRcIixcbiAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICBhdXRvUGxheTogNTAwMCxcbiAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgIHdhdGNoQ1NTOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gNy4yIE9uIGhvdmVyIG9yIGNsaWNrIG92ZXIgdGhlIHF1ZXN0aW9uIG1hcmsgaWNvbiwgZGlzcGxheSB0aGUgc3RhdCBkZXNjcmlwdGlvblxudHJhdmVsQXBwLmRpc3BsYXlTdGF0RGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgJChcIi5yZXN1bHRzXCIpLm9uKFwiY2xpY2tcIiwgXCIuc3RhdC1saXN0X19pdGVtX190aXRsZS1pY29uLWNvbnRhaW5lcl9faWNvblwiLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5wYXJlbnRzKFwiLnN0YXQtbGlzdF9faXRlbVwiKVxuICAgICAgICAuZmluZChcIi5zdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lclwiKVxuICAgICAgICAuaGFzQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIikgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICAkKFwiLnJlc3VsdHNcIilcbiAgICAgICAgLmZpbmQoXCIuc3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXJcIilcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5yZXN1bHRzXCIpXG4gICAgICAgIC5maW5kKFwiLnN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbiAgICAgICQodGhpcylcbiAgICAgICAgLnBhcmVudHMoXCIuc3RhdC1saXN0X19pdGVtXCIpXG4gICAgICAgIC5maW5kKFwiLnN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBob2xkcyBhbGwgb3VyIGV2ZW50cyBmdW50aW9uc1xudHJhdmVsQXBwLmV2ZW50c0Z1bmN0aW9uID0gKCkgPT4ge1xuICB0cmF2ZWxBcHAuZ2V0VXNlclB1cnBvc2UoKTtcbiAgdHJhdmVsQXBwLmdldFN0YXJ0ZWQoKTtcbiAgdHJhdmVsQXBwLnRyYW5zZm9ybVNWRygpO1xuICB0cmF2ZWxBcHAuZGlzcGxheVN0YXREZXNjcmlwdGlvbigpO1xufTtcblxuLy8gSW5pdCBmdW5jdGlvbiB0byBob2xkIGFsbCBvdXIgZnVuY3Rpb25zIGluIG9yZGVyXG50cmF2ZWxBcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0cmF2ZWxBcHAuZXZlbnRzRnVuY3Rpb24oKTtcbiAgdHJhdmVsQXBwLnNsaWRlRHJhZygpO1xufTtcblxuLy8gRG9jdW1lbnQgUmVhZHkgdG8gY2FsbCBvdXIgaW5pdCgpIGZ1bmN0aW9uIGFuZCBzdGFydCB0aGUgYXBwXG4kKGZ1bmN0aW9uKCkge1xuICB0cmF2ZWxBcHAuaW5pdCgpO1xufSk7XG5cbi8qIDguIEVYVFJBIEZVTkNUSU9OUyBVU0VEIFRIUk9VR0hPVVQgQVBQICovXG5cbi8vIDguMSBTb3J0YWJsZSBmdW5jdGlvbmFsaXR5IGZvciBjcml0ZXJpYXNcbnRyYXZlbEFwcC5zbGlkZURyYWcgPSAoKSA9PiB7XG4gICQoXCIuY2hvaWNlc1wiKVxuICAgIC5zb3J0YWJsZSh7XG4gICAgICBjb25uZWN0V2l0aDogXCIuc29ydGFibGVcIixcbiAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICByZXZlcnQ6IHRydWUsXG4gICAgICBoZWxwZXI6IFwiY2xvbmVcIixcbiAgICAgIGNvbnRhaW5tZW50OiBcIi5jcml0ZXJpYXMtY29udGFpbmVyXCJcbiAgICB9KVxuICAgIC5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICAkKFwidWwsIGxpXCIpLmRpc2FibGVTZWxlY3Rpb24oKTtcbn07XG5cbi8vIDguMiBSYW5kb21pemVyIGZ1bmN0aW9uIHRvIHNlbGVjdCByYW5kb20gaW1hZ2VzIHRvIGRpc3BsYXlcbnRyYXZlbEFwcC5yYW5kb21pemUgPSAoc3RhcnRpbmdOdW0sIGVuZGluZ051bSkgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZGluZ051bSAtIHN0YXJ0aW5nTnVtKSkgKyBzdGFydGluZ051bTtcbn07XG5cbi8vIDguMyBFdmVudCBsaXN0ZW5lciB0byB0cmFuc2Zvcm0gU1ZHcyBpbnRvIGlubGluZSBTVkdTIHRvIGJlIGFibGUgdG8gY2hhbmdlIHRoZWlyIGNvbG9ycyB3aXRoIGNzcyBmaWxsXG50cmF2ZWxBcHAudHJhbnNmb3JtU1ZHID0gKCkgPT4ge1xuICBqUXVlcnkoXCJpbWcuc3ZnXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyICRpbWcgPSBqUXVlcnkodGhpcyk7XG4gICAgdmFyIGltZ0lEID0gJGltZy5hdHRyKFwiaWRcIik7XG4gICAgdmFyIGltZ0NsYXNzID0gJGltZy5hdHRyKFwiY2xhc3NcIik7XG4gICAgdmFyIGltZ1VSTCA9ICRpbWcuYXR0cihcInNyY1wiKTtcblxuICAgIGpRdWVyeS5nZXQoXG4gICAgICBpbWdVUkwsXG4gICAgICBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIC8vIEdldCB0aGUgU1ZHIHRhZywgaWdub3JlIHRoZSByZXN0XG4gICAgICAgIHZhciAkc3ZnID0galF1ZXJ5KGRhdGEpLmZpbmQoXCJzdmdcIik7XG5cbiAgICAgICAgLy8gQWRkIHJlcGxhY2VkIGltYWdlJ3MgSUQgdG8gdGhlIG5ldyBTVkdcbiAgICAgICAgaWYgKHR5cGVvZiBpbWdJRCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICRzdmcgPSAkc3ZnLmF0dHIoXCJpZFwiLCBpbWdJRCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIHJlcGxhY2VkIGltYWdlJ3MgY2xhc3NlcyB0byB0aGUgbmV3IFNWR1xuICAgICAgICBpZiAodHlwZW9mIGltZ0NsYXNzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cihcImNsYXNzXCIsIGltZ0NsYXNzICsgXCIgcmVwbGFjZWQtc3ZnXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBpbnZhbGlkIFhNTCB0YWdzIGFzIHBlciBodHRwOi8vdmFsaWRhdG9yLnczLm9yZ1xuICAgICAgICAkc3ZnID0gJHN2Zy5yZW1vdmVBdHRyKFwieG1sbnM6YVwiKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdmlld3BvcnQgaXMgc2V0LCBpZiB0aGUgdmlld3BvcnQgaXMgbm90IHNldCB0aGUgU1ZHIHdvbnQndCBzY2FsZS5cbiAgICAgICAgaWYgKCEkc3ZnLmF0dHIoXCJ2aWV3Qm94XCIpICYmICRzdmcuYXR0cihcImhlaWdodFwiKSAmJiAkc3ZnLmF0dHIoXCJ3aWR0aFwiKSkge1xuICAgICAgICAgICRzdmcuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyAkc3ZnLmF0dHIoXCJoZWlnaHRcIikgKyBcIiBcIiArICRzdmcuYXR0cihcIndpZHRoXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcGxhY2UgaW1hZ2Ugd2l0aCBuZXcgU1ZHXG4gICAgICAgICRpbWcucmVwbGFjZVdpdGgoJHN2Zyk7XG4gICAgICB9LFxuICAgICAgXCJ4bWxcIlxuICAgICk7XG4gIH0pO1xufTtcblxuLyogOC40IFRSQU5TRk9STSBTVFJJTkcgTlVNQkVSUyBJTlRPIFNFUEFSQVRFRCBTVFJJTkdTIFdJVEggUFJPUEVSIENPTU1BUyBGT1IgRUFDSCBUSE9VU0FORCBVTklUICovXG50cmF2ZWxBcHAubnVtYmVyV2l0aENvbW1hcyA9IHN0YXQgPT4ge1xuICByZXR1cm4gc3RhdC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbn07XG4iLCIvKipcbiAqIEZhc3RQcmlvcml0eVF1ZXVlLmpzIDogYSBmYXN0IGhlYXAtYmFzZWQgcHJpb3JpdHkgcXVldWUgIGluIEphdmFTY3JpcHQuXG4gKiAoYykgdGhlIGF1dGhvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKlxuICogU3BlZWQtb3B0aW1pemVkIGhlYXAtYmFzZWQgcHJpb3JpdHkgcXVldWUgZm9yIG1vZGVybiBicm93c2VycyBhbmQgSmF2YVNjcmlwdCBlbmdpbmVzLlxuICpcbiAqIFVzYWdlIDpcbiAgICAgICAgIEluc3RhbGxhdGlvbiAoaW4gc2hlbGwsIGlmIHlvdSB1c2Ugbm9kZSk6XG4gICAgICAgICAkIG5wbSBpbnN0YWxsIGZhc3Rwcmlvcml0eXF1ZXVlXG5cbiAgICAgICAgIFJ1bm5pbmcgdGVzdCBwcm9ncmFtIChpbiBKYXZhU2NyaXB0KTpcblxuICAgICAgICAgLy8gdmFyIEZhc3RQcmlvcml0eVF1ZXVlID0gcmVxdWlyZShcImZhc3Rwcmlvcml0eXF1ZXVlXCIpOy8vIGluIG5vZGVcbiAgICAgICAgIHZhciB4ID0gbmV3IEZhc3RQcmlvcml0eVF1ZXVlKCk7XG4gICAgICAgICB4LmFkZCgxKTtcbiAgICAgICAgIHguYWRkKDApO1xuICAgICAgICAgeC5hZGQoNSk7XG4gICAgICAgICB4LmFkZCg0KTtcbiAgICAgICAgIHguYWRkKDMpO1xuICAgICAgICAgeC5wZWVrKCk7IC8vIHNob3VsZCByZXR1cm4gMCwgbGVhdmVzIHggdW5jaGFuZ2VkXG4gICAgICAgICB4LnNpemU7IC8vIHNob3VsZCByZXR1cm4gNSwgbGVhdmVzIHggdW5jaGFuZ2VkXG4gICAgICAgICB3aGlsZSgheC5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgY29uc29sZS5sb2coeC5wb2xsKCkpO1xuICAgICAgICAgfSAvLyB3aWxsIHByaW50IDAgMSAzIDQgNVxuICAgICAgICAgeC50cmltKCk7IC8vIChvcHRpb25hbCkgb3B0aW1pemVzIG1lbW9yeSB1c2FnZVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0Y29tcGFyYXRvciA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiO1xufTtcblxuLy8gdGhlIHByb3ZpZGVkIGNvbXBhcmF0b3IgZnVuY3Rpb24gc2hvdWxkIHRha2UgYSwgYiBhbmQgcmV0dXJuICp0cnVlKiB3aGVuIGEgPCBiXG5mdW5jdGlvbiBGYXN0UHJpb3JpdHlRdWV1ZShjb21wYXJhdG9yKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBGYXN0UHJpb3JpdHlRdWV1ZSkpIHJldHVybiBuZXcgRmFzdFByaW9yaXR5UXVldWUoY29tcGFyYXRvcik7XG4gIHRoaXMuYXJyYXkgPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5jb21wYXJlID0gY29tcGFyYXRvciB8fCBkZWZhdWx0Y29tcGFyYXRvcjtcbn1cblxuLy8gY29weSB0aGUgcHJpb3JpdHkgcXVldWUgaW50byBhbm90aGVyLCBhbmQgcmV0dXJuIGl0LiBRdWV1ZSBpdGVtcyBhcmUgc2hhbGxvdy1jb3BpZWQuXG4vLyBSdW5zIGluIGBPKG4pYCB0aW1lLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHZhciBmcHEgPSBuZXcgRmFzdFByaW9yaXR5UXVldWUodGhpcy5jb21wYXJlKTtcbiAgZnBxLnNpemUgPSB0aGlzLnNpemU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICBmcHEuYXJyYXkucHVzaCh0aGlzLmFycmF5W2ldKTtcbiAgfVxuICByZXR1cm4gZnBxO1xufTtcblxuLy8gQWRkIGFuIGVsZW1lbnQgaW50byB0aGUgcXVldWVcbi8vIHJ1bnMgaW4gTyhsb2cgbikgdGltZVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG15dmFsKSB7XG4gIHZhciBpID0gdGhpcy5zaXplO1xuICB0aGlzLmFycmF5W3RoaXMuc2l6ZV0gPSBteXZhbDtcbiAgdGhpcy5zaXplICs9IDE7XG4gIHZhciBwO1xuICB2YXIgYXA7XG4gIHdoaWxlIChpID4gMCkge1xuICAgIHAgPSAoaSAtIDEpID4+IDE7XG4gICAgYXAgPSB0aGlzLmFycmF5W3BdO1xuICAgIGlmICghdGhpcy5jb21wYXJlKG15dmFsLCBhcCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmFycmF5W2ldID0gYXA7XG4gICAgaSA9IHA7XG4gIH1cbiAgdGhpcy5hcnJheVtpXSA9IG15dmFsO1xufTtcblxuLy8gcmVwbGFjZSB0aGUgY29udGVudCBvZiB0aGUgaGVhcCBieSBwcm92aWRlZCBhcnJheSBhbmQgXCJoZWFwaWZ5IGl0XCJcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5oZWFwaWZ5ID0gZnVuY3Rpb24oYXJyKSB7XG4gIHRoaXMuYXJyYXkgPSBhcnI7XG4gIHRoaXMuc2l6ZSA9IGFyci5sZW5ndGg7XG4gIHZhciBpO1xuICBmb3IgKGkgPSB0aGlzLnNpemUgPj4gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB0aGlzLl9wZXJjb2xhdGVEb3duKGkpO1xuICB9XG59O1xuXG4vLyBmb3IgaW50ZXJuYWwgdXNlXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX3BlcmNvbGF0ZVVwID0gZnVuY3Rpb24oaSwgZm9yY2UpIHtcbiAgdmFyIG15dmFsID0gdGhpcy5hcnJheVtpXTtcbiAgdmFyIHA7XG4gIHZhciBhcDtcbiAgd2hpbGUgKGkgPiAwKSB7XG4gICAgcCA9IChpIC0gMSkgPj4gMTtcbiAgICBhcCA9IHRoaXMuYXJyYXlbcF07XG4gICAgLy8gZm9yY2Ugd2lsbCBza2lwIHRoZSBjb21wYXJlXG4gICAgaWYgKCFmb3JjZSAmJiAhdGhpcy5jb21wYXJlKG15dmFsLCBhcCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmFycmF5W2ldID0gYXA7XG4gICAgaSA9IHA7XG4gIH1cbiAgdGhpcy5hcnJheVtpXSA9IG15dmFsO1xufTtcblxuLy8gZm9yIGludGVybmFsIHVzZVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLl9wZXJjb2xhdGVEb3duID0gZnVuY3Rpb24oaSkge1xuICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgdmFyIGhzaXplID0gdGhpcy5zaXplID4+PiAxO1xuICB2YXIgYWkgPSB0aGlzLmFycmF5W2ldO1xuICB2YXIgbDtcbiAgdmFyIHI7XG4gIHZhciBiZXN0YztcbiAgd2hpbGUgKGkgPCBoc2l6ZSkge1xuICAgIGwgPSAoaSA8PCAxKSArIDE7XG4gICAgciA9IGwgKyAxO1xuICAgIGJlc3RjID0gdGhpcy5hcnJheVtsXTtcbiAgICBpZiAociA8IHNpemUpIHtcbiAgICAgIGlmICh0aGlzLmNvbXBhcmUodGhpcy5hcnJheVtyXSwgYmVzdGMpKSB7XG4gICAgICAgIGwgPSByO1xuICAgICAgICBiZXN0YyA9IHRoaXMuYXJyYXlbcl07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5jb21wYXJlKGJlc3RjLCBhaSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmFycmF5W2ldID0gYmVzdGM7XG4gICAgaSA9IGw7XG4gIH1cbiAgdGhpcy5hcnJheVtpXSA9IGFpO1xufTtcblxuLy8gaW50ZXJuYWxcbi8vIF9yZW1vdmVBdChpbmRleCkgd2lsbCByZW1vdmUgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4IGZyb20gdGhlIHF1ZXVlLFxuLy8gcmV0YWluaW5nIGJhbGFuY2UuIHJldHVybnMgdGhlIHJlbW92ZWQgaXRlbSwgb3IgdW5kZWZpbmVkIGlmIG5vdGhpbmcgaXMgcmVtb3ZlZC5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fcmVtb3ZlQXQgPSBmdW5jdGlvbihpbmRleCkge1xuICBpZiAoaW5kZXggPiB0aGlzLnNpemUgLSAxIHx8IGluZGV4IDwgMCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAvLyBpbXBsMTpcbiAgLy90aGlzLmFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gIC8vdGhpcy5oZWFwaWZ5KHRoaXMuYXJyYXkpO1xuICAvLyBpbXBsMjpcbiAgdGhpcy5fcGVyY29sYXRlVXAoaW5kZXgsIHRydWUpO1xuICByZXR1cm4gdGhpcy5wb2xsKCk7XG59O1xuXG4vLyByZW1vdmUobXl2YWwpIHdpbGwgcmVtb3ZlIGFuIGl0ZW0gbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIHZhbHVlIGZyb20gdGhlXG4vLyBxdWV1ZSwgY2hlY2tlZCBmb3IgZXF1YWxpdHkgYnkgdXNpbmcgdGhlIHF1ZXVlJ3MgY29tcGFyYXRvci5cbi8vIHJldHVybiB0cnVlIGlmIHJlbW92ZWQsIGZhbHNlIG90aGVyd2lzZS5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihteXZhbCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgaWYgKCF0aGlzLmNvbXBhcmUodGhpcy5hcnJheVtpXSwgbXl2YWwpICYmICF0aGlzLmNvbXBhcmUobXl2YWwsIHRoaXMuYXJyYXlbaV0pKSB7XG4gICAgICAvLyBpdGVtcyBtYXRjaCwgY29tcGFyYXRvciByZXR1cm5zIGZhbHNlIGJvdGggd2F5cywgcmVtb3ZlIGl0ZW1cbiAgICAgIHRoaXMuX3JlbW92ZUF0KGkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIGludGVybmFsXG4vLyByZW1vdmVzIGFuZCByZXR1cm5zIGl0ZW1zIGZvciB3aGljaCB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnVlLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLl9iYXRjaFJlbW92ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBsaW1pdCkge1xuICAvLyBpbml0aWFsaXplIHJldHVybiBhcnJheSB3aXRoIG1heCBzaXplIG9mIHRoZSBsaW1pdCBvciBjdXJyZW50IHF1ZXVlIHNpemVcbiAgdmFyIHJldEFyciA9IG5ldyBBcnJheShsaW1pdCA/IGxpbWl0IDogdGhpcy5zaXplKTtcbiAgdmFyIGNvdW50ID0gMDtcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmIHRoaXMuc2l6ZSkge1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHRoaXMuc2l6ZSAmJiBjb3VudCA8IHJldEFyci5sZW5ndGgpIHtcbiAgICAgIGlmIChjYWxsYmFjayh0aGlzLmFycmF5W2ldKSkge1xuICAgICAgICByZXRBcnJbY291bnRdID0gdGhpcy5fcmVtb3ZlQXQoaSk7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIC8vIG1vdmUgdXAgYSBsZXZlbCBpbiB0aGUgaGVhcCBpZiB3ZSByZW1vdmUgYW4gaXRlbVxuICAgICAgICBpID0gaSA+PiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0gXG4gIH1cbiAgcmV0QXJyLmxlbmd0aCA9IGNvdW50O1xuICByZXR1cm4gcmV0QXJyO1xufVxuXG4vLyByZW1vdmVPbmUoY2FsbGJhY2spIHdpbGwgZXhlY3V0ZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbSBvZiB0aGUgcXVldWVcbi8vIGFuZCB3aWxsIHJlbW92ZSB0aGUgZmlyc3QgaXRlbSBmb3Igd2hpY2ggdGhlIGNhbGxiYWNrIHdpbGwgcmV0dXJuIHRydWUuXG4vLyByZXR1cm4gdGhlIHJlbW92ZWQgaXRlbSwgb3IgdW5kZWZpbmVkIGlmIG5vdGhpbmcgaXMgcmVtb3ZlZC5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5yZW1vdmVPbmUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICB2YXIgYXJyID0gdGhpcy5fYmF0Y2hSZW1vdmUoY2FsbGJhY2ssIDEpO1xuICByZXR1cm4gYXJyLmxlbmd0aCA+IDAgPyBhcnJbMF0gOiB1bmRlZmluZWQ7XG59O1xuXG4vLyByZW1vdmUoY2FsbGJhY2tbLCBsaW1pdF0pIHdpbGwgZXhlY3V0ZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbSBvZlxuLy8gdGhlIHF1ZXVlIGFuZCB3aWxsIHJlbW92ZSBlYWNoIGl0ZW0gZm9yIHdoaWNoIHRoZSBjYWxsYmFjayByZXR1cm5zIHRydWUsIHVwIHRvXG4vLyBhIG1heCBsaW1pdCBvZiByZW1vdmVkIGl0ZW1zIGlmIHNwZWNpZmllZCBvciBubyBsaW1pdCBpZiB1bnNwZWNpZmllZC5cbi8vIHJldHVybiBhbiBhcnJheSBjb250YWluaW5nIHRoZSByZW1vdmVkIGl0ZW1zLlxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnJlbW92ZU1hbnkgPSBmdW5jdGlvbihjYWxsYmFjaywgbGltaXQpIHtcbiAgcmV0dXJuIHRoaXMuX2JhdGNoUmVtb3ZlKGNhbGxiYWNrLCBsaW1pdCk7XG59O1xuXG4vLyBMb29rIGF0IHRoZSB0b3Agb2YgdGhlIHF1ZXVlIChvbmUgb2YgdGhlIHNtYWxsZXN0IGVsZW1lbnRzKSB3aXRob3V0IHJlbW92aW5nIGl0XG4vLyBleGVjdXRlcyBpbiBjb25zdGFudCB0aW1lXG4vL1xuLy8gQ2FsbGluZyBwZWVrIG9uIGFuIGVtcHR5IHByaW9yaXR5IHF1ZXVlIHJldHVybnNcbi8vIHRoZSBcInVuZGVmaW5lZFwiIHZhbHVlLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvdW5kZWZpbmVkXG4vL1xuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICByZXR1cm4gdGhpcy5hcnJheVswXTtcbn07XG5cbi8vIHJlbW92ZSB0aGUgZWxlbWVudCBvbiB0b3Agb2YgdGhlIGhlYXAgKG9uZSBvZiB0aGUgc21hbGxlc3QgZWxlbWVudHMpXG4vLyBydW5zIGluIGxvZ2FyaXRobWljIHRpbWVcbi8vXG4vLyBJZiB0aGUgcHJpb3JpdHkgcXVldWUgaXMgZW1wdHksIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRoZVxuLy8gXCJ1bmRlZmluZWRcIiB2YWx1ZS5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL3VuZGVmaW5lZFxuLy9cbi8vIEZvciBsb25nLXJ1bm5pbmcgYW5kIGxhcmdlIHByaW9yaXR5IHF1ZXVlcywgb3IgcHJpb3JpdHkgcXVldWVzXG4vLyBzdG9yaW5nIGxhcmdlIG9iamVjdHMsIHlvdSBtYXkgIHdhbnQgdG8gY2FsbCB0aGUgdHJpbSBmdW5jdGlvblxuLy8gYXQgc3RyYXRlZ2ljIHRpbWVzIHRvIHJlY292ZXIgYWxsb2NhdGVkIG1lbW9yeS5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5wb2xsID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnNpemUgPT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIGFucyA9IHRoaXMuYXJyYXlbMF07XG4gIGlmICh0aGlzLnNpemUgPiAxKSB7XG4gICAgdGhpcy5hcnJheVswXSA9IHRoaXMuYXJyYXlbLS10aGlzLnNpemVdO1xuICAgIHRoaXMuX3BlcmNvbGF0ZURvd24oMCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zaXplIC09IDE7XG4gIH1cbiAgcmV0dXJuIGFucztcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWRkcyB0aGUgcHJvdmlkZWQgdmFsdWUgdG8gdGhlIGhlYXAsIHdoaWxlIHJlbW92aW5nXG4vLyBhbmQgcmV0dXJuaW5nIG9uZSBvZiB0aGUgc21hbGxlc3QgZWxlbWVudHMgKGxpa2UgcG9sbCkuIFRoZSBzaXplIG9mIHRoZSBxdWV1ZVxuLy8gdGh1cyByZW1haW5zIHVuY2hhbmdlZC5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5yZXBsYWNlVG9wID0gZnVuY3Rpb24obXl2YWwpIHtcbiAgaWYgKHRoaXMuc2l6ZSA9PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgYW5zID0gdGhpcy5hcnJheVswXTtcbiAgdGhpcy5hcnJheVswXSA9IG15dmFsO1xuICB0aGlzLl9wZXJjb2xhdGVEb3duKDApO1xuICByZXR1cm4gYW5zO1xufTtcblxuLy8gcmVjb3ZlciB1bnVzZWQgbWVtb3J5IChmb3IgbG9uZy1ydW5uaW5nIHByaW9yaXR5IHF1ZXVlcylcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYXJyYXkgPSB0aGlzLmFycmF5LnNsaWNlKDAsIHRoaXMuc2l6ZSk7XG59O1xuXG4vLyBDaGVjayB3aGV0aGVyIHRoZSBoZWFwIGlzIGVtcHR5XG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5zaXplID09PSAwO1xufTtcblxuLy8gaXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBpbiBvcmRlciwgcGFzcyBhIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgKGl0ZW0sIGluZGV4KSBhcyBhcmdzLlxuLy8gVE9ETyBvbmNlIHdlIHRyYW5zcGlsZSwgdW5jb21tZW50XG4vLyBpZiAoU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcikge1xuLy8gICBGYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKigpIHtcbi8vICAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbi8vICAgICB2YXIgZnBxID0gdGhpcy5jbG9uZSgpO1xuLy8gICAgIHdoaWxlICghZnBxLmlzRW1wdHkoKSkge1xuLy8gICAgICAgeWllbGQgZnBxLnBvbGwoKTtcbi8vICAgICB9XG4vLyAgIH07XG4vLyB9XG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIGlmICh0aGlzLmlzRW1wdHkoKSB8fCB0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuICB2YXIgaSA9IDA7XG4gIHZhciBmcHEgPSB0aGlzLmNsb25lKCk7XG4gIHdoaWxlICghZnBxLmlzRW1wdHkoKSkge1xuICAgIGNhbGxiYWNrKGZwcS5wb2xsKCksIGkrKyk7XG4gIH1cbn07XG5cbi8vIHJldHVybiB0aGUgayAnc21hbGxlc3QnIGVsZW1lbnRzIG9mIHRoZSBxdWV1ZVxuLy8gcnVucyBpbiBPKGsgbG9nIGspIHRpbWVcbi8vIHRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgcmVwZWF0ZWRseSBjYWxsaW5nIHBvbGwsIGJ1dFxuLy8gaXQgaGFzIGEgYmV0dGVyIGNvbXB1dGF0aW9uYWwgY29tcGxleGl0eSwgd2hpY2ggY2FuIGJlXG4vLyBpbXBvcnRhbnQgZm9yIGxhcmdlIGRhdGEgc2V0cy5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5rU21hbGxlc3QgPSBmdW5jdGlvbihrKSB7XG4gIGlmICh0aGlzLnNpemUgPT0gMCkgcmV0dXJuIFtdO1xuICB2YXIgY29tcGFyYXRvciA9IHRoaXMuY29tcGFyZTtcbiAgdmFyIGFyciA9IHRoaXMuYXJyYXlcbiAgdmFyIGZwcSA9IG5ldyBGYXN0UHJpb3JpdHlRdWV1ZShmdW5jdGlvbihhLGIpe1xuICAgcmV0dXJuIGNvbXBhcmF0b3IoYXJyW2FdLGFycltiXSk7XG4gIH0pO1xuICBrID0gTWF0aC5taW4odGhpcy5zaXplLCBrKTtcbiAgdmFyIHNtYWxsZXN0ID0gbmV3IEFycmF5KGspO1xuICB2YXIgaiA9IDA7XG4gIGZwcS5hZGQoMCk7XG4gIHdoaWxlIChqIDwgaykge1xuICAgIHZhciBzbWFsbCA9IGZwcS5wb2xsKCk7XG4gICAgc21hbGxlc3RbaisrXSA9IHRoaXMuYXJyYXlbc21hbGxdO1xuICAgIHZhciBsID0gKHNtYWxsIDw8IDEpICsgMTtcbiAgICB2YXIgciA9IGwgKyAxO1xuICAgIGlmIChsIDwgdGhpcy5zaXplKSBmcHEuYWRkKGwpO1xuICAgIGlmIChyIDwgdGhpcy5zaXplKSBmcHEuYWRkKHIpO1xuICB9XG4gIHJldHVybiBzbWFsbGVzdDtcbn1cblxuLy8ganVzdCBmb3IgaWxsdXN0cmF0aW9uIHB1cnBvc2VzXG52YXIgbWFpbiA9IGZ1bmN0aW9uKCkge1xuICAvLyBtYWluIGNvZGVcbiAgdmFyIHggPSBuZXcgRmFzdFByaW9yaXR5UXVldWUoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhIDwgYjtcbiAgfSk7XG4gIHguYWRkKDEpO1xuICB4LmFkZCgwKTtcbiAgeC5hZGQoNSk7XG4gIHguYWRkKDQpO1xuICB4LmFkZCgzKTtcbiAgd2hpbGUgKCF4LmlzRW1wdHkoKSkge1xuICAgIGNvbnNvbGUubG9nKHgucG9sbCgpKTtcbiAgfVxufTtcblxuaWYgKHJlcXVpcmUubWFpbiA9PT0gbW9kdWxlKSB7XG4gIG1haW4oKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYXN0UHJpb3JpdHlRdWV1ZTtcbiJdfQ==
