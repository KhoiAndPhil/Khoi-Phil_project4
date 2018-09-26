import axios from "axios";

// IMPORT HEAP MODULE FROM NPM
const MinHeap = require("fastpriorityqueue");

// Create an object representing our travel app (NAMESPACE)
const travelApp = {};

// ARRAY WITH ALL RELEVANT STATS FOR EACH PURPOSE
travelApp.statArray = [
  // VACATION BUTTON
  // ===============
  {
    id: "button-vacation",
    stats: [
      {
        stat: "density",
        direction: "min",
        statName: "Population Density (low)",
        description: "The population density is measured in per km²."
      },
      {
        stat: "happiness_index",
        direction: "max",
        statName: "Happiness Index",
        description:
          "Based on factors such as GDP per capita, social support, life expectancy. The higher the value, the happier the country."
      },
      {
        stat: "tourist_arrivals",
        direction: "max",
        statName: "Tourist Arrivals",
        description:
          "Represents foreign citizens that stayed at least one night. Includes hotel stays, transfers, conference visits, etc."
      },
      {
        stat: "tourism_expenditure",
        direction: "max",
        statName: "Tourist Expenditure",
        description: "The amount of government spending dedicated for tourism (in % of the GDP for a country)."
      },
      {
        stat: "urban_population",
        direction: "max",
        statName: "Urban Population (high)",
        description: "The percentage of people who live in a city."
      },
      {
        stat: "forest_area_percent",
        direction: "max",
        statName: "Forest Area",
        description: "The total amount of forest area in a country (in km²)"
      }
    ]
  },
  // EDUCATION BUTTON
  // ================
  {
    id: "button-education",
    stats: [
      {
        stat: "education_expenditure",
        direction: "max",
        statName: "Education Expenditure",
        description: "Education expenditure represents government spending in % of GDP."
      },
      {
        stat: "co2_emissions",
        direction: "min",
        statName: "CO2 Emissions",
        description: "CO2 emissions in metric tons per person per year."
      },
      {
        stat: "corruption_index",
        direction: "min",
        statName: "Corruption Index",
        description: "Corruption Perceptions Index (CPI). (Scale: 0-100; 0 = high corruption. 100 = low corruption)."
      },
      {
        stat: "happiness_index",
        direction: "max",
        statName: "Happiness Index",
        description:
          "Based on factors such as GDP per capita, social support, life expectancy. The higher the value, the happier the country."
      },
      {
        stat: "hdi",
        direction: "max",
        statName: "Human Development Index",
        description:
          "Indicator of life expectancy, education, and per capita income. (Scale: 0-1; 0 = low score. 1 = high score)."
      },
      {
        stat: "health_expenditure",
        direction: "max",
        statName: "Health Expenditure",
        description: "Public spending on health, measured in % of GDP."
      }
    ]
  },
  // VISITOR VISA BUTTON
  // ===================
  {
    id: "button-visit-visa",
    stats: [
      {
        stat: "happiness_index",
        direction: "max",
        statName: "Happiness Index",
        description:
          "Based on factors such as GDP per capita, social support, life expectancy. The higher the value, the happier the country."
      },
      {
        stat: "health_expenditure",
        direction: "max",
        statName: "Health Expenditure",
        description: "Public spending on health, measured in % of GDP."
      },
      {
        stat: "tourist_arrivals",
        direction: "max",
        statName: "Tourist Arrivals",
        description:
          "Represents foreign citizens that stayed at least one night. Includes hotel stays, transfers, conference visits, etc."
      },
      {
        stat: "density",
        direction: "min",
        statName: "Population Density (low)",
        description: "The population density is measured in per km²."
      },
      {
        stat: "co2_emissions",
        direction: "min",
        statName: "CO2 Emissions",
        description: "CO2 emissions in metric tons per person per year."
      },
      {
        stat: "inflation",
        direction: "min",
        statName: "Inflation",
        description: "The annual change of consumer prices (unit: %)."
      }
    ]
  },
  // WORKING HOLIDAY BUTTON
  // ======================
  {
    id: "button-work-holiday",
    stats: [
      {
        stat: "density",
        direction: "min",
        statName: "Population Density (low)",
        description: "The population density is measured in per km²."
      },
      {
        stat: "tourist_arrivals",
        direction: "max",
        statName: "Tourist Arrivals",
        description:
          "Represents foreign citizens that stayed at least one night. Includes hotel stays, transfers, conference visits, etc."
      },
      {
        id: "button-perm-solo",
        stat: "gini",
        direction: "min",
        statName: "Gini Coefficient",
        description:
          "States how uniformly assets are distributed. (scale: 0-100; 0 = equal distribution. 100 = unequal distribution)."
      },
      {
        stat: "happiness_index",
        direction: "max",
        statName: "Happiness Index",
        description:
          "Based on factors such as GDP per capita, social support, life expectancy. The higher the value, the happier the country."
      },
      {
        stat: "jobless_rate",
        direction: "min",
        statName: "Jobless Rate",
        description: "The number of unemployed people in relation to the labor force for a country."
      },
      {
        stat: "medianwage",
        direction: "max",
        statName: "Median Wage",
        description:
          "A measure of the monthly median wage before taxes, including public benefits (e.g child allowance); unit: USD."
      }
    ]
  },
  // PERMANENT-SOLO BUTTON
  // ======================
  {
    id: "button-perm-solo",
    stats: [
      {
        stat: "hdi",
        direction: "max",
        statName: "Human Development Index",
        description:
          "Indicator of life expectancy, education, and per capita income. (Scale: 0-1; 0 = low score. 1 = high score)."
      },
      {
        stat: "corruption_index",
        direction: "min",
        statName: "Corruption Index",
        description: "Corruption Perceptions Index (CPI). (Scale: 0-100; 0 = high corruption. 100 = low corruption)."
      },
      {
        stat: "medianwage",
        direction: "max",
        statName: "Median Wage",
        description:
          "A measure of the monthly median wage before taxes, including public benefits (e.g child allowance); unit: USD."
      },
      {
        stat: "inflation",
        direction: "min",
        statName: "Inflation",
        description: "The annual change of consumer prices (unit: %)."
      },
      {
        stat: "health_expenditure",
        direction: "max",
        statName: "Health Expenditure",
        description: "Public spending on health, measured in % of GDP."
      },
      {
        stat: "urban_population",
        direction: "max",
        statName: "Urban Population (high)",
        description: "The percentage of people who live in a city."
      }
    ]
  },
  // PERMANENT-COUPLE BUTTON
  // ======================
  {
    id: "button-perm-couple",
    stats: [
      {
        stat: "hdi",
        direction: "max",
        statName: "Human Development Index",
        description:
          "Indicator of life expectancy, education, and per capita income. (Scale: 0-1; 0 = low score. 1 = high score)."
      },
      {
        stat: "jobless_rate",
        direction: "min",
        statName: "Jobless Rate",
        description: "The number of unemployed people in relation to the labor force for a country."
      },
      {
        id: "button-perm-solo",
        stat: "gini",
        direction: "min",
        statName: "Gini Coefficient",
        description:
          "States how uniformly assets are distributed. (scale: 0-100; 0 = equal distribution. 100 = unequal distribution)."
      },
      {
        stat: "happiness_index",
        direction: "max",
        statName: "Happiness Index",
        description:
          "Based on factors such as GDP per capita, social support, life expectancy. The higher the value, the happier the country."
      },
      {
        stat: "death_rate",
        direction: "min",
        statName: "Rate of Deaths",
        description: "The average number of deaths per year per 1,000 people."
      },
      {
        stat: "debts_percent",
        direction: "min",
        statName: "Government Debt",
        description: "The percentage of government borrowings in relation to the GDP."
      }
    ]
  },
  // PERMANENT-FAMILY BUTTON
  // ======================
  {
    id: "button-perm-family",
    stats: [
      {
        stat: "education_expenditure",
        direction: "max",
        statName: "Education Expenditure",
        description: "Education expenditure represents government spending in % of GDP."
      },
      {
        stat: "health_expenditure",
        direction: "max",
        statName: "Health Expenditure",
        description: "Public spending on health, measured in % of GDP."
      },
      {
        stat: "literacy_rate",
        direction: "max",
        statName: "Literacy Rate",
        description: "The percentage of people that have the ability to read and write by age 15."
      },
      {
        stat: "life_expectancy",
        direction: "max",
        statName: "Life Expectancy",
        description: "The average number of years a person will live (at birth)."
      },
      {
        stat: "death_rate",
        direction: "min",
        statName: "Rate of Deaths",
        description: "The average number of deaths per year per 1,000 people."
      },
      {
        stat: "medianwage",
        direction: "max",
        statName: "Median Wage",
        description:
          "A measure of the monthly median wage before taxes, including public benefits (e.g child allowance); unit: USD."
      }
    ]
  }
];

