const db = require("../db/db");
const getDistance = require("../utils/getDistance");

const addSchool = async (req, res) => {

    try {

        const { name, address, latitude, longitude } = req.body;

        const sql =
            "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

        await db.execute(sql, [
            name,
            address,
            latitude,
            longitude
        ]);

        res.status(201).json({
            success: true,
            message: "School added successfully"
        });

    } catch (error) {

        console.log("ADD SCHOOL ERROR :", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

const listSchools = async (req, res) => {

    try {

        const { latitude, longitude } = req.query;

        if (
            latitude === undefined ||
            longitude === undefined
        ) {
            return res.status(400).json({
                success: false,
                message: "Latitude and longitude are required"
            });
        }

        if (
            isNaN(latitude) ||
            isNaN(longitude)
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid coordinates"
            });
        }

        const sql = "SELECT * FROM schools";

        const [schools] = await db.execute(sql);

        const sortedSchools = schools.map((school) => {

            const distance = getDistance(
                Number(latitude),
                Number(longitude),
                school.latitude,
                school.longitude
            );

            return {
                ...school,
                distance: Number(distance.toFixed(2))
            };
        });

        sortedSchools.sort((a, b) => a.distance - b.distance);

        res.status(200).json({
            success: true,
            count: sortedSchools.length,
            schools: sortedSchools
        });

    } catch (error) {

        console.log("LIST SCHOOL ERROR :", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports = {
    addSchool,
    listSchools
};