<?php

namespace Otus\Crm\Integration\Filter;

use Bitrix\Main\ArgumentException;
use Bitrix\Main\Filter\Settings;

final class ItemSettings extends Settings
{

    /**
     * @throws ArgumentException
     */
    public function __construct(string $id)
    {
        parent::__construct(['ID' => $id]);
    }

}