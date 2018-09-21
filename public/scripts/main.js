(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _sweetalert = require("sweetalert2");

var _sweetalert2 = _interopRequireDefault(_sweetalert);

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
    travelApp.flickityOn = false;

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
  // axios({
  //   method: "GET",
  //   url: "https://proxy.hackeryou.com",
  //   dataResponse: "jsonp",
  //   params: {
  //     reqUrl: travelApp.statURL,
  //     api_key: travelApp.statKey,
  //     data: `hdi,${statType1},${statType2},${statType3}`,
  //     cmd: "getWorldData"
  //   }
  // })
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

    console.log(res.data);
    // calling the calculation function to get the top n / bottom n countries
    // finalResults holds the final 3 coutries and all of their stats
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

    travelApp.flickityOn === true;
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
  (0, _sweetalert2.default)({
    type: "warning",
    title: "API Unavailable",
    text: "As of September 19th 2018, the INQstats API (which is used to calculate the travel recommendations) is temporarily down. The results functionality is therefore not available until further notice. We sincerely apologize for this inconvenience and ask you to come back to our application in a near future."
  });
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

},{"fastpriorityqueue":2,"sweetalert2":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
/*!
* sweetalert2 v7.26.28
* Released under the MIT License.
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
* Converts `inputOptions` into an array of `[value, label]`s
* @param inputOptions
*/

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isThenable = function isThenable(arg) {
  return _typeof(arg) === 'object' && typeof arg.then === 'function';
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var version = "7.26.28";

var argsToParams = function argsToParams(args) {
  var params = {};

  switch (_typeof(args[0])) {
    case 'object':
      _extends(params, args[0]);

      break;

    default:
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
        }
      });
  }

  return params;
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
var adaptInputValidator = function adaptInputValidator(legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationError) {
      return validationError;
    });
  };
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};
var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var elementByClass = function elementByClass(className) {
  var container = getContainer();
  return container ? container.querySelector('.' + className) : null;
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll('.' + swalClasses.icon));
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};
var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};
var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};
var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};
/* @deprecated */

/* istanbul ignore next */

var getButtonsWrapper = function getButtonsWrapper() {
  warnOnce("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead");
  return elementByClass(swalClasses.actions);
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  }); // https://github.com/jkup/focusable/blob/master/index.js

  var otherFocusableElements = toArray(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses.progresssteps, "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">?</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">!</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">i</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\">\xD7</button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses.validationerror, "\" id=\"").concat(swalClasses.validationerror, "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
/*
 * Add modal + backdrop to DOM
 */

var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();

  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
  }

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);
  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea); // a11y

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationError = function resetValidationError(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationError();
    }

    oldInputVal = e.target.value;
  };

  input.oninput = resetValidationError;
  file.onchange = resetValidationError;
  select.onchange = resetValidationError;
  checkbox.onchange = resetValidationError;
  textarea.oninput = resetValidationError;

  range.oninput = function (e) {
    resetValidationError(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationError(e);
    range.nextSibling.value = range.value;
  };

  return popup;
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  }

  if (_typeof(param) === 'object') {
    target.innerHTML = '';

    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  }

  show(target);
};

var animationEndEvent = function () {
  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };

  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  } // Cancel button


  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  } // Confirm button


  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  } // Edit text on confirm and cancel buttons


  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText; // ARIA labels for confirm and cancel buttons

  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel); // Add buttons custom classes

  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass); // Buttons styling

  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }
};

var renderContent = function renderContent(params) {
  var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }
};

var renderIcon = function renderIcon(params) {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }

  if (params.type) {
    if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
      var icon = Swal.getPopup().querySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
      show(icon); // Animate icon

      if (params.animation) {
        addClass(icon, "swal2-animate-".concat(params.type, "-icon"));
      }
    } else {
      error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
    }
  }
};

var renderImage = function renderImage(params) {
  var image = getImage();

  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;

    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }
};

var renderProgressSteps = function renderProgressSteps(params) {
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep, 10);

  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    progressStepsContainer.innerHTML = '';

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;

      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }

      progressStepsContainer.appendChild(circle);

      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);

        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }

        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }
};

var renderTitle = function renderTitle(params) {
  var title = getTitle();

  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    parseHtmlToContainer(params.title, title);
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};
/* istanbul ignore next */

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || el.contains(getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var restoreActiveElement = function restoreActiveElement() {
  var x = window.scrollX;
  var y = window.scrollY;
  globalState.restoreFocusTimeout = setTimeout(function () {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }, RESTORE_FOCUS_TIMEOUT); // issues/900

  if (typeof x !== 'undefined' && typeof y !== 'undefined') {
    // IE doesn't have scrollX/scrollY support
    window.scrollTo(x, y);
  }
};

/*
 * Global function to close sweetAlert
 */

var close = function close(onClose, onAfterClose) {
  var container = getContainer();
  var popup = getPopup();

  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);

  var removePopupAndResetState = function removePopupAndResetState() {
    if (!isToast()) {
      restoreActiveElement();
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }

    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      setTimeout(function () {
        onAfterClose();
      });
    }
  }; // If animation is supported, animate


  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);

      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
};

/*
 * Global function to determine if swal2 popup is shown
 */

var isVisible$1 = function isVisible() {
  return !!getPopup();
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
 * @param ParentSwal
 * @returns {NoNewKeywordSwal}
 */
function withNoNewKeyword(ParentSwal) {
  var NoNewKeywordSwal = function NoNewKeywordSwal() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!(this instanceof NoNewKeywordSwal)) {
      return _construct(NoNewKeywordSwal, args);
    }

    Object.getPrototypeOf(NoNewKeywordSwal).apply(this, args);
  };

  NoNewKeywordSwal.prototype = _extends(Object.create(ParentSwal.prototype), {
    constructor: NoNewKeywordSwal
  });

  if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(NoNewKeywordSwal, ParentSwal);
  } else {
    // Android 4.4
    // eslint-disable-next-line
    NoNewKeywordSwal.__proto__ = ParentSwal;
  }

  return NoNewKeywordSwal;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};
var deprecatedParams = ['useRejections', 'expectRejections'];
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */

var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }

    if (params.toast && toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }

    if (isDeprecatedParameter(param)) {
      warnOnce("The parameter \"".concat(param, "\" is deprecated and will be removed in the next major release."));
    }
  }
};

var deprecationWarning = "\"setDefaults\" & \"resetDefaults\" methods are deprecated in favor of \"mixin\" method and will be removed in the next major release. For new projects, use \"mixin\". For past projects already using \"setDefaults\", support will be provided through an additional package.";
var defaults = {};
function withGlobalDefaults(ParentSwal) {
  var SwalWithGlobalDefaults =
  /*#__PURE__*/
  function (_ParentSwal) {
    _inherits(SwalWithGlobalDefaults, _ParentSwal);

    function SwalWithGlobalDefaults() {
      _classCallCheck(this, SwalWithGlobalDefaults);

      return _possibleConstructorReturn(this, _getPrototypeOf(SwalWithGlobalDefaults).apply(this, arguments));
    }

    _createClass(SwalWithGlobalDefaults, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(SwalWithGlobalDefaults.prototype), "_main", this).call(this, _extends({}, defaults, params));
      }
    }], [{
      key: "setDefaults",
      value: function setDefaults(params) {
        warnOnce(deprecationWarning);

        if (!params || _typeof(params) !== 'object') {
          throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');
        }

        showWarningsForParams(params); // assign valid params from `params` to `defaults`

        Object.keys(params).forEach(function (param) {
          if (ParentSwal.isValidParameter(param)) {
            defaults[param] = params[param];
          }
        });
      }
    }, {
      key: "resetDefaults",
      value: function resetDefaults() {
        warnOnce(deprecationWarning);
        defaults = {};
      }
    }]);

    return SwalWithGlobalDefaults;
  }(ParentSwal); // Set default params if `window._swalDefaults` is an object


  if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
    SwalWithGlobalDefaults.setDefaults(window._swalDefaults);
  }

  return SwalWithGlobalDefaults;
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */

function mixin(mixinParams) {
  return withNoNewKeyword(
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this));
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var swal = this;
  currentSteps = steps;

  var resetQueue = function resetQueue() {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        swal(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetQueue();
        resolve({
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal('');
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * If `timer` parameter is set, returns number os milliseconds of timer remained.
 * Otherwise, returns null.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	adaptInputValidator: adaptInputValidator,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getButtonsWrapper: getButtonsWrapper,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft
});

// https://github.com/Riim/symbol-polyfill/blob/master/index.js

/* istanbul ignore next */
var _Symbol = typeof Symbol === 'function' ? Symbol : function () {
  var idCounter = 0;

  function _Symbol(key) {
    return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + ++idCounter + '__';
  }

  _Symbol.iterator = _Symbol('Symbol.iterator');
  return _Symbol;
}();

// WeakMap polyfill, needed for Android 4.4
// Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
// http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html
/* istanbul ignore next */

var WeakMap$1 = typeof WeakMap === 'function' ? WeakMap : function (s, dP, hOP) {
  function WeakMap() {
    dP(this, s, {
      value: _Symbol('WeakMap')
    });
  }

  WeakMap.prototype = {
    'delete': function del(o) {
      delete o[this[s]];
    },
    get: function get(o) {
      return o[this[s]];
    },
    has: function has(o) {
      return hOP.call(o, this[s]);
    },
    set: function set(o, v) {
      dP(o, this[s], {
        configurable: true,
        value: v
      });
    }
  };
  return WeakMap;
}(_Symbol('WeakMap'), Object.defineProperty, {}.hasOwnProperty);

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap$1(),
  innerParams: new WeakMap$1(),
  domCache: new WeakMap$1()
};

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput(inputType) {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  inputType = inputType || innerParams.input;

  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(domCache.content, swalClasses[inputType]);

    case 'checkbox':
      return domCache.popup.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return domCache.popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || domCache.popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return domCache.popup.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(domCache.content, swalClasses.input);
  }
}

function enableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}
function disableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
  domCache.cancelButton.disabled = true;
}
function enableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
}
function disableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
}
function enableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}
function disableInput() {
  var input = this.getInput();

  if (!input) {
    return false;
  }

  if (input && input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}

function showValidationError(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationError.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationError.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationError.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationError);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses.validationerror);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation error

function resetValidationError() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationError) {
    hide(domCache.validationError);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

function getProgressSteps$1() {
  var innerParams = privateProps.innerParams.get(this);
  return innerParams.progressSteps;
}
function setProgressSteps(progressSteps) {
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, {
    progressSteps: progressSteps
  });

  privateProps.innerParams.set(this, updatedParams);
  renderProgressSteps(updatedParams);
}
function showProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  show(domCache.progressSteps);
}
function hideProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  hide(domCache.progressSteps);
}

var Timer = function Timer(callback, delay) {
  _classCallCheck(this, Timer);

  var id, started, running;
  var remaining = delay;

  this.start = function () {
    running = true;
    started = new Date();
    id = setTimeout(callback, remaining);
  };

  this.stop = function () {
    running = false;
    clearTimeout(id);
    remaining -= new Date() - started;
  };

  this.getTimerLeft = function () {
    if (running) {
      this.stop();
      this.start();
    }

    return remaining;
  };

  this.start();
};

var defaultInputValidators = {
  email: function email(string, extraParams) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid email address');
  },
  url: function url(string, extraParams) {
    // taken from https://stackoverflow.com/a/3809435/1331425
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid URL');
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */

function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = params.expectRejections ? defaultInputValidators[key] : Swal.adaptInputValidator(defaultInputValidators[key]);
      }
    });
  } // Determine if the custom target element is valid


  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var popup;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target; // If the model target has changed, refresh the popup

  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  } // Set popup width


  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  } // Set popup padding


  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  } // Set popup background


  if (params.background) {
    popup.style.background = params.background;
  }

  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var closeButton = getCloseButton();
  var footer = getFooter(); // Title

  renderTitle(params); // Content

  renderContent(params); // Backdrop

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  } // Position


  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  } // Grow


  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  } // Animation


  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  } // Close button


  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom Class


  if (params.customClass) {
    addClass(popup, params.customClass);
  } // Progress steps


  renderProgressSteps(params); // Icon

  renderIcon(params); // Image

  renderImage(params); // Actions (buttons)

  renderActions(params); // Footer

  parseHtmlToContainer(params.footer, footer); // CSS animation

  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  } // showLoaderOnConfirm && preConfirm


  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */

var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }

  show(popup); // scrolling is 'hidden' until animation is done, after that 'auto'

  container.style.overflowY = 'hidden';

  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    fixScrollbar();
    iOSfix();
    setAriaHidden();
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var innerParams = _extends({}, defaultParams, userParams);

  setParameters(innerParams);
  Object.freeze(innerParams);
  privateProps.innerParams.set(this, innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationError: getValidationError(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);
  var constructor = this.constructor;
  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose); // TODO: make closePopup an *instance* method

      if (innerParams.useRejections) {
        resolve(value);
      } else {
        resolve({
          value: value
        });
      }
    };

    var dismissWith = function dismissWith(dismiss) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);

      if (innerParams.useRejections) {
        reject(dismiss);
      } else {
        resolve({
          dismiss: dismiss
        });
      }
    };

    var errorWith = function errorWith(error$$1) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      reject(error$$1);
    }; // Close on timer


    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    } // Get the value of the popup input


    var getInputValue = function getInputValue() {
      var input = _this.getInput();

      if (!input) {
        return null;
      }

      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;

        case 'radio':
          return input.checked ? input.value : null;

        case 'file':
          return input.files.length ? input.files[0] : null;

        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    }; // input autofocus


    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();

        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationError();

        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.extraParams);
        });

        if (innerParams.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationError) {
            _this.hideLoading();

            if (validationError) {
              _this.showValidationError(validationError);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(domCache.validationError) || preConfirmValue === false) {
              _this.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    }; // Mouse interactions


    var onButtonEvent = function onButtonEvent(e) {
      var target = e.target;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            _this.disableButtons();

            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();

                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.extraParams);
                });

                if (innerParams.expectRejections) {
                  validationPromise.then(function () {
                    _this.enableButtons();

                    _this.enableInput();

                    confirm(inputValue);
                  }, function (validationError) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationError) {
                      _this.showValidationError(validationError);
                    }
                  });
                } else {
                  validationPromise.then(function (validationError) {
                    _this.enableButtons();

                    _this.enableInput();

                    if (validationError) {
                      _this.showValidationError(validationError);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            } // Clicked 'cancel'

          } else if (targetedCancel && constructor.isVisible()) {
            _this.disableButtons();

            dismissWith(constructor.DismissReason.cancel);
          }

          break;

        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    } // Closing popup by close button


    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function () {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }

        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false; // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider

      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup

          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      }; // Ignore click events that had mousedown on the container but mouseup on the popup


      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }

        if (e.target !== domCache.container) {
          return;
        }

        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    } // Reverse buttons (Confirm on the right side)


    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    } // Focus handling


    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel); // search for visible elements and select the next possible match

      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment; // rollover to first item

        if (index === focusableElements.length) {
          index = 0; // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        return focusableElements[index].focus();
      } // no visible focusable elements, focus the popup


      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        } // TAB

      } else if (e.key === 'Tab') {
        var targetElement = e.target;
        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1;

        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault(); // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus(); // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } // ESC

      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();

    _this.hideLoading();

    _this.resetValidationError();

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    } // inputs


    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input;

    for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
      var inputClass = swalClasses[inputTypes[_i3]];
      var inputContainer = getChildByClass(domCache.content, inputClass);
      input = _this.getInput(inputTypes[_i3]); // set attributes

      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;

            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }

        for (var attr in innerParams.inputAttributes) {
          input.setAttribute(attr, innerParams.inputAttributes[attr]);
        }
      } // set class


      inputContainer.className = inputClass;

      if (innerParams.inputClass) {
        addClass(inputContainer, innerParams.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions;

    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        {
          input = getChildByClass(domCache.content, swalClasses.input);
          input.value = innerParams.inputValue;
          input.placeholder = innerParams.inputPlaceholder;
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'file':
        {
          input = getChildByClass(domCache.content, swalClasses.file);
          input.placeholder = innerParams.inputPlaceholder;
          input.type = innerParams.input;
          show(input);
          break;
        }

      case 'range':
        {
          var range = getChildByClass(domCache.content, swalClasses.range);
          var rangeInput = range.querySelector('input');
          var rangeOutput = range.querySelector('output');
          rangeInput.value = innerParams.inputValue;
          rangeInput.type = innerParams.input;
          rangeOutput.value = innerParams.inputValue;
          show(range);
          break;
        }

      case 'select':
        {
          var select = getChildByClass(domCache.content, swalClasses.select);
          select.innerHTML = '';

          if (innerParams.inputPlaceholder) {
            var placeholder = document.createElement('option');
            placeholder.innerHTML = innerParams.inputPlaceholder;
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var optionValue = inputOption[0];
              var optionLabel = inputOption[1];
              var option = document.createElement('option');
              option.value = optionValue;
              option.innerHTML = optionLabel;

              if (innerParams.inputValue.toString() === optionValue.toString()) {
                option.selected = true;
              }

              select.appendChild(option);
            });
            show(select);
            select.focus();
          };

          break;
        }

      case 'radio':
        {
          var radio = getChildByClass(domCache.content, swalClasses.radio);
          radio.innerHTML = '';

          populateInputOptions = function populateInputOptions(inputOptions) {
            inputOptions.forEach(function (inputOption) {
              var radioValue = inputOption[0];
              var radioLabel = inputOption[1];
              var radioInput = document.createElement('input');
              var radioLabelElement = document.createElement('label');
              radioInput.type = 'radio';
              radioInput.name = swalClasses.radio;
              radioInput.value = radioValue;

              if (innerParams.inputValue.toString() === radioValue.toString()) {
                radioInput.checked = true;
              }

              var label = document.createElement('span');
              label.innerHTML = radioLabel;
              label.className = swalClasses.label;
              radioLabelElement.appendChild(radioInput);
              radioLabelElement.appendChild(label);
              radio.appendChild(radioLabelElement);
            });
            show(radio);
            var radios = radio.querySelectorAll('input');

            if (radios.length) {
              radios[0].focus();
            }
          };

          break;
        }

      case 'checkbox':
        {
          var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);

          var checkboxInput = _this.getInput('checkbox');

          checkboxInput.type = 'checkbox';
          checkboxInput.value = 1;
          checkboxInput.id = swalClasses.checkbox;
          checkboxInput.checked = Boolean(innerParams.inputValue);
          var label = checkbox.querySelector('span');
          label.innerHTML = innerParams.inputPlaceholder;
          show(checkbox);
          break;
        }

      case 'textarea':
        {
          var textarea = getChildByClass(domCache.content, swalClasses.textarea);
          textarea.value = innerParams.inputValue;
          textarea.placeholder = innerParams.inputPlaceholder;
          show(textarea);
          break;
        }

      case null:
        {
          break;
        }

      default:
        error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(innerParams.input, "\""));
        break;
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      var processInputOptions = function processInputOptions(inputOptions) {
        return populateInputOptions(formatInputOptions(inputOptions));
      };

      if (isThenable(innerParams.inputOptions)) {
        constructor.showLoading();
        innerParams.inputOptions.then(function (inputOptions) {
          _this.hideLoading();

          processInputOptions(inputOptions);
        });
      } else if (_typeof(innerParams.inputOptions) === 'object') {
        processInputOptions(innerParams.inputOptions);
      } else {
        error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(innerParams.inputOptions)));
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isThenable(innerParams.inputValue)) {
      constructor.showLoading();
      hide(input);
      innerParams.inputValue.then(function (inputValue) {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        show(input);
        input.focus();

        _this.hideLoading();
      }).catch(function (err) {
        error('Error in inputValue promise: ' + err);
        input.value = '';
        show(input);
        input.focus();

        _this.hideLoading();
      });
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement) {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    } // fix scroll


    domCache.container.scrollTop = 0;
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationError: showValidationError,
	resetValidationError: resetValidationError,
	getProgressSteps: getProgressSteps$1,
	setProgressSteps: setProgressSteps,
	showProgressSteps: showProgressSteps,
	hideProgressSteps: hideProgressSteps,
	_main: _main
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    error('At least 1 argument is expected!');
    return false;
  }

  currentInstance = this;
  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled, onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled, onRejected);
};

SweetAlert.prototype.catch = function (onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.catch(onRejected);
};

