const express = require('express');
const router = express.Router();

router.get('/',UserSkillController.getUserSkills);

router.get('/:id',UserSkillController.getUserSkill);

router.post('/',UserSkillController.insertUserSkill);

router.patch('/:id',UserSkillController.updateUserSkill);

router.delete('/:id',UserSkillController.deleteUserSkill);

module.exports = router;