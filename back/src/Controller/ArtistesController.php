<?php

namespace App\Controller;

use App\Repository\ArtistesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ArtistesController extends AbstractController
{
    /**
     * @Route("/artistes", name="artistes")
     */
    public function index(ArtistesRepository $artistesRepository): Response
    {
        $artiste = $artistesRepository->findAll();
        dd($artiste);
        return new Response();
    }
}
