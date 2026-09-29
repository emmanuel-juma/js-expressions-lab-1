//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};



/*
=======
Formula to pass from F to C : (tempInFahrenheit - 32) * 5 / 9
=======
*/
/*
=======
Formula to pass from C to F: (tempInCelsius * 9 / 5) + 32
=======
*/

// Convert every temperature to Fahrenheit and sum them
const tot_temperature_in_fahrenheit =
  // Already in Fahrenheit
  day1TempF + day3TempF + day5TempF + day7TempF + day9TempF +
  day11TempF + day13TempF + day15TempF + day17TempF + day19TempF +
  day21TempF + day23TempF + day25TempF + day27TempF + day29TempF +

  // Convert Celsius → Fahrenheit: (C * 9/5) + 32
  (day2TempC * 9 / 5) + 32 +
  (day4TempC * 9 / 5) + 32 +
  (day6TempC * 9 / 5) + 32 +
  (day8TempC * 9 / 5) + 32 +
  (day10TempC * 9 / 5) + 32 +
  (day12TempC * 9 / 5) + 32 +
  (day14TempC * 9 / 5) + 32 +
  (day16TempC * 9 / 5) + 32 +
  (day18TempC * 9 / 5) + 32 +
  (day20TempC * 9 / 5) + 32 +
  (day22TempC * 9 / 5) + 32 +
  (day24TempC * 9 / 5) + 32 +
  (day26TempC * 9 / 5) + 32 +
  (day28TempC * 9 / 5) + 32 +
  (day30TempC * 9 / 5) + 32;


// Convert every temperature to Celsius and sum them
const tot_temperature_in_celsius =
  // Already in Celsius
  day2TempC + day4TempC + day6TempC + day8TempC + day10TempC +
  day12TempC + day14TempC + day16TempC + day18TempC + day20TempC +
  day22TempC + day24TempC + day26TempC + day28TempC + day30TempC +

  // Convert Fahrenheit → Celsius: (F - 32) * 5 / 9
  (day1TempF - 32) * 5 / 9 +
  (day3TempF - 32) * 5 / 9 +
  (day5TempF - 32) * 5 / 9 +
  (day7TempF - 32) * 5 / 9 +
  (day9TempF - 32) * 5 / 9 +
  (day11TempF - 32) * 5 / 9 +
  (day13TempF - 32) * 5 / 9 +
  (day15TempF - 32) * 5 / 9 +
  (day17TempF - 32) * 5 / 9 +
  (day19TempF - 32) * 5 / 9 +
  (day21TempF - 32) * 5 / 9 +
  (day23TempF - 32) * 5 / 9 +
  (day25TempF - 32) * 5 / 9 +
  (day27TempF - 32) * 5 / 9 +
  (day29TempF - 32) * 5 / 9;


// Calculate the averages (30 temperatures in total)
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;