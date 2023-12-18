<?php

declare(strict_types=1);

class Beverage
{
  private string $color;
  private float $price;
  private string $temperature;

  public function __construct(string $color, float $price, string $temperature = 'cold')
  {
    $this->color = $color;
    $this->price = $price;
    $this->temperature = $temperature;
  }

  public function getInfo(): string
  {
    return "This beverage is {$this->temperature} and {$this->color}.";
  }

  public function getTemperature(): string
  {
    return $this->temperature;
  }
}

// Instantiate an object representing cola
$cola = new Beverage('black', 2.0);

// Print the getInfo on the screen
echo $cola->getInfo() . PHP_EOL;

// Print the temperature on the screen
echo 'Temperature: ' . $cola->getTemperature() . PHP_EOL;


/* EXERCISE 1
TODO: Create a class beverage.
TODO: Create the properties color (string), price (float) and temperature (string) and also foresee a construct.
TODO: Have a default value "cold" in the construct for temperature.

Remember for now we will use properties and methods that can be accessed from everywhere.
TODO: Make a getInfo function which returns "This beverage is <temperature> and <color>."
TODO: Instantiate an object which represents cola. Make sure that the color is set to black, the price equals 2 euro and the temperature to cold automatically
 print the getInfo on the screen.
TODO: Print the temperature on the screen.

USE TYPEHINTING EVERYWHERE!
*/
