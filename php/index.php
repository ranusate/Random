<?php

$nilai = array(72, 65, 73, 78, 75, 74, 90, 81, 87, 65, 55, 69, 72, 78, 79, 91, 100, 40, 67, 77, 86);


function nilaiRataRata($nilai)
{

    $c = count($nilai);
}


function nilaiTerendah($nilai)
{
    $n = count($nilai);
    $min = $nilai[0];
    for ($i = 1; $i < $n; $i++) {
        if ($min < $nilai[$i]) {
            $min = $nilai[$i];
        }
    }
    return $min;
}

function nilaTertinggi($nilai)
{
    $temp = [];
    $n = count($nilai);
    $min = $nilai[0];
    for ($i = 1; $i < $n; $i++) {
        if ($min > $nilai[$i]) {
            $min.array_push($nilai[$i], 7);
        }
    }
    return $temp;
}
// echo nilaiTerendah($nilai);
echo nilaTertinggi($nilai);
