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

echo howManySeconds(2) . PHP_EOL; // ➞ 7200

echo howManySeconds(10) . PHP_EOL; // ➞ 36000

echo howManySeconds(24) . PHP_EOL; // ➞ 86400
