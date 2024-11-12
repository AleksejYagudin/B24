<?php
namespace Otus\Crm;

/**
 * @template-implements \IteratorAggregate<int, ItemCrm>
 */
final class Collection implements \IteratorAggregate
{
    private array $items = [];

    public function __construct(ItemCrm ...$items)
    {
        foreach ($items as $item) {
            $this->insert($item);
        }
    }

    public function insert(ItemCrm $project): void
    {
        $this->items[$project->id] = $project;
    }

    public function get(int $id): ?ItemCrm
    {
        foreach ($this->items as $item) {
            if ($item->id === $id) {
                return $item;
            }
        }

        return null;
    }

    public function map(callable $mapper): array
    {
        return array_map($mapper, $this->items);
    }

    public function getIterator(): \ArrayIterator
    {
        return new \ArrayIterator($this->items);
    }
}
