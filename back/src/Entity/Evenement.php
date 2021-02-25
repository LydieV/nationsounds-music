<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\EvenementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=EvenementRepository::class)
 * 
 * @ApiResource(
 *     collectionOperations={"get"={"normalization_context"={"groups"="evenement:list"}}},
 *     itemOperations={"get"={"normalization_context"={"groups"="evenement:item"}}},
 *     paginationEnabled=false
 * )
 * 
 * @ApiFilter(SearchFilter::class, properties={"evenement": "exact"})
 */
class Evenement
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"evenement:list", "evenement:item"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"evenement:list", "evenement:item"})
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"evenement:list", "evenement:item"})
     */
    private $type;

    /**
     * @ORM\ManyToMany(targetEntity=Artistes::class, inversedBy="evenements")
     * 
     * @Groups({"evenement:list", "evenement:item"})
     */
    private $artistes;

    /**
     * @ORM\Column(type="datetime")
     * 
     * @Groups({"evenement:list", "evenement:item"})
     */
    private $date;

    /**
     * @ORM\Column(type="time")
     * 
     * @Groups({"evenement:list", "evenement:item"})
     */
    private $horaireDebut;

    /**
     * @ORM\Column(type="time")
     * 
     * @Groups({"evenement:list", "evenement:item"})
     */
    private $horaireFin;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     * @Groups({"evenement:list", "evenement:item"})
     */
    private $description;

    public function __construct()
    {
        $this->artistes = new ArrayCollection();
    }

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

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection|Artistes[]
     */
    public function getArtistes(): Collection
    {
        return $this->artistes;
    }

    public function addArtiste(Artistes $artiste): self
    {
        if (!$this->artistes->contains($artiste)) {
            $this->artistes[] = $artiste;
        }

        return $this;
    }

    public function removeArtiste(Artistes $artiste): self
    {
        $this->artistes->removeElement($artiste);

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getHoraireDebut(): ?\DateTimeInterface
    {
        return $this->horaireDebut;
    }

    public function setHoraireDebut(\DateTimeInterface $horaireDebut): self
    {
        $this->horaireDebut = $horaireDebut;

        return $this;
    }

    public function getHoraireFin(): ?\DateTimeInterface
    {
        return $this->horaireFin;
    }

    public function setHoraireFin(\DateTimeInterface $horaireFin): self
    {
        $this->horaireFin = $horaireFin;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }
}
