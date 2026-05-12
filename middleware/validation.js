const { body, validationResult } = require("express-validator");

const validateSchoolData = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("School name is required"),

    body("address")
        .trim()
        .notEmpty()
        .withMessage("Address is required"),

    body("latitude")
        .isFloat({ min: -90, max: 90 })
        .withMessage("Invalid latitude"),

    body("longitude")
        .isFloat({ min: -180, max: 180 })
        .withMessage("Invalid longitude"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        next();
    }
];

module.exports = validateSchoolData;