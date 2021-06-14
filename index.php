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


