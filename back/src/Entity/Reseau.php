<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\ReseauRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ReseauRepository::class)
 * 
 * @ApiResource(
 *     collectionOperations={"get"={"normalization_context"={"groups"="reseau:list"}}},
 *     itemOperations={"get"={"normalization_context"={"groups"="reseau:item"}}},
 *     paginationEnabled=false
 * )
 * 
 * @ApiFilter(SearchFilter::class, properties={"reseau": "exact"})
 */
class Reseau
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"reseau:list", "reseau:item"})
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * 
     * @Groups({"reseau:list", "reseau:item"})
     */
    private $icone;

    /**
     * @ORM\Column(type="text")
     * 
     * @Groups({"reseau:list", "reseau:item"})
     */
    private $lieb;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIcone(): ?string
    {
        return $this->icone;
    }

    public function setIcone(string $icone): self
    {
        $this->icone = $icone;

        return $this;
    }

    public function getLieb(): ?string
    {
        return $this->lieb;
    }

    public function setLieb(string $lieb): self
    {
        $this->lieb = $lieb;

        return $this;
    }
}
