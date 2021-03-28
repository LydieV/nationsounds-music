<?php

namespace App\Admin\Controller;

use App\Entity\Artistes;
use App\Form\ArtistesType;
use App\Repository\ArtistesRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
* @Route("/admin/artistes", name="artistes")
*/

class ArtistesController extends AbstractController
{
    /**
     * @Route("/", name="artistes_index", methods={"GET"})
     */
    public function index(ArtistesRepository $artistesRepository): Response
    {
        return $this->render('artistes/index.html.twig', [
            'artistes' => $artistesRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="artistes_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {

        $artistes = new Artistes();
        $form = $this->createForm(ArtistesType::class, $artistes);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($artistes);
            $entityManager->flush();

            return $this->redirectToRoute('artistes_index');
        }

        return $this->render('artistes/new.html.twig', [
            'artistes' => $artistes,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="artistes_show", methods={"GET"})
     */
    public function show(Artistes $artistes): Response
    {
        return $this->render('artistes/show.html.twig', [
            'artistes' => $artistes,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="artistes_edit", methods={"GET","POST"})
     */
    public function edit($id, ArtistesRepository $artistesRepository, Request $request, Artistes $artistes): Response
    {

        $form = $this->createForm(ArtistesType::class, $artistes);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('artistes_index');
        }

        return $this->render('artistes/edit.html.twig', [
            'artistes' => $artistes,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="artistes_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Artistes $artistes): Response
    {
        if ($this->isCsrfTokenValid('delete'.$artistes->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($artistes);
            $entityManager->flush();
        }

        return $this->redirectToRoute('artistes_index');
    }
}