/* 0. GET STARTED */
travelApp.getStarted = () => {
  // Listens for click on GET STARTED BUTTON
  $(".welcome__button").on("click", function () {
    // Smooth scroll to next section
    $("html, body")
      .stop()
      .animate({ scrollTop: $(".purpose-section").offset().top }, 900, "swing");
  });
};

/* 1. GET USER INPUT */
travelApp.getUserPurpose = () => {
  $(".travel-form__button").on("click", function () {
    // Store user input in variable
    const inputID = $(this).attr("id");
    travelApp.userPurpose = inputID;

    // Call the display stats function
    travelApp.displayStats(travelApp.userPurpose);

    // Display the criterias to be chosen
    $(".criterias").css("display", "flex");

    // Smooth Scroll to criteria's section
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(".criterias").offset().top
        },
        900,
        "swing"
      );
  });
};

/* 2. DISPLAY ALL STATS FOR THE SELECTED PURPOSE ON SCREEN */
travelApp.displayStats = purposeID => {
  $(".choices").empty();
  // Header for the choose Criteria section
  $(".criteria-header").text(
    "Please rank the following criteria in order of importance from top to bottom. Use your cursor to drag and drop the items."
  );
  // Add css position to criteria container
  $(".choices-list-container").css("position", "relative");

  // Go through each purpose object in the Stat Array
  travelApp.statArray.forEach(purposeObj => {
    // If the purpose ID matches the purpose Object id
    if (purposeID === purposeObj.id) {
      // Go through every stat for this purpose
      purposeObj.stats.forEach(stat => {
        // Append each of the stat name on screen for the user to rank
        let markUpItem = $("<li>")
          .attr("id", stat.stat)
          .addClass("criteria")
          .text(stat.statName);
        $(".choices").append(markUpItem);
      });
    }
  });

  // append submit button
  let markUpButton = `<li><button class="user-submit btn">Submit Ranking</button></li>`;
  $(".choices").append(markUpButton);

  travelApp.getUserRankings();
};

