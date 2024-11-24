<?php

//ID Дела
$activityId = $_REQUEST['data']['FIELDS']['ID'];

$url = 'https://b24loc.ru/rest/1/6s58qwd2ud7lxgi2/crm.activity.get.json';
$data = ['ID' => $activityId];

$options = [
    'http' => [
        'method' => 'POST',
        'header' => 'Content-type: application/x-www-form-urlencoded',
        'content' => http_build_query($data),
    ],
];

$context = stream_context_create($options);

$responseRaw = file_get_contents($url, false, $context);
$response = json_decode($responseRaw, true);

//ID Контакта
$contactId = $response['result']['OWNER_ID'];
$log = print_r($response, true);
file_put_contents(__DIR__ . '/log.txt', $log . PHP_EOL, FILE_APPEND);

if(($response['result']['PROVIDER_ID'] == 'CRM_EMAIL' || $response['result']['PROVIDER_ID'] == 'CRM_CALL') && $contactId > 0) {
    $url = 'https://b24loc.ru/rest/1/abgs8vpo71ts1jc2/crm.contact.update.json';
    $curDate = (new \DateTimeImmutable())->format('d.m.Y H:i:s');
    $data = ['ID' => $contactId, 'FIELDS[UF_CUSTOM_DATE_TIME_EMAIL]' => $curDate];

    $options = [
        'http' => [
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($data),
        ],
    ];

    $context = stream_context_create($options);

    $responseRaw = file_get_contents($url, false, $context);
    $response = json_decode($responseRaw, true);
}
?>

