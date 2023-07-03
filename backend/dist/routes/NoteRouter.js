"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IdProvider_1 = require("../services/IdProvider");
const router = (0, express_1.Router)();
const notes = [
    { id: IdProvider_1.IdProvider.next(), text: "Sprint Review" },
    { id: IdProvider_1.IdProvider.next(), text: "Sprint Review2" },
];
router.get("/notes", (req, res, next) => {
    res.status(200).json({ notes: notes });
});
router.post("/notes", (req, res, next) => {
    const body = req.body;
    const note = { id: IdProvider_1.IdProvider.next(), text: body.text };
    notes.push(note);
    res.status(200).json({ message: "Note was added", note: note });
});
router.delete("/notes/:noteId", (req, res, next) => {
    // req.params.noteId
    const params = req.params;
    console.log(`noteId is ${params.noteId}`);
    const index = notes.findIndex((item) => item.id === +params.noteId);
    console.log(`index is ${index}`);
    console.log(notes);
    if (index === -1) {
        return res.status(404).json({ message: "Note not found" });
    }
    notes.splice(index, 1);
    res.status(200).json({ message: "Note was deleted", notes: notes });
});
exports.default = router;
//# sourceMappingURL=NoteRouter.js.map