/* 3. OBTAIN THE RANKING OF THE STATS FROM USER */
travelApp.getUserRankings = () => {
  $(".choices").on("click", ".user-submit", function () {
    // remove submit button and put a loader until the results come back
    // .html(`<img class="loader" src="../../assets/spinner-1s-100px.svg">`);
    $(".choices").find(
      "li:last-child"
    ).html(`<svg class="lds-spinner loader" width="100px"  height="100px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(30 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(60 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(90 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(120 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(150 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(180 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(210 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(240 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(270 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(300 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(330 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fd9341">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
  </rect>
</g></svg>`);

    // get the user rankings from his ordering of stats and store in a variable
    let userRankings = $(".choices")[0].children;

    // initialize an empty array to store the top 3 rankings
    let statsForAPICall = [];

    // get first top 3 rankings (stats in 1st, 2nd and 3rd positions)
    // and store them inside an array
    for (let i = 0; i < 3; i++) {
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

    travelApp.getStat(...statsForAPICall);
  });
};

/* 4. SEND AJAX REQUEST TO INQSTATS API */

// Store important info for calls to the INQStats API.
travelApp.statKey = "5d3687c7c1788d5f";
travelApp.statURL = "http://inqstatsapi.inqubu.com";
travelApp.getStat = (statType1, statType2, statType3) => {
  axios({
    method: "GET",
    url: travelApp.statURL,
    dataResponse: "jsonp",
    params: {
      api_key: travelApp.statKey,
      data: `hdi,${statType1},${statType2},${statType3}`,
      cmd: "getWorldData"
    }
  }).then(res => {
    // calling the calculation function to get the top n / bottom n countries
    // finalResults holds the final 3 coutries and all of their stats
    let finalResults = travelApp.getRecommendations(res.data, statType1, statType2, statType3);

    // Get wiki and pixa extracts for each country
    finalResults.forEach(countryObj => {
      // get wiki extracts and put promises into array
      travelApp.wikiPromiseArray.push(travelApp.getWiki(countryObj.countryName));

      // get pixa extracts and put promises into array
      travelApp.pixaPromiseArray.push(travelApp.getPixa(countryObj.countryName));
    });

    // when all wiki and pixa promises are fulfilled, store the results
    // to prepare them for display
    $.when(...travelApp.wikiPromiseArray, ...travelApp.pixaPromiseArray).then((...wikiPixaResults) => {
      // go through the wikiPixa results
      for (let i = 0; i < wikiPixaResults.length; i++) {
        // first three are wiki, push (store) into array
        if (i < 3) {
          travelApp.storeWiki(wikiPixaResults[i]);
        }
        // last three are pixa, push (store) into array
        else {
          travelApp.storePixa(wikiPixaResults[i]);
        }
      }

      // Once results all stored, display all info on screen (3 countries, wiki and pixa)
      travelApp.displayDestinations(finalResults, [statType1, statType2, statType3]);
    });
  });
};

/* 5. START CALCULATION FOR 3 RECOMMENDED COUNTRIES */
travelApp.getRecommendations = (res, statType1, statType2, statType3) => {
  // Find direction of each stat type and return it in an array
  let arrDirections = travelApp.findDirections(statType1, statType2, statType3);

  // Initialize arrays and numbers for each round of iteration/filtering
  let initialArr = [];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let initialIter = 60;
  let iteration1 = 10;
  let iteration2 = 5;
  let iteration3 = 3;

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
travelApp.findDirections = (statType1, statType2, statType3) => {
  // Find whether each stattype is max or min
  let stat1Direction = "";
  let stat2Direction = "";
  let stat3Direction = "";

  // Loop through the Stat Array to find direction of stattypes
  travelApp.statArray.forEach(purpose => {
    // if the current purpose matches the user purpose,
    if (purpose.id === travelApp.userPurpose) {
      // go through the stats array of that purpose object
      purpose.stats.forEach(stat => {
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
travelApp.determineResults = (array, statType, direction, iterationNumber) => {
  let resultArray = [];
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
travelApp.determineNCountries = (result, statType, n, direction) => {
  // initialize a heap array to keep track of the n largest/smallest stat scores
  let heap = new MinHeap();

  // initialize a secondary array to keep track of the n scores AND
  // the associated country to each score
  let nCountries = [];

  // store the stat type into a property variable for easier use
  let property = statType;

  // start a country counter at 0 just for the sake of adding the first n countries into the heap
  let countryCounter = 0;

  // go through each country from the results of the AJAX call to INQStats
  result.map(country => {
    // store the stat score and the name of the current country in variables.
    // IMPORTANT: multiply by direction to implement max/min heap
    // a direction of 1 = we want maximum scores
    // a direction of -1 = we want minimum scores
    let stat = Number(country[property]) * direction;

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
        for (let m = 0; m < nCountries.length; m++) {
          // multiply by direction again to compare properly with the heap
          let currentStat = Number(nCountries[m][property]) * direction;
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
travelApp.getWiki = country => {
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
travelApp.storeWiki = result => {
  // This variable stores the object that holds a key name unique to every country. The value of this key is an object that holds the extact.
  const wikiExtractObject = result[0].query.pages;
  // If we convert the above object into an array, the extract can be accessed on the first value of the array. This variable holds the wiki extract.
  travelApp.wikiExtract.push(Object.values(wikiExtractObject)[0].extract);
};

// 6.2 PIXABAY API: GET AND STORE
// ============================
// Store important info for calls to the Pixabay API.
travelApp.pixaKey = "9879571-e4cbbef3e692aa15a24a7119b";
travelApp.pixaURL = "https://www.pixabay.com/api/";
// Get info from Wikipedia (AJAX)
travelApp.getPixa = country => {
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
travelApp.storePixa = results => {
  // Store the array that holds the image URLs in an array
  const resultsArray = results[0].hits;
  // Loop through the results array and push all images into the imageArray
  resultsArray.forEach(item => {
    // Array of images for each country
    travelApp.imageArray.push(item.largeImageURL);
    // Array of image information from each country to be used for Alt text
    travelApp.imageTextArray.push(item.tags);
  });
};

/* 7. DISPLAY DESTIONATIONS ON SCREEN WITH WIKI + PIXA RESULTS */
travelApp.displayDestinations = (results, statChoices) => {
  // Get rid of previous clicked results
  $(".results").empty();
  // Go through each country result and build the string literal to append to the page
  let countryCounter = 0;
  let imageCounter = 0;
  results.forEach(country => {
    // This element holds all elements for one country result
    let countryContainerElement = $("<div>")
      .addClass("result-container")
      // assign random pixa image of country to the result background
      .css("background-image", `url("${travelApp.imageArray[travelApp.randomize(imageCounter, imageCounter + 15)]}")`);
    // This element will hold all text and image(s) referring to the country result
    let countryCardElement = $("<div>").addClass("card");
    // This element holds the name of the country
    let countryNameElement = $("<h2>")
      .addClass("country-name")
      .text(`${country.countryName}`);
    // This element holds the description of the country, taken from the wiki API
    let countryDescriptionElement = $("<p>")
      .addClass("wiki-text")
      .text(travelApp.wikiExtract[countryCounter]);
    countryCounter++;
    // This element holds the text for each of the three stats we're displaying
    let statListElement = $("<ul>").addClass("stat-list");
    // This element holds the container that will hold the small pixa country image
    let smallPixaContainerElement = $("<div>").addClass("country-image-container");
    // This new image counter gets the image in the array that follows the first image being used as a background image for the card
    // This image element will be appended to the image container
    let smallPixaImage = $("<img>")
      .addClass("country-image")
      .attr({
        src: `${travelApp.imageArray[travelApp.randomize(imageCounter, imageCounter + 15)]}`,
        alt: `Scenic image of ${country.countryName}. Image tags include ${travelApp.imageTextArray}.`
      });
    // Add 15 to the image counter ensures that every iteration through the forEach will add images to the associated coutries
    imageCounter += 15;
    //Append the country image to its container
    // smallPixaContainerElement.append(smallPixaImage);
    // Append the country name <h2>, wiki text <p>, stat list <ul> and image container <div> to the card <div>.
    countryCardElement.append(
      countryNameElement,
      countryDescriptionElement,
      statListElement,
      smallPixaContainerElement
    );
    // Append the card div to the result-container
    countryContainerElement.append(countryCardElement);
    //Append the result-container to the results section element on our page
    $(".results").append(countryContainerElement);

    // Go through the array "statChoices" and set up 3 information:
    // 1. title of stat (taken from travelApp.statNamesArray)
    // 2. value of stat (taken from results object)
    // 3. description of stat (taken from travelApp.statDescriptionArray)
    let statCounter = 0;
    statChoices.forEach(stat => {
      let statTitle = travelApp.statNamesArray[statCounter];
      let statValue = country[travelApp.statCodeArray[statCounter]];
      let statDescription = travelApp.statDescriptionArray[statCounter];
      statCounter++;
      // This list item element will hold stat information
      let statListItemElement = $("<li>").addClass("stat-list__item");
      // This div will hold the stat title and question mark icon
      let statTitleIconContainerElement = $("<div>").addClass("stat-list__item__title-icon-container");
      // This element holds the stat title and value
      let statTitleElement = $("<h4>")
        .addClass("stat-list__item__title-icon-container__title-number")
        .text(`${statTitle}: ${travelApp.numberWithCommas(statValue)}`);
      // This question mark icon will sit next to the statTitleElement and when clicked/hoverover, will display the stat description
      let statHoverIconElement = `<i class="stat-list__item__title-icon-container__icon far fa-question-circle"></i>`;
      // append the stat title and icon to the statTitleIconContainerElement
      statTitleIconContainerElement.append(statTitleElement, statHoverIconElement);
      // This div will hold the stat description and is a sibling of the statTitleIconContainer.
      let statDescriptionContainerElement = $("<div>").addClass("stat-list__item__description-container display-none");
      // This element holds the stat description
      let statDescriptionElement = $("<p>")
        .addClass("stat-list__item__description-container__description")
        .text(statDescription);
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
travelApp.finalDisplay = () => {
  $(".results").waitForImages(function () {
    $(".results").css("display", "block");

    $("html, body")
      .stop()
      .animate({ scrollTop: $(".results").offset().top }, 900, "swing");

    // remove loader and display submit ranking button again
    let markUpButton = `<li><button class="user-submit btn">Submit Ranking</button></li>`;
    $(".choices")
      .find("li:last-child")
      .html(markUpButton);

    /* FLICKITY */
    $(".results").flickity({
      // options
      cellAlign: "left",
      contain: true,
      autoPlay: 5000,
      pageDots: false,
      watchCSS: true,
      lazyLoad: true,
      // wrapAround: true
    });

    travelApp.flickityOn = true;
  });
};

// 7.2 On hover or click over the question mark icon, display the stat description
travelApp.displayStatDescription = function () {
  $(".results").on("click", ".stat-list__item__title-icon-container__icon", function () {
    if (
      $(this)
        .parents(".stat-list__item")
        .find(".stat-list__item__description-container")
        .hasClass("display-none") === false
    ) {
      $(".results")
        .find(".stat-list__item__description-container")
        .removeClass("display-none")
        .addClass("display-none");
    } else {
      $(".results")
        .find(".stat-list__item__description-container")
        .addClass("display-none");
      $(this)
        .parents(".stat-list__item")
        .find(".stat-list__item__description-container")
        .removeClass("display-none");
    }
  });
};

// This function holds all our events funtions
travelApp.eventsFunction = () => {
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
travelApp.slideDrag = () => {
  $(".choices")
    .sortable({
      connectWith: ".sortable",
      scroll: false,
      revert: true,
      helper: "clone",
      containment: ".criterias-container"
    })
    .css("position", "absolute");
  $("ul, li").disableSelection();
};

// 8.2 Randomizer function to select random images to display
travelApp.randomize = (startingNum, endingNum) => {
  return Math.floor(Math.random() * (endingNum - startingNum)) + startingNum;
};

// 8.3 Event listener to transform SVGs into inline SVGS to be able to change their colors with css fill
travelApp.transformSVG = () => {
  jQuery("img.svg").each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");

    jQuery.get(
      imgURL,
      function (data) {
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
      },
      "xml"
    );
  });
};

/* 8.4 TRANSFORM STRING NUMBERS INTO SEPARATED STRINGS WITH PROPER COMMAS FOR EACH THOUSAND UNIT */
travelApp.numberWithCommas = stat => {
  return stat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
