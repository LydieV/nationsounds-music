<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\FaqRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=FaqRepository::class)
 * 
 *  @ApiResource(
 *     collectionOperations={"get"={"normalization_context"={"groups"="faq:list"}}},
 *     itemOperations={"get"={"normalization_context"={"groups"="faq:item"}}},
 *     paginationEnabled=false
 * )
 * 
 * @ApiFilter(SearchFilter::class, properties={"faq": "exact"})
 */
class Faq
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"faq:list", "faq:item"})
     */
    private $question;

    /**
     * @ORM\Column(type="text")
     * 
     * @Groups({"faq:list", "faq:item"})
     */
    private $reponse;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuestion(): ?string
    {
        return $this->question;
    }

    public function setQuestion(string $question): self
    {
        $this->question = $question;

        return $this;
    }

    public function getReponse(): ?string
    {
        return $this->reponse;
    }

    public function setReponse(string $reponse): self
    {
        $this->reponse = $reponse;

        return $this;
    }
}
