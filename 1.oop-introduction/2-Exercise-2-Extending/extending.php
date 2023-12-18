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

class Beer extends Beverage
{
  private string $name;
  private float $alcoholPercentage;

  public function __construct(string $name, float $alcoholPercentage, string $color = 'blond', float $price = 3.5, string $temperature = 'cold')
  {
    parent::__construct($color, $price, $temperature);
    $this->name = $name;
    $this->alcoholPercentage = $alcoholPercentage;
  }

  public function getAlcoholPercentage(): float
  {
    return $this->alcoholPercentage;
  }
}

// Instantiate an object representing Duvel
$duvel = new Beer('Duvel', 8.5);

// Print the getAlcoholPercentage in two different ways
echo $duvel->getAlcoholPercentage() . PHP_EOL; // Method 1
echo 'Alcohol Percentage: ' . $duvel->getAlcoholPercentage() . PHP_EOL; // Method 2

// Print the color on the screen
echo 'Color: ' . $duvel->getTemperature() . PHP_EOL;

// Print the getInfo on the screen
echo $duvel->getInfo() . PHP_EOL;
