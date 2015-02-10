function getAngleFromPoint(centrePoint, anglePoint) {
	var distanceFromXCenter = anglePoint.x - centrePoint.x,
		distanceFromYCenter = anglePoint.y - centrePoint.y,
		radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


	var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

	//If the segment is in the top left quadrant, we need to add another rotation to the angle
	if (distanceFromXCenter < 0 && distanceFromYCenter < 0) {
		angle += Math.PI * 2;
	}

	return {
		angle: angle,
		distance: radialDistanceFromCenter
	};
}