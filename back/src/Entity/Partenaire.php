<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\PartenaireRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PartenaireRepository::class)
 *
 * @ApiResource(
 *     collectionOperations={"get"={"normalization_context"={"groups"="partenaire:list"}}},
 *     itemOperations={"get"={"normalization_context"={"groups"="partenaire:item"}}},
 *     paginationEnabled=false
 * )
 * 
 * @ApiFilter(SearchFilter::class, properties={"partenaire": "exact"})
 */
class Partenaire
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"partenaire:list", "partenaire:item"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"partenaire:list", "partenaire:item"})
     */
    private $nom;

    /**
     * @ORM\Column(type="text", nullable=true)
     * 
     * @Groups({"partenaire:list", "partenaire:item"})
     */
    private $image;

    /**
     * @ORM\Column(type="text", nullable=true)
     * 
     * @Groups({"partenaire:list", "partenaire:item"})
     */
    private $lien;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getLien(): ?string
    {
        return $this->lien;
    }

    public function setLien(?string $lien): self
    {
        $this->lien = $lien;

        return $this;
    }
}