SweetAlert.prototype.finally = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise.finally(onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;

SweetAlert.noop = function () {};

SweetAlert.version = version;

var Swal = withNoNewKeyword(withGlobalDefaults(SweetAlert));
Swal.default = Swal;

return Swal;

})));
if (typeof window !== 'undefined' && window.Sweetalert2){  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show {\n" +
"  0% {\n" +
"    -webkit-transform: scale(0.7);\n" +
"            transform: scale(0.7); }\n" +
"  45% {\n" +
"    -webkit-transform: scale(1.05);\n" +
"            transform: scale(1.05); }\n" +
"  80% {\n" +
"    -webkit-transform: scale(0.95);\n" +
"            transform: scale(0.95); }\n" +
"  100% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1); } }\n" +
"\n" +
"@keyframes swal2-show {\n" +
"  0% {\n" +
"    -webkit-transform: scale(0.7);\n" +
"            transform: scale(0.7); }\n" +
"  45% {\n" +
"    -webkit-transform: scale(1.05);\n" +
"            transform: scale(1.05); }\n" +
"  80% {\n" +
"    -webkit-transform: scale(0.95);\n" +
"            transform: scale(0.95); }\n" +
"  100% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1); } }\n" +
"\n" +
"@-webkit-keyframes swal2-hide {\n" +
"  0% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; }\n" +
"  100% {\n" +
"    -webkit-transform: scale(0.5);\n" +
"            transform: scale(0.5);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@keyframes swal2-hide {\n" +
"  0% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; }\n" +
"  100% {\n" +
"    -webkit-transform: scale(0.5);\n" +
"            transform: scale(0.5);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-success-line-tip {\n" +
"  0% {\n" +
"    top: 1.1875em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: 1.0625em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: 2.1875em;\n" +
"    left: -.375em;\n" +
"    width: 3.125em; }\n" +
"  84% {\n" +
"    top: 3em;\n" +
"    left: 1.3125em;\n" +
"    width: 1.0625em; }\n" +
"  100% {\n" +
"    top: 2.8125em;\n" +
"    left: .875em;\n" +
"    width: 1.5625em; } }\n" +
"\n" +
"@keyframes swal2-animate-success-line-tip {\n" +
"  0% {\n" +
"    top: 1.1875em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: 1.0625em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: 2.1875em;\n" +
"    left: -.375em;\n" +
"    width: 3.125em; }\n" +
"  84% {\n" +
"    top: 3em;\n" +
"    left: 1.3125em;\n" +
"    width: 1.0625em; }\n" +
"  100% {\n" +
"    top: 2.8125em;\n" +
"    left: .875em;\n" +
"    width: 1.5625em; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-success-line-long {\n" +
"  0% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: 2.1875em;\n" +
"    right: 0;\n" +
"    width: 3.4375em; }\n" +
"  100% {\n" +
"    top: 2.375em;\n" +
"    right: .5em;\n" +
"    width: 2.9375em; } }\n" +
"\n" +
"@keyframes swal2-animate-success-line-long {\n" +
"  0% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: 2.1875em;\n" +
"    right: 0;\n" +
"    width: 3.4375em; }\n" +
"  100% {\n" +
"    top: 2.375em;\n" +
"    right: .5em;\n" +
"    width: 2.9375em; } }\n" +
"\n" +
"@-webkit-keyframes swal2-rotate-success-circular-line {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  5% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  12% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); } }\n" +
"\n" +
"@keyframes swal2-rotate-success-circular-line {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  5% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  12% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-error-x-mark {\n" +
"  0% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  50% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  80% {\n" +
"    margin-top: -.375em;\n" +
"    -webkit-transform: scale(1.15);\n" +
"            transform: scale(1.15); }\n" +
"  100% {\n" +
"    margin-top: 0;\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes swal2-animate-error-x-mark {\n" +
"  0% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  50% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  80% {\n" +
"    margin-top: -.375em;\n" +
"    -webkit-transform: scale(1.15);\n" +
"            transform: scale(1.15); }\n" +
"  100% {\n" +
"    margin-top: 0;\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-error-icon {\n" +
"  0% {\n" +
"    -webkit-transform: rotateX(100deg);\n" +
"            transform: rotateX(100deg);\n" +
"    opacity: 0; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateX(0deg);\n" +
"            transform: rotateX(0deg);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes swal2-animate-error-icon {\n" +
"  0% {\n" +
"    -webkit-transform: rotateX(100deg);\n" +
"            transform: rotateX(100deg);\n" +
"    opacity: 0; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateX(0deg);\n" +
"            transform: rotateX(0deg);\n" +
"    opacity: 1; } }\n" +
"\n" +
"body.swal2-toast-shown .swal2-container {\n" +
"  position: fixed;\n" +
"  background-color: transparent; }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-shown {\n" +
"    background-color: transparent; }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-top {\n" +
"    top: 0;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-top-end, body.swal2-toast-shown .swal2-container.swal2-top-right {\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    bottom: auto;\n" +
"    left: auto; }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-top-start, body.swal2-toast-shown .swal2-container.swal2-top-left {\n" +
"    top: 0;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 0; }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-center-start, body.swal2-toast-shown .swal2-container.swal2-center-left {\n" +
"    top: 50%;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-center {\n" +
"    top: 50%;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translate(-50%, -50%);\n" +
"            transform: translate(-50%, -50%); }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-center-end, body.swal2-toast-shown .swal2-container.swal2-center-right {\n" +
"    top: 50%;\n" +
"    right: 0;\n" +
"    bottom: auto;\n" +
"    left: auto;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-bottom-start, body.swal2-toast-shown .swal2-container.swal2-bottom-left {\n" +
"    top: auto;\n" +
"    right: auto;\n" +
"    bottom: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-bottom {\n" +
"    top: auto;\n" +
"    right: auto;\n" +
"    bottom: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-toast-shown .swal2-container.swal2-bottom-end, body.swal2-toast-shown .swal2-container.swal2-bottom-right {\n" +
"    top: auto;\n" +
"    right: 0;\n" +
"    bottom: 0;\n" +
"    left: auto; }\n" +
"\n" +
"body.swal2-toast-column .swal2-toast {\n" +
"  flex-direction: column;\n" +
"  align-items: stretch; }\n" +
"  body.swal2-toast-column .swal2-toast .swal2-actions {\n" +
"    flex: 1;\n" +
"    align-self: stretch;\n" +
"    height: 2.2em;\n" +
"    margin-top: .3125em; }\n" +
"  body.swal2-toast-column .swal2-toast .swal2-loading {\n" +
"    justify-content: center; }\n" +
"  body.swal2-toast-column .swal2-toast .swal2-input {\n" +
"    height: 2em;\n" +
"    margin: .3125em auto;\n" +
"    font-size: 1em; }\n" +
"  body.swal2-toast-column .swal2-toast .swal2-validationerror {\n" +
"    font-size: 1em; }\n" +
"\n" +
".swal2-popup.swal2-toast {\n" +
"  flex-direction: row;\n" +
"  align-items: center;\n" +
"  width: auto;\n" +
"  padding: 0.625em;\n" +
"  box-shadow: 0 0 0.625em #d9d9d9;\n" +
"  overflow-y: hidden; }\n" +
"  .swal2-popup.swal2-toast .swal2-header {\n" +
"    flex-direction: row; }\n" +
"  .swal2-popup.swal2-toast .swal2-title {\n" +
"    flex-grow: 1;\n" +
"    justify-content: flex-start;\n" +
"    margin: 0 .6em;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup.swal2-toast .swal2-footer {\n" +
"    margin: 0.5em 0 0;\n" +
"    padding: 0.5em 0 0;\n" +
"    font-size: 0.8em; }\n" +
"  .swal2-popup.swal2-toast .swal2-close {\n" +
"    position: initial;\n" +
"    width: 0.8em;\n" +
"    height: 0.8em;\n" +
"    line-height: 0.8; }\n" +
"  .swal2-popup.swal2-toast .swal2-content {\n" +
"    justify-content: flex-start;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup.swal2-toast .swal2-icon {\n" +
"    width: 2em;\n" +
"    min-width: 2em;\n" +
"    height: 2em;\n" +
"    margin: 0; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon-text {\n" +
"      font-size: 2em;\n" +
"      font-weight: bold;\n" +
"      line-height: 1em; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n" +
"      width: 2em;\n" +
"      height: 2em; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
"      top: .875em;\n" +
"      width: 1.375em; }\n" +
"      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
"        left: .3125em; }\n" +
"      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
"        right: .3125em; }\n" +
"  .swal2-popup.swal2-toast .swal2-actions {\n" +
"    height: auto;\n" +
"    margin: 0 .3125em; }\n" +
"  .swal2-popup.swal2-toast .swal2-styled {\n" +
"    margin: 0 .3125em;\n" +
"    padding: .3125em .625em;\n" +
"    font-size: 1em; }\n" +
"    .swal2-popup.swal2-toast .swal2-styled:focus {\n" +
"      box-shadow: 0 0 0 0.0625em #fff, 0 0 0 0.125em rgba(50, 100, 150, 0.4); }\n" +
"  .swal2-popup.swal2-toast .swal2-success {\n" +
"    border-color: #a5dc86; }\n" +
"    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n" +
"      position: absolute;\n" +
"      width: 2em;\n" +
"      height: 2.8125em;\n" +
"      -webkit-transform: rotate(45deg);\n" +
"              transform: rotate(45deg);\n" +
"      border-radius: 50%; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
"        top: -.25em;\n" +
"        left: -.9375em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 2em 2em;\n" +
"                transform-origin: 2em 2em;\n" +
"        border-radius: 4em 0 0 4em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
"        top: -.25em;\n" +
"        left: .9375em;\n" +
"        -webkit-transform-origin: 0 2em;\n" +
"                transform-origin: 0 2em;\n" +
"        border-radius: 0 4em 4em 0; }\n" +
"    .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n" +
"      width: 2em;\n" +
"      height: 2em; }\n" +
"    .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n" +
"      top: 0;\n" +
"      left: .4375em;\n" +
"      width: .4375em;\n" +
"      height: 2.6875em; }\n" +
"    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n" +
"      height: .3125em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
"        top: 1.125em;\n" +
"        left: .1875em;\n" +
"        width: .75em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
"        top: .9375em;\n" +
"        right: .1875em;\n" +
"        width: 1.375em; }\n" +
"  .swal2-popup.swal2-toast.swal2-show {\n" +
"    -webkit-animation: showSweetToast .5s;\n" +
"            animation: showSweetToast .5s; }\n" +
"  .swal2-popup.swal2-toast.swal2-hide {\n" +
"    -webkit-animation: hideSweetToast .2s forwards;\n" +
"            animation: hideSweetToast .2s forwards; }\n" +
"  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip {\n" +
"    -webkit-animation: animate-toast-success-tip .75s;\n" +
"            animation: animate-toast-success-tip .75s; }\n" +
"  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long {\n" +
"    -webkit-animation: animate-toast-success-long .75s;\n" +
"            animation: animate-toast-success-long .75s; }\n" +
"\n" +
"@-webkit-keyframes showSweetToast {\n" +
"  0% {\n" +
"    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
"            transform: translateY(-0.625em) rotateZ(2deg);\n" +
"    opacity: 0; }\n" +
"  33% {\n" +
"    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
"            transform: translateY(0) rotateZ(-2deg);\n" +
"    opacity: .5; }\n" +
"  66% {\n" +
"    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
"            transform: translateY(0.3125em) rotateZ(2deg);\n" +
"    opacity: .7; }\n" +
"  100% {\n" +
"    -webkit-transform: translateY(0) rotateZ(0);\n" +
"            transform: translateY(0) rotateZ(0);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes showSweetToast {\n" +
"  0% {\n" +
"    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
"            transform: translateY(-0.625em) rotateZ(2deg);\n" +
"    opacity: 0; }\n" +
"  33% {\n" +
"    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
"            transform: translateY(0) rotateZ(-2deg);\n" +
"    opacity: .5; }\n" +
"  66% {\n" +
"    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
"            transform: translateY(0.3125em) rotateZ(2deg);\n" +
"    opacity: .7; }\n" +
"  100% {\n" +
"    -webkit-transform: translateY(0) rotateZ(0);\n" +
"            transform: translateY(0) rotateZ(0);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@-webkit-keyframes hideSweetToast {\n" +
"  0% {\n" +
"    opacity: 1; }\n" +
"  33% {\n" +
"    opacity: .5; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateZ(1deg);\n" +
"            transform: rotateZ(1deg);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@keyframes hideSweetToast {\n" +
"  0% {\n" +
"    opacity: 1; }\n" +
"  33% {\n" +
"    opacity: .5; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateZ(1deg);\n" +
"            transform: rotateZ(1deg);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@-webkit-keyframes animate-toast-success-tip {\n" +
"  0% {\n" +
"    top: .5625em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: .125em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: .625em;\n" +
"    left: -.25em;\n" +
"    width: 1.625em; }\n" +
"  84% {\n" +
"    top: 1.0625em;\n" +
"    left: .75em;\n" +
"    width: .5em; }\n" +
"  100% {\n" +
"    top: 1.125em;\n" +
"    left: .1875em;\n" +
"    width: .75em; } }\n" +
"\n" +
"@keyframes animate-toast-success-tip {\n" +
"  0% {\n" +
"    top: .5625em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: .125em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: .625em;\n" +
"    left: -.25em;\n" +
"    width: 1.625em; }\n" +
"  84% {\n" +
"    top: 1.0625em;\n" +
"    left: .75em;\n" +
"    width: .5em; }\n" +
"  100% {\n" +
"    top: 1.125em;\n" +
"    left: .1875em;\n" +
"    width: .75em; } }\n" +
"\n" +
"@-webkit-keyframes animate-toast-success-long {\n" +
"  0% {\n" +
"    top: 1.625em;\n" +
"    right: 1.375em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 1.25em;\n" +
"    right: .9375em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: .9375em;\n" +
"    right: 0;\n" +
"    width: 1.125em; }\n" +
"  100% {\n" +
"    top: .9375em;\n" +
"    right: .1875em;\n" +
"    width: 1.375em; } }\n" +
"\n" +
"@keyframes animate-toast-success-long {\n" +
"  0% {\n" +
"    top: 1.625em;\n" +
"    right: 1.375em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 1.25em;\n" +
"    right: .9375em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: .9375em;\n" +
"    right: 0;\n" +
"    width: 1.125em; }\n" +
"  100% {\n" +
"    top: .9375em;\n" +
"    right: .1875em;\n" +
"    width: 1.375em; } }\n" +
"\n" +
"body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n" +
"  overflow-y: hidden; }\n" +
"\n" +
"body.swal2-height-auto {\n" +
"  height: auto !important; }\n" +
"\n" +
"body.swal2-no-backdrop .swal2-shown {\n" +
"  top: auto;\n" +
"  right: auto;\n" +
"  bottom: auto;\n" +
"  left: auto;\n" +
"  background-color: transparent; }\n" +
"  body.swal2-no-backdrop .swal2-shown > .swal2-modal {\n" +
"    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top {\n" +
"    top: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n" +
"    top: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n" +
"    top: 0;\n" +
"    right: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center {\n" +
"    top: 50%;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translate(-50%, -50%);\n" +
"            transform: translate(-50%, -50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n" +
"    top: 50%;\n" +
"    left: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n" +
"    top: 50%;\n" +
"    right: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom {\n" +
"    bottom: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n" +
"    bottom: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n" +
"    right: 0;\n" +
"    bottom: 0; }\n" +
"\n" +
".swal2-container {\n" +
"  display: flex;\n" +
"  position: fixed;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  flex-direction: row;\n" +
"  align-items: center;\n" +
"  justify-content: center;\n" +
"  padding: 10px;\n" +
"  background-color: transparent;\n" +
"  z-index: 1060;\n" +
"  overflow-x: hidden;\n" +
"  -webkit-overflow-scrolling: touch; }\n" +
"  .swal2-container.swal2-top {\n" +
"    align-items: flex-start; }\n" +
"  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n" +
"    align-items: flex-start;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n" +
"    align-items: flex-start;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-center {\n" +
"    align-items: center; }\n" +
"  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n" +
"    align-items: center;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n" +
"    align-items: center;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-bottom {\n" +
"    align-items: flex-end; }\n" +
"  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n" +
"    align-items: flex-end;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n" +
"    align-items: flex-end;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n" +
"    display: flex !important;\n" +
"    flex: 1;\n" +
"    align-self: stretch;\n" +
"    justify-content: center; }\n" +
"  .swal2-container.swal2-grow-row > .swal2-modal {\n" +
"    display: flex !important;\n" +
"    flex: 1;\n" +
"    align-content: center;\n" +
"    justify-content: center; }\n" +
"  .swal2-container.swal2-grow-column {\n" +
"    flex: 1;\n" +
"    flex-direction: column; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n" +
"      align-items: center; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n" +
"      align-items: flex-start; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n" +
"      align-items: flex-end; }\n" +
"    .swal2-container.swal2-grow-column > .swal2-modal {\n" +
"      display: flex !important;\n" +
"      flex: 1;\n" +
"      align-content: center;\n" +
"      justify-content: center; }\n" +
"  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen) > .swal2-modal {\n" +
"    margin: auto; }\n" +
"  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
"    .swal2-container .swal2-modal {\n" +
"      margin: 0 !important; } }\n" +
"  .swal2-container.swal2-fade {\n" +
"    transition: background-color .1s; }\n" +
"  .swal2-container.swal2-shown {\n" +
"    background-color: rgba(0, 0, 0, 0.4); }\n" +
"\n" +
".swal2-popup {\n" +
"  display: none;\n" +
"  position: relative;\n" +
"  flex-direction: column;\n" +
"  justify-content: center;\n" +
"  width: 32em;\n" +
"  max-width: 100%;\n" +
"  padding: 1.25em;\n" +
"  border-radius: 0.3125em;\n" +
"  background: #fff;\n" +
"  font-family: inherit;\n" +
"  font-size: 1rem;\n" +
"  box-sizing: border-box; }\n" +
"  .swal2-popup:focus {\n" +
"    outline: none; }\n" +
"  .swal2-popup.swal2-loading {\n" +
"    overflow-y: hidden; }\n" +
"  .swal2-popup .swal2-header {\n" +
"    display: flex;\n" +
"    flex-direction: column;\n" +
"    align-items: center; }\n" +
"  .swal2-popup .swal2-title {\n" +
"    display: block;\n" +
"    position: relative;\n" +
"    max-width: 100%;\n" +
"    margin: 0 0 0.4em;\n" +
"    padding: 0;\n" +
"    color: #595959;\n" +
"    font-size: 1.875em;\n" +
"    font-weight: 600;\n" +
"    text-align: center;\n" +
"    text-transform: none;\n" +
"    word-wrap: break-word; }\n" +
"  .swal2-popup .swal2-actions {\n" +
"    flex-wrap: wrap;\n" +
"    align-items: center;\n" +
"    justify-content: center;\n" +
"    margin: 1.25em auto 0;\n" +
"    z-index: 1; }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n" +
"      opacity: .4; }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n" +
"      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)); }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n" +
"      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n" +
"    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n" +
"      width: 2.5em;\n" +
"      height: 2.5em;\n" +
"      margin: .46875em;\n" +
"      padding: 0;\n" +
"      border: .25em solid transparent;\n" +
"      border-radius: 100%;\n" +
"      border-color: transparent;\n" +
"      background-color: transparent !important;\n" +
"      color: transparent;\n" +
"      cursor: default;\n" +
"      box-sizing: border-box;\n" +
"      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"              animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"      -webkit-user-select: none;\n" +
"         -moz-user-select: none;\n" +
"          -ms-user-select: none;\n" +
"              user-select: none; }\n" +
"    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n" +
"      margin-right: 30px;\n" +
"      margin-left: 30px; }\n" +
"    .swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n" +
"      display: inline-block;\n" +
"      width: 15px;\n" +
"      height: 15px;\n" +
"      margin-left: 5px;\n" +
"      border: 3px solid #999999;\n" +
"      border-radius: 50%;\n" +
"      border-right-color: transparent;\n" +
"      box-shadow: 1px 1px 1px #fff;\n" +
"      content: '';\n" +
"      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"              animation: swal2-rotate-loading 1.5s linear 0s infinite normal; }\n" +
"  .swal2-popup .swal2-styled {\n" +
"    margin: .3125em;\n" +
"    padding: .625em 2em;\n" +
"    font-weight: 500;\n" +
"    box-shadow: none; }\n" +
"    .swal2-popup .swal2-styled:not([disabled]) {\n" +
"      cursor: pointer; }\n" +
"    .swal2-popup .swal2-styled.swal2-confirm {\n" +
"      border: 0;\n" +
"      border-radius: 0.25em;\n" +
"      background: initial;\n" +
"      background-color: #3085d6;\n" +
"      color: #fff;\n" +
"      font-size: 1.0625em; }\n" +
"    .swal2-popup .swal2-styled.swal2-cancel {\n" +
"      border: 0;\n" +
"      border-radius: 0.25em;\n" +
"      background: initial;\n" +
"      background-color: #aaa;\n" +
"      color: #fff;\n" +
"      font-size: 1.0625em; }\n" +
"    .swal2-popup .swal2-styled:focus {\n" +
"      outline: none;\n" +
"      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n" +
"    .swal2-popup .swal2-styled::-moz-focus-inner {\n" +
"      border: 0; }\n" +
"  .swal2-popup .swal2-footer {\n" +
"    justify-content: center;\n" +
"    margin: 1.25em 0 0;\n" +
"    padding: 1em 0 0;\n" +
"    border-top: 1px solid #eee;\n" +
"    color: #545454;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup .swal2-image {\n" +
"    max-width: 100%;\n" +
"    margin: 1.25em auto; }\n" +
"  .swal2-popup .swal2-close {\n" +
"    position: absolute;\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    justify-content: center;\n" +
"    width: 1.2em;\n" +
"    height: 1.2em;\n" +
"    padding: 0;\n" +
"    transition: color 0.1s ease-out;\n" +
"    border: none;\n" +
"    border-radius: 0;\n" +
"    background: transparent;\n" +
"    color: #cccccc;\n" +
"    font-family: serif;\n" +
"    font-size: 2.5em;\n" +
"    line-height: 1.2;\n" +
"    cursor: pointer;\n" +
"    overflow: hidden; }\n" +
"    .swal2-popup .swal2-close:hover {\n" +
"      -webkit-transform: none;\n" +
"              transform: none;\n" +
"      color: #f27474; }\n" +
"  .swal2-popup > .swal2-input,\n" +
"  .swal2-popup > .swal2-file,\n" +
"  .swal2-popup > .swal2-textarea,\n" +
"  .swal2-popup > .swal2-select,\n" +
"  .swal2-popup > .swal2-radio,\n" +
"  .swal2-popup > .swal2-checkbox {\n" +
"    display: none; }\n" +
"  .swal2-popup .swal2-content {\n" +
"    justify-content: center;\n" +
"    margin: 0;\n" +
"    padding: 0;\n" +
"    color: #545454;\n" +
"    font-size: 1.125em;\n" +
"    font-weight: 300;\n" +
"    line-height: normal;\n" +
"    z-index: 1;\n" +
"    word-wrap: break-word; }\n" +
"  .swal2-popup #swal2-content {\n" +
"    text-align: center; }\n" +
"  .swal2-popup .swal2-input,\n" +
"  .swal2-popup .swal2-file,\n" +
"  .swal2-popup .swal2-textarea,\n" +
"  .swal2-popup .swal2-select,\n" +
"  .swal2-popup .swal2-radio,\n" +
"  .swal2-popup .swal2-checkbox {\n" +
"    margin: 1em auto; }\n" +
"  .swal2-popup .swal2-input,\n" +
"  .swal2-popup .swal2-file,\n" +
"  .swal2-popup .swal2-textarea {\n" +
"    width: 100%;\n" +
"    transition: border-color .3s, box-shadow .3s;\n" +
"    border: 1px solid #d9d9d9;\n" +
"    border-radius: 0.1875em;\n" +
"    font-size: 1.125em;\n" +
"    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n" +
"    box-sizing: border-box; }\n" +
"    .swal2-popup .swal2-input.swal2-inputerror,\n" +
"    .swal2-popup .swal2-file.swal2-inputerror,\n" +
"    .swal2-popup .swal2-textarea.swal2-inputerror {\n" +
"      border-color: #f27474 !important;\n" +
"      box-shadow: 0 0 2px #f27474 !important; }\n" +
"    .swal2-popup .swal2-input:focus,\n" +
"    .swal2-popup .swal2-file:focus,\n" +
"    .swal2-popup .swal2-textarea:focus {\n" +
"      border: 1px solid #b4dbed;\n" +
"      outline: none;\n" +
"      box-shadow: 0 0 3px #c4e6f5; }\n" +
"    .swal2-popup .swal2-input::-webkit-input-placeholder,\n" +
"    .swal2-popup .swal2-file::-webkit-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input:-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-file:-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input::-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-file::-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input::placeholder,\n" +
"    .swal2-popup .swal2-file::placeholder,\n" +
"    .swal2-popup .swal2-textarea::placeholder {\n" +
"      color: #cccccc; }\n" +
"  .swal2-popup .swal2-range input {\n" +
"    width: 80%; }\n" +
"  .swal2-popup .swal2-range output {\n" +
"    width: 20%;\n" +
"    font-weight: 600;\n" +
"    text-align: center; }\n" +
"  .swal2-popup .swal2-range input,\n" +
"  .swal2-popup .swal2-range output {\n" +
"    height: 2.625em;\n" +
"    margin: 1em auto;\n" +
"    padding: 0;\n" +
"    font-size: 1.125em;\n" +
"    line-height: 2.625em; }\n" +
"  .swal2-popup .swal2-input {\n" +
"    height: 2.625em;\n" +
"    padding: 0 0.75em; }\n" +
"    .swal2-popup .swal2-input[type='number'] {\n" +
"      max-width: 10em; }\n" +
"  .swal2-popup .swal2-file {\n" +
"    font-size: 1.125em; }\n" +
"  .swal2-popup .swal2-textarea {\n" +
"    height: 6.75em;\n" +
"    padding: 0.75em; }\n" +
"  .swal2-popup .swal2-select {\n" +
"    min-width: 50%;\n" +
"    max-width: 100%;\n" +
"    padding: .375em .625em;\n" +
"    color: #545454;\n" +
"    font-size: 1.125em; }\n" +
"  .swal2-popup .swal2-radio,\n" +
"  .swal2-popup .swal2-checkbox {\n" +
"    align-items: center;\n" +
"    justify-content: center; }\n" +
"    .swal2-popup .swal2-radio label,\n" +
"    .swal2-popup .swal2-checkbox label {\n" +
"      margin: 0 .6em;\n" +
"      font-size: 1.125em; }\n" +
"    .swal2-popup .swal2-radio input,\n" +
"    .swal2-popup .swal2-checkbox input {\n" +
"      margin: 0 .4em; }\n" +
"  .swal2-popup .swal2-validationerror {\n" +
"    display: none;\n" +
"    align-items: center;\n" +
"    justify-content: center;\n" +
"    padding: 0.625em;\n" +
"    background: #f0f0f0;\n" +
"    color: #666666;\n" +
"    font-size: 1em;\n" +
"    font-weight: 300;\n" +
"    overflow: hidden; }\n" +
"    .swal2-popup .swal2-validationerror::before {\n" +
"      display: inline-block;\n" +
"      width: 1.5em;\n" +
"      min-width: 1.5em;\n" +
"      height: 1.5em;\n" +
"      margin: 0 .625em;\n" +
"      border-radius: 50%;\n" +
"      background-color: #f27474;\n" +
"      color: #fff;\n" +
"      font-weight: 600;\n" +
"      line-height: 1.5em;\n" +
"      text-align: center;\n" +
"      content: '!';\n" +
"      zoom: normal; }\n" +
"\n" +
"@supports (-ms-accelerator: true) {\n" +
"  .swal2-range input {\n" +
"    width: 100% !important; }\n" +
"  .swal2-range output {\n" +
"    display: none; } }\n" +
"\n" +
"@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
"  .swal2-range input {\n" +
"    width: 100% !important; }\n" +
"  .swal2-range output {\n" +
"    display: none; } }\n" +
"\n" +
"@-moz-document url-prefix() {\n" +
"  .swal2-close:focus {\n" +
"    outline: 2px solid rgba(50, 100, 150, 0.4); } }\n" +
"\n" +
".swal2-icon {\n" +
"  position: relative;\n" +
"  justify-content: center;\n" +
"  width: 5em;\n" +
"  height: 5em;\n" +
"  margin: 1.25em auto 1.875em;\n" +
"  border: .25em solid transparent;\n" +
"  border-radius: 50%;\n" +
"  line-height: 5em;\n" +
"  cursor: default;\n" +
"  box-sizing: content-box;\n" +
"  -webkit-user-select: none;\n" +
"     -moz-user-select: none;\n" +
"      -ms-user-select: none;\n" +
"          user-select: none;\n" +
"  zoom: normal; }\n" +
"  .swal2-icon-text {\n" +
"    font-size: 3.75em; }\n" +
"  .swal2-icon.swal2-error {\n" +
"    border-color: #f27474; }\n" +
"    .swal2-icon.swal2-error .swal2-x-mark {\n" +
"      position: relative;\n" +
"      flex-grow: 1; }\n" +
"    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
"      display: block;\n" +
"      position: absolute;\n" +
"      top: 2.3125em;\n" +
"      width: 2.9375em;\n" +
"      height: .3125em;\n" +
"      border-radius: .125em;\n" +
"      background-color: #f27474; }\n" +
"      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
"        left: 1.0625em;\n" +
"        -webkit-transform: rotate(45deg);\n" +
"                transform: rotate(45deg); }\n" +
"      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
"        right: 1em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg); }\n" +
"  .swal2-icon.swal2-warning {\n" +
"    border-color: #facea8;\n" +
"    color: #f8bb86; }\n" +
"  .swal2-icon.swal2-info {\n" +
"    border-color: #9de0f6;\n" +
"    color: #3fc3ee; }\n" +
"  .swal2-icon.swal2-question {\n" +
"    border-color: #c9dae1;\n" +
"    color: #87adbd; }\n" +
"  .swal2-icon.swal2-success {\n" +
"    border-color: #a5dc86; }\n" +
"    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n" +
"      position: absolute;\n" +
"      width: 3.75em;\n" +
"      height: 7.5em;\n" +
"      -webkit-transform: rotate(45deg);\n" +
"              transform: rotate(45deg);\n" +
"      border-radius: 50%; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
"        top: -.4375em;\n" +
"        left: -2.0635em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 3.75em 3.75em;\n" +
"                transform-origin: 3.75em 3.75em;\n" +
"        border-radius: 7.5em 0 0 7.5em; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
"        top: -.6875em;\n" +
"        left: 1.875em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 0 3.75em;\n" +
"                transform-origin: 0 3.75em;\n" +
"        border-radius: 0 7.5em 7.5em 0; }\n" +
"    .swal2-icon.swal2-success .swal2-success-ring {\n" +
"      position: absolute;\n" +
"      top: -.25em;\n" +
"      left: -.25em;\n" +
"      width: 100%;\n" +
"      height: 100%;\n" +
"      border: 0.25em solid rgba(165, 220, 134, 0.3);\n" +
"      border-radius: 50%;\n" +
"      z-index: 2;\n" +
"      box-sizing: content-box; }\n" +
"    .swal2-icon.swal2-success .swal2-success-fix {\n" +
"      position: absolute;\n" +
"      top: .5em;\n" +
"      left: 1.625em;\n" +
"      width: .4375em;\n" +
"      height: 5.625em;\n" +
"      -webkit-transform: rotate(-45deg);\n" +
"              transform: rotate(-45deg);\n" +
"      z-index: 1; }\n" +
"    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n" +
"      display: block;\n" +
"      position: absolute;\n" +
"      height: .3125em;\n" +
"      border-radius: .125em;\n" +
"      background-color: #a5dc86;\n" +
"      z-index: 2; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
"        top: 2.875em;\n" +
"        left: .875em;\n" +
"        width: 1.5625em;\n" +
"        -webkit-transform: rotate(45deg);\n" +
"                transform: rotate(45deg); }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
"        top: 2.375em;\n" +
"        right: .5em;\n" +
"        width: 2.9375em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg); }\n" +
"\n" +
".swal2-progresssteps {\n" +
"  align-items: center;\n" +
"  margin: 0 0 1.25em;\n" +
"  padding: 0;\n" +
"  font-weight: 600; }\n" +
"  .swal2-progresssteps li {\n" +
"    display: inline-block;\n" +
"    position: relative; }\n" +
"  .swal2-progresssteps .swal2-progresscircle {\n" +
"    width: 2em;\n" +
"    height: 2em;\n" +
"    border-radius: 2em;\n" +
"    background: #3085d6;\n" +
"    color: #fff;\n" +
"    line-height: 2em;\n" +
"    text-align: center;\n" +
"    z-index: 20; }\n" +
"    .swal2-progresssteps .swal2-progresscircle:first-child {\n" +
"      margin-left: 0; }\n" +
"    .swal2-progresssteps .swal2-progresscircle:last-child {\n" +
"      margin-right: 0; }\n" +
"    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n" +
"      background: #3085d6; }\n" +
"      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n" +
"        background: #add8e6; }\n" +
"      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n" +
"        background: #add8e6; }\n" +
"  .swal2-progresssteps .swal2-progressline {\n" +
"    width: 2.5em;\n" +
"    height: .4em;\n" +
"    margin: 0 -1px;\n" +
"    background: #3085d6;\n" +
"    z-index: 10; }\n" +
"\n" +
"[class^='swal2'] {\n" +
"  -webkit-tap-highlight-color: transparent; }\n" +
"\n" +
".swal2-show {\n" +
"  -webkit-animation: swal2-show 0.3s;\n" +
"          animation: swal2-show 0.3s; }\n" +
"  .swal2-show.swal2-noanimation {\n" +
"    -webkit-animation: none;\n" +
"            animation: none; }\n" +
"\n" +
".swal2-hide {\n" +
"  -webkit-animation: swal2-hide 0.15s forwards;\n" +
"          animation: swal2-hide 0.15s forwards; }\n" +
"  .swal2-hide.swal2-noanimation {\n" +
"    -webkit-animation: none;\n" +
"            animation: none; }\n" +
"\n" +
"[dir='rtl'] .swal2-close {\n" +
"  right: auto;\n" +
"  left: 0; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-line-tip {\n" +
"  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n" +
"          animation: swal2-animate-success-line-tip 0.75s; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-line-long {\n" +
"  -webkit-animation: swal2-animate-success-line-long 0.75s;\n" +
"          animation: swal2-animate-success-line-long 0.75s; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-circular-line-right {\n" +
"  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n" +
"          animation: swal2-rotate-success-circular-line 4.25s ease-in; }\n" +
"\n" +
".swal2-animate-error-icon {\n" +
"  -webkit-animation: swal2-animate-error-icon 0.5s;\n" +
"          animation: swal2-animate-error-icon 0.5s; }\n" +
"  .swal2-animate-error-icon .swal2-x-mark {\n" +
"    -webkit-animation: swal2-animate-error-x-mark 0.5s;\n" +
"            animation: swal2-animate-error-x-mark 0.5s; }\n" +
"\n" +
"@-webkit-keyframes swal2-rotate-loading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"            transform: rotate(0deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(360deg);\n" +
"            transform: rotate(360deg); } }\n" +
"\n" +
"@keyframes swal2-rotate-loading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"            transform: rotate(0deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(360deg);\n" +
"            transform: rotate(360deg); } }");
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2Zhc3Rwcmlvcml0eXF1ZXVlL0Zhc3RQcmlvcml0eVF1ZXVlLmpzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTs7Ozs7Ozs7QUFGQTtBQUNBLElBQU0sVUFBVSxRQUFRLG1CQUFSLENBQWhCOzs7QUFHQTtBQUNBLElBQU0sWUFBWSxFQUFsQjs7QUFFQTtBQUNBLFVBQVUsU0FBVixHQUFzQjtBQUNwQjtBQUNBO0FBQ0E7QUFDRSxNQUFJLGlCQUROO0FBRUUsU0FBTyxDQUNMO0FBQ0UsVUFBTSxTQURSO0FBRUUsZUFBVyxLQUZiO0FBR0UsY0FBVSwwQkFIWjtBQUlFLGlCQUFhO0FBSmYsR0FESyxFQU9MO0FBQ0UsVUFBTSxpQkFEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUsaUJBSFo7QUFJRSxpQkFDRTtBQUxKLEdBUEssRUFjTDtBQUNFLFVBQU0sa0JBRFI7QUFFRSxlQUFXLEtBRmI7QUFHRSxjQUFVLGtCQUhaO0FBSUUsaUJBQ0U7QUFMSixHQWRLLEVBcUJMO0FBQ0UsVUFBTSxxQkFEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUscUJBSFo7QUFJRSxpQkFBYTtBQUpmLEdBckJLLEVBMkJMO0FBQ0UsVUFBTSxrQkFEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUseUJBSFo7QUFJRSxpQkFBYTtBQUpmLEdBM0JLLEVBaUNMO0FBQ0UsVUFBTSxxQkFEUjtBQUVFLGVBQVcsS0FGYjtBQUdFLGNBQVUsYUFIWjtBQUlFLGlCQUFhO0FBSmYsR0FqQ0s7QUFGVCxDQUhvQjtBQThDcEI7QUFDQTtBQUNBO0FBQ0UsTUFBSSxrQkFETjtBQUVFLFNBQU8sQ0FDTDtBQUNFLFVBQU0sdUJBRFI7QUFFRSxlQUFXLEtBRmI7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QXhCLEVBQWlELEdBQWpELENBQVA7QUFDRCxDQUZEOzs7QUNqK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gSU1QT1JUIEhFQVAgTU9EVUxFIEZST00gTlBNXG5jb25zdCBNaW5IZWFwID0gcmVxdWlyZShcImZhc3Rwcmlvcml0eXF1ZXVlXCIpO1xuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XG5cbi8vIENyZWF0ZSBhbiBvYmplY3QgcmVwcmVzZW50aW5nIG91ciB0cmF2ZWwgYXBwIChOQU1FU1BBQ0UpXG5jb25zdCB0cmF2ZWxBcHAgPSB7fTtcblxuLy8gQVJSQVkgV0lUSCBBTEwgUkVMRVZBTlQgU1RBVFMgRk9SIEVBQ0ggUFVSUE9TRVxudHJhdmVsQXBwLnN0YXRBcnJheSA9IFtcbiAgLy8gVkFDQVRJT04gQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXZhY2F0aW9uXCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZW5zaXR5XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiUG9wdWxhdGlvbiBEZW5zaXR5IChsb3cpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwb3B1bGF0aW9uIGRlbnNpdHkgaXMgbWVhc3VyZWQgaW4gcGVyIGttwrIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGFwcGluZXNzX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGFwcGluZXNzIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFzZWQgb24gZmFjdG9ycyBzdWNoIGFzIEdEUCBwZXIgY2FwaXRhLCBzb2NpYWwgc3VwcG9ydCwgbGlmZSBleHBlY3RhbmN5LiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhhcHBpZXIgdGhlIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidG91cmlzdF9hcnJpdmFsc1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlRvdXJpc3QgQXJyaXZhbHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJSZXByZXNlbnRzIGZvcmVpZ24gY2l0aXplbnMgdGhhdCBzdGF5ZWQgYXQgbGVhc3Qgb25lIG5pZ2h0LiBJbmNsdWRlcyBob3RlbCBzdGF5cywgdHJhbnNmZXJzLCBjb25mZXJlbmNlIHZpc2l0cywgZXRjLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInRvdXJpc21fZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJUb3VyaXN0IEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhbW91bnQgb2YgZ292ZXJubWVudCBzcGVuZGluZyBkZWRpY2F0ZWQgZm9yIHRvdXJpc20gKGluICUgb2YgdGhlIEdEUCBmb3IgYSBjb3VudHJ5KS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ1cmJhbl9wb3B1bGF0aW9uXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVXJiYW4gUG9wdWxhdGlvbiAoaGlnaClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBlcmNlbnRhZ2Ugb2YgcGVvcGxlIHdobyBsaXZlIGluIGEgY2l0eS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJmb3Jlc3RfYXJlYV9wZXJjZW50XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiRm9yZXN0IEFyZWFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHRvdGFsIGFtb3VudCBvZiBmb3Jlc3QgYXJlYSBpbiBhIGNvdW50cnkgKGluIGttwrIpXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIEVEVUNBVElPTiBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLWVkdWNhdGlvblwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZWR1Y2F0aW9uX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiRWR1Y2F0aW9uIEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVkdWNhdGlvbiBleHBlbmRpdHVyZSByZXByZXNlbnRzIGdvdmVybm1lbnQgc3BlbmRpbmcgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiY28yX2VtaXNzaW9uc1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkNPMiBFbWlzc2lvbnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ08yIGVtaXNzaW9ucyBpbiBtZXRyaWMgdG9ucyBwZXIgcGVyc29uIHBlciB5ZWFyLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImNvcnJ1cHRpb25faW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJDb3JydXB0aW9uIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvcnJ1cHRpb24gUGVyY2VwdGlvbnMgSW5kZXggKENQSSkuIChTY2FsZTogMC0xMDA7IDAgPSBoaWdoIGNvcnJ1cHRpb24uIDEwMCA9IGxvdyBjb3JydXB0aW9uKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZGlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIdW1hbiBEZXZlbG9wbWVudCBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkluZGljYXRvciBvZiBsaWZlIGV4cGVjdGFuY3ksIGVkdWNhdGlvbiwgYW5kIHBlciBjYXBpdGEgaW5jb21lLiAoU2NhbGU6IDAtMTsgMCA9IGxvdyBzY29yZS4gMSA9IGhpZ2ggc2NvcmUpLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhlYWx0aF9leHBlbmRpdHVyZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhlYWx0aCBFeHBlbmRpdHVyZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQdWJsaWMgc3BlbmRpbmcgb24gaGVhbHRoLCBtZWFzdXJlZCBpbiAlIG9mIEdEUC5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gVklTSVRPUiBWSVNBIEJVVFRPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09XG4gIHtcbiAgICBpZDogXCJidXR0b24tdmlzaXQtdmlzYVwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGFwcGluZXNzX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGFwcGluZXNzIEluZGV4XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQmFzZWQgb24gZmFjdG9ycyBzdWNoIGFzIEdEUCBwZXIgY2FwaXRhLCBzb2NpYWwgc3VwcG9ydCwgbGlmZSBleHBlY3RhbmN5LiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhhcHBpZXIgdGhlIGNvdW50cnkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGVhbHRoX2V4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSGVhbHRoIEV4cGVuZGl0dXJlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlB1YmxpYyBzcGVuZGluZyBvbiBoZWFsdGgsIG1lYXN1cmVkIGluICUgb2YgR0RQLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcInRvdXJpc3RfYXJyaXZhbHNcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJUb3VyaXN0IEFycml2YWxzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUmVwcmVzZW50cyBmb3JlaWduIGNpdGl6ZW5zIHRoYXQgc3RheWVkIGF0IGxlYXN0IG9uZSBuaWdodC4gSW5jbHVkZXMgaG90ZWwgc3RheXMsIHRyYW5zZmVycywgY29uZmVyZW5jZSB2aXNpdHMsIGV0Yy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZW5zaXR5XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiUG9wdWxhdGlvbiBEZW5zaXR5IChsb3cpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwb3B1bGF0aW9uIGRlbnNpdHkgaXMgbWVhc3VyZWQgaW4gcGVyIGttwrIuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiY28yX2VtaXNzaW9uc1wiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkNPMiBFbWlzc2lvbnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ08yIGVtaXNzaW9ucyBpbiBtZXRyaWMgdG9ucyBwZXIgcGVyc29uIHBlciB5ZWFyLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImluZmxhdGlvblwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkluZmxhdGlvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYW5udWFsIGNoYW5nZSBvZiBjb25zdW1lciBwcmljZXMgKHVuaXQ6ICUpLlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBXT1JLSU5HIEhPTElEQVkgQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi13b3JrLWhvbGlkYXlcIixcbiAgICBzdGF0czogW1xuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlbnNpdHlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJQb3B1bGF0aW9uIERlbnNpdHkgKGxvdylcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBvcHVsYXRpb24gZGVuc2l0eSBpcyBtZWFzdXJlZCBpbiBwZXIga23Csi5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJ0b3VyaXN0X2Fycml2YWxzXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiVG91cmlzdCBBcnJpdmFsc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlJlcHJlc2VudHMgZm9yZWlnbiBjaXRpemVucyB0aGF0IHN0YXllZCBhdCBsZWFzdCBvbmUgbmlnaHQuIEluY2x1ZGVzIGhvdGVsIHN0YXlzLCB0cmFuc2ZlcnMsIGNvbmZlcmVuY2UgdmlzaXRzLCBldGMuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcImJ1dHRvbi1wZXJtLXNvbG9cIixcbiAgICAgICAgc3RhdDogXCJnaW5pXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiR2luaSBDb2VmZmljaWVudFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlN0YXRlcyBob3cgdW5pZm9ybWx5IGFzc2V0cyBhcmUgZGlzdHJpYnV0ZWQuIChzY2FsZTogMC0xMDA7IDAgPSBlcXVhbCBkaXN0cmlidXRpb24uIDEwMCA9IHVuZXF1YWwgZGlzdHJpYnV0aW9uKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoYXBwaW5lc3NfaW5kZXhcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIYXBwaW5lc3MgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJCYXNlZCBvbiBmYWN0b3JzIHN1Y2ggYXMgR0RQIHBlciBjYXBpdGEsIHNvY2lhbCBzdXBwb3J0LCBsaWZlIGV4cGVjdGFuY3kuIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGFwcGllciB0aGUgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJqb2JsZXNzX3JhdGVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJKb2JsZXNzIFJhdGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIG51bWJlciBvZiB1bmVtcGxveWVkIHBlb3BsZSBpbiByZWxhdGlvbiB0byB0aGUgbGFib3IgZm9yY2UgZm9yIGEgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJtZWRpYW53YWdlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTWVkaWFuIFdhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJBIG1lYXN1cmUgb2YgdGhlIG1vbnRobHkgbWVkaWFuIHdhZ2UgYmVmb3JlIHRheGVzLCBpbmNsdWRpbmcgcHVibGljIGJlbmVmaXRzIChlLmcgY2hpbGQgYWxsb3dhbmNlKTsgdW5pdDogVVNELlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyBQRVJNQU5FTlQtU09MTyBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXBlcm0tc29sb1wiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGRpXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSHVtYW4gRGV2ZWxvcG1lbnQgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJJbmRpY2F0b3Igb2YgbGlmZSBleHBlY3RhbmN5LCBlZHVjYXRpb24sIGFuZCBwZXIgY2FwaXRhIGluY29tZS4gKFNjYWxlOiAwLTE7IDAgPSBsb3cgc2NvcmUuIDEgPSBoaWdoIHNjb3JlKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJjb3JydXB0aW9uX2luZGV4XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiQ29ycnVwdGlvbiBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDb3JydXB0aW9uIFBlcmNlcHRpb25zIEluZGV4IChDUEkpLiAoU2NhbGU6IDAtMTAwOyAwID0gaGlnaCBjb3JydXB0aW9uLiAxMDAgPSBsb3cgY29ycnVwdGlvbikuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwibWVkaWFud2FnZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIk1lZGlhbiBXYWdlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQSBtZWFzdXJlIG9mIHRoZSBtb250aGx5IG1lZGlhbiB3YWdlIGJlZm9yZSB0YXhlcywgaW5jbHVkaW5nIHB1YmxpYyBiZW5lZml0cyAoZS5nIGNoaWxkIGFsbG93YW5jZSk7IHVuaXQ6IFVTRC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJpbmZsYXRpb25cIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJJbmZsYXRpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGFubnVhbCBjaGFuZ2Ugb2YgY29uc3VtZXIgcHJpY2VzICh1bml0OiAlKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZWFsdGhfZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIZWFsdGggRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUHVibGljIHNwZW5kaW5nIG9uIGhlYWx0aCwgbWVhc3VyZWQgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwidXJiYW5fcG9wdWxhdGlvblwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIlVyYmFuIFBvcHVsYXRpb24gKGhpZ2gpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBwZXJjZW50YWdlIG9mIHBlb3BsZSB3aG8gbGl2ZSBpbiBhIGNpdHkuXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFBFUk1BTkVOVC1DT1VQTEUgQlVUVE9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cbiAge1xuICAgIGlkOiBcImJ1dHRvbi1wZXJtLWNvdXBsZVwiLFxuICAgIHN0YXRzOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiaGRpXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiSHVtYW4gRGV2ZWxvcG1lbnQgSW5kZXhcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJJbmRpY2F0b3Igb2YgbGlmZSBleHBlY3RhbmN5LCBlZHVjYXRpb24sIGFuZCBwZXIgY2FwaXRhIGluY29tZS4gKFNjYWxlOiAwLTE7IDAgPSBsb3cgc2NvcmUuIDEgPSBoaWdoIHNjb3JlKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJqb2JsZXNzX3JhdGVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJKb2JsZXNzIFJhdGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIG51bWJlciBvZiB1bmVtcGxveWVkIHBlb3BsZSBpbiByZWxhdGlvbiB0byB0aGUgbGFib3IgZm9yY2UgZm9yIGEgY291bnRyeS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiYnV0dG9uLXBlcm0tc29sb1wiLFxuICAgICAgICBzdGF0OiBcImdpbmlcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJHaW5pIENvZWZmaWNpZW50XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiU3RhdGVzIGhvdyB1bmlmb3JtbHkgYXNzZXRzIGFyZSBkaXN0cmlidXRlZC4gKHNjYWxlOiAwLTEwMDsgMCA9IGVxdWFsIGRpc3RyaWJ1dGlvbi4gMTAwID0gdW5lcXVhbCBkaXN0cmlidXRpb24pLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImhhcHBpbmVzc19pbmRleFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkhhcHBpbmVzcyBJbmRleFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkJhc2VkIG9uIGZhY3RvcnMgc3VjaCBhcyBHRFAgcGVyIGNhcGl0YSwgc29jaWFsIHN1cHBvcnQsIGxpZmUgZXhwZWN0YW5jeS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoYXBwaWVyIHRoZSBjb3VudHJ5LlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcImRlYXRoX3JhdGVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1pblwiLFxuICAgICAgICBzdGF0TmFtZTogXCJSYXRlIG9mIERlYXRoc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYXZlcmFnZSBudW1iZXIgb2YgZGVhdGhzIHBlciB5ZWFyIHBlciAxLDAwMCBwZW9wbGUuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwiZGVidHNfcGVyY2VudFwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWluXCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkdvdmVybm1lbnQgRGVidFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgcGVyY2VudGFnZSBvZiBnb3Zlcm5tZW50IGJvcnJvd2luZ3MgaW4gcmVsYXRpb24gdG8gdGhlIEdEUC5cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8gUEVSTUFORU5ULUZBTUlMWSBCVVRUT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgaWQ6IFwiYnV0dG9uLXBlcm0tZmFtaWx5XCIsXG4gICAgc3RhdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJlZHVjYXRpb25fZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJFZHVjYXRpb24gRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRWR1Y2F0aW9uIGV4cGVuZGl0dXJlIHJlcHJlc2VudHMgZ292ZXJubWVudCBzcGVuZGluZyBpbiAlIG9mIEdEUC5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJoZWFsdGhfZXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJIZWFsdGggRXhwZW5kaXR1cmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUHVibGljIHNwZW5kaW5nIG9uIGhlYWx0aCwgbWVhc3VyZWQgaW4gJSBvZiBHRFAuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwibGl0ZXJhY3lfcmF0ZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwibWF4XCIsXG4gICAgICAgIHN0YXROYW1lOiBcIkxpdGVyYWN5IFJhdGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHBlcmNlbnRhZ2Ugb2YgcGVvcGxlIHRoYXQgaGF2ZSB0aGUgYWJpbGl0eSB0byByZWFkIGFuZCB3cml0ZSBieSBhZ2UgMTUuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXQ6IFwibGlmZV9leHBlY3RhbmN5XCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtYXhcIixcbiAgICAgICAgc3RhdE5hbWU6IFwiTGlmZSBFeHBlY3RhbmN5XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhdmVyYWdlIG51bWJlciBvZiB5ZWFycyBhIHBlcnNvbiB3aWxsIGxpdmUgKGF0IGJpcnRoKS5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdDogXCJkZWF0aF9yYXRlXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJtaW5cIixcbiAgICAgICAgc3RhdE5hbWU6IFwiUmF0ZSBvZiBEZWF0aHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGF2ZXJhZ2UgbnVtYmVyIG9mIGRlYXRocyBwZXIgeWVhciBwZXIgMSwwMDAgcGVvcGxlLlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0OiBcIm1lZGlhbndhZ2VcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcIm1heFwiLFxuICAgICAgICBzdGF0TmFtZTogXCJNZWRpYW4gV2FnZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkEgbWVhc3VyZSBvZiB0aGUgbW9udGhseSBtZWRpYW4gd2FnZSBiZWZvcmUgdGF4ZXMsIGluY2x1ZGluZyBwdWJsaWMgYmVuZWZpdHMgKGUuZyBjaGlsZCBhbGxvd2FuY2UpOyB1bml0OiBVU0QuXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cbi8qIDAuIEdFVCBTVEFSVEVEICovXG50cmF2ZWxBcHAuZ2V0U3RhcnRlZCA9ICgpID0+IHtcbiAgLy8gTGlzdGVucyBmb3IgY2xpY2sgb24gR0VUIFNUQVJURUQgQlVUVE9OXG4gICQoXCIud2VsY29tZV9fYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gU21vb3RoIHNjcm9sbCB0byBuZXh0IHNlY3Rpb25cbiAgICAkKFwiaHRtbCwgYm9keVwiKVxuICAgICAgLnN0b3AoKVxuICAgICAgLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoXCIucHVycG9zZS1zZWN0aW9uXCIpLm9mZnNldCgpLnRvcCB9LCA5MDAsIFwic3dpbmdcIik7XG4gIH0pO1xufTtcblxuLyogMS4gR0VUIFVTRVIgSU5QVVQgKi9cbnRyYXZlbEFwcC5nZXRVc2VyUHVycG9zZSA9ICgpID0+IHtcbiAgJChcIi50cmF2ZWwtZm9ybV9fYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gU3RvcmUgdXNlciBpbnB1dCBpbiB2YXJpYWJsZVxuICAgIGNvbnN0IGlucHV0SUQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcbiAgICB0cmF2ZWxBcHAudXNlclB1cnBvc2UgPSBpbnB1dElEO1xuXG4gICAgLy8gQ2FsbCB0aGUgZGlzcGxheSBzdGF0cyBmdW5jdGlvblxuICAgIHRyYXZlbEFwcC5kaXNwbGF5U3RhdHModHJhdmVsQXBwLnVzZXJQdXJwb3NlKTtcblxuICAgIC8vIERpc3BsYXkgdGhlIGNyaXRlcmlhcyB0byBiZSBjaG9zZW5cbiAgICAkKFwiLmNyaXRlcmlhc1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZmxleFwiKTtcblxuICAgIC8vIFNtb290aCBTY3JvbGwgdG8gY3JpdGVyaWEncyBzZWN0aW9uXG4gICAgJChcImh0bWwsIGJvZHlcIilcbiAgICAgIC5zdG9wKClcbiAgICAgIC5hbmltYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiLmNyaXRlcmlhc1wiKS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSxcbiAgICAgICAgOTAwLFxuICAgICAgICBcInN3aW5nXCJcbiAgICAgICk7XG4gIH0pO1xufTtcblxuLyogMi4gRElTUExBWSBBTEwgU1RBVFMgRk9SIFRIRSBTRUxFQ1RFRCBQVVJQT1NFIE9OIFNDUkVFTiAqL1xudHJhdmVsQXBwLmRpc3BsYXlTdGF0cyA9IHB1cnBvc2VJRCA9PiB7XG4gICQoXCIuY2hvaWNlc1wiKS5lbXB0eSgpO1xuICAvLyBIZWFkZXIgZm9yIHRoZSBjaG9vc2UgQ3JpdGVyaWEgc2VjdGlvblxuICAkKFwiLmNyaXRlcmlhLWhlYWRlclwiKS50ZXh0KFxuICAgIFwiUGxlYXNlIHJhbmsgdGhlIGZvbGxvd2luZyBjcml0ZXJpYSBpbiBvcmRlciBvZiBpbXBvcnRhbmNlIGZyb20gdG9wIHRvIGJvdHRvbS4gVXNlIHlvdXIgY3Vyc29yIHRvIGRyYWcgYW5kIGRyb3AgdGhlIGl0ZW1zLlwiXG4gICk7XG4gIC8vIEFkZCBjc3MgcG9zaXRpb24gdG8gY3JpdGVyaWEgY29udGFpbmVyXG4gICQoXCIuY2hvaWNlcy1saXN0LWNvbnRhaW5lclwiKS5jc3MoXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlXCIpO1xuXG4gIC8vIEdvIHRocm91Z2ggZWFjaCBwdXJwb3NlIG9iamVjdCBpbiB0aGUgU3RhdCBBcnJheVxuICB0cmF2ZWxBcHAuc3RhdEFycmF5LmZvckVhY2gocHVycG9zZU9iaiA9PiB7XG4gICAgLy8gSWYgdGhlIHB1cnBvc2UgSUQgbWF0Y2hlcyB0aGUgcHVycG9zZSBPYmplY3QgaWRcbiAgICBpZiAocHVycG9zZUlEID09PSBwdXJwb3NlT2JqLmlkKSB7XG4gICAgICAvLyBHbyB0aHJvdWdoIGV2ZXJ5IHN0YXQgZm9yIHRoaXMgcHVycG9zZVxuICAgICAgcHVycG9zZU9iai5zdGF0cy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgICAvLyBBcHBlbmQgZWFjaCBvZiB0aGUgc3RhdCBuYW1lIG9uIHNjcmVlbiBmb3IgdGhlIHVzZXIgdG8gcmFua1xuICAgICAgICBsZXQgbWFya1VwSXRlbSA9ICQoXCI8bGk+XCIpXG4gICAgICAgICAgLmF0dHIoXCJpZFwiLCBzdGF0LnN0YXQpXG4gICAgICAgICAgLmFkZENsYXNzKFwiY3JpdGVyaWFcIilcbiAgICAgICAgICAudGV4dChzdGF0LnN0YXROYW1lKTtcbiAgICAgICAgJChcIi5jaG9pY2VzXCIpLmFwcGVuZChtYXJrVXBJdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gYXBwZW5kIHN1Ym1pdCBidXR0b25cbiAgbGV0IG1hcmtVcEJ1dHRvbiA9IGA8bGk+PGJ1dHRvbiBjbGFzcz1cInVzZXItc3VibWl0IGJ0blwiPlN1Ym1pdCBSYW5raW5nPC9idXR0b24+PC9saT5gO1xuICAkKFwiLmNob2ljZXNcIikuYXBwZW5kKG1hcmtVcEJ1dHRvbik7XG5cbiAgdHJhdmVsQXBwLmdldFVzZXJSYW5raW5ncygpO1xufTtcblxuLyogMy4gT0JUQUlOIFRIRSBSQU5LSU5HIE9GIFRIRSBTVEFUUyBGUk9NIFVTRVIgKi9cbnRyYXZlbEFwcC5nZXRVc2VyUmFua2luZ3MgPSAoKSA9PiB7XG4gICQoXCIuY2hvaWNlc1wiKS5vbihcImNsaWNrXCIsIFwiLnVzZXItc3VibWl0XCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vIHJlbW92ZSBzdWJtaXQgYnV0dG9uIGFuZCBwdXQgYSBsb2FkZXIgdW50aWwgdGhlIHJlc3VsdHMgY29tZSBiYWNrXG4gICAgLy8gLmh0bWwoYDxpbWcgY2xhc3M9XCJsb2FkZXJcIiBzcmM9XCIuLi8uLi9hc3NldHMvc3Bpbm5lci0xcy0xMDBweC5zdmdcIj5gKTtcbiAgICAkKFwiLmNob2ljZXNcIikuZmluZChcbiAgICAgIFwibGk6bGFzdC1jaGlsZFwiXG4gICAgKS5odG1sKGA8c3ZnIGNsYXNzPVwibGRzLXNwaW5uZXIgbG9hZGVyXCIgd2lkdGg9XCIxMDBweFwiICBoZWlnaHQ9XCIxMDBweFwiICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiBub25lO1wiPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuOTE2NjY2NjY2NjY2NjY2NnNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC44MzMzMzMzMzMzMzMzMzM0c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSg2MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjc1c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjY2NjY2NjY2NjY2NjY2NjZzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDEyMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjU4MzMzMzMzMzMzMzMzMzRzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDE1MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjVzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDE4MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjQxNjY2NjY2NjY2NjY2NjdzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDIxMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjMzMzMzMzMzMzMzMzMzMzNzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDI0MCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIi0wLjI1c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cbiAgPC9yZWN0PlxuPC9nPjxnIHRyYW5zZm9ybT1cInJvdGF0ZSgyNzAgNTAgNTApXCI+XG4gIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiOS40XCIgcnk9XCI0LjhcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmQ5MzQxXCI+XG4gICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiB2YWx1ZXM9XCIxOzBcIiBrZXlUaW1lcz1cIjA7MVwiIGR1cj1cIjFzXCIgYmVnaW49XCItMC4xNjY2NjY2NjY2NjY2NjY2NnNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIj48L2FuaW1hdGU+XG4gIDwvcmVjdD5cbjwvZz48ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzAwIDUwIDUwKVwiPlxuICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjkuNFwiIHJ5PVwiNC44XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZkOTM0MVwiPlxuICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgdmFsdWVzPVwiMTswXCIga2V5VGltZXM9XCIwOzFcIiBkdXI9XCIxc1wiIGJlZ2luPVwiLTAuMDgzMzMzMzMzMzMzMzMzMzNzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PGcgdHJhbnNmb3JtPVwicm90YXRlKDMzMCA1MCA1MClcIj5cbiAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCI5LjRcIiByeT1cIjQuOFwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZDkzNDFcIj5cbiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIHZhbHVlcz1cIjE7MFwiIGtleVRpbWVzPVwiMDsxXCIgZHVyPVwiMXNcIiBiZWdpbj1cIjBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCI+PC9hbmltYXRlPlxuICA8L3JlY3Q+XG48L2c+PC9zdmc+YCk7XG5cbiAgICAvLyBnZXQgdGhlIHVzZXIgcmFua2luZ3MgZnJvbSBoaXMgb3JkZXJpbmcgb2Ygc3RhdHMgYW5kIHN0b3JlIGluIGEgdmFyaWFibGVcbiAgICBsZXQgdXNlclJhbmtpbmdzID0gJChcIi5jaG9pY2VzXCIpWzBdLmNoaWxkcmVuO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBhbiBlbXB0eSBhcnJheSB0byBzdG9yZSB0aGUgdG9wIDMgcmFua2luZ3NcbiAgICBsZXQgc3RhdHNGb3JBUElDYWxsID0gW107XG5cbiAgICAvLyBnZXQgZmlyc3QgdG9wIDMgcmFua2luZ3MgKHN0YXRzIGluIDFzdCwgMm5kIGFuZCAzcmQgcG9zaXRpb25zKVxuICAgIC8vIGFuZCBzdG9yZSB0aGVtIGluc2lkZSBhbiBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBzdGF0c0ZvckFQSUNhbGwucHVzaCh1c2VyUmFua2luZ3NbaV0uaWQpO1xuICAgIH1cblxuICAgIC8vIElOSVRJQUxJWkUgQUxMIEdMT0JBTCBWQVJJQUJMRVMgRk9SIERJU1BMQVkgQVQgVEhFIEVORFxuICAgIHRyYXZlbEFwcC53aWtpRXh0cmFjdCA9IFtdO1xuICAgIHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5zdGF0Q29kZUFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLndpa2lQcm9taXNlQXJyYXkgPSBbXTtcbiAgICB0cmF2ZWxBcHAucGl4YVByb21pc2VBcnJheSA9IFtdO1xuICAgIHRyYXZlbEFwcC5pbWFnZUFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLmltYWdlVGV4dEFycmF5ID0gW107XG4gICAgdHJhdmVsQXBwLmZsaWNraXR5T24gPSBmYWxzZTtcblxuICAgIGlmICh0cmF2ZWxBcHAuZmxpY2tpdHlPbiA9PT0gdHJ1ZSkge1xuICAgICAgJChcIi5yZXN1bHRzXCIpLmZsaWNraXR5KFwiZGVzdHJveVwiKTtcbiAgICB9XG4gICAgJChcIi5yZXN1bHRzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXG4gICAgdHJhdmVsQXBwLmdldFN0YXQoLi4uc3RhdHNGb3JBUElDYWxsKTtcbiAgfSk7XG59O1xuXG4vKiA0LiBTRU5EIEFKQVggUkVRVUVTVCBUTyBJTlFTVEFUUyBBUEkgKi9cblxuLy8gU3RvcmUgaW1wb3J0YW50IGluZm8gZm9yIGNhbGxzIHRvIHRoZSBJTlFTdGF0cyBBUEkuXG50cmF2ZWxBcHAuc3RhdEtleSA9IFwiNWQzNjg3YzdjMTc4OGQ1ZlwiO1xudHJhdmVsQXBwLnN0YXRVUkwgPSBcImh0dHA6Ly9pbnFzdGF0c2FwaS5pbnF1YnUuY29tXCI7XG50cmF2ZWxBcHAuZ2V0U3RhdCA9IChzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKSA9PiB7XG4gIC8vIGF4aW9zKHtcbiAgLy8gICBtZXRob2Q6IFwiR0VUXCIsXG4gIC8vICAgdXJsOiBcImh0dHBzOi8vcHJveHkuaGFja2VyeW91LmNvbVwiLFxuICAvLyAgIGRhdGFSZXNwb25zZTogXCJqc29ucFwiLFxuICAvLyAgIHBhcmFtczoge1xuICAvLyAgICAgcmVxVXJsOiB0cmF2ZWxBcHAuc3RhdFVSTCxcbiAgLy8gICAgIGFwaV9rZXk6IHRyYXZlbEFwcC5zdGF0S2V5LFxuICAvLyAgICAgZGF0YTogYGhkaSwke3N0YXRUeXBlMX0sJHtzdGF0VHlwZTJ9LCR7c3RhdFR5cGUzfWAsXG4gIC8vICAgICBjbWQ6IFwiZ2V0V29ybGREYXRhXCJcbiAgLy8gICB9XG4gIC8vIH0pXG4gICQuYWpheCh7XG4gICAgdXJsOiB0cmF2ZWxBcHAuc3RhdFVSTCxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgIGRhdGE6IHtcbiAgICAgIGFwaV9rZXk6IHRyYXZlbEFwcC5zdGF0S2V5LFxuICAgICAgZGF0YTogYGhkaSwke3N0YXRUeXBlMX0sJHtzdGF0VHlwZTJ9LCR7c3RhdFR5cGUzfWAsXG4gICAgICBjbWQ6IFwiZ2V0V29ybGREYXRhXCJcbiAgICB9XG4gIH0pLnRoZW4ocmVzID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgLy8gY2FsbGluZyB0aGUgY2FsY3VsYXRpb24gZnVuY3Rpb24gdG8gZ2V0IHRoZSB0b3AgbiAvIGJvdHRvbSBuIGNvdW50cmllc1xuICAgIC8vIGZpbmFsUmVzdWx0cyBob2xkcyB0aGUgZmluYWwgMyBjb3V0cmllcyBhbmQgYWxsIG9mIHRoZWlyIHN0YXRzXG4gICAgbGV0IGZpbmFsUmVzdWx0cyA9IHRyYXZlbEFwcC5nZXRSZWNvbW1lbmRhdGlvbnMocmVzLCBzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKTtcblxuICAgIC8vIEdldCB3aWtpIGFuZCBwaXhhIGV4dHJhY3RzIGZvciBlYWNoIGNvdW50cnlcbiAgICBmaW5hbFJlc3VsdHMuZm9yRWFjaChjb3VudHJ5T2JqID0+IHtcbiAgICAgIC8vIGdldCB3aWtpIGV4dHJhY3RzIGFuZCBwdXQgcHJvbWlzZXMgaW50byBhcnJheVxuICAgICAgdHJhdmVsQXBwLndpa2lQcm9taXNlQXJyYXkucHVzaCh0cmF2ZWxBcHAuZ2V0V2lraShjb3VudHJ5T2JqLmNvdW50cnlOYW1lKSk7XG5cbiAgICAgIC8vIGdldCBwaXhhIGV4dHJhY3RzIGFuZCBwdXQgcHJvbWlzZXMgaW50byBhcnJheVxuICAgICAgdHJhdmVsQXBwLnBpeGFQcm9taXNlQXJyYXkucHVzaCh0cmF2ZWxBcHAuZ2V0UGl4YShjb3VudHJ5T2JqLmNvdW50cnlOYW1lKSk7XG4gICAgfSk7XG5cbiAgICAvLyB3aGVuIGFsbCB3aWtpIGFuZCBwaXhhIHByb21pc2VzIGFyZSBmdWxmaWxsZWQsIHN0b3JlIHRoZSByZXN1bHRzXG4gICAgLy8gdG8gcHJlcGFyZSB0aGVtIGZvciBkaXNwbGF5XG4gICAgJC53aGVuKC4uLnRyYXZlbEFwcC53aWtpUHJvbWlzZUFycmF5LCAuLi50cmF2ZWxBcHAucGl4YVByb21pc2VBcnJheSkudGhlbigoLi4ud2lraVBpeGFSZXN1bHRzKSA9PiB7XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSB3aWtpUGl4YSByZXN1bHRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpa2lQaXhhUmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBmaXJzdCB0aHJlZSBhcmUgd2lraSwgcHVzaCAoc3RvcmUpIGludG8gYXJyYXlcbiAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0b3JlV2lraSh3aWtpUGl4YVJlc3VsdHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxhc3QgdGhyZWUgYXJlIHBpeGEsIHB1c2ggKHN0b3JlKSBpbnRvIGFycmF5XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRyYXZlbEFwcC5zdG9yZVBpeGEod2lraVBpeGFSZXN1bHRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPbmNlIHJlc3VsdHMgYWxsIHN0b3JlZCwgZGlzcGxheSBhbGwgaW5mbyBvbiBzY3JlZW4gKDMgY291bnRyaWVzLCB3aWtpIGFuZCBwaXhhKVxuICAgICAgdHJhdmVsQXBwLmRpc3BsYXlEZXN0aW5hdGlvbnMoZmluYWxSZXN1bHRzLCBbc3RhdFR5cGUxLCBzdGF0VHlwZTIsIHN0YXRUeXBlM10pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qIDUuIFNUQVJUIENBTENVTEFUSU9OIEZPUiAzIFJFQ09NTUVOREVEIENPVU5UUklFUyAqL1xudHJhdmVsQXBwLmdldFJlY29tbWVuZGF0aW9ucyA9IChyZXMsIHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpID0+IHtcbiAgLy8gRmluZCBkaXJlY3Rpb24gb2YgZWFjaCBzdGF0IHR5cGUgYW5kIHJldHVybiBpdCBpbiBhbiBhcnJheVxuICBsZXQgYXJyRGlyZWN0aW9ucyA9IHRyYXZlbEFwcC5maW5kRGlyZWN0aW9ucyhzdGF0VHlwZTEsIHN0YXRUeXBlMiwgc3RhdFR5cGUzKTtcblxuICAvLyBJbml0aWFsaXplIGFycmF5cyBhbmQgbnVtYmVycyBmb3IgZWFjaCByb3VuZCBvZiBpdGVyYXRpb24vZmlsdGVyaW5nXG4gIGxldCBpbml0aWFsQXJyID0gW107XG4gIGxldCBhcnIxID0gW107XG4gIGxldCBhcnIyID0gW107XG4gIGxldCBhcnIzID0gW107XG4gIGxldCBpbml0aWFsSXRlciA9IDYwO1xuICBsZXQgaXRlcmF0aW9uMSA9IDEwO1xuICBsZXQgaXRlcmF0aW9uMiA9IDU7XG4gIGxldCBpdGVyYXRpb24zID0gMztcblxuICAvL0luaXRpYWwgZmlsdGVyIHRvIGFjY291bnQgZm9yIHJlYWxpc3RpYyByZXN1bHRzIChiYXNlZCBvbiBIREkpXG4gIGluaXRpYWxBcnIgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lUmVzdWx0cyhyZXMsIFwiaGRpXCIsIFwibWF4XCIsIGluaXRpYWxJdGVyKTtcblxuICAvLyBJVEVSQVRJT04gMVxuICBhcnIxID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMoaW5pdGlhbEFyciwgc3RhdFR5cGUxLCBhcnJEaXJlY3Rpb25zWzBdLCBpdGVyYXRpb24xKTtcblxuICAvLyBJVEVSQVRJT04gMlxuICBhcnIyID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMoYXJyMSwgc3RhdFR5cGUyLCBhcnJEaXJlY3Rpb25zWzFdLCBpdGVyYXRpb24yKTtcblxuICAvLyBJVEVSQVRJT04gM1xuICBhcnIzID0gdHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMoYXJyMiwgc3RhdFR5cGUzLCBhcnJEaXJlY3Rpb25zWzJdLCBpdGVyYXRpb24zKTtcblxuICAvLyByZXR1cm4gdGhlIGFycmF5IHdpdGggdGhlIGZpbmFsIHJlc3VsdHNcbiAgcmV0dXJuIGFycjM7XG59O1xuXG4vKiA1LjEgRklORCBNSU4vTUFYIEZPUiBFQUNIIFNUQVQgVFlQRSAqL1xudHJhdmVsQXBwLmZpbmREaXJlY3Rpb25zID0gKHN0YXRUeXBlMSwgc3RhdFR5cGUyLCBzdGF0VHlwZTMpID0+IHtcbiAgLy8gRmluZCB3aGV0aGVyIGVhY2ggc3RhdHR5cGUgaXMgbWF4IG9yIG1pblxuICBsZXQgc3RhdDFEaXJlY3Rpb24gPSBcIlwiO1xuICBsZXQgc3RhdDJEaXJlY3Rpb24gPSBcIlwiO1xuICBsZXQgc3RhdDNEaXJlY3Rpb24gPSBcIlwiO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgU3RhdCBBcnJheSB0byBmaW5kIGRpcmVjdGlvbiBvZiBzdGF0dHlwZXNcbiAgdHJhdmVsQXBwLnN0YXRBcnJheS5mb3JFYWNoKHB1cnBvc2UgPT4ge1xuICAgIC8vIGlmIHRoZSBjdXJyZW50IHB1cnBvc2UgbWF0Y2hlcyB0aGUgdXNlciBwdXJwb3NlLFxuICAgIGlmIChwdXJwb3NlLmlkID09PSB0cmF2ZWxBcHAudXNlclB1cnBvc2UpIHtcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIHN0YXRzIGFycmF5IG9mIHRoYXQgcHVycG9zZSBvYmplY3RcbiAgICAgIHB1cnBvc2Uuc3RhdHMuZm9yRWFjaChzdGF0ID0+IHtcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RhdCBpbiB0aGUgc3RhdHMgYXJyYXkgaXMgc3RhdHR5cGUxLCBnZXQgdGhpcyBkaXJlY3Rpb25cbiAgICAgICAgaWYgKHN0YXQuc3RhdCA9PT0gc3RhdFR5cGUxKSB7XG4gICAgICAgICAgc3RhdDFEaXJlY3Rpb24gPSBzdGF0LmRpcmVjdGlvbjtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdENvZGVBcnJheS5wdXNoKHN0YXQuc3RhdCk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5LnB1c2goc3RhdC5zdGF0TmFtZSk7XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXREZXNjcmlwdGlvbkFycmF5LnB1c2goc3RhdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RhdCBpbiB0aGUgc3RhdHMgYXJyYXkgaXMgc3RhdHR5cGUyLCBnZXQgdGhpcyBkaXJlY3Rpb25cbiAgICAgICAgZWxzZSBpZiAoc3RhdC5zdGF0ID09PSBzdGF0VHlwZTIpIHtcbiAgICAgICAgICBzdGF0MkRpcmVjdGlvbiA9IHN0YXQuZGlyZWN0aW9uO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0Q29kZUFycmF5LnB1c2goc3RhdC5zdGF0KTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdE5hbWVzQXJyYXkucHVzaChzdGF0LnN0YXROYW1lKTtcbiAgICAgICAgICB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXkucHVzaChzdGF0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGF0IGluIHRoZSBzdGF0cyBhcnJheSBpcyBzdGF0dHlwZTMsIGdldCB0aGlzIGRpcmVjdGlvblxuICAgICAgICBlbHNlIGlmIChzdGF0LnN0YXQgPT09IHN0YXRUeXBlMykge1xuICAgICAgICAgIHN0YXQzRGlyZWN0aW9uID0gc3RhdC5kaXJlY3Rpb247XG4gICAgICAgICAgdHJhdmVsQXBwLnN0YXRDb2RlQXJyYXkucHVzaChzdGF0LnN0YXQpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheS5wdXNoKHN0YXQuc3RhdE5hbWUpO1xuICAgICAgICAgIHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheS5wdXNoKHN0YXQuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbc3RhdDFEaXJlY3Rpb24sIHN0YXQyRGlyZWN0aW9uLCBzdGF0M0RpcmVjdGlvbl07XG59O1xuXG4vKiA1LjIgRlVOQ1RJT04gVE8gREVURVJNSU5FIFdIRVRIRVIgVEhFIFRPUCBPUiBCT1RUT00gU0NPUkVTIFNIT1VMRCBCRSBGT1VORCAqL1xudHJhdmVsQXBwLmRldGVybWluZVJlc3VsdHMgPSAoYXJyYXksIHN0YXRUeXBlLCBkaXJlY3Rpb24sIGl0ZXJhdGlvbk51bWJlcikgPT4ge1xuICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcbiAgLy8gaWYgd2Ugd2FudCBUT1AgbnVtYmVyc1xuICBpZiAoZGlyZWN0aW9uID09PSBcIm1heFwiKSB7XG4gICAgcmVzdWx0QXJyYXkgPSB0cmF2ZWxBcHAuZGV0ZXJtaW5lTkNvdW50cmllcyhhcnJheSwgc3RhdFR5cGUsIGl0ZXJhdGlvbk51bWJlciwgMSk7XG4gIH1cbiAgLy8gaWYgd2Ugd2FudCBCT1QgbnVtYmVyc1xuICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwibWluXCIpIHtcbiAgICByZXN1bHRBcnJheSA9IHRyYXZlbEFwcC5kZXRlcm1pbmVOQ291bnRyaWVzKGFycmF5LCBzdGF0VHlwZSwgaXRlcmF0aW9uTnVtYmVyLCAtMSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdEFycmF5O1xufTtcblxuLyogNS4zIENBTENVTEFURSBUSEUgTiBDT1VOVFJJRVMgKi9cbnRyYXZlbEFwcC5kZXRlcm1pbmVOQ291bnRyaWVzID0gKHJlc3VsdCwgc3RhdFR5cGUsIG4sIGRpcmVjdGlvbikgPT4ge1xuICAvLyBpbml0aWFsaXplIGEgaGVhcCBhcnJheSB0byBrZWVwIHRyYWNrIG9mIHRoZSBuIGxhcmdlc3Qvc21hbGxlc3Qgc3RhdCBzY29yZXNcbiAgbGV0IGhlYXAgPSBuZXcgTWluSGVhcCgpO1xuXG4gIC8vIGluaXRpYWxpemUgYSBzZWNvbmRhcnkgYXJyYXkgdG8ga2VlcCB0cmFjayBvZiB0aGUgbiBzY29yZXMgQU5EXG4gIC8vIHRoZSBhc3NvY2lhdGVkIGNvdW50cnkgdG8gZWFjaCBzY29yZVxuICBsZXQgbkNvdW50cmllcyA9IFtdO1xuXG4gIC8vIHN0b3JlIHRoZSBzdGF0IHR5cGUgaW50byBhIHByb3BlcnR5IHZhcmlhYmxlIGZvciBlYXNpZXIgdXNlXG4gIGxldCBwcm9wZXJ0eSA9IHN0YXRUeXBlO1xuXG4gIC8vIHN0YXJ0IGEgY291bnRyeSBjb3VudGVyIGF0IDAganVzdCBmb3IgdGhlIHNha2Ugb2YgYWRkaW5nIHRoZSBmaXJzdCBuIGNvdW50cmllcyBpbnRvIHRoZSBoZWFwXG4gIGxldCBjb3VudHJ5Q291bnRlciA9IDA7XG5cbiAgLy8gZ28gdGhyb3VnaCBlYWNoIGNvdW50cnkgZnJvbSB0aGUgcmVzdWx0cyBvZiB0aGUgQUpBWCBjYWxsIHRvIElOUVN0YXRzXG4gIHJlc3VsdC5tYXAoY291bnRyeSA9PiB7XG4gICAgLy8gc3RvcmUgdGhlIHN0YXQgc2NvcmUgYW5kIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IGNvdW50cnkgaW4gdmFyaWFibGVzLlxuICAgIC8vIElNUE9SVEFOVDogbXVsdGlwbHkgYnkgZGlyZWN0aW9uIHRvIGltcGxlbWVudCBtYXgvbWluIGhlYXBcbiAgICAvLyBhIGRpcmVjdGlvbiBvZiAxID0gd2Ugd2FudCBtYXhpbXVtIHNjb3Jlc1xuICAgIC8vIGEgZGlyZWN0aW9uIG9mIC0xID0gd2Ugd2FudCBtaW5pbXVtIHNjb3Jlc1xuICAgIGxldCBzdGF0ID0gTnVtYmVyKGNvdW50cnlbcHJvcGVydHldKSAqIGRpcmVjdGlvbjtcblxuICAgIC8vIGlmIGl0J3MgdGhlIGZpcnN0IG4gY291bnRyaWVzIGZyb20gdGhlIHJlc3VsdCwgbm8gd29yayByZXF1aXJlZC4gSnVzdCBhZGQgdGhlbSBkaXJlY3RseSBpbnRvIGJvdGggdGhlIGhlYXAgYW5kIG5Db3VudHJpZXMgdmFyaWFibGVzXG4gICAgaWYgKGNvdW50cnlDb3VudGVyIDwgbikge1xuICAgICAgaGVhcC5hZGQoc3RhdCk7XG4gICAgICBuQ291bnRyaWVzLnB1c2goY291bnRyeSk7XG5cbiAgICAgIC8vIGluY3JlbWVudCBjb3VudHJ5Q291bnRlciB0byBrbm93IHdoZW4gd2UncmUgcGFzdCB0aGUgZmlyc3QgbiBjb3VudHJpZXNcbiAgICAgIGNvdW50cnlDb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENPTkRJVElPTiBUTyBDSEVDSyBJRiB0aGUgY3VycmVudCBjb3VudHJ5IHN0YXQgaXMgZ3JlYXRlci9zbWFsbGVyIHRoYW4gYW55IG9mIHRoZSBjdXJyZW50IHN0YXRzIGluIHRoZSBjdXJyZW50IG4gY291bnRyaWVzXG4gICAgICBpZiAoc3RhdCA+IGhlYXAucGVlaygpKSB7XG4gICAgICAgIC8vIGlmIHNvLCBmaW5kIHRoZSBsb2NhdGlvbiBvZiB0aGUgc21hbGxlc3QvbGFyZ2VzdCBzdGF0IHNjb3JlIGluIHRoZSBjdXJyZW50IG5Db3VudHJpZXMgYXJyYXkgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgbmV3IHN0YXQgYW5kIGl0cyBhc3NvY2lhdGVkIGNvdW50cnlcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBuQ291bnRyaWVzLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgLy8gbXVsdGlwbHkgYnkgZGlyZWN0aW9uIGFnYWluIHRvIGNvbXBhcmUgcHJvcGVybHkgd2l0aCB0aGUgaGVhcFxuICAgICAgICAgIGxldCBjdXJyZW50U3RhdCA9IE51bWJlcihuQ291bnRyaWVzW21dW3Byb3BlcnR5XSkgKiBkaXJlY3Rpb247XG4gICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ID09PSBoZWFwLnBlZWsoKSkge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBjb3VudHJ5XG4gICAgICAgICAgICBuQ291bnRyaWVzLnNwbGljZShtLCAxLCBjb3VudHJ5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgc21hbGxlc3QvbGFyZ2VzdCBzdGF0IHNjb3JlIGZyb20gdGhlIGhlYXAgYXMgd2VsbFxuICAgICAgICBoZWFwLnBvbGwoKTtcblxuICAgICAgICAvLyBhZGQgdGhlIG5ldyBzbWFsbGVzdC9sYXJnZXN0IHNjb3JlIG9udG8gdGhlIGhlYXBcbiAgICAgICAgaGVhcC5hZGQoc3RhdCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLy8gcmV0dXJuIG4gY291bnRyaWVzXG4gIHJldHVybiBuQ291bnRyaWVzO1xufTtcblxuLyogNi4gU0VORCBBUEkgUkVRVUVTVFMgVE8gV0lLSSBBTkQgUElYQSAqL1xuXG4vLyA2LjEgV0lLSVBFRElBIEFQSTogR0VUIEFORCBTVE9SRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTdG9yZSBpbXBvcnRhbnQgaW5mbyBmb3IgY2FsbHMgdG8gdGhlIFdpa2kgQVBJLlxudHJhdmVsQXBwLndpa2lVUkwgPSBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHBcIjtcbi8vIEdldCBpbmZvIGZyb20gV2lraXBlZGlhIChBSkFYKVxudHJhdmVsQXBwLmdldFdpa2kgPSBjb3VudHJ5ID0+IHtcbiAgLy8gZ2V0IGV4dHJhY3RcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdXJsOiB0cmF2ZWxBcHAud2lraVVSTCxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICBkYXRhOiB7XG4gICAgICBhY3Rpb246IFwicXVlcnlcIixcbiAgICAgIHByb3A6IFwiZXh0cmFjdHNcIixcbiAgICAgIHRpdGxlczogY291bnRyeSxcbiAgICAgIGZvcm1hdDogXCJqc29uXCIsXG4gICAgICBleGxpbWl0OiAxLFxuICAgICAgZXhjaGFyczogMjgwLFxuICAgICAgZXhpbnRybzogdHJ1ZSxcbiAgICAgIGV4cGxhaW50ZXh0OiB0cnVlLFxuICAgICAgcmVkaXJlY3RzOiAxXG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFN0b3JlIFdpa2lwZWRpYSBjb3VudHJ5IGV4dHJhY3RcbnRyYXZlbEFwcC5zdG9yZVdpa2kgPSByZXN1bHQgPT4ge1xuICAvLyBUaGlzIHZhcmlhYmxlIHN0b3JlcyB0aGUgb2JqZWN0IHRoYXQgaG9sZHMgYSBrZXkgbmFtZSB1bmlxdWUgdG8gZXZlcnkgY291bnRyeS4gVGhlIHZhbHVlIG9mIHRoaXMga2V5IGlzIGFuIG9iamVjdCB0aGF0IGhvbGRzIHRoZSBleHRhY3QuXG4gIGNvbnN0IHdpa2lFeHRyYWN0T2JqZWN0ID0gcmVzdWx0WzBdLnF1ZXJ5LnBhZ2VzO1xuICAvLyBJZiB3ZSBjb252ZXJ0IHRoZSBhYm92ZSBvYmplY3QgaW50byBhbiBhcnJheSwgdGhlIGV4dHJhY3QgY2FuIGJlIGFjY2Vzc2VkIG9uIHRoZSBmaXJzdCB2YWx1ZSBvZiB0aGUgYXJyYXkuIFRoaXMgdmFyaWFibGUgaG9sZHMgdGhlIHdpa2kgZXh0cmFjdC5cbiAgdHJhdmVsQXBwLndpa2lFeHRyYWN0LnB1c2goT2JqZWN0LnZhbHVlcyh3aWtpRXh0cmFjdE9iamVjdClbMF0uZXh0cmFjdCk7XG59O1xuXG4vLyA2LjIgUElYQUJBWSBBUEk6IEdFVCBBTkQgU1RPUkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0b3JlIGltcG9ydGFudCBpbmZvIGZvciBjYWxscyB0byB0aGUgUGl4YWJheSBBUEkuXG50cmF2ZWxBcHAucGl4YUtleSA9IFwiOTg3OTU3MS1lNGNiYmVmM2U2OTJhYTE1YTI0YTcxMTliXCI7XG50cmF2ZWxBcHAucGl4YVVSTCA9IFwiaHR0cHM6Ly93d3cucGl4YWJheS5jb20vYXBpL1wiO1xuLy8gR2V0IGluZm8gZnJvbSBXaWtpcGVkaWEgKEFKQVgpXG50cmF2ZWxBcHAuZ2V0UGl4YSA9IGNvdW50cnkgPT4ge1xuICAvLyBHZXQgaW1hZ2UgVVJMXG4gIHJldHVybiAkLmFqYXgoe1xuICAgIHVybDogdHJhdmVsQXBwLnBpeGFVUkwsXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGRhdGFUeXBlOiBcImpzb25wXCIsXG4gICAgZGF0YToge1xuICAgICAga2V5OiB0cmF2ZWxBcHAucGl4YUtleSxcbiAgICAgIHE6IGNvdW50cnksXG4gICAgICBwZXJfcGFnZTogMTVcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gU3RvcmUgUGl4YWJheSBjb3VudHJ5IGltYWdlcyBvbiB0aGUgcGFnZVxudHJhdmVsQXBwLnN0b3JlUGl4YSA9IHJlc3VsdHMgPT4ge1xuICAvLyBTdG9yZSB0aGUgYXJyYXkgdGhhdCBob2xkcyB0aGUgaW1hZ2UgVVJMcyBpbiBhbiBhcnJheVxuICBjb25zdCByZXN1bHRzQXJyYXkgPSByZXN1bHRzWzBdLmhpdHM7XG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgcmVzdWx0cyBhcnJheSBhbmQgcHVzaCBhbGwgaW1hZ2VzIGludG8gdGhlIGltYWdlQXJyYXlcbiAgcmVzdWx0c0FycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gQXJyYXkgb2YgaW1hZ2VzIGZvciBlYWNoIGNvdW50cnlcbiAgICB0cmF2ZWxBcHAuaW1hZ2VBcnJheS5wdXNoKGl0ZW0ubGFyZ2VJbWFnZVVSTCk7XG4gICAgLy8gQXJyYXkgb2YgaW1hZ2UgaW5mb3JtYXRpb24gZnJvbSBlYWNoIGNvdW50cnkgdG8gYmUgdXNlZCBmb3IgQWx0IHRleHRcbiAgICB0cmF2ZWxBcHAuaW1hZ2VUZXh0QXJyYXkucHVzaChpdGVtLnRhZ3MpO1xuICB9KTtcbn07XG5cbi8qIDcuIERJU1BMQVkgREVTVElPTkFUSU9OUyBPTiBTQ1JFRU4gV0lUSCBXSUtJICsgUElYQSBSRVNVTFRTICovXG50cmF2ZWxBcHAuZGlzcGxheURlc3RpbmF0aW9ucyA9IChyZXN1bHRzLCBzdGF0Q2hvaWNlcykgPT4ge1xuICAvLyBHZXQgcmlkIG9mIHByZXZpb3VzIGNsaWNrZWQgcmVzdWx0c1xuICAkKFwiLnJlc3VsdHNcIikuZW1wdHkoKTtcbiAgLy8gR28gdGhyb3VnaCBlYWNoIGNvdW50cnkgcmVzdWx0IGFuZCBidWlsZCB0aGUgc3RyaW5nIGxpdGVyYWwgdG8gYXBwZW5kIHRvIHRoZSBwYWdlXG4gIGxldCBjb3VudHJ5Q291bnRlciA9IDA7XG4gIGxldCBpbWFnZUNvdW50ZXIgPSAwO1xuICByZXN1bHRzLmZvckVhY2goY291bnRyeSA9PiB7XG4gICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIGFsbCBlbGVtZW50cyBmb3Igb25lIGNvdW50cnkgcmVzdWx0XG4gICAgbGV0IGNvdW50cnlDb250YWluZXJFbGVtZW50ID0gJChcIjxkaXY+XCIpXG4gICAgICAuYWRkQ2xhc3MoXCJyZXN1bHQtY29udGFpbmVyXCIpXG4gICAgICAvLyBhc3NpZ24gcmFuZG9tIHBpeGEgaW1hZ2Ugb2YgY291bnRyeSB0byB0aGUgcmVzdWx0IGJhY2tncm91bmRcbiAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGB1cmwoXCIke3RyYXZlbEFwcC5pbWFnZUFycmF5W3RyYXZlbEFwcC5yYW5kb21pemUoaW1hZ2VDb3VudGVyLCBpbWFnZUNvdW50ZXIgKyAxNSldfVwiKWApO1xuICAgIC8vIFRoaXMgZWxlbWVudCB3aWxsIGhvbGQgYWxsIHRleHQgYW5kIGltYWdlKHMpIHJlZmVycmluZyB0byB0aGUgY291bnRyeSByZXN1bHRcbiAgICBsZXQgY291bnRyeUNhcmRFbGVtZW50ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiY2FyZFwiKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIG5hbWUgb2YgdGhlIGNvdW50cnlcbiAgICBsZXQgY291bnRyeU5hbWVFbGVtZW50ID0gJChcIjxoMj5cIilcbiAgICAgIC5hZGRDbGFzcyhcImNvdW50cnktbmFtZVwiKVxuICAgICAgLnRleHQoYCR7Y291bnRyeS5jb3VudHJ5TmFtZX1gKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjb3VudHJ5LCB0YWtlbiBmcm9tIHRoZSB3aWtpIEFQSVxuICAgIGxldCBjb3VudHJ5RGVzY3JpcHRpb25FbGVtZW50ID0gJChcIjxwPlwiKVxuICAgICAgLmFkZENsYXNzKFwid2lraS10ZXh0XCIpXG4gICAgICAudGV4dCh0cmF2ZWxBcHAud2lraUV4dHJhY3RbY291bnRyeUNvdW50ZXJdKTtcbiAgICBjb3VudHJ5Q291bnRlcisrO1xuICAgIC8vIFRoaXMgZWxlbWVudCBob2xkcyB0aGUgdGV4dCBmb3IgZWFjaCBvZiB0aGUgdGhyZWUgc3RhdHMgd2UncmUgZGlzcGxheWluZ1xuICAgIGxldCBzdGF0TGlzdEVsZW1lbnQgPSAkKFwiPHVsPlwiKS5hZGRDbGFzcyhcInN0YXQtbGlzdFwiKTtcbiAgICAvLyBUaGlzIGVsZW1lbnQgaG9sZHMgdGhlIGNvbnRhaW5lciB0aGF0IHdpbGwgaG9sZCB0aGUgc21hbGwgcGl4YSBjb3VudHJ5IGltYWdlXG4gICAgbGV0IHNtYWxsUGl4YUNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJjb3VudHJ5LWltYWdlLWNvbnRhaW5lclwiKTtcbiAgICAvLyBUaGlzIG5ldyBpbWFnZSBjb3VudGVyIGdldHMgdGhlIGltYWdlIGluIHRoZSBhcnJheSB0aGF0IGZvbGxvd3MgdGhlIGZpcnN0IGltYWdlIGJlaW5nIHVzZWQgYXMgYSBiYWNrZ3JvdW5kIGltYWdlIGZvciB0aGUgY2FyZFxuICAgIC8vIFRoaXMgaW1hZ2UgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBpbWFnZSBjb250YWluZXJcbiAgICBsZXQgc21hbGxQaXhhSW1hZ2UgPSAkKFwiPGltZz5cIilcbiAgICAgIC5hZGRDbGFzcyhcImNvdW50cnktaW1hZ2VcIilcbiAgICAgIC5hdHRyKHtcbiAgICAgICAgc3JjOiBgJHt0cmF2ZWxBcHAuaW1hZ2VBcnJheVt0cmF2ZWxBcHAucmFuZG9taXplKGltYWdlQ291bnRlciwgaW1hZ2VDb3VudGVyICsgMTUpXX1gLFxuICAgICAgICBhbHQ6IGBTY2VuaWMgaW1hZ2Ugb2YgJHtjb3VudHJ5LmNvdW50cnlOYW1lfS4gSW1hZ2UgdGFncyBpbmNsdWRlICR7dHJhdmVsQXBwLmltYWdlVGV4dEFycmF5fS5gXG4gICAgICB9KTtcbiAgICAvLyBBZGQgMTUgdG8gdGhlIGltYWdlIGNvdW50ZXIgZW5zdXJlcyB0aGF0IGV2ZXJ5IGl0ZXJhdGlvbiB0aHJvdWdoIHRoZSBmb3JFYWNoIHdpbGwgYWRkIGltYWdlcyB0byB0aGUgYXNzb2NpYXRlZCBjb3V0cmllc1xuICAgIGltYWdlQ291bnRlciArPSAxNTtcbiAgICAvL0FwcGVuZCB0aGUgY291bnRyeSBpbWFnZSB0byBpdHMgY29udGFpbmVyXG4gICAgc21hbGxQaXhhQ29udGFpbmVyRWxlbWVudC5hcHBlbmQoc21hbGxQaXhhSW1hZ2UpO1xuICAgIC8vIEFwcGVuZCB0aGUgY291bnRyeSBuYW1lIDxoMj4sIHdpa2kgdGV4dCA8cD4sIHN0YXQgbGlzdCA8dWw+IGFuZCBpbWFnZSBjb250YWluZXIgPGRpdj4gdG8gdGhlIGNhcmQgPGRpdj4uXG4gICAgY291bnRyeUNhcmRFbGVtZW50LmFwcGVuZChcbiAgICAgIGNvdW50cnlOYW1lRWxlbWVudCxcbiAgICAgIGNvdW50cnlEZXNjcmlwdGlvbkVsZW1lbnQsXG4gICAgICBzdGF0TGlzdEVsZW1lbnQsXG4gICAgICBzbWFsbFBpeGFDb250YWluZXJFbGVtZW50XG4gICAgKTtcbiAgICAvLyBBcHBlbmQgdGhlIGNhcmQgZGl2IHRvIHRoZSByZXN1bHQtY29udGFpbmVyXG4gICAgY291bnRyeUNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKGNvdW50cnlDYXJkRWxlbWVudCk7XG4gICAgLy9BcHBlbmQgdGhlIHJlc3VsdC1jb250YWluZXIgdG8gdGhlIHJlc3VsdHMgc2VjdGlvbiBlbGVtZW50IG9uIG91ciBwYWdlXG4gICAgJChcIi5yZXN1bHRzXCIpLmFwcGVuZChjb3VudHJ5Q29udGFpbmVyRWxlbWVudCk7XG5cbiAgICAvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSBcInN0YXRDaG9pY2VzXCIgYW5kIHNldCB1cCAzIGluZm9ybWF0aW9uOlxuICAgIC8vIDEuIHRpdGxlIG9mIHN0YXQgKHRha2VuIGZyb20gdHJhdmVsQXBwLnN0YXROYW1lc0FycmF5KVxuICAgIC8vIDIuIHZhbHVlIG9mIHN0YXQgKHRha2VuIGZyb20gcmVzdWx0cyBvYmplY3QpXG4gICAgLy8gMy4gZGVzY3JpcHRpb24gb2Ygc3RhdCAodGFrZW4gZnJvbSB0cmF2ZWxBcHAuc3RhdERlc2NyaXB0aW9uQXJyYXkpXG4gICAgbGV0IHN0YXRDb3VudGVyID0gMDtcbiAgICBzdGF0Q2hvaWNlcy5mb3JFYWNoKHN0YXQgPT4ge1xuICAgICAgbGV0IHN0YXRUaXRsZSA9IHRyYXZlbEFwcC5zdGF0TmFtZXNBcnJheVtzdGF0Q291bnRlcl07XG4gICAgICBsZXQgc3RhdFZhbHVlID0gY291bnRyeVt0cmF2ZWxBcHAuc3RhdENvZGVBcnJheVtzdGF0Q291bnRlcl1dO1xuICAgICAgbGV0IHN0YXREZXNjcmlwdGlvbiA9IHRyYXZlbEFwcC5zdGF0RGVzY3JpcHRpb25BcnJheVtzdGF0Q291bnRlcl07XG4gICAgICBzdGF0Q291bnRlcisrO1xuICAgICAgLy8gVGhpcyBsaXN0IGl0ZW0gZWxlbWVudCB3aWxsIGhvbGQgc3RhdCBpbmZvcm1hdGlvblxuICAgICAgbGV0IHN0YXRMaXN0SXRlbUVsZW1lbnQgPSAkKFwiPGxpPlwiKS5hZGRDbGFzcyhcInN0YXQtbGlzdF9faXRlbVwiKTtcbiAgICAgIC8vIFRoaXMgZGl2IHdpbGwgaG9sZCB0aGUgc3RhdCB0aXRsZSBhbmQgcXVlc3Rpb24gbWFyayBpY29uXG4gICAgICBsZXQgc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnQgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1fX3RpdGxlLWljb24tY29udGFpbmVyXCIpO1xuICAgICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIHRoZSBzdGF0IHRpdGxlIGFuZCB2YWx1ZVxuICAgICAgbGV0IHN0YXRUaXRsZUVsZW1lbnQgPSAkKFwiPGg0PlwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJzdGF0LWxpc3RfX2l0ZW1fX3RpdGxlLWljb24tY29udGFpbmVyX190aXRsZS1udW1iZXJcIilcbiAgICAgICAgLnRleHQoYCR7c3RhdFRpdGxlfTogJHt0cmF2ZWxBcHAubnVtYmVyV2l0aENvbW1hcyhzdGF0VmFsdWUpfWApO1xuICAgICAgLy8gVGhpcyBxdWVzdGlvbiBtYXJrIGljb24gd2lsbCBzaXQgbmV4dCB0byB0aGUgc3RhdFRpdGxlRWxlbWVudCBhbmQgd2hlbiBjbGlja2VkL2hvdmVyb3Zlciwgd2lsbCBkaXNwbGF5IHRoZSBzdGF0IGRlc2NyaXB0aW9uXG4gICAgICBsZXQgc3RhdEhvdmVySWNvbkVsZW1lbnQgPSBgPGkgY2xhc3M9XCJzdGF0LWxpc3RfX2l0ZW1fX3RpdGxlLWljb24tY29udGFpbmVyX19pY29uIGZhciBmYS1xdWVzdGlvbi1jaXJjbGVcIj48L2k+YDtcbiAgICAgIC8vIGFwcGVuZCB0aGUgc3RhdCB0aXRsZSBhbmQgaWNvbiB0byB0aGUgc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnRcbiAgICAgIHN0YXRUaXRsZUljb25Db250YWluZXJFbGVtZW50LmFwcGVuZChzdGF0VGl0bGVFbGVtZW50LCBzdGF0SG92ZXJJY29uRWxlbWVudCk7XG4gICAgICAvLyBUaGlzIGRpdiB3aWxsIGhvbGQgdGhlIHN0YXQgZGVzY3JpcHRpb24gYW5kIGlzIGEgc2libGluZyBvZiB0aGUgc3RhdFRpdGxlSWNvbkNvbnRhaW5lci5cbiAgICAgIGxldCBzdGF0RGVzY3JpcHRpb25Db250YWluZXJFbGVtZW50ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwic3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXIgZGlzcGxheS1ub25lXCIpO1xuICAgICAgLy8gVGhpcyBlbGVtZW50IGhvbGRzIHRoZSBzdGF0IGRlc2NyaXB0aW9uXG4gICAgICBsZXQgc3RhdERlc2NyaXB0aW9uRWxlbWVudCA9ICQoXCI8cD5cIilcbiAgICAgICAgLmFkZENsYXNzKFwic3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXJfX2Rlc2NyaXB0aW9uXCIpXG4gICAgICAgIC50ZXh0KHN0YXREZXNjcmlwdGlvbik7XG4gICAgICAvLyBBcHBlbmQgdGhlIHN0YXREZXNjcmlwdGlvbkVsZW1lbnQgdG8gdGhlIHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnRcbiAgICAgIHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKHN0YXREZXNjcmlwdGlvbkVsZW1lbnQpO1xuICAgICAgLy8gQXBwZW5kIHRoZSB0d28gc3RhdCBkaXYgY29udGFpbmVycyB0byB0aGUgPGxpPlxuICAgICAgc3RhdExpc3RJdGVtRWxlbWVudC5hcHBlbmQoc3RhdFRpdGxlSWNvbkNvbnRhaW5lckVsZW1lbnQsIHN0YXREZXNjcmlwdGlvbkNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgLy8gQXBwZW5kIHRoZSA8bGk+cyB0byB0aGUgPHVsPlxuICAgICAgc3RhdExpc3RFbGVtZW50LmFwcGVuZChzdGF0TGlzdEl0ZW1FbGVtZW50KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdHJhdmVsQXBwLmZpbmFsRGlzcGxheSgpO1xufTtcblxuLyogIDcuMSBPbmNlIGFsbCBpbWFnZXMgYXJlIGxvYWRlZCBhcyBiYWNrZ3JvdW5kIGltYWdlcyBvciByZWd1bGFyIGltYWdlcywgZGlzcGxheSB0aGUgZmluYWwgcmVzdWx0cyB3aXRob3V0IFwibGFnXCIqL1xudHJhdmVsQXBwLmZpbmFsRGlzcGxheSA9ICgpID0+IHtcbiAgJChcIi5yZXN1bHRzXCIpLndhaXRGb3JJbWFnZXMoZnVuY3Rpb24oKSB7XG4gICAgJChcIi5yZXN1bHRzXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcblxuICAgICQoXCJodG1sLCBib2R5XCIpXG4gICAgICAuc3RvcCgpXG4gICAgICAuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChcIi5yZXN1bHRzXCIpLm9mZnNldCgpLnRvcCB9LCA5MDAsIFwic3dpbmdcIik7XG5cbiAgICAvLyByZW1vdmUgbG9hZGVyIGFuZCBkaXNwbGF5IHN1Ym1pdCByYW5raW5nIGJ1dHRvbiBhZ2FpblxuICAgIGxldCBtYXJrVXBCdXR0b24gPSBgPGxpPjxidXR0b24gY2xhc3M9XCJ1c2VyLXN1Ym1pdCBidG5cIj5TdWJtaXQgUmFua2luZzwvYnV0dG9uPjwvbGk+YDtcbiAgICAkKFwiLmNob2ljZXNcIilcbiAgICAgIC5maW5kKFwibGk6bGFzdC1jaGlsZFwiKVxuICAgICAgLmh0bWwobWFya1VwQnV0dG9uKTtcblxuICAgIC8qIEZMSUNLSVRZICovXG4gICAgJChcIi5yZXN1bHRzXCIpLmZsaWNraXR5KHtcbiAgICAgIC8vIG9wdGlvbnNcbiAgICAgIGNlbGxBbGlnbjogXCJsZWZ0XCIsXG4gICAgICBjb250YWluOiB0cnVlLFxuICAgICAgYXV0b1BsYXk6IDUwMDAsXG4gICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICB3YXRjaENTUzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdHJhdmVsQXBwLmZsaWNraXR5T24gPT09IHRydWU7XG4gIH0pO1xufTtcblxuLy8gNy4yIE9uIGhvdmVyIG9yIGNsaWNrIG92ZXIgdGhlIHF1ZXN0aW9uIG1hcmsgaWNvbiwgZGlzcGxheSB0aGUgc3RhdCBkZXNjcmlwdGlvblxudHJhdmVsQXBwLmRpc3BsYXlTdGF0RGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgJChcIi5yZXN1bHRzXCIpLm9uKFwiY2xpY2tcIiwgXCIuc3RhdC1saXN0X19pdGVtX190aXRsZS1pY29uLWNvbnRhaW5lcl9faWNvblwiLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5wYXJlbnRzKFwiLnN0YXQtbGlzdF9faXRlbVwiKVxuICAgICAgICAuZmluZChcIi5zdGF0LWxpc3RfX2l0ZW1fX2Rlc2NyaXB0aW9uLWNvbnRhaW5lclwiKVxuICAgICAgICAuaGFzQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIikgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICAkKFwiLnJlc3VsdHNcIilcbiAgICAgICAgLmZpbmQoXCIuc3RhdC1saXN0X19pdGVtX19kZXNjcmlwdGlvbi1jb250YWluZXJcIilcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5yZXN1bHRzXCIpXG4gICAgICAgIC5maW5kKFwiLnN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbiAgICAgICQodGhpcylcbiAgICAgICAgLnBhcmVudHMoXCIuc3RhdC1saXN0X19pdGVtXCIpXG4gICAgICAgIC5maW5kKFwiLnN0YXQtbGlzdF9faXRlbV9fZGVzY3JpcHRpb24tY29udGFpbmVyXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBob2xkcyBhbGwgb3VyIGV2ZW50cyBmdW50aW9uc1xudHJhdmVsQXBwLmV2ZW50c0Z1bmN0aW9uID0gKCkgPT4ge1xuICB0cmF2ZWxBcHAuZ2V0VXNlclB1cnBvc2UoKTtcbiAgdHJhdmVsQXBwLmdldFN0YXJ0ZWQoKTtcbiAgdHJhdmVsQXBwLnRyYW5zZm9ybVNWRygpO1xuICB0cmF2ZWxBcHAuZGlzcGxheVN0YXREZXNjcmlwdGlvbigpO1xufTtcblxuLy8gSW5pdCBmdW5jdGlvbiB0byBob2xkIGFsbCBvdXIgZnVuY3Rpb25zIGluIG9yZGVyXG50cmF2ZWxBcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBzd2FsKHtcbiAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICB0aXRsZTogXCJBUEkgVW5hdmFpbGFibGVcIixcbiAgICB0ZXh0OlxuICAgICAgXCJBcyBvZiBTZXB0ZW1iZXIgMTl0aCAyMDE4LCB0aGUgSU5Rc3RhdHMgQVBJICh3aGljaCBpcyB1c2VkIHRvIGNhbGN1bGF0ZSB0aGUgdHJhdmVsIHJlY29tbWVuZGF0aW9ucykgaXMgdGVtcG9yYXJpbHkgZG93bi4gVGhlIHJlc3VsdHMgZnVuY3Rpb25hbGl0eSBpcyB0aGVyZWZvcmUgbm90IGF2YWlsYWJsZSB1bnRpbCBmdXJ0aGVyIG5vdGljZS4gV2Ugc2luY2VyZWx5IGFwb2xvZ2l6ZSBmb3IgdGhpcyBpbmNvbnZlbmllbmNlIGFuZCBhc2sgeW91IHRvIGNvbWUgYmFjayB0byBvdXIgYXBwbGljYXRpb24gaW4gYSBuZWFyIGZ1dHVyZS5cIlxuICB9KTtcbiAgdHJhdmVsQXBwLmV2ZW50c0Z1bmN0aW9uKCk7XG4gIHRyYXZlbEFwcC5zbGlkZURyYWcoKTtcbn07XG5cbi8vIERvY3VtZW50IFJlYWR5IHRvIGNhbGwgb3VyIGluaXQoKSBmdW5jdGlvbiBhbmQgc3RhcnQgdGhlIGFwcFxuJChmdW5jdGlvbigpIHtcbiAgdHJhdmVsQXBwLmluaXQoKTtcbn0pO1xuXG4vKiA4LiBFWFRSQSBGVU5DVElPTlMgVVNFRCBUSFJPVUdIT1VUIEFQUCAqL1xuXG4vLyA4LjEgU29ydGFibGUgZnVuY3Rpb25hbGl0eSBmb3IgY3JpdGVyaWFzXG50cmF2ZWxBcHAuc2xpZGVEcmFnID0gKCkgPT4ge1xuICAkKFwiLmNob2ljZXNcIilcbiAgICAuc29ydGFibGUoe1xuICAgICAgY29ubmVjdFdpdGg6IFwiLnNvcnRhYmxlXCIsXG4gICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgcmV2ZXJ0OiB0cnVlLFxuICAgICAgaGVscGVyOiBcImNsb25lXCIsXG4gICAgICBjb250YWlubWVudDogXCIuY3JpdGVyaWFzLWNvbnRhaW5lclwiXG4gICAgfSlcbiAgICAuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcbiAgJChcInVsLCBsaVwiKS5kaXNhYmxlU2VsZWN0aW9uKCk7XG59O1xuXG4vLyA4LjIgUmFuZG9taXplciBmdW5jdGlvbiB0byBzZWxlY3QgcmFuZG9tIGltYWdlcyB0byBkaXNwbGF5XG50cmF2ZWxBcHAucmFuZG9taXplID0gKHN0YXJ0aW5nTnVtLCBlbmRpbmdOdW0pID0+IHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbmRpbmdOdW0gLSBzdGFydGluZ051bSkpICsgc3RhcnRpbmdOdW07XG59O1xuXG4vLyA4LjMgRXZlbnQgbGlzdGVuZXIgdG8gdHJhbnNmb3JtIFNWR3MgaW50byBpbmxpbmUgU1ZHUyB0byBiZSBhYmxlIHRvIGNoYW5nZSB0aGVpciBjb2xvcnMgd2l0aCBjc3MgZmlsbFxudHJhdmVsQXBwLnRyYW5zZm9ybVNWRyA9ICgpID0+IHtcbiAgalF1ZXJ5KFwiaW1nLnN2Z1wiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciAkaW1nID0galF1ZXJ5KHRoaXMpO1xuICAgIHZhciBpbWdJRCA9ICRpbWcuYXR0cihcImlkXCIpO1xuICAgIHZhciBpbWdDbGFzcyA9ICRpbWcuYXR0cihcImNsYXNzXCIpO1xuICAgIHZhciBpbWdVUkwgPSAkaW1nLmF0dHIoXCJzcmNcIik7XG5cbiAgICBqUXVlcnkuZ2V0KFxuICAgICAgaW1nVVJMLFxuICAgICAgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAvLyBHZXQgdGhlIFNWRyB0YWcsIGlnbm9yZSB0aGUgcmVzdFxuICAgICAgICB2YXIgJHN2ZyA9IGpRdWVyeShkYXRhKS5maW5kKFwic3ZnXCIpO1xuXG4gICAgICAgIC8vIEFkZCByZXBsYWNlZCBpbWFnZSdzIElEIHRvIHRoZSBuZXcgU1ZHXG4gICAgICAgIGlmICh0eXBlb2YgaW1nSUQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAkc3ZnID0gJHN2Zy5hdHRyKFwiaWRcIiwgaW1nSUQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCByZXBsYWNlZCBpbWFnZSdzIGNsYXNzZXMgdG8gdGhlIG5ldyBTVkdcbiAgICAgICAgaWYgKHR5cGVvZiBpbWdDbGFzcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICRzdmcgPSAkc3ZnLmF0dHIoXCJjbGFzc1wiLCBpbWdDbGFzcyArIFwiIHJlcGxhY2VkLXN2Z1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbnkgaW52YWxpZCBYTUwgdGFncyBhcyBwZXIgaHR0cDovL3ZhbGlkYXRvci53My5vcmdcbiAgICAgICAgJHN2ZyA9ICRzdmcucmVtb3ZlQXR0cihcInhtbG5zOmFcIik7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHZpZXdwb3J0IGlzIHNldCwgaWYgdGhlIHZpZXdwb3J0IGlzIG5vdCBzZXQgdGhlIFNWRyB3b250J3Qgc2NhbGUuXG4gICAgICAgIGlmICghJHN2Zy5hdHRyKFwidmlld0JveFwiKSAmJiAkc3ZnLmF0dHIoXCJoZWlnaHRcIikgJiYgJHN2Zy5hdHRyKFwid2lkdGhcIikpIHtcbiAgICAgICAgICAkc3ZnLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgJHN2Zy5hdHRyKFwiaGVpZ2h0XCIpICsgXCIgXCIgKyAkc3ZnLmF0dHIoXCJ3aWR0aFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXBsYWNlIGltYWdlIHdpdGggbmV3IFNWR1xuICAgICAgICAkaW1nLnJlcGxhY2VXaXRoKCRzdmcpO1xuICAgICAgfSxcbiAgICAgIFwieG1sXCJcbiAgICApO1xuICB9KTtcbn07XG5cbi8qIDguNCBUUkFOU0ZPUk0gU1RSSU5HIE5VTUJFUlMgSU5UTyBTRVBBUkFURUQgU1RSSU5HUyBXSVRIIFBST1BFUiBDT01NQVMgRk9SIEVBQ0ggVEhPVVNBTkQgVU5JVCAqL1xudHJhdmVsQXBwLm51bWJlcldpdGhDb21tYXMgPSBzdGF0ID0+IHtcbiAgcmV0dXJuIHN0YXQudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG59O1xuIiwiLyoqXG4gKiBGYXN0UHJpb3JpdHlRdWV1ZS5qcyA6IGEgZmFzdCBoZWFwLWJhc2VkIHByaW9yaXR5IHF1ZXVlICBpbiBKYXZhU2NyaXB0LlxuICogKGMpIHRoZSBhdXRob3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICpcbiAqIFNwZWVkLW9wdGltaXplZCBoZWFwLWJhc2VkIHByaW9yaXR5IHF1ZXVlIGZvciBtb2Rlcm4gYnJvd3NlcnMgYW5kIEphdmFTY3JpcHQgZW5naW5lcy5cbiAqXG4gKiBVc2FnZSA6XG4gICAgICAgICBJbnN0YWxsYXRpb24gKGluIHNoZWxsLCBpZiB5b3UgdXNlIG5vZGUpOlxuICAgICAgICAgJCBucG0gaW5zdGFsbCBmYXN0cHJpb3JpdHlxdWV1ZVxuXG4gICAgICAgICBSdW5uaW5nIHRlc3QgcHJvZ3JhbSAoaW4gSmF2YVNjcmlwdCk6XG5cbiAgICAgICAgIC8vIHZhciBGYXN0UHJpb3JpdHlRdWV1ZSA9IHJlcXVpcmUoXCJmYXN0cHJpb3JpdHlxdWV1ZVwiKTsvLyBpbiBub2RlXG4gICAgICAgICB2YXIgeCA9IG5ldyBGYXN0UHJpb3JpdHlRdWV1ZSgpO1xuICAgICAgICAgeC5hZGQoMSk7XG4gICAgICAgICB4LmFkZCgwKTtcbiAgICAgICAgIHguYWRkKDUpO1xuICAgICAgICAgeC5hZGQoNCk7XG4gICAgICAgICB4LmFkZCgzKTtcbiAgICAgICAgIHgucGVlaygpOyAvLyBzaG91bGQgcmV0dXJuIDAsIGxlYXZlcyB4IHVuY2hhbmdlZFxuICAgICAgICAgeC5zaXplOyAvLyBzaG91bGQgcmV0dXJuIDUsIGxlYXZlcyB4IHVuY2hhbmdlZFxuICAgICAgICAgd2hpbGUoIXguaXNFbXB0eSgpKSB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKHgucG9sbCgpKTtcbiAgICAgICAgIH0gLy8gd2lsbCBwcmludCAwIDEgMyA0IDVcbiAgICAgICAgIHgudHJpbSgpOyAvLyAob3B0aW9uYWwpIG9wdGltaXplcyBtZW1vcnkgdXNhZ2VcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdGNvbXBhcmF0b3IgPSBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhIDwgYjtcbn07XG5cbi8vIHRoZSBwcm92aWRlZCBjb21wYXJhdG9yIGZ1bmN0aW9uIHNob3VsZCB0YWtlIGEsIGIgYW5kIHJldHVybiAqdHJ1ZSogd2hlbiBhIDwgYlxuZnVuY3Rpb24gRmFzdFByaW9yaXR5UXVldWUoY29tcGFyYXRvcikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRmFzdFByaW9yaXR5UXVldWUpKSByZXR1cm4gbmV3IEZhc3RQcmlvcml0eVF1ZXVlKGNvbXBhcmF0b3IpO1xuICB0aGlzLmFycmF5ID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuY29tcGFyZSA9IGNvbXBhcmF0b3IgfHwgZGVmYXVsdGNvbXBhcmF0b3I7XG59XG5cbi8vIGNvcHkgdGhlIHByaW9yaXR5IHF1ZXVlIGludG8gYW5vdGhlciwgYW5kIHJldHVybiBpdC4gUXVldWUgaXRlbXMgYXJlIHNoYWxsb3ctY29waWVkLlxuLy8gUnVucyBpbiBgTyhuKWAgdGltZS5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZnBxID0gbmV3IEZhc3RQcmlvcml0eVF1ZXVlKHRoaXMuY29tcGFyZSk7XG4gIGZwcS5zaXplID0gdGhpcy5zaXplO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgZnBxLmFycmF5LnB1c2godGhpcy5hcnJheVtpXSk7XG4gIH1cbiAgcmV0dXJuIGZwcTtcbn07XG5cbi8vIEFkZCBhbiBlbGVtZW50IGludG8gdGhlIHF1ZXVlXG4vLyBydW5zIGluIE8obG9nIG4pIHRpbWVcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihteXZhbCkge1xuICB2YXIgaSA9IHRoaXMuc2l6ZTtcbiAgdGhpcy5hcnJheVt0aGlzLnNpemVdID0gbXl2YWw7XG4gIHRoaXMuc2l6ZSArPSAxO1xuICB2YXIgcDtcbiAgdmFyIGFwO1xuICB3aGlsZSAoaSA+IDApIHtcbiAgICBwID0gKGkgLSAxKSA+PiAxO1xuICAgIGFwID0gdGhpcy5hcnJheVtwXTtcbiAgICBpZiAoIXRoaXMuY29tcGFyZShteXZhbCwgYXApKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5hcnJheVtpXSA9IGFwO1xuICAgIGkgPSBwO1xuICB9XG4gIHRoaXMuYXJyYXlbaV0gPSBteXZhbDtcbn07XG5cbi8vIHJlcGxhY2UgdGhlIGNvbnRlbnQgb2YgdGhlIGhlYXAgYnkgcHJvdmlkZWQgYXJyYXkgYW5kIFwiaGVhcGlmeSBpdFwiXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuaGVhcGlmeSA9IGZ1bmN0aW9uKGFycikge1xuICB0aGlzLmFycmF5ID0gYXJyO1xuICB0aGlzLnNpemUgPSBhcnIubGVuZ3RoO1xuICB2YXIgaTtcbiAgZm9yIChpID0gdGhpcy5zaXplID4+IDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdGhpcy5fcGVyY29sYXRlRG93bihpKTtcbiAgfVxufTtcblxuLy8gZm9yIGludGVybmFsIHVzZVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLl9wZXJjb2xhdGVVcCA9IGZ1bmN0aW9uKGksIGZvcmNlKSB7XG4gIHZhciBteXZhbCA9IHRoaXMuYXJyYXlbaV07XG4gIHZhciBwO1xuICB2YXIgYXA7XG4gIHdoaWxlIChpID4gMCkge1xuICAgIHAgPSAoaSAtIDEpID4+IDE7XG4gICAgYXAgPSB0aGlzLmFycmF5W3BdO1xuICAgIC8vIGZvcmNlIHdpbGwgc2tpcCB0aGUgY29tcGFyZVxuICAgIGlmICghZm9yY2UgJiYgIXRoaXMuY29tcGFyZShteXZhbCwgYXApKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5hcnJheVtpXSA9IGFwO1xuICAgIGkgPSBwO1xuICB9XG4gIHRoaXMuYXJyYXlbaV0gPSBteXZhbDtcbn07XG5cbi8vIGZvciBpbnRlcm5hbCB1c2VcbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fcGVyY29sYXRlRG93biA9IGZ1bmN0aW9uKGkpIHtcbiAgdmFyIHNpemUgPSB0aGlzLnNpemU7XG4gIHZhciBoc2l6ZSA9IHRoaXMuc2l6ZSA+Pj4gMTtcbiAgdmFyIGFpID0gdGhpcy5hcnJheVtpXTtcbiAgdmFyIGw7XG4gIHZhciByO1xuICB2YXIgYmVzdGM7XG4gIHdoaWxlIChpIDwgaHNpemUpIHtcbiAgICBsID0gKGkgPDwgMSkgKyAxO1xuICAgIHIgPSBsICsgMTtcbiAgICBiZXN0YyA9IHRoaXMuYXJyYXlbbF07XG4gICAgaWYgKHIgPCBzaXplKSB7XG4gICAgICBpZiAodGhpcy5jb21wYXJlKHRoaXMuYXJyYXlbcl0sIGJlc3RjKSkge1xuICAgICAgICBsID0gcjtcbiAgICAgICAgYmVzdGMgPSB0aGlzLmFycmF5W3JdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuY29tcGFyZShiZXN0YywgYWkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5hcnJheVtpXSA9IGJlc3RjO1xuICAgIGkgPSBsO1xuICB9XG4gIHRoaXMuYXJyYXlbaV0gPSBhaTtcbn07XG5cbi8vIGludGVybmFsXG4vLyBfcmVtb3ZlQXQoaW5kZXgpIHdpbGwgcmVtb3ZlIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBmcm9tIHRoZSBxdWV1ZSxcbi8vIHJldGFpbmluZyBiYWxhbmNlLiByZXR1cm5zIHRoZSByZW1vdmVkIGl0ZW0sIG9yIHVuZGVmaW5lZCBpZiBub3RoaW5nIGlzIHJlbW92ZWQuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuX3JlbW92ZUF0ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgaWYgKGluZGV4ID4gdGhpcy5zaXplIC0gMSB8fCBpbmRleCA8IDApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgLy8gaW1wbDE6XG4gIC8vdGhpcy5hcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAvL3RoaXMuaGVhcGlmeSh0aGlzLmFycmF5KTtcbiAgLy8gaW1wbDI6XG4gIHRoaXMuX3BlcmNvbGF0ZVVwKGluZGV4LCB0cnVlKTtcbiAgcmV0dXJuIHRoaXMucG9sbCgpO1xufTtcblxuLy8gcmVtb3ZlKG15dmFsKSB3aWxsIHJlbW92ZSBhbiBpdGVtIG1hdGNoaW5nIHRoZSBwcm92aWRlZCB2YWx1ZSBmcm9tIHRoZVxuLy8gcXVldWUsIGNoZWNrZWQgZm9yIGVxdWFsaXR5IGJ5IHVzaW5nIHRoZSBxdWV1ZSdzIGNvbXBhcmF0b3IuXG4vLyByZXR1cm4gdHJ1ZSBpZiByZW1vdmVkLCBmYWxzZSBvdGhlcndpc2UuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24obXl2YWwpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xuICAgIGlmICghdGhpcy5jb21wYXJlKHRoaXMuYXJyYXlbaV0sIG15dmFsKSAmJiAhdGhpcy5jb21wYXJlKG15dmFsLCB0aGlzLmFycmF5W2ldKSkge1xuICAgICAgLy8gaXRlbXMgbWF0Y2gsIGNvbXBhcmF0b3IgcmV0dXJucyBmYWxzZSBib3RoIHdheXMsIHJlbW92ZSBpdGVtXG4gICAgICB0aGlzLl9yZW1vdmVBdChpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBpbnRlcm5hbFxuLy8gcmVtb3ZlcyBhbmQgcmV0dXJucyBpdGVtcyBmb3Igd2hpY2ggdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1ZS5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5fYmF0Y2hSZW1vdmUgPSBmdW5jdGlvbihjYWxsYmFjaywgbGltaXQpIHtcbiAgLy8gaW5pdGlhbGl6ZSByZXR1cm4gYXJyYXkgd2l0aCBtYXggc2l6ZSBvZiB0aGUgbGltaXQgb3IgY3VycmVudCBxdWV1ZSBzaXplXG4gIHZhciByZXRBcnIgPSBuZXcgQXJyYXkobGltaXQgPyBsaW1pdCA6IHRoaXMuc2l6ZSk7XG4gIHZhciBjb3VudCA9IDA7XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLnNpemUpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCB0aGlzLnNpemUgJiYgY291bnQgPCByZXRBcnIubGVuZ3RoKSB7XG4gICAgICBpZiAoY2FsbGJhY2sodGhpcy5hcnJheVtpXSkpIHtcbiAgICAgICAgcmV0QXJyW2NvdW50XSA9IHRoaXMuX3JlbW92ZUF0KGkpO1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICAvLyBtb3ZlIHVwIGEgbGV2ZWwgaW4gdGhlIGhlYXAgaWYgd2UgcmVtb3ZlIGFuIGl0ZW1cbiAgICAgICAgaSA9IGkgPj4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9IFxuICB9XG4gIHJldEFyci5sZW5ndGggPSBjb3VudDtcbiAgcmV0dXJuIHJldEFycjtcbn1cblxuLy8gcmVtb3ZlT25lKGNhbGxiYWNrKSB3aWxsIGV4ZWN1dGUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0gb2YgdGhlIHF1ZXVlXG4vLyBhbmQgd2lsbCByZW1vdmUgdGhlIGZpcnN0IGl0ZW0gZm9yIHdoaWNoIHRoZSBjYWxsYmFjayB3aWxsIHJldHVybiB0cnVlLlxuLy8gcmV0dXJuIHRoZSByZW1vdmVkIGl0ZW0sIG9yIHVuZGVmaW5lZCBpZiBub3RoaW5nIGlzIHJlbW92ZWQuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucmVtb3ZlT25lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgdmFyIGFyciA9IHRoaXMuX2JhdGNoUmVtb3ZlKGNhbGxiYWNrLCAxKTtcbiAgcmV0dXJuIGFyci5sZW5ndGggPiAwID8gYXJyWzBdIDogdW5kZWZpbmVkO1xufTtcblxuLy8gcmVtb3ZlKGNhbGxiYWNrWywgbGltaXRdKSB3aWxsIGV4ZWN1dGUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0gb2Zcbi8vIHRoZSBxdWV1ZSBhbmQgd2lsbCByZW1vdmUgZWFjaCBpdGVtIGZvciB3aGljaCB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnVlLCB1cCB0b1xuLy8gYSBtYXggbGltaXQgb2YgcmVtb3ZlZCBpdGVtcyBpZiBzcGVjaWZpZWQgb3Igbm8gbGltaXQgaWYgdW5zcGVjaWZpZWQuXG4vLyByZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyB0aGUgcmVtb3ZlZCBpdGVtcy5cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5yZW1vdmVNYW55ID0gZnVuY3Rpb24oY2FsbGJhY2ssIGxpbWl0KSB7XG4gIHJldHVybiB0aGlzLl9iYXRjaFJlbW92ZShjYWxsYmFjaywgbGltaXQpO1xufTtcblxuLy8gTG9vayBhdCB0aGUgdG9wIG9mIHRoZSBxdWV1ZSAob25lIG9mIHRoZSBzbWFsbGVzdCBlbGVtZW50cykgd2l0aG91dCByZW1vdmluZyBpdFxuLy8gZXhlY3V0ZXMgaW4gY29uc3RhbnQgdGltZVxuLy9cbi8vIENhbGxpbmcgcGVlayBvbiBhbiBlbXB0eSBwcmlvcml0eSBxdWV1ZSByZXR1cm5zXG4vLyB0aGUgXCJ1bmRlZmluZWRcIiB2YWx1ZS5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL3VuZGVmaW5lZFxuLy9cbkZhc3RQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnNpemUgPT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgcmV0dXJuIHRoaXMuYXJyYXlbMF07XG59O1xuXG4vLyByZW1vdmUgdGhlIGVsZW1lbnQgb24gdG9wIG9mIHRoZSBoZWFwIChvbmUgb2YgdGhlIHNtYWxsZXN0IGVsZW1lbnRzKVxuLy8gcnVucyBpbiBsb2dhcml0aG1pYyB0aW1lXG4vL1xuLy8gSWYgdGhlIHByaW9yaXR5IHF1ZXVlIGlzIGVtcHR5LCB0aGUgZnVuY3Rpb24gcmV0dXJucyB0aGVcbi8vIFwidW5kZWZpbmVkXCIgdmFsdWUuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy91bmRlZmluZWRcbi8vXG4vLyBGb3IgbG9uZy1ydW5uaW5nIGFuZCBsYXJnZSBwcmlvcml0eSBxdWV1ZXMsIG9yIHByaW9yaXR5IHF1ZXVlc1xuLy8gc3RvcmluZyBsYXJnZSBvYmplY3RzLCB5b3UgbWF5ICB3YW50IHRvIGNhbGwgdGhlIHRyaW0gZnVuY3Rpb25cbi8vIGF0IHN0cmF0ZWdpYyB0aW1lcyB0byByZWNvdmVyIGFsbG9jYXRlZCBtZW1vcnkuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucG9sbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zaXplID09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciBhbnMgPSB0aGlzLmFycmF5WzBdO1xuICBpZiAodGhpcy5zaXplID4gMSkge1xuICAgIHRoaXMuYXJyYXlbMF0gPSB0aGlzLmFycmF5Wy0tdGhpcy5zaXplXTtcbiAgICB0aGlzLl9wZXJjb2xhdGVEb3duKDApO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2l6ZSAtPSAxO1xuICB9XG4gIHJldHVybiBhbnM7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGFkZHMgdGhlIHByb3ZpZGVkIHZhbHVlIHRvIHRoZSBoZWFwLCB3aGlsZSByZW1vdmluZ1xuLy8gYW5kIHJldHVybmluZyBvbmUgb2YgdGhlIHNtYWxsZXN0IGVsZW1lbnRzIChsaWtlIHBvbGwpLiBUaGUgc2l6ZSBvZiB0aGUgcXVldWVcbi8vIHRodXMgcmVtYWlucyB1bmNoYW5nZWQuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucmVwbGFjZVRvcCA9IGZ1bmN0aW9uKG15dmFsKSB7XG4gIGlmICh0aGlzLnNpemUgPT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIGFucyA9IHRoaXMuYXJyYXlbMF07XG4gIHRoaXMuYXJyYXlbMF0gPSBteXZhbDtcbiAgdGhpcy5fcGVyY29sYXRlRG93bigwKTtcbiAgcmV0dXJuIGFucztcbn07XG5cbi8vIHJlY292ZXIgdW51c2VkIG1lbW9yeSAoZm9yIGxvbmctcnVubmluZyBwcmlvcml0eSBxdWV1ZXMpXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmFycmF5ID0gdGhpcy5hcnJheS5zbGljZSgwLCB0aGlzLnNpemUpO1xufTtcblxuLy8gQ2hlY2sgd2hldGhlciB0aGUgaGVhcCBpcyBlbXB0eVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gMDtcbn07XG5cbi8vIGl0ZXJhdGUgb3ZlciB0aGUgaXRlbXMgaW4gb3JkZXIsIHBhc3MgYSBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIChpdGVtLCBpbmRleCkgYXMgYXJncy5cbi8vIFRPRE8gb25jZSB3ZSB0cmFuc3BpbGUsIHVuY29tbWVudFxuLy8gaWYgKFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3IpIHtcbi8vICAgRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiooKSB7XG4vLyAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm47XG4vLyAgICAgdmFyIGZwcSA9IHRoaXMuY2xvbmUoKTtcbi8vICAgICB3aGlsZSAoIWZwcS5pc0VtcHR5KCkpIHtcbi8vICAgICAgIHlpZWxkIGZwcS5wb2xsKCk7XG4vLyAgICAgfVxuLy8gICB9O1xuLy8gfVxuRmFzdFByaW9yaXR5UXVldWUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICBpZiAodGhpcy5pc0VtcHR5KCkgfHwgdHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHJldHVybjtcbiAgdmFyIGkgPSAwO1xuICB2YXIgZnBxID0gdGhpcy5jbG9uZSgpO1xuICB3aGlsZSAoIWZwcS5pc0VtcHR5KCkpIHtcbiAgICBjYWxsYmFjayhmcHEucG9sbCgpLCBpKyspO1xuICB9XG59O1xuXG4vLyByZXR1cm4gdGhlIGsgJ3NtYWxsZXN0JyBlbGVtZW50cyBvZiB0aGUgcXVldWVcbi8vIHJ1bnMgaW4gTyhrIGxvZyBrKSB0aW1lXG4vLyB0aGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIHJlcGVhdGVkbHkgY2FsbGluZyBwb2xsLCBidXRcbi8vIGl0IGhhcyBhIGJldHRlciBjb21wdXRhdGlvbmFsIGNvbXBsZXhpdHksIHdoaWNoIGNhbiBiZVxuLy8gaW1wb3J0YW50IGZvciBsYXJnZSBkYXRhIHNldHMuXG5GYXN0UHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUua1NtYWxsZXN0ID0gZnVuY3Rpb24oaykge1xuICBpZiAodGhpcy5zaXplID09IDApIHJldHVybiBbXTtcbiAgdmFyIGNvbXBhcmF0b3IgPSB0aGlzLmNvbXBhcmU7XG4gIHZhciBhcnIgPSB0aGlzLmFycmF5XG4gIHZhciBmcHEgPSBuZXcgRmFzdFByaW9yaXR5UXVldWUoZnVuY3Rpb24oYSxiKXtcbiAgIHJldHVybiBjb21wYXJhdG9yKGFyclthXSxhcnJbYl0pO1xuICB9KTtcbiAgayA9IE1hdGgubWluKHRoaXMuc2l6ZSwgayk7XG4gIHZhciBzbWFsbGVzdCA9IG5ldyBBcnJheShrKTtcbiAgdmFyIGogPSAwO1xuICBmcHEuYWRkKDApO1xuICB3aGlsZSAoaiA8IGspIHtcbiAgICB2YXIgc21hbGwgPSBmcHEucG9sbCgpO1xuICAgIHNtYWxsZXN0W2orK10gPSB0aGlzLmFycmF5W3NtYWxsXTtcbiAgICB2YXIgbCA9IChzbWFsbCA8PCAxKSArIDE7XG4gICAgdmFyIHIgPSBsICsgMTtcbiAgICBpZiAobCA8IHRoaXMuc2l6ZSkgZnBxLmFkZChsKTtcbiAgICBpZiAociA8IHRoaXMuc2l6ZSkgZnBxLmFkZChyKTtcbiAgfVxuICByZXR1cm4gc21hbGxlc3Q7XG59XG5cbi8vIGp1c3QgZm9yIGlsbHVzdHJhdGlvbiBwdXJwb3Nlc1xudmFyIG1haW4gPSBmdW5jdGlvbigpIHtcbiAgLy8gbWFpbiBjb2RlXG4gIHZhciB4ID0gbmV3IEZhc3RQcmlvcml0eVF1ZXVlKGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYSA8IGI7XG4gIH0pO1xuICB4LmFkZCgxKTtcbiAgeC5hZGQoMCk7XG4gIHguYWRkKDUpO1xuICB4LmFkZCg0KTtcbiAgeC5hZGQoMyk7XG4gIHdoaWxlICgheC5pc0VtcHR5KCkpIHtcbiAgICBjb25zb2xlLmxvZyh4LnBvbGwoKSk7XG4gIH1cbn07XG5cbmlmIChyZXF1aXJlLm1haW4gPT09IG1vZHVsZSkge1xuICBtYWluKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmFzdFByaW9yaXR5UXVldWU7XG4iLCIvKiFcbiogc3dlZXRhbGVydDIgdjcuMjYuMjhcbiogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5Td2VldGFsZXJ0MiA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxudmFyIGNvbnNvbGVQcmVmaXggPSAnU3dlZXRBbGVydDI6Jztcbi8qKlxuICogRmlsdGVyIHRoZSB1bmlxdWUgdmFsdWVzIGludG8gYSBuZXcgYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqL1xuXG52YXIgdW5pcXVlQXJyYXkgPSBmdW5jdGlvbiB1bmlxdWVBcnJheShhcnIpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlc3VsdC5pbmRleE9mKGFycltpXSkgPT09IC0xKSB7XG4gICAgICByZXN1bHQucHVzaChhcnJbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBDb252ZXJ0IE5vZGVMaXN0IHRvIEFycmF5XG4gKiBAcGFyYW0gbm9kZUxpc3RcbiAqL1xuXG52YXIgdG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkobm9kZUxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVMaXN0KTtcbn07XG4vKipcbiogQ29udmVydHMgYGlucHV0T3B0aW9uc2AgaW50byBhbiBhcnJheSBvZiBgW3ZhbHVlLCBsYWJlbF1gc1xuKiBAcGFyYW0gaW5wdXRPcHRpb25zXG4qL1xuXG52YXIgZm9ybWF0SW5wdXRPcHRpb25zID0gZnVuY3Rpb24gZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnICYmIGlucHV0T3B0aW9ucyBpbnN0YW5jZW9mIE1hcCkge1xuICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5rZXlzKGlucHV0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXN1bHQucHVzaChba2V5LCBpbnB1dE9wdGlvbnNba2V5XV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgd2FybmluZ3NcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cblxudmFyIHdhcm4gPSBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgY29uc29sZS53YXJuKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcbi8qKlxuICogU3RhbmRhcmRpc2UgY29uc29sZSBlcnJvcnNcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cblxudmFyIGVycm9yID0gZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICBjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcbi8qKlxuICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcyA9IFtdO1xuLyoqXG4gKiBTaG93IGEgY29uc29sZSB3YXJuaW5nLCBidXQgb25seSBpZiBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHNob3duXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciB3YXJuT25jZSA9IGZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgaWYgKCEocHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSkgIT09IC0xKSkge1xuICAgIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHdhcm4obWVzc2FnZSk7XG4gIH1cbn07XG4vKipcbiAqIElmIGBhcmdgIGlzIGEgZnVuY3Rpb24sIGNhbGwgaXQgKHdpdGggbm8gYXJndW1lbnRzIG9yIGNvbnRleHQpIGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAqIE90aGVyd2lzZSwganVzdCBwYXNzIHRoZSB2YWx1ZSB0aHJvdWdoXG4gKiBAcGFyYW0gYXJnXG4gKi9cblxudmFyIGNhbGxJZkZ1bmN0aW9uID0gZnVuY3Rpb24gY2FsbElmRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKCkgOiBhcmc7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiBpc1RoZW5hYmxlKGFyZykge1xuICByZXR1cm4gX3R5cGVvZihhcmcpID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYXJnLnRoZW4gPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgRGlzbWlzc1JlYXNvbiA9IE9iamVjdC5mcmVlemUoe1xuICBjYW5jZWw6ICdjYW5jZWwnLFxuICBiYWNrZHJvcDogJ292ZXJsYXknLFxuICBjbG9zZTogJ2Nsb3NlJyxcbiAgZXNjOiAnZXNjJyxcbiAgdGltZXI6ICd0aW1lcidcbn0pO1xuXG52YXIgdmVyc2lvbiA9IFwiNy4yNi4yOFwiO1xuXG52YXIgYXJnc1RvUGFyYW1zID0gZnVuY3Rpb24gYXJnc1RvUGFyYW1zKGFyZ3MpIHtcbiAgdmFyIHBhcmFtcyA9IHt9O1xuXG4gIHN3aXRjaCAoX3R5cGVvZihhcmdzWzBdKSkge1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBfZXh0ZW5kcyhwYXJhbXMsIGFyZ3NbMF0pO1xuXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBbJ3RpdGxlJywgJ2h0bWwnLCAndHlwZSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gICAgICAgIHN3aXRjaCAoX3R5cGVvZihhcmdzW2luZGV4XSkpIHtcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgcGFyYW1zW25hbWVdID0gYXJnc1tpbmRleF07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBcIi5jb25jYXQobmFtZSwgXCIhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiLCBnb3QgXCIpLmNvbmNhdChfdHlwZW9mKGFyZ3NbaW5kZXhdKSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbXM7XG59O1xuXG4vKipcbiAqIEFkYXB0IGEgbGVnYWN5IGlucHV0VmFsaWRhdG9yIGZvciB1c2Ugd2l0aCBleHBlY3RSZWplY3Rpb25zPWZhbHNlXG4gKi9cbnZhciBhZGFwdElucHV0VmFsaWRhdG9yID0gZnVuY3Rpb24gYWRhcHRJbnB1dFZhbGlkYXRvcihsZWdhY3lWYWxpZGF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGFkYXB0ZWRJbnB1dFZhbGlkYXRvcihpbnB1dFZhbHVlLCBleHRyYVBhcmFtcykge1xuICAgIHJldHVybiBsZWdhY3lWYWxpZGF0b3IuY2FsbCh0aGlzLCBpbnB1dFZhbHVlLCBleHRyYVBhcmFtcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sIGZ1bmN0aW9uICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgIHJldHVybiB2YWxpZGF0aW9uRXJyb3I7XG4gICAgfSk7XG4gIH07XG59O1xuXG52YXIgc3dhbFByZWZpeCA9ICdzd2FsMi0nO1xudmFyIHByZWZpeCA9IGZ1bmN0aW9uIHByZWZpeChpdGVtcykge1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBpdGVtcykge1xuICAgIHJlc3VsdFtpdGVtc1tpXV0gPSBzd2FsUHJlZml4ICsgaXRlbXNbaV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBzd2FsQ2xhc3NlcyA9IHByZWZpeChbJ2NvbnRhaW5lcicsICdzaG93bicsICdoZWlnaHQtYXV0bycsICdpb3NmaXgnLCAncG9wdXAnLCAnbW9kYWwnLCAnbm8tYmFja2Ryb3AnLCAndG9hc3QnLCAndG9hc3Qtc2hvd24nLCAndG9hc3QtY29sdW1uJywgJ2ZhZGUnLCAnc2hvdycsICdoaWRlJywgJ25vYW5pbWF0aW9uJywgJ2Nsb3NlJywgJ3RpdGxlJywgJ2hlYWRlcicsICdjb250ZW50JywgJ2FjdGlvbnMnLCAnY29uZmlybScsICdjYW5jZWwnLCAnZm9vdGVyJywgJ2ljb24nLCAnaWNvbi10ZXh0JywgJ2ltYWdlJywgJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ2xhYmVsJywgJ3RleHRhcmVhJywgJ2lucHV0ZXJyb3InLCAndmFsaWRhdGlvbmVycm9yJywgJ3Byb2dyZXNzc3RlcHMnLCAnYWN0aXZlcHJvZ3Jlc3NzdGVwJywgJ3Byb2dyZXNzY2lyY2xlJywgJ3Byb2dyZXNzbGluZScsICdsb2FkaW5nJywgJ3N0eWxlZCcsICd0b3AnLCAndG9wLXN0YXJ0JywgJ3RvcC1lbmQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0JywgJ2NlbnRlcicsICdjZW50ZXItc3RhcnQnLCAnY2VudGVyLWVuZCcsICdjZW50ZXItbGVmdCcsICdjZW50ZXItcmlnaHQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdib3R0b20tZW5kJywgJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICdncm93LXJvdycsICdncm93LWNvbHVtbicsICdncm93LWZ1bGxzY3JlZW4nXSk7XG52YXIgaWNvblR5cGVzID0gcHJlZml4KFsnc3VjY2VzcycsICd3YXJuaW5nJywgJ2luZm8nLCAncXVlc3Rpb24nLCAnZXJyb3InXSk7XG5cbnZhciBzdGF0ZXMgPSB7XG4gIHByZXZpb3VzQm9keVBhZGRpbmc6IG51bGxcbn07XG52YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG59O1xudmFyIGZvY3VzSW5wdXQgPSBmdW5jdGlvbiBmb2N1c0lucHV0KGlucHV0KSB7XG4gIGlucHV0LmZvY3VzKCk7IC8vIHBsYWNlIGN1cnNvciBhdCBlbmQgb2YgdGV4dCBpbiB0ZXh0IGlucHV0XG5cbiAgaWYgKGlucHV0LnR5cGUgIT09ICdmaWxlJykge1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzNDU5MTUvMTMzMTQyNVxuICAgIHZhciB2YWwgPSBpbnB1dC52YWx1ZTtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIGlucHV0LnZhbHVlID0gdmFsO1xuICB9XG59O1xuXG52YXIgYWRkT3JSZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIGFkZE9yUmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGFkZCkge1xuICBpZiAoIXRhcmdldCB8fCAhY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICB9XG5cbiAgY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmICh0YXJnZXQuZm9yRWFjaCkge1xuICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgYWRkID8gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGQgPyB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QpIHtcbiAgYWRkT3JSZW1vdmVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgdHJ1ZSk7XG59O1xudmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QpIHtcbiAgYWRkT3JSZW1vdmVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpO1xufTtcbnZhciBnZXRDaGlsZEJ5Q2xhc3MgPSBmdW5jdGlvbiBnZXRDaGlsZEJ5Q2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGhhc0NsYXNzKGVsZW0uY2hpbGROb2Rlc1tpXSwgY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2hpbGROb2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG52YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3coZWxlbSkge1xuICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZWxlbS5pZCA9PT0gc3dhbENsYXNzZXMuY29udGVudCA/ICdibG9jaycgOiAnZmxleCc7XG59O1xudmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07IC8vIGJvcnJvd2VkIGZyb20ganF1ZXJ5ICQoZWxlbSkuaXMoJzp2aXNpYmxlJykgaW1wbGVtZW50YXRpb25cblxudmFyIGlzVmlzaWJsZSA9IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gIHJldHVybiBlbGVtICYmIChlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xufTtcbnZhciByZW1vdmVTdHlsZVByb3BlcnR5ID0gZnVuY3Rpb24gcmVtb3ZlU3R5bGVQcm9wZXJ0eShlbGVtLCBwcm9wZXJ0eSkge1xuICBpZiAoZWxlbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgIGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICB9IGVsc2Uge1xuICAgIGVsZW0uc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgfVxufTtcblxudmFyIGdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5jb250YWluZXIpO1xufTtcblxudmFyIGVsZW1lbnRCeUNsYXNzID0gZnVuY3Rpb24gZWxlbWVudEJ5Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgcmV0dXJuIGNvbnRhaW5lciA/IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIGNsYXNzTmFtZSkgOiBudWxsO1xufTtcblxudmFyIGdldFBvcHVwID0gZnVuY3Rpb24gZ2V0UG9wdXAoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wb3B1cCk7XG59O1xudmFyIGdldEljb25zID0gZnVuY3Rpb24gZ2V0SWNvbnMoKSB7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIHJldHVybiB0b0FycmF5KHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgc3dhbENsYXNzZXMuaWNvbikpO1xufTtcbnZhciBnZXRUaXRsZSA9IGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudGl0bGUpO1xufTtcbnZhciBnZXRDb250ZW50ID0gZnVuY3Rpb24gZ2V0Q29udGVudCgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbnRlbnQpO1xufTtcbnZhciBnZXRJbWFnZSA9IGZ1bmN0aW9uIGdldEltYWdlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaW1hZ2UpO1xufTtcbnZhciBnZXRQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcygpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnByb2dyZXNzc3RlcHMpO1xufTtcbnZhciBnZXRWYWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy52YWxpZGF0aW9uZXJyb3IpO1xufTtcbnZhciBnZXRDb25maXJtQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybUJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbmZpcm0pO1xufTtcbnZhciBnZXRDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiBnZXRDYW5jZWxCdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jYW5jZWwpO1xufTtcbi8qIEBkZXByZWNhdGVkICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbnZhciBnZXRCdXR0b25zV3JhcHBlciA9IGZ1bmN0aW9uIGdldEJ1dHRvbnNXcmFwcGVyKCkge1xuICB3YXJuT25jZShcInN3YWwuZ2V0QnV0dG9uc1dyYXBwZXIoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZSwgdXNlIHN3YWwuZ2V0QWN0aW9ucygpIGluc3RlYWRcIik7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5hY3Rpb25zKTtcbn07XG52YXIgZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5hY3Rpb25zKTtcbn07XG52YXIgZ2V0Rm9vdGVyID0gZnVuY3Rpb24gZ2V0Rm9vdGVyKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuZm9vdGVyKTtcbn07XG52YXIgZ2V0Q2xvc2VCdXR0b24gPSBmdW5jdGlvbiBnZXRDbG9zZUJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNsb3NlKTtcbn07XG52YXIgZ2V0Rm9jdXNhYmxlRWxlbWVudHMgPSBmdW5jdGlvbiBnZXRGb2N1c2FibGVFbGVtZW50cygpIHtcbiAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4ID0gdG9BcnJheShnZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW3RhYmluZGV4PVwiMFwiXSknKSkgLy8gc29ydCBhY2NvcmRpbmcgdG8gdGFiaW5kZXhcbiAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBhID0gcGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpO1xuICAgIGIgPSBwYXJzZUludChiLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG5cbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfSk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qa3VwL2ZvY3VzYWJsZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4gIHZhciBvdGhlckZvY3VzYWJsZUVsZW1lbnRzID0gdG9BcnJheShnZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBpZnJhbWUsIG9iamVjdCwgZW1iZWQsIFt0YWJpbmRleD1cIjBcIl0sIFtjb250ZW50ZWRpdGFibGVdLCBhdWRpb1tjb250cm9sc10sIHZpZGVvW2NvbnRyb2xzXScpKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSAhPT0gJy0xJztcbiAgfSk7XG4gIHJldHVybiB1bmlxdWVBcnJheShmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleC5jb25jYXQob3RoZXJGb2N1c2FibGVFbGVtZW50cykpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gaXNWaXNpYmxlKGVsKTtcbiAgfSk7XG59O1xudmFyIGlzTW9kYWwgPSBmdW5jdGlvbiBpc01vZGFsKCkge1xuICByZXR1cm4gIWlzVG9hc3QoKSAmJiAhZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xufTtcbnZhciBpc1RvYXN0ID0gZnVuY3Rpb24gaXNUb2FzdCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbn07XG52YXIgaXNMb2FkaW5nID0gZnVuY3Rpb24gaXNMb2FkaW5nKCkge1xuICByZXR1cm4gZ2V0UG9wdXAoKS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xufTtcblxuLy8gRGV0ZWN0IE5vZGUgZW52XG52YXIgaXNOb2RlRW52ID0gZnVuY3Rpb24gaXNOb2RlRW52KCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJztcbn07XG5cbnZhciBzd2VldEhUTUwgPSBcIlxcbiA8ZGl2IGFyaWEtbGFiZWxsZWRieT1cXFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCIgYXJpYS1kZXNjcmliZWRieT1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaGVhZGVyLCBcIlxcXCI+XFxuICAgICA8dWwgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucHJvZ3Jlc3NzdGVwcywgXCJcXFwiPjwvdWw+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLmVycm9yLCBcIlxcXCI+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmstbGluZS1sZWZ0XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XFxcIj48L3NwYW4+PC9zcGFuPlxcbiAgICAgPC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLnF1ZXN0aW9uLCBcIlxcXCI+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydpY29uLXRleHQnXSwgXCJcXFwiPj88L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLndhcm5pbmcsIFwiXFxcIj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2ljb24tdGV4dCddLCBcIlxcXCI+ITwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMuaW5mbywgXCJcXFwiPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1snaWNvbi10ZXh0J10sIFwiXFxcIj5pPC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5zdWNjZXNzLCBcIlxcXCI+XFxuICAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XFxcIj48L2Rpdj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXFxcIj48L3NwYW4+XFxuICAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtcmluZ1xcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtZml4XFxcIj48L2Rpdj5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XFxcIj48L2Rpdj5cXG4gICAgIDwvZGl2PlxcbiAgICAgPGltZyBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbWFnZSwgXCJcXFwiIC8+XFxuICAgICA8aDIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiPjwvaDI+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2xvc2UsIFwiXFxcIj5cXHhENzwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiPlxcbiAgICAgPGRpdiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCI+PC9kaXY+XFxuICAgICA8aW5wdXQgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaW5wdXQsIFwiXFxcIiAvPlxcbiAgICAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmZpbGUsIFwiXFxcIiAvPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCJcXFwiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFuZ2VcXFwiIC8+XFxuICAgICAgIDxvdXRwdXQ+PC9vdXRwdXQ+XFxuICAgICA8L2Rpdj5cXG4gICAgIDxzZWxlY3QgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuc2VsZWN0LCBcIlxcXCI+PC9zZWxlY3Q+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8bGFiZWwgZm9yPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5sYWJlbCwgXCJcXFwiPjwvc3Bhbj5cXG4gICAgIDwvbGFiZWw+XFxuICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGV4dGFyZWEsIFwiXFxcIj48L3RleHRhcmVhPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy52YWxpZGF0aW9uZXJyb3IsIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy52YWxpZGF0aW9uZXJyb3IsIFwiXFxcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiXFxcIj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb25maXJtLCBcIlxcXCI+T0s8L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jYW5jZWwsIFwiXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmZvb3RlciwgXCJcXFwiPlxcbiAgIDwvZGl2PlxcbiA8L2Rpdj5cXG5cIikucmVwbGFjZSgvKF58XFxuKVxccyovZywgJycpO1xuLypcbiAqIEFkZCBtb2RhbCArIGJhY2tkcm9wIHRvIERPTVxuICovXG5cbnZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChwYXJhbXMpIHtcbiAgLy8gQ2xlYW4gdXAgdGhlIG9sZCBwb3B1cCBpZiBpdCBleGlzdHNcbiAgdmFyIGMgPSBnZXRDb250YWluZXIoKTtcblxuICBpZiAoYykge1xuICAgIGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKTtcbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSwgc3dhbENsYXNzZXNbJ2hhcy1jb2x1bW4nXV0pO1xuICB9XG5cbiAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgZXJyb3IoJ1N3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemUnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb250YWluZXI7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzd2VldEhUTUw7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSA6IHBhcmFtcy50YXJnZXQ7XG4gIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIHZhciBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIHZhciBmaWxlID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICB2YXIgcmFuZ2UgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG4gIHZhciByYW5nZU91dHB1dCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIG91dHB1dFwiKSk7XG4gIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgdmFyIGNoZWNrYm94ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMudGV4dGFyZWEpOyAvLyBhMTF5XG5cbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdyb2xlJywgcGFyYW1zLnRvYXN0ID8gJ2FsZXJ0JyA6ICdkaWFsb2cnKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBwYXJhbXMudG9hc3QgPyAncG9saXRlJyA6ICdhc3NlcnRpdmUnKTtcblxuICBpZiAoIXBhcmFtcy50b2FzdCkge1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsICd0cnVlJyk7XG4gIH1cblxuICB2YXIgb2xkSW5wdXRWYWw7IC8vIElFMTEgd29ya2Fyb3VuZCwgc2VlICMxMTA5IGZvciBkZXRhaWxzXG5cbiAgdmFyIHJlc2V0VmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uRXJyb3IoZSkge1xuICAgIGlmIChTd2FsLmlzVmlzaWJsZSgpICYmIG9sZElucHV0VmFsICE9PSBlLnRhcmdldC52YWx1ZSkge1xuICAgICAgU3dhbC5yZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICAgIH1cblxuICAgIG9sZElucHV0VmFsID0gZS50YXJnZXQudmFsdWU7XG4gIH07XG5cbiAgaW5wdXQub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbkVycm9yO1xuICBmaWxlLm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uRXJyb3I7XG4gIHNlbGVjdC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbkVycm9yO1xuICBjaGVja2JveC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbkVycm9yO1xuICB0ZXh0YXJlYS5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uRXJyb3I7XG5cbiAgcmFuZ2Uub25pbnB1dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmVzZXRWYWxpZGF0aW9uRXJyb3IoZSk7XG4gICAgcmFuZ2VPdXRwdXQudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgfTtcblxuICByYW5nZS5vbmNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmVzZXRWYWxpZGF0aW9uRXJyb3IoZSk7XG4gICAgcmFuZ2UubmV4dFNpYmxpbmcudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgfTtcblxuICByZXR1cm4gcG9wdXA7XG59O1xuXG52YXIgcGFyc2VIdG1sVG9Db250YWluZXIgPSBmdW5jdGlvbiBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbSwgdGFyZ2V0KSB7XG4gIGlmICghcGFyYW0pIHtcbiAgICByZXR1cm4gaGlkZSh0YXJnZXQpO1xuICB9XG5cbiAgaWYgKF90eXBlb2YocGFyYW0pID09PSAnb2JqZWN0Jykge1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJztcblxuICAgIGlmICgwIGluIHBhcmFtKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSBpbiBwYXJhbTsgaSsrKSB7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbVtpXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyYW0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocGFyYW0pIHtcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gcGFyYW07XG4gIH1cblxuICBzaG93KHRhcmdldCk7XG59O1xuXG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uJzogJ2FuaW1hdGlvbmVuZCdcbiAgfTtcblxuICBmb3IgKHZhciBpIGluIHRyYW5zRW5kRXZlbnROYW1lcykge1xuICAgIGlmICh0cmFuc0VuZEV2ZW50TmFtZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgdHlwZW9mIHRlc3RFbC5zdHlsZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0cmFuc0VuZEV2ZW50TmFtZXNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSgpO1xuXG4vLyBNZWFzdXJlIHdpZHRoIG9mIHNjcm9sbGJhclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL21vZGFsLmpzI0wyNzktTDI4NlxudmFyIG1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICB2YXIgc3VwcG9ydHNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cztcblxuICBpZiAoc3VwcG9ydHNUb3VjaCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG59O1xuXG52YXIgcmVuZGVyQWN0aW9ucyA9IGZ1bmN0aW9uIHJlbmRlckFjdGlvbnMocGFyYW1zKSB7XG4gIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpOyAvLyBBY3Rpb25zIChidXR0b25zKSB3cmFwcGVyXG5cbiAgaWYgKCFwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gJiYgIXBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgaGlkZShhY3Rpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93KGFjdGlvbnMpO1xuICB9IC8vIENhbmNlbCBidXR0b25cblxuXG4gIGlmIChwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjYW5jZWxCdXR0b24pO1xuICB9IC8vIENvbmZpcm0gYnV0dG9uXG5cblxuICBpZiAocGFyYW1zLnNob3dDb25maXJtQnV0dG9uKSB7XG4gICAgcmVtb3ZlU3R5bGVQcm9wZXJ0eShjb25maXJtQnV0dG9uLCAnZGlzcGxheScpO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY29uZmlybUJ1dHRvbik7XG4gIH0gLy8gRWRpdCB0ZXh0IG9uIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG5cblxuICBjb25maXJtQnV0dG9uLmlubmVySFRNTCA9IHBhcmFtcy5jb25maXJtQnV0dG9uVGV4dDtcbiAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IHBhcmFtcy5jYW5jZWxCdXR0b25UZXh0OyAvLyBBUklBIGxhYmVscyBmb3IgY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnNcblxuICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jb25maXJtQnV0dG9uQXJpYUxhYmVsKTtcbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jYW5jZWxCdXR0b25BcmlhTGFiZWwpOyAvLyBBZGQgYnV0dG9ucyBjdXN0b20gY2xhc3Nlc1xuXG4gIGNvbmZpcm1CdXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29uZmlybTtcbiAgYWRkQ2xhc3MoY29uZmlybUJ1dHRvbiwgcGFyYW1zLmNvbmZpcm1CdXR0b25DbGFzcyk7XG4gIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jYW5jZWw7XG4gIGFkZENsYXNzKGNhbmNlbEJ1dHRvbiwgcGFyYW1zLmNhbmNlbEJ1dHRvbkNsYXNzKTsgLy8gQnV0dG9ucyBzdHlsaW5nXG5cbiAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgIGFkZENsYXNzKFtjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpOyAvLyBCdXR0b25zIGJhY2tncm91bmQgY29sb3JzXG5cbiAgICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3IpIHtcbiAgICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3I7XG4gICAgfSAvLyBMb2FkaW5nIHN0YXRlXG5cblxuICAgIHZhciBjb25maXJtQnV0dG9uQmFja2dyb3VuZENvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29uZmlybUJ1dHRvbikuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29uZmlybUJ1dHRvbkJhY2tncm91bmRDb2xvcjtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBjb25maXJtQnV0dG9uQmFja2dyb3VuZENvbG9yO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKFtjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSAnJztcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2FuY2VsQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gJyc7XG4gIH1cbn07XG5cbnZhciByZW5kZXJDb250ZW50ID0gZnVuY3Rpb24gcmVuZGVyQ29udGVudChwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCkucXVlcnlTZWxlY3RvcignIycgKyBzd2FsQ2xhc3Nlcy5jb250ZW50KTsgLy8gQ29udGVudCBhcyBIVE1MXG5cbiAgaWYgKHBhcmFtcy5odG1sKSB7XG4gICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmh0bWwsIGNvbnRlbnQpOyAvLyBDb250ZW50IGFzIHBsYWluIHRleHRcbiAgfSBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwYXJhbXMudGV4dDtcbiAgICBzaG93KGNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY29udGVudCk7XG4gIH1cbn07XG5cbnZhciByZW5kZXJJY29uID0gZnVuY3Rpb24gcmVuZGVySWNvbihwYXJhbXMpIHtcbiAgdmFyIGljb25zID0gZ2V0SWNvbnMoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaGlkZShpY29uc1tpXSk7XG4gIH1cblxuICBpZiAocGFyYW1zLnR5cGUpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoaWNvblR5cGVzKS5pbmRleE9mKHBhcmFtcy50eXBlKSAhPT0gLTEpIHtcbiAgICAgIHZhciBpY29uID0gU3dhbC5nZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiLlwiKS5jb25jYXQoaWNvblR5cGVzW3BhcmFtcy50eXBlXSkpO1xuICAgICAgc2hvdyhpY29uKTsgLy8gQW5pbWF0ZSBpY29uXG5cbiAgICAgIGlmIChwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgICAgIGFkZENsYXNzKGljb24sIFwic3dhbDItYW5pbWF0ZS1cIi5jb25jYXQocGFyYW1zLnR5cGUsIFwiLWljb25cIikpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcihcIlVua25vd24gdHlwZSEgRXhwZWN0ZWQgXFxcInN1Y2Nlc3NcXFwiLCBcXFwiZXJyb3JcXFwiLCBcXFwid2FybmluZ1xcXCIsIFxcXCJpbmZvXFxcIiBvciBcXFwicXVlc3Rpb25cXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChwYXJhbXMudHlwZSwgXCJcXFwiXCIpKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciByZW5kZXJJbWFnZSA9IGZ1bmN0aW9uIHJlbmRlckltYWdlKHBhcmFtcykge1xuICB2YXIgaW1hZ2UgPSBnZXRJbWFnZSgpO1xuXG4gIGlmIChwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwYXJhbXMuaW1hZ2VBbHQpO1xuICAgIHNob3coaW1hZ2UpO1xuXG4gICAgaWYgKHBhcmFtcy5pbWFnZVdpZHRoKSB7XG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcGFyYW1zLmltYWdlV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5pbWFnZUhlaWdodCkge1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBwYXJhbXMuaW1hZ2VIZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgIH1cblxuICAgIGltYWdlLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmltYWdlO1xuXG4gICAgaWYgKHBhcmFtcy5pbWFnZUNsYXNzKSB7XG4gICAgICBhZGRDbGFzcyhpbWFnZSwgcGFyYW1zLmltYWdlQ2xhc3MpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoaWRlKGltYWdlKTtcbiAgfVxufTtcblxudmFyIHJlbmRlclByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiByZW5kZXJQcm9ncmVzc1N0ZXBzKHBhcmFtcykge1xuICB2YXIgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lciA9IGdldFByb2dyZXNzU3RlcHMoKTtcbiAgdmFyIGN1cnJlbnRQcm9ncmVzc1N0ZXAgPSBwYXJzZUludChwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCA9PT0gbnVsbCA/IFN3YWwuZ2V0UXVldWVTdGVwKCkgOiBwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCwgMTApO1xuXG4gIGlmIChwYXJhbXMucHJvZ3Jlc3NTdGVwcyAmJiBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgpIHtcbiAgICBzaG93KHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAoY3VycmVudFByb2dyZXNzU3RlcCA+PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgpIHtcbiAgICAgIHdhcm4oJ0ludmFsaWQgY3VycmVudFByb2dyZXNzU3RlcCBwYXJhbWV0ZXIsIGl0IHNob3VsZCBiZSBsZXNzIHRoYW4gcHJvZ3Jlc3NTdGVwcy5sZW5ndGggJyArICcoY3VycmVudFByb2dyZXNzU3RlcCBsaWtlIEpTIGFycmF5cyBzdGFydHMgZnJvbSAwKScpO1xuICAgIH1cblxuICAgIHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gICAgICB2YXIgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGFkZENsYXNzKGNpcmNsZSwgc3dhbENsYXNzZXMucHJvZ3Jlc3NjaXJjbGUpO1xuICAgICAgY2lyY2xlLmlubmVySFRNTCA9IHN0ZXA7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudFByb2dyZXNzU3RlcCkge1xuICAgICAgICBhZGRDbGFzcyhjaXJjbGUsIHN3YWxDbGFzc2VzLmFjdGl2ZXByb2dyZXNzc3RlcCk7XG4gICAgICB9XG5cbiAgICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcblxuICAgICAgaWYgKGluZGV4ICE9PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgYWRkQ2xhc3MobGluZSwgc3dhbENsYXNzZXMucHJvZ3Jlc3NsaW5lKTtcblxuICAgICAgICBpZiAocGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZSkge1xuICAgICAgICAgIGxpbmUuc3R5bGUud2lkdGggPSBwYXJhbXMucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICB9XG59O1xuXG52YXIgcmVuZGVyVGl0bGUgPSBmdW5jdGlvbiByZW5kZXJUaXRsZShwYXJhbXMpIHtcbiAgdmFyIHRpdGxlID0gZ2V0VGl0bGUoKTtcblxuICBpZiAocGFyYW1zLnRpdGxlVGV4dCkge1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZVRleHQ7XG4gIH0gZWxzZSBpZiAocGFyYW1zLnRpdGxlKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMudGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJhbXMudGl0bGUgPSBwYXJhbXMudGl0bGUuc3BsaXQoJ1xcbicpLmpvaW4oJzxiciAvPicpO1xuICAgIH1cblxuICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy50aXRsZSwgdGl0bGUpO1xuICB9XG59O1xuXG52YXIgZml4U2Nyb2xsYmFyID0gZnVuY3Rpb24gZml4U2Nyb2xsYmFyKCkge1xuICAvLyBmb3IgcXVldWVzLCBkbyBub3QgZG8gdGhpcyBtb3JlIHRoYW4gb25jZVxuICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgdGhlIGJvZHkgaGFzIG92ZXJmbG93XG5cblxuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAvLyBhZGQgcGFkZGluZyBzbyB0aGUgY29udGVudCBkb2Vzbid0IHNoaWZ0IGFmdGVyIHJlbW92YWwgb2Ygc2Nyb2xsYmFyXG4gICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgKyBtZWFzdXJlU2Nyb2xsYmFyKCkgKyAncHgnO1xuICB9XG59O1xudmFyIHVuZG9TY3JvbGxiYXIgPSBmdW5jdGlvbiB1bmRvU2Nyb2xsYmFyKCkge1xuICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nO1xuICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gbnVsbDtcbiAgfVxufTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxudmFyIGlPU2ZpeCA9IGZ1bmN0aW9uIGlPU2ZpeCgpIHtcbiAgdmFyIGlPUyA9IC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW07XG5cbiAgaWYgKGlPUyAmJiAhaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIHZhciBvZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IG9mZnNldCAqIC0xICsgJ3B4JztcbiAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICB9XG59O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxudmFyIHVuZG9JT1NmaXggPSBmdW5jdGlvbiB1bmRvSU9TZml4KCkge1xuICBpZiAoaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwgMTApO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IG9mZnNldCAqIC0xO1xuICB9XG59O1xuXG4vLyBBZGRpbmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdG8gZWxlbWVudHMgb3V0c2lkZSBvZiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyBlbnN1cmVzIHRoYXRcbi8vIGVsZW1lbnRzIG5vdCB3aXRoaW4gdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgd2lsbCBub3QgYmUgc3VyZmFjZWQgaWYgYSB1c2VyIG9wZW5zIGEgc2NyZWVuXG4vLyByZWFkZXLigJlzIGxpc3Qgb2YgZWxlbWVudHMgKGhlYWRpbmdzLCBmb3JtIGNvbnRyb2xzLCBsYW5kbWFya3MsIGV0Yy4pIGluIHRoZSBkb2N1bWVudC5cblxudmFyIHNldEFyaWFIaWRkZW4gPSBmdW5jdGlvbiBzZXRBcmlhSGlkZGVuKCkge1xuICB2YXIgYm9keUNoaWxkcmVuID0gdG9BcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgYm9keUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsID09PSBnZXRDb250YWluZXIoKSB8fCBlbC5jb250YWlucyhnZXRDb250YWluZXIoKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpO1xuICAgIH1cblxuICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9KTtcbn07XG52YXIgdW5zZXRBcmlhSGlkZGVuID0gZnVuY3Rpb24gdW5zZXRBcmlhSGlkZGVuKCkge1xuICB2YXIgYm9keUNoaWxkcmVuID0gdG9BcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgYm9keUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJykpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFJFU1RPUkVfRk9DVVNfVElNRU9VVCA9IDEwMDtcblxudmFyIGdsb2JhbFN0YXRlID0ge307XG52YXIgcmVzdG9yZUFjdGl2ZUVsZW1lbnQgPSBmdW5jdGlvbiByZXN0b3JlQWN0aXZlRWxlbWVudCgpIHtcbiAgdmFyIHggPSB3aW5kb3cuc2Nyb2xsWDtcbiAgdmFyIHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgZ2xvYmFsU3RhdGUucmVzdG9yZUZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmIChnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgfVxuICB9LCBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQpOyAvLyBpc3N1ZXMvOTAwXG5cbiAgaWYgKHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBJRSBkb2Vzbid0IGhhdmUgc2Nyb2xsWC9zY3JvbGxZIHN1cHBvcnRcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeCwgeSk7XG4gIH1cbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xvc2Ugc3dlZXRBbGVydFxuICovXG5cbnZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKG9uQ2xvc2UsIG9uQWZ0ZXJDbG9zZSkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgaWYgKCFwb3B1cCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChvbkNsb3NlICE9PSBudWxsICYmIHR5cGVvZiBvbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb25DbG9zZShwb3B1cCk7XG4gIH1cblxuICByZW1vdmVDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2hvdyk7XG4gIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5oaWRlKTtcblxuICB2YXIgcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlID0gZnVuY3Rpb24gcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlKCkge1xuICAgIGlmICghaXNUb2FzdCgpKSB7XG4gICAgICByZXN0b3JlQWN0aXZlRWxlbWVudCgpO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXMuc2hvd24sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXV0pO1xuXG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgdW5kb1Njcm9sbGJhcigpO1xuICAgICAgdW5kb0lPU2ZpeCgpO1xuICAgICAgdW5zZXRBcmlhSGlkZGVuKCk7XG4gICAgfVxuXG4gICAgaWYgKG9uQWZ0ZXJDbG9zZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25BZnRlckNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25BZnRlckNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07IC8vIElmIGFuaW1hdGlvbiBpcyBzdXBwb3J0ZWQsIGFuaW1hdGVcblxuXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiAhaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKSkge1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQoKSB7XG4gICAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKTtcblxuICAgICAgaWYgKGhhc0NsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5oaWRlKSkge1xuICAgICAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHJlbW92ZSBpbW1lZGlhdGVseVxuICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZSgpO1xuICB9XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBzd2FsMiBwb3B1cCBpcyBzaG93blxuICovXG5cbnZhciBpc1Zpc2libGUkMSA9IGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgcmV0dXJuICEhZ2V0UG9wdXAoKTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDb25maXJtJyBidXR0b25cbiAqL1xuXG52YXIgY2xpY2tDb25maXJtID0gZnVuY3Rpb24gY2xpY2tDb25maXJtKCkge1xuICByZXR1cm4gZ2V0Q29uZmlybUJ1dHRvbigpLmNsaWNrKCk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAqL1xuXG52YXIgY2xpY2tDYW5jZWwgPSBmdW5jdGlvbiBjbGlja0NhbmNlbCgpIHtcbiAgcmV0dXJuIGdldENhbmNlbEJ1dHRvbigpLmNsaWNrKCk7XG59O1xuXG5mdW5jdGlvbiBmaXJlKCkge1xuICB2YXIgU3dhbCA9IHRoaXM7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0KFN3YWwsIGFyZ3MpO1xufVxuXG4vKipcbiAqIEV4dGVuZHMgYSBTd2FsIGNsYXNzIG1ha2luZyBpdCBhYmxlIHRvIGJlIGluc3RhbnRpYXRlZCB3aXRob3V0IHRoZSBgbmV3YCBrZXl3b3JkIChhbmQgdGh1cyB3aXRob3V0IGBTd2FsLmZpcmVgKVxuICogQHBhcmFtIFBhcmVudFN3YWxcbiAqIEByZXR1cm5zIHtOb05ld0tleXdvcmRTd2FsfVxuICovXG5mdW5jdGlvbiB3aXRoTm9OZXdLZXl3b3JkKFBhcmVudFN3YWwpIHtcbiAgdmFyIE5vTmV3S2V5d29yZFN3YWwgPSBmdW5jdGlvbiBOb05ld0tleXdvcmRTd2FsKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTm9OZXdLZXl3b3JkU3dhbCkpIHtcbiAgICAgIHJldHVybiBfY29uc3RydWN0KE5vTmV3S2V5d29yZFN3YWwsIGFyZ3MpO1xuICAgIH1cblxuICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZihOb05ld0tleXdvcmRTd2FsKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBOb05ld0tleXdvcmRTd2FsLnByb3RvdHlwZSA9IF9leHRlbmRzKE9iamVjdC5jcmVhdGUoUGFyZW50U3dhbC5wcm90b3R5cGUpLCB7XG4gICAgY29uc3RydWN0b3I6IE5vTmV3S2V5d29yZFN3YWxcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoTm9OZXdLZXl3b3JkU3dhbCwgUGFyZW50U3dhbCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQW5kcm9pZCA0LjRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBOb05ld0tleXdvcmRTd2FsLl9fcHJvdG9fXyA9IFBhcmVudFN3YWw7XG4gIH1cblxuICByZXR1cm4gTm9OZXdLZXl3b3JkU3dhbDtcbn1cblxudmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gIHRpdGxlOiAnJyxcbiAgdGl0bGVUZXh0OiAnJyxcbiAgdGV4dDogJycsXG4gIGh0bWw6ICcnLFxuICBmb290ZXI6ICcnLFxuICB0eXBlOiBudWxsLFxuICB0b2FzdDogZmFsc2UsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgdGFyZ2V0OiAnYm9keScsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBhbmltYXRpb246IHRydWUsXG4gIGhlaWdodEF1dG86IHRydWUsXG4gIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICBhbGxvd0VzY2FwZUtleTogdHJ1ZSxcbiAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgc3RvcEtleWRvd25Qcm9wYWdhdGlvbjogdHJ1ZSxcbiAga2V5ZG93bkxpc3RlbmVyQ2FwdHVyZTogZmFsc2UsXG4gIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgcHJlQ29uZmlybTogbnVsbCxcbiAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gIGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6ICcnLFxuICBjb25maXJtQnV0dG9uQ29sb3I6IG51bGwsXG4gIGNvbmZpcm1CdXR0b25DbGFzczogbnVsbCxcbiAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNhbmNlbEJ1dHRvbkNvbG9yOiBudWxsLFxuICBjYW5jZWxCdXR0b25DbGFzczogbnVsbCxcbiAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gIHJldmVyc2VCdXR0b25zOiBmYWxzZSxcbiAgZm9jdXNDb25maXJtOiB0cnVlLFxuICBmb2N1c0NhbmNlbDogZmFsc2UsXG4gIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gIGNsb3NlQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgdGhpcyBkaWFsb2cnLFxuICBzaG93TG9hZGVyT25Db25maXJtOiBmYWxzZSxcbiAgaW1hZ2VVcmw6IG51bGwsXG4gIGltYWdlV2lkdGg6IG51bGwsXG4gIGltYWdlSGVpZ2h0OiBudWxsLFxuICBpbWFnZUFsdDogJycsXG4gIGltYWdlQ2xhc3M6IG51bGwsXG4gIHRpbWVyOiBudWxsLFxuICB3aWR0aDogbnVsbCxcbiAgcGFkZGluZzogbnVsbCxcbiAgYmFja2dyb3VuZDogbnVsbCxcbiAgaW5wdXQ6IG51bGwsXG4gIGlucHV0UGxhY2Vob2xkZXI6ICcnLFxuICBpbnB1dFZhbHVlOiAnJyxcbiAgaW5wdXRPcHRpb25zOiB7fSxcbiAgaW5wdXRBdXRvVHJpbTogdHJ1ZSxcbiAgaW5wdXRDbGFzczogbnVsbCxcbiAgaW5wdXRBdHRyaWJ1dGVzOiB7fSxcbiAgaW5wdXRWYWxpZGF0b3I6IG51bGwsXG4gIGdyb3c6IGZhbHNlLFxuICBwb3NpdGlvbjogJ2NlbnRlcicsXG4gIHByb2dyZXNzU3RlcHM6IFtdLFxuICBjdXJyZW50UHJvZ3Jlc3NTdGVwOiBudWxsLFxuICBwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6IG51bGwsXG4gIG9uQmVmb3JlT3BlbjogbnVsbCxcbiAgb25BZnRlckNsb3NlOiBudWxsLFxuICBvbk9wZW46IG51bGwsXG4gIG9uQ2xvc2U6IG51bGwsXG4gIHVzZVJlamVjdGlvbnM6IGZhbHNlLFxuICBleHBlY3RSZWplY3Rpb25zOiBmYWxzZVxufTtcbnZhciBkZXByZWNhdGVkUGFyYW1zID0gWyd1c2VSZWplY3Rpb25zJywgJ2V4cGVjdFJlamVjdGlvbnMnXTtcbnZhciB0b2FzdEluY29tcGF0aWJsZVBhcmFtcyA9IFsnYWxsb3dPdXRzaWRlQ2xpY2snLCAnYWxsb3dFbnRlcktleScsICdiYWNrZHJvcCcsICdmb2N1c0NvbmZpcm0nLCAnZm9jdXNDYW5jZWwnLCAnaGVpZ2h0QXV0bycsICdrZXlkb3duTGlzdGVuZXJDYXB0dXJlJ107XG4vKipcbiAqIElzIHZhbGlkIHBhcmFtZXRlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5cbnZhciBpc1ZhbGlkUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNWYWxpZFBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgcmV0dXJuIGRlZmF1bHRQYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW1OYW1lKSB8fCBwYXJhbU5hbWUgPT09ICdleHRyYVBhcmFtcyc7XG59O1xuLyoqXG4gKiBJcyBkZXByZWNhdGVkIHBhcmFtZXRlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5cbnZhciBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIgPSBmdW5jdGlvbiBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gIHJldHVybiBkZXByZWNhdGVkUGFyYW1zLmluZGV4T2YocGFyYW1OYW1lKSAhPT0gLTE7XG59O1xuLyoqXG4gKiBTaG93IHJlbGV2YW50IHdhcm5pbmdzIGZvciBnaXZlbiBwYXJhbXNcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKi9cblxudmFyIHNob3dXYXJuaW5nc0ZvclBhcmFtcyA9IGZ1bmN0aW9uIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhwYXJhbXMpIHtcbiAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgaWYgKCFpc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2FybihcIlVua25vd24gcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50b2FzdCAmJiB0b2FzdEluY29tcGF0aWJsZVBhcmFtcy5pbmRleE9mKHBhcmFtKSAhPT0gLTEpIHtcbiAgICAgIHdhcm4oXCJUaGUgcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIiBpcyBpbmNvbXBhdGlibGUgd2l0aCB0b2FzdHNcIikpO1xuICAgIH1cblxuICAgIGlmIChpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB3YXJuT25jZShcIlRoZSBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZGVwcmVjYXRpb25XYXJuaW5nID0gXCJcXFwic2V0RGVmYXVsdHNcXFwiICYgXFxcInJlc2V0RGVmYXVsdHNcXFwiIG1ldGhvZHMgYXJlIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgXFxcIm1peGluXFxcIiBtZXRob2QgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLiBGb3IgbmV3IHByb2plY3RzLCB1c2UgXFxcIm1peGluXFxcIi4gRm9yIHBhc3QgcHJvamVjdHMgYWxyZWFkeSB1c2luZyBcXFwic2V0RGVmYXVsdHNcXFwiLCBzdXBwb3J0IHdpbGwgYmUgcHJvdmlkZWQgdGhyb3VnaCBhbiBhZGRpdGlvbmFsIHBhY2thZ2UuXCI7XG52YXIgZGVmYXVsdHMgPSB7fTtcbmZ1bmN0aW9uIHdpdGhHbG9iYWxEZWZhdWx0cyhQYXJlbnRTd2FsKSB7XG4gIHZhciBTd2FsV2l0aEdsb2JhbERlZmF1bHRzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1BhcmVudFN3YWwpIHtcbiAgICBfaW5oZXJpdHMoU3dhbFdpdGhHbG9iYWxEZWZhdWx0cywgX1BhcmVudFN3YWwpO1xuXG4gICAgZnVuY3Rpb24gU3dhbFdpdGhHbG9iYWxEZWZhdWx0cygpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2FsV2l0aEdsb2JhbERlZmF1bHRzKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTd2FsV2l0aEdsb2JhbERlZmF1bHRzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3dhbFdpdGhHbG9iYWxEZWZhdWx0cywgW3tcbiAgICAgIGtleTogXCJfbWFpblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWluKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoU3dhbFdpdGhHbG9iYWxEZWZhdWx0cy5wcm90b3R5cGUpLCBcIl9tYWluXCIsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIGRlZmF1bHRzLCBwYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJzZXREZWZhdWx0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlZmF1bHRzKHBhcmFtcykge1xuICAgICAgICB3YXJuT25jZShkZXByZWNhdGlvbldhcm5pbmcpO1xuXG4gICAgICAgIGlmICghcGFyYW1zIHx8IF90eXBlb2YocGFyYW1zKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTd2VldEFsZXJ0MjogVGhlIGFyZ3VtZW50IGZvciBzZXREZWZhdWx0cygpIGlzIHJlcXVpcmVkIGFuZCBoYXMgdG8gYmUgYSBvYmplY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhwYXJhbXMpOyAvLyBhc3NpZ24gdmFsaWQgcGFyYW1zIGZyb20gYHBhcmFtc2AgdG8gYGRlZmF1bHRzYFxuXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICBpZiAoUGFyZW50U3dhbC5pc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgICAgICAgZGVmYXVsdHNbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXNldERlZmF1bHRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXREZWZhdWx0cygpIHtcbiAgICAgICAgd2Fybk9uY2UoZGVwcmVjYXRpb25XYXJuaW5nKTtcbiAgICAgICAgZGVmYXVsdHMgPSB7fTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3dhbFdpdGhHbG9iYWxEZWZhdWx0cztcbiAgfShQYXJlbnRTd2FsKTsgLy8gU2V0IGRlZmF1bHQgcGFyYW1zIGlmIGB3aW5kb3cuX3N3YWxEZWZhdWx0c2AgaXMgYW4gb2JqZWN0XG5cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgX3R5cGVvZih3aW5kb3cuX3N3YWxEZWZhdWx0cykgPT09ICdvYmplY3QnKSB7XG4gICAgU3dhbFdpdGhHbG9iYWxEZWZhdWx0cy5zZXREZWZhdWx0cyh3aW5kb3cuX3N3YWxEZWZhdWx0cyk7XG4gIH1cblxuICByZXR1cm4gU3dhbFdpdGhHbG9iYWxEZWZhdWx0cztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGV4dGVuZGVkIHZlcnNpb24gb2YgYFN3YWxgIGNvbnRhaW5pbmcgYHBhcmFtc2AgYXMgZGVmYXVsdHMuXG4gKiBVc2VmdWwgZm9yIHJldXNpbmcgU3dhbCBjb25maWd1cmF0aW9uLlxuICpcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIEJlZm9yZTpcbiAqIGNvbnN0IHRleHRQcm9tcHRPcHRpb25zID0geyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH1cbiAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFN3YWwoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nIH0pXG4gKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFN3YWwoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycgfSlcbiAqXG4gKiBBZnRlcjpcbiAqIGNvbnN0IFRleHRQcm9tcHQgPSBTd2FsLm1peGluKHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9KVxuICogY29uc3Qge3ZhbHVlOiBmaXJzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JylcbiAqIGNvbnN0IHt2YWx1ZTogbGFzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nKVxuICpcbiAqIEBwYXJhbSBtaXhpblBhcmFtc1xuICovXG5cbmZ1bmN0aW9uIG1peGluKG1peGluUGFyYW1zKSB7XG4gIHJldHVybiB3aXRoTm9OZXdLZXl3b3JkKFxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfdGhpcykge1xuICAgIF9pbmhlcml0cyhNaXhpblN3YWwsIF90aGlzKTtcblxuICAgIGZ1bmN0aW9uIE1peGluU3dhbCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaXhpblN3YWwpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1peGluU3dhbCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1peGluU3dhbCwgW3tcbiAgICAgIGtleTogXCJfbWFpblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWluKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWl4aW5Td2FsLnByb3RvdHlwZSksIFwiX21haW5cIiwgdGhpcykuY2FsbCh0aGlzLCBfZXh0ZW5kcyh7fSwgbWl4aW5QYXJhbXMsIHBhcmFtcykpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNaXhpblN3YWw7XG4gIH0odGhpcykpO1xufVxuXG4vLyBwcml2YXRlIGdsb2JhbCBzdGF0ZSBmb3IgdGhlIHF1ZXVlIGZlYXR1cmVcbnZhciBjdXJyZW50U3RlcHMgPSBbXTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGNoYWluaW5nIHN3ZWV0QWxlcnQgcG9wdXBzXG4gKi9cblxudmFyIHF1ZXVlID0gZnVuY3Rpb24gcXVldWUoc3RlcHMpIHtcbiAgdmFyIHN3YWwgPSB0aGlzO1xuICBjdXJyZW50U3RlcHMgPSBzdGVwcztcblxuICB2YXIgcmVzZXRRdWV1ZSA9IGZ1bmN0aW9uIHJlc2V0UXVldWUoKSB7XG4gICAgY3VycmVudFN0ZXBzID0gW107XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xuICB9O1xuXG4gIHZhciBxdWV1ZVJlc3VsdCA9IFtdO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAoZnVuY3Rpb24gc3RlcChpLCBjYWxsYmFjaykge1xuICAgICAgaWYgKGkgPCBjdXJyZW50U3RlcHMubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnLCBpKTtcbiAgICAgICAgc3dhbChjdXJyZW50U3RlcHNbaV0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcXVldWVSZXN1bHQucHVzaChyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgc3RlcChpICsgMSwgY2FsbGJhY2spO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNldFF1ZXVlKCk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgZGlzbWlzczogcmVzdWx0LmRpc21pc3NcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNldFF1ZXVlKCk7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiBxdWV1ZVJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSgwKTtcbiAgfSk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZ2V0dGluZyB0aGUgaW5kZXggb2YgY3VycmVudCBwb3B1cCBpbiBxdWV1ZVxuICovXG5cbnZhciBnZXRRdWV1ZVN0ZXAgPSBmdW5jdGlvbiBnZXRRdWV1ZVN0ZXAoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJyk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgaW5zZXJ0aW5nIGEgcG9wdXAgdG8gdGhlIHF1ZXVlXG4gKi9cblxudmFyIGluc2VydFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGluc2VydFF1ZXVlU3RlcChzdGVwLCBpbmRleCkge1xuICBpZiAoaW5kZXggJiYgaW5kZXggPCBjdXJyZW50U3RlcHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGVwcy5zcGxpY2UoaW5kZXgsIDAsIHN0ZXApO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRTdGVwcy5wdXNoKHN0ZXApO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGRlbGV0aW5nIGEgcG9wdXAgZnJvbSB0aGUgcXVldWVcbiAqL1xuXG52YXIgZGVsZXRlUXVldWVTdGVwID0gZnVuY3Rpb24gZGVsZXRlUXVldWVTdGVwKGluZGV4KSB7XG4gIGlmICh0eXBlb2YgY3VycmVudFN0ZXBzW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTaG93IHNwaW5uZXIgaW5zdGVhZCBvZiBDb25maXJtIGJ1dHRvbiBhbmQgZGlzYWJsZSBDYW5jZWwgYnV0dG9uXG4gKi9cblxudmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gc2hvd0xvYWRpbmcoKSB7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgaWYgKCFwb3B1cCkge1xuICAgIFN3YWwoJycpO1xuICB9XG5cbiAgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTtcbiAgc2hvdyhhY3Rpb25zKTtcbiAgc2hvdyhjb25maXJtQnV0dG9uKTtcbiAgYWRkQ2xhc3MoW3BvcHVwLCBhY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsIHRydWUpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsIHRydWUpO1xuICBwb3B1cC5mb2N1cygpO1xufTtcblxuLyoqXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpcyBzZXQsIHJldHVybnMgbnVtYmVyIG9zIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAqIE90aGVyd2lzZSwgcmV0dXJucyBudWxsLlxuICovXG5cbnZhciBnZXRUaW1lckxlZnQgPSBmdW5jdGlvbiBnZXRUaW1lckxlZnQoKSB7XG4gIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuZ2V0VGltZXJMZWZ0KCk7XG59O1xuXG5cblxudmFyIHN0YXRpY01ldGhvZHMgPSBPYmplY3QuZnJlZXplKHtcblx0aXNWYWxpZFBhcmFtZXRlcjogaXNWYWxpZFBhcmFtZXRlcixcblx0aXNEZXByZWNhdGVkUGFyYW1ldGVyOiBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIsXG5cdGFyZ3NUb1BhcmFtczogYXJnc1RvUGFyYW1zLFxuXHRhZGFwdElucHV0VmFsaWRhdG9yOiBhZGFwdElucHV0VmFsaWRhdG9yLFxuXHRjbG9zZTogY2xvc2UsXG5cdGNsb3NlUG9wdXA6IGNsb3NlLFxuXHRjbG9zZU1vZGFsOiBjbG9zZSxcblx0Y2xvc2VUb2FzdDogY2xvc2UsXG5cdGlzVmlzaWJsZTogaXNWaXNpYmxlJDEsXG5cdGNsaWNrQ29uZmlybTogY2xpY2tDb25maXJtLFxuXHRjbGlja0NhbmNlbDogY2xpY2tDYW5jZWwsXG5cdGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuXHRnZXRQb3B1cDogZ2V0UG9wdXAsXG5cdGdldFRpdGxlOiBnZXRUaXRsZSxcblx0Z2V0Q29udGVudDogZ2V0Q29udGVudCxcblx0Z2V0SW1hZ2U6IGdldEltYWdlLFxuXHRnZXRJY29uczogZ2V0SWNvbnMsXG5cdGdldENsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbixcblx0Z2V0QnV0dG9uc1dyYXBwZXI6IGdldEJ1dHRvbnNXcmFwcGVyLFxuXHRnZXRBY3Rpb25zOiBnZXRBY3Rpb25zLFxuXHRnZXRDb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uLFxuXHRnZXRDYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbixcblx0Z2V0Rm9vdGVyOiBnZXRGb290ZXIsXG5cdGdldEZvY3VzYWJsZUVsZW1lbnRzOiBnZXRGb2N1c2FibGVFbGVtZW50cyxcblx0aXNMb2FkaW5nOiBpc0xvYWRpbmcsXG5cdGZpcmU6IGZpcmUsXG5cdG1peGluOiBtaXhpbixcblx0cXVldWU6IHF1ZXVlLFxuXHRnZXRRdWV1ZVN0ZXA6IGdldFF1ZXVlU3RlcCxcblx0aW5zZXJ0UXVldWVTdGVwOiBpbnNlcnRRdWV1ZVN0ZXAsXG5cdGRlbGV0ZVF1ZXVlU3RlcDogZGVsZXRlUXVldWVTdGVwLFxuXHRzaG93TG9hZGluZzogc2hvd0xvYWRpbmcsXG5cdGVuYWJsZUxvYWRpbmc6IHNob3dMb2FkaW5nLFxuXHRnZXRUaW1lckxlZnQ6IGdldFRpbWVyTGVmdFxufSk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9SaWltL3N5bWJvbC1wb2x5ZmlsbC9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudmFyIF9TeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nID8gU3ltYm9sIDogZnVuY3Rpb24gKCkge1xuICB2YXIgaWRDb3VudGVyID0gMDtcblxuICBmdW5jdGlvbiBfU3ltYm9sKGtleSkge1xuICAgIHJldHVybiAnX18nICsga2V5ICsgJ18nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU5KSArICdfJyArICsraWRDb3VudGVyICsgJ19fJztcbiAgfVxuXG4gIF9TeW1ib2wuaXRlcmF0b3IgPSBfU3ltYm9sKCdTeW1ib2wuaXRlcmF0b3InKTtcbiAgcmV0dXJuIF9TeW1ib2w7XG59KCk7XG5cbi8vIFdlYWtNYXAgcG9seWZpbGwsIG5lZWRlZCBmb3IgQW5kcm9pZCA0LjRcbi8vIFJlbGF0ZWQgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTA3MVxuLy8gaHR0cDovL3dlYnJlZmxlY3Rpb24uYmxvZ3Nwb3QuZmkvMjAxNS8wNC9hLXdlYWttYXAtcG9seWZpbGwtaW4tMjAtbGluZXMtb2YtY29kZS5odG1sXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG52YXIgV2Vha01hcCQxID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogZnVuY3Rpb24gKHMsIGRQLCBoT1ApIHtcbiAgZnVuY3Rpb24gV2Vha01hcCgpIHtcbiAgICBkUCh0aGlzLCBzLCB7XG4gICAgICB2YWx1ZTogX1N5bWJvbCgnV2Vha01hcCcpXG4gICAgfSk7XG4gIH1cblxuICBXZWFrTWFwLnByb3RvdHlwZSA9IHtcbiAgICAnZGVsZXRlJzogZnVuY3Rpb24gZGVsKG8pIHtcbiAgICAgIGRlbGV0ZSBvW3RoaXNbc11dO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQobykge1xuICAgICAgcmV0dXJuIG9bdGhpc1tzXV07XG4gICAgfSxcbiAgICBoYXM6IGZ1bmN0aW9uIGhhcyhvKSB7XG4gICAgICByZXR1cm4gaE9QLmNhbGwobywgdGhpc1tzXSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvLCB2KSB7XG4gICAgICBkUChvLCB0aGlzW3NdLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIFdlYWtNYXA7XG59KF9TeW1ib2woJ1dlYWtNYXAnKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5LCB7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnRzIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgc3dhbGAgaGFzLlxuICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAqL1xudmFyIHByaXZhdGVQcm9wcyA9IHtcbiAgcHJvbWlzZTogbmV3IFdlYWtNYXAkMSgpLFxuICBpbm5lclBhcmFtczogbmV3IFdlYWtNYXAkMSgpLFxuICBkb21DYWNoZTogbmV3IFdlYWtNYXAkMSgpXG59O1xuXG4vKipcbiAqIEVuYWJsZXMgYnV0dG9ucyBhbmQgaGlkZSBsb2FkZXIuXG4gKi9cblxuZnVuY3Rpb24gaGlkZUxvYWRpbmcoKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG5cbiAgaWYgKCFpbm5lclBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbikge1xuICAgIGhpZGUoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbik7XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgIGhpZGUoZG9tQ2FjaGUuYWN0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQ2xhc3MoW2RvbUNhY2hlLnBvcHVwLCBkb21DYWNoZS5hY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0KGlucHV0VHlwZSkge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBpbnB1dFR5cGUgPSBpbnB1dFR5cGUgfHwgaW5uZXJQYXJhbXMuaW5wdXQ7XG5cbiAgaWYgKCFpbnB1dFR5cGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgY2FzZSAnc2VsZWN0JzpcbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgY2FzZSAnZmlsZSc6XG4gICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzW2lucHV0VHlwZV0pO1xuXG4gICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgcmV0dXJuIGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIiBpbnB1dFwiKSk7XG5cbiAgICBjYXNlICdyYWRpbyc6XG4gICAgICByZXR1cm4gZG9tQ2FjaGUucG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiIGlucHV0OmNoZWNrZWRcIikpIHx8IGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIiBpbnB1dDpmaXJzdC1jaGlsZFwiKSk7XG5cbiAgICBjYXNlICdyYW5nZSc6XG4gICAgICByZXR1cm4gZG9tQ2FjaGUucG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIGlucHV0XCIpKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5hYmxlQ29uZmlybUJ1dHRvbigpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gZGlzYWJsZUNvbmZpcm1CdXR0b24oKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICB2YXIgcmFkaW9zQ29udGFpbmVyID0gaW5wdXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICByYWRpb3NbaV0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpbnB1dCAmJiBpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB2YXIgcmFkaW9zID0gcmFkaW9zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmFkaW9zW2ldLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dWYWxpZGF0aW9uRXJyb3IoZXJyb3IpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbkVycm9yLmlubmVySFRNTCA9IGVycm9yO1xuICB2YXIgcG9wdXBDb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tQ2FjaGUucG9wdXApO1xuICBkb21DYWNoZS52YWxpZGF0aW9uRXJyb3Iuc3R5bGUubWFyZ2luTGVmdCA9IFwiLVwiLmNvbmNhdChwb3B1cENvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1sZWZ0JykpO1xuICBkb21DYWNoZS52YWxpZGF0aW9uRXJyb3Iuc3R5bGUubWFyZ2luUmlnaHQgPSBcIi1cIi5jb25jYXQocG9wdXBDb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gIHNob3coZG9tQ2FjaGUudmFsaWRhdGlvbkVycm9yKTtcbiAgdmFyIGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xuXG4gIGlmIChpbnB1dCkge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgdHJ1ZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZEJ5Jywgc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yKTtcbiAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICBhZGRDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gIH1cbn0gLy8gSGlkZSBibG9jayB3aXRoIHZhbGlkYXRpb24gZXJyb3JcblxuZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uRXJyb3IoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG5cbiAgaWYgKGRvbUNhY2hlLnZhbGlkYXRpb25FcnJvcikge1xuICAgIGhpZGUoZG9tQ2FjaGUudmFsaWRhdGlvbkVycm9yKTtcbiAgfVxuXG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScpO1xuICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzJDEoKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gIHJldHVybiBpbm5lclBhcmFtcy5wcm9ncmVzc1N0ZXBzO1xufVxuZnVuY3Rpb24gc2V0UHJvZ3Jlc3NTdGVwcyhwcm9ncmVzc1N0ZXBzKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG5cbiAgdmFyIHVwZGF0ZWRQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgaW5uZXJQYXJhbXMsIHtcbiAgICBwcm9ncmVzc1N0ZXBzOiBwcm9ncmVzc1N0ZXBzXG4gIH0pO1xuXG4gIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgdXBkYXRlZFBhcmFtcyk7XG4gIHJlbmRlclByb2dyZXNzU3RlcHModXBkYXRlZFBhcmFtcyk7XG59XG5mdW5jdGlvbiBzaG93UHJvZ3Jlc3NTdGVwcygpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgc2hvdyhkb21DYWNoZS5wcm9ncmVzc1N0ZXBzKTtcbn1cbmZ1bmN0aW9uIGhpZGVQcm9ncmVzc1N0ZXBzKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBoaWRlKGRvbUNhY2hlLnByb2dyZXNzU3RlcHMpO1xufVxuXG52YXIgVGltZXIgPSBmdW5jdGlvbiBUaW1lcihjYWxsYmFjaywgZGVsYXkpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpbWVyKTtcblxuICB2YXIgaWQsIHN0YXJ0ZWQsIHJ1bm5pbmc7XG4gIHZhciByZW1haW5pbmcgPSBkZWxheTtcblxuICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgIHN0YXJ0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgIGlkID0gc2V0VGltZW91dChjYWxsYmFjaywgcmVtYWluaW5nKTtcbiAgfTtcblxuICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgcnVubmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgcmVtYWluaW5nIC09IG5ldyBEYXRlKCkgLSBzdGFydGVkO1xuICB9O1xuXG4gIHRoaXMuZ2V0VGltZXJMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChydW5uaW5nKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVtYWluaW5nO1xuICB9O1xuXG4gIHRoaXMuc3RhcnQoKTtcbn07XG5cbnZhciBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzID0ge1xuICBlbWFpbDogZnVuY3Rpb24gZW1haWwoc3RyaW5nLCBleHRyYVBhcmFtcykge1xuICAgIHJldHVybiAvXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aMC05LV17MiwyNH0kLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVqZWN0KGV4dHJhUGFyYW1zICYmIGV4dHJhUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlID8gZXh0cmFQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UgOiAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyk7XG4gIH0sXG4gIHVybDogZnVuY3Rpb24gdXJsKHN0cmluZywgZXh0cmFQYXJhbXMpIHtcbiAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODA5NDM1LzEzMzE0MjVcbiAgICByZXR1cm4gL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLy89XSopJC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlamVjdChleHRyYVBhcmFtcyAmJiBleHRyYVBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSA/IGV4dHJhUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlIDogJ0ludmFsaWQgVVJMJyk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHR5cGUsIHRleHQgYW5kIGFjdGlvbnMgb24gcG9wdXBcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBzZXRQYXJhbWV0ZXJzKHBhcmFtcykge1xuICAvLyBVc2UgZGVmYXVsdCBgaW5wdXRWYWxpZGF0b3JgIGZvciBzdXBwb3J0ZWQgaW5wdXQgdHlwZXMgaWYgbm90IHByb3ZpZGVkXG4gIGlmICghcGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgT2JqZWN0LmtleXMoZGVmYXVsdElucHV0VmFsaWRhdG9ycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAocGFyYW1zLmlucHV0ID09PSBrZXkpIHtcbiAgICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yID0gcGFyYW1zLmV4cGVjdFJlamVjdGlvbnMgPyBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzW2tleV0gOiBTd2FsLmFkYXB0SW5wdXRWYWxpZGF0b3IoZGVmYXVsdElucHV0VmFsaWRhdG9yc1trZXldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSAvLyBEZXRlcm1pbmUgaWYgdGhlIGN1c3RvbSB0YXJnZXQgZWxlbWVudCBpcyB2YWxpZFxuXG5cbiAgaWYgKCFwYXJhbXMudGFyZ2V0IHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICB3YXJuKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpO1xuICAgIHBhcmFtcy50YXJnZXQgPSAnYm9keSc7XG4gIH1cblxuICB2YXIgcG9wdXA7XG4gIHZhciBvbGRQb3B1cCA9IGdldFBvcHVwKCk7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSA6IHBhcmFtcy50YXJnZXQ7IC8vIElmIHRoZSBtb2RlbCB0YXJnZXQgaGFzIGNoYW5nZWQsIHJlZnJlc2ggdGhlIHBvcHVwXG5cbiAgaWYgKG9sZFBvcHVwICYmIHRhcmdldEVsZW1lbnQgJiYgb2xkUG9wdXAucGFyZW50Tm9kZSAhPT0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcG9wdXAgPSBpbml0KHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgcG9wdXAgPSBvbGRQb3B1cCB8fCBpbml0KHBhcmFtcyk7XG4gIH0gLy8gU2V0IHBvcHVwIHdpZHRoXG5cblxuICBpZiAocGFyYW1zLndpZHRoKSB7XG4gICAgcG9wdXAuc3R5bGUud2lkdGggPSB0eXBlb2YgcGFyYW1zLndpZHRoID09PSAnbnVtYmVyJyA/IHBhcmFtcy53aWR0aCArICdweCcgOiBwYXJhbXMud2lkdGg7XG4gIH0gLy8gU2V0IHBvcHVwIHBhZGRpbmdcblxuXG4gIGlmIChwYXJhbXMucGFkZGluZykge1xuICAgIHBvcHVwLnN0eWxlLnBhZGRpbmcgPSB0eXBlb2YgcGFyYW1zLnBhZGRpbmcgPT09ICdudW1iZXInID8gcGFyYW1zLnBhZGRpbmcgKyAncHgnIDogcGFyYW1zLnBhZGRpbmc7XG4gIH0gLy8gU2V0IHBvcHVwIGJhY2tncm91bmRcblxuXG4gIGlmIChwYXJhbXMuYmFja2dyb3VuZCkge1xuICAgIHBvcHVwLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgfVxuXG4gIHZhciBwb3B1cEJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBvcHVwKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gIHZhciBzdWNjZXNzSWNvblBhcnRzID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXgnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1Y2Nlc3NJY29uUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBvcHVwQmFja2dyb3VuZENvbG9yO1xuICB9XG5cbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgY2xvc2VCdXR0b24gPSBnZXRDbG9zZUJ1dHRvbigpO1xuICB2YXIgZm9vdGVyID0gZ2V0Rm9vdGVyKCk7IC8vIFRpdGxlXG5cbiAgcmVuZGVyVGl0bGUocGFyYW1zKTsgLy8gQ29udGVudFxuXG4gIHJlbmRlckNvbnRlbnQocGFyYW1zKTsgLy8gQmFja2Ryb3BcblxuICBpZiAodHlwZW9mIHBhcmFtcy5iYWNrZHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICBnZXRDb250YWluZXIoKS5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tkcm9wO1xuICB9IGVsc2UgaWYgKCFwYXJhbXMuYmFja2Ryb3ApIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xuICB9XG5cbiAgaWYgKCFwYXJhbXMuYmFja2Ryb3AgJiYgcGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgd2FybignXCJhbGxvd091dHNpZGVDbGlja1wiIHBhcmFtZXRlciByZXF1aXJlcyBgYmFja2Ryb3BgIHBhcmFtZXRlciB0byBiZSBzZXQgdG8gYHRydWVgJyk7XG4gIH0gLy8gUG9zaXRpb25cblxuXG4gIGlmIChwYXJhbXMucG9zaXRpb24gaW4gc3dhbENsYXNzZXMpIHtcbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW3BhcmFtcy5wb3NpdGlvbl0pO1xuICB9IGVsc2Uge1xuICAgIHdhcm4oJ1RoZSBcInBvc2l0aW9uXCIgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImNlbnRlclwiJyk7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5jZW50ZXIpO1xuICB9IC8vIEdyb3dcblxuXG4gIGlmIChwYXJhbXMuZ3JvdyAmJiB0eXBlb2YgcGFyYW1zLmdyb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGdyb3dDbGFzcyA9ICdncm93LScgKyBwYXJhbXMuZ3JvdztcblxuICAgIGlmIChncm93Q2xhc3MgaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbZ3Jvd0NsYXNzXSk7XG4gICAgfVxuICB9IC8vIEFuaW1hdGlvblxuXG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMuYW5pbWF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGFyYW1zLmFuaW1hdGlvbiA9IHBhcmFtcy5hbmltYXRpb24uY2FsbCgpO1xuICB9IC8vIENsb3NlIGJ1dHRvblxuXG5cbiAgaWYgKHBhcmFtcy5zaG93Q2xvc2VCdXR0b24pIHtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXMuY2xvc2VCdXR0b25BcmlhTGFiZWwpO1xuICAgIHNob3coY2xvc2VCdXR0b24pO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY2xvc2VCdXR0b24pO1xuICB9IC8vIERlZmF1bHQgQ2xhc3NcblxuXG4gIHBvcHVwLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLnBvcHVwO1xuXG4gIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pO1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdCk7XG4gIH0gZWxzZSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm1vZGFsKTtcbiAgfSAvLyBDdXN0b20gQ2xhc3NcblxuXG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgfSAvLyBQcm9ncmVzcyBzdGVwc1xuXG5cbiAgcmVuZGVyUHJvZ3Jlc3NTdGVwcyhwYXJhbXMpOyAvLyBJY29uXG5cbiAgcmVuZGVySWNvbihwYXJhbXMpOyAvLyBJbWFnZVxuXG4gIHJlbmRlckltYWdlKHBhcmFtcyk7IC8vIEFjdGlvbnMgKGJ1dHRvbnMpXG5cbiAgcmVuZGVyQWN0aW9ucyhwYXJhbXMpOyAvLyBGb290ZXJcblxuICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuZm9vdGVyLCBmb290ZXIpOyAvLyBDU1MgYW5pbWF0aW9uXG5cbiAgaWYgKHBhcmFtcy5hbmltYXRpb24gPT09IHRydWUpIHtcbiAgICByZW1vdmVDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbik7XG4gIH0gLy8gc2hvd0xvYWRlck9uQ29uZmlybSAmJiBwcmVDb25maXJtXG5cblxuICBpZiAocGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0gJiYgIXBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgd2Fybignc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArICdzaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuJyArICdodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby8jYWpheC1yZXF1ZXN0Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBPcGVuIHBvcHVwLCBhZGQgbmVjZXNzYXJ5IGNsYXNzZXMgYW5kIHN0eWxlcywgZml4IHNjcm9sbGJhclxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc1xuICovXG5cbnZhciBvcGVuUG9wdXAgPSBmdW5jdGlvbiBvcGVuUG9wdXAocGFyYW1zKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICBpZiAocGFyYW1zLm9uQmVmb3JlT3BlbiAhPT0gbnVsbCAmJiB0eXBlb2YgcGFyYW1zLm9uQmVmb3JlT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBhcmFtcy5vbkJlZm9yZU9wZW4ocG9wdXApO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5hbmltYXRpb24pIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2hvdyk7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgICByZW1vdmVDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmZhZGUpO1xuICB9XG5cbiAgc2hvdyhwb3B1cCk7IC8vIHNjcm9sbGluZyBpcyAnaGlkZGVuJyB1bnRpbCBhbmltYXRpb24gaXMgZG9uZSwgYWZ0ZXIgdGhhdCAnYXV0bydcblxuICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG5cbiAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmICFoYXNDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pKSB7XG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gc3dhbENsb3NlRXZlbnRGaW5pc2hlZCgpIHtcbiAgICAgIHBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQpO1xuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICB9XG5cbiAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keSwgY29udGFpbmVyXSwgc3dhbENsYXNzZXMuc2hvd24pO1xuXG4gIGlmIChwYXJhbXMuaGVpZ2h0QXV0byAmJiBwYXJhbXMuYmFja2Ryb3AgJiYgIXBhcmFtcy50b2FzdCkge1xuICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snaGVpZ2h0LWF1dG8nXSk7XG4gIH1cblxuICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgZml4U2Nyb2xsYmFyKCk7XG4gICAgaU9TZml4KCk7XG4gICAgc2V0QXJpYUhpZGRlbigpO1xuICB9XG5cbiAgaWYgKCFpc1RvYXN0KCkgJiYgIWdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBpZiAocGFyYW1zLm9uT3BlbiAhPT0gbnVsbCAmJiB0eXBlb2YgcGFyYW1zLm9uT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcGFyYW1zLm9uT3Blbihwb3B1cCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9tYWluKHVzZXJQYXJhbXMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBzaG93V2FybmluZ3NGb3JQYXJhbXModXNlclBhcmFtcyk7XG5cbiAgdmFyIGlubmVyUGFyYW1zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYXJhbXMsIHVzZXJQYXJhbXMpO1xuXG4gIHNldFBhcmFtZXRlcnMoaW5uZXJQYXJhbXMpO1xuICBPYmplY3QuZnJlZXplKGlubmVyUGFyYW1zKTtcbiAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCBpbm5lclBhcmFtcyk7IC8vIGNsZWFyIHRoZSBwcmV2aW91cyB0aW1lclxuXG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gIH0gLy8gY2xlYXIgdGhlIHJlc3RvcmUgZm9jdXMgdGltZW91dFxuXG5cbiAgY2xlYXJUaW1lb3V0KGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQpO1xuICB2YXIgZG9tQ2FjaGUgPSB7XG4gICAgcG9wdXA6IGdldFBvcHVwKCksXG4gICAgY29udGFpbmVyOiBnZXRDb250YWluZXIoKSxcbiAgICBjb250ZW50OiBnZXRDb250ZW50KCksXG4gICAgYWN0aW9uczogZ2V0QWN0aW9ucygpLFxuICAgIGNvbmZpcm1CdXR0b246IGdldENvbmZpcm1CdXR0b24oKSxcbiAgICBjYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbigpLFxuICAgIGNsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbigpLFxuICAgIHZhbGlkYXRpb25FcnJvcjogZ2V0VmFsaWRhdGlvbkVycm9yKCksXG4gICAgcHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcygpXG4gIH07XG4gIHByaXZhdGVQcm9wcy5kb21DYWNoZS5zZXQodGhpcywgZG9tQ2FjaGUpO1xuICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIC8vIGZ1bmN0aW9ucyB0byBoYW5kbGUgYWxsIHJlc29sdmluZy9yZWplY3Rpbmcvc2V0dGxpbmdcbiAgICB2YXIgc3VjY2VlZFdpdGggPSBmdW5jdGlvbiBzdWNjZWVkV2l0aCh2YWx1ZSkge1xuICAgICAgY29uc3RydWN0b3IuY2xvc2VQb3B1cChpbm5lclBhcmFtcy5vbkNsb3NlLCBpbm5lclBhcmFtcy5vbkFmdGVyQ2xvc2UpOyAvLyBUT0RPOiBtYWtlIGNsb3NlUG9wdXAgYW4gKmluc3RhbmNlKiBtZXRob2RcblxuICAgICAgaWYgKGlubmVyUGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkaXNtaXNzV2l0aCA9IGZ1bmN0aW9uIGRpc21pc3NXaXRoKGRpc21pc3MpIHtcbiAgICAgIGNvbnN0cnVjdG9yLmNsb3NlUG9wdXAoaW5uZXJQYXJhbXMub25DbG9zZSwgaW5uZXJQYXJhbXMub25BZnRlckNsb3NlKTtcblxuICAgICAgaWYgKGlubmVyUGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgcmVqZWN0KGRpc21pc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgZGlzbWlzczogZGlzbWlzc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGVycm9yV2l0aCA9IGZ1bmN0aW9uIGVycm9yV2l0aChlcnJvciQkMSkge1xuICAgICAgY29uc3RydWN0b3IuY2xvc2VQb3B1cChpbm5lclBhcmFtcy5vbkNsb3NlLCBpbm5lclBhcmFtcy5vbkFmdGVyQ2xvc2UpO1xuICAgICAgcmVqZWN0KGVycm9yJCQxKTtcbiAgICB9OyAvLyBDbG9zZSBvbiB0aW1lclxuXG5cbiAgICBpZiAoaW5uZXJQYXJhbXMudGltZXIpIHtcbiAgICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQgPSBuZXcgVGltZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNtaXNzV2l0aCgndGltZXInKTtcbiAgICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gICAgICB9LCBpbm5lclBhcmFtcy50aW1lcik7XG4gICAgfSAvLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSBwb3B1cCBpbnB1dFxuXG5cbiAgICB2YXIgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gICAgICB2YXIgaW5wdXQgPSBfdGhpcy5nZXRJbnB1dCgpO1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZCA/IDEgOiAwO1xuXG4gICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZCA/IGlucHV0LnZhbHVlIDogbnVsbDtcblxuICAgICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuZmlsZXMubGVuZ3RoID8gaW5wdXQuZmlsZXNbMF0gOiBudWxsO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLmlucHV0QXV0b1RyaW0gPyBpbnB1dC52YWx1ZS50cmltKCkgOiBpbnB1dC52YWx1ZTtcbiAgICAgIH1cbiAgICB9OyAvLyBpbnB1dCBhdXRvZm9jdXNcblxuXG4gICAgaWYgKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXQoKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbmZpcm0gPSBmdW5jdGlvbiBjb25maXJtKHZhbHVlKSB7XG4gICAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgICAgICBjb25zdHJ1Y3Rvci5zaG93TG9hZGluZygpOyAvLyBUT0RPOiBtYWtlIHNob3dMb2FkaW5nIGFuICppbnN0YW5jZSogbWV0aG9kXG4gICAgICB9XG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgICAgIF90aGlzLnJlc2V0VmFsaWRhdGlvbkVycm9yKCk7XG5cbiAgICAgICAgdmFyIHByZUNvbmZpcm1Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLnByZUNvbmZpcm0odmFsdWUsIGlubmVyUGFyYW1zLmV4dHJhUGFyYW1zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlubmVyUGFyYW1zLmV4cGVjdFJlamVjdGlvbnMpIHtcbiAgICAgICAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcmVDb25maXJtVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWNjZWVkV2l0aChwcmVDb25maXJtVmFsdWUgfHwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgX3RoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcih2YWxpZGF0aW9uRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZUNvbmZpcm1Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKHByZUNvbmZpcm1WYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGlzVmlzaWJsZShkb21DYWNoZS52YWxpZGF0aW9uRXJyb3IpIHx8IHByZUNvbmZpcm1WYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgX3RoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1Y2NlZWRXaXRoKHByZUNvbmZpcm1WYWx1ZSB8fCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yJCQxKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JXaXRoKGVycm9yJCQxKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VjY2VlZFdpdGgodmFsdWUpO1xuICAgICAgfVxuICAgIH07IC8vIE1vdXNlIGludGVyYWN0aW9uc1xuXG5cbiAgICB2YXIgb25CdXR0b25FdmVudCA9IGZ1bmN0aW9uIG9uQnV0dG9uRXZlbnQoZSkge1xuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgdmFyIGNvbmZpcm1CdXR0b24gPSBkb21DYWNoZS5jb25maXJtQnV0dG9uLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvbiA9IGRvbUNhY2hlLmNhbmNlbEJ1dHRvbjtcbiAgICAgIHZhciB0YXJnZXRlZENvbmZpcm0gPSBjb25maXJtQnV0dG9uICYmIChjb25maXJtQnV0dG9uID09PSB0YXJnZXQgfHwgY29uZmlybUJ1dHRvbi5jb250YWlucyh0YXJnZXQpKTtcbiAgICAgIHZhciB0YXJnZXRlZENhbmNlbCA9IGNhbmNlbEJ1dHRvbiAmJiAoY2FuY2VsQnV0dG9uID09PSB0YXJnZXQgfHwgY2FuY2VsQnV0dG9uLmNvbnRhaW5zKHRhcmdldCkpO1xuXG4gICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgLy8gQ2xpY2tlZCAnY29uZmlybSdcbiAgICAgICAgICBpZiAodGFyZ2V0ZWRDb25maXJtICYmIGNvbnN0cnVjdG9yLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICBfdGhpcy5kaXNhYmxlQnV0dG9ucygpO1xuXG4gICAgICAgICAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBnZXRJbnB1dFZhbHVlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGlzYWJsZUlucHV0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdGlvblByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcihpbnB1dFZhbHVlLCBpbm5lclBhcmFtcy5leHRyYVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5uZXJQYXJhbXMuZXhwZWN0UmVqZWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlQnV0dG9ucygpO1xuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZUlucHV0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IodmFsaWRhdGlvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25maXJtKGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IkJDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yV2l0aChlcnJvciQkMSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uZmlybSh0cnVlKTtcbiAgICAgICAgICAgIH0gLy8gQ2xpY2tlZCAnY2FuY2VsJ1xuXG4gICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRlZENhbmNlbCAmJiBjb25zdHJ1Y3Rvci5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgX3RoaXMuZGlzYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5jYW5jZWwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBidXR0b25zID0gZG9tQ2FjaGUucG9wdXAucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1dHRvbnNbaV0ub25jbGljayA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdmVyID0gb25CdXR0b25FdmVudDtcbiAgICAgIGJ1dHRvbnNbaV0ub25tb3VzZW91dCA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2Vkb3duID0gb25CdXR0b25FdmVudDtcbiAgICB9IC8vIENsb3NpbmcgcG9wdXAgYnkgY2xvc2UgYnV0dG9uXG5cblxuICAgIGRvbUNhY2hlLmNsb3NlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNtaXNzV2l0aChjb25zdHJ1Y3Rvci5EaXNtaXNzUmVhc29uLmNsb3NlKTtcbiAgICB9O1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICAvLyBDbG9zaW5nIHBvcHVwIGJ5IGludGVybmFsIGNsaWNrXG4gICAgICBkb21DYWNoZS5wb3B1cC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbiB8fCBpbm5lclBhcmFtcy5zaG93Q2xvc2VCdXR0b24gfHwgaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkaXNtaXNzV2l0aChjb25zdHJ1Y3Rvci5EaXNtaXNzUmVhc29uLmNsb3NlKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpZ25vcmVPdXRzaWRlQ2xpY2sgPSBmYWxzZTsgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIHBvcHVwIGJ1dCBtb3VzZXVwIG9uIHRoZSBjb250YWluZXJcbiAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiB3aGVuIHRoZSB1c2VyIGRyYWdzIGEgc2xpZGVyXG5cbiAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZXVwID0gdW5kZWZpbmVkOyAvLyBXZSBvbmx5IGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyB0aGUgY29udGFpbmVyIGJlY2F1c2UgdXN1YWxseSBpdCBkb2Vzbid0XG4gICAgICAgICAgLy8gaGF2ZSBhbnkgb3RoZXIgZGlyZWN0IGNoaWxkcmVuIGFzaWRlIG9mIHRoZSBwb3B1cFxuXG4gICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5jb250YWluZXIpIHtcbiAgICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTsgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIGNvbnRhaW5lciBidXQgbW91c2V1cCBvbiB0aGUgcG9wdXBcblxuXG4gICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gdW5kZWZpbmVkOyAvLyBXZSBhbHNvIG5lZWQgdG8gY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIGEgY2hpbGQgb2YgdGhlIHBvcHVwXG5cbiAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLnBvcHVwIHx8IGRvbUNhY2hlLnBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBkb21DYWNoZS5jb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChpZ25vcmVPdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQgIT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd091dHNpZGVDbGljaykpIHtcbiAgICAgICAgICBkaXNtaXNzV2l0aChjb25zdHJ1Y3Rvci5EaXNtaXNzUmVhc29uLmJhY2tkcm9wKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IC8vIFJldmVyc2UgYnV0dG9ucyAoQ29uZmlybSBvbiB0aGUgcmlnaHQgc2lkZSlcblxuXG4gICAgaWYgKGlubmVyUGFyYW1zLnJldmVyc2VCdXR0b25zKSB7XG4gICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvbUNhY2hlLmNhbmNlbEJ1dHRvbiwgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbiwgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKTtcbiAgICB9IC8vIEZvY3VzIGhhbmRsaW5nXG5cblxuICAgIHZhciBzZXRGb2N1cyA9IGZ1bmN0aW9uIHNldEZvY3VzKGluZGV4LCBpbmNyZW1lbnQpIHtcbiAgICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsKTsgLy8gc2VhcmNoIGZvciB2aXNpYmxlIGVsZW1lbnRzIGFuZCBzZWxlY3QgdGhlIG5leHQgcG9zc2libGUgbWF0Y2hcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50OyAvLyByb2xsb3ZlciB0byBmaXJzdCBpdGVtXG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBpbmRleCA9IDA7IC8vIGdvIHRvIGxhc3QgaXRlbVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGluZGV4ID0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb2N1c2FibGVFbGVtZW50c1tpbmRleF0uZm9jdXMoKTtcbiAgICAgIH0gLy8gbm8gdmlzaWJsZSBmb2N1c2FibGUgZWxlbWVudHMsIGZvY3VzIHRoZSBwb3B1cFxuXG5cbiAgICAgIGRvbUNhY2hlLnBvcHVwLmZvY3VzKCk7XG4gICAgfTtcblxuICAgIHZhciBrZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGUsIGlubmVyUGFyYW1zKSB7XG4gICAgICBpZiAoaW5uZXJQYXJhbXMuc3RvcEtleWRvd25Qcm9wYWdhdGlvbikge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJyb3dLZXlzID0gWydBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdBcnJvd1VwJywgJ0Fycm93RG93bicsICdMZWZ0JywgJ1JpZ2h0JywgJ1VwJywgJ0Rvd24nIC8vIElFMTFcbiAgICAgIF07XG5cbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAhZS5pc0NvbXBvc2luZykge1xuICAgICAgICBpZiAoZS50YXJnZXQgJiYgX3RoaXMuZ2V0SW5wdXQoKSAmJiBlLnRhcmdldC5vdXRlckhUTUwgPT09IF90aGlzLmdldElucHV0KCkub3V0ZXJIVE1MKSB7XG4gICAgICAgICAgaWYgKFsndGV4dGFyZWEnLCAnZmlsZSddLmluZGV4T2YoaW5uZXJQYXJhbXMuaW5wdXQpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBkbyBub3Qgc3VibWl0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3RydWN0b3IuY2xpY2tDb25maXJtKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IC8vIFRBQlxuXG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cyhpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCk7XG4gICAgICAgIHZhciBidG5JbmRleCA9IC0xO1xuXG4gICAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCA9PT0gZm9jdXNhYmxlRWxlbWVudHNbX2kyXSkge1xuICAgICAgICAgICAgYnRuSW5kZXggPSBfaTI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICAgICAgICBzZXRGb2N1cyhidG5JbmRleCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIHByZXYgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIC0xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gQVJST1dTIC0gc3dpdGNoIGZvY3VzIGJldHdlZW4gYnV0dG9uc1xuICAgICAgfSBlbHNlIGlmIChhcnJvd0tleXMuaW5kZXhPZihlLmtleSkgIT09IC0xKSB7XG4gICAgICAgIC8vIGZvY3VzIENhbmNlbCBidXR0b24gaWYgQ29uZmlybSBidXR0b24gaXMgY3VycmVudGx5IGZvY3VzZWRcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRvbUNhY2hlLmNvbmZpcm1CdXR0b24gJiYgaXNWaXNpYmxlKGRvbUNhY2hlLmNhbmNlbEJ1dHRvbikpIHtcbiAgICAgICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZm9jdXMoKTsgLy8gYW5kIHZpY2UgdmVyc2FcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb21DYWNoZS5jYW5jZWxCdXR0b24gJiYgaXNWaXNpYmxlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pKSB7XG4gICAgICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgICAgICB9IC8vIEVTQ1xuXG4gICAgICB9IGVsc2UgaWYgKChlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnKSAmJiBjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VzY2FwZUtleSkgPT09IHRydWUpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5lc2MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCkge1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4ga2V5ZG93bkhhbmRsZXIoZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgfTtcblxuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBkb21DYWNoZS5wb3B1cDtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgX3RoaXMucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcblxuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCAmJiAoaW5uZXJQYXJhbXMuaW5wdXQgfHwgaW5uZXJQYXJhbXMuZm9vdGVyIHx8IGlubmVyUGFyYW1zLnNob3dDbG9zZUJ1dHRvbikpIHtcbiAgICAgIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXSk7XG4gICAgfSAvLyBpbnB1dHNcblxuXG4gICAgdmFyIGlucHV0VHlwZXMgPSBbJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJ107XG4gICAgdmFyIGlucHV0O1xuXG4gICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgaW5wdXRUeXBlcy5sZW5ndGg7IF9pMysrKSB7XG4gICAgICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZXNbX2kzXV07XG4gICAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgaW5wdXRDbGFzcyk7XG4gICAgICBpbnB1dCA9IF90aGlzLmdldElucHV0KGlucHV0VHlwZXNbX2kzXSk7IC8vIHNldCBhdHRyaWJ1dGVzXG5cbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBmb3IgKHZhciBqIGluIGlucHV0LmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgdmFyIGF0dHJOYW1lID0gaW5wdXQuYXR0cmlidXRlc1tqXS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAoYXR0ck5hbWUgIT09ICd0eXBlJyAmJiBhdHRyTmFtZSAhPT0gJ3ZhbHVlJykge1xuICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGF0dHIgaW4gaW5uZXJQYXJhbXMuaW5wdXRBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGF0dHIsIGlubmVyUGFyYW1zLmlucHV0QXR0cmlidXRlc1thdHRyXSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gc2V0IGNsYXNzXG5cblxuICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gaW5wdXRDbGFzcztcblxuICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0Q2xhc3MpIHtcbiAgICAgICAgYWRkQ2xhc3MoaW5wdXRDb250YWluZXIsIGlubmVyUGFyYW1zLmlucHV0Q2xhc3MpO1xuICAgICAgfVxuXG4gICAgICBoaWRlKGlucHV0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICB2YXIgcG9wdWxhdGVJbnB1dE9wdGlvbnM7XG5cbiAgICBzd2l0Y2ggKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICd0ZWwnOlxuICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAge1xuICAgICAgICAgIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlubmVyUGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBpbm5lclBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICAgIGlucHV0LnR5cGUgPSBpbm5lclBhcmFtcy5pbnB1dDtcbiAgICAgICAgICBzaG93KGlucHV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAge1xuICAgICAgICAgIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gaW5uZXJQYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgICBpbnB1dC50eXBlID0gaW5uZXJQYXJhbXMuaW5wdXQ7XG4gICAgICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHJhbmdlID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLnJhbmdlKTtcbiAgICAgICAgICB2YXIgcmFuZ2VJbnB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgdmFyIHJhbmdlT3V0cHV0ID0gcmFuZ2UucXVlcnlTZWxlY3Rvcignb3V0cHV0Jyk7XG4gICAgICAgICAgcmFuZ2VJbnB1dC52YWx1ZSA9IGlubmVyUGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgICAgcmFuZ2VJbnB1dC50eXBlID0gaW5uZXJQYXJhbXMuaW5wdXQ7XG4gICAgICAgICAgcmFuZ2VPdXRwdXQudmFsdWUgPSBpbm5lclBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICAgIHNob3cocmFuZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gICAgICAgICAgc2VsZWN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gaW5uZXJQYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBvcHVsYXRlSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcG9wdWxhdGVJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRPcHRpb24pIHtcbiAgICAgICAgICAgICAgdmFyIG9wdGlvblZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICAgICAgICAgIHZhciBvcHRpb25MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlO1xuICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gb3B0aW9uTGFiZWw7XG5cbiAgICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0VmFsdWUudG9TdHJpbmcoKSA9PT0gb3B0aW9uVmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2hvdyhzZWxlY3QpO1xuICAgICAgICAgICAgc2VsZWN0LmZvY3VzKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciByYWRpbyA9IGdldENoaWxkQnlDbGFzcyhkb21DYWNoZS5jb250ZW50LCBzd2FsQ2xhc3Nlcy5yYWRpbyk7XG4gICAgICAgICAgcmFkaW8uaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICAgICAgICAgIHZhciByYWRpb1ZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICAgICAgICAgIHZhciByYWRpb0xhYmVsID0gaW5wdXRPcHRpb25bMV07XG4gICAgICAgICAgICAgIHZhciByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgdmFyIHJhZGlvTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICAgICAgICAgICAgcmFkaW9JbnB1dC5uYW1lID0gc3dhbENsYXNzZXMucmFkaW87XG4gICAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSByYWRpb1ZhbHVlO1xuXG4gICAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IHJhZGlvVmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9IHJhZGlvTGFiZWw7XG4gICAgICAgICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmxhYmVsO1xuICAgICAgICAgICAgICByYWRpb0xhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcbiAgICAgICAgICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICByYWRpby5hcHBlbmRDaGlsZChyYWRpb0xhYmVsRWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNob3cocmFkaW8pO1xuICAgICAgICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgIGlmIChyYWRpb3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJhZGlvc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgY2hlY2tib3ggPSBnZXRDaGlsZEJ5Q2xhc3MoZG9tQ2FjaGUuY29udGVudCwgc3dhbENsYXNzZXMuY2hlY2tib3gpO1xuXG4gICAgICAgICAgdmFyIGNoZWNrYm94SW5wdXQgPSBfdGhpcy5nZXRJbnB1dCgnY2hlY2tib3gnKTtcblxuICAgICAgICAgIGNoZWNrYm94SW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgY2hlY2tib3hJbnB1dC52YWx1ZSA9IDE7XG4gICAgICAgICAgY2hlY2tib3hJbnB1dC5pZCA9IHN3YWxDbGFzc2VzLmNoZWNrYm94O1xuICAgICAgICAgIGNoZWNrYm94SW5wdXQuY2hlY2tlZCA9IEJvb2xlYW4oaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgdmFyIGxhYmVsID0gY2hlY2tib3gucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGlubmVyUGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgICAgc2hvdyhjaGVja2JveCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHRleHRhcmVhID0gZ2V0Q2hpbGRCeUNsYXNzKGRvbUNhY2hlLmNvbnRlbnQsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTtcbiAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IGlubmVyUGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBpbm5lclBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICAgIHNob3codGV4dGFyZWEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcXFwidGV4dFxcXCIsIFxcXCJlbWFpbFxcXCIsIFxcXCJwYXNzd29yZFxcXCIsIFxcXCJudW1iZXJcXFwiLCBcXFwidGVsXFxcIiwgXFxcInNlbGVjdFxcXCIsIFxcXCJyYWRpb1xcXCIsIFxcXCJjaGVja2JveFxcXCIsIFxcXCJ0ZXh0YXJlYVxcXCIsIFxcXCJmaWxlXFxcIiBvciBcXFwidXJsXFxcIiwgZ290IFxcXCJcIi5jb25jYXQoaW5uZXJQYXJhbXMuaW5wdXQsIFwiXFxcIlwiKSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCA9PT0gJ3NlbGVjdCcgfHwgaW5uZXJQYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICAgIHZhciBwcm9jZXNzSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlSW5wdXRPcHRpb25zKGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChpc1RoZW5hYmxlKGlubmVyUGFyYW1zLmlucHV0T3B0aW9ucykpIHtcbiAgICAgICAgY29uc3RydWN0b3Iuc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgaW5uZXJQYXJhbXMuaW5wdXRPcHRpb25zLnRoZW4oZnVuY3Rpb24gKGlucHV0T3B0aW9ucykge1xuICAgICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICAgICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChfdHlwZW9mKGlubmVyUGFyYW1zLmlucHV0T3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5uZXJQYXJhbXMuaW5wdXRPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0LCBNYXAgb3IgUHJvbWlzZSwgZ290IFwiLmNvbmNhdChfdHlwZW9mKGlubmVyUGFyYW1zLmlucHV0T3B0aW9ucykpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFsndGV4dCcsICdlbWFpbCcsICdudW1iZXInLCAndGVsJywgJ3RleHRhcmVhJ10uaW5kZXhPZihpbm5lclBhcmFtcy5pbnB1dCkgIT09IC0xICYmIGlzVGhlbmFibGUoaW5uZXJQYXJhbXMuaW5wdXRWYWx1ZSkpIHtcbiAgICAgIGNvbnN0cnVjdG9yLnNob3dMb2FkaW5nKCk7XG4gICAgICBoaWRlKGlucHV0KTtcbiAgICAgIGlubmVyUGFyYW1zLmlucHV0VmFsdWUudGhlbihmdW5jdGlvbiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IGlubmVyUGFyYW1zLmlucHV0ID09PSAnbnVtYmVyJyA/IHBhcnNlRmxvYXQoaW5wdXRWYWx1ZSkgfHwgMCA6IGlucHV0VmFsdWUgKyAnJztcbiAgICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgX3RoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgZXJyb3IoJ0Vycm9yIGluIGlucHV0VmFsdWUgcHJvbWlzZTogJyArIGVycik7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHNob3coaW5wdXQpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuUG9wdXAoaW5uZXJQYXJhbXMpO1xuXG4gICAgaWYgKCFpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgaWYgKCFjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VudGVyS2V5KSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsICYmIGlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChpbm5lclBhcmFtcy5mb2N1c0NvbmZpcm0gJiYgaXNWaXNpYmxlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEZvY3VzKC0xLCAxKTtcbiAgICAgIH1cbiAgICB9IC8vIGZpeCBzY3JvbGxcblxuXG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gIH0pO1xufVxuXG5cblxudmFyIGluc3RhbmNlTWV0aG9kcyA9IE9iamVjdC5mcmVlemUoe1xuXHRoaWRlTG9hZGluZzogaGlkZUxvYWRpbmcsXG5cdGRpc2FibGVMb2FkaW5nOiBoaWRlTG9hZGluZyxcblx0Z2V0SW5wdXQ6IGdldElucHV0LFxuXHRlbmFibGVCdXR0b25zOiBlbmFibGVCdXR0b25zLFxuXHRkaXNhYmxlQnV0dG9uczogZGlzYWJsZUJ1dHRvbnMsXG5cdGVuYWJsZUNvbmZpcm1CdXR0b246IGVuYWJsZUNvbmZpcm1CdXR0b24sXG5cdGRpc2FibGVDb25maXJtQnV0dG9uOiBkaXNhYmxlQ29uZmlybUJ1dHRvbixcblx0ZW5hYmxlSW5wdXQ6IGVuYWJsZUlucHV0LFxuXHRkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcblx0c2hvd1ZhbGlkYXRpb25FcnJvcjogc2hvd1ZhbGlkYXRpb25FcnJvcixcblx0cmVzZXRWYWxpZGF0aW9uRXJyb3I6IHJlc2V0VmFsaWRhdGlvbkVycm9yLFxuXHRnZXRQcm9ncmVzc1N0ZXBzOiBnZXRQcm9ncmVzc1N0ZXBzJDEsXG5cdHNldFByb2dyZXNzU3RlcHM6IHNldFByb2dyZXNzU3RlcHMsXG5cdHNob3dQcm9ncmVzc1N0ZXBzOiBzaG93UHJvZ3Jlc3NTdGVwcyxcblx0aGlkZVByb2dyZXNzU3RlcHM6IGhpZGVQcm9ncmVzc1N0ZXBzLFxuXHRfbWFpbjogX21haW5cbn0pO1xuXG52YXIgY3VycmVudEluc3RhbmNlOyAvLyBTd2VldEFsZXJ0IGNvbnN0cnVjdG9yXG5cbmZ1bmN0aW9uIFN3ZWV0QWxlcnQoKSB7XG4gIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfSAvLyBDaGVjayBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBQcm9taXNlXG5cblxuICBpZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZXJyb3IoJ1RoaXMgcGFja2FnZSByZXF1aXJlcyBhIFByb21pc2UgbGlicmFyeSwgcGxlYXNlIGluY2x1ZGUgYSBzaGltIHRvIGVuYWJsZSBpdCBpbiB0aGlzIGJyb3dzZXIgKFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL3dpa2kvTWlncmF0aW9uLWZyb20tU3dlZXRBbGVydC10by1Td2VldEFsZXJ0MiMxLWllLXN1cHBvcnQpJyk7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgZXJyb3IoJ0F0IGxlYXN0IDEgYXJndW1lbnQgaXMgZXhwZWN0ZWQhJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY3VycmVudEluc3RhbmNlID0gdGhpcztcbiAgdmFyIG91dGVyUGFyYW1zID0gT2JqZWN0LmZyZWV6ZSh0aGlzLmNvbnN0cnVjdG9yLmFyZ3NUb1BhcmFtcyhhcmdzKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIHZhbHVlOiBvdXRlclBhcmFtcyxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBwcm9taXNlID0gdGhpcy5fbWFpbih0aGlzLnBhcmFtcyk7XG5cbiAgcHJpdmF0ZVByb3BzLnByb21pc2Uuc2V0KHRoaXMsIHByb21pc2UpO1xufSAvLyBgY2F0Y2hgIGNhbm5vdCBiZSB0aGUgbmFtZSBvZiBhIG1vZHVsZSBleHBvcnQsIHNvIHdlIGRlZmluZSBvdXIgdGhlbmFibGUgbWV0aG9kcyBoZXJlIGluc3RlYWRcblxuXG5Td2VldEFsZXJ0LnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIHZhciBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpO1xuICByZXR1cm4gcHJvbWlzZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbn07XG5cblN3ZWV0QWxlcnQucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgdmFyIHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcyk7XG4gIHJldHVybiBwcm9taXNlLmNhdGNoKG9uUmVqZWN0ZWQpO1xufTtcblxuU3dlZXRBbGVydC5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcyk7XG4gIHJldHVybiBwcm9taXNlLmZpbmFsbHkob25GaW5hbGx5KTtcbn07IC8vIEFzc2lnbiBpbnN0YW5jZSBtZXRob2RzIGZyb20gc3JjL2luc3RhbmNlTWV0aG9kcy8qLmpzIHRvIHByb3RvdHlwZVxuXG5cbl9leHRlbmRzKFN3ZWV0QWxlcnQucHJvdG90eXBlLCBpbnN0YW5jZU1ldGhvZHMpOyAvLyBBc3NpZ24gc3RhdGljIG1ldGhvZHMgZnJvbSBzcmMvc3RhdGljTWV0aG9kcy8qLmpzIHRvIGNvbnN0cnVjdG9yXG5cblxuX2V4dGVuZHMoU3dlZXRBbGVydCwgc3RhdGljTWV0aG9kcyk7IC8vIFByb3h5IHRvIGluc3RhbmNlIG1ldGhvZHMgdG8gY29uc3RydWN0b3IsIGZvciBub3csIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG5cbk9iamVjdC5rZXlzKGluc3RhbmNlTWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIFN3ZWV0QWxlcnRba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudEluc3RhbmNlKSB7XG4gICAgICB2YXIgX2N1cnJlbnRJbnN0YW5jZTtcblxuICAgICAgcmV0dXJuIChfY3VycmVudEluc3RhbmNlID0gY3VycmVudEluc3RhbmNlKVtrZXldLmFwcGx5KF9jdXJyZW50SW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufSk7XG5Td2VldEFsZXJ0LkRpc21pc3NSZWFzb24gPSBEaXNtaXNzUmVhc29uO1xuXG5Td2VldEFsZXJ0Lm5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcblxuU3dlZXRBbGVydC52ZXJzaW9uID0gdmVyc2lvbjtcblxudmFyIFN3YWwgPSB3aXRoTm9OZXdLZXl3b3JkKHdpdGhHbG9iYWxEZWZhdWx0cyhTd2VldEFsZXJ0KSk7XG5Td2FsLmRlZmF1bHQgPSBTd2FsO1xuXG5yZXR1cm4gU3dhbDtcblxufSkpKTtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuU3dlZXRhbGVydDIpeyAgd2luZG93LnN3YWwgPSB3aW5kb3cuc3dlZXRBbGVydCA9IHdpbmRvdy5Td2FsID0gd2luZG93LlN3ZWV0QWxlcnQgPSB3aW5kb3cuU3dlZXRhbGVydDJ9XG5cblwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtpZihlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChuKSxuLnN0eWxlU2hlZXQpbi5zdHlsZVNoZWV0LmRpc2FibGVkfHwobi5zdHlsZVNoZWV0LmNzc1RleHQ9dCk7ZWxzZSB0cnl7bi5pbm5lckhUTUw9dH1jYXRjaChlKXtuLmlubmVyVGV4dD10fX0oZG9jdW1lbnQsXCJALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItc2hvdyB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTsgfVxcblwiICtcblwiICA0NSUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cXG5cIiArXG5cIiAgODAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIHN3YWwyLXNob3cge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7IH1cXG5cIiArXG5cIiAgNDUlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XFxuXCIgK1xuXCIgIDgwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWhpZGUge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAxOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIHN3YWwyLWhpZGUge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAxOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIHRvcDogMS4xODc1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjA2MjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA1NCUge1xcblwiICtcblwiICAgIHRvcDogMS4wNjI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjEyNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDcwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAyLjE4NzVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAtLjM3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAzLjEyNWVtOyB9XFxuXCIgK1xuXCIgIDg0JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAzZW07XFxuXCIgK1xuXCIgICAgbGVmdDogMS4zMTI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEuMDYyNWVtOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIHRvcDogMi44MTI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjg3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjU2MjVlbTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIHRvcDogMS4xODc1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjA2MjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA1NCUge1xcblwiICtcblwiICAgIHRvcDogMS4wNjI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjEyNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDcwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAyLjE4NzVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAtLjM3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAzLjEyNWVtOyB9XFxuXCIgK1xuXCIgIDg0JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAzZW07XFxuXCIgK1xuXCIgICAgbGVmdDogMS4zMTI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEuMDYyNWVtOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIHRvcDogMi44MTI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjg3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjU2MjVlbTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIHRvcDogMy4zNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMi44NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA2NSUge1xcblwiICtcblwiICAgIHRvcDogMy4zNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMi44NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA4NCUge1xcblwiICtcblwiICAgIHRvcDogMi4xODc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDA7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDMuNDM3NWVtOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIHRvcDogMi4zNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogLjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMi45Mzc1ZW07IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAzLjM3NWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAyLjg3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDY1JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAzLjM3NWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAyLjg3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDg0JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAyLjE4NzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMDtcXG5cIiArXG5cIiAgICB3aWR0aDogMy40Mzc1ZW07IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAyLjM3NWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAuNWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAyLjkzNzVlbTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cIiArXG5cIiAgNSUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cIiArXG5cIiAgMTIlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cIiArXG5cIiAgNSUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cIiArXG5cIiAgMTIlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfVxcblwiICtcblwiICA1MCUge1xcblwiICtcblwiICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfVxcblwiICtcblwiICA4MCUge1xcblwiICtcblwiICAgIG1hcmdpbi10b3A6IC0uMzc1ZW07XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICBtYXJnaW4tdG9wOiAwO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgbWFyZ2luLXRvcDogMS42MjVlbTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC40KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9XFxuXCIgK1xuXCIgIDUwJSB7XFxuXCIgK1xuXCIgICAgbWFyZ2luLXRvcDogMS42MjVlbTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC40KTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9XFxuXCIgK1xuXCIgIDgwJSB7XFxuXCIgK1xuXCIgICAgbWFyZ2luLXRvcDogLS4zNzVlbTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIG1hcmdpbi10b3A6IDA7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxMDBkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwMGRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb24ge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMDBkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cImJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lciB7XFxuXCIgK1xuXCIgIHBvc2l0aW9uOiBmaXhlZDtcXG5cIiArXG5cIiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXNob3duIHtcXG5cIiArXG5cIiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wIHtcXG5cIiArXG5cIiAgICB0b3A6IDA7XFxuXCIgK1xuXCIgICAgcmlnaHQ6IGF1dG87XFxuXCIgK1xuXCIgICAgYm90dG9tOiBhdXRvO1xcblwiICtcblwiICAgIGxlZnQ6IDUwJTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XFxuXCIgK1xuXCIgICAgdG9wOiAwO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIGJvdHRvbTogYXV0bztcXG5cIiArXG5cIiAgICBsZWZ0OiBhdXRvOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdCB7XFxuXCIgK1xuXCIgICAgdG9wOiAwO1xcblwiICtcblwiICAgIHJpZ2h0OiBhdXRvO1xcblwiICtcblwiICAgIGJvdHRvbTogYXV0bztcXG5cIiArXG5cIiAgICBsZWZ0OiAwOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCB7XFxuXCIgK1xuXCIgICAgdG9wOiA1MCU7XFxuXCIgK1xuXCIgICAgcmlnaHQ6IGF1dG87XFxuXCIgK1xuXCIgICAgYm90dG9tOiBhdXRvO1xcblwiICtcblwiICAgIGxlZnQ6IDA7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XFxuXCIgK1xuXCIgICAgdG9wOiA1MCU7XFxuXCIgK1xuXCIgICAgcmlnaHQ6IGF1dG87XFxuXCIgK1xuXCIgICAgYm90dG9tOiBhdXRvO1xcblwiICtcblwiICAgIGxlZnQ6IDUwJTtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHQge1xcblwiICtcblwiICAgIHRvcDogNTAlO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIGJvdHRvbTogYXV0bztcXG5cIiArXG5cIiAgICBsZWZ0OiBhdXRvO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdCB7XFxuXCIgK1xuXCIgICAgdG9wOiBhdXRvO1xcblwiICtcblwiICAgIHJpZ2h0OiBhdXRvO1xcblwiICtcblwiICAgIGJvdHRvbTogMDtcXG5cIiArXG5cIiAgICBsZWZ0OiAwOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20ge1xcblwiICtcblwiICAgIHRvcDogYXV0bztcXG5cIiArXG5cIiAgICByaWdodDogYXV0bztcXG5cIiArXG5cIiAgICBib3R0b206IDA7XFxuXCIgK1xuXCIgICAgbGVmdDogNTAlO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcXG5cIiArXG5cIiAgICB0b3A6IGF1dG87XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDA7XFxuXCIgK1xuXCIgICAgYm90dG9tOiAwO1xcblwiICtcblwiICAgIGxlZnQ6IGF1dG87IH1cXG5cIiArXG5cIlxcblwiICtcblwiYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IHtcXG5cIiArXG5cIiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cIiArXG5cIiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25zIHtcXG5cIiArXG5cIiAgICBmbGV4OiAxO1xcblwiICtcblwiICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuXCIgK1xuXCIgICAgaGVpZ2h0OiAyLjJlbTtcXG5cIiArXG5cIiAgICBtYXJnaW4tdG9wOiAuMzEyNWVtOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZyB7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1pbnB1dCB7XFxuXCIgK1xuXCIgICAgaGVpZ2h0OiAyZW07XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAuMzEyNWVtIGF1dG87XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxZW07IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uZXJyb3Ige1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMWVtOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCB7XFxuXCIgK1xuXCIgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXCIgK1xuXCIgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXCIgK1xuXCIgIHdpZHRoOiBhdXRvO1xcblwiICtcblwiICBwYWRkaW5nOiAwLjYyNWVtO1xcblwiICtcblwiICBib3gtc2hhZG93OiAwIDAgMC42MjVlbSAjZDlkOWQ5O1xcblwiICtcblwiICBvdmVyZmxvdy15OiBoaWRkZW47IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1oZWFkZXIge1xcblwiICtcblwiICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi10aXRsZSB7XFxuXCIgK1xuXCIgICAgZmxleC1ncm93OiAxO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cIiArXG5cIiAgICBtYXJnaW46IDAgLjZlbTtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDFlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWZvb3RlciB7XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAwLjVlbSAwIDA7XFxuXCIgK1xuXCIgICAgcGFkZGluZzogMC41ZW0gMCAwO1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMC44ZW07IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1jbG9zZSB7XFxuXCIgK1xuXCIgICAgcG9zaXRpb246IGluaXRpYWw7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDAuOGVtO1xcblwiICtcblwiICAgIGhlaWdodDogMC44ZW07XFxuXCIgK1xuXCIgICAgbGluZS1oZWlnaHQ6IDAuODsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNvbnRlbnQge1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDFlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24ge1xcblwiICtcblwiICAgIHdpZHRoOiAyZW07XFxuXCIgK1xuXCIgICAgbWluLXdpZHRoOiAyZW07XFxuXCIgK1xuXCIgICAgaGVpZ2h0OiAyZW07XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAwOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLXRleHQge1xcblwiICtcblwiICAgICAgZm9udC1zaXplOiAyZW07XFxuXCIgK1xuXCIgICAgICBmb250LXdlaWdodDogYm9sZDtcXG5cIiArXG5cIiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcXG5cIiArXG5cIiAgICAgIHdpZHRoOiAyZW07XFxuXCIgK1xuXCIgICAgICBoZWlnaHQ6IDJlbTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddIHtcXG5cIiArXG5cIiAgICAgIHRvcDogLjg3NWVtO1xcblwiICtcblwiICAgICAgd2lkdGg6IDEuMzc1ZW07IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddW2NsYXNzJD0nbGVmdCddIHtcXG5cIiArXG5cIiAgICAgICAgbGVmdDogLjMxMjVlbTsgfVxcblwiICtcblwiICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ11bY2xhc3MkPSdyaWdodCddIHtcXG5cIiArXG5cIiAgICAgICAgcmlnaHQ6IC4zMTI1ZW07IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25zIHtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IGF1dG87XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAwIC4zMTI1ZW07IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWQge1xcblwiICtcblwiICAgIG1hcmdpbjogMCAuMzEyNWVtO1xcblwiICtcblwiICAgIHBhZGRpbmc6IC4zMTI1ZW0gLjYyNWVtO1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMWVtOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWQ6Zm9jdXMge1xcblwiICtcblwiICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4wNjI1ZW0gI2ZmZiwgMCAwIDAgMC4xMjVlbSByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Mge1xcblwiICtcblwiICAgIGJvcmRlci1jb2xvcjogI2E1ZGM4NjsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7XFxuXCIgK1xuXCIgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMmVtO1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAyLjgxMjVlbTtcXG5cIiArXG5cIiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XFxuXCIgK1xuXCIgICAgICAgIHRvcDogLS4yNWVtO1xcblwiICtcblwiICAgICAgICBsZWZ0OiAtLjkzNzVlbTtcXG5cIiArXG5cIiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAyZW0gMmVtO1xcblwiICtcblwiICAgICAgICBib3JkZXItcmFkaXVzOiA0ZW0gMCAwIDRlbTsgfVxcblwiICtcblwiICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XFxuXCIgK1xuXCIgICAgICAgIHRvcDogLS4yNWVtO1xcblwiICtcblwiICAgICAgICBsZWZ0OiAuOTM3NWVtO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMmVtO1xcblwiICtcblwiICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMmVtO1xcblwiICtcblwiICAgICAgICBib3JkZXItcmFkaXVzOiAwIDRlbSA0ZW0gMDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcXG5cIiArXG5cIiAgICAgIHdpZHRoOiAyZW07XFxuXCIgK1xuXCIgICAgICBoZWlnaHQ6IDJlbTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXgge1xcblwiICtcblwiICAgICAgdG9wOiAwO1xcblwiICtcblwiICAgICAgbGVmdDogLjQzNzVlbTtcXG5cIiArXG5cIiAgICAgIHdpZHRoOiAuNDM3NWVtO1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAyLjY4NzVlbTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XFxuXCIgK1xuXCIgICAgICBoZWlnaHQ6IC4zMTI1ZW07IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXVtjbGFzcyQ9J3RpcCddIHtcXG5cIiArXG5cIiAgICAgICAgdG9wOiAxLjEyNWVtO1xcblwiICtcblwiICAgICAgICBsZWZ0OiAuMTg3NWVtO1xcblwiICtcblwiICAgICAgICB3aWR0aDogLjc1ZW07IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXVtjbGFzcyQ9J2xvbmcnXSB7XFxuXCIgK1xuXCIgICAgICAgIHRvcDogLjkzNzVlbTtcXG5cIiArXG5cIiAgICAgICAgcmlnaHQ6IC4xODc1ZW07XFxuXCIgK1xuXCIgICAgICAgIHdpZHRoOiAxLjM3NWVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdC5zd2FsMi1zaG93IHtcXG5cIiArXG5cIiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2hvd1N3ZWV0VG9hc3QgLjVzO1xcblwiICtcblwiICAgICAgICAgICAgYW5pbWF0aW9uOiBzaG93U3dlZXRUb2FzdCAuNXM7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGUge1xcblwiICtcblwiICAgIC13ZWJraXQtYW5pbWF0aW9uOiBoaWRlU3dlZXRUb2FzdCAuMnMgZm9yd2FyZHM7XFxuXCIgK1xuXCIgICAgICAgICAgICBhbmltYXRpb246IGhpZGVTd2VldFRvYXN0IC4ycyBmb3J3YXJkczsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcCAuNzVzO1xcblwiICtcblwiICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtdGlwIC43NXM7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcge1xcblwiICtcblwiICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyAuNzVzO1xcblwiICtcblwiICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyAuNzVzOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBzaG93U3dlZXRUb2FzdCB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC42MjVlbSkgcm90YXRlWigyZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC42MjVlbSkgcm90YXRlWigyZGVnKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9XFxuXCIgK1xuXCIgIDMzJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogLjU7IH1cXG5cIiArXG5cIiAgNjYlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjMxMjVlbSkgcm90YXRlWigyZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjMxMjVlbSkgcm90YXRlWigyZGVnKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAuNzsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBrZXlmcmFtZXMgc2hvd1N3ZWV0VG9hc3Qge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNjI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNjI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMDsgfVxcblwiICtcblwiICAzMyUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IC41OyB9XFxuXCIgK1xuXCIgIDY2JSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogLjc7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDE7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJALXdlYmtpdC1rZXlmcmFtZXMgaGlkZVN3ZWV0VG9hc3Qge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgb3BhY2l0eTogMTsgfVxcblwiICtcblwiICAzMyUge1xcblwiICtcblwiICAgIG9wYWNpdHk6IC41OyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xcblwiICtcblwiICAgIG9wYWNpdHk6IDA7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJAa2V5ZnJhbWVzIGhpZGVTd2VldFRvYXN0IHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIG9wYWNpdHk6IDE7IH1cXG5cIiArXG5cIiAgMzMlIHtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAuNTsgfVxcblwiICtcblwiICAxMDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcXG5cIiArXG5cIiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy10aXAge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAuNTYyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4wNjI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNTQlIHtcXG5cIiArXG5cIiAgICB0b3A6IC4xMjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAuMTI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgNzAlIHtcXG5cIiArXG5cIiAgICB0b3A6IC42MjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAtLjI1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEuNjI1ZW07IH1cXG5cIiArXG5cIiAgODQlIHtcXG5cIiArXG5cIiAgICB0b3A6IDEuMDYyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC43NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAuNWVtOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIHRvcDogMS4xMjVlbTtcXG5cIiArXG5cIiAgICBsZWZ0OiAuMTg3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAuNzVlbTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBrZXlmcmFtZXMgYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcCB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICB0b3A6IC41NjI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjA2MjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA1NCUge1xcblwiICtcblwiICAgIHRvcDogLjEyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4xMjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA3MCUge1xcblwiICtcblwiICAgIHRvcDogLjYyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC0uMjVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMS42MjVlbTsgfVxcblwiICtcblwiICA4NCUge1xcblwiICtcblwiICAgIHRvcDogMS4wNjI1ZW07XFxuXCIgK1xuXCIgICAgbGVmdDogLjc1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IC41ZW07IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAxLjEyNWVtO1xcblwiICtcblwiICAgIGxlZnQ6IC4xODc1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IC43NWVtOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy1sb25nIHtcXG5cIiArXG5cIiAgMCUge1xcblwiICtcblwiICAgIHRvcDogMS42MjVlbTtcXG5cIiArXG5cIiAgICByaWdodDogMS4zNzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMDsgfVxcblwiICtcblwiICA2NSUge1xcblwiICtcblwiICAgIHRvcDogMS4yNWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAuOTM3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDg0JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAuOTM3NWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAwO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjEyNWVtOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIHRvcDogLjkzNzVlbTtcXG5cIiArXG5cIiAgICByaWdodDogLjE4NzVlbTtcXG5cIiArXG5cIiAgICB3aWR0aDogMS4zNzVlbTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBrZXlmcmFtZXMgYW5pbWF0ZS10b2FzdC1zdWNjZXNzLWxvbmcge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAxLjYyNWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAxLjM3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAwOyB9XFxuXCIgK1xuXCIgIDY1JSB7XFxuXCIgK1xuXCIgICAgdG9wOiAxLjI1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IC45Mzc1ZW07XFxuXCIgK1xuXCIgICAgd2lkdGg6IDA7IH1cXG5cIiArXG5cIiAgODQlIHtcXG5cIiArXG5cIiAgICB0b3A6IC45Mzc1ZW07XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDA7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEuMTI1ZW07IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgdG9wOiAuOTM3NWVtO1xcblwiICtcblwiICAgIHJpZ2h0OiAuMTg3NWVtO1xcblwiICtcblwiICAgIHdpZHRoOiAxLjM3NWVtOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiYm9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSB7XFxuXCIgK1xuXCIgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxcblwiICtcblwiXFxuXCIgK1xuXCJib2R5LnN3YWwyLWhlaWdodC1hdXRvIHtcXG5cIiArXG5cIiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IH1cXG5cIiArXG5cIlxcblwiICtcblwiYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24ge1xcblwiICtcblwiICB0b3A6IGF1dG87XFxuXCIgK1xuXCIgIHJpZ2h0OiBhdXRvO1xcblwiICtcblwiICBib3R0b206IGF1dG87XFxuXCIgK1xuXCIgIGxlZnQ6IGF1dG87XFxuXCIgK1xuXCIgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duID4gLnN3YWwyLW1vZGFsIHtcXG5cIiArXG5cIiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItdG9wIHtcXG5cIiArXG5cIiAgICB0b3A6IDA7XFxuXCIgK1xuXCIgICAgbGVmdDogNTAlO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItdG9wLWxlZnQge1xcblwiICtcblwiICAgIHRvcDogMDtcXG5cIiArXG5cIiAgICBsZWZ0OiAwOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1lbmQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1yaWdodCB7XFxuXCIgK1xuXCIgICAgdG9wOiAwO1xcblwiICtcblwiICAgIHJpZ2h0OiAwOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlciB7XFxuXCIgK1xuXCIgICAgdG9wOiA1MCU7XFxuXCIgK1xuXCIgICAgbGVmdDogNTAlO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcblwiICtcblwiICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1sZWZ0IHtcXG5cIiArXG5cIiAgICB0b3A6IDUwJTtcXG5cIiArXG5cIiAgICBsZWZ0OiAwO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1lbmQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1yaWdodCB7XFxuXCIgK1xuXCIgICAgdG9wOiA1MCU7XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDA7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXCIgK1xuXCIgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cXG5cIiArXG5cIiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tIHtcXG5cIiArXG5cIiAgICBib3R0b206IDA7XFxuXCIgK1xuXCIgICAgbGVmdDogNTAlO1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLWxlZnQge1xcblwiICtcblwiICAgIGJvdHRvbTogMDtcXG5cIiArXG5cIiAgICBsZWZ0OiAwOyB9XFxuXCIgK1xuXCIgIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1lbmQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1yaWdodCB7XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDA7XFxuXCIgK1xuXCIgICAgYm90dG9tOiAwOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIi5zd2FsMi1jb250YWluZXIge1xcblwiICtcblwiICBkaXNwbGF5OiBmbGV4O1xcblwiICtcblwiICBwb3NpdGlvbjogZml4ZWQ7XFxuXCIgK1xuXCIgIHRvcDogMDtcXG5cIiArXG5cIiAgcmlnaHQ6IDA7XFxuXCIgK1xuXCIgIGJvdHRvbTogMDtcXG5cIiArXG5cIiAgbGVmdDogMDtcXG5cIiArXG5cIiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cIiArXG5cIiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cIiArXG5cIiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXCIgK1xuXCIgIHBhZGRpbmc6IDEwcHg7XFxuXCIgK1xuXCIgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblwiICtcblwiICB6LWluZGV4OiAxMDYwO1xcblwiICtcblwiICBvdmVyZmxvdy14OiBoaWRkZW47XFxuXCIgK1xuXCIgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQge1xcblwiICtcblwiICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0IHtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyIHtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0IHtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20ge1xcblwiICtcblwiICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdCB7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctZnVsbHNjcmVlbiA+IC5zd2FsMi1tb2RhbCB7XFxuXCIgK1xuXCIgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcblwiICtcblwiICAgIGZsZXg6IDE7XFxuXCIgK1xuXCIgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctcm93ID4gLnN3YWwyLW1vZGFsIHtcXG5cIiArXG5cIiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuXCIgK1xuXCIgICAgZmxleDogMTtcXG5cIiArXG5cIiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbiB7XFxuXCIgK1xuXCIgICAgZmxleDogMTtcXG5cIiArXG5cIiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbSB7XFxuXCIgK1xuXCIgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3Atc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtbGVmdCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItbGVmdCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tbGVmdCB7XFxuXCIgK1xuXCIgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLXJpZ2h0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1yaWdodCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tcmlnaHQge1xcblwiICtcblwiICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbiA+IC5zd2FsMi1tb2RhbCB7XFxuXCIgK1xuXCIgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuXCIgK1xuXCIgICAgICBmbGV4OiAxO1xcblwiICtcblwiICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcblwiICtcblwiICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWNvbnRhaW5lcjpub3QoLnN3YWwyLXRvcCk6bm90KC5zd2FsMi10b3Atc3RhcnQpOm5vdCguc3dhbDItdG9wLWVuZCk6bm90KC5zd2FsMi10b3AtbGVmdCk6bm90KC5zd2FsMi10b3AtcmlnaHQpOm5vdCguc3dhbDItY2VudGVyLXN0YXJ0KTpub3QoLnN3YWwyLWNlbnRlci1lbmQpOm5vdCguc3dhbDItY2VudGVyLWxlZnQpOm5vdCguc3dhbDItY2VudGVyLXJpZ2h0KTpub3QoLnN3YWwyLWJvdHRvbSk6bm90KC5zd2FsMi1ib3R0b20tc3RhcnQpOm5vdCguc3dhbDItYm90dG9tLWVuZCk6bm90KC5zd2FsMi1ib3R0b20tbGVmdCk6bm90KC5zd2FsMi1ib3R0b20tcmlnaHQpOm5vdCguc3dhbDItZ3Jvdy1mdWxsc2NyZWVuKSA+IC5zd2FsMi1tb2RhbCB7XFxuXCIgK1xuXCIgICAgbWFyZ2luOiBhdXRvOyB9XFxuXCIgK1xuXCIgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XFxuXCIgK1xuXCIgICAgLnN3YWwyLWNvbnRhaW5lciAuc3dhbDItbW9kYWwge1xcblwiICtcblwiICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH0gfVxcblwiICtcblwiICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWZhZGUge1xcblwiICtcblwiICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjFzOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1jb250YWluZXIuc3dhbDItc2hvd24ge1xcblwiICtcblwiICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItcG9wdXAge1xcblwiICtcblwiICBkaXNwbGF5OiBub25lO1xcblwiICtcblwiICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXCIgK1xuXCIgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXCIgK1xuXCIgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblwiICtcblwiICB3aWR0aDogMzJlbTtcXG5cIiArXG5cIiAgbWF4LXdpZHRoOiAxMDAlO1xcblwiICtcblwiICBwYWRkaW5nOiAxLjI1ZW07XFxuXCIgK1xuXCIgIGJvcmRlci1yYWRpdXM6IDAuMzEyNWVtO1xcblwiICtcblwiICBiYWNrZ3JvdW5kOiAjZmZmO1xcblwiICtcblwiICBmb250LWZhbWlseTogaW5oZXJpdDtcXG5cIiArXG5cIiAgZm9udC1zaXplOiAxcmVtO1xcblwiICtcblwiICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cDpmb2N1cyB7XFxuXCIgK1xuXCIgICAgb3V0bGluZTogbm9uZTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAuc3dhbDItbG9hZGluZyB7XFxuXCIgK1xuXCIgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItaGVhZGVyIHtcXG5cIiArXG5cIiAgICBkaXNwbGF5OiBmbGV4O1xcblwiICtcblwiICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXRpdGxlIHtcXG5cIiArXG5cIiAgICBkaXNwbGF5OiBibG9jaztcXG5cIiArXG5cIiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXCIgK1xuXCIgICAgbWF4LXdpZHRoOiAxMDAlO1xcblwiICtcblwiICAgIG1hcmdpbjogMCAwIDAuNGVtO1xcblwiICtcblwiICAgIHBhZGRpbmc6IDA7XFxuXCIgK1xuXCIgICAgY29sb3I6ICM1OTU5NTk7XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxLjg3NWVtO1xcblwiICtcblwiICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXCIgK1xuXCIgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblwiICtcblwiICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcblwiICtcblwiICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnMge1xcblwiICtcblwiICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cIiArXG5cIiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblwiICtcblwiICAgIG1hcmdpbjogMS4yNWVtIGF1dG8gMDtcXG5cIiArXG5cIiAgICB6LWluZGV4OiAxOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZFtkaXNhYmxlZF0ge1xcblwiICtcblwiICAgICAgb3BhY2l0eTogLjQ7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmhvdmVyIHtcXG5cIiArXG5cIiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSksIHJnYmEoMCwgMCwgMCwgMC4xKSk7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmFjdGl2ZSB7XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJtIHtcXG5cIiArXG5cIiAgICAgIHdpZHRoOiAyLjVlbTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogMi41ZW07XFxuXCIgK1xuXCIgICAgICBtYXJnaW46IC40Njg3NWVtO1xcblwiICtcblwiICAgICAgcGFkZGluZzogMDtcXG5cIiArXG5cIiAgICAgIGJvcmRlcjogLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcblwiICtcblwiICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cIiArXG5cIiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuXCIgK1xuXCIgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuXCIgK1xuXCIgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuXCIgK1xuXCIgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblwiICtcblwiICAgICAgLXdlYmtpdC1hbmltYXRpb246IHN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcXG5cIiArXG5cIiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XFxuXCIgK1xuXCIgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblwiICtcblwiICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cIiArXG5cIiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXCIgK1xuXCIgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWwge1xcblwiICtcblwiICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcblwiICtcblwiICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyA6bm90KC5zd2FsMi1zdHlsZWQpLnN3YWwyLWNvbmZpcm06OmFmdGVyIHtcXG5cIiArXG5cIiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cIiArXG5cIiAgICAgIHdpZHRoOiAxNXB4O1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAxNXB4O1xcblwiICtcblwiICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXG5cIiArXG5cIiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM5OTk5OTk7XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcblwiICtcblwiICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggI2ZmZjtcXG5cIiArXG5cIiAgICAgIGNvbnRlbnQ6ICcnO1xcblwiICtcblwiICAgICAgLXdlYmtpdC1hbmltYXRpb246IHN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcXG5cIiArXG5cIiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQge1xcblwiICtcblwiICAgIG1hcmdpbjogLjMxMjVlbTtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAuNjI1ZW0gMmVtO1xcblwiICtcblwiICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuXCIgK1xuXCIgICAgYm94LXNoYWRvdzogbm9uZTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkOm5vdChbZGlzYWJsZWRdKSB7XFxuXCIgK1xuXCIgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJtIHtcXG5cIiArXG5cIiAgICAgIGJvcmRlcjogMDtcXG5cIiArXG5cIiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG5cIiArXG5cIiAgICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4NWQ2O1xcblwiICtcblwiICAgICAgY29sb3I6ICNmZmY7XFxuXCIgK1xuXCIgICAgICBmb250LXNpemU6IDEuMDYyNWVtOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2VsIHtcXG5cIiArXG5cIiAgICAgIGJvcmRlcjogMDtcXG5cIiArXG5cIiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG5cIiArXG5cIiAgICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xcblwiICtcblwiICAgICAgY29sb3I6ICNmZmY7XFxuXCIgK1xuXCIgICAgICBmb250LXNpemU6IDEuMDYyNWVtOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1zdHlsZWQ6Zm9jdXMge1xcblwiICtcblwiICAgICAgb3V0bGluZTogbm9uZTtcXG5cIiArXG5cIiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmLCAwIDAgMCA0cHggcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXN0eWxlZDo6LW1vei1mb2N1cy1pbm5lciB7XFxuXCIgK1xuXCIgICAgICBib3JkZXI6IDA7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1mb290ZXIge1xcblwiICtcblwiICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblwiICtcblwiICAgIG1hcmdpbjogMS4yNWVtIDAgMDtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAxZW0gMCAwO1xcblwiICtcblwiICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xcblwiICtcblwiICAgIGNvbG9yOiAjNTQ1NDU0O1xcblwiICtcblwiICAgIGZvbnQtc2l6ZTogMWVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItaW1hZ2Uge1xcblwiICtcblwiICAgIG1heC13aWR0aDogMTAwJTtcXG5cIiArXG5cIiAgICBtYXJnaW46IDEuMjVlbSBhdXRvOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItY2xvc2Uge1xcblwiICtcblwiICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cIiArXG5cIiAgICB0b3A6IDA7XFxuXCIgK1xuXCIgICAgcmlnaHQ6IDA7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEuMmVtO1xcblwiICtcblwiICAgIGhlaWdodDogMS4yZW07XFxuXCIgK1xuXCIgICAgcGFkZGluZzogMDtcXG5cIiArXG5cIiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2Utb3V0O1xcblwiICtcblwiICAgIGJvcmRlcjogbm9uZTtcXG5cIiArXG5cIiAgICBib3JkZXItcmFkaXVzOiAwO1xcblwiICtcblwiICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcblwiICtcblwiICAgIGNvbG9yOiAjY2NjY2NjO1xcblwiICtcblwiICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDIuNWVtO1xcblwiICtcblwiICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuXCIgK1xuXCIgICAgY3Vyc29yOiBwb2ludGVyO1xcblwiICtcblwiICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWNsb3NlOmhvdmVyIHtcXG5cIiArXG5cIiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcblwiICtcblwiICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxuXCIgK1xuXCIgICAgICBjb2xvcjogI2YyNzQ3NDsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgPiAuc3dhbDItaW5wdXQsXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCA+IC5zd2FsMi1maWxlLFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgPiAuc3dhbDItdGV4dGFyZWEsXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCA+IC5zd2FsMi1zZWxlY3QsXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCA+IC5zd2FsMi1yYWRpbyxcXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwID4gLnN3YWwyLWNoZWNrYm94IHtcXG5cIiArXG5cIiAgICBkaXNwbGF5OiBub25lOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItY29udGVudCB7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAwO1xcblwiICtcblwiICAgIHBhZGRpbmc6IDA7XFxuXCIgK1xuXCIgICAgY29sb3I6ICM1NDU0NTQ7XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxLjEyNWVtO1xcblwiICtcblwiICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuXCIgK1xuXCIgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cIiArXG5cIiAgICB6LWluZGV4OiAxO1xcblwiICtcblwiICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgI3N3YWwyLWNvbnRlbnQge1xcblwiICtcblwiICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUsXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWEsXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItc2VsZWN0LFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvLFxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLWNoZWNrYm94IHtcXG5cIiArXG5cIiAgICBtYXJnaW46IDFlbSBhdXRvOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQsXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZSxcXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYSB7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEwMCU7XFxuXCIgK1xuXCIgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcywgYm94LXNoYWRvdyAuM3M7XFxuXCIgK1xuXCIgICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcXG5cIiArXG5cIiAgICBib3JkZXItcmFkaXVzOiAwLjE4NzVlbTtcXG5cIiArXG5cIiAgICBmb250LXNpemU6IDEuMTI1ZW07XFxuXCIgK1xuXCIgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuXCIgK1xuXCIgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQuc3dhbDItaW5wdXRlcnJvcixcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUuc3dhbDItaW5wdXRlcnJvcixcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhLnN3YWwyLWlucHV0ZXJyb3Ige1xcblwiICtcblwiICAgICAgYm9yZGVyLWNvbG9yOiAjZjI3NDc0ICFpbXBvcnRhbnQ7XFxuXCIgK1xuXCIgICAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNmMjc0NzQgIWltcG9ydGFudDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6Zm9jdXMsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOmZvY3VzLFxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6Zm9jdXMge1xcblwiICtcblwiICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I0ZGJlZDtcXG5cIiArXG5cIiAgICAgIG91dGxpbmU6IG5vbmU7XFxuXCIgK1xuXCIgICAgICBib3gtc2hhZG93OiAwIDAgM3B4ICNjNGU2ZjU7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG5cIiArXG5cIiAgICAgIGNvbG9yOiAjY2NjY2NjOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuXCIgK1xuXCIgICAgICBjb2xvcjogI2NjY2NjYzsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcblwiICtcblwiICAgICAgY29sb3I6ICNjY2NjY2M7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0OjpwbGFjZWhvbGRlcixcXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6OnBsYWNlaG9sZGVyLFxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG5cIiArXG5cIiAgICAgIGNvbG9yOiAjY2NjY2NjOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2UgaW5wdXQge1xcblwiICtcblwiICAgIHdpZHRoOiA4MCU7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYW5nZSBvdXRwdXQge1xcblwiICtcblwiICAgIHdpZHRoOiAyMCU7XFxuXCIgK1xuXCIgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cIiArXG5cIiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYW5nZSBpbnB1dCxcXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYW5nZSBvdXRwdXQge1xcblwiICtcblwiICAgIGhlaWdodDogMi42MjVlbTtcXG5cIiArXG5cIiAgICBtYXJnaW46IDFlbSBhdXRvO1xcblwiICtcblwiICAgIHBhZGRpbmc6IDA7XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxLjEyNWVtO1xcblwiICtcblwiICAgIGxpbmUtaGVpZ2h0OiAyLjYyNWVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQge1xcblwiICtcblwiICAgIGhlaWdodDogMi42MjVlbTtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAwIDAuNzVlbTsgfVxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xcblwiICtcblwiICAgICAgbWF4LXdpZHRoOiAxMGVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZSB7XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxLjEyNWVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWEge1xcblwiICtcblwiICAgIGhlaWdodDogNi43NWVtO1xcblwiICtcblwiICAgIHBhZGRpbmc6IDAuNzVlbTsgfVxcblwiICtcblwiICAuc3dhbDItcG9wdXAgLnN3YWwyLXNlbGVjdCB7XFxuXCIgK1xuXCIgICAgbWluLXdpZHRoOiA1MCU7XFxuXCIgK1xuXCIgICAgbWF4LXdpZHRoOiAxMDAlO1xcblwiICtcblwiICAgIHBhZGRpbmc6IC4zNzVlbSAuNjI1ZW07XFxuXCIgK1xuXCIgICAgY29sb3I6ICM1NDU0NTQ7XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxLjEyNWVtOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFkaW8sXFxuXCIgK1xuXCIgIC5zd2FsMi1wb3B1cCAuc3dhbDItY2hlY2tib3gge1xcblwiICtcblwiICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXCIgK1xuXCIgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvIGxhYmVsLFxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItY2hlY2tib3ggbGFiZWwge1xcblwiICtcblwiICAgICAgbWFyZ2luOiAwIC42ZW07XFxuXCIgK1xuXCIgICAgICBmb250LXNpemU6IDEuMTI1ZW07IH1cXG5cIiArXG5cIiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvIGlucHV0LFxcblwiICtcblwiICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItY2hlY2tib3ggaW5wdXQge1xcblwiICtcblwiICAgICAgbWFyZ2luOiAwIC40ZW07IH1cXG5cIiArXG5cIiAgLnN3YWwyLXBvcHVwIC5zd2FsMi12YWxpZGF0aW9uZXJyb3Ige1xcblwiICtcblwiICAgIGRpc3BsYXk6IG5vbmU7XFxuXCIgK1xuXCIgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cIiArXG5cIiAgICBwYWRkaW5nOiAwLjYyNWVtO1xcblwiICtcblwiICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuXCIgK1xuXCIgICAgY29sb3I6ICM2NjY2NjY7XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAxZW07XFxuXCIgK1xuXCIgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG5cIiArXG5cIiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXBvcHVwIC5zd2FsMi12YWxpZGF0aW9uZXJyb3I6OmJlZm9yZSB7XFxuXCIgK1xuXCIgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMS41ZW07XFxuXCIgK1xuXCIgICAgICBtaW4td2lkdGg6IDEuNWVtO1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAxLjVlbTtcXG5cIiArXG5cIiAgICAgIG1hcmdpbjogMCAuNjI1ZW07XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI3NDc0O1xcblwiICtcblwiICAgICAgY29sb3I6ICNmZmY7XFxuXCIgK1xuXCIgICAgICBmb250LXdlaWdodDogNjAwO1xcblwiICtcblwiICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcblwiICtcblwiICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblwiICtcblwiICAgICAgY29udGVudDogJyEnO1xcblwiICtcblwiICAgICAgem9vbTogbm9ybWFsOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOiB0cnVlKSB7XFxuXCIgK1xuXCIgIC5zd2FsMi1yYW5nZSBpbnB1dCB7XFxuXCIgK1xuXCIgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxcblwiICtcblwiICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcXG5cIiArXG5cIiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cIiArXG5cIlxcblwiICtcblwiQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG5cIiArXG5cIiAgLnN3YWwyLXJhbmdlIGlucHV0IHtcXG5cIiArXG5cIiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1yYW5nZSBvdXRwdXQge1xcblwiICtcblwiICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblwiICtcblwiXFxuXCIgK1xuXCJALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcblwiICtcblwiICAuc3dhbDItY2xvc2U6Zm9jdXMge1xcblwiICtcblwiICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIi5zd2FsMi1pY29uIHtcXG5cIiArXG5cIiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblwiICtcblwiICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cIiArXG5cIiAgd2lkdGg6IDVlbTtcXG5cIiArXG5cIiAgaGVpZ2h0OiA1ZW07XFxuXCIgK1xuXCIgIG1hcmdpbjogMS4yNWVtIGF1dG8gMS44NzVlbTtcXG5cIiArXG5cIiAgYm9yZGVyOiAuMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG5cIiArXG5cIiAgYm9yZGVyLXJhZGl1czogNTAlO1xcblwiICtcblwiICBsaW5lLWhlaWdodDogNWVtO1xcblwiICtcblwiICBjdXJzb3I6IGRlZmF1bHQ7XFxuXCIgK1xuXCIgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcblwiICtcblwiICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblwiICtcblwiICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcblwiICtcblwiICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcblwiICtcblwiICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcblwiICtcblwiICB6b29tOiBub3JtYWw7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWljb24tdGV4dCB7XFxuXCIgK1xuXCIgICAgZm9udC1zaXplOiAzLjc1ZW07IH1cXG5cIiArXG5cIiAgLnN3YWwyLWljb24uc3dhbDItZXJyb3Ige1xcblwiICtcblwiICAgIGJvcmRlci1jb2xvcjogI2YyNzQ3NDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmsge1xcblwiICtcblwiICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblwiICtcblwiICAgICAgZmxleC1ncm93OiAxOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XFxuXCIgK1xuXCIgICAgICBkaXNwbGF5OiBibG9jaztcXG5cIiArXG5cIiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cIiArXG5cIiAgICAgIHRvcDogMi4zMTI1ZW07XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMi45Mzc1ZW07XFxuXCIgK1xuXCIgICAgICBoZWlnaHQ6IC4zMTI1ZW07XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiAuMTI1ZW07XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI3NDc0OyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddW2NsYXNzJD0nbGVmdCddIHtcXG5cIiArXG5cIiAgICAgICAgbGVmdDogMS4wNjI1ZW07XFxuXCIgK1xuXCIgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblwiICtcblwiICAgICAgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXVtjbGFzcyQ9J3JpZ2h0J10ge1xcblwiICtcblwiICAgICAgICByaWdodDogMWVtO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuXCIgK1xuXCIgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcblwiICtcblwiICAuc3dhbDItaWNvbi5zd2FsMi13YXJuaW5nIHtcXG5cIiArXG5cIiAgICBib3JkZXItY29sb3I6ICNmYWNlYTg7XFxuXCIgK1xuXCIgICAgY29sb3I6ICNmOGJiODY7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWljb24uc3dhbDItaW5mbyB7XFxuXCIgK1xuXCIgICAgYm9yZGVyLWNvbG9yOiAjOWRlMGY2O1xcblwiICtcblwiICAgIGNvbG9yOiAjM2ZjM2VlOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1pY29uLnN3YWwyLXF1ZXN0aW9uIHtcXG5cIiArXG5cIiAgICBib3JkZXItY29sb3I6ICNjOWRhZTE7XFxuXCIgK1xuXCIgICAgY29sb3I6ICM4N2FkYmQ7IH1cXG5cIiArXG5cIiAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyB7XFxuXCIgK1xuXCIgICAgYm9yZGVyLWNvbG9yOiAjYTVkYzg2OyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7XFxuXCIgK1xuXCIgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMy43NWVtO1xcblwiICtcblwiICAgICAgaGVpZ2h0OiA3LjVlbTtcXG5cIiArXG5cIiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuXCIgK1xuXCIgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ11bY2xhc3MkPSdsZWZ0J10ge1xcblwiICtcblwiICAgICAgICB0b3A6IC0uNDM3NWVtO1xcblwiICtcblwiICAgICAgICBsZWZ0OiAtMi4wNjM1ZW07XFxuXCIgK1xuXCIgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDMuNzVlbSAzLjc1ZW07XFxuXCIgK1xuXCIgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMy43NWVtIDMuNzVlbTtcXG5cIiArXG5cIiAgICAgICAgYm9yZGVyLXJhZGl1czogNy41ZW0gMCAwIDcuNWVtOyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XFxuXCIgK1xuXCIgICAgICAgIHRvcDogLS42ODc1ZW07XFxuXCIgK1xuXCIgICAgICAgIGxlZnQ6IDEuODc1ZW07XFxuXCIgK1xuXCIgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcblwiICtcblwiICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMy43NWVtO1xcblwiICtcblwiICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMy43NWVtO1xcblwiICtcblwiICAgICAgICBib3JkZXItcmFkaXVzOiAwIDcuNWVtIDcuNWVtIDA7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xcblwiICtcblwiICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcblwiICtcblwiICAgICAgdG9wOiAtLjI1ZW07XFxuXCIgK1xuXCIgICAgICBsZWZ0OiAtLjI1ZW07XFxuXCIgK1xuXCIgICAgICB3aWR0aDogMTAwJTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogMTAwJTtcXG5cIiArXG5cIiAgICAgIGJvcmRlcjogMC4yNWVtIHNvbGlkIHJnYmEoMTY1LCAyMjAsIDEzNCwgMC4zKTtcXG5cIiArXG5cIiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cIiArXG5cIiAgICAgIHotaW5kZXg6IDI7XFxuXCIgK1xuXCIgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxcblwiICtcblwiICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcXG5cIiArXG5cIiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cIiArXG5cIiAgICAgIHRvcDogLjVlbTtcXG5cIiArXG5cIiAgICAgIGxlZnQ6IDEuNjI1ZW07XFxuXCIgK1xuXCIgICAgICB3aWR0aDogLjQzNzVlbTtcXG5cIiArXG5cIiAgICAgIGhlaWdodDogNS42MjVlbTtcXG5cIiArXG5cIiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG5cIiArXG5cIiAgICAgIHotaW5kZXg6IDE7IH1cXG5cIiArXG5cIiAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddIHtcXG5cIiArXG5cIiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcblwiICtcblwiICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcblwiICtcblwiICAgICAgaGVpZ2h0OiAuMzEyNWVtO1xcblwiICtcblwiICAgICAgYm9yZGVyLXJhZGl1czogLjEyNWVtO1xcblwiICtcblwiICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZGM4NjtcXG5cIiArXG5cIiAgICAgIHotaW5kZXg6IDI7IH1cXG5cIiArXG5cIiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSd0aXAnXSB7XFxuXCIgK1xuXCIgICAgICAgIHRvcDogMi44NzVlbTtcXG5cIiArXG5cIiAgICAgICAgbGVmdDogLjg3NWVtO1xcblwiICtcblwiICAgICAgICB3aWR0aDogMS41NjI1ZW07XFxuXCIgK1xuXCIgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblwiICtcblwiICAgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXVtjbGFzcyQ9J2xvbmcnXSB7XFxuXCIgK1xuXCIgICAgICAgIHRvcDogMi4zNzVlbTtcXG5cIiArXG5cIiAgICAgICAgcmlnaHQ6IC41ZW07XFxuXCIgK1xuXCIgICAgICAgIHdpZHRoOiAyLjkzNzVlbTtcXG5cIiArXG5cIiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cIiArXG5cIlxcblwiICtcblwiLnN3YWwyLXByb2dyZXNzc3RlcHMge1xcblwiICtcblwiICBhbGlnbi1pdGVtczogY2VudGVyO1xcblwiICtcblwiICBtYXJnaW46IDAgMCAxLjI1ZW07XFxuXCIgK1xuXCIgIHBhZGRpbmc6IDA7XFxuXCIgK1xuXCIgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXByb2dyZXNzc3RlcHMgbGkge1xcblwiICtcblwiICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cIiArXG5cIiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlIHtcXG5cIiArXG5cIiAgICB3aWR0aDogMmVtO1xcblwiICtcblwiICAgIGhlaWdodDogMmVtO1xcblwiICtcblwiICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcXG5cIiArXG5cIiAgICBiYWNrZ3JvdW5kOiAjMzA4NWQ2O1xcblwiICtcblwiICAgIGNvbG9yOiAjZmZmO1xcblwiICtcblwiICAgIGxpbmUtaGVpZ2h0OiAyZW07XFxuXCIgK1xuXCIgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblwiICtcblwiICAgIHotaW5kZXg6IDIwOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlOmZpcnN0LWNoaWxkIHtcXG5cIiArXG5cIiAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlOmxhc3QtY2hpbGQge1xcblwiICtcblwiICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXCIgK1xuXCIgICAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcCB7XFxuXCIgK1xuXCIgICAgICBiYWNrZ3JvdW5kOiAjMzA4NWQ2OyB9XFxuXCIgK1xuXCIgICAgICAuc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NjaXJjbGUuc3dhbDItYWN0aXZlcHJvZ3Jlc3NzdGVwIH4gLnN3YWwyLXByb2dyZXNzY2lyY2xlIHtcXG5cIiArXG5cIiAgICAgICAgYmFja2dyb3VuZDogI2FkZDhlNjsgfVxcblwiICtcblwiICAgICAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcCB+IC5zd2FsMi1wcm9ncmVzc2xpbmUge1xcblwiICtcblwiICAgICAgICBiYWNrZ3JvdW5kOiAjYWRkOGU2OyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2xpbmUge1xcblwiICtcblwiICAgIHdpZHRoOiAyLjVlbTtcXG5cIiArXG5cIiAgICBoZWlnaHQ6IC40ZW07XFxuXCIgK1xuXCIgICAgbWFyZ2luOiAwIC0xcHg7XFxuXCIgK1xuXCIgICAgYmFja2dyb3VuZDogIzMwODVkNjtcXG5cIiArXG5cIiAgICB6LWluZGV4OiAxMDsgfVxcblwiICtcblwiXFxuXCIgK1xuXCJbY2xhc3NePSdzd2FsMiddIHtcXG5cIiArXG5cIiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItc2hvdyB7XFxuXCIgK1xuXCIgIC13ZWJraXQtYW5pbWF0aW9uOiBzd2FsMi1zaG93IDAuM3M7XFxuXCIgK1xuXCIgICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1zaG93IDAuM3M7IH1cXG5cIiArXG5cIiAgLnN3YWwyLXNob3cuc3dhbDItbm9hbmltYXRpb24ge1xcblwiICtcblwiICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xcblwiICtcblwiICAgICAgICAgICAgYW5pbWF0aW9uOiBub25lOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIi5zd2FsMi1oaWRlIHtcXG5cIiArXG5cIiAgLXdlYmtpdC1hbmltYXRpb246IHN3YWwyLWhpZGUgMC4xNXMgZm9yd2FyZHM7XFxuXCIgK1xuXCIgICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1oaWRlIDAuMTVzIGZvcndhcmRzOyB9XFxuXCIgK1xuXCIgIC5zd2FsMi1oaWRlLnN3YWwyLW5vYW5pbWF0aW9uIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcXG5cIiArXG5cIiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTsgfVxcblwiICtcblwiXFxuXCIgK1xuXCJbZGlyPSdydGwnXSAuc3dhbDItY2xvc2Uge1xcblwiICtcblwiICByaWdodDogYXV0bztcXG5cIiArXG5cIiAgbGVmdDogMDsgfVxcblwiICtcblwiXFxuXCIgK1xuXCIuc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAge1xcblwiICtcblwiICAtd2Via2l0LWFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIDAuNzVzO1xcblwiICtcblwiICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIDAuNzVzOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIi5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcge1xcblwiICtcblwiICAtd2Via2l0LWFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAwLjc1cztcXG5cIiArXG5cIiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgMC43NXM7IH1cXG5cIiArXG5cIlxcblwiICtcblwiLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHQge1xcblwiICtcblwiICAtd2Via2l0LWFuaW1hdGlvbjogc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWluO1xcblwiICtcblwiICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWluOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIi5zd2FsMi1hbmltYXRlLWVycm9yLWljb24ge1xcblwiICtcblwiICAtd2Via2l0LWFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIDAuNXM7XFxuXCIgK1xuXCIgICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLWVycm9yLWljb24gMC41czsgfVxcblwiICtcblwiICAuc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC5zd2FsMi14LW1hcmsge1xcblwiICtcblwiICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAwLjVzO1xcblwiICtcblwiICAgICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAwLjVzOyB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZyB7XFxuXCIgK1xuXCIgIDAlIHtcXG5cIiArXG5cIiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG5cIiArXG5cIiAgMTAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcblwiICtcblwiICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXCIgK1xuXCJcXG5cIiArXG5cIkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmcge1xcblwiICtcblwiICAwJSB7XFxuXCIgK1xuXCIgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuXCIgK1xuXCIgIDEwMCUge1xcblwiICtcblwiICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cIiArXG5cIiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVwiKTsiXX0=
