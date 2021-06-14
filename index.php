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

function getFirstValue($array)
{
    return $array[0];
}

echo getFirstValue([1, 2, 3]); // ➞ 1

echo getFirstValue([80, 5, 100]); // ➞ 80

echo getFirstValue([-500, 0, 50]); // ➞ -500
