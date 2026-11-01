import express from 'express';
import {
    getFlashcards,
    getAllFlashcardSets,
    reviewedFlashcard,
    toggleStarFlashcard,
    deleteFlashcardSet,
} from '../controllers/flashcardController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router.get('/', getAllFlashcardSets);
router.get('/:documentId', getFlashcards);
router.post('/:cardId/review', reviewedFlashcard);
router.put('/:cardId/star', toggleStarFlashcard);
router.delete('/:id', deleteFlashcardSet);

export default router;