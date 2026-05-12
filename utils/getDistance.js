const getDistance = (userLat, userLon, schoolLat, schoolLon) => {

    const toRad = (value) => {
        return (value * Math.PI) / 180;
    };

    const earthRadius = 6371;

    const latDiff = toRad(schoolLat - userLat);
    const lonDiff = toRad(schoolLon - userLon);

    const a =
        Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
        Math.cos(toRad(userLat)) *
        Math.cos(toRad(schoolLat)) *
        Math.sin(lonDiff / 2) *
        Math.sin(lonDiff / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c;
};

module.exports = getDistance;