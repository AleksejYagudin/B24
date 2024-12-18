<?php
namespace Otus\Crm;

final class ItemCrm
{
    /**
     * @param int|null $id Идентификатор
     * @param int $entityTypeId Индентификатор типа сущности
     * @param int $entityId Индентификатор сущности
     * @param string $textField Текствое поле
     * @param int $integerField Числовое поле
     */
    public function __construct(
        public readonly ?int $id,
        public int $entityTypeId,
        public int $entityId,
        public string $textField,
        public int $integerField,
    ) {
    }

    public function withId(int $id): ItemCrm
    {
        return new ItemCrm(
            $id,
            $this->entityTypeId,
            $this->entityId,
            $this->textField,
            $this->integerField,
        );
    }
}