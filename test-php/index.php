<?php

/**
 *
 * To show list of prima by input.
 *
 * @param int $n To store the value.
 */
function listOfPrima(int $n)
{
    $counter = 0;
    for ($i = 1; $i <= 100; $i++) {
        $list = 0;
        for ($j = 1; $j <= $i; $j++) {
            if ($i % $j == 0) {
                $list++;
            }
        }
        if ($list == 2) {
            if ($counter < $n) {
                echo $i . ' ';
                $counter += 1;
            }
        }
    }
}

/**
 *
 * To process the list Fibonacci.
 *
 * @param int $n To store value.
 */
function fibonacci(int $n)
{
    $counter = 1;
    $n1 = 0;
    $n2 = 1;
    echo $n2 . ' ';
    while ($counter < $n) {
        $n3 = $n1 + $n2;
        echo $n3 . ' ';
        $n1 = $n2;
        $n2 = $n3;
        $counter += 1;
    }
}

$arrData = [2, 3, 1, 8, 5, 2, 3, 5, 10, 1, 8, 12, 12, 45, 45, 45];


/**
 *
 * To process of short array.
 * @param array $n To store value array.
 */
function shortArray(array $n)
{
    $size = count($n);
    for ($i = 0; $i < $size; $i++) {
        for ($j = 0; $j < $size; $j++) {
            if ($n[$i] < $n[$j]) {
                $temp = $n[$i];
                $n[$i] = $n[$j];
                $n[$j] = $temp;
            }
        }
    }
    for ($i = 0; $i < $size; $i++) {
        echo $n[$i] . ' ';
    }
}


# 1
fibonacci(10);


# 2
listOfPrima(11);

# 5
$dataRandom = [45, 86, 31, 56, 61];
shortArray($dataRandom) ;