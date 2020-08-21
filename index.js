(function() {
  /**
   * Helper object for working with countries data and extracting information.
   * See countries-data.js for format of the countries data set.
   */
  let countries = {
    /**
     * Store all countries from countries-data.js on `countries.all` for convenience.
     */
    all: window.countriesData,
    /**
     * Return an array of all countries, with the Name Object replaced by the
     * appropriate translation, or English if not specified (or unknown).  For
     * example, when language="English", you would process the record for Canada into:
     *
     * {
     *     code: "CA",
     *     continent: "Americas",
     *     areaInKm2: 9984670,
     *     population: 36624199,
     *     capital: "Ottawa",
     *     name: "Canada"
     * }
     *
     * Supported languages include:
     *
     * English, Arabic, Chinese, French, Hindi, Korean, Japanese, Russian
     *
     * Uses `countries.all` as the underlying array of countries to be processed.
     *
     * HINT: make sure you don't overwrite the original name object.
     */
    getByLanguage: function(language) {
      let lang = countries.all.map(function(data) {
        if (Object.keys(countries.all[0].name).includes(language)) {
          language;
        } else {
          language = 'English';
        }
        let l_display = {};
        l_display.code = data.code;
        l_display.continent = data.continent;
        l_display.areaInKm2 = data.areaInKm2;
        l_display.population = data.population;
        l_display.capital = data.capital;
        l_display.name = data.name[language];
        return l_display;
      });
      return lang;
    },

    /**
     * Return an array of countries with a population greater than or equal to
     * `minPopulation`, and possibly less than equal to `maxPopulation` (if defined)
     * otherwise allow any number greater than `minPopulation`.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {Number} minPopulation - (Required) minimum population value
     * @param {Number} maxPopulation - (Optional) maximum population value
     */
    getByPopulation: function(minPopulation, maxPopulation) {
      let pop = countries.getByLanguage('English').filter(function(countriesData) {
        let p_display = {};
        if (maxPopulation !== undefined) {
          p_display =
            countriesData.population >= minPopulation && countriesData.population <= maxPopulation;
        } else {
          p_display = countriesData.population >= minPopulation;
        }
        return p_display;
      });
      return pop;
    },

    /**
     * Return an array of countries for the given `continent` with an area
     * greater than or equal to the given `area` in square KM.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {String} continent - (Required) name of the continent (e.g., Europe)
     * @param {Number} minArea - (Required) minimum number of KM2 area
     */
    getByAreaAndContinent: function(continent, minArea) {
      return countries.getByLanguage('English').filter(function(countriesData) {
        return countriesData.continent === continent && countriesData.areaInKm2 >= minArea;
      });
    }
  };

  /**
   * Helper functions for building table elements.
   */
  let tableHelper = {
    /**
     * Clears (any) existing rows from the #table-rows table body
     */
    clearTable: function() {
      let clear = document.getElementById('table-rows');
      clear.innerHTML = '';
    },

    /**
     * Takes a `country.code` (e.g., "CA" for Canada) and returns an <img>
     * element with its `src` property set the appropriate flag image URL
     * for this code, e.g., src="flags/ca.png" for Canada.
     */
    countryCodeToFlagImg: function(countryCode) {
      let image = document.createElement('img');
      image.src = `flags/${countryCode}.png`;
      return image;
    },

    /**
     * Takes a single `country` object and converts it to a <tr> with <td>
     * child elements for every column in the row.  The row should match the
     * expected format of the table (i.e., flag, code, country, continent, etc).
     * Return the new <tr>...</tr> row.
     *
     * Use the DOM methods document.createElement(), element.appendChild(), etc
     * to create your <tr> row.
     */
    countryToRow: function(countriesData) {
      let tr = document.createElement('tr');
      let td_data = document.createElement('td');
      tr.appendChild(td_data);
      let image = tableHelper.countryCodeToFlagImg(countriesData.code);
      td_data.appendChild(image);

      let td1 = document.createElement('td');
      let td_data1 = document.createTextNode(countriesData.code);
      td1.appendChild(td_data1);
      tr.appendChild(td1);

      let td2 = document.createElement('td');
      let td_data2 = document.createTextNode(countriesData.name);
      td2.appendChild(td_data2);
      tr.appendChild(td2);

      let td3 = document.createElement('td');
      let td_data3 = document.createTextNode(countriesData.continent);
      td3.appendChild(td_data3);
      tr.appendChild(td3);

      let td4 = document.createElement('td');
      let td_data4 = document.createTextNode(countriesData.areaInKm2);
      td4.appendChild(td_data4);
      tr.appendChild(td4);

      let td5 = document.createElement('td');
      let td_data5 = document.createTextNode(countriesData.population);
      td5.appendChild(td_data5);
      tr.appendChild(td5);

      let td6 = document.createElement('td');
      let td_data6 = document.createTextNode(countriesData.capital);
      td6.appendChild(td_data6);
      tr.appendChild(td6);
      return tr;
    },

    /**
     * Takes an array of `country` Objects named `countries`, and passes each
     * `country` in the array  to `tableHelper.countryToRow()`.  The resulting
     * rows are then appended to the #table-rows table body element.  Make sure
     * you use `tableHelper.clear()` to remove any existing rows before you do this.
     */
    countriesToTable: function(countries) {
      tableHelper.clearTable();
      countries.forEach(function(countriesData) {
        document.getElementById('table-rows').appendChild(tableHelper.countryToRow(countriesData));
      });
    }
  };

  /**
   * Register click handlers for every menu item in the page.  Use the `countries`
   * and `tableHelper` Objects, and their associated methods, to update/populate
   * the #table-rows table body with the appropriate set of countries, based on the
   * menu item clicked.
   *
   * Make sure you also update the #subtitle heading to properly reflect what
   * is in the table after you populate it. For example: "List of Countries
   * and Dependencies - Population between 1 and 2 million" or "List of Countries
   * and Dependencies - All countries in Asia" etc.
   */
  function setupMenuHandlers() {
    document.getElementById('menu_english').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in English';
      tableHelper.countriesToTable(countries.getByLanguage('English'));
    });

    document.getElementById('menu_arabic').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Arabic';
      tableHelper.countriesToTable(countries.getByLanguage('Arabic'));
    });

    document.getElementById('menu_chinese').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Chinese(中文)';
      tableHelper.countriesToTable(countries.getByLanguage('Chinese'));
    });

    document.getElementById('menu_french').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in French';
      tableHelper.countriesToTable(countries.getByLanguage('French'));
    });

    document.getElementById('menu_hindi').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Hindi';
      tableHelper.countriesToTable(countries.getByLanguage('Hindi'));
    });

    document.getElementById('menu_korean').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Korean';
      tableHelper.countriesToTable(countries.getByLanguage('Korean'));
    });

    document.getElementById('menu_japanese').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Japanese';
      tableHelper.countriesToTable(countries.getByLanguage('Japanese'));
    });

    document.getElementById('menu_russian').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - Country/Dep. Name in Russian';
      tableHelper.countriesToTable(countries.getByLanguage('Russian'));
    });

    document.getElementById('menu_population_100_000_000m').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - Population greater than 100,000,000';
      tableHelper.countriesToTable(countries.getByPopulation(100000000));
    });

    document.getElementById('menu_population_1m_2m').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - Population between 1 and 2 million';
      tableHelper.countriesToTable(countries.getByPopulation(1000000, 2000000));
    });

    document.getElementById('menu_americas_1mkm').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - All countries in Americas with population greater than 1 million Km2';
      tableHelper.countriesToTable(countries.getByAreaAndContinent('Americas', 1000000));
    });

    document.getElementById('menu_asia_all').addEventListener('click', function() {
      document.getElementById('subtitle').innerHTML =
        'List of Countries and Dependencies - All countries in Asia';
      tableHelper.countriesToTable(countries.getByAreaAndContinent('Asia', 0));
    });
  }
  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers;
})();
