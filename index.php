<?php

/**
 * @param int increments by 1
 * @return int result
 */
function addition($num)
{
    $incrementedNum = $num += 1;
    return $incrementedNum;
}

/**
 * Convert minutes to seconds
 */
function convert($minutes)
{
    return $minutes * 60;
}

/**
 * Count total of farm animal legs
 */
function animals($chickens, $cows, $pigs)
{
    // calculate legs of each animal
    $chickenLegs = $chickens * 2;
    $cowLegs = $cows * 4;
    $pigLegs = $pigs * 4;

    // calculate leg total
    $legTotal = $chickenLegs + $cowLegs + $pigLegs;

    return $legTotal;
}

/**
 * Return first item in array
 */
function getFirstValue($array)
{
    return $array[0];
}

/**
 * Area of a triangle
 */
function triArea($base, $height)
{
    $area = ($base * $height) / 2;
    return $area;
}

/**
 * Convert hours to seconds
 */
function howManySeconds($hours)
{
    return $hours * 60 * 60;
}

/**
 * Split Item Codes
 */
function splitCode($item)
{
    // split string into array of elements
    $charArray = str_split($item);
    $letters = [];
    $numbers = [];

    // check if element is a number or letter and push to $letters or $numbers arrays accordingly
    for ($i = 0; $i < count($charArray); $i++) {
        if (is_numeric($charArray[$i])) {
            array_push($numbers, $charArray[$i]);
        } else {
            array_push($letters, $charArray[$i]);
        }
    }

    // covert string to number and join characters
    $formattedNum = intval(join($numbers));
    // join characters
    $formattedString = join($letters);

    // return formatted array
    return [$formattedString, $formattedNum];
}

/**
 * Takes two arrays of integers and returns them as coordinates
 */
function convertCartesian($x, $y)
{
    // Store coordinates
    $coordinates = [];

    // Push items from their relative indexes to $coordinates array
    for ($i = 0; $i < count($x); $i++) {
        array_push($coordinates, [$x[$i], $y[$i]]);
    }

    return $coordinates;
}

/**
 * Lodash Function
 * @return arr array with specified number (num) of items removed
 */
function dropRight($arr, $num = 1)
{
    for ($i = 0; $i < $num; $i++) {
        array_pop($arr);
    }

    return $arr;
}

print_r(dropRight([1, 2, 3])) . PHP_EOL; // ➞ [1, 2]

print_r(dropRight([1, 2, 3], 2)) . PHP_EOL; // ➞ [1]

print_r(dropRight([1, 2, 3], 5)) . PHP_EOL; // ➞ []

print_r(dropRight([1, 2, 3], 0)) . PHP_EOL; // ➞ [1, 2, 3]